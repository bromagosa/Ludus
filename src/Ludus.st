Smalltalk createPackage: 'Ludus'!
Object subclass: #FrameGroup
	instanceVariableNames: 'identifier origin frameSize frameCount currentFrameNumber frameRate'
	package: 'Ludus'!
!FrameGroup commentStamp!
I represent a group of ordered frames. Each frame is a clip rectangle that a Sprite can retrieve from me to paint itself.!

!FrameGroup methodsFor: 'attributes'!

height
	^ frameSize y
!

identifier
	^ identifier
!

identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger
	identifier := aString.
	origin := anOriginPoint.
	frameSize := aSizePoint.
	frameCount := anInteger.
!

origin
	^ origin
!

width
	^ frameSize x
! !

!FrameGroup methodsFor: 'frames'!

atLastFrame
	^ currentFrameNumber = (frameCount - 1)
!

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
		ifTrue: [ currentFrameNumber := 0 ]
		ifFalse: [ currentFrameNumber := currentFrameNumber + 1 ]
!

offset
	^ self width * self currentFrameNumber
! !

!FrameGroup class methodsFor: 'instance creation'!

identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger
	^ self new identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger
! !

Widget subclass: #Game
	instanceVariableNames: 'canvas context fps keys step end mousePosition mouseDown sounds'
	package: 'Ludus'!
!Game commentStamp!
I am a game. You need to override a couple of my methods to make me usable:

**#startGame** Here you can define my intial conditions, such as the size of the canvas, my sounds, the background properties, the FPS, etc.

**#step**  Here you can define what has to be done at each game cycle, or step. This method should control posititions, collisions, mouse and keyboard events, etc. This method should not deal with any graphic properties, these should be dealt with by:

**#draw** → This is the method that controls my view. Here you should define the drawing of sprites and other graphic elements. Don't forget to clear the canvas before re-drawing sprites, if your game requires so.!

!Game methodsFor: 'attributes'!

backgroundColor: aColor
	canvas at: 'style' put: ('background-color: ', aColor , ';')
!

height
	^ canvas element height
!

height: anInteger
	canvas at: 'height' put: anInteger.
!

width
	^ canvas element width
!

width: anInteger
	canvas at: 'width' put: anInteger.
!

windowScrollLeft
	<return $(window).scrollLeft();>
!

windowScrollTop
	<return $(window).scrollTop();>
! !

!Game methodsFor: 'audio'!

addSound: aSoundUrl
	| sound |
	sound := (Sound src: aSoundUrl).
	sounds add: sound.
	sound appendToJQuery: 'body' asJQuery.
!

soundNamed: aName
	^ sounds detect: [ :each | each id = aName ]
! !

!Game methodsFor: 'control'!

end
	end := true
!

everyStepNumber: anInteger do: aBlock
	(step \\ anInteger) = 0 ifTrue: aBlock
!

gameLoop
	"Do not override me, use #step and #draw instead"
	self gameOver 
		ifFalse: [[
			self 
				step;
				draw.
			step := step + 1.
			self gameLoop ] valueWithTimeout: (1000 / fps) ]
!

gameOver
	^ end ifNil: [ end := false ]
!

step
	self subclassResponsibility
!

stepCount
	^ step
! !

!Game methodsFor: 'drawing'!

clearCanvas
	context
		clearRect: 0
		y: 0
		width: canvas element width
		height: canvas element height.
!

context
	^ context
!

draw
	self subclassResponsibility
!

drawSprite: aSprite
	context 
		drawImage: aSprite spriteSheet
		originX: aSprite currentFrameGroup origin x + (aSprite currentFrameGroup offset)
		originY: aSprite currentFrameGroup origin y
		frameWidth: aSprite width
		frameHeight: aSprite height
		x: aSprite x 
		y: aSprite y
		scaleWidth: aSprite width
		scaleHeight: aSprite height.
	(step \\ aSprite currentFrameGroup frameRate) = 0 ifTrue: [ aSprite nextFrame ].
!

drawSpriteCollection: aSpriteCollection
	aSpriteCollection
		do: [ :eachSprite | 
			self drawSprite: eachSprite ]
! !

!Game methodsFor: 'events'!

forElement: anElement ofDataEntry: aDataEntryName getProperty: aPropertyName
	"^ (anElement asJQuery data: aDataEntryName) at: aPropertyName"
	<
	var data;
	data = $(anElement).data(aDataEntryName);
	if (data !!= undefined) {
		return data[aPropertyName];
	} else {
		return null;
	}
	>
!

keyDown: evt
	keys at: evt keyCode put: true.
!

keyUp: evt
	keys at: evt keyCode put: false.
!

keys
	^ keys
!

mouseDown: evt
	mouseDown := true.
!

mouseMove: evt
	| canvasPosition windowScrollTop windowScrollLeft canvasRelative |

	windowScrollTop := self windowScrollTop.
	windowScrollLeft := self windowScrollLeft.
	canvasPosition := 'canvas' asJQuery position.

	canvasRelative := (canvasPosition left - windowScrollLeft) @ (canvasPosition top - windowScrollTop).
	mousePosition := (evt clientX - canvasRelative x) @ (evt clientY - canvasRelative y).
!

mousePosition
	^ mousePosition ifNil: [ mousePosition := 0 @ 0 ]
!

mouseUp: evt
	mouseDown := false.
!

onMouseClickDo: aBlock
	(self 
		forElement: '#canvas' 
		ofDataEntry: 'events' 
		getProperty: 'click')
			ifNil: [ canvas onClick: aBlock ]
!

onMouseDownDo: aBlock
	(self 
		forElement: '#canvas' 
		ofDataEntry: 'events' 
		getProperty: 'mousedown')
			ifNil: [ canvas asJQuery bind: 'mousedown' do: aBlock ]
!

onMouseUpDo: aBlock
	(self 
		forElement: '#canvas' 
		ofDataEntry: 'events' 
		getProperty: 'mouseup')
			ifNil: [ canvas asJQuery bind: 'mouseup' do: aBlock ]
!

whileKeyPressed: aKeyCode do: aBlock
	((self keys at: aKeyCode ifAbsent: [ false ]) and: [ self keys at: aKeyCode ]) ifTrue: aBlock
!

whileMouseDownDo: aBlock
	mouseDown ifTrue: aBlock
!

whileMouseUpDo: aBlock
	mouseDown ifFalse: aBlock
! !

!Game methodsFor: 'initialization'!

fps: anInteger
	fps := anInteger
!

initialize
	super initialize.
	fps := 30.
	self initializeKeys.
	sounds := #().
	mouseDown := false.
	step := 1.
!

initializeKeys
	keys := Array new.
	255 timesRepeat: [ keys add: false ].
!

startGame
	self subclassResponsibility
! !

!Game methodsFor: 'rendering'!

renderOn: html
	"Do not override me, use #startGame instead"
	canvas := html canvas.
	canvas 
		at: 'width' put: 250;
		at: 'height' put: 250;
		id: 'canvas'.
	context := canvas element getContext: '2d'.

	(window jQuery: document) keydown: [ :evt | self keyDown: evt ].
	(window jQuery: document) keyup: [ :evt | self keyUp: evt ].
	canvas asJQuery bind: 'mousedown' do: [ :evt | self mouseDown: evt ].
	canvas asJQuery bind: 'mouseup' do: [ :evt | self mouseUp: evt ].
	canvas asJQuery bind: 'mousemove' do: [ :evt | self mouseMove: evt ].

	self startGame.

	self gameLoop.
! !

!Game class methodsFor: 'initialization'!

initialize
	"uncomment if you want the game to start when loading the page"
"	'self start"
!

start
	|instance|
	instance := self new.
	instance appendToJQuery: ('body' asJQuery).
	^instance
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

Widget subclass: #Sound
	instanceVariableNames: 'src'
	package: 'Ludus'!
!Sound commentStamp!
I am a sound. I have a source audio file.
I can be played, paused, stopped or looped.!

!Sound methodsFor: 'accessing'!

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

!Sound methodsFor: 'rendering'!

renderOn: html
	| sound |
	sound := html audio
		id: self id;
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

!Sound class methodsFor: 'not yet classified'!

src: anUrl
	^ self new src: anUrl
! !

Object subclass: #Sprite
	instanceVariableNames: 'position direction spriteSheet currentFrameGroup frameGroups animating'
	package: 'Ludus'!
!Sprite commentStamp!
I am a Sprite. I need to have a spritesheet, which is an image file that displays all possible frames I can paint organized in an ordered fashion.
You define different frame groups for this spritesheet, and you can cycle through these framegroups and through the frames of each of them.
I have a direction, defined by a unit vector. This vector will always be a unit vector. If someone tries to force-set my direction to a vector that is not a unit one, I will just convert it.
I handle collisions with other sprites and sprite collections.
Of course, I also have a position, defined by cartesian coordinates.!

!Sprite methodsFor: 'animation'!

animating
	^ animating ifNil: [ animating := true ]
!

frameRate: anInteger
	self frameGroups do: [ :each | each frameRate: anInteger ]
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

height
	^ self currentFrameGroup height
!

newImage
	^ document createElement: 'img'
!

position
	^ position ifNil: [ position := 0 @ 0 ]
!

position: aPoint
	^ position := aPoint
!

spriteSheet
	spriteSheet ifNil: [ spriteSheet := self newImage ].
	^ spriteSheet
!

spriteSheet: anImageUrl
	self spriteSheet src: anImageUrl
!

width
	^ self currentFrameGroup width
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
	^ (aSpriteCollection detect: [ :each | self bottomCollidesWith: each ])
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

isInsideCanvas: aCanvas
	^ (((self x >= 0) 
		and: [ self y >= 0 ])
			and: [ self width + self x <= aCanvas width ])
				and: [ self height + self y <= aCanvas height ]
!

leftCollidesWith: aSprite
	^ aSprite rightCollidesWith: self
!

leftCollidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [ :each | self leftCollidesWith: each ]) notEmpty
!

leftCollidesWithWhichOf: aSpriteCollection
	^ (aSpriteCollection detect: [ :each | self leftCollidesWith: each ])
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
	^ (aSpriteCollection detect: [ :each | self rightCollidesWith: each ])
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
	^ (aSpriteCollection detect: [ :each | self topCollidesWith: each ])
! !

!Sprite methodsFor: 'frames'!

addFrameGroupNamed: aString origin: anOriginPoint size: aSizePoint frameCount: anInteger
	self frameGroups 
		add: 
			(FrameGroup new 
				identifier: aString
				origin: anOriginPoint
				frameSize: aSizePoint
				frameCount: anInteger)
!

atLastFrame
	^ self currentFrameGroup atLastFrame
!

currentFrameGroup
	^ currentFrameGroup ifNil: [ self frameGroups first ]
!

currentFrameGroup: anIdentifier
	currentFrameGroup := self frameGroups detect: [ :each | each identifier = anIdentifier ].
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
! !

!Sprite methodsFor: 'movement'!

moveCentreBy: anOffset
	"aSprite moveCentreBy: 0@5"
	self centre: self centre + anOffset
! !

!Sprite methodsFor: 'trigonometry'!

distanceFromCentreTo: aPoint
	^  Math 
		sqrt: 
			((Math pow: ((self centre x) - (aPoint  x)) to: 2)
				+ (Math pow: ((self centre y) - (aPoint y)) to: 2))
! !

