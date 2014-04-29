Smalltalk createPackage: 'AmberApplication'!
Object subclass: #AmberApplication
	instanceVariableNames: 'mainCanvas logCanvas'
	package: 'AmberApplication'!

!AmberApplication methodsFor: 'accessing'!

logCanvas
	^logCanvas ifNil:[logCanvas := (HTMLCanvas onJQuery: '#log' asJQuery)]
!

mainCanvas
  "Need to call mainCanvas as main is a JSProxy object mirroring the DOM"
  ^mainCanvas ifNil: [mainCanvas := (HTMLCanvas onJQuery: '#main' asJQuery)]
! !

!AmberApplication methodsFor: 'logging'!

log: aThing
	self logCanvas p: aThing.
	Transcript show: aThing asString
! !

!AmberApplication methodsFor: 'running'!

addMapWidget
	self mainCanvas
!

run
	self log: 'Welcome to Amber'.
	"self sampleMain."
	self setMapWidget.
!

sampleMain
	self mainCanvas p: 'Main Area'.
!

setMapWidget
	self mainCanvas with: MapWidget new
! !

!AmberApplication class methodsFor: 'as yet unclassified'!

run
	self new run
!

testTranscript
	|tst|
	tst := 'Welcome'.
	Transcript  show: tst
! !

TestCase subclass: #AmberApplicationTests
	instanceVariableNames: 'app'
	package: 'AmberApplication'!

!AmberApplicationTests methodsFor: 'testing'!

setUp
	app := AmberApplication new
!

testLog
	app log p: 'Test Log'.
!

testTranscript
	|tst|
	tst := 'Welcome'.
	Transcript  show: tst
! !

Widget subclass: #MapWidget
	instanceVariableNames: ''
	package: 'AmberApplication'!

!MapWidget methodsFor: 'as yet unclassified'!

initialize
	super initialize.
!

renderOn: html
	html p: 'MAPWIDGET'
! !

