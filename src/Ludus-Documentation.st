Smalltalk createPackage: 'Ludus-Documentation'!
Widget subclass: #LudusDoc
	instanceVariableNames: 'iframe'
	package: 'Ludus-Documentation'!
!LudusDoc commentStamp!
Document the documentation?!

!LudusDoc methodsFor: 'accessing'!

pages
	^ #('Game' 'Sprite' 'FrameGroup' 'Sound').
! !

!LudusDoc methodsFor: 'rendering'!

display: aPage
	iframe id: aPage;
		src: 'ludusdoc/' , aPage , '.html'.

	iframe asJQuery 
		bind: 'load'
		do: [ self resize ]
!

renderDocumentationOn: html
	html div id: 'links'; 
		with: [
			self pages
				do: [ :each | 
					html a
					class: 'classLink shadowed';
					with: each;
					onClick: [ self display: each ] ] ].

	iframe := html iframe onChange: [ self resize ].
!

renderOn: html
	self renderDocumentationOn: html.
!

resize
	iframe element height: iframe element contentWindow document body scrollHeight asString , 'px'. "Needed by Firefox, although the iframe always grows, never shrinks"
	iframe element style setProperty: 'height' to: '0px'. "Needed by Chrome"
	iframe element style setProperty: 'height' to: iframe element contentWindow document body scrollHeight asString , 'px'.
! !

