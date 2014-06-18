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

FSMState subclass: #OVSaucerWanderingState
	instanceVariableNames: ''
	package: 'OVNI-AI'!

!OVSaucerWanderingState methodsFor: 'control'!

stepOnGame: aGame
	self context moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).
! !

