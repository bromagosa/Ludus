Smalltalk createPackage: 'OVNI-Screens'!
Screen subclass: #OVGameOverScreen
	instanceVariableNames: 'gameOverText restartGameText'
	package: 'OVNI-Screens'!

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
			outlineWidth: 3;
			fontName: 'ChangaOne';
			fontSize: 92;
			position: 130@280).
	self restartGameText:
		(Text new 
			contents: 'Press SPACE to restart';
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineWidth: 2;
			fontName: 'ChangaOne';
			fontSize: 40;
			position: 170@320)
! !

Screen subclass: #OVGameWonScreen
	instanceVariableNames: 'gameWonText restartGameText'
	package: 'OVNI-Screens'!

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
	self game ship x > self game width
		ifTrue: [ self inputHandler onKeyPressed: Key space do: [ self game switchToScreenNamed: 'start' ]]
! !

!OVGameWonScreen methodsFor: 'drawing'!

draw
	self clearCanvas.
	self 
		draw: self game farBackground;
		draw: self gameWonText;
		draw: self game ship;
		draw: self game starField.
		
	self game ship x > self game width 
		ifTrue: [ self draw: self restartGameText ]
! !

!OVGameWonScreen methodsFor: 'initialization'!

startScreen
	self gameWonText:
		(Text new
			contents: 'YOU WON!!';
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineWidth: 3;
			fontName: 'ChangaOne';
			fontSize: 92;
			position: 170@280).
	self restartGameText:
		(Text new 
			contents: 'Press SPACE to restart';
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineWidth: 2;
			fontName: 'ChangaOne';
			fontSize: 40;
			position: 170@320)
! !

Menu subclass: #OVMenu
	instanceVariableNames: 'pointer'
	package: 'OVNI-Screens'!

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
	package: 'OVNI-Screens'!

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
				outlineWidth: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@250);
		optionsMenuText:
			(Text new 
				contents: 'OPTIONS';
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineWidth: 3;
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
	package: 'OVNI-Screens'!

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
				outlineWidth: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@120);
		difficultyText:
			(Text new 
				contents: 'DIFFICULTY: ' , self game difficulty printString;
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineWidth: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@200);
		muteSoundsText:
			(Text new 
				contents: 'SOUNDS: ' , (self game soundIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ]);
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineWidth: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@280); 
		muteMusicText:
			(Text new 
				contents: 'MUSIC: ' , (self game musicIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ]);
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineWidth: 3;
				fontName: 'ChangaOne';
				fontSize: 80;
				position: 150@360);
		debugModeText:
			(Text new 
				contents: 'DEBUG: ' , (Game debugMode ifTrue: [ 'ON' ] ifFalse: [ 'OFF' ]);
				color: 'rgba(90,113,26,0.7)';
				outlineColor: 'rgba(242,246,144,0.8)';
				outlineWidth: 3;
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

Screen subclass: #OVPauseScreen
	instanceVariableNames: 'gamePausedText resumeGameText'
	package: 'OVNI-Screens'!

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
			outlineWidth: 3;
			fontName: 'ChangaOne';
			fontSize: 92;
			position: 70@280).
	self resumeGameText:
		(Text new 
			contents: 'Press SPACE to resume';
			color: 'rgba(90,113,26,0.7)';
			outlineColor: 'rgba(242,246,144,0.8)';
			outlineWidth: 2;
			fontName: 'ChangaOne';
			fontSize: 40;
			position: 155@320)
! !

Screen subclass: #OVStartScreen
	instanceVariableNames: 'saucers title startGameText authorText'
	package: 'OVNI-Screens'!

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
			switchToState: OVSaucerWanderingState;
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
			outlineWidth: 1;
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
	self saucers do: [ :each | each stepOnGame: self game ].
	self inputHandler onKeyPressed: Key space do: [
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

