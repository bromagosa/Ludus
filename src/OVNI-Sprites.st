Smalltalk createPackage: 'OVNI-Sprites'!
Sprite subclass: #OVBullet
	instanceVariableNames: 'speed acceleration'
	package: 'OVNI-Sprites'!

!OVBullet methodsFor: 'accessing'!

acceleration
	^ acceleration ifNil: [ acceleration := 2 ]
!

speed
	^ speed ifNil: [ speed := 5 ]
! !

!OVBullet methodsFor: 'control'!

stepOnGame: aGame
	self move.
	(self isAllInsideCanvas: aGame canvas) 
		ifFalse: [ aGame bullets remove: self ]
! !

!OVBullet methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		source: 'images/ovni/bullet.png';
		addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.
! !

!OVBullet methodsFor: 'movement'!

accelerate
	speed := self speed + self acceleration
!

move
	self 
		moveCentreBy: self speed @ 0;
		accelerate
! !

OVBullet subclass: #OVEnemyBullet
	instanceVariableNames: ''
	package: 'OVNI-Sprites'!

!OVEnemyBullet methodsFor: 'accessing'!

acceleration
	^ acceleration ifNil: [ acceleration := -1 ]
!

speed
	^ speed ifNil: [ speed := 1 ]
! !

!OVEnemyBullet methodsFor: 'control'!

stepOnGame: aGame
	self move.
	(self isAllInsideCanvas: aGame canvas) 
		ifFalse: [ aGame enemyBullets remove: self ]
! !

!OVEnemyBullet methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		source: 'images/ovni/enemybullet.png';
		addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.
! !

Sprite subclass: #OVLifeItem
	instanceVariableNames: ''
	package: 'OVNI-Sprites'!

!OVLifeItem methodsFor: 'control'!

stepOnGame: aGame
	self move.
	(self collidesWith: aGame ship) 
		ifTrue: [
			aGame lifeItemCollected.
			self x: -20 ]
! !

!OVLifeItem methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		source: 'images/ovni/life.png';
		addFrameGroupNamed: 'life' origin: 0@0 size: 20@20 frameCount: 4;
		frameRate: 3.
! !

!OVLifeItem methodsFor: 'movement'!

move
	self x < 20 ifTrue: [ self x: 3000 ].
	self moveCentreBy: -2 @ (5 atRandom - 3).
! !

FSMSprite subclass: #OVSaucer
	instanceVariableNames: 'exploding dead toughness'
	package: 'OVNI-Sprites'!

!OVSaucer methodsFor: 'accessing'!

dead
	^ dead ifNil: [ dead := false ]
!

dead: aBoolean
	dead := aBoolean
!

defaultStateClass
	^ OVSaucerObservingState
!

exploding
	^ exploding ifNil: [ exploding := false ]
!

exploding: aBoolean
	exploding := aBoolean
!

newBullet
	^ OVEnemyBullet new centre: (self centre - ((self width / 2) @ 0))
!

shootProbability
	^ 200 / self toughness
!

toughness
	^ toughness ifNil: [ toughness := 1 ]
!

toughness: anInteger
	toughness := anInteger
! !

!OVSaucer methodsFor: 'actions'!

die
	self 
		currentFrameGroup: 'flying';
		loop: true;
		dead: true.
!

explode
	self 
		currentFrameGroup: 'exploding'; 
		toFirstFrame.
	self
		loop: false; 
		exploding: true.
!

respawnAtX: anX y: aY
	self 
		x: anX;
		y: aY;
		dead: false
!

shootOnGame: aGame
	aGame enemyShot: self newBullet
! !

!OVSaucer methodsFor: 'collisions'!

checkCollisionWith: aSpriteCollection
	| killingBullet |
	killingBullet := (self collidesWithWhichOf: aSpriteCollection).
	(killingBullet notNil & self exploding not) 
		ifTrue: [ 
			self explode.
			aSpriteCollection remove: killingBullet ].
! !

!OVSaucer methodsFor: 'control'!

checkShouldDie
	(self exploding & self atLastFrame ) 
		ifTrue: [ 
			self 
				exploding: false;
				die ]
!

shouldShoot
	^ self shootProbability atRandom = 1
!

stepOnGame: aGame
	super stepOnGame: aGame.
		
	self
		checkCollisionWith: aGame bullets;
		checkShouldDie.

	self isHit ifTrue: [ aGame saucerWasHit ].
	self isDead ifTrue: [ aGame saucerDied ].
	self escaped ifTrue: [ aGame saucerEscaped ].

	self shouldRespawn ifTrue: [ self respawnAtX: aGame width + aGame width atRandom y: aGame height atRandom ].
! !

!OVSaucer methodsFor: 'geometry'!

alignedWith: aSprite threshold: aThreshold
	^ (self centre y - aSprite centre y) abs < aThreshold
!

alignedWithWhichOf: aSpriteCollection threshold: aThreshold
	^ aSpriteCollection detect: [ :which | self alignedWith: which threshold: aThreshold ] ifNone: [ nil ]
! !

!OVSaucer methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		source: 'images/ovni/saucer.png';
		addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6;
		addFrameGroupNamed: 'exploding' origin: 0@40 size: 40@40 frameCount: 10.
	
	(self frameGroupNamed: 'exploding') frameRate: 2.
! !

!OVSaucer methodsFor: 'testing'!

escaped
	^ ((self x + self width) < 0)
!

isDead
	^ self dead
!

isHit
	^ self exploding and: [ self atFirstFrame ]
!

shouldRespawn
	^ self escaped | self dead
! !

FSMState subclass: #OVSaucerAvoidingState
	instanceVariableNames: 'bullet'
	package: 'OVNI-Sprites'!

!OVSaucerAvoidingState methodsFor: 'accessing'!

bullet
	^ bullet
!

bullet: anObject
	bullet := anObject
! !

!OVSaucerAvoidingState methodsFor: 'control'!

moveAwayFrom: aSprite
	self context moveCentreBy: -2 @ (aSprite y > self context y ifTrue: [ 2 atRandom * -1 ] ifFalse: [ 2 atRandom ]).
!

stepOnGame: aGame
	self moveAwayFrom: self bullet.
	(self context alignedWith: self bullet threshold: 50) 
		ifFalse: [ self switchToState: OVSaucerObservingState ].
! !

FSMState subclass: #OVSaucerObservingState
	instanceVariableNames: ''
	package: 'OVNI-Sprites'!

!OVSaucerObservingState methodsFor: 'control'!

stepOnGame: aGame
	(self context alignedWithWhichOf: aGame bullets threshold: 50)
		ifNotNil: [ :bullet |
			self switchToState: OVSaucerAvoidingState.
			self context currentState bullet: bullet ]
		ifNil: [
			(self context alignedWith: aGame ship threshold: 10)
				ifFalse: [ self switchToState: OVSaucerSeekingState ]
				ifTrue: [ self context shootOnGame: aGame].
			self move ]
! !

!OVSaucerObservingState methodsFor: 'movement'!

move
	self context moveCentreBy: -2 @ (5 atRandom - 3).
! !

FSMState subclass: #OVSaucerSeekingState
	instanceVariableNames: ''
	package: 'OVNI-Sprites'!

!OVSaucerSeekingState methodsFor: 'control'!

moveTowards: aSprite
	self context moveCentreBy: -2 @ (aSprite y > self context y ifTrue: [ 2 atRandom ] ifFalse: [ 2 atRandom * -1 ]).
!

stepOnGame: aGame
	self moveTowards: aGame ship.
	(self context alignedWith: aGame ship threshold: 10)
		ifTrue: [ self switchToState: OVSaucerObservingState ].
	(self context alignedWithWhichOf: aGame bullets threshold: 25) ifNotNil: [ :bullet | 
			self switchToState: OVSaucerAvoidingState.
			self context currentState bullet: bullet ]
! !

FSMState subclass: #OVSaucerWanderingState
	instanceVariableNames: ''
	package: 'OVNI-Sprites'!

!OVSaucerWanderingState methodsFor: 'control'!

stepOnGame: aGame
	self context moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).
! !

Sprite subclass: #OVSpaceShip
	instanceVariableNames: 'speed exploding'
	package: 'OVNI-Sprites'!

!OVSpaceShip methodsFor: 'accessing'!

exploding
	^ exploding ifNil: [ exploding := false ]
!

exploding: anObject
	exploding := anObject
!

newBullet
	^ OVBullet new centre: (self centre + ((self width / 2) @ 0))
!

speed
	^ speed ifNil: [ speed := 5 ]
!

speed: anObject
	speed := anObject
! !

!OVSpaceShip methodsFor: 'behaviour'!

explode
	self 
		currentFrameGroup: 'exploding'; 
		toFirstFrame;
		loop: false; 
		exploding: true.
!

shootOnGame: aGame
	aGame playerShot: self newBullet.
! !

!OVSpaceShip methodsFor: 'control'!

stepOnGame: aGame
	(self exploding and: [ self atLastFrame ])
		ifTrue: [ aGame playerDied ].
		
	(((self collidesWithAnyOf: aGame enemyBullets)
		or: [ (self collidesWithAnyOf: aGame saucers) ]) 
			and: [ self exploding not])
		ifTrue: [
			(aGame soundNamed: 'explosion-2') play.
			self explode ].
	
	aGame inputHandler onKeyPressed: Key space do: [ self shootOnGame: aGame ].
	self moveWithHandler: aGame inputHandler inCanvas: aGame canvas.
! !

!OVSpaceShip methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		source: 'images/ovni/ship.png';
		addFrameGroupNamed: 'flying' origin: 0@0 size: 64@29 frameCount: 4;
		addFrameGroupNamed: 'exploding' origin: 0@29 size: 64@29 frameCount: 8.
	
	(self frameGroupNamed: 'exploding') frameRate: 2.
! !

!OVSpaceShip methodsFor: 'movement'!

goDown
	self moveCentreBy: (0 @ 1) speed: self speed
!

goLeft
	self moveCentreBy: (-1 @ 0) speed: self speed
!

goRight
	self moveCentreBy: (1 @ 0) speed: self speed
!

goUp
	self moveCentreBy: (0 @ -1) speed: self speed
!

moveWithHandler: anInputHandler inCanvas: aCanvas
	anInputHandler
		whileKeyPressed: Key leftArrow do: [ 
			(self isLeftInsideCanvas: aCanvas) 
				ifTrue: [ self goLeft ]];
		whileKeyPressed: Key rightArrow do: [
			(self isRightInsideCanvas: aCanvas) 
				ifTrue: [ self goRight ]];
		whileKeyPressed: Key upArrow do: [
			(self isTopInsideCanvas: aCanvas) 
				ifTrue: [ self goUp ]];
		whileKeyPressed: Key downArrow do: [
			(self isBottomInsideCanvas: aCanvas) 
				ifTrue: [ self goDown ]].
! !

