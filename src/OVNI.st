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
		imageSrc: 'images/ovni/bullet.png';
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

Bullet subclass: #EnemyBullet
	instanceVariableNames: ''
	package: 'OVNI'!

!EnemyBullet methodsFor: 'accessing'!

acceleration
	^ acceleration ifNil: [ acceleration := -1 ]
!

speed
	^ speed ifNil: [ speed := 1 ]
! !

!EnemyBullet methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		imageSrc: 'images/ovni/enemybullet.png';
		addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.
! !

Game subclass: #OVNI
	instanceVariableNames: 'ship saucers scrollSpeed farBackground starField bullets enemyBullets'
	package: 'OVNI'!

!OVNI methodsFor: 'accessing'!

bullets
	^ bullets ifNil: [ bullets := #() ]
!

enemyBullets
	^ enemyBullets ifNil: [ enemyBullets := #() ]
!

farBackground
	^ farBackground ifNil: [ 
		farBackground := 
			Background new 
				imageSrc: 'images/ovni/farback.gif';
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
				imageSrc: 'images/ovni/starfield.png';
				addParallaxNamed: 'background' origin: 0@0 size: 800@600 speed: 6 ]
! !

!OVNI methodsFor: 'control'!

end
	ship := nil.
	self enemyBullets removeAll.
	self bullets removeAll.
	self switchToScreenNamed: 'end'.
!

startGame
	fps := 30.
	
	self
		width: 720; 
		height: 540;
		backgroundColor: 'black';
		addSound: 'sounds/ovni/background.ogg';
		addSound: 'sounds/ovni/laser.ogg';
		addScreen: OVNIStartScreen new named: 'start';
		addScreen: OVNIPauseScreen new named: 'pause';
		addScreen: OVNIGameOverScreen new named: 'end';
		addFont: 'fonts/ChangaOne-Regular.ttf' named: 'ChangaOne'.
	
	self switchToScreenNamed: 'start'.
	
	(self soundNamed: 'background') loop.
!

step
	self 
		controlShip;
		controlSaucers;
		controlBullets.
	self inputHandler 
		onKeyPressed: Key space do: [ self shoot ];
		onKeyPressed: Key p do: [ self switchToScreenNamed: 'pause' ].
! !

!OVNI methodsFor: 'drawing'!

draw
	self 
		clearCanvas;
		drawBackground: self farBackground;
		drawSpriteCollection: self saucers;
		drawSpriteCollection: self bullets;
		drawSpriteCollection: self enemyBullets;
		drawSprite: self ship;
		drawBackground: self starField.
! !

!OVNI methodsFor: 'game actions'!

shoot
	(self soundNamed: 'laser') play.
	self bullets add: self ship newBullet
! !

!OVNI methodsFor: 'sprite processing'!

controlBullets
	self bullets do: [ :eachBullet | 
		eachBullet move.
		(eachBullet isAllInsideCanvas: self canvas) 
			ifFalse: [ bullets remove: eachBullet ]].
	self enemyBullets do: [ :eachBullet | 
		eachBullet move.
		(eachBullet isAllInsideCanvas: self canvas) 
			ifFalse: [ enemyBullets remove: eachBullet ]]
!

controlSaucers
	self saucers do: [ :eachSaucer | 
		eachSaucer 
			checkCollisionWith: self bullets;
			step.
		eachSaucer shouldRespawn ifTrue: [
			eachSaucer 
				respawnAtX: self width + self width atRandom y: self height atRandom ].
		eachSaucer shouldShoot ifTrue: [ self enemyBullets add: eachSaucer newBullet ]].
!

controlShip
	((self ship collidesWithAnyOf: self enemyBullets)
		or: [ (self ship collidesWithAnyOf: self saucers) ])
			ifTrue: [ self end ].
	self ship moveWithHandler: self inputHandler inCanvas: self canvas.
! !

Screen subclass: #OVNIGameOverScreen
	instanceVariableNames: 'gameOverText restartGameText'
	package: 'OVNI'!

!OVNIGameOverScreen methodsFor: 'accessing'!

gameOverText
	^ gameOverText
!

gameOverText: anObject
	gameOverText := anObject
!

restartGameText
	^ restartGameText
!

restartGameText: aText
	restartGameText := aText
! !

!OVNIGameOverScreen methodsFor: 'control'!

step
	self inputHandler onKeyPressed: Key space do: [ self game switchToScreenNamed: 'start' ]
! !

!OVNIGameOverScreen methodsFor: 'drawing'!

draw
	self 
		drawBackground: self game farBackground;
		draw: self gameOverText;
		draw: self restartGameText
! !

!OVNIGameOverScreen methodsFor: 'initialization'!

startScreen
	self gameOverText:
		(Text new 
			contents: 'GAME OVER';
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 3;
			fontName: 'ChangaOne';
			fontSize: 92;
			position: 130@280).
	self restartGameText:
		(Text new 
			contents: 'Press SPACE to restart';
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 2;
			fontName: 'ChangaOne';
			fontSize: 40;
			position: 170@320)
! !

Screen subclass: #OVNIMainMenu
	instanceVariableNames: ''
	package: 'OVNI'!

Screen subclass: #OVNIPauseScreen
	instanceVariableNames: 'gamePausedText resumeGameText'
	package: 'OVNI'!

!OVNIPauseScreen methodsFor: 'accessing'!

gamePausedText
	^ gamePausedText
!

gamePausedText: anObject
	gamePausedText := anObject
!

resumeGameText
	^ resumeGameText
!

resumeGameText: anObject
	resumeGameText := anObject
!

step
	self inputHandler onKeyPressed: Key space do: [ self game switchToGame ]
! !

!OVNIPauseScreen methodsFor: 'drawing'!

draw
	self game draw.
	self 
		draw: self gamePausedText;
		draw: self resumeGameText
! !

!OVNIPauseScreen methodsFor: 'initialization'!

startScreen
	self gamePausedText:
		(Text new 
			contents: 'GAME PAUSED';
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 3;
			fontName: 'ChangaOne';
			fontSize: 92;
			position: 70@280).
	self resumeGameText:
		(Text new 
			contents: 'Press SPACE to resume';
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 2;
			fontName: 'ChangaOne';
			fontSize: 40;
			position: 120@320)
! !

Screen subclass: #OVNIStartScreen
	instanceVariableNames: 'saucers title startGameText'
	package: 'OVNI'!

!OVNIStartScreen methodsFor: 'accessing'!

saucers
	^ saucers
!

saucers: anObject
	saucers := anObject
!

startGameText
	^ startGameText
!

startGameText: someText
	startGameText := someText
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
			position: 55 @ self game height).
			
	self startGameText:
		(Text new 
			contents: 'Press SPACE to start';
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 2;
			fontName: 'ChangaOne';
			fontSize: 40;
			position: 180@320)
!

step
	self title y > 40 ifTrue: [ self title y: self title y - 4 ].
	self saucers do: [ :each | each wander ].
	self inputHandler onKeyPressed: Key space do: [ 
		self saucers do: [ :each | each x: -100 ].
		self game switchToGame ]
! !

!OVNIStartScreen methodsFor: 'drawing'!

draw
	self 
		drawBackground: self game farBackground;
		drawSpriteCollection: self saucers;
		draw: self title.
		
	self title y < 75 ifTrue: [ self draw: self startGameText ]
! !

Sprite subclass: #Saucer
	instanceVariableNames: 'exploding dead shootProbability'
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
!

newBullet
	^ EnemyBullet new centre: (self centre - ((self width / 2) @ 0))
!

shootProbability
	^ shootProbability ifNil: [ shootProbability := 100 ]
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
!

respawnAtX: anX y: aY
	self 
		x: anX;
		y: aY;
		dead: false
! !

!Saucer methodsFor: 'collisions'!

checkCollisionWith: aSpriteCollection
	| killingBullet |
	killingBullet := (self collidesWithWhichOf: aSpriteCollection).
	(killingBullet notNil & self exploding not) 
		ifTrue: [ 
			self explode.
			aSpriteCollection remove: killingBullet ].
! !

!Saucer methodsFor: 'control'!

checkShouldDie
	(self exploding & self atLastFrame ) 
		ifTrue: [ 
			self 
				exploding: false;
				die ]
!

shouldRespawn
	^ ((self x + self width) < 0) | self dead
!

shouldShoot
	^ self shootProbability atRandom = 1
!

step
	self 
		move;
		checkShouldDie
! !

!Saucer methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		imageSrc: 'images/ovni/saucer.png';
		addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6;
		addFrameGroupNamed: 'explosion' origin: 0@40 size: 40@40 frameCount: 10.
	
	(self frameGroupNamed: 'explosion') frameRate: 2.
! !

!Saucer methodsFor: 'movement'!

move
	self moveCentreBy: -2 @ (5 atRandom - 3).
!

wander
	self moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).
! !

Sprite subclass: #SpaceShip
	instanceVariableNames: 'speed'
	package: 'OVNI'!

!SpaceShip methodsFor: 'accessing'!

newBullet
	^ Bullet new centre: (self centre + ((self width / 2) @ 0))
!

speed
	^ speed ifNil: [ speed := 5 ]
! !

!SpaceShip methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		imageSrc: 'images/ovni/ship.png';
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

