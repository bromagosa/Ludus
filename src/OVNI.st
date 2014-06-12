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

!OVBullet methodsFor: 'behaviour'!

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
	package: 'OVNI'!

!OVEnemyBullet methodsFor: 'accessing'!

acceleration
	^ acceleration ifNil: [ acceleration := -1 ]
!

speed
	^ speed ifNil: [ speed := 1 ]
! !

!OVEnemyBullet methodsFor: 'behaviour'!

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

Game subclass: #OVGame
	instanceVariableNames: 'player phase difficulty ship lifeItem saucers bullets enemyBullets scoreText highScoreText playTimeText livesText phaseNumberText farBackground starField soundIsMute musicIsMute'
	package: 'OVNI'!

!OVGame methodsFor: 'accessing'!

difficulty
	^ difficulty ifNil: [ difficulty := 2 ]
!

difficulty: anInteger
	self debug: 'setting difficulty to ' , anInteger asString.
	difficulty := anInteger.
	self saucers do: [ :each | each toughness: self difficulty ]
!

farBackground
	^ farBackground ifNil: [ 
		farBackground := 
			Background new 
				source: 'images/ovni/farback.gif';
				addParallaxNamed: 'background' origin: 0@0 size: 1782@600 speed: 1 ]
!

farBackground: aBackground
	farBackground := aBackground
!

musicIsMute
	^ musicIsMute ifNil: [ musicIsMute := false ]
!

musicIsMute: aBoolean
	musicIsMute := aBoolean
!

phase
	^ phase ifNil: [ phase := OVPhase number: 1 ]
!

phase: aPhase
	phase := aPhase
!

player
	^ player ifNil: [ player := OVPlayer new ]
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
				source: 'images/ovni/starfield.png';
				addParallaxNamed: 'background' origin: 0@0 size: 800@600 speed: 6 ]
!

starField: aBackground
	starField := aBackground
! !

!OVGame methodsFor: 'accessing - sprites'!

bullets
	^ bullets ifNil: [ bullets := #() ]
!

enemyBullets
	^ enemyBullets ifNil: [ enemyBullets := #() ]
!

lifeItem
	^ lifeItem ifNil: [ lifeItem := OVLifeItem new centre: 3000 @ (self height / 2) ]
!

newSaucer
	^ (OVSaucer new 
		centre: self width atRandom @ self height atRandom;
		toughness: self difficulty)
!

saucers
	^ saucers ifNil: [ 
		saucers := #().
		5 timesRepeat: [ saucers add: self newSaucer ].
		saucers ]
!

saucers: aCollection
	saucers := aCollection
!

ship
	^ ship ifNil: [ ship := OVSpaceShip new centre: 105 @ (self height / 2) ]
! !

!OVGame methodsFor: 'accessing - texts'!

highScoreText
	^ highScoreText ifNil: [ highScoreText := 
		(Text new 
			contents: self player highScore;
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 1;
			fontName: 'ChangaOne';
			fontSize: 20;
			position: 10@40) ]
!

livesText
	^ livesText ifNil: [ livesText := 
		(Text new 
			contents: self livesTextContents;
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 1;
			fontName: 'ChangaOne';
			fontSize: 20;
			position: 7@22) ]
!

livesTextContents
	^ String streamContents: [ :s |
		self player lives timesRepeat: [ s nextPut: '♥' ]]
!

phaseNumberText
	^ phaseNumberText ifNil: [ phaseNumberText := 
		(Text new 
			contents: 'PHASE ' , self phase number asString;
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 1;
			fontName: 'ChangaOne';
			fontSize: 20;
			position: 325@20) ]
!

playTimeText
	^ playTimeText ifNil: [ playTimeText := 
		(Text new 
			contents: self player playTimeString;
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 1;
			fontName: 'ChangaOne';
			fontSize: 20;
			position: 660@20) ]
!

scoreText
	^ scoreText ifNil: [ scoreText := 
		(Text new 
			contents: self player score;
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 1;
			fontName: 'ChangaOne';
			fontSize: 20;
			position: 10@55) ]
! !

!OVGame methodsFor: 'audio'!

soundNamed: aString
	^ self soundIsMute
		ifTrue: [ OVNullSound new ]
		ifFalse: [ super soundNamed: aString ].
! !

!OVGame methodsFor: 'control'!

controlPhase
	self phase shouldAdvance 
		ifTrue: [ 
			self phase isLast 
				ifTrue: [ 
					(self soundNamed: 'gamewon') play.
					self switchToScreenNamed: 'gameWon' ]
				ifFalse: [ self nextPhase ]]
!

end
	self debug: 'game over'.
	(self soundNamed: 'gameover') play.
	self switchToScreenNamed: 'end'.
!

newGame
	self debug: 'new game started'.
	self saucers: nil.
	self phase: nil.
	self farBackground: nil.
	self starField: nil.
	self resetSprites.
	self player reset.
!

nextPhase
	(self soundNamed: 'nextphase') play.
	(self soundNamed: 'explosion-1') play.
	self phase: self phase next.
	self saucers add: self newSaucer.
	self saucers do: [ :each | 
		each explode.
		each toughness: self difficulty * self phase number ].
	self starField speed: self starField speed + 1.
	self farBackground speed: self farBackground speed + 0.75.
!

resetSprites
	self debug: 'resetting sprites'.
	ship := nil.
	self saucers do: [ :each | each position: -100@0 ].
	self enemyBullets removeAll.
	self bullets removeAll.
!

step

	self stepSprites.
	self controlPhase.

	self inputHandler onKeyPressed: Key p do: [ self switchToScreenNamed: 'pause' ].

	self player updateHighScore.
	self updateTexts.
!

stepSprites
	(self bullets, self enemyBullets, self saucers, { self ship. self lifeItem })
		do: [ :eachSprite | eachSprite stepOnGame: self ]
!

toggleMuteMusic
	self debug: (self musicIsMute ifFalse: [ 'muting' ] ifTrue: [ 'activatig' ]), ' music'.
	self musicIsMute: self musicIsMute not.
	self musicIsMute 
		ifTrue: [ (self soundNamed: 'background') stop ]
		ifFalse: [ (self soundNamed: 'background') loop ]
!

toggleMuteSounds
	self debug: (self soundIsMute ifFalse: [ 'muting' ] ifTrue: [ 'activatig' ]), ' sounds'.
	self soundIsMute: self soundIsMute not
!

updateTexts
	self scoreText contents: self player score.
	self livesText contents: self livesTextContents.
	self highScoreText contents: self player highScore.
	self playTimeText contents: self player playTimeString.
	self phaseNumberText contents: 'PHASE ' , self phase number asString.
! !

!OVGame methodsFor: 'debug'!

debug: aString
	Game debugMode ifTrue: [ console log: 'debug: ' , aString ]
! !

!OVGame methodsFor: 'drawing'!

draw
	self
		clearCanvas;
		draw: self farBackground;
		drawAll: self saucers;
		drawAll: self bullets;
		drawAll: self enemyBullets;
		draw: self ship;
		draw: self lifeItem;
		draw: self starField;
		draw: self livesText;
		draw: self scoreText;
		draw: self highScoreText;
		draw: self playTimeText;
		draw: self phaseNumberText
! !

!OVGame methodsFor: 'game events'!

enemyShot: aBullet
	self enemyBullets add: aBullet
!

lifeItemCollected
	(self soundNamed: 'life') play.
	self player addLife.
!

playerDied
	self resetSprites.
	self player lives: self player lives - 1.
	self player lives < 0 ifTrue: [ self end ]
!

playerShot: aBullet
	self debug: 'shooting bullet'.
	(self soundNamed: 'laser') play.
	self bullets add: aBullet
!

saucerDied
	self player score: self player score + (5 * self difficulty)
!

saucerEscaped
	self player score: ((self player score - self difficulty) max: 0)
!

saucerWasHit
	(self soundNamed: 'explosion-1') play. 
	self phase saucerWasHit
! !

!OVGame methodsFor: 'game initialization'!

addScreens
	self
		addScreen: OVStartScreen new named: 'start';
		addScreen: OVMainMenu new named: 'mainMenu';
		addScreen: OVOptionsMenu new named: 'optionsMenu';
		addScreen: OVPauseScreen new named: 'pause';
		addScreen: OVGameWonScreen new named: 'gameWon';
		addScreen: OVGameOverScreen new named: 'end'.
!

loadSounds

	self
		loadSound: 'sounds/ovni/background.ogg';
		loadSound: 'sounds/ovni/laser.ogg';
		loadSound: 'sounds/ovni/select.ogg';
		loadSound: 'sounds/ovni/menu.ogg';
		loadSound: 'sounds/ovni/gameover.ogg';
		loadSound: 'sounds/ovni/explosion-1.ogg';
		loadSound: 'sounds/ovni/explosion-2.ogg';
		loadSound: 'sounds/ovni/life.ogg';
		loadSound: 'sounds/ovni/nextphase.ogg';
		loadSound: 'sounds/ovni/gamewon.ogg'
!

preloadImages
	self
		preloadBackground: self farBackground;
		preloadBackground: self starField;
		preloadSprite: self ship;
		preloadSprite: self saucers first.
!

startGame
	self debug: 'initializing game'.

	fps := 30.
	
	self
		width: 720; 
		height: 540;
		addScreens;
		loadSounds;
		preloadImages;
		addFont: 'fonts/ChangaOne-Regular.ttf' named: 'ChangaOne'.
	
	self switchToScreenNamed: 'start'.
	
	(self soundNamed: 'background') loop.
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
		draw: self game farBackground;
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

Screen subclass: #OVGameWonScreen
	instanceVariableNames: 'gameWonText restartGameText'
	package: 'OVNI'!

!OVGameWonScreen methodsFor: 'accessing'!

gameWonText
	^ gameWonText
!

gameWonText: anObject
	gameWonText := anObject
!

restartGameText
	^ restartGameText
!

restartGameText: aText
	restartGameText := aText
! !

!OVGameWonScreen methodsFor: 'control'!

step
	self game ship moveCentreBy: 5@0.
	self inputHandler onKeyPressed: Key space do: [ self game switchToScreenNamed: 'start' ].
! !

!OVGameWonScreen methodsFor: 'drawing'!

draw
	self clearCanvas.
	self 
		draw: self game farBackground;
		draw: self gameWonText;
		draw: self restartGameText;
		draw: self game ship;
		draw: self game starField.
! !

!OVGameWonScreen methodsFor: 'initialization'!

startScreen
	self gameWonText:
		(Text new
			contents: 'YOU WON!!';
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineSize: 3;
			fontName: 'ChangaOne';
			fontSize: 92;
			position: 170@280).
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

Sprite subclass: #OVLifeItem
	instanceVariableNames: ''
	package: 'OVNI'!

!OVLifeItem methodsFor: 'as yet unclassified'!

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

Menu subclass: #OVMenu
	instanceVariableNames: 'pointer'
	package: 'OVNI'!

!OVMenu methodsFor: 'accessing'!

currentOption
	| option |
	(self game soundNamed: 'menu') play.
	^ super currentOption.
! !

!OVMenu methodsFor: 'control'!

placePointer
	(self game soundNamed: 'menu') play.
	super placePointer
!

step
	self inputHandler 
		onKeyPressed: Key downArrow do: [ self nextOption ];
		onKeyPressed: Key upArrow do: [ self previousOption ];
		onKeyPressed: Key enter do: [ 
			(self game soundNamed: 'select') play.
			self game debug: 'option selected: ' , self currentOption.
			self perform: self currentOption ];
		onKeyPressed: Key space do: [ 
			(self game soundNamed: 'select') play.
			self game debug: 'option selected: ' , self currentOption.
			self perform: self currentOption ]
! !

OVMenu subclass: #OVMainMenu
	instanceVariableNames: 'startGameText optionsMenuText'
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
	^ self game 
		switchToGame; 
		newGame
! !

!OVMainMenu methodsFor: 'drawing'!

draw
	self 
		draw: self game farBackground;
		draw: startGameText;
		draw: optionsMenuText;
		draw: pointer
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
				source: 'images/ovni/pointer.png';
				addFrameGroupNamed: 'pointing' origin: 0@0 size: 65@40 frameCount: 1)
					position: 75@205;
					yourself).
! !

OVMenu subclass: #OVOptionsMenu
	instanceVariableNames: 'goBackText difficultyText muteMusicText muteSoundsText debugModeText'
	package: 'OVNI'!

!OVOptionsMenu methodsFor: 'accessing'!

debugModeText
	^ debugModeText
!

debugModeText: anObject
	debugModeText := anObject
!

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
	^ options ifNil: [ options := #(#selectGoBack #selectDifficulty #selectMuteSounds #selectMuteMusic #selectDebugMode) ]
!

pointerOriginY
	^ pointerOriginY ifNil: [ pointerOriginY := 75 ]
! !

!OVOptionsMenu methodsFor: 'control'!

selectDebugMode
	Game toggleDebugMode.
	self debugModeText contents: 'DEBUG: ' , (Game debugMode ifTrue: [ 'ON' ] ifFalse: [ 'OFF' ])
!

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
		draw: self game farBackground;
		draw: self goBackText;
		draw: self difficultyText;
		draw: self muteMusicText;
		draw: self muteSoundsText;
		draw: self debugModeText;
		draw: self pointer
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
				position: 150@120);
		difficultyText:
			(Text new 
				contents: 'DIFFICULTY: ' , self game difficulty printString;
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineSize: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@200);
		muteSoundsText:
			(Text new 
				contents: 'SOUNDS: ' , (self game soundIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ]);
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineSize: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@280); 
		muteMusicText:
			(Text new 
				contents: 'MUSIC: ' , (self game musicIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ]);
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineSize: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@360);
		debugModeText:
			(Text new 
				contents: 'DEBUG: ' , (Game debugMode ifTrue: [ 'ON' ] ifFalse: [ 'OFF' ]);
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineSize: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@440);
		pointer:
			((Sprite new
				source: 'images/ovni/pointer.png';
				addFrameGroupNamed: 'pointing' origin: 0@0 size: 65@40 frameCount: 1)
					position: 75@75;
					yourself).
! !

Object subclass: #OVNullSound
	instanceVariableNames: ''
	package: 'OVNI'!

!OVNullSound methodsFor: 'sound playing'!

play
	"self doNothing"
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

Game subclass: #OVPhase
	instanceVariableNames: 'number saucersToGo shouldAdvance'
	package: 'OVNI'!

!OVPhase methodsFor: 'accessing'!

next
	^ self class number: self number + 1
!

number
	^ number
!

number: anObject
	number := anObject
!

saucersToGo
	^ saucersToGo
!

saucersToGo: anObject
	saucersToGo := anObject
!

shouldAdvance
	^ shouldAdvance ifNil: [ shouldAdvance := false ]
!

shouldAdvance: aBoolean
	shouldAdvance := aBoolean
! !

!OVPhase methodsFor: 'control'!

saucerWasHit
	self saucersToGo: self saucersToGo - 1.
	self saucersToGo = 0 ifTrue: [ self shouldAdvance: true ]
! !

!OVPhase methodsFor: 'testing'!

isLast
	^ self number = self class lastPhaseNumber
! !

!OVPhase class methodsFor: 'accessing'!

lastPhaseNumber
	^ 4
! !

!OVPhase class methodsFor: 'instance creation'!

number: aNumber
	| instance |
	instance := self new.
	instance 
		number: aNumber;
		saucersToGo: ((20 to: (self lastPhaseNumber * 5) + 15 by: 5) at: aNumber).
	^ instance
! !

Object subclass: #OVPlayer
	instanceVariableNames: 'lives score highScore gameStartTime'
	package: 'OVNI'!

!OVPlayer methodsFor: 'accessing'!

gameStartTime
	^ gameStartTime ifNil: [ self resetStartTime. gameStartTime ]
!

highScore
	^ highScore ifNil: [ highScore := 0 ]
!

highScore: anObject
	highScore := anObject
!

lives
	^ lives ifNil: [ lives := 3 ]
!

lives: anObject
	lives := anObject
!

score
	^ score ifNil: [ score := 0 ]
!

score: anObject
	score := anObject
! !

!OVPlayer methodsFor: 'control'!

reset
	self 
		lives: 3;
		score: 0;
		resetStartTime
! !

!OVPlayer methodsFor: 'life handling'!

addLife
	self lives: ((self lives + 1) min: 3)
!

dieOnce
	self lives: (self lives - 1) max: 0
! !

!OVPlayer methodsFor: 'score handling'!

updateHighScore
	self highScore: (self highScore max: self score)
! !

!OVPlayer methodsFor: 'testing'!

isDead
	^ self lives = 0
! !

!OVPlayer methodsFor: 'time handling'!

playTime
	^ Date now - self gameStartTime
!

playTimeString
 	| date |
	date := Date new: self playTime.
	^ (date minutes < 10 ifTrue: [ '0' , date minutes asString ] ifFalse: [ date minutes asString ])
		, ':' , (date seconds < 10 ifTrue: [ '0' , date seconds asString ] ifFalse: [ date seconds asString ])
!

resetStartTime
	gameStartTime := Date now
! !

FSMSprite subclass: #OVSaucer
	instanceVariableNames: 'exploding dead toughness'
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

!OVSaucer methodsFor: 'behaviour'!

stepOnGame: aGame
	self
		checkCollisionWith: aGame bullets;
		move;
		checkShouldDie.

	self isHit ifTrue: [ aGame saucerWasHit ].
	self isDead ifTrue: [ aGame saucerDied ].
	self escaped ifTrue: [ aGame saucerEscaped ].

	self shouldRespawn ifTrue: [ self respawnAtX: aGame width + aGame width atRandom y: aGame height atRandom ].
	self shouldShoot ifTrue: [ aGame enemyShot: self newBullet ]
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

!OVSaucer methodsFor: 'movement'!

move
	self moveCentreBy: -2 @ (5 atRandom - 3).
!

wander
	self moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).
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
	package: 'OVNI'!

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

Sprite subclass: #OVSpaceShip
	instanceVariableNames: 'speed exploding'
	package: 'OVNI'!

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
!

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
			currentFrameGroup: 'flying';
			x: (self game width - 100) atRandom + 50;
			y: (self game height - 100) atRandom + 50 ].
			
	self title: 
		(Image new 
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
		(self game soundNamed: 'select') play.
		self game switchToScreenNamed: 'mainMenu' ]
! !

!OVStartScreen methodsFor: 'drawing'!

draw
	self 
		draw: self game farBackground;
		drawAll: self saucers;
		draw: self title;
		draw: self authorText.
		
	self title y < 75 ifTrue: [ self draw: self startGameText ]
! !

