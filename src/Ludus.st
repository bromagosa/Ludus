Smalltalk createPackage: 'Ludus'!
Widget subclass: #AbstractScreen
	instanceVariableNames: 'inputHandler canvas context fps step'
	package: 'Ludus'!

!AbstractScreen methodsFor: 'accessing'!

canvas
	^ canvas
!

canvas: anObject
	canvas := anObject
!

context
	^ context
!

fps
	^ fps
!

fps: anInteger
	fps := anInteger
!

inputHandler
	^ inputHandler ifNil: [ inputHandler := InputHandler new canvas: self canvas ]
!

stepCount
	^ step
! !

!AbstractScreen methodsFor: 'attributes'!

backgroundColor: aColor
	self canvas at: 'style' put: ('background-color: ', aColor , ';')
!

height
	^ self canvas element height
!

height: anInteger
	self canvas at: 'height' put: anInteger.
!

hiddenStyle
	^ 'visibility: hidden; width: 0px; height: 0px; position: absolute; left: 0px; top: 0px;'
!

width
	^ self canvas element width
!

width: anInteger
	self canvas at: 'width' put: anInteger.
! !

!AbstractScreen methodsFor: 'audio'!

hasSound: aSoundUrl
	^ self sounds anySatisfy: [ :any | any src = aSoundUrl ]
!

loadSound: aSoundUrl
	(self hasSound: aSoundUrl) ifFalse: [
		| sound |
		sound := (Sound src: aSoundUrl).
		sound 
			cssClass: self class name;
			appendToJQuery: 'div.preloader' asJQuery.
		self sounds add: sound.
	]
!

soundNamed: aName
	^ self sounds detect: [ :each | each id = aName ] ifNone: [ nil ]
! !

!AbstractScreen methodsFor: 'control'!

everyStepNumber: anInteger do: aBlock
	(step \\ anInteger) = 0 ifTrue: aBlock
!

step
	self subclassResponsibility
! !

!AbstractScreen methodsFor: 'control - private'!

gameLoop
	"Do not override me, use #step and #draw instead"
	self isGameOver
		ifFalse: [[
			self currentScreen
				step;
				draw.
			step := step + 1.
			self gameLoop ] valueWithTimeout: (1000 / fps) ]
! !

!AbstractScreen methodsFor: 'drawing'!

clearCanvas
	self context
		clearRect: 0
		y: 0
		width: self canvas element width
		height: self canvas element height.
!

draw
	self subclassResponsibility
!

draw: somethingDrawable
	somethingDrawable drawOnCanvas: self canvas
!

drawBackground: aBackground
	aBackground drawOnCanvas: self canvas step: step
!

drawSprite: aSprite
	aSprite drawOnCanvas: self canvas step: step
!

drawSpriteCollection: aSpriteCollection
	aSpriteCollection
		do: [ :eachSprite | 
			self drawSprite: eachSprite ]
! !

!AbstractScreen methodsFor: 'fonts'!

addFont: aFontSrc named: aFontName
	'head' asJQuery prepend: 
		'<style type="text/css"> @font-face { font-family: "'
			, aFontName
			, '";src: local(''☺''), url('''
			, aFontSrc
			,''') format(''opentype'');}</style>'
! !

!AbstractScreen methodsFor: 'image preloading'!

preloadAnimation: anAnimation
	|image|
	image := anAnimation image.
	image 
		width: 1; 
		height: 1.
	'div.preloader' asJQuery append: image asJQuery.
!

preloadBackground: aBackground
	self preloadAnimation: aBackground
!

preloadSprite: aSprite
	self preloadAnimation: aSprite
! !

!AbstractScreen methodsFor: 'initialization'!

initialize
	super initialize.
	fps := 30.
	step := 1.
! !

AbstractScreen subclass: #Game
	instanceVariableNames: 'end sounds screens currentScreen debugMode preloader'
	package: 'Ludus'!
!Game commentStamp!
I am a game. You need to override a couple of my methods to make me usable:

**#startGame** Here you can define my intial conditions, such as the size of the canvas, my sounds, the background properties, the FPS, etc.

**#step**  Here you can define what has to be done at each game cycle, or step. This method should control posititions, collisions, mouse and keyboard events, etc. This method should not deal with any graphic properties, these should be dealt with by:

**#draw**  This is the method that controls my view. Here you should define the drawing of sprites and other graphic elements. Don't forget to clear the canvas before re-drawing sprites, if your game requires so.!

!Game methodsFor: 'accessing'!

currentScreen
	^ currentScreen ifNil: [ currentScreen := self ]
!

screens
	^ screens ifNil: [ screens := #() ]
!

sounds
	^ sounds ifNil: [ sounds := #() ]
! !

!Game methodsFor: 'control'!

end
	end := true
!

restart
	self
		kill;
		initialize;
		start.
!

start
	self appendToJQuery: ('body' asJQuery).
!

stop
	self end.
	self class stop.
! !

!Game methodsFor: 'control - testing'!

isGameOver
	^ end ifNil: [ end := false ]
! !

!Game methodsFor: 'initialization'!

startGame
	self subclassResponsibility
! !

!Game methodsFor: 'rendering'!

renderOn: html
	"Do not override me, use #startGame instead"
	preloader := html div 
		class: 'preloader'; 
		style: self hiddenStyle.
		
	canvas := html canvas.
	
	self canvas
		at: 'width' put: 250;
		at: 'height' put: 250;
		id: self class name.
	context := canvas element getContext: '2d'.

	self inputHandler bindEvents.

	self
		startGame;
		gameLoop
! !

!Game methodsFor: 'screens'!

addScreen: aScreen named: aString
	aScreen
		name: aString;
		game: self.
	self screens add: aScreen.
!

screenNamed: aString
	^ self screens detect: [ :which | which name = aString ] ifNone: [ nil ]
!

switchToGame
	currentScreen := self
!

switchToScreen: aScreen
	currentScreen := aScreen startScreen
!

switchToScreenNamed: aString
	self switchToScreen: (self screenNamed: aString)
! !

Game class instanceVariableNames: 'Instances DebugMode'!

!Game class methodsFor: 'control'!

start
	|instance|
	instance := self new start.
	^ instance
!

stop
	document asJQuery
		unbind: 'keydown';
		unbind: 'keyup'.
	('canvas#' , self name) asJQuery remove.
	'div.preloader' asJQuery remove.
!

stopAll
	self instances do: [ :each | each stop ].
	Instances := #().
! !

!Game class methodsFor: 'debug'!

debugMode
 	^ DebugMode ifNil: [ DebugMode := false ]
!

debugMode: aBoolean
 	DebugMode := aBoolean
!

setToggleDebug
	self debugMode: true
!

toggleDebugMode
	^ self debugMode: self debugMode not
!

unsetToggleDebug
	self debugMode: false
! !

!Game class methodsFor: 'initialization'!

initialize
	"uncomment if you want the game to start when loading the page"
"	'self start"
! !

!Game class methodsFor: 'instance creation'!

new
	| instance |
	instance := super new.
	Game instances add: instance.
	^ instance
! !

!Game class methodsFor: 'instance treatment'!

instances
	^ Instances ifNil: [ Instances := #() ]
! !

AbstractScreen subclass: #Screen
	instanceVariableNames: 'game name'
	package: 'Ludus'!
!Screen commentStamp!
I am a game screen. I need to implement #startScreen, #step and #draw, as these will be called by the game who owns me.
I can represent many things: levels, menu screens, or anything that needs to change the whole canvas.!

!Screen methodsFor: 'accessing'!

canvas
	^ self game canvas
!

context
	^ self game context
!

game
	^ game
!

game: anObject
	game := anObject
!

inputHandler
	^ self game inputHandler
!

name
	^ name ifNil: [ self class name ]
!

name: anObject
	name := anObject
! !

!Screen methodsFor: 'initialization'!

startScreen
	self subclassResponsibility
! !

!Screen class methodsFor: 'instance creation'!

named: aString
	| instance |
	instance := self new name: aString.
	^ instance
! !

Screen subclass: #Menu
	instanceVariableNames: 'options currentOption pointer optionSeparation pointerOriginY'
	package: 'Ludus'!

!Menu methodsFor: 'accessing'!

currentOption
	^ currentOption ifNil: [ currentOption := self options first ]
!

currentOption: anOption
	currentOption := anOption
!

optionSeparation
	^ optionSeparation ifNil: [ optionSeparation := 50 ]
!

optionSeparation: anObject
	optionSeparation := anObject
!

options
	^ options ifNil: [ options := #() ]
!

options: anObject
	options := anObject
!

pointer
	^ pointer
!

pointer: anObject
	pointer := anObject
!

pointerOriginY
	^ pointerOriginY ifNil: [ pointerOriginY := 100 ]
!

pointerOriginY: anObject
	pointerOriginY := anObject
! !

!Menu methodsFor: 'control'!

nextOption
	self 
		currentOption: 
			(self options at: 
				(((self options indexOf: self currentOption) + 1) min: self options size));
		placePointer.
!

placePointer
	self pointer y: (((self options indexOf: self currentOption) - 1) * self optionSeparation) +  self pointerOriginY
!

previousOption
	self 
		currentOption: 
			(self options at: 
				(((self options indexOf: self currentOption) - 1) max: 1)) ;
		placePointer.
!

step
	self inputHandler 
		onKeyPressed: Key downArrow do: [ self nextOption ];
		onKeyPressed: Key upArrow do: [ self previousOption ];
		onKeyPressed: Key enter do: [ self perform: self currentOption ];
		onKeyPressed: Key space do: [ self perform: self currentOption ]
! !

Object subclass: #Animation
	instanceVariableNames: 'spriteSheet currentFrameGroup frameGroups animating loop image'
	package: 'Ludus'!

!Animation methodsFor: 'animation'!

animating
	animating ifNil: [ animating := true ].
	
	^ (animating & (self loop | self atLastFrame not))
!

frameRate: anInteger
	self frameGroups do: [ :each | each frameRate: anInteger ]
!

loop
	^ loop ifNil: [ loop := true ]
!

loop: aBoolean
	loop := aBoolean
!

restartAnimation
	self stopAnimation.
	self currentFrameGroup toFirstFrame.
	self startAnimation.
!

startAnimation
	animating := true
!

stopAnimation
	animating := false
!

toggleAnimation
	animating := animating not
! !

!Animation methodsFor: 'aspect'!

newImage
	^ document createElement: 'img'
! !

!Animation methodsFor: 'attributes'!

image
	image ifNil: [ image := self newImage ].
	^ image
!

imageSrc: anImageUrl
	self image src: anImageUrl
! !

!Animation methodsFor: 'drawing'!

drawOnCanvas: aCanvas
	self subclassResponsibility
!

drawOnCanvas: aCanvas step: aStep
	self 
		drawOnCanvas: aCanvas;
		nextFrameWithStep: aStep.
! !

!Animation methodsFor: 'frames'!

addFrameGroupNamed: aString origin: anOriginPoint size: aSizePoint frameCount: anInteger
	self frameGroups 
		add: 
			(FrameGroup new 
				identifier: aString
				origin: anOriginPoint
				frameSize: aSizePoint
				frameCount: anInteger)
!

atFirstFrame
	^ self currentFrameGroup atFirstFrame
!

atLastFrame
	^ self currentFrameGroup atLastFrame
!

currentFrameGroup
	^ currentFrameGroup ifNil: [ self frameGroups first ]
!

currentFrameGroup: anIdentifier
	currentFrameGroup := self frameGroupNamed: anIdentifier.
!

frameGroupNamed: anIdentifier
	^ self frameGroups detect: [ :each | each identifier = anIdentifier ].
!

frameGroups
	^ frameGroups ifNil: [ frameGroups := Array new ]
!

nextFrame
	self animating ifTrue: [ self currentFrameGroup nextFrame ].
!

nextFrameGroup
	(self currentFrameGroup = self frameGroups last)
		ifFalse: [ 
			currentFrameGroup := 
				self frameGroups at: ((self frameGroups indexOf: self currentFrameGroup) + 1) ]
		ifTrue: [ currentFrameGroup := self frameGroups first ]
!

nextFrameWithStep: aStep
	(aStep \\ self currentFrameGroup frameRate) = 0 
		ifTrue: [ self nextFrame ]
!

toFirstFrame
	self currentFrameGroup toFirstFrame
! !

!Animation methodsFor: 'geometry'!

height
	^ self currentFrameGroup height
!

width
	^ self currentFrameGroup width
! !

Animation subclass: #Background
	instanceVariableNames: 'parallaxSpeed'
	package: 'Ludus'!

!Background methodsFor: 'drawing'!

drawOnCanvas: aCanvas step: aStep
	self isParallax 
		ifFalse: [ super drawOnCanvas: aCanvas step: aStep ]
		ifTrue: [ 
			self currentFrameGroup 
				drawFromBackground: self onCanvas: aCanvas;
				move ]
! !

!Background methodsFor: 'parallax'!

addParallaxNamed: aString origin: anOriginPoint size: aSizePoint speed: anInteger
	self frameGroups
		add: 
			(ParallaxImage new 
				identifier: aString
				origin: anOriginPoint
				size: aSizePoint
				speed: anInteger)
! !

!Background methodsFor: 'testing'!

isParallax
	^ self currentFrameGroup isParallax
! !

Animation subclass: #Sprite
	instanceVariableNames: 'speed position direction debugMode'
	package: 'Ludus'!
!Sprite commentStamp!
I am a Sprite. I need to have a spritesheet, which is an image file that displays all possible frames I can paint organized in an ordered fashion.
You define different frame groups for this spritesheet, and you can cycle through these framegroups and through the frames of each of them.
I have a direction, defined by a unit vector. This vector will always be a unit vector. If someone tries to force-set my direction to a vector that is not a unit one, I will just convert it.
I handle collisions with other sprites and sprite collections.
Of course, I also have a position, defined by cartesian coordinates.!

!Sprite methodsFor: 'attributes'!

centre
	^ ((self width / 2) + self x) @ ((self height / 2) + self y).
!

centre: aPoint
	| xOffset yOffset |
	xOffset := (self width / 2).
	yOffset := (self height / 2).

	self position: ((aPoint x - xOffset) @ (aPoint y - yOffset)).
!

direction
	"The direction is always a unit vector"
	direction ifNotNil: [
		| angle |
		direction y >= 0
			ifTrue: [ angle := Math atan: (direction x / direction y) ]
			ifFalse: [ angle := (Math atan: (direction x / direction y)) + Number pi ].
		direction := (Math sin: angle) @ (Math cos: angle) ].

	^ direction ifNil: [ direction := 0@1 ]
!

direction: aPoint
	"The direction is always a unit vector"
	| angle |
	aPoint y >= 0
		ifTrue: [ angle := Math atan: (aPoint x / aPoint y) ]
		ifFalse: [ angle := (Math atan: (aPoint x / aPoint y)) + Number pi ].
	direction := (Math sin: angle) @ (Math cos: angle).
!

position
	^ position ifNil: [ position := 0 @ 0 ]
!

position: aPoint
	^ position := aPoint
!

x
	^ self position x
!

x: anInteger
	self position x: anInteger
!

y
	^ self position y
!

y: anInteger
	self position y: anInteger
! !

!Sprite methodsFor: 'collisions'!

bottomCollidesWith: aSprite
	^ aSprite topCollidesWith: self
!

bottomCollidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [ :each | self bottomCollidesWith: each ]) notEmpty
!

bottomCollidesWithWhichOf: aSpriteCollection
	^ (aSpriteCollection detect: [ :each | self bottomCollidesWith: each ] ifNone: [ nil ])
!

collidesWith: aSprite
	| x0 x1 y0 y1 |
	x0 := self x + self width.
	x1 := aSprite x + aSprite width.
	y1 := aSprite y + aSprite height.
	y0 := self y + self height.

	^ (x0 > aSprite x) & (y0 > aSprite y) & (x1 > self x) & (y1 > self y).
!

collidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [ :each | self collidesWith: each ]) notEmpty
!

collidesWithWhichOf: aSpriteCollection
	^ (aSpriteCollection detect: [ :each | self collidesWith: each ] ifNone: [ nil ])
!

leftCollidesWith: aSprite
	^ aSprite rightCollidesWith: self
!

leftCollidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [ :each | self leftCollidesWith: each ]) notEmpty
!

leftCollidesWithWhichOf: aSpriteCollection
	^ (aSpriteCollection detect: [ :each | self leftCollidesWith: each ] ifNone: [ nil ])
!

rightCollidesWith: aSprite
	| x0  y0 y1 |
	x0 := self x + self width.
	y1 := aSprite y + aSprite height.
	y0 := self y + self height.

	^ (x0 >= aSprite x) & (y0 >= aSprite y) & (y1 >= self y) & (self x < aSprite x).
!

rightCollidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [ :each | self rightCollidesWith: each ]) notEmpty
!

rightCollidesWithWhichOf: aSpriteCollection
	^ (aSpriteCollection detect: [ :each | self rightCollidesWith: each ] ifNone: [ nil ])
!

topCollidesWith: aSprite
	| x0 x1 y0 y1 |
	x0 := self x + self width.
	x1 := aSprite x + aSprite width.
	y1 := aSprite y + aSprite height.

	 ^ (self y <= y1) & (x0 >= aSprite x) & (self y > aSprite y) & (self x < x1)
!

topCollidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [ :each | self topCollidesWith: each ]) notEmpty
!

topCollidesWithWhichOf: aSpriteCollection
	^ (aSpriteCollection detect: [ :each | self topCollidesWith: each ] ifNone: [ nil ])
! !

!Sprite methodsFor: 'drawing'!

drawBoundingBoxOnCanvas: aCanvas
	(aCanvas getContext: '2d')
		beginPath;
		strokeStyle: 'rgba(255,0,0,0.5)';
		lineWidth: 1;
		rect: self x y: self y width: self width height: self height;
		stroke.
!

drawOnCanvas: aCanvas
	self currentFrameGroup drawFromSprite: self onCanvas: aCanvas.
	Game debugMode ifTrue: [ self drawBoundingBoxOnCanvas: aCanvas ]
! !

!Sprite methodsFor: 'events'!

touchingMousePointer: mousePosition
	^ self containsPoint: mousePosition
! !

!Sprite methodsFor: 'geometry'!

containsPoint: aPoint
	^ (((self x <= aPoint x)
		and: [ self y <= aPoint y ])
			and: [ self width + self x >= aPoint x ])
				and: [ self height + self y >= aPoint y ]
!

distanceFromCentreTo: aPoint
	^ Math 
		sqrt: 
			((Math pow: ((self centre x) - (aPoint  x)) to: 2)
				+ (Math pow: ((self centre y) - (aPoint y)) to: 2))
! !

!Sprite methodsFor: 'movement'!

moveCentreBy: anOffset
	"aSprite moveCentreBy: 0@5"
	self centre: self centre + anOffset
!

moveCentreBy: anOffset speed: anInteger
	"aSprite moveCentreBy: 0@5"
	self centre: self centre + (anOffset * anInteger)
! !

!Sprite methodsFor: 'position'!

isAllInsideCanvas: aCanvas
	^ ((((self x) >= 0) 
		and: [ (self y) >= 0 ])
			and: [ self x + self width <= aCanvas element width ])
				and: [ self y + self height <= aCanvas element height ]
!

isBottomInsideCanvas: aCanvas
	^ (self y + self height) <= aCanvas element height
!

isInsideCanvas: aCanvas
	^ ((((self x + self width) >= 0) 
		and: [ (self y + self height) >= 0 ])
			and: [ self x <= aCanvas element width ])
				and: [ self y <= aCanvas element height ]
!

isLeftInsideCanvas: aCanvas
	^ self x >= 0
!

isRightInsideCanvas: aCanvas
	^ (self x + self width) <= aCanvas element width
!

isTopInsideCanvas: aCanvas
	^ self y >= 0
! !

Object subclass: #Drawable
	instanceVariableNames: 'origin size image position'
	package: 'Ludus'!

!Drawable methodsFor: 'accessing'!

image
	image ifNil: [ image := self newImage ].
	^ image
!

origin
	^ origin
!

origin: anObject
	origin := anObject
!

position
	^ position ifNil: [ position := 0@0 ]
!

position: aPosition
	position := aPosition
!

size
	^ size
!

size: anObject
	size := anObject
!

source: anImageUrl
	self image src: anImageUrl; yourself
!

source: aSourceString origin: anOriginPoint size: aSizePoint position: aPosition
	self 
		source: aSourceString;
		origin: anOriginPoint;
		size: aSizePoint;
		position: aPosition
! !

!Drawable methodsFor: 'aspect'!

newImage
	^ document createElement: 'img'
! !

!Drawable methodsFor: 'attributes'!

height
	^ self size y
!

width
	^ self size x
!

x
	^ self position x
!

x: anInteger
	self position x: anInteger
!

y
	^ self position y
!

y: anInteger
	self position y: anInteger
! !

!Drawable methodsFor: 'drawing'!

drawOnCanvas: aCanvas
	(aCanvas element getContext: '2d')
		drawImage: self image
		originX: self origin x
		originY: self origin y
		width: self width
		height: self height
		xPosition: self position x
		yPosition: self position y
		scaleWidth: self width
		scaleHeight: self height.
! !

!Drawable methodsFor: 'testing'!

isParallax
	^ false
! !

Drawable subclass: #FrameGroup
	instanceVariableNames: 'identifier frameCount currentFrameNumber frameRate'
	package: 'Ludus'!
!FrameGroup commentStamp!
I represent a group of ordered frames. Each frame is a clip rectangle that a Sprite can retrieve from me to paint itself.!

!FrameGroup methodsFor: 'accessing'!

frameCount
	^ frameCount
!

frameCount: anInteger
	frameCount := anInteger
!

frameSize
	^ self size
!

identifier
	^ identifier
!

identifier: anObject
	identifier := anObject
! !

!FrameGroup methodsFor: 'attributes'!

identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger
	self 
		identifier: aString;
		origin: anOriginPoint;
		size: aSizePoint;
		frameCount: anInteger.
! !

!FrameGroup methodsFor: 'drawing'!

drawFromSprite: aSprite onCanvas: aCanvas
	(aCanvas element getContext: '2d')
		drawImage: aSprite image
		originX: self origin x + self offset
		originY: self origin y
		frameWidth: self width
		frameHeight: self height
		x: aSprite x 
		y: aSprite y
		scaleWidth: self width
		scaleHeight: self height.
! !

!FrameGroup methodsFor: 'frames'!

currentFrameNumber
	^ currentFrameNumber ifNil: [ currentFrameNumber := 0 ]
!

frameRate
	^ frameRate ifNil: [ frameRate := 5 ].
!

frameRate: anInteger
	frameRate := anInteger
!

nextFrame
	self atLastFrame
		ifTrue: [ currentFrameNumber  := 0 ]
		ifFalse: [ currentFrameNumber := self currentFrameNumber + 1 ]
!

offset
	^ self width * self currentFrameNumber
!

toFirstFrame
	currentFrameNumber := 0
! !

!FrameGroup methodsFor: 'frames - testing'!

atFirstFrame
	^ self currentFrameNumber = 1
!

atLastFrame
	^ self currentFrameNumber = (self frameCount - 1)
! !

FrameGroup subclass: #ParallaxImage
	instanceVariableNames: 'xPosition1 xPosition2 speed'
	package: 'Ludus'!

!ParallaxImage methodsFor: 'accessing'!

speed
	^ speed ifNil: [ speed := 1 ]
!

speed: anInteger
	speed := anInteger
!

xPosition1
	^ xPosition1 ifNil: [ xPosition1 := 0 ]
!

xPosition2
	^ xPosition2 ifNil: [ xPosition2 := self width ]
! !

!ParallaxImage methodsFor: 'attributes'!

identifier: aString origin: anOriginPoint size: aSizePoint speed: anInteger
	self 
		identifier: aString;
		origin: anOriginPoint;
		size: aSizePoint;
		speed: anInteger.
! !

!ParallaxImage methodsFor: 'drawing'!

drawFromBackground: aBackground onCanvas: aCanvas
	(aCanvas element getContext: '2d')
		drawImage: aBackground image
		originX: self origin x + self offset
		originY: self origin y
		frameWidth: self width
		frameHeight: self height
		x: self xPosition1
		y: 0
		scaleWidth: self width
		scaleHeight: self height;
		drawImage: aBackground image
		originX: self origin x + self offset
		originY: self origin y
		frameWidth: self width
		frameHeight: self height
		x: self xPosition2
		y: 0
		scaleWidth: self width
		scaleHeight: self height.
! !

!ParallaxImage methodsFor: 'positions'!

move
	(self xPosition1 + self width) < 0
		ifTrue: [ xPosition1 := xPosition1 + self width	].
	xPosition1 := self xPosition1 - self speed.
	xPosition2 := self xPosition1 + self width.
! !

!ParallaxImage methodsFor: 'testing'!

isParallax
	^ true
! !

Object subclass: #InputHandler
	instanceVariableNames: 'canvas keys releasedKeys mousePosition mouseDown'
	package: 'Ludus'!

!InputHandler methodsFor: 'accessing'!

canvas
	^ canvas
!

canvas: aCanvas
	canvas := aCanvas
!

mouseDown
	^ mouseDown
! !

!InputHandler methodsFor: 'attributes'!

windowScrollLeft
	<return $(window).scrollLeft();>
!

windowScrollTop
	<return $(window).scrollTop();>
! !

!InputHandler methodsFor: 'events'!

mousePosition
	^ mousePosition ifNil: [ mousePosition := 0 @ 0 ]
!

onKeyPressed: aKeyCode do: aBlock
	((self keys at: aKeyCode)
		and: [ self releasedKeys at: aKeyCode ])
			ifTrue: [ 
				self releasedKeys at: aKeyCode put: false.
				aBlock value ]
!

onMouseClickDo: aBlock
	(self eventData: 'click')
		ifNil: [ self canvas onClick: aBlock ]
!

onMouseDownDo: aBlock
	(self eventData: 'mousedown')
		ifNil: [ self canvas onMouseDown: aBlock ]
!

onMouseUpDo: aBlock
	(self eventData: 'mouseup')
		ifNil: [ self canvas onMouseUp: aBlock ]
!

whileKeyPressed: aKeyCode do: aBlock
	((self keys at: aKeyCode ifAbsent: [ false ]) 
		and: [ self keys at: aKeyCode ]) 
			ifTrue: aBlock
!

whileMouseDownDo: aBlock
	self isMouseDown ifTrue: aBlock
!

whileMouseUpDo: aBlock
	self isMouseDown ifFalse: aBlock
! !

!InputHandler methodsFor: 'events - private'!

bindEvents
	document asJQuery
		keydown: [ :evt | self keyDown: evt ];
		keyup: [ :evt | self keyUp: evt ].
	self canvas 
		onMouseDown: [ :evt | self mouseDown: evt ];
		onMouseUp: [ :evt | self mouseUp: evt ];
		onMouseMove: [ :evt | self mouseMove: evt ].
!

eventData: anEvent
	<return $._data($('#' + self._canvas()._element().id)[0],'events')[anEvent]>
!

keyDown: evt
	self keys at: evt keyCode put: true.
!

keyUp: evt
	self keys at: evt keyCode put: false.
	self releasedKeys at: evt keyCode put: true
!

keys
	^ keys
!

mouseDown: evt
	mouseDown := true.
!

mouseMove: evt
	"Will work unless we add some padding to the canvas, which I'm not sure anyone would ever do..."

	| canvasRect |

	canvasRect := self canvas element getBoundingClientRect.
	mousePosition := 
		(evt clientX - canvasRect left - self canvas element clientLeft) 
			@ (evt clientY - canvasRect top - self canvas element clientTop).
!

mouseUp: evt
	mouseDown := false.
!

releasedKeys
	^ releasedKeys
! !

!InputHandler methodsFor: 'events - testing'!

isMouseDown
	^ mouseDown
! !

!InputHandler methodsFor: 'initialization'!

initialize
	super initialize.
	self initializeKeys.
	mouseDown := false.
!

initializeKeys
	keys := #().
	releasedKeys := #().
	255 timesRepeat: [ 
		keys add: false.
		releasedKeys add: true ]
! !

Object subclass: #Key
	instanceVariableNames: ''
	package: 'Ludus'!
!Key commentStamp!
I am a helper class that always returns the key code of a certain key.
I have a couple of methods defined for keys that have names, such as:

space (or spaceBar)
tab
enter
leftArrow
...

For the rest of the keys, my #doesNotUnderstand handles the conversion.!

!Key class methodsFor: 'error handling'!

doesNotUnderstand: aMessage
	^ aMessage selector size = 1
		ifTrue: [ self keyCodeFor: aMessage selector ]
		ifFalse: [ super doesNotUnderstand: aMessage ]
! !

!Key class methodsFor: 'key codes'!

downArrow
	^ 40
!

enter
	^ 13
!

esc
	^ 27
!

escape
	^ 27
!

keyCodeFor: aValue
	^ aValue isString 
		ifTrue: [ aValue asUppercase first asciiValue ]
		ifFalse: [ aValue asString asciiValue ]
!

leftArrow
	^ 37
!

rightArrow
	^ 39
!

space
	^ 32
!

spaceBar
	^ 32
!

tab
	^ 9
!

upArrow
	^ 38
! !

Object subclass: #NullSound
	instanceVariableNames: ''
	package: 'Ludus'!

!NullSound methodsFor: 'sound playing'!

play
	"self doNothing"
! !

Widget subclass: #Sound
	instanceVariableNames: 'src cssClass'
	package: 'Ludus'!
!Sound commentStamp!
I am a sound. I have a source audio file.
I can be played, paused, stopped or looped.!

!Sound methodsFor: 'accessing'!

cssClass
	^ cssClass ifNil: [ cssClass := '' ]
!

cssClass: aString
	cssClass := aString
!

id
	"We take the file name, without extension"
	^ (self src 
           	replaceRegexp: (RegularExpression fromString: '\..{2,3}$') with: '')
			replaceRegexp: (RegularExpression fromString: '.*\/') with: ''
!

src
	^ src
!

src: anUrl
	src := anUrl
! !

!Sound methodsFor: 'control'!

kill
	(document getElementById: self id) remove
! !

!Sound methodsFor: 'rendering'!

renderOn: html
	| sound |
	sound := html audio
		id: self id;
		class: self cssClass;
		src: self src.
	sound at: 'preload' put: true.
! !

!Sound methodsFor: 'sound playing'!

loop
	(document getElementById: self id) at: 'loop' put: true.
	self play.
!

pause
	(document getElementById: self id) pause.
!

play
	self stop.
	(document getElementById: self id) play.
!

resume
	(document getElementById: self id) play.
!

stop
	self pause.
	(document getElementById: self id) src: self src.
! !

!Sound methodsFor: 'xxxDoIt'!

xxxDoIt ^ [ self at: #play put: [] ] value
! !

!Sound class methodsFor: 'instance creation'!

src: anUrl
	^ self new src: anUrl
! !

Object subclass: #Text
	instanceVariableNames: 'fontName fontSize fontStyle color position contents outlineColor outlineSize'
	package: 'Ludus'!

!Text methodsFor: 'accessing'!

color
	^ color ifNil: [ color := 'red' ]
!

color: anObject
	color := anObject
!

contents
	^ contents ifNil: [ '' ]
!

contents: anObject
	contents := anObject
!

fontName
	^ fontName ifNil: [ fontName := 'Sans' ]
!

fontName: anObject
	fontName := anObject
!

fontSize
	^ fontSize ifNil: [ fontSize := 12 ]
!

fontSize: anObject
	fontSize := anObject
!

fontStyle
	^ fontStyle ifNil: [ '' ]
!

outlineColor
	^ outlineColor
!

outlineColor: aColorName
	outlineColor := aColorName.
!

outlineSize
	^ outlineSize
!

outlineSize: aSize
	outlineSize := aSize
!

position
	^ position ifNil: [ position := 10@10 ]
!

position: anObject
	position := anObject
! !

!Text methodsFor: 'attributes'!

beBold
	fontStyle := 'bold'
!

beItalic
	fontStyle := 'italic'
!

beNormal
	fontStyle := ''
!

fontDefinition
	^ self fontStyle  , ' ' , self fontSize printString , 'px ' , self fontName
!

removeOutline
	outlineColor := nil.
	outlineSize := nil.
! !

!Text methodsFor: 'drawing'!

drawOnCanvas: aCanvas
	(aCanvas element getContext: '2d')
		font: self fontDefinition;
		fillStyle: self color;
		fillText: self contents
			x: self position x
			y: self position y.
	(self outlineSize notNil & self outlineColor notNil) ifTrue: [
		(aCanvas element getContext: '2d')
			lineWidth: self outlineSize;
			strokeStyle: self outlineColor;
			strokeText: self contents
				x: self position x
				y: self position y ]
! !

