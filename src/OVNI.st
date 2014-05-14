Smalltalk createPackage: 'OVNI'!
Sprite subclass: #Bullet
	instanceVariableNames: 'speed acceleration'
	package: 'OVNI'!

!Bullet methodsFor: 'accessing'!

acceleration
	^ acceleration ifNil: [ acceleration := 2 ]
!

speed
	^ speed ifNil: [ speed := 5 ]
! !

!Bullet methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		spriteSheet: 'images/ovni/bullet.png';
		addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.
! !

!Bullet methodsFor: 'movement'!

accelerate
	speed := self speed + self acceleration
!

move
	self 
		moveCentreBy: self speed @ 0;
		accelerate
! !

Game subclass: #OVNI
	instanceVariableNames: 'ship saucers scrollSpeed farBackground starField bullets'
	package: 'OVNI'!

!OVNI methodsFor: 'accessing'!

bullets
	^ bullets ifNil: [ bullets := #() ]
!

farBackground
	^ farBackground ifNil: [ 
		farBackground := 
			Background new 
				spriteSheet: 'images/ovni/farback.gif';
				addParallaxNamed: 'background' origin: 0@0 size: 1782@600 speed: 1 ]
!

saucers
	^ saucers ifNil: [ 
		saucers := #().
		5 timesRepeat: [ 
			saucers add:
				(Saucer new centre: self width atRandom @ self height atRandom)
		].
		saucers.
	]
!

ship
	^ ship ifNil: [ ship := SpaceShip new centre: 105 @ (self height / 2) ]
!

starField
	^ starField ifNil: [ 
		starField := 
			Background new 
				spriteSheet: 'images/ovni/starfield.png';
				addParallaxNamed: 'background' origin: 0@0 size: 800@600 speed: 6 ]
! !

!OVNI methodsFor: 'control'!

startGame
	fps := 30.
	
	self width: 720; 
		height: 540;
		backgroundColor: 'black';
		addSound: 'sounds/ovni/background.ogg';
		addSound: 'sounds/ovni/laser.ogg';
		addScreen: OVNIStartScreen new.
	
	self switchToScreen: self screens first.
	
	(self soundNamed: 'background') loop.
!

step
	self 
		moveShip;
		moveSaucers;
		moveBullets.
	self inputHandler whileKeyPressed: Key space do: [ self shoot ]
! !

!OVNI methodsFor: 'drawing'!

draw
	self 
		clearCanvas;
		drawBackground: self farBackground;
		drawSpriteCollection: self saucers;
		drawSpriteCollection: self bullets;
		drawSprite: self ship;
		drawBackground: self starField.
! !

!OVNI methodsFor: 'game actions'!

shoot
	self bullets size < 6 ifTrue: [
		(self soundNamed: 'laser') play.
		self bullets 
			add: 
				(Bullet new centre: (self ship centre + ((self ship width / 2) @ 0)))]
! !

!OVNI methodsFor: 'sprite processing'!

moveBullets
	self bullets do: [ :eachBullet | 
		eachBullet move.
		(eachBullet isAllInsideCanvas: self canvas) 
			ifFalse: [ bullets remove: eachBullet ]]
!

moveSaucers
	self saucers do: [ :eachSaucer | 
		| killingBullet |
		killingBullet := (eachSaucer collidesWithWhichOf: self bullets).
		killingBullet ifNotNil: [ 
			eachSaucer explode.
			bullets remove: killingBullet ].
		
		eachSaucer move.
		
		((eachSaucer x + eachSaucer width) < 0) | eachSaucer dead
				ifTrue: [
					eachSaucer
						x: self width atRandom + self width;
						y: self height atRandom;
						dead: false ]]
!

moveShip
	self inputHandler
		whileKeyPressed: Key leftArrow do: [ 
			(self ship isLeftInsideCanvas: self canvas) 
				ifTrue: [ self ship goLeft ]];
		whileKeyPressed: Key rightArrow do: [
			(self ship isRightInsideCanvas: self canvas) 
				ifTrue: [ self ship goRight ]];
		whileKeyPressed: Key upArrow do: [
			(self ship isTopInsideCanvas: self canvas) 
				ifTrue: [ self ship goUp ]];
		whileKeyPressed: Key downArrow do: [
			(self ship isBottomInsideCanvas: self canvas) 
				ifTrue: [ self ship goDown ]].
! !

Screen subclass: #OVNIStartScreen
	instanceVariableNames: 'saucers title'
	package: 'OVNI'!

!OVNIStartScreen methodsFor: 'accessing'!

saucers
	^ saucers
!

saucers: anObject
	saucers := anObject
!

title
	^ title
!

title: anObject
	title := anObject
! !

!OVNIStartScreen methodsFor: 'control'!

startScreen
	self saucers: self game saucers.
	self saucers do: [ :each | 
		each 
			x: (self game width - 100) atRandom + 50;
			y: (self game height - 100) atRandom + 50 ].
			
	self title: 
		(Drawable new 
			source: 'images/ovni/title.png' 
			origin: 0@0 
			size: 600@196 
			position: 55 @ self game height)
!

step
	self title y > 40 ifTrue: [ self title y: self title y - 4 ].
	self saucers do: [ :each | each wander ].
	self inputHandler whileKeyPressed: Key space do: [ self game switchToGame ]
! !

!OVNIStartScreen methodsFor: 'drawing'!

draw
	self 
		drawBackground: self game farBackground;
		drawSpriteCollection: self saucers;
		draw: self title
! !

Sprite subclass: #Saucer
	instanceVariableNames: 'exploding dead'
	package: 'OVNI'!

!Saucer methodsFor: 'accessing'!

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
! !

!Saucer methodsFor: 'actions'!

die
	self 
		currentFrameGroup: 'flying';
		loop: true;
		dead: true.
!

explode
	self currentFrameGroup: 'explosion'.
	self
		loop: false; 
		exploding: true.
! !

!Saucer methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		spriteSheet: 'images/ovni/saucer.png';
		addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6;
		addFrameGroupNamed: 'explosion' origin: 0@40 size: 40@40 frameCount: 10.
	
	(self frameGroupNamed: 'explosion') frameRate: 2.
! !

!Saucer methodsFor: 'movement'!

move
	self moveCentreBy: -2 @ (5 atRandom - 3).
	(self exploding & self atLastFrame ) 
		ifTrue: [ 
			self 
				exploding: false;
				die ]
!

wander
	self moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).
! !

Sprite subclass: #SpaceShip
	instanceVariableNames: 'speed'
	package: 'OVNI'!

!SpaceShip methodsFor: 'accessing'!

speed
	^ speed ifNil: [ speed := 5 ]
! !

!SpaceShip methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		spriteSheet: 'images/ovni/ship.png';
		addFrameGroupNamed: 'flying' origin: 0@0 size: 64@29 frameCount: 4.
! !

!SpaceShip methodsFor: 'movement'!

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
! !

