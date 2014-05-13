Smalltalk createPackage: 'OVNI'!
Game subclass: #OVNI
	instanceVariableNames: 'ship saucers scrollSpeed farBackground starField'
	package: 'OVNI'!

!OVNI methodsFor: 'accessing'!

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
		whileKeyPressed: Key leftArrow do: [ self ship goLeft ];
		whileKeyPressed: Key rightArrow do: [ self ship goRight ];
		whileKeyPressed: Key upArrow do: [ self ship goUp ];
		whileKeyPressed: Key downArrow do: [ self ship goDown ];
		whileKeyPressed: Key space do: [ (self soundNamed: 'laser') play ].
		
	self saucers do: [ :eachSaucer | 
		eachSaucer move.
		(eachSaucer isInsideCanvas: self canvas) 
			ifFalse: [
				eachSaucer
					x: self width;
					y: self height atRandom ]]
! !

!OVNI methodsFor: 'drawing'!

draw
	self 
		clearCanvas;
		drawFarBackground;
		drawSprite: self ship;
		drawSpriteCollection: self saucers;
		drawBackground: self starField.
!

drawFarBackground
	self drawBackground: self farBackground.
! !

Screen subclass: #OVNIStartScreen
	instanceVariableNames: ''
	package: 'OVNI'!

!OVNIStartScreen methodsFor: 'control'!

startScreen
	"self doNothing"
!

step
	"self doNothing"
! !

!OVNIStartScreen methodsFor: 'drawing'!

draw
	self game drawFarBackground
! !

Sprite subclass: #Saucer
	instanceVariableNames: ''
	package: 'OVNI'!

!Saucer methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		spriteSheet: 'images/ovni/saucer.png';
		addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6.
! !

!Saucer methodsFor: 'movement'!

move
	self moveCentreBy: -2 @ (-2 to: 2) atRandom.
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

