Smalltalk createPackage: 'OVNI-AI'!
FSMState subclass: #OVAsteroidMovingState
	instanceVariableNames: 'goingDown'
	package: 'OVNI-AI'!

!OVAsteroidMovingState methodsFor: 'accessing'!

goingDown
	^ goingDown ifNil: [ goingDown := #(true false) atRandom ]
!

goingDown: anObject
	goingDown := anObject
! !

!OVAsteroidMovingState methodsFor: 'control'!

checkBounceOnGame: aGame
	self context centre y >= aGame height ifTrue: [ self goingDown: false ].
	self context centre y <= 0 ifTrue: [ self goingDown: true ].
!

stepOnGame: aGame
	self goingDown
		ifTrue: [ self context moveCentreBy: (self context toughness / 2 * -1) @ 1 ]
		ifFalse: [ self context moveCentreBy: (self context toughness / 2 * -1) @ -1 ].
	self checkBounceOnGame: aGame
! !

FSMState subclass: #OVBossArrivingState
	instanceVariableNames: ''
	package: 'OVNI-AI'!

!OVBossArrivingState methodsFor: 'control'!

start
	self context centre: 900@250.
!

stepOnGame: aGame
	self context moveCentreBy: -2 @ (3 atRandom - 2).
	self context x < 550 ifTrue: [ self switchToState: OVBossCircularMovementState ]
! !

FSMState subclass: #OVBossCircularMovementState
	instanceVariableNames: 'currentAngle circleCentre'
	package: 'OVNI-AI'!

!OVBossCircularMovementState methodsFor: 'accessing'!

circleCentre
	^ circleCentre
!

circleCentre: anObject
	circleCentre := anObject
!

currentAngle
	^ currentAngle
!

currentAngle: anObject
	currentAngle := anObject
!

radius
	^ 100
! !

!OVBossCircularMovementState methodsFor: 'control'!

start
	self 
		currentAngle: 0;
		circleCentre: self context centre - (self radius @ 0)
!

stepOnGame: aGame
	self move.
	self currentAngle: self currentAngle + 0.1.
	self currentAngle > (Number pi * 8) ifTrue: [ self switchToState: OVBossRandomWarpState ]
! !

!OVBossCircularMovementState methodsFor: 'movement'!

move
	self context centre: self circleCentre + ((self currentAngle cos * self radius) @ (self currentAngle sin * self radius))
! !

FSMState subclass: #OVBossRandomWarpState
	instanceVariableNames: ''
	package: 'OVNI-AI'!

!OVBossRandomWarpState methodsFor: 'control'!

stepOnGame: aGame
	aGame everyStepNumber: 100 do: [ self warpOnGame: aGame ].
	aGame everyStepNumber: 800 do: [ self switchToState: OVBossRectangularMovementState ].
!

warpOnGame: aGame
	self context centre: 
		((aGame width / 2) + ((aGame width / 2) - self context width) atRandom + (self context width / 2))
			@ ((aGame height - self context height) atRandom + (self context height / 2))
! !

FSMState subclass: #OVBossRectangularMovementState
	instanceVariableNames: 'currentDestination'
	package: 'OVNI-AI'!

!OVBossRectangularMovementState methodsFor: 'accessing'!

currentDestination
	^ currentDestination ifNil: [ currentDestination := self startPosition ]
!

currentDestination: aPoint
	currentDestination := aPoint
!

startPosition
	^ 640@80
! !

!OVBossRectangularMovementState methodsFor: 'control'!

stepOnGame: aGame
	self move.
	aGame everyStepNumber: 1000 do: [ self switchToState: OVBossCircularMovementState ].
! !

!OVBossRectangularMovementState methodsFor: 'movement'!

move
	self context centre = self currentDestination 
		ifTrue: [ self nextDestination ]
		ifFalse: [ self context moveCentreTowards: self currentDestination speed: 4 ]
!

nextDestination
	self currentDestination:
		((Dictionary new
			at: 640@80 put: 80@80;
			at: 80@80 put: 80@460;
			at: 80@460 put: 640@460;
			at: 640@460 put: 640@80;
			yourself) at: self currentDestination)
! !

FSMState subclass: #OVSaucerAvoidingState
	instanceVariableNames: 'bullet'
	package: 'OVNI-AI'!

!OVSaucerAvoidingState methodsFor: 'accessing'!

bullet
	^ bullet
!

bullet: anObject
	bullet := anObject
! !

!OVSaucerAvoidingState methodsFor: 'control'!

moveAwayFrom: aSprite onGame: aGame
	self context moveCentreBy: aGame difficulty * -1
		@ (aSprite centre y > self context centre y 
			ifTrue: [ aGame difficulty * -1 ] 
			ifFalse: [ aGame difficulty ]).
!

stepOnGame: aGame
	self moveAwayFrom: self bullet onGame: aGame.
	(self context alignedWith: self bullet threshold: 50) 
		ifFalse: [ self switchToState: OVSaucerObservingState ].
	(self context alignedWith: aGame ship threshold: 10)
		ifTrue: [ self context shootOnGame: aGame ].
! !

FSMState subclass: #OVSaucerObservingState
	instanceVariableNames: ''
	package: 'OVNI-AI'!

!OVSaucerObservingState methodsFor: 'control'!

stepOnGame: aGame
	(self context alignedWithWhichOf: aGame bullets threshold: 50)
		ifNotNil: [ :bullet |
			self switchToState: OVSaucerAvoidingState.
			self context currentState bullet: bullet ]
		ifNil: [
			(self context alignedWith: aGame ship threshold: 10)
				ifFalse: [ self switchToState: OVSaucerSeekingState ]
				ifTrue: [ self context shootOnGame: aGame ].
			self move ]
! !

!OVSaucerObservingState methodsFor: 'movement'!

move
	self context moveCentreBy: -2 @ (5 atRandom - 3).
! !

FSMState subclass: #OVSaucerSeekingState
	instanceVariableNames: ''
	package: 'OVNI-AI'!

!OVSaucerSeekingState methodsFor: 'control'!

moveTowards: aSprite onGame: aGame
	self context moveCentreBy: aGame difficulty * -1
		@ (aSprite centre y > self context centre y 
			ifTrue: [ aGame difficulty ] 
			ifFalse: [ aGame difficulty * -1 ]).
!

stepOnGame: aGame
	self moveTowards: aGame ship onGame: aGame.
	(self context alignedWith: aGame ship threshold: 10)
		ifTrue: [ self switchToState: OVSaucerObservingState ].
	(self context alignedWithWhichOf: aGame bullets threshold: 25) 
		ifNotNil: [ :bullet | 
			self switchToState: OVSaucerAvoidingState.
			self context currentState bullet: bullet ]
! !

FSMState subclass: #OVWanderingState
	instanceVariableNames: ''
	package: 'OVNI-AI'!

!OVWanderingState methodsFor: 'control'!

stepOnGame: aGame
	self context moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).
! !

