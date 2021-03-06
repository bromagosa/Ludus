Smalltalk createPackage: 'OVNI-Drawables'!
Circle subclass: #OVBullet
	instanceVariableNames: 'speed acceleration'
	package: 'OVNI-Drawables'!

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
		color: 'rgba(200,0,30,0.8)';
		outlineColor: 'rgba(230,0,30,1)';
		outlineWidth: 1;
		radius: 3
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
	package: 'OVNI-Drawables'!

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
		color: 'rgba(0,200,30,0.8)';
		outlineColor: 'rgba(0,230,30,1)';
		outlineWidth: 1;
		radius: 3
! !

OVEnemyBullet subclass: #OVBossBullet
	instanceVariableNames: 'targetPosition'
	package: 'OVNI-Drawables'!

!OVBossBullet methodsFor: 'accessing'!

acceleration
	^ acceleration ifNil: [ acceleration := 1 ]
! !

!OVBossBullet methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		color: 'rgba(200,200,0,0.8)';
		outlineColor: 'rgba(200,200,0,1)';
		outlineWidth: 1;
		radius: 3
! !

!OVBossBullet methodsFor: 'movement'!

move
	self 
		moveCentreBy: self direction speed: self speed;
		accelerate
! !

FSMSprite subclass: #OVEnemy
	instanceVariableNames: 'exploding dead toughness'
	package: 'OVNI-Drawables'!

!OVEnemy methodsFor: 'accessing'!

dead
	^ dead ifNil: [ dead := false ]
!

dead: aBoolean
	dead := aBoolean
!

exploding
	^ exploding ifNil: [ exploding := false ]
!

exploding: aBoolean
	exploding := aBoolean
!

toughness
	^ toughness ifNil: [ toughness := 1 ]
!

toughness: anInteger
	toughness := anInteger
! !

!OVEnemy methodsFor: 'actions'!

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

!OVEnemy methodsFor: 'collisions'!

checkCollisionWith: aSpriteCollection
	| killingBullet |
	killingBullet := (self collidesWithWhichOf: aSpriteCollection).
	(killingBullet notNil & self exploding not) 
		ifTrue: [ 
			self explode.
			aSpriteCollection remove: killingBullet ].
! !

!OVEnemy methodsFor: 'control'!

checkShouldDie
	(self exploding & self atLastFrame ) 
		ifTrue: [ 
			self 
				exploding: false;
				die ]
! !

!OVEnemy methodsFor: 'testing'!

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

OVEnemy subclass: #OVAsteroid
	instanceVariableNames: ''
	package: 'OVNI-Drawables'!

!OVAsteroid methodsFor: 'accessing'!

defaultStateClass
	^ OVAsteroidMovingState
! !

!OVAsteroid methodsFor: 'control'!

stepOnGame: aGame
	super stepOnGame: aGame.
		
	self
		checkCollisionWith: aGame bullets;
		checkShouldDie.

	self isHit ifTrue: [ aGame asteroidWasHit ].
	self isDead ifTrue: [ aGame asteroidDied ].
	self escaped ifTrue: [ aGame asteroidEscaped ].

	self shouldRespawn ifTrue: [ self respawnAtX: aGame width + aGame width atRandom y: aGame height atRandom ].
! !

!OVAsteroid methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		source: 'images/ovni/asteroid.png';
		addFrameGroupNamed: 'flying' origin: 0@0 size: 30@30 frameCount: 64;
		addFrameGroupNamed: 'exploding' origin: 0@30 size: 30@30 frameCount: 10.
	
	self frameRate: 2.
! !

OVEnemy subclass: #OVBoss
	instanceVariableNames: 'isHit'
	package: 'OVNI-Drawables'!

!OVBoss methodsFor: 'accessing'!

defaultStateClass
	^ OVBossArrivingState
!

isHit
	^ isHit ifNil: [ isHit := false ]
!

isHit: aBoolean
	isHit := aBoolean
!

newBullet
	^ OVBossBullet new centre: (self centre - (40@26))
! !

!OVBoss methodsFor: 'actions'!

die
	self dead: true.
!

shootOnGame: aGame
	aGame 
		everyStepNumber: (35 / self toughness) rounded
		do: [
			| bullet |
			bullet := self newBullet.
			aGame enemyShot: (bullet direction: aGame ship centre - bullet centre) ]
! !

!OVBoss methodsFor: 'collisions'!

checkCollisionWith: aSpriteCollection
	| hittingBullet |
	hittingBullet := (self collidesWithWhichOf: aSpriteCollection).
	(hittingBullet notNil & self exploding not) 
		ifTrue: [ 
			self isHit: true.
			aSpriteCollection remove: hittingBullet ].
! !

!OVBoss methodsFor: 'control'!

stepOnGame: aGame
	super stepOnGame: aGame.
		
	self
		shootOnGame: aGame;
		checkCollisionWith: aGame bullets;
		checkShouldDie.

	self isHit ifTrue: [ 
		aGame bossWasHit. 
		self isHit: false ].
	
	self isDead ifTrue: [ aGame bossDied ].
! !

!OVBoss methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		source: 'images/ovni/boss.png';
		addFrameGroupNamed: 'flying' origin: 0@0 size: 128@128 frameCount: 6;
		addFrameGroupNamed: 'exploding' origin: 0@128 size: 128@128 frameCount: 20;
		frameRate: 2.
! !

OVEnemy subclass: #OVSaucer
	instanceVariableNames: ''
	package: 'OVNI-Drawables'!

!OVSaucer methodsFor: 'accessing'!

defaultStateClass
	^ OVSaucerObservingState
!

newBullet
	^ OVEnemyBullet new centre: (self centre - ((self width / 2) @ 0))
! !

!OVSaucer methodsFor: 'actions'!

shootOnGame: aGame
	aGame 
		everyStepNumber: (10 / self toughness) rounded
		do: [ aGame enemyShot: self newBullet ]
! !

!OVSaucer methodsFor: 'control'!

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
		addFrameGroupNamed: 'exploding' origin: 0@40 size: 40@40 frameCount: 10;
		frameRate: 2
! !

Sprite subclass: #OVLifeItem
	instanceVariableNames: ''
	package: 'OVNI-Drawables'!

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

Sprite subclass: #OVSpaceShip
	instanceVariableNames: 'speed exploding'
	package: 'OVNI-Drawables'!

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
	aGame playerShot: self newBullet
! !

!OVSpaceShip methodsFor: 'control'!

stepOnGame: aGame
	(self exploding and: [ self atLastFrame ])
		ifTrue: [ aGame playerDied ].
		
	((self collidesWithAnyOf: aGame enemyBullets , aGame saucers , aGame asteroids)
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
		addFrameGroupNamed: 'exploding' origin: 0@29 size: 64@29 frameCount: 8;
		frameRate: 2.
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

