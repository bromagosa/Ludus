Smalltalk createPackage: 'Ludus-Site'!
Sprite subclass: #LCharacter
	instanceVariableNames: 'lastDirection'
	package: 'Ludus-Site'!

!LCharacter methodsFor: 'accessing'!

lastDirection
	^ lastDirection ifNil: [ lastDirection := 'up' ]
!

lastDirection: anObject
	lastDirection := anObject
!

speed
	^ 5
! !

!LCharacter methodsFor: 'control'!

stepOnGame: aGame
	self moveWithHandler: aGame inputHandler inCanvas: aGame canvas.
! !

!LCharacter methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		source: 'images/site/character.png';
		addFrameGroupNamed: 'walk-up' origin: 0@7 size: 37@48 frameCount: 3;
		addFrameGroupNamed: 'walk-right' origin: 0@55 size: 37@48 frameCount: 3;
		addFrameGroupNamed: 'walk-down' origin: 0@103 size: 37@48 frameCount: 3;
		addFrameGroupNamed: 'walk-left' origin: 0@151 size: 37@48 frameCount: 3;
		addFrameGroupNamed: 'stopped-up' origin: 37@7 size: 37@48 frameCount: 1;
		addFrameGroupNamed: 'stopped-right' origin: 37@55 size: 37@48 frameCount: 1;
		addFrameGroupNamed: 'stopped-down' origin: 37@103 size: 37@48 frameCount: 1;
		addFrameGroupNamed: 'stopped-left' origin: 37@151 size: 37@48 frameCount: 1.
	
	self currentFrameGroup: 'stopped-down'.
	
	self frameRate: 4.
! !

!LCharacter methodsFor: 'movement'!

goDown
	self 
		moveCentreBy: 0 @ 1 speed: self speed;
		currentFrameGroup: 'walk-down';
		lastDirection: 'down'
!

goLeft
	self 
		moveCentreBy: -1 @ 0 speed: self speed;
		currentFrameGroup: 'walk-left';
		lastDirection: 'left'
!

goRight
	self 
		moveCentreBy: (1 @ 0) speed: self speed;
		currentFrameGroup: 'walk-right';
		lastDirection: 'right'
!

goUp
	self 
		moveCentreBy: (0 @ -1) speed: self speed;
		currentFrameGroup: 'walk-up';
		lastDirection: 'up'
!

moveWithHandler: anInputHandler inCanvas: aCanvas
	self currentFrameGroup: 'stopped-' , self lastDirection.
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

Game subclass: #LSite
	instanceVariableNames: 'character tiles tileGenerator currentTileType'
	package: 'Ludus-Site'!

!LSite methodsFor: 'accessing'!

character
	^ character ifNil: [ character := LCharacter new ]
!

currentTileType
	^ currentTileType ifNil: [ currentTileType := 'sand-centre' ]
!

currentTileType: aType
	currentTileType := aType
!

newTileAt: aPoint type: aTileType
	self tiles at: aPoint put: aTileType
!

tileGenerator
	^ tileGenerator ifNil: [ tileGenerator := LTile new ]
!

tiles
	^ tiles ifNil: [ tiles := Dictionary new ]
! !

!LSite methodsFor: 'control'!

step
	self character stepOnGame: self.
	self inputHandler 
		onMouseClickDo: [
			self inputHandler mousePosition < ((self tileGenerator frameGroups size * 32) @ 32) 
				ifFalse: [
					self 
						newTileAt: 
							((self inputHandler mousePosition x // 32) * 32) 
								@ ((self inputHandler mousePosition y // 32) * 32)
						type: self currentTileType ]
				ifTrue: [
					self currentTileType: (self tileGenerator frameGroups at: (self inputHandler mousePosition x // 32) + 1)
		]
	]
! !

!LSite methodsFor: 'drawing'!

draw
	self 
		clearCanvas;
		drawTiles;
		drawTileSelector;
		draw: self character.
!

drawTileSelector
	self tileGenerator frameGroups withIndexDo: [ :each :index | 
		self tileGenerator 
			currentFrameGroup: each;
			position: ((index - 1) * 32) @ 0.
		self draw: self tileGenerator.
	]
!

drawTiles
	self tiles associationsDo: [ :eachAssoc | 
		self tileGenerator 
			position: eachAssoc key;
			currentFrameGroup: eachAssoc value.
		self draw: self tileGenerator ]
! !

!LSite methodsFor: 'initialization'!

startGame
	fps := 30.
	
	self
		width: window innerWidth; 
		height: window innerHeight.
	
	self
		loadSound: 'sounds/site/main-theme.ogg';
		loadSound: 'sounds/site/shop.ogg'.
	
	(self soundNamed: 'main-theme') loop.
		
	self canvas style: 'position: fixed; top: 0; left: 0'.
! !

Sprite subclass: #LTile
	instanceVariableNames: ''
	package: 'Ludus-Site'!

!LTile methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		source: 'images/site/open_tileset.png';
		addFrameGroupNamed: 'sand-centre' origin: 160@480 size: 32@32 frameCount: 1;
		addFrameGroupNamed: 'sand-left' origin: 384@480 size: 32@32 frameCount: 1;
		addFrameGroupNamed: 'sand-right' origin: 416@480 size: 32@32 frameCount: 1;
		addFrameGroupNamed: 'sand-top' origin: 416@512 size: 32@32 frameCount: 1;
		addFrameGroupNamed: 'sand-bottom' origin: 416@544 size: 32@32 frameCount: 1;
		addFrameGroupNamed: 'sand-top-left' origin: 192@512 size: 32@32 frameCount: 1;
		addFrameGroupNamed: 'sand-top-right' origin: 224@512 size: 32@32 frameCount: 1;
		addFrameGroupNamed: 'sand-bottom-left' origin: 192@544 size: 32@32 frameCount: 1;
		addFrameGroupNamed: 'sand-bottom-right' origin: 224@544 size: 32@32 frameCount: 1.
	
	self frameRate: 4.
! !

