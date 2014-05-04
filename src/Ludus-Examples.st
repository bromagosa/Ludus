Smalltalk createPackage: 'Ludus-Examples'!
Game subclass: #Pong
	instanceVariableNames: 'ball score paddle1 paddle2 speed ai'
	package: 'Ludus-Examples'!

!Pong methodsFor: 'not yet classified'!

bounceAgainstPaddle1
	|y|
	y := self verticalAngleFor: paddle1.
	ball direction: (ball direction * (-1@ 0)) + (0 @ y).
	(self soundNamed: 'click') play.
!

bounceAgainstPaddle2
	ball direction: (ball direction * (-1@ 0)) + (0 @ (self verticalAngleFor: paddle2)).
	(self soundNamed: 'click') play.
!

createBall
	|offsetX offsetY|
	ball := Sprite new spriteSheet: 'images/ball.png'.
	ball addFrameGroupNamed: 'moving' origin: (0@0) size: (15@15) frameCount: 6.
	ball centre:  ((self width / 2) @ (self height / 2)).
	ball frameRate: 5.
!

createPaddle1
	|verticalOffset|
	paddle1 := Sprite new spriteSheet: 'images/paddle.png'.
	paddle1 addFrameGroupNamed: 'still' origin: (0@0) size: (15@80) frameCount: 1.
	paddle1 addFrameGroupNamed: 'up' origin: (15@0) size: (15@80) frameCount: 1.
	paddle1 addFrameGroupNamed: 'down' origin: (30@0) size: (15@80) frameCount: 1.
	verticalOffset := paddle1 height / 2.
	paddle1 x: 10.
	paddle1 y: ((self height / 2) - verticalOffset)
!

createPaddle2
	paddle2 := Sprite new spriteSheet: 'images/paddle.png'.
	paddle2 addFrameGroupNamed: 'still' origin: (0@0) size: (15@80) frameCount: 1.
	paddle2 addFrameGroupNamed: 'up' origin: (15@0) size: (15@80) frameCount: 1.
	paddle2 addFrameGroupNamed: 'down' origin: (30@0) size: (15@80) frameCount: 1.
	paddle2 x: self width - paddle2 width - 10.
	paddle2 y: paddle1 y
!

draw
		self clearCanvas;
			drawSprite: paddle1;
			drawSprite: paddle2;
			drawMiddleLine;
			drawSprite: ball.
		paddle1 currentFrameGroup: 'still'.
		paddle2 currentFrameGroup: 'still'
!

drawMiddleLine
	context
		moveTo: (self width / 2) y: 0;
		lineTo: (self width / 2) y: (self height);
		strokeStyle: 'white';
		stroke.
!

end
	super end.
	(self soundNamed: 'applause') play.
!

goDown: aPaddle
	|maxBottom|
	maxBottom := ((self height - speed) - aPaddle height).
	(aPaddle y > maxBottom)
		ifFalse: 
			[aPaddle y: aPaddle y + speed].
	aPaddle currentFrameGroup: 'down'
!

goUp: aPaddle
	aPaddle y < speed 
		ifFalse: 
			[aPaddle y: aPaddle y - speed].
	aPaddle currentFrameGroup: 'up'
!

initialize
	super initialize.
	ai := false.
!

processAI
	(step \\ 5) = 0
		ifTrue: [
			ball centre y > paddle1 centre y 
				ifTrue: [ self goDown: paddle1 ]
				ifFalse: [ self goUp: paddle1 ] ]
!

processBallBorderCollision
	|offsetY|
	offsetY := (self height - ball height).
	((ball y <= 0) or: [(ball y >= offsetY)]) 
		ifTrue: [ball direction: ball direction * (1@ -1)].
!

processBallCollision
	self processBallBorderCollision.

	(ball leftCollidesWith: paddle1)
		ifTrue: [self bounceAgainstPaddle1].

	(ball rightCollidesWith: paddle2)
		ifTrue: [self bounceAgainstPaddle2].

	self processEndGame
!

processBallMovement
	|ballStep|
	self processBallCollision.
	ball centre: ball centre + (ball direction * speed).
!

processEndGame
	|offsetX|

	offsetX := (self width - ball width).

	(ball x <= 0) 
		ifTrue: [ self end.
                         window alert: 'Right player wins!!'].
	(ball x >= offsetX)
		ifTrue: [ self end.
                        window alert: 'Left player wins!!'].
!

startGame
	self width: 640; 
		height: 360.

	speed := 10.

	canvas style: 'background-color: blue'.

	self addSound: 'sounds/applause.ogg'.
	self addSound: 'sounds/click.ogg'.

	self createPaddle1;
		createPaddle2;
		createBall.

	ball direction: (#(-1 1) at: (2 atRandom)) @ ((20 atRandom - 10)/10).
	window alert: 'Left Player: s - up x - down / Right Player: up/down arrows'
!

step
	ai
		ifFalse: [self whileKeyPressed: Key s do: [self goUp: paddle1];
			whileKeyPressed: Key x do: [self goDown: paddle1]]
		ifTrue: [self processAI].
	self whileKeyPressed: Key upArrow do: [self goUp: paddle2];
		whileKeyPressed: Key downArrow do: [self goDown: paddle2];
		processBallMovement.
!

verticalAngleFor: aPaddle
 	|impactPosition|
	impactPosition := (aPaddle y - ball y) / aPaddle height.
	^ ((impactPosition * 2) + 1) * -1.
!

withAI
	ai := true.
! !

Sprite subclass: #Ship
	instanceVariableNames: 'speed'
	package: 'Ludus-Examples'!

!Ship methodsFor: 'not yet classified'!

decreaseSpeed
	self speed: self speed - 0.05
!

increaseSpeed
	self speed: self speed + 0.05
!

initialize
	super initialize.
	self spriteSheet: 'images/trail.png';
		addFrameGroupNamed: 'ship' origin: 0@0 size: 10@10 frameCount: 1.
!

speed
	^ speed ifNil: [speed := 0]
!

speed: aSpeed
	speed := aSpeed
! !

Game subclass: #SimplePacman
	instanceVariableNames: 'pacman ghost pills'
	package: 'Ludus-Examples'!

!SimplePacman methodsFor: 'not yet classified'!

createGhost
	ghost := Sprite new spriteSheet: 'images/ghost.png'.
	ghost addFrameGroupNamed: 'down' origin: (0@0) size: (50@55) frameCount: 2.
	ghost addFrameGroupNamed: 'up' origin: (100@0) size: (50@55) frameCount: 2.
	ghost addFrameGroupNamed: 'right' origin: (0@55) size: (50@55) frameCount: 2.
	ghost addFrameGroupNamed: 'left' origin: (100@55) size: (50@55) frameCount: 2.
	ghost centre: 500@500.
!

createPacman
	pacman := Sprite new spriteSheet: 'images/pacman.png'.
	pacman addFrameGroupNamed: 'left' origin: (0@0) size: (50@50) frameCount: 2.
	pacman addFrameGroupNamed: 'right' origin: (0@50) size: (50@50) frameCount: 2.
	pacman addFrameGroupNamed: 'down' origin: (100@0) size: (50@50) frameCount: 2.
	pacman addFrameGroupNamed: 'up' origin: (100@50) size: (50@50) frameCount: 2.
	pacman centre: 100@100.
!

draw
	self clearCanvas.
	self drawSprite: ghost.
	self drawSprite: pacman.
!

moveDown
	(pacman centre y + 25) >= self height 
		ifFalse: 
			[pacman moveCentreBy: (0@ 15)].
	pacman currentFrameGroup: 'down'
!

moveGhost
	|direction|
	direction := 4 atRandom.
	direction = 1 ifTrue: [self moveGhostUp].
	direction = 2 ifTrue: [self moveGhostDown].
	direction = 3 ifTrue: [self moveGhostLeft].
	direction = 4 ifTrue: [self moveGhostRight].
!

moveGhostDown
	(ghost centre y + 27) >= self height 
		ifFalse: 
			[ghost moveCentreBy: (0@ 15)].
	ghost currentFrameGroup: 'down'
!

moveGhostLeft
	ghost centre x <= 25
		ifFalse: 
			[ghost moveCentreBy: (-15@ 0)].
	ghost currentFrameGroup: 'left'
!

moveGhostRight
	ghost centre x + 25 >= self width
		ifFalse: 
			[ghost moveCentreBy: (15@ 0)].
	ghost currentFrameGroup: 'right'
!

moveGhostUp
	ghost centre y <= 27
		ifFalse: 
			[ghost moveCentreBy: (0@ -15)].
	ghost currentFrameGroup: 'up'
!

moveLeft
	pacman centre x <= 25
		ifFalse: 
			[pacman moveCentreBy: (-15@ 0)].
	pacman currentFrameGroup: 'left'
!

moveRight
	pacman centre x + 25 >= self width
		ifFalse: 
			[pacman moveCentreBy: (15@ 0)].
	pacman currentFrameGroup: 'right'
!

moveUp
	pacman centre y <= 25
		ifFalse: 
			[pacman moveCentreBy: (0@ -15)].
	pacman currentFrameGroup: 'up'
!

startGame
	self width: 720; 
		height: 540;
		backgroundColor: 'black'.

	self createPacman.
	self createGhost.
!

step
	self whileKeyPressed: Key leftArrow do: [self moveLeft];
		whileKeyPressed: Key rightArrow do: [self moveRight];
		whileKeyPressed: Key upArrow do: [self moveUp];
		whileKeyPressed: Key downArrow do: [self moveDown].
	self onMouseClickDo: [window alert: self mousePosition x asString , ',' , self mousePosition y asString].
	self moveGhost.
	(pacman collidesWith: ghost) ifTrue: [self end. window alert: 'You lost!!']
! !

Game subclass: #SmallCave
	instanceVariableNames: 'ship gravity trail upOrDown bumps goingUp light maxVariation obstaclePositions started scrollSpeed'
	package: 'Ludus-Examples'!

!SmallCave methodsFor: 'not yet classified'!

bumps
	^bumps ifNil: [bumps := (0 to: 25) collect: [:x | (self width / 25) * x @ ((step / 20) atRandom + (step / 20))]]
!

detectCollision
	|imageData greenComponent|

	imageData := context getImageData: self ship centre x y: self ship y + self ship height + 1 width: 1 height: 1.
	greenComponent := imageData data at: 1.
    greenComponent > 0 ifTrue: [self end].

	imageData := context getImageData: self ship centre x y: self ship y - 1 width: 1 height: 1.
	greenComponent := imageData data at: 1.
    greenComponent > 0 ifTrue: [self end].
!

draw
	self started 
		ifFalse: [self drawWelcomeScreen]
		ifTrue: [
			self clearCanvas;
				drawCeiling; 
				drawFloor;
				drawObstacles;
				drawSprite: ship.
			self trail allButLast do: [:each | self drawSprite: each ]].
	self onMouseClickDo: [started := true].
!

drawCeiling
	context
		beginPath;
		moveTo:-200 y: 0;
		lineTo: -200 y: self bumps first y.

	self bumps allButFirst allButLast do: [:eachBump |
		context lineTo: eachBump x y: eachBump y].

	context
		lineTo: self width y: self bumps last y;
		lineTo: self width + 200 y: 0;
		closePath;
		fillStyle: 'green';
		fill.
!

drawFloor
	context
		beginPath;
		moveTo:-200 y: self height;
		lineTo: -200 y: self bumps first y + self light.

	self bumps allButFirst allButLast do: [:eachBump |
		context lineTo: eachBump x y: eachBump y + self light].

	context
		lineTo: self width y: self bumps last y + self light;
		lineTo: self width + 200 y: self height;
		closePath;
		fillStyle: 'green';
		fill.
!

drawObstacles
	self obstaclePositions do: [:each |
		context
			fillStyle: 'green';
			fillRect: each x y: each y width: 50 height: 100]
!

drawWelcomeScreen
	|image|
	image := self newImage.
	image src: 'images/welcome.png'.
	context drawImage: image x: 40 y: 50.
!

end
	super end.
	window alert: 'OUCH!! Your score is ' , self stepCount asString , '. Refresh the page to try again!!'
!

goingUp
	goingUp ifNil: [goingUp := false].
	self bumps last y < 0 ifTrue: [goingUp := false].
	(self bumps last y + self light) > self height ifTrue: [goingUp := true].
	^ goingUp
!

light
	^ light ifNil: [	light := (self height * 0.75) ]
!

maxVariation
	^ maxVariation ifNil: [maxVariation := 2]
!

moveShip
	self whileMouseUpDo: [self ship increaseSpeed].
	self whileMouseDownDo: [self ship decreaseSpeed].
	self ship y: (self ship y + (self ship speed * gravity))
!

newImage
	^ document createElement: 'img'
!

obstaclePositions
	^obstaclePositions ifNil: [obstaclePositions := 
                                  { (self width / 2) atRandom @ (self height / 2) atRandom. ((self width / 2) atRandom + self width) @ ((self height / 2) atRandom + (self height / 2)) } ]
!

scrollSpeed
	^ scrollSpeed ifNil: [scrollSpeed := 5]
!

ship
	^ ship ifNil: [ship := Ship new centre: 105 @ (self height / 2)]
!

startGame
	fps := 30.
	gravity := 1.1.

	self width: 720; 
		height: 540;
		backgroundColor: 'black'.
!

started
	^ started ifNil: [started := false]
!

step
	self started ifTrue: [self detectCollision; updateTrail; updateBumps; updateObstacles; updateDifficulty; moveShip]
!

trail
	^ trail ifNil: [
        	trail := #().
          	0 to: 10 do: [:i |
                             |ghostBall|
                              ghostBall := Sprite new spriteSheet: 'images/trail.png'.
                              ghostBall addFrameGroupNamed: 'trail' origin: (0@0) size: (10@10) frameCount: 1.
                              ghostBall position: (i * 10) @ (self height / 2).
                              trail add: ghostBall.
                             ].
		trail]
!

updateBumps
	self bumps second x < ( 0 - self scrollSpeed - (self width / 25))
		ifTrue: [|y|
                         y := self 
                         	goingUp 
                         		ifTrue: [bumps last y + self maxVariation atRandom - (self maxVariation * 2)]
                         		ifFalse: [bumps last y + self maxVariation atRandom].
                         self bumps add: (self width + (self width / 25) @ y).
                         self bumps remove: self bumps first].
	self bumps do: [:each | each x: each x - self scrollSpeed].
!

updateDifficulty
	(self stepCount \\ 200) = 0
		ifTrue: [goingUp := {false. true} at: 2 atRandom].
	(self stepCount \\ 50 = 0)
		ifTrue: [light := self light - 1].
	self light < 20 ifTrue: [light := 20].
	(self stepCount \\ 1200) = 0
		ifTrue: [
                  	maxVariation := self maxVariation + 1.
                        self obstaclePositions add: ((self width + self width atRandom) @ (self height atRandom)).
                        scrollSpeed := self scrollSpeed + 1].
!

updateObstacles
	self obstaclePositions first x < -100
		ifTrue: [
                         self obstaclePositions add: ((self width + self width atRandom) @ (self height atRandom)).
                         self obstaclePositions remove: self obstaclePositions first].
	self obstaclePositions do: [:each | each x: each x - self scrollSpeed].
!

updateTrail
	self trail allButLast withIndexDo: [:each :i | each y: (self trail at: i + 1) y].
	self trail last centre: self trail last x @ self ship centre y.
! !

Game subclass: #Sokoban
	instanceVariableNames: 'guy walls stepSize boxes exits lastMove floor currentLevel directionDictionary guyOffsetDictionary boxOffsetDictionary'
	package: 'Ludus-Examples'!

!Sokoban methodsFor: 'control'!

end
	super end.
	(self soundNamed: 'factory') stop.
!

isLevelOver
	|exitCentres|
	exitCentres := (self exits collect: [:each | each centre]).

	self boxes do: [:elem | (exitCentres includes: elem centre) ifFalse: [^ false]].

	^ true
!

startGame
	fps := 20.	
	stepSize := 10.

	self width: 720; 
		height: 540.

	canvas style: 'background-image: url("images/background.png")'.

	self addSound: 'sounds/slide.ogg'.
	self addSound: 'sounds/factory.ogg'.
	self addSound: 'sounds/applause.ogg'.

	(self soundNamed: 'factory') loop.

	self createLevel.
!

startPositionFor: aLevel
	aLevel
		withIndexDo: [:eachRow :y | 
			(eachRow includes: 8) 
                              	ifTrue: 
                              		[eachRow withIndexDo: [:eachColumn :x |
						eachColumn = 8 
							ifTrue: [ ^ ((x * 30) - 15) @ ((y * 30) - 15) ]]]].
!

step
	guy currentFrameGroup: 'still' , self lastMove.
	self whileKeyPressed: Key leftArrow do: [self go: 'Left'];
		whileKeyPressed: Key rightArrow do: [self go: 'Right'];
		whileKeyPressed: Key upArrow do: [self go: 'Up'];
		whileKeyPressed: Key downArrow do: [self go: 'Down'];
		whileKeyPressed: Key r do: [self restartLevel];
		whileKeyPressed: Key m do: [(self soundNamed: 'factory') stop];
		whileKeyPressed: Key n do: [self advanceLevel].

	self isLevelOver ifTrue: [self advanceLevel]
! !

!Sokoban methodsFor: 'drawing'!

draw
	self clearCanvas.
        self floor do: [:each | self drawSprite: each].
	self walls do: [:each | self drawSprite: each].
	self exits do: [:each | self drawSprite: each].
	self drawSprite: guy.
	self boxes do: [:each | self drawSprite: each].
! !

!Sokoban methodsFor: 'levels'!

advanceLevel
	(self soundNamed: 'applause') play.
	(self class methodAt: 'level' , (currentLevel + 1) asString) 
		ifNil: [self end]
		ifNotNil:	[currentLevel := currentLevel + 1].
	self clearLevel.
	self createLevel.
!

clearLevel
	boxes := #().
	walls := #().
	exits := #().
	floor := #().
!

createLevel
	self createFloor;
		createExits;
		createGuy;
		createBoxes;
		createWalls.
!

currentLevel
	currentLevel ifNil: [currentLevel := 1].
	^ self perform: 'level' , currentLevel asString
!

level1
	^  
     #(#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 1 2 2 2 1 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 1 7 2 2 1 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 1 1 1 2 2 7 1 1 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 1 2 2 7 2 7 2 1 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 1 1 1 2 1 2 1 1 2 1 0 0 1 1 1 1 1 1 0 0 0)
       #(0 0 0 1 2 2 2 1 2 1 1 2 1 1 1 1 2 2 9 9 1 0 0 0)
       #(0 0 0 1 2 7 2 2 7 2 2 2 2 2 2 2 2 2 9 9 1 0 0 0)
       #(0 0 0 1 1 1 1 1 2 1 1 1 2 1 8 1 2 2 9 9 1 0 0 0)
       #(0 0 0 0 0 0 0 1 2 2 2 2 2 1 1 1 1 1 1 1 1 0 0 0)
       #(0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level10
	^  
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 1 1 1 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0) 
#(0 0 1 1 8 1 1 1 1 2 2 2 2 2 2 2 1 2 2 2 1 0 0 0) 
#(0 0 1 2 7 7 2 2 2 7 7 2 2 7 2 7 2 9 9 9 1 0 0 0) 
#(0 0 1 2 2 7 7 7 1 2 2 2 2 7 2 2 1 9 9 9 1 0 0 0) 
#(0 0 1 2 7 2 2 2 1 2 7 7 2 7 7 2 1 9 9 9 1 0 0 0) 
#(0 0 1 1 1 2 2 2 1 2 2 7 2 2 2 2 1 9 9 9 1 0 0 0) 
#(0 0 1 2 2 2 2 2 1 2 7 2 7 2 7 2 1 9 9 9 1 0 0 0) 
#(0 0 1 2 2 2 2 1 1 1 1 1 1 2 1 1 1 9 9 9 1 0 0 0) 
#(0 0 1 1 2 1 2 2 1 2 2 7 2 7 2 2 1 9 9 9 1 0 0 0) 
#(0 0 1 2 2 1 1 2 1 2 7 7 2 7 2 7 1 1 9 9 1 0 0 0) 
#(0 0 1 2 9 9 1 2 1 2 2 7 2 2 2 2 2 2 1 9 1 0 0 0) 
#(0 0 1 2 9 9 1 2 1 2 7 7 7 2 7 7 7 2 1 9 1 0 0 0) 
#(0 0 1 1 1 1 1 2 1 2 2 2 2 2 2 2 1 2 1 9 1 0 0 0) 
#(0 0 0 0 0 0 1 2 1 1 1 1 1 1 1 1 1 2 1 9 1 0 0 0) 
#(0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 1 9 1 0 0 0) 
#(0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level11
	^  
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
#(0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 1 1 1 1 0 1 2 2 1 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 1 1 1 2 8 1 1 1 7 2 1 0 0 0 0 0 0 0 0 0) 
#(0 0 0 1 1 2 2 2 2 2 2 7 2 2 1 0 0 0 0 0 0 0 0 0) 
#(0 0 1 1 2 2 7 2 7 7 1 1 2 1 1 0 0 0 0 0 0 0 0 0) 
#(0 0 1 2 2 1 7 1 1 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0) 
#(0 0 1 2 1 2 7 2 7 7 2 1 2 1 1 1 0 0 0 0 0 0 0 0) 
#(0 0 1 2 2 2 7 2 1 2 2 1 2 7 2 1 1 1 1 1 0 0 0 0) 
#(0 1 1 1 1 2 2 2 2 1 2 2 7 7 2 1 2 2 2 1 0 0 0 0) 
#(0 1 1 1 1 2 1 1 2 7 2 2 2 2 2 2 2 2 2 1 0 0 0 0) 
#(0 1 9 2 2 2 2 1 1 1 2 2 1 1 1 1 1 1 1 1 0 0 0 0) 
#(0 1 9 9 2 9 9 1 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0) 
#(0 1 9 9 9 1 9 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 1 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)  
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level12
	^  
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0) 
#(0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0) 
#(0 0 0 0 1 2 1 2 1 1 1 1 1 1 2 2 2 2 2 1 0 0 0 0) 
#(0 0 0 0 1 2 1 2 2 7 2 7 2 7 2 7 1 2 2 1 0 0 0 0) 
#(0 0 0 0 1 2 1 2 2 2 7 8 7 2 2 2 1 1 2 1 1 0 0 0) 
#(0 0 0 0 1 2 1 2 2 7 2 7 2 7 1 1 1 9 9 9 1 0 0 0) 
#(0 0 0 0 1 2 1 2 2 2 7 2 7 2 2 1 1 9 9 9 1 0 0 0) 
#(0 0 0 0 1 2 1 1 1 7 7 7 2 7 2 1 1 9 9 9 1 0 0 0) 
#(0 0 0 0 1 2 2 2 2 2 1 2 1 1 2 1 1 9 9 9 1 0 0 0) 
#(0 0 0 0 1 1 1 1 1 2 2 2 1 1 2 1 1 9 9 9 1 0 0 0) 
#(0 0 0 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 1 1 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 1 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level13
	^  
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 1 1 2 2 2 1 1 2 2 1 1 1 1 1 1 0 0 0 0 0) 
#(0 0 1 1 1 2 2 2 2 2 1 2 2 1 2 2 2 2 1 1 1 0 0 0) 
#(0 0 1 2 2 7 2 1 7 2 1 2 2 1 2 2 9 9 9 2 1 0 0 0) 
#(0 0 1 2 1 2 7 1 8 7 1 1 2 1 2 1 9 1 9 2 1 0 0 0) 
#(0 0 1 2 2 1 2 1 7 2 2 1 2 2 2 2 9 2 9 2 1 0 0 0) 
#(0 0 1 2 7 2 2 2 2 7 2 1 2 1 2 1 9 1 9 2 1 0 0 0) 
#(0 0 1 2 2 2 1 1 2 2 1 1 7 2 7 2 9 2 9 2 1 0 0 0) 
#(0 0 1 2 7 2 1 2 2 2 1 2 2 1 7 1 9 1 9 2 1 0 0 0) 
#(0 0 1 1 2 7 2 2 7 2 2 2 7 2 2 7 9 9 9 2 1 0 0 0) 
#(0 0 0 1 7 2 1 1 1 1 1 1 2 2 2 2 1 1 2 2 1 0 0 0) 
#(0 0 0 1 2 2 1 0 0 0 0 1 1 1 1 1 1 1 1 1 1 0 0 0) 
#(0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level2
	^  
   #(#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0)
       #(0 0 0 0 1 9 9 2 2 1 2 2 2 2 2 1 1 1 0 0 0 0 0 0)
       #(0 0 0 0 1 9 9 2 2 1 2 7 2 2 7 2 2 1 0 0 0 0 0 0)
       #(0 0 0 0 1 9 9 2 2 1 7 1 1 1 1 2 2 1 0 0 0 0 0 0)
       #(0 0 0 0 1 9 9 2 2 2 2 8 2 1 1 2 2 1 0 0 0 0 0 0)
       #(0 0 0 0 1 9 9 2 2 1 2 1 2 2 7 2 1 1 0 0 0 0 0 0)
       #(0 0 0 0 1 1 1 1 1 1 2 1 1 7 2 7 2 1 0 0 0 0 0 0)
       #(0 0 0 0 0 0 1 2 7 2 2 7 2 7 2 7 2 1 0 0 0 0 0 0)
       #(0 0 0 0 0 0 1 2 2 2 2 1 2 2 2 2 2 1 0 0 0 0 0 0)
       #(0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level3
	^
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)  
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 8 1 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 1 2 7 1 7 2 1 1 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 1 2 7 2 2 7 1 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 1 1 7 2 7 2 1 0 0 0 0 0 0) 
#(0 0 0 1 1 1 1 1 1 1 1 1 2 7 2 1 2 1 1 1 0 0 0 0) 
#(0 0 0 1 9 9 9 9 2 2 1 1 2 7 2 2 7 2 2 1 0 0 0 0) 
#(0 0 0 1 1 9 9 9 2 2 2 2 7 2 2 7 2 2 2 1 0 0 0 0) 
#(0 0 0 1 9 9 9 9 2 2 1 1 1 1 1 1 1 1 1 1 0 0 0 0) 
#(0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level4
	^  
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 9 9 9 9 1 0 0 0) 
#(0 0 1 1 1 1 1 1 1 1 1 1 1 1 2 2 9 9 9 9 1 0 0 0) 
#(0 0 1 2 2 2 2 1 2 2 7 2 7 2 2 2 9 9 9 9 1 0 0 0) 
#(0 0 1 2 7 7 7 1 7 2 2 7 2 1 2 2 9 9 9 9 1 0 0 0) 
#(0 0 1 2 2 7 2 2 2 2 2 7 2 1 2 2 9 9 9 9 1 0 0 0) 
#(0 0 1 2 7 7 2 1 7 2 7 2 7 1 1 1 1 1 1 1 1 0 0 0) 
#(0 0 1 2 2 7 2 1 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0 0) 
#(0 0 1 1 2 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0) 
#(0 0 1 2 2 2 2 1 2 2 2 2 1 1 0 0 0 0 0 0 0 0 0 0) 
#(0 0 1 2 2 2 2 2 7 2 2 2 1 1 0 0 0 0 0 0 0 0 0 0) 
#(0 0 1 2 2 7 7 1 7 7 2 2 8 1 0 0 0 0 0 0 0 0 0 0) 
#(0 0 1 2 2 2 2 1 2 2 2 2 1 1 0 0 0 0 0 0 0 0 0 0) 
#(0 0 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0)
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level5
	^  
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 1 1 1 1 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 1 7 1 1 2 2 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 7 2 1 0 0 0) 
#(0 0 0 0 1 1 1 1 1 1 1 1 1 2 1 1 1 2 2 2 1 0 0 0) 
#(0 0 0 0 1 9 9 9 9 2 2 1 1 2 7 2 2 7 1 1 1 0 0 0) 
#(0 0 0 0 1 9 9 9 9 2 2 2 2 7 2 7 7 2 1 1 0 0 0 0) 
#(0 0 0 0 1 9 9 9 9 2 2 1 1 7 2 2 7 2 8 1 0 0 0 0) 
#(0 0 0 0 1 1 1 1 1 1 1 1 1 2 2 7 2 2 1 1 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 7 2 7 2 2 1 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 2 1 1 2 1 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 1 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level6
	^  
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 1 1 1 1 1 0 0 1 1 1 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 9 9 2 2 1 0 1 1 8 1 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 9 9 2 2 1 1 1 2 2 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 9 9 2 2 2 2 2 7 7 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 9 9 2 2 1 2 1 2 7 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 9 9 1 1 1 2 1 2 7 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 1 1 1 2 7 2 1 7 2 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 1 2 2 7 1 2 7 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 1 2 7 2 2 7 2 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 1 2 2 1 1 2 2 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level7
	^  
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 1 1 1 1 1 1 2 2 2 1 1 0 0 0 0 0 0 0) 
#(0 0 0 0 1 1 2 1 2 8 1 1 2 7 7 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 1 2 2 2 2 7 2 2 2 2 2 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 1 2 2 7 2 2 1 1 1 2 2 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 1 1 1 2 1 1 1 1 1 7 1 1 1 0 0 0 0 0 0 0) 
#(0 0 0 0 1 2 7 2 2 1 1 1 2 9 9 1 0 0 0 0 0 0 0 0) 
#(0 0 0 0 1 2 7 2 7 2 7 2 9 9 9 1 0 0 0 0 0 0 0 0) 
#(0 0 0 0 1 2 2 2 2 1 1 1 9 9 9 1 0 0 0 0 0 0 0 0) 
#(0 0 0 0 1 2 7 7 2 1 0 1 9 9 9 1 0 0 0 0 0 0 0 0) 
#(0 0 0 0 1 2 2 1 1 1 0 1 1 1 1 1 0 0 0 0 0 0 0 0) 
#(0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level8
	^  
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 2 2 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0) 
#(0 0 0 0 0 1 2 2 2 2 7 2 2 2 7 2 7 2 1 0 0 0 0 0) 
#(0 0 0 0 0 1 2 7 1 2 7 2 1 2 2 7 2 2 1 0 0 0 0 0) 
#(0 0 0 0 0 1 2 2 7 2 7 2 2 1 2 2 2 2 1 0 0 0 0 0) 
#(0 0 0 1 1 1 2 7 1 2 1 2 2 1 1 1 1 2 1 0 0 0 0 0) 
#(0 0 0 1 8 1 7 2 7 2 7 2 2 1 1 2 2 2 1 0 0 0 0 0) 
#(0 0 0 1 2 2 2 2 7 2 1 7 1 2 2 2 1 2 1 0 0 0 0 0) 
#(0 0 0 1 2 2 2 7 2 2 2 2 7 2 7 2 7 2 1 0 0 0 0 0) 
#(0 0 0 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 0 0 0 0 0) 
#(0 0 0 0 0 1 2 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 2 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 9 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 9 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 9 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

level9
	^  
#(
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 9 9 9 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 2 2 9 9 9 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 2 9 2 9 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 1 2 2 1 1 2 2 9 9 9 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 1 1 2 1 1 2 2 9 9 9 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 1 1 1 2 1 1 1 1 1 1 1 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 1 2 7 7 7 2 1 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 1 1 1 1 1 2 2 7 2 7 2 1 1 1 1 1 0 0 0) 
#(0 0 0 0 1 1 2 2 2 1 7 2 7 2 2 2 1 2 2 2 1 0 0 0) 
#(0 0 0 0 1 8 2 7 2 2 7 2 2 2 2 7 2 2 7 2 1 0 0 0) 
#(0 0 0 0 1 1 1 1 1 1 2 7 7 2 7 2 1 1 1 1 1 0 0 0) 
#(0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 2 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) 
#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
"
0 → empty
1 → wall
2 → floor
7 → box
8 → guy
9 → exit
"
!

restartLevel
	self clearLevel;
		createLevel.
! !

!Sokoban methodsFor: 'movement'!

boxOffsetDictionary
	^ boxOffsetDictionary ifNil: [ boxOffsetDictionary := #{'Down' -> (0@5). 'Up' -> (0@ -5). 'Left' -> (-5@0). 'Right' -> (5@0)} ]
!

directionDictionary
	^ directionDictionary ifNil: [ directionDictionary := #{'Down' -> 'bottom'. 'Up' -> 'top'. 'Left' -> 'left'. 'Right' -> 'right'} ]
!

go: aDirection
	|side offset|
	side := self directionDictionary at: aDirection.
	offset := self guyOffsetDictionary at: aDirection.

	guy moveCentreBy: offset.
	(guy perform: side , 'CollidesWithAnyOf:' withArguments: {walls})
		ifFalse:
			[(guy perform: side , 'CollidesWithAnyOf:' withArguments: {boxes})
                         	ifTrue: 
                         		[self moveBox: (guy perform: side , 'CollidesWithWhichOf:' withArguments: {boxes}) direction: aDirection.
                                        guy moveCentreBy: (offset * -1).
                                        guy currentFrameGroup: 'push', aDirection]
	                        ifFalse: 
                         		[guy moveCentreBy: ((offset / 8) * (stepSize - 8)).
        	                	guy currentFrameGroup: 'walk', aDirection]]
		ifTrue: 
			[guy moveCentreBy: (offset * -1).
                        guy currentFrameGroup: 'push' , aDirection].

	lastMove := aDirection.
!

guyOffsetDictionary
	^ guyOffsetDictionary ifNil: [ guyOffsetDictionary := #{'Down' -> (0@8). 'Up' -> (0@ -8). 'Left' -> (-8@0). 'Right' -> (8@0)} ]
!

lastMove
	^ lastMove ifNil: [lastMove := 'Down']
!

moveBox: aBox direction: aDirection
	|side offset|
	side := self directionDictionary at: aDirection.
	offset := self boxOffsetDictionary at: aDirection.

	aBox centre: aBox centre + offset.
	(aBox perform: side , 'CollidesWithAnyOf:' withArguments: {walls})
		ifFalse:
			[(aBox perform: side , 'CollidesWithAnyOf:' withArguments: {boxes})
                         	ifFalse: 
                         		[ (self soundNamed: 'slide') play.
                                          5 timesRepeat: 
                                         	[[aBox moveCentreBy: offset] valueWithTimeout: 100.
                                         	self clearCanvas. 
                                         	self boxes do: [:each | self drawSprite: each]]]
	                        ifTrue: 
                         		[aBox centre: aBox centre - offset]]
		ifTrue: [aBox centre: aBox centre - offset]
!

processMovement
	guy currentFrameGroup: 'still' , self lastMove.
! !

!Sokoban methodsFor: 'sprite collections'!

boxes
	^ boxes ifNil: [boxes := #()]
!

exits
	^ exits ifNil: [exits := #()]
!

floor
	^ floor ifNil: [floor := #()]
!

walls
	^ walls ifNil: [walls := #()]
! !

!Sokoban methodsFor: 'sprite creation'!

createBoxes
	|box|

	self currentLevel
		withIndexDo: [:eachRow :y | 
			(eachRow includes: 7) 
                              	ifTrue: 
                              		[eachRow withIndexDo: [:eachColumn :x |
						eachColumn = 7 
							ifTrue: [
                                                        	box := Sprite new spriteSheet: 'images/box.png'.
								box addFrameGroupNamed: 'still' origin: (((6 atRandom - 1) * 28)@0) size: (28@28) frameCount: 1.
								box centre: ((x * 30) - 15) @ ((y * 30) - 15).
								self boxes add: box ]]]].
!

createExits
	|exit|

	self currentLevel
		withIndexDo: [:eachRow :y | 
			(eachRow includes: 9) 
                              	ifTrue: 
                              		[eachRow withIndexDo: [:eachColumn :x |
						eachColumn = 9 
							ifTrue: [
                                                        	exit := Sprite new spriteSheet: 'images/exit.png'.
								exit addFrameGroupNamed: 'exit' origin: (0@0) size: (28@28) frameCount: 1.
								exit centre: ((x * 30) - 15) @ ((y * 30) - 15).
								self exits add: exit ]]]].
!

createFloor
	|tile|
	self currentLevel
		withIndexDo: [:eachRow :y | 
			(eachRow includes: 1) 
                              	ifTrue: 
                              		[eachRow withIndexDo: [:eachColumn :x |
						eachColumn > 1
							ifTrue: [
                                                        	tile := Sprite new spriteSheet: 'images/floor.png'.
								tile addFrameGroupNamed: 'tile' origin: (0@0) size: (30@30) frameCount: 1.
								tile centre: ((x * 30) - 15) @ ((y * 30) - 15).
								self floor add: tile]]]].
!

createGuy
	guy := Sprite new spriteSheet: 'images/guy.png'.
	guy addFrameGroupNamed: 'walkDown' origin: (0@0) size: (25@25) frameCount: 2.
	guy addFrameGroupNamed: 'walkUp' origin: (0@25) size: (25@25) frameCount: 2.
	guy addFrameGroupNamed: 'walkLeft' origin: (0@50) size: (25@25) frameCount: 2.
	guy addFrameGroupNamed: 'walkRight' origin: (0@75) size: (25@25) frameCount: 2.

	guy addFrameGroupNamed: 'stillDown' origin: (50@0) size: (25@25) frameCount: 1.
	guy addFrameGroupNamed: 'stillUp' origin: (50@25) size: (25@25) frameCount: 1.
	guy addFrameGroupNamed: 'stillLeft' origin: (50@50) size: (25@25) frameCount: 1.
	guy addFrameGroupNamed: 'stillRight' origin: (50@75) size: (25@25) frameCount: 1.

	guy addFrameGroupNamed: 'pushDown' origin: (75@0) size: (25@25) frameCount: 2.
	guy addFrameGroupNamed: 'pushUp' origin: (75@25) size: (25@25) frameCount: 2.
	guy addFrameGroupNamed: 'pushLeft' origin: (75@50) size: (25@25) frameCount: 2.
	guy addFrameGroupNamed: 'pushRight' origin: (75@75) size: (25@25) frameCount: 2.

	guy centre: (self startPositionFor: self currentLevel).

	guy frameRate: 2.
!

createWalls
	|wall|

	self currentLevel
		withIndexDo: [:eachRow :y | 
			(eachRow includes: 1) 
                              	ifTrue: 
                              		[eachRow withIndexDo: [:eachColumn :x |
						eachColumn = 1 
							ifTrue: [
                                                        	wall := Sprite new spriteSheet: 'images/wall.png'.
								wall addFrameGroupNamed: 'wall' origin: (0@0) size: (30@30) frameCount: 1.
								wall x: ((x * 30) - 30); y: ((y * 30) - 30).
								self walls add: wall ]]]].
! !

Widget subclass: #SokobanLevelCreator
	instanceVariableNames: 'level table palette currentBrush div textarea'
	package: 'Ludus-Examples'!

!SokobanLevelCreator methodsFor: 'not yet classified'!

emptyLevel
^   #(#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)
       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))
!

imageFor: anInteger
	^ #{7 -> 'box'. 9 -> 'exit'. 1 -> 'wall'. 2 -> 'floor'. 8 -> 'guy'. 0 -> 'no' } at: anInteger
!

initialize
	super initialize.
	currentBrush := 0.
!

level
	^ level ifNil: [level := self emptyLevel]
!

renderOn: html
	self renderTableOn:html.
	self renderPaletteOn: html.
	html button 
		with: 'Print Array'; 
		onClick: [self renderTextAreaOn: html].
!

renderPaletteOn: html
	palette := html table
		id: 'palette';
		with: [
                	html img src: 'images/', (self imageFor: 7) , 'Icon.png';
                  		onClick: [currentBrush := 7].
                	html img src: 'images/', (self imageFor: 9) , 'Icon.png';
                  		onClick: [currentBrush := 9].
                	html img src: 'images/', (self imageFor: 1) , 'Icon.png';
                  		onClick: [currentBrush := 1].
                	html img src: 'images/', (self imageFor: 2) , 'Icon.png';
                  		onClick: [currentBrush := 2].
                	html img src: 'images/', (self imageFor: 8) , 'Icon.png';
                  		onClick: [currentBrush := 8].
                	html img src: 'images/eraserIcon.png';
                  		onClick: [currentBrush := 0]]
!

renderTableOn:html
	table := html table
		id: 'levelTable';
		style: 'border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif;';
		with: [
                	1 to: 18 do: [:y | 
				html tr 
                                      	style: 'border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif;';
                                     	id: y;
                                	with: [ 1 to: 24 do: [:x |
						|cell|
						cell := html td 
		                                      	style: 'border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif; background-image: url("images/emptyIcon.png");';
							id: x;
                                                        with: [ html img src: 'images/', (self imageFor: ((self level at: y) at: x)) , 'Icon.png' ];
                                                        class: ((self level at: y) at: x);
                                                        onClick: [
								(self level at: y) at: x put: (currentBrush). 
								self updateTable]]]]].
!

renderTextAreaOn: html
	textarea := html textarea with: (self level asString replace: 'a Array ' with: String cr , '#')
!

updateTable
	table contents: [:html | self renderTableOn: html].
! !

!SokobanLevelCreator class methodsFor: 'not yet classified'!

open
	self new appendToJQuery: 'body' asJQuery
! !

