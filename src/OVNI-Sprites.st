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
	^ OVSaucerState
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
	self shouldShoot ifTrue: [ aGame enemyShot: self newBullet ]
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

OVSaucer subclass: #OVSmartSaucer
	instanceVariableNames: ''
	package: 'OVNI-Sprites'!

!OVSmartSaucer methodsFor: 'as yet unclassified'!

alignedWith: aSprite
	^ (self y - aSprite y) abs < self alignmentThreshold
!

alignedWithWhichOf: aSpriteCollection
	^ aSpriteCollection detect: [ :which | self alignedWith: which ] ifNone: [ nil ]
!

alignmentThreshold
	^ 10
!

stepOnGame: aGame
	super step.
	(self alignedWith: aGame ship)
		ifTrue: [ self shootOnGame: aGame ]
		ifFalse: [ 
			| dangerousBullet |
			dangerousBullet := (self alignedWithWhichOf: aGame bullets).
			dangerousBullet 
				ifNotNil: [ self moveAwayFrom: dangerousBullet ] 
				ifNil: [ self moveTowards: aGame ship ]].
! !

FSMState subclass: #OVSaucerState
	instanceVariableNames: ''
	package: 'OVNI-Sprites'!

!OVSaucerState methodsFor: 'control'!

step
	self move.
! !

!OVSaucerState methodsFor: 'movement'!

move
	self context moveCentreBy: -2 @ (5 atRandom - 3).
! !

OVSaucerState subclass: #OVSaucerWanderingState
	instanceVariableNames: ''
	package: 'OVNI-Sprites'!

!OVSaucerWanderingState methodsFor: 'movement'!

move
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

