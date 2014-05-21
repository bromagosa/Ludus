Smalltalk createPackage: 'OVNI'!
Sprite subclass: #OVBullet
	instanceVariableNames: 'speed acceleration'
	package: 'OVNI'!

!OVBullet methodsFor: 'accessing'!

acceleration
	^ acceleration ifNil: [ acceleration := 2 ]
!

speed
	^ speed ifNil: [ speed := 5 ]
! !

!OVBullet methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		imageSrc: 'images/ovni/bullet.png';
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
	package: 'OVNI'!

!OVEnemyBullet methodsFor: 'accessing'!

acceleration
	^ acceleration ifNil: [ acceleration := -1 ]
!

speed
	^ speed ifNil: [ speed := 1 ]
! !

!OVEnemyBullet methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		imageSrc: 'images/ovni/enemybullet.png';
		addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.
! !

Game subclass: #OVGame
	instanceVariableNames: 'ship saucers scrollSpeed farBackground starField bullets enemyBullets difficulty soundIsMute musicIsMute'
	package: 'OVNI'!

!OVGame methodsFor: 'accessing'!

bullets
	^ bullets ifNil: [ bullets := #() ]
!

difficulty
	^ difficulty ifNil: [ difficulty := 1 ]
!

difficulty: anInteger
	difficulty := anInteger
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

musicIsMute
	^ musicIsMute ifNil: [ musicIsMute := false ]
!

musicIsMute: aBoolean
	musicIsMute := aBoolean
!

saucers
	^ saucers ifNil: [ 
		saucers := #().
		5 timesRepeat: [ 
			saucers add:
				(OVSaucer new centre: self width atRandom @ self height atRandom)
		].
		saucers.
	]
!

ship
	^ ship ifNil: [ ship := OVSpaceShip new centre: 105 @ (self height / 2) ]
!

soundIsMute
	^ soundIsMute ifNil: [ soundIsMute := false ]
!

soundIsMute: aBoolean
	soundIsMute := aBoolean
!

starField
	^ starField ifNil: [ 
		starField := 
			Background new 
				imageSrc: 'images/ovni/starfield.png';
				addParallaxNamed: 'background' origin: 0@0 size: 800@600 speed: 6 ]
! !

!OVGame methodsFor: 'control'!

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
		addScreen: OVStartScreen new named: 'start';
		addScreen: OVMainMenu new named: 'mainMenu';
		addScreen: OVOptionsMenu new named: 'optionsMenu';
		addScreen: OVPauseScreen new named: 'pause';
		addScreen: OVGameOverScreen new named: 'end';
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
!

toggleMuteMusic
	self musicIsMute: self musicIsMute not.
	self musicIsMute 
		ifTrue: [ (self soundNamed: 'background') stop ]
		ifFalse: [ (self soundNamed: 'background') loop ]
!

toggleMuteSounds
	self soundIsMute: self soundIsMute not
! !

!OVGame methodsFor: 'drawing'!

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

!OVGame methodsFor: 'game actions'!

shoot
	self soundIsMute ifFalse: [ (self soundNamed: 'laser') play ].
	self bullets add: self ship newBullet
! !

!OVGame methodsFor: 'sprite processing'!

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

Screen subclass: #OVGameOverScreen
	instanceVariableNames: 'gameOverText restartGameText'
	package: 'OVNI'!

!OVGameOverScreen methodsFor: 'accessing'!

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

!OVGameOverScreen methodsFor: 'control'!

step
	self inputHandler onKeyPressed: Key space do: [ self game switchToScreenNamed: 'start' ]
! !

!OVGameOverScreen methodsFor: 'drawing'!

draw
	self 
		drawBackground: self game farBackground;
		draw: self gameOverText;
		draw: self restartGameText
! !

!OVGameOverScreen methodsFor: 'initialization'!

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

Menu subclass: #OVMainMenu
	instanceVariableNames: 'startGameText optionsMenuText pointer'
	package: 'OVNI'!

!OVMainMenu methodsFor: 'accessing'!

optionSeparation
	^ optionSeparation ifNil: [ optionSeparation := 80 ]
!

options
	^ options ifNil: [ options := #(#selectStartGame #selectOptions) ]
!

optionsMenuText
	^ optionsMenuText
!

optionsMenuText: anObject
	optionsMenuText := anObject
!

pointerOriginY
	^ pointerOriginY ifNil: [ pointerOriginY := 205 ]
!

startGameText
	^ startGameText
!

startGameText: anObject
	startGameText := anObject
! !

!OVMainMenu methodsFor: 'control'!

selectOptions
	self game switchToScreenNamed: 'optionsMenu'
!

selectStartGame
	^ self game switchToGame
! !

!OVMainMenu methodsFor: 'drawing'!

draw
	self 
		drawBackground: self game farBackground;
		draw: startGameText;
		draw: optionsMenuText;
		drawSprite: pointer
! !

!OVMainMenu methodsFor: 'initialization'!

startScreen
	self 
		startGameText:
			(Text new 
				contents: 'START';
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineSize: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@250);
		optionsMenuText:
			(Text new 
				contents: 'OPTIONS';
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineSize: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@330);
		pointer:
			((Sprite new
				imageSrc: 'images/ovni/pointer.png';
				addFrameGroupNamed: 'pointing' origin: 0@0 size: 65@40 frameCount: 1)
					position: 75@205;
					yourself).
! !

Menu subclass: #OVOptionsMenu
	instanceVariableNames: 'goBackText difficultyText muteMusicText muteSoundsText'
	package: 'OVNI'!

!OVOptionsMenu methodsFor: 'accessing'!

difficultyText
	^ difficultyText
!

difficultyText: anObject
	difficultyText := anObject
!

goBackText
	^ goBackText
!

goBackText: anObject
	goBackText := anObject
!

muteMusicText
	^ muteMusicText
!

muteMusicText: anObject
	muteMusicText := anObject
!

muteSoundsText
	^ muteSoundsText
!

muteSoundsText: anObject
	muteSoundsText := anObject
!

optionSeparation
	^ optionSeparation ifNil: [ optionSeparation := 80 ]
!

options
	^ options ifNil: [ options := #(#selectGoBack #selectDifficulty #selectMuteSounds #selectMuteMusic) ]
!

pointerOriginY
	^ pointerOriginY ifNil: [ pointerOriginY := 115 ]
! !

!OVOptionsMenu methodsFor: 'control'!

selectDifficulty
	self game difficulty: (self game difficulty \\ 4) + 1.
	self difficultyText contents: 'DIFFICULTY: ' , self game difficulty printString
!

selectGoBack
	self game switchToScreenNamed: 'mainMenu'.
	self game currentScreen placePointer.
!

selectMuteMusic
	self game toggleMuteMusic.
	self muteMusicText contents: 'MUSIC: ' , (self game musicIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ])
!

selectMuteSounds
	self game toggleMuteSounds.
	self muteSoundsText contents: 'SOUNDS: ' , (self game soundIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ])
! !

!OVOptionsMenu methodsFor: 'drawing'!

draw
	self 
		drawBackground: self game farBackground;
		draw: goBackText;
		draw: difficultyText;
		draw: muteMusicText;
		draw: muteSoundsText;
		drawSprite: pointer
! !

!OVOptionsMenu methodsFor: 'initialization'!

startScreen
	self 
		goBackText:
			(Text new 
				contents: 'BACK';
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineSize: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@160);
		difficultyText:
			(Text new 
				contents: 'DIFFICULTY: ' , self game difficulty printString;
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineSize: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@240);
		muteSoundsText:
			(Text new 
				contents: 'SOUNDS: ' , (self game soundIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ]);
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineSize: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@320); 
		muteMusicText:
			(Text new 
				contents: 'MUSIC: ' , (self game musicIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ]);
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineSize: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@400);
		pointer:
			((Sprite new
				imageSrc: 'images/ovni/pointer.png';
				addFrameGroupNamed: 'pointing' origin: 0@0 size: 65@40 frameCount: 1)
					position: 75@115;
					yourself).
! !

Screen subclass: #OVPauseScreen
	instanceVariableNames: 'gamePausedText resumeGameText'
	package: 'OVNI'!

!OVPauseScreen methodsFor: 'accessing'!

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

!OVPauseScreen methodsFor: 'drawing'!

draw
	self game draw.
	self 
		draw: self gamePausedText;
		draw: self resumeGameText
! !

!OVPauseScreen methodsFor: 'initialization'!

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
			position: 155@320)
! !

Sprite subclass: #OVSaucer
	instanceVariableNames: 'exploding dead shootProbability'
	package: 'OVNI'!

!OVSaucer methodsFor: 'accessing'!

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
	^ OVEnemyBullet new centre: (self centre - ((self width / 2) @ 0))
!

shootProbability
	^ shootProbability ifNil: [ shootProbability := 100 ]
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
		currentFrameGroup: 'explosion'; 
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

!OVSaucer methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		imageSrc: 'images/ovni/saucer.png';
		addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6;
		addFrameGroupNamed: 'explosion' origin: 0@40 size: 40@40 frameCount: 10.
	
	(self frameGroupNamed: 'explosion') frameRate: 2.
! !

!OVSaucer methodsFor: 'movement'!

move
	self moveCentreBy: -2 @ (5 atRandom - 3).
!

wander
	self moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).
! !

Sprite subclass: #OVSpaceShip
	instanceVariableNames: 'speed'
	package: 'OVNI'!

!OVSpaceShip methodsFor: 'accessing'!

newBullet
	^ OVBullet new centre: (self centre + ((self width / 2) @ 0))
!

speed
	^ speed ifNil: [ speed := 5 ]
! !

!OVSpaceShip methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		imageSrc: 'images/ovni/ship.png';
		addFrameGroupNamed: 'flying' origin: 0@0 size: 64@29 frameCount: 4.
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

Screen subclass: #OVStartScreen
	instanceVariableNames: 'saucers title startGameText authorText'
	package: 'OVNI'!

!OVStartScreen methodsFor: 'accessing'!

authorText
	^ authorText
!

authorText: someText
	authorText := someText
!

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

!OVStartScreen methodsFor: 'control'!

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
			outlineSize: 1;
			fontName: 'ChangaOne';
			fontSize: 40;
			position: 180@320).
			
	self authorText:
		(Text new 
			contents: 'Bernat Romagosa 2014';
			color: 'rgba(90,113,26,0.7)';
			fontName: 'ChangaOne';
			fontSize: 12;
			position: 580@530)
!

step
	self title y > 40 ifTrue: [ self title y: self title y - 4 ].
	self saucers do: [ :each | each wander ].
	self inputHandler onKeyPressed: Key space do: [ 
		self saucers do: [ :each | each x: -100 ].
		self game switchToScreenNamed: 'mainMenu' ]
! !

!OVStartScreen methodsFor: 'drawing'!

draw
	self 
		drawBackground: self game farBackground;
		drawSpriteCollection: self saucers;
		draw: self title;
		draw: self authorText.
		
	self title y < 75 ifTrue: [ self draw: self startGameText ]
! !

