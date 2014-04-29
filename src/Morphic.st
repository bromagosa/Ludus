Object subclass: #MorphicDemo
	instanceVariableNames: 'dropMorph draggableStringMorph redMorph'
	category: 'Morphic'!

!MorphicDemo methodsFor: 'not yet classified'!

initialize
	super initialize.
	self createDropMorph.
"	self createRedMorph."
	self createDraggableStringMorph.
	self eventLoop.
!

createDropMorph
	dropMorph := Morph new.
	world add: dropMorph.
	dropMorph show.
	dropMorph color: (<new Color(255,255,255)>).
	dropMorph setExtent: (<new MorphicPoint(300,300)>).
	dropMorph setPosition: (<new MorphicPoint(200,200)>).
	dropMorph acceptsDrops: true.
	dropMorph isDraggable: true.
	dropMorph drawNew.
!

createDraggableStringMorph
	draggableStringMorph := StringMorph new.
	draggableStringMorph show.
	draggableStringMorph isDraggable: true.
	dropMorph setExtent: (<new MorphicPoint(170,20)>).
	world add: draggableStringMorph.
	draggableStringMorph text: 'Drop me!!'.
                              
	draggableStringMorph drawNew.
!

eventLoop
	[self checkMouseEvent. self eventLoop] valueWithTimeout: 50
!

checkMouseEvent
	"We can't compare these Morphs in Amber, as they are different Smalltalk objects. Also, we can't access them inline, so we've got to store them in local vars"
	|morph morphAtPointer|
	morph := redMorph.
	morphAtPointer := world hand morphAtPointer.
	((world hand mouseButton = 'left') and: [(<morph == morphAtPointer>)])
		ifTrue: [self dontClickMe]
!

createRedMorph
	redMorph := Morph new.
	world add: redMorph.
	redMorph show.
	redMorph color: (<new Color(255,0,0)>).
	redMorph setPosition: (<new MorphicPoint(300,300)>).
                               
	redMorph drawNew.
!

dontClickMe
	|stringMorph|
	redMorph children isEmpty
		ifTrue: [
			stringMorph := StringMorph new.
			redMorph addChild: stringMorph.
			stringMorph show;
				setCenter: (redMorph center);
				text: 'OUCH!!';
				drawNew]
! !

