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
	instanceVariableNames: 'character tiles tileGenerator tileInterval currentTileType'
	package: 'Ludus-Site'!

!LSite methodsFor: 'accessing'!

character
	^ character ifNil: [ character := LCharacter new ]
!

character: anObject
	character := anObject
!

currentTileType
	^ currentTileType
!

currentTileType: aType
	currentTileType := aType
!

newTileAt: aPoint type: aTileType
	((self tiles at: aPoint / 32) at: aPoint / 32) put: aTileType
!

tileGenerator
	^ tileGenerator ifNil: [ tileGenerator := LTileGenerator new ]
!

tileGenerator: anObject
	tileGenerator := anObject
!

tileInterval
	^ tileInterval ifNil: [ tileInterval := #(1 10) ]
!

tileInterval: anObject
	tileInterval := anObject
!

tiles
	^ tiles ifNil: [ tiles := #(#()) ]
!

tiles: anObject
	tiles := anObject
! !

!LSite methodsFor: 'control'!

step
	self character stepOnGame: self.
	
	1 to: 9 do: [ :number | self inputHandler onKeyPressed: (Key number: number) do: [ self tileInterval: {number * 20. (number * 20) + 9} ] ].
	
	self inputHandler
		onMouseClickDo: [
			self inputHandler mousePosition < ((self tileGenerator frameGroups size * 32) @ 32) 
				ifFalse: [
					self currentTileType ifNotNil: [
						self 
							newTileAt: 
								((self inputHandler mousePosition x // 32) * 32) 
									@ ((self inputHandler mousePosition y // 32) * 32)
							type: self currentTileType ]]
				ifTrue: [
					self currentTileType: (self tileGenerator frameGroups at: (self inputHandler mousePosition x // 32) + 1)
		]
	]
! !

!LSite methodsFor: 'drawing'!

draw
	self
		clearCanvas;
		drawTileSelector;
		drawTiles;
		draw: self character
!

drawTileSelector
	self drawTileSelectorFrom: self tileInterval first to: self tileInterval last
!

drawTileSelectorFrom: aNumber to: anotherNumber
	(aNumber to: anotherNumber) withIndexDo: [ :tileIndex :positionIndex | 
		self tileGenerator
			currentFrameGroup: (self tileGenerator frameGroups at: tileIndex);
			position: ((positionIndex - 1) * 32) @ 0.
		self draw: self tileGenerator.
		self tileGenerator drawBoundingBoxOnCanvas: self canvas
	].
!

drawTiles
	self tiles withIndexDo: [ :eachRow :x | 
		eachRow do: [ :eachTile :y |
			self tileGenerator 
				position: (x*32)@(y*32);
				currentFrameGroup: eachTile.
			self draw: self tileGenerator ]]
! !

!LSite methodsFor: 'initialization'!

resize
	self
		width: window innerWidth; 
		height: window innerHeight.
!

startGame
	fps := 30.
	
	self
		width: window innerWidth; 
		height: window innerHeight.
	
	window asJQuery resize: [ :event | self resize ].
	
	self
		loadSound: 'sounds/site/main-theme.ogg';
		loadSound: 'sounds/site/shop.ogg'.
	
	(self soundNamed: 'main-theme') loop.
		
	self canvas style: 'position: fixed; top: 0; left: 0; background-color: #82bb65;'.
! !

Sprite subclass: #LTileGenerator
	instanceVariableNames: ''
	package: 'Ludus-Site'!

!LTileGenerator methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		source: 'images/site/open_tileset.png';
		addAllTiles.
	
	self frameRate: 4.
! !

!LTileGenerator methodsFor: 'tiles'!

addAllTiles
1 to: 32 do: [:y | 
	1 to: 32 do: [:x | 
		self newTile: 'x' , x asString , 'y' , y asString position: x@y ]]
!

addFloorTiles
	self 
		newTile: 'floor-a' position: 1@0;
		newTile: 'floor-b' position: 2@0;
		newTile: 'floor-c' position: 3@0;
		newTile: 'floor-d' position: 4@0;
		newTile: 'floor-e' position: 5@0;
		newTile: 'floor-f' position: 6@0;
		newTile: 'floor-g' position: 7@0;
		newTile: 'floor-h' position: 8@0;
		newTile: 'floor-i' position: 9@0;
		newTile: 'floor-j' position: 10@0;
		newTile: 'floor-k' position: 11@0;
		newTile: 'floor-l' position: 12@0;
		newTile: 'floor-m' position: 13@0;
		newTile: 'floor-n' position: 14@0.
!

addGrassTiles

self
	newTile: 'grass-centre' position: 5@17;
	newTile: 'grass-left' position: 11@21;
	newTile: 'grass-right' position: 13@21;
	newTile: 'grass-top' position: 12@20;
	newTile: 'grass-bottom' position: 12@22;
	newTile: 'grass-top-left' position: 11@20;
	newTile: 'grass-top-right' position: 13@20;
	newTile: 'grass-bottom-left' position: 11@22;
	newTile: 'grass-bottom-right' position: 13@22;
		
	newTile: 'grass-sprouts' position: 0@35;
	newTile: 'grass-sprouts-stone' position: 1@35;
	newTile: 'grass-tree' position: 2@35;
	newTile: 'grass-stump' position: 3@35;
	newTile: 'grass-dry-tree' position: 4@35;
	newTile: 'grass-flowers' position: 6@18;
	newTile: 'grass-flowers-0' position: 6@19.
!

addSandTiles

self 
	newTile: 'sand-centre' position: 5@15;
	newTile: 'sand-left' position: 12@15;
	newTile: 'sand-right' position: 13@15;
	newTile: 'sand-top' position: 13@16;
	newTile: 'sand-bottom' position: 13@17;
	newTile: 'sand-top-left' position: 16@16;
	newTile: 'sand-top-right' position: 17@16;
	newTile: 'sand-bottom-left' position: 16@17;
	newTile: 'sand-bottom-right' position: 17@17.
!

newTile: anIdentifier position: aPosition
	self addFrameGroupNamed: anIdentifier origin: (aPosition x * 32)@(aPosition y * 32) size: 32@32 frameCount: 1
! !

