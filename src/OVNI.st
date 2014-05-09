Smalltalk createPackage: 'OVNI'!
Game subclass: #OVNI
	instanceVariableNames: 'ship scrollSpeed farBackground starField'
	package: 'OVNI'!

!OVNI methodsFor: 'accessing'!

farBackground
	^ farBackground ifNil: [ 
		farBackground := 
			Background new 
				spriteSheet: 'images/ovni/farback.gif';
				addParallaxNamed: 'background' origin: 0@0 size: 1782@600 speed: 2 ]
!

ship
	^ ship ifNil: [ship := SpaceShip new centre: 105 @ (self height / 2)]
! !

!OVNI methodsFor: 'control'!

startGame
	fps := 30.

	self width: 720; 
		height: 540;
		backgroundColor: 'black'.
!

step
	self 
		whileKeyPressed: Key leftArrow do: [ self ship goLeft ];
		whileKeyPressed: Key rightArrow do: [ self ship goRight ];
		whileKeyPressed: Key upArrow do: [ self ship goUp ];
		whileKeyPressed: Key downArrow do: [ self ship goDown ]
! !

!OVNI methodsFor: 'drawing'!

draw
	self 
		clearCanvas;
		drawBackground: self farBackground;
		drawSprite: self ship
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
		addFrameGroupNamed: 'ship' origin: 0@0 size: 64@29 frameCount: 4.
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

