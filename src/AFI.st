Object subclass: #Ajax
	instanceVariableNames: 'url settings options'
	package: 'AFI'!

!Ajax methodsFor: 'accessing'!

url: aString
	url := aString
!

options
	^ options ifNil: [options := Dictionary new ]
! !

!Ajax methodsFor: 'actions'!

send
	jQuery ajax: url options: options.
! !

!Ajax methodsFor: 'callback'!

onSuccessDo: aBlock
	"Set action to execute when Ajax request is successful. Pass received data as block argument. Block arguments: data, textStatus, jqXHR"
	self options at: 'success' put: aBlock
!

onErrorDo: aBlock
	"A block to be called if the request fails.Block arguments: jqXHR, textStatus, errorThrown"
	self options at: 'error' put: aBlock
!

onCompleteDo: aBlock
	"A block to be called when the request finishes (after success and error callbacks are executed). Block arguments: jqXHR, textStatus"
	self options at: 'complete' put: aBlock
! !

!Ajax class methodsFor: 'initialize'!

url: aString
	^ self new 
		url: aString;
		yourself
! !

