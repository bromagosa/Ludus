Smalltalk createPackage: 'OVNI-Core'!
Game subclass: #OVGame
	instanceVariableNames: 'player canShoot phase difficulty ship lifeItem saucers bullets enemyBullets scoreText highScoreText playTimeText livesText phaseNumberText farBackground starField soundIsMute musicIsMute asteroids boss'
	package: 'OVNI-Core'!

!OVGame methodsFor: 'accessing'!

canShoot
	^ canShoot ifNil: [ canShoot := true ]
!

canShoot: aBoolean
	canShoot := aBoolean
!

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

addAsteroid
	self asteroids add: self newAsteroid
!

addBoss
	self boss: (OVBoss new toughness: self difficulty)
!

addSaucer
	self saucers add: self newSaucer
!

asteroids
	^ asteroids ifNil: [ 
		asteroids := #().
		(2 * self difficulty) timesRepeat: [ asteroids add: self newAsteroid ].
		asteroids ]
!

asteroids: aCollection
	asteroids := aCollection
!

boss
	^ boss
!

boss: aBoss
	boss := aBoss
!

bullets
	^ bullets ifNil: [ bullets := #() ]
!

enemyBullets
	^ enemyBullets ifNil: [ enemyBullets := #() ]
!

lifeItem
	^ lifeItem ifNil: [ lifeItem := OVLifeItem new centre: 3000 @ (self height / 2) ]
!

newAsteroid
	^ (OVAsteroid new 
		centre: self width atRandom + self width @ self height atRandom;
		toughness: self difficulty)
!

newSaucer
	^ (OVSaucer new 
		centre: self width atRandom + self width @ self height atRandom;
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
			outlineWidth: 1;
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
			outlineWidth: 1;
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
			outlineWidth: 1;
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
			outlineWidth: 1;
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
			outlineWidth: 1;
			fontName: 'ChangaOne';
			fontSize: 20;
			position: 10@55) ]
! !

!OVGame methodsFor: 'control'!

controlPhase
	self phase shouldAdvance 
		ifTrue: [ 
			self phase isLast ifFalse: [ self nextPhase ]]
!

end
	self debug: 'game over'.
	(self soundNamed: 'gameover') play.
	self switchToScreenNamed: 'end'.
!

newGame
	self
		debug: 'new game started';
		saucers: nil;
		asteroids: nil;
		boss: nil;
		phase: nil;
		farBackground: nil;
		starField: nil;
		resetSprites.
	self player reset.
!

nextPhase
	self saucers , self asteroids do: [ :each |
		each explode.
		each toughness: self difficulty * self phase number ].
	(self soundNamed: 'nextphase') play.
	(self soundNamed: 'explosion-1') play.
	self phase: self phase next.
	self phase startOnGame: self.
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
	self boss ifNotNil: [ self boss stepOnGame: self ].
	(self bullets, self enemyBullets, self saucers, self asteroids, { self ship. self lifeItem })
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
		clearCanvas.
	
	self 
		drawAll:
			{ self farBackground. self boss } , self saucers , self asteroids , self bullets
			, self enemyBullets , { self ship. self lifeItem. self starField. self livesText.
			self scoreText. self highScoreText. self playTimeText. self phaseNumberText }.
!

draw: somethingDrawable
	"Overriden to accept nil sprites too"
	somethingDrawable ifNotNil: [ super draw: somethingDrawable ]
! !

!OVGame methodsFor: 'game events'!

asteroidDied
	self player score: self player score + (2 * self difficulty)
!

asteroidEscaped
	self player score: ((self player score - self difficulty) max: 0)
!

asteroidWasHit
	(self soundNamed: 'explosion-1') play.
!

bossDied
	self player score: self player score + (10 * self difficulty).
	(self soundNamed: 'gamewon') play.
	self switchToScreenNamed: 'gameWon'
!

bossWasHit
	(self soundNamed: 'bosshit') play.
	self phase bossWasHit.
	self phase hitsToGo = 0 ifTrue: [ self boss explode ]
!

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
		loadSound: 'sounds/ovni/bosshit.ogg';
		loadSound: 'sounds/ovni/gamewon.ogg'.
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

Game subclass: #OVPhase
	instanceVariableNames: 'number saucersToGo shouldAdvance'
	package: 'OVNI-Core'!

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

startOnGame: aGame
	aGame
		addAsteroid;
		addSaucer.
	aGame starField speed: aGame starField speed + 1.
	aGame farBackground speed: aGame farBackground speed + 0.75.
! !

!OVPhase methodsFor: 'game events'!

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
	
	aNumber = self lastPhaseNumber 
		ifTrue: [ instance := OVBossPhase new ]
		ifFalse: [ 
			instance := self new.
			instance 
				number: aNumber;
				saucersToGo: ((20 to: (self lastPhaseNumber * 5) + 15 by: 5) at: aNumber) ].
				
	^ instance
! !

OVPhase subclass: #OVBossPhase
	instanceVariableNames: 'hitsToGo'
	package: 'OVNI-Core'!

!OVBossPhase methodsFor: 'accessing'!

hitsToGo
	^ hitsToGo
!

hitsToGo: aNumber
	hitsToGo := aNumber
!

number
	^ self class lastPhaseNumber
! !

!OVBossPhase methodsFor: 'control'!

startOnGame: aGame
	self hitsToGo: aGame difficulty * 5.
	aGame
		canShoot: false;
		addAsteroid;
		addBoss.
	aGame saucers removeAll.
	aGame starField speed: aGame starField speed + 1.
	aGame farBackground speed: aGame farBackground speed + 0.75.
! !

!OVBossPhase methodsFor: 'game events'!

bossWasHit
	self hitsToGo: self hitsToGo - 1.
	self hitsToGo = 0 ifTrue: [ self shouldAdvance: true ]
! !

Object subclass: #OVPlayer
	instanceVariableNames: 'lives score highScore gameStartTime'
	package: 'OVNI-Core'!

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

