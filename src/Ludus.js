define("HOS/Ludus", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Ludus');
smalltalk.packages["Ludus"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('AbstractScreen', globals.Widget, ['inputHandler', 'canvas', 'context', 'fps', 'step'], 'Ludus');
smalltalk.addMethod(
smalltalk.method({
selector: "addFont:named:",
protocol: 'fonts',
fn: function (aFontSrc,aFontName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
$1="head"._asJQuery();
$4=_st("<style type=\x22text/css\x22> @font-face { font-family: \x22".__comma(aFontName)).__comma("\x22;src: local('☺'), url('");
$ctx1.sendIdx[","]=3;
$3=_st($4).__comma(aFontSrc);
$ctx1.sendIdx[","]=2;
$2=_st($3).__comma("') format('opentype');}</style>");
$ctx1.sendIdx[","]=1;
_st($1)._prepend_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addFont:named:",{aFontSrc:aFontSrc,aFontName:aFontName},globals.AbstractScreen)})},
args: ["aFontSrc", "aFontName"],
source: "addFont: aFontSrc named: aFontName\x0a\x09'head' asJQuery prepend: \x0a\x09\x09'<style type=\x22text/css\x22> @font-face { font-family: \x22'\x0a\x09\x09\x09, aFontName\x0a\x09\x09\x09, '\x22;src: local(''☺''), url('''\x0a\x09\x09\x09, aFontSrc\x0a\x09\x09\x09,''') format(''opentype'');}</style>'",
messageSends: ["prepend:", "asJQuery", ","],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor:",
protocol: 'attributes',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._canvas();
$2=_st("background-color: ".__comma(aColor)).__comma(";");
$ctx1.sendIdx[","]=1;
_st($1)._at_put_("style",$2);
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor:",{aColor:aColor},globals.AbstractScreen)})},
args: ["aColor"],
source: "backgroundColor: aColor\x0a\x09self canvas at: 'style' put: ('background-color: ', aColor , ';')",
messageSends: ["at:put:", "canvas", ","],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@canvas"];
return $1;
},
args: [],
source: "canvas\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@canvas"]=anObject;
return self},
args: ["anObject"],
source: "canvas: anObject\x0a\x09canvas := anObject",
messageSends: [],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "clearCanvas",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
$1=self._context();
$4=self._canvas();
$ctx1.sendIdx["canvas"]=1;
$3=_st($4)._element();
$ctx1.sendIdx["element"]=1;
$2=_st($3)._width();
_st($1)._clearRect_y_width_height_((0),(0),$2,_st(_st(self._canvas())._element())._height());
return self}, function($ctx1) {$ctx1.fill(self,"clearCanvas",{},globals.AbstractScreen)})},
args: [],
source: "clearCanvas\x0a\x09self context\x0a\x09\x09clearRect: 0\x0a\x09\x09y: 0\x0a\x09\x09width: self canvas element width\x0a\x09\x09height: self canvas element height.",
messageSends: ["clearRect:y:width:height:", "context", "width", "element", "canvas", "height"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;
},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.AbstractScreen)})},
args: [],
source: "draw\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "drawBackground:",
protocol: 'drawing',
fn: function (aBackground){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBackground)._drawOnContext_step_width_(self._context(),self["@step"],_st(_st(self._canvas())._element())._width());
return self}, function($ctx1) {$ctx1.fill(self,"drawBackground:",{aBackground:aBackground},globals.AbstractScreen)})},
args: ["aBackground"],
source: "drawBackground: aBackground\x0a\x09aBackground drawOnContext: self context step: step width: self canvas element width",
messageSends: ["drawOnContext:step:width:", "context", "width", "element", "canvas"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "drawSprite:",
protocol: 'drawing',
fn: function (aSprite){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aSprite)._drawOnContext_step_(self._context(),self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"drawSprite:",{aSprite:aSprite},globals.AbstractScreen)})},
args: ["aSprite"],
source: "drawSprite: aSprite\x0a\x09aSprite drawOnContext: self context step: step",
messageSends: ["drawOnContext:step:", "context"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "drawSpriteCollection:",
protocol: 'drawing',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aSpriteCollection)._do_((function(eachSprite){
return smalltalk.withContext(function($ctx2) {
return self._drawSprite_(eachSprite);
}, function($ctx2) {$ctx2.fillBlock({eachSprite:eachSprite},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawSpriteCollection:",{aSpriteCollection:aSpriteCollection},globals.AbstractScreen)})},
args: ["aSpriteCollection"],
source: "drawSpriteCollection: aSpriteCollection\x0a\x09aSpriteCollection\x0a\x09\x09do: [ :eachSprite | \x0a\x09\x09\x09self drawSprite: eachSprite ]",
messageSends: ["do:", "drawSprite:"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "everyStepNumber:do:",
protocol: 'control',
fn: function (anInteger,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@step"]).__backslash_backslash(anInteger)).__eq((0));
_st($1)._ifTrue_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"everyStepNumber:do:",{anInteger:anInteger,aBlock:aBlock},globals.AbstractScreen)})},
args: ["anInteger", "aBlock"],
source: "everyStepNumber: anInteger do: aBlock\x0a\x09(step \x5c\x5c anInteger) = 0 ifTrue: aBlock",
messageSends: ["ifTrue:", "=", "\x5c\x5c"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "fps",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@fps"];
return $1;
},
args: [],
source: "fps\x0a\x09^ fps",
messageSends: [],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "fps:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@fps"]=anInteger;
return self},
args: ["anInteger"],
source: "fps: anInteger\x0a\x09fps := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "gameLoop",
protocol: 'control - private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isGameOver();
if(! smalltalk.assert($1)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._currentScreen();
_st($2)._step();
$3=_st($2)._draw();
$3;
self["@step"]=_st(self["@step"]).__plus((1));
self["@step"];
return self._gameLoop();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._valueWithTimeout_((1000).__slash(self["@fps"]));
};
return self}, function($ctx1) {$ctx1.fill(self,"gameLoop",{},globals.AbstractScreen)})},
args: [],
source: "gameLoop\x0a\x09\x22Do not override me, use #step and #draw instead\x22\x0a\x09self isGameOver\x0a\x09\x09ifFalse: [[\x0a\x09\x09\x09self currentScreen\x0a\x09\x09\x09\x09step;\x0a\x09\x09\x09\x09draw.\x0a\x09\x09\x09step := step + 1.\x0a\x09\x09\x09self gameLoop ] valueWithTimeout: (1000 / fps) ]",
messageSends: ["ifFalse:", "isGameOver", "valueWithTimeout:", "step", "currentScreen", "draw", "+", "gameLoop", "/"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._canvas())._element())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},globals.AbstractScreen)})},
args: [],
source: "height\x0a\x09^ self canvas element height",
messageSends: ["height", "element", "canvas"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._canvas())._at_put_("height",anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"height:",{anInteger:anInteger},globals.AbstractScreen)})},
args: ["anInteger"],
source: "height: anInteger\x0a\x09self canvas at: 'height' put: anInteger.",
messageSends: ["at:put:", "canvas"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.AbstractScreen.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@fps"]=(30);
self["@step"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.AbstractScreen)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09fps := 30.\x0a\x09step := 1.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "inputHandler",
protocol: 'accessing',
fn: function (){
var self=this;
function $InputHandler(){return globals.InputHandler||(typeof InputHandler=="undefined"?nil:InputHandler)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@inputHandler"];
if(($receiver = $2) == null || $receiver.isNil){
self["@inputHandler"]=_st(_st($InputHandler())._new())._canvas_(self._canvas());
$1=self["@inputHandler"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputHandler",{},globals.AbstractScreen)})},
args: [],
source: "inputHandler\x0a\x09^ inputHandler ifNil: [ inputHandler := InputHandler new canvas: self canvas ]",
messageSends: ["ifNil:", "canvas:", "new", "canvas"],
referencedClasses: ["InputHandler"]
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self["@canvas"]=_st(html)._canvas();
$ctx1.sendIdx["canvas"]=1;
$1=self._canvas();
_st($1)._at_put_("width",(250));
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("height",(250));
$2=_st($1)._id_(_st(self._class())._name());
self["@context"]=_st(_st(self["@canvas"])._element())._getContext_("2d");
_st(self._inputHandler())._bindEvents();
self._startGame();
$3=self._gameLoop();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.AbstractScreen)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Do not override me, use #startGame instead\x22\x0a\x09canvas := html canvas.\x0a\x09self canvas \x0a\x09\x09at: 'width' put: 250;\x0a\x09\x09at: 'height' put: 250;\x0a\x09\x09id: self class name.\x0a\x09context := canvas element getContext: '2d'.\x0a\x0a\x09self inputHandler bindEvents.\x0a\x0a\x09self \x0a\x09\x09startGame;\x0a\x09\x09gameLoop.",
messageSends: ["canvas", "at:put:", "id:", "name", "class", "getContext:", "element", "bindEvents", "inputHandler", "startGame", "gameLoop"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.AbstractScreen)})},
args: [],
source: "step\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "stepCount",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@step"];
return $1;
},
args: [],
source: "stepCount\x0a\x09^ step",
messageSends: [],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._canvas())._element())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},globals.AbstractScreen)})},
args: [],
source: "width\x0a\x09^ self canvas element width",
messageSends: ["width", "element", "canvas"],
referencedClasses: []
}),
globals.AbstractScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._canvas())._at_put_("width",anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"width:",{anInteger:anInteger},globals.AbstractScreen)})},
args: ["anInteger"],
source: "width: anInteger\x0a\x09self canvas at: 'width' put: anInteger.",
messageSends: ["at:put:", "canvas"],
referencedClasses: []
}),
globals.AbstractScreen);



smalltalk.addClass('Game', globals.AbstractScreen, ['end', 'sounds', 'screens', 'currentScreen'], 'Ludus');
globals.Game.comment="I am a game. You need to override a couple of my methods to make me usable:\x0a\x0a**#startGame** Here you can define my intial conditions, such as the size of the canvas, my sounds, the background properties, the FPS, etc.\x0a\x0a**#step**  Here you can define what has to be done at each game cycle, or step. This method should control posititions, collisions, mouse and keyboard events, etc. This method should not deal with any graphic properties, these should be dealt with by:\x0a\x0a**#draw**  This is the method that controls my view. Here you should define the drawing of sprites and other graphic elements. Don't forget to clear the canvas before re-drawing sprites, if your game requires so.";
smalltalk.addMethod(
smalltalk.method({
selector: "addScreen:named:",
protocol: 'screens',
fn: function (aScreen,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aScreen)._name_(aString);
$1=_st(aScreen)._game_(self);
_st(self._screens())._add_(aScreen);
return self}, function($ctx1) {$ctx1.fill(self,"addScreen:named:",{aScreen:aScreen,aString:aString},globals.Game)})},
args: ["aScreen", "aString"],
source: "addScreen: aScreen named: aString\x0a\x09aScreen\x0a\x09\x09name: aString;\x0a\x09\x09game: self.\x0a\x09self screens add: aScreen.",
messageSends: ["name:", "game:", "add:", "screens"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "addSound:",
protocol: 'audio',
fn: function (aSoundUrl){
var self=this;
function $Sound(){return globals.Sound||(typeof Sound=="undefined"?nil:Sound)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._hasSound_(aSoundUrl);
if(! smalltalk.assert($1)){
var sound;
sound=_st($Sound())._src_(aSoundUrl);
sound;
$2=sound;
_st($2)._cssClass_(_st(self._class())._name());
$3=_st($2)._appendToJQuery_("body"._asJQuery());
$3;
_st(self._sounds())._add_(sound);
};
return self}, function($ctx1) {$ctx1.fill(self,"addSound:",{aSoundUrl:aSoundUrl},globals.Game)})},
args: ["aSoundUrl"],
source: "addSound: aSoundUrl\x0a\x09(self hasSound: aSoundUrl) ifFalse: [\x0a\x09\x09| sound |\x0a\x09\x09sound := (Sound src: aSoundUrl).\x0a\x09\x09sound \x0a\x09\x09\x09cssClass: self class name;\x0a\x09\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x09self sounds add: sound.\x0a\x09]",
messageSends: ["ifFalse:", "hasSound:", "src:", "cssClass:", "name", "class", "appendToJQuery:", "asJQuery", "add:", "sounds"],
referencedClasses: ["Sound"]
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "currentScreen",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@currentScreen"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentScreen"]=self;
$1=self["@currentScreen"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentScreen",{},globals.Game)})},
args: [],
source: "currentScreen\x0a\x09^ currentScreen ifNil: [ currentScreen := self ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "end",
protocol: 'control',
fn: function (){
var self=this;
self["@end"]=true;
return self},
args: [],
source: "end\x0a\x09end := true",
messageSends: [],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "hasSound:",
protocol: 'audio',
fn: function (aSoundUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._sounds())._anySatisfy_((function(any){
return smalltalk.withContext(function($ctx2) {
return _st(_st(any)._src()).__eq(aSoundUrl);
}, function($ctx2) {$ctx2.fillBlock({any:any},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasSound:",{aSoundUrl:aSoundUrl},globals.Game)})},
args: ["aSoundUrl"],
source: "hasSound: aSoundUrl\x0a\x09^ self sounds anySatisfy: [ :any | any src = aSoundUrl ]",
messageSends: ["anySatisfy:", "sounds", "=", "src"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "isGameOver",
protocol: 'control - testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@end"];
if(($receiver = $2) == null || $receiver.isNil){
self["@end"]=false;
$1=self["@end"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isGameOver",{},globals.Game)})},
args: [],
source: "isGameOver\x0a\x09^ end ifNil: [ end := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "kill",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._end();
_st(self._class())._stop();
return self}, function($ctx1) {$ctx1.fill(self,"kill",{},globals.Game)})},
args: [],
source: "kill\x0a\x09self end.\x0a\x09self class stop.",
messageSends: ["end", "stop", "class"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._kill();
self._initialize();
$1=self._start();
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},globals.Game)})},
args: [],
source: "restart\x0a\x09self\x0a\x09\x09kill;\x0a\x09\x09initialize;\x0a\x09\x09start.",
messageSends: ["kill", "initialize", "start"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "screenNamed:",
protocol: 'screens',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._screens())._detect_ifNone_((function(which){
return smalltalk.withContext(function($ctx2) {
return _st(_st(which)._name()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({which:which},$ctx1,1)})}),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"screenNamed:",{aString:aString},globals.Game)})},
args: ["aString"],
source: "screenNamed: aString\x0a\x09^ self screens detect: [ :which | which name = aString ] ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "screens", "=", "name"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "screens",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@screens"];
if(($receiver = $2) == null || $receiver.isNil){
self["@screens"]=[];
$1=self["@screens"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"screens",{},globals.Game)})},
args: [],
source: "screens\x0a\x09^ screens ifNil: [ screens := #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "soundNamed:",
protocol: 'audio',
fn: function (aName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._sounds())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._id()).__eq(aName);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"soundNamed:",{aName:aName},globals.Game)})},
args: ["aName"],
source: "soundNamed: aName\x0a\x09^ self sounds detect: [ :each | each id = aName ]",
messageSends: ["detect:", "sounds", "=", "id"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "sounds",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@sounds"];
if(($receiver = $2) == null || $receiver.isNil){
self["@sounds"]=[];
$1=self["@sounds"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sounds",{},globals.Game)})},
args: [],
source: "sounds\x0a\x09^ sounds ifNil: [ sounds := #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.Game)})},
args: [],
source: "start\x0a\x09self appendToJQuery: ('body' asJQuery).",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.Game)})},
args: [],
source: "startGame\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "switchToGame",
protocol: 'screens',
fn: function (){
var self=this;
self["@currentScreen"]=self;
return self},
args: [],
source: "switchToGame\x0a\x09currentScreen := self",
messageSends: [],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "switchToScreen:",
protocol: 'screens',
fn: function (aScreen){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentScreen"]=_st(aScreen)._startScreen();
return self}, function($ctx1) {$ctx1.fill(self,"switchToScreen:",{aScreen:aScreen},globals.Game)})},
args: ["aScreen"],
source: "switchToScreen: aScreen\x0a\x09currentScreen := aScreen startScreen",
messageSends: ["startScreen"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "switchToScreenNamed:",
protocol: 'screens',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._switchToScreen_(self._screenNamed_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"switchToScreenNamed:",{aString:aString},globals.Game)})},
args: ["aString"],
source: "switchToScreenNamed: aString\x0a\x09self switchToScreen: (self screenNamed: aString)",
messageSends: ["switchToScreen:", "screenNamed:"],
referencedClasses: []
}),
globals.Game);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return self},
args: [],
source: "initialize\x0a\x09\x22uncomment if you want the game to start when loading the page\x22\x0a\x22\x09'self start\x22",
messageSends: [],
referencedClasses: []
}),
globals.Game.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'control',
fn: function (){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { 
var $1;
instance=_st(self._new())._start();
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"start",{instance:instance},globals.Game.klass)})},
args: [],
source: "start\x0a\x09|instance|\x0a\x09instance := self new start.\x0a\x09^ instance",
messageSends: ["start", "new"],
referencedClasses: []
}),
globals.Game.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stop",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3;
$1=_st(document)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._unbind_("keydown");
$ctx1.sendIdx["unbind:"]=1;
$2=_st($1)._unbind_("keyup");
$5=self._name();
$ctx1.sendIdx["name"]=1;
$4="canvas#".__comma($5);
$ctx1.sendIdx[","]=1;
$3=_st($4)._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($3)._remove();
$ctx1.sendIdx["remove"]=1;
_st(_st("audio.".__comma(self._name()))._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"stop",{},globals.Game.klass)})},
args: [],
source: "stop\x0a\x09document asJQuery\x0a\x09\x09unbind: 'keydown';\x0a\x09\x09unbind: 'keyup'.\x0a\x09('canvas#' , self name) asJQuery remove.\x0a\x09('audio.' , self name) asJQuery remove.",
messageSends: ["unbind:", "asJQuery", "remove", ",", "name"],
referencedClasses: []
}),
globals.Game.klass);


smalltalk.addClass('Screen', globals.AbstractScreen, ['game', 'name'], 'Ludus');
globals.Screen.comment="I am a game screen. I need to implement #startScreen, #step and #draw, as these will be called by the game who owns me.\x0aI can represent many things: levels, menu screens, or anything that needs to change the whole canvas.";
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._game())._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},globals.Screen)})},
args: [],
source: "canvas\x0a\x09^ self game canvas",
messageSends: ["canvas", "game"],
referencedClasses: []
}),
globals.Screen);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._game())._context();
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},globals.Screen)})},
args: [],
source: "context\x0a\x09^ self game context",
messageSends: ["context", "game"],
referencedClasses: []
}),
globals.Screen);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:",
protocol: 'drawing',
fn: function (aDrawable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDrawable)._drawOnContext_(self._context());
return self}, function($ctx1) {$ctx1.fill(self,"draw:",{aDrawable:aDrawable},globals.Screen)})},
args: ["aDrawable"],
source: "draw: aDrawable\x0a\x09aDrawable drawOnContext: self context",
messageSends: ["drawOnContext:", "context"],
referencedClasses: []
}),
globals.Screen);

smalltalk.addMethod(
smalltalk.method({
selector: "game",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@game"];
return $1;
},
args: [],
source: "game\x0a\x09^ game",
messageSends: [],
referencedClasses: []
}),
globals.Screen);

smalltalk.addMethod(
smalltalk.method({
selector: "game:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@game"]=anObject;
return self},
args: ["anObject"],
source: "game: anObject\x0a\x09game := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Screen);

smalltalk.addMethod(
smalltalk.method({
selector: "inputHandler",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._game())._inputHandler();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputHandler",{},globals.Screen)})},
args: [],
source: "inputHandler\x0a\x09^ self game inputHandler",
messageSends: ["inputHandler", "game"],
referencedClasses: []
}),
globals.Screen);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@name"];
if(($receiver = $2) == null || $receiver.isNil){
$1=_st(self._class())._name();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},globals.Screen)})},
args: [],
source: "name\x0a\x09^ name ifNil: [ self class name ]",
messageSends: ["ifNil:", "name", "class"],
referencedClasses: []
}),
globals.Screen);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@name"]=anObject;
return self},
args: ["anObject"],
source: "name: anObject\x0a\x09name := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Screen);

smalltalk.addMethod(
smalltalk.method({
selector: "startScreen",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.Screen)})},
args: [],
source: "startScreen\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Screen);


smalltalk.addMethod(
smalltalk.method({
selector: "named:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { 
var $1;
instance=_st(self._new())._name_(aString);
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:",{aString:aString,instance:instance},globals.Screen.klass)})},
args: ["aString"],
source: "named: aString\x0a\x09| instance |\x0a\x09instance := self new name: aString.\x0a\x09^ instance",
messageSends: ["name:", "new"],
referencedClasses: []
}),
globals.Screen.klass);


smalltalk.addClass('Menu', globals.Screen, ['options', 'currentOption', 'pointer', 'optionSeparation', 'pointerOriginY'], 'Ludus');
smalltalk.addMethod(
smalltalk.method({
selector: "currentOption",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@currentOption"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentOption"]=_st(self._options())._first();
$1=self["@currentOption"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentOption",{},globals.Menu)})},
args: [],
source: "currentOption\x0a\x09^ currentOption ifNil: [ currentOption := self options first ]",
messageSends: ["ifNil:", "first", "options"],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "currentOption:",
protocol: 'accessing',
fn: function (anOption){
var self=this;
self["@currentOption"]=anOption;
return self},
args: ["anOption"],
source: "currentOption: anOption\x0a\x09currentOption := anOption",
messageSends: [],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "nextOption",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$6,$5,$4,$3,$1,$7;
$2=self._options();
$ctx1.sendIdx["options"]=1;
$6=self._options();
$ctx1.sendIdx["options"]=2;
$5=_st($6)._indexOf_(self._currentOption());
$4=_st($5).__plus((1));
$3=_st($4)._min_(_st(self._options())._size());
$1=_st($2)._at_($3);
self._currentOption_($1);
$7=self._placePointer();
return self}, function($ctx1) {$ctx1.fill(self,"nextOption",{},globals.Menu)})},
args: [],
source: "nextOption\x0a\x09self \x0a\x09\x09currentOption: \x0a\x09\x09\x09(self options at: \x0a\x09\x09\x09\x09(((self options indexOf: self currentOption) + 1) min: self options size));\x0a\x09\x09placePointer.",
messageSends: ["currentOption:", "at:", "options", "min:", "+", "indexOf:", "currentOption", "size", "placePointer"],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "optionSeparation",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@optionSeparation"];
if(($receiver = $2) == null || $receiver.isNil){
self["@optionSeparation"]=(50);
$1=self["@optionSeparation"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionSeparation",{},globals.Menu)})},
args: [],
source: "optionSeparation\x0a\x09^ optionSeparation ifNil: [ optionSeparation := 50 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "optionSeparation:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@optionSeparation"]=anObject;
return self},
args: ["anObject"],
source: "optionSeparation: anObject\x0a\x09optionSeparation := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "options",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@options"];
if(($receiver = $2) == null || $receiver.isNil){
self["@options"]=[];
$1=self["@options"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"options",{},globals.Menu)})},
args: [],
source: "options\x0a\x09^ options ifNil: [ options := #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@options"]=anObject;
return self},
args: ["anObject"],
source: "options: anObject\x0a\x09options := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "placePointer",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._pointer())._y_(_st(_st(_st(_st(self._options())._indexOf_(self._currentOption())).__minus((1))).__star(self._optionSeparation())).__plus(self._pointerOriginY()));
return self}, function($ctx1) {$ctx1.fill(self,"placePointer",{},globals.Menu)})},
args: [],
source: "placePointer\x0a\x09self pointer y: (((self options indexOf: self currentOption) - 1) * self optionSeparation) +  self pointerOriginY",
messageSends: ["y:", "pointer", "+", "*", "-", "indexOf:", "options", "currentOption", "optionSeparation", "pointerOriginY"],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "pointer",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@pointer"];
return $1;
},
args: [],
source: "pointer\x0a\x09^ pointer",
messageSends: [],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "pointer:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@pointer"]=anObject;
return self},
args: ["anObject"],
source: "pointer: anObject\x0a\x09pointer := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "pointerOriginY",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@pointerOriginY"];
if(($receiver = $2) == null || $receiver.isNil){
self["@pointerOriginY"]=(100);
$1=self["@pointerOriginY"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"pointerOriginY",{},globals.Menu)})},
args: [],
source: "pointerOriginY\x0a\x09^ pointerOriginY ifNil: [ pointerOriginY := 100 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "pointerOriginY:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@pointerOriginY"]=anObject;
return self},
args: ["anObject"],
source: "pointerOriginY: anObject\x0a\x09pointerOriginY := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "previousOption",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=self._options();
$ctx1.sendIdx["options"]=1;
$1=_st($2)._at_(_st(_st(_st(self._options())._indexOf_(self._currentOption())).__minus((1)))._max_((1)));
self._currentOption_($1);
$3=self._placePointer();
return self}, function($ctx1) {$ctx1.fill(self,"previousOption",{},globals.Menu)})},
args: [],
source: "previousOption\x0a\x09self \x0a\x09\x09currentOption: \x0a\x09\x09\x09(self options at: \x0a\x09\x09\x09\x09(((self options indexOf: self currentOption) - 1) max: 1)) ;\x0a\x09\x09placePointer.",
messageSends: ["currentOption:", "at:", "options", "max:", "-", "indexOf:", "currentOption", "placePointer"],
referencedClasses: []
}),
globals.Menu);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._inputHandler();
_st($1)._onKeyPressed_do_(_st($Key())._downArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._nextOption();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["onKeyPressed:do:"]=1;
_st($1)._onKeyPressed_do_(_st($Key())._upArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._previousOption();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["onKeyPressed:do:"]=2;
_st($1)._onKeyPressed_do_(_st($Key())._enter(),(function(){
return smalltalk.withContext(function($ctx2) {
$2=self._currentOption();
$ctx2.sendIdx["currentOption"]=1;
return self._perform_($2);
$ctx2.sendIdx["perform:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["onKeyPressed:do:"]=3;
$3=_st($1)._onKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._perform_(self._currentOption());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.Menu)})},
args: [],
source: "step\x0a\x09self inputHandler \x0a\x09\x09onKeyPressed: Key downArrow do: [ self nextOption ];\x0a\x09\x09onKeyPressed: Key upArrow do: [ self previousOption ];\x0a\x09\x09onKeyPressed: Key enter do: [ self perform: self currentOption ];\x0a\x09\x09onKeyPressed: Key space do: [ self perform: self currentOption ]",
messageSends: ["onKeyPressed:do:", "inputHandler", "downArrow", "nextOption", "upArrow", "previousOption", "enter", "perform:", "currentOption", "space"],
referencedClasses: ["Key"]
}),
globals.Menu);



smalltalk.addClass('Animation', globals.Object, ['spriteSheet', 'currentFrameGroup', 'frameGroups', 'animating', 'loop', 'image'], 'Ludus');
smalltalk.addMethod(
smalltalk.method({
selector: "addFrameGroupNamed:origin:size:frameCount:",
protocol: 'frames',
fn: function (aString,anOriginPoint,aSizePoint,anInteger){
var self=this;
function $FrameGroup(){return globals.FrameGroup||(typeof FrameGroup=="undefined"?nil:FrameGroup)}
return smalltalk.withContext(function($ctx1) { 
_st(self._frameGroups())._add_(_st(_st($FrameGroup())._new())._identifier_origin_frameSize_frameCount_(aString,anOriginPoint,aSizePoint,anInteger));
return self}, function($ctx1) {$ctx1.fill(self,"addFrameGroupNamed:origin:size:frameCount:",{aString:aString,anOriginPoint:anOriginPoint,aSizePoint:aSizePoint,anInteger:anInteger},globals.Animation)})},
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: "addFrameGroupNamed: aString origin: anOriginPoint size: aSizePoint frameCount: anInteger\x0a\x09self frameGroups \x0a\x09\x09add: \x0a\x09\x09\x09(FrameGroup new \x0a\x09\x09\x09\x09identifier: aString\x0a\x09\x09\x09\x09origin: anOriginPoint\x0a\x09\x09\x09\x09frameSize: aSizePoint\x0a\x09\x09\x09\x09frameCount: anInteger)",
messageSends: ["add:", "frameGroups", "identifier:origin:frameSize:frameCount:", "new"],
referencedClasses: ["FrameGroup"]
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "animating",
protocol: 'animation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@animating"];
if(($receiver = $1) == null || $receiver.isNil){
self["@animating"]=true;
self["@animating"];
} else {
$1;
};
$2=_st(self["@animating"]).__and(_st(self._loop()).__or(_st(self._atLastFrame())._not()));
return $2;
}, function($ctx1) {$ctx1.fill(self,"animating",{},globals.Animation)})},
args: [],
source: "animating\x0a\x09animating ifNil: [ animating := true ].\x0a\x09\x0a\x09^ (animating & (self loop | self atLastFrame not))",
messageSends: ["ifNil:", "&", "|", "loop", "not", "atLastFrame"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "atLastFrame",
protocol: 'frames',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._currentFrameGroup())._atLastFrame();
return $1;
}, function($ctx1) {$ctx1.fill(self,"atLastFrame",{},globals.Animation)})},
args: [],
source: "atLastFrame\x0a\x09^ self currentFrameGroup atLastFrame",
messageSends: ["atLastFrame", "currentFrameGroup"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentFrameGroup",
protocol: 'frames',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@currentFrameGroup"];
if(($receiver = $2) == null || $receiver.isNil){
$1=_st(self._frameGroups())._first();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentFrameGroup",{},globals.Animation)})},
args: [],
source: "currentFrameGroup\x0a\x09^ currentFrameGroup ifNil: [ self frameGroups first ]",
messageSends: ["ifNil:", "first", "frameGroups"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentFrameGroup:",
protocol: 'frames',
fn: function (anIdentifier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentFrameGroup"]=self._frameGroupNamed_(anIdentifier);
return self}, function($ctx1) {$ctx1.fill(self,"currentFrameGroup:",{anIdentifier:anIdentifier},globals.Animation)})},
args: ["anIdentifier"],
source: "currentFrameGroup: anIdentifier\x0a\x09currentFrameGroup := self frameGroupNamed: anIdentifier.",
messageSends: ["frameGroupNamed:"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOnContext:",
protocol: 'drawing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"drawOnContext:",{aContext:aContext},globals.Animation)})},
args: ["aContext"],
source: "drawOnContext: aContext\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOnContext:step:",
protocol: 'drawing',
fn: function (aContext,aStep){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._drawOnContext_(aContext);
$1=self._nextFrameWithStep_(aStep);
return self}, function($ctx1) {$ctx1.fill(self,"drawOnContext:step:",{aContext:aContext,aStep:aStep},globals.Animation)})},
args: ["aContext", "aStep"],
source: "drawOnContext: aContext step: aStep\x0a\x09self \x0a\x09\x09drawOnContext: aContext;\x0a\x09\x09nextFrameWithStep: aStep.",
messageSends: ["drawOnContext:", "nextFrameWithStep:"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "frameGroupNamed:",
protocol: 'frames',
fn: function (anIdentifier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._frameGroups())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._identifier()).__eq(anIdentifier);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"frameGroupNamed:",{anIdentifier:anIdentifier},globals.Animation)})},
args: ["anIdentifier"],
source: "frameGroupNamed: anIdentifier\x0a\x09^ self frameGroups detect: [ :each | each identifier = anIdentifier ].",
messageSends: ["detect:", "frameGroups", "=", "identifier"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "frameGroups",
protocol: 'frames',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@frameGroups"];
if(($receiver = $2) == null || $receiver.isNil){
self["@frameGroups"]=_st($Array())._new();
$1=self["@frameGroups"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"frameGroups",{},globals.Animation)})},
args: [],
source: "frameGroups\x0a\x09^ frameGroups ifNil: [ frameGroups := Array new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "frameRate:",
protocol: 'animation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._frameGroups())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._frameRate_(anInteger);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"frameRate:",{anInteger:anInteger},globals.Animation)})},
args: ["anInteger"],
source: "frameRate: anInteger\x0a\x09self frameGroups do: [ :each | each frameRate: anInteger ]",
messageSends: ["do:", "frameGroups", "frameRate:"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
protocol: 'geometry',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._currentFrameGroup())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},globals.Animation)})},
args: [],
source: "height\x0a\x09^ self currentFrameGroup height",
messageSends: ["height", "currentFrameGroup"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@image"];
if(($receiver = $1) == null || $receiver.isNil){
self["@image"]=self._newImage();
self["@image"];
} else {
$1;
};
$2=self["@image"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"image",{},globals.Animation)})},
args: [],
source: "image\x0a\x09image ifNil: [ image := self newImage ].\x0a\x09^ image",
messageSends: ["ifNil:", "newImage"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "imageSrc:",
protocol: 'attributes',
fn: function (anImageUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._image())._src_(anImageUrl);
return self}, function($ctx1) {$ctx1.fill(self,"imageSrc:",{anImageUrl:anImageUrl},globals.Animation)})},
args: ["anImageUrl"],
source: "imageSrc: anImageUrl\x0a\x09self image src: anImageUrl",
messageSends: ["src:", "image"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "loop",
protocol: 'animation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@loop"];
if(($receiver = $2) == null || $receiver.isNil){
self["@loop"]=true;
$1=self["@loop"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"loop",{},globals.Animation)})},
args: [],
source: "loop\x0a\x09^ loop ifNil: [ loop := true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "loop:",
protocol: 'animation',
fn: function (aBoolean){
var self=this;
self["@loop"]=aBoolean;
return self},
args: ["aBoolean"],
source: "loop: aBoolean\x0a\x09loop := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "newImage",
protocol: 'aspect',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(document)._createElement_("img");
return $1;
}, function($ctx1) {$ctx1.fill(self,"newImage",{},globals.Animation)})},
args: [],
source: "newImage\x0a\x09^ document createElement: 'img'",
messageSends: ["createElement:"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrame",
protocol: 'frames',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._animating();
if(smalltalk.assert($1)){
_st(self._currentFrameGroup())._nextFrame();
};
return self}, function($ctx1) {$ctx1.fill(self,"nextFrame",{},globals.Animation)})},
args: [],
source: "nextFrame\x0a\x09self animating ifTrue: [ self currentFrameGroup nextFrame ].",
messageSends: ["ifTrue:", "animating", "nextFrame", "currentFrameGroup"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrameGroup",
protocol: 'frames',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1,$5,$8,$7,$6;
$2=self._currentFrameGroup();
$ctx1.sendIdx["currentFrameGroup"]=1;
$4=self._frameGroups();
$ctx1.sendIdx["frameGroups"]=1;
$3=_st($4)._last();
$1=_st($2).__eq($3);
if(smalltalk.assert($1)){
self["@currentFrameGroup"]=_st(self._frameGroups())._first();
self["@currentFrameGroup"];
} else {
$5=self._frameGroups();
$ctx1.sendIdx["frameGroups"]=2;
$8=self._frameGroups();
$ctx1.sendIdx["frameGroups"]=3;
$7=_st($8)._indexOf_(self._currentFrameGroup());
$6=_st($7).__plus((1));
self["@currentFrameGroup"]=_st($5)._at_($6);
self["@currentFrameGroup"];
};
return self}, function($ctx1) {$ctx1.fill(self,"nextFrameGroup",{},globals.Animation)})},
args: [],
source: "nextFrameGroup\x0a\x09(self currentFrameGroup = self frameGroups last)\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09currentFrameGroup := \x0a\x09\x09\x09\x09self frameGroups at: ((self frameGroups indexOf: self currentFrameGroup) + 1) ]\x0a\x09\x09ifTrue: [ currentFrameGroup := self frameGroups first ]",
messageSends: ["ifFalse:ifTrue:", "=", "currentFrameGroup", "last", "frameGroups", "at:", "+", "indexOf:", "first"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrameWithStep:",
protocol: 'frames',
fn: function (aStep){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aStep).__backslash_backslash(_st(self._currentFrameGroup())._frameRate())).__eq((0));
if(smalltalk.assert($1)){
self._nextFrame();
};
return self}, function($ctx1) {$ctx1.fill(self,"nextFrameWithStep:",{aStep:aStep},globals.Animation)})},
args: ["aStep"],
source: "nextFrameWithStep: aStep\x0a\x09(aStep \x5c\x5c self currentFrameGroup frameRate) = 0 \x0a\x09\x09ifTrue: [ self nextFrame ]",
messageSends: ["ifTrue:", "=", "\x5c\x5c", "frameRate", "currentFrameGroup", "nextFrame"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "restartAnimation",
protocol: 'animation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._stopAnimation();
_st(self._currentFrameGroup())._toFirstFrame();
self._startAnimation();
return self}, function($ctx1) {$ctx1.fill(self,"restartAnimation",{},globals.Animation)})},
args: [],
source: "restartAnimation\x0a\x09self stopAnimation.\x0a\x09self currentFrameGroup toFirstFrame.\x0a\x09self startAnimation.",
messageSends: ["stopAnimation", "toFirstFrame", "currentFrameGroup", "startAnimation"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "startAnimation",
protocol: 'animation',
fn: function (){
var self=this;
self["@animating"]=true;
return self},
args: [],
source: "startAnimation\x0a\x09animating := true",
messageSends: [],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "stopAnimation",
protocol: 'animation',
fn: function (){
var self=this;
self["@animating"]=false;
return self},
args: [],
source: "stopAnimation\x0a\x09animating := false",
messageSends: [],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "toFirstFrame",
protocol: 'frames',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentFrameGroup())._toFirstFrame();
return self}, function($ctx1) {$ctx1.fill(self,"toFirstFrame",{},globals.Animation)})},
args: [],
source: "toFirstFrame\x0a\x09self currentFrameGroup toFirstFrame",
messageSends: ["toFirstFrame", "currentFrameGroup"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleAnimation",
protocol: 'animation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@animating"]=_st(self["@animating"])._not();
return self}, function($ctx1) {$ctx1.fill(self,"toggleAnimation",{},globals.Animation)})},
args: [],
source: "toggleAnimation\x0a\x09animating := animating not",
messageSends: ["not"],
referencedClasses: []
}),
globals.Animation);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
protocol: 'geometry',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._currentFrameGroup())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},globals.Animation)})},
args: [],
source: "width\x0a\x09^ self currentFrameGroup width",
messageSends: ["width", "currentFrameGroup"],
referencedClasses: []
}),
globals.Animation);



smalltalk.addClass('Background', globals.Animation, ['parallaxSpeed'], 'Ludus');
smalltalk.addMethod(
smalltalk.method({
selector: "addParallaxNamed:origin:size:speed:",
protocol: 'parallax',
fn: function (aString,anOriginPoint,aSizePoint,anInteger){
var self=this;
function $ParallaxImage(){return globals.ParallaxImage||(typeof ParallaxImage=="undefined"?nil:ParallaxImage)}
return smalltalk.withContext(function($ctx1) { 
_st(self._frameGroups())._add_(_st(_st($ParallaxImage())._new())._identifier_origin_size_speed_(aString,anOriginPoint,aSizePoint,anInteger));
return self}, function($ctx1) {$ctx1.fill(self,"addParallaxNamed:origin:size:speed:",{aString:aString,anOriginPoint:anOriginPoint,aSizePoint:aSizePoint,anInteger:anInteger},globals.Background)})},
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: "addParallaxNamed: aString origin: anOriginPoint size: aSizePoint speed: anInteger\x0a\x09self frameGroups\x0a\x09\x09add: \x0a\x09\x09\x09(ParallaxImage new \x0a\x09\x09\x09\x09identifier: aString\x0a\x09\x09\x09\x09origin: anOriginPoint\x0a\x09\x09\x09\x09size: aSizePoint\x0a\x09\x09\x09\x09speed: anInteger)",
messageSends: ["add:", "frameGroups", "identifier:origin:size:speed:", "new"],
referencedClasses: ["ParallaxImage"]
}),
globals.Background);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOnContext:step:width:",
protocol: 'drawing',
fn: function (aContext,aStep,aWidth){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isParallax();
if(smalltalk.assert($1)){
$2=self._currentFrameGroup();
_st($2)._drawFromBackground_onContext_(self,aContext);
$3=_st($2)._move();
$3;
} else {
($ctx1.supercall = true, globals.Background.superclass.fn.prototype._drawOnContext_step_.apply(_st(self), [aContext,aStep]));
$ctx1.supercall = false;
};
return self}, function($ctx1) {$ctx1.fill(self,"drawOnContext:step:width:",{aContext:aContext,aStep:aStep,aWidth:aWidth},globals.Background)})},
args: ["aContext", "aStep", "aWidth"],
source: "drawOnContext: aContext step: aStep width: aWidth\x0a\x09self isParallax \x0a\x09\x09ifFalse: [ super drawOnContext: aContext step: aStep ]\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self currentFrameGroup \x0a\x09\x09\x09\x09drawFromBackground: self onContext: aContext;\x0a\x09\x09\x09\x09move ]",
messageSends: ["ifFalse:ifTrue:", "isParallax", "drawOnContext:step:", "drawFromBackground:onContext:", "currentFrameGroup", "move"],
referencedClasses: []
}),
globals.Background);

smalltalk.addMethod(
smalltalk.method({
selector: "isParallax",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._currentFrameGroup())._isParallax();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isParallax",{},globals.Background)})},
args: [],
source: "isParallax\x0a\x09^ self currentFrameGroup isParallax",
messageSends: ["isParallax", "currentFrameGroup"],
referencedClasses: []
}),
globals.Background);



smalltalk.addClass('Sprite', globals.Animation, ['speed', 'position', 'direction'], 'Ludus');
globals.Sprite.comment="I am a Sprite. I need to have a spritesheet, which is an image file that displays all possible frames I can paint organized in an ordered fashion.\x0aYou define different frame groups for this spritesheet, and you can cycle through these framegroups and through the frames of each of them.\x0aI have a direction, defined by a unit vector. This vector will always be a unit vector. If someone tries to force-set my direction to a vector that is not a unit one, I will just convert it.\x0aI handle collisions with other sprites and sprite collections.\x0aOf course, I also have a position, defined by cartesian coordinates.";
smalltalk.addMethod(
smalltalk.method({
selector: "bottomCollidesWith:",
protocol: 'collisions',
fn: function (aSprite){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aSprite)._topCollidesWith_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomCollidesWith:",{aSprite:aSprite},globals.Sprite)})},
args: ["aSprite"],
source: "bottomCollidesWith: aSprite\x0a\x09^ aSprite topCollidesWith: self",
messageSends: ["topCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomCollidesWithAnyOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aSpriteCollection)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._bottomCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomCollidesWithAnyOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "bottomCollidesWithAnyOf: aSpriteCollection\x0a\x09^ (aSpriteCollection select: [ :each | self bottomCollidesWith: each ]) notEmpty",
messageSends: ["notEmpty", "select:", "bottomCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomCollidesWithWhichOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aSpriteCollection)._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._bottomCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "bottomCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [ :each | self bottomCollidesWith: each ] ifNone: [ nil ])",
messageSends: ["detect:ifNone:", "bottomCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "centre",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(self._width()).__slash((2));
$ctx1.sendIdx["/"]=1;
$2=_st($3).__plus(self._x());
$ctx1.sendIdx["+"]=1;
$1=_st($2).__at(_st(_st(self._height()).__slash((2))).__plus(self._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"centre",{},globals.Sprite)})},
args: [],
source: "centre\x0a\x09^ ((self width / 2) + self x) @ ((self height / 2) + self y).",
messageSends: ["@", "+", "/", "width", "x", "height", "y"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "centre:",
protocol: 'attributes',
fn: function (aPoint){
var self=this;
var xOffset,yOffset;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
xOffset=_st(self._width()).__slash((2));
$ctx1.sendIdx["/"]=1;
yOffset=_st(self._height()).__slash((2));
$2=_st(_st(aPoint)._x()).__minus(xOffset);
$ctx1.sendIdx["-"]=1;
$1=_st($2).__at(_st(_st(aPoint)._y()).__minus(yOffset));
self._position_($1);
return self}, function($ctx1) {$ctx1.fill(self,"centre:",{aPoint:aPoint,xOffset:xOffset,yOffset:yOffset},globals.Sprite)})},
args: ["aPoint"],
source: "centre: aPoint\x0a\x09| xOffset yOffset |\x0a\x09xOffset := (self width / 2).\x0a\x09yOffset := (self height / 2).\x0a\x0a\x09self position: ((aPoint x - xOffset) @ (aPoint y - yOffset)).",
messageSends: ["/", "width", "height", "position:", "@", "-", "x", "y"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "collidesWith:",
protocol: 'collisions',
fn: function (aSprite){
var self=this;
var x0,x1,y0,y1;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$11,$12,$10,$14,$15,$13,$9,$16,$8,$7;
$1=self._x();
$ctx1.sendIdx["x"]=1;
$2=self._width();
$ctx1.sendIdx["width"]=1;
x0=_st($1).__plus($2);
$ctx1.sendIdx["+"]=1;
$3=_st(aSprite)._x();
$ctx1.sendIdx["x"]=2;
x1=_st($3).__plus(_st(aSprite)._width());
$ctx1.sendIdx["+"]=2;
$4=_st(aSprite)._y();
$ctx1.sendIdx["y"]=1;
$5=_st(aSprite)._height();
$ctx1.sendIdx["height"]=1;
y1=_st($4).__plus($5);
$ctx1.sendIdx["+"]=3;
$6=self._y();
$ctx1.sendIdx["y"]=2;
y0=_st($6).__plus(self._height());
$11=x0;
$12=_st(aSprite)._x();
$ctx1.sendIdx["x"]=3;
$10=_st($11).__gt($12);
$ctx1.sendIdx[">"]=1;
$14=y0;
$15=_st(aSprite)._y();
$ctx1.sendIdx["y"]=3;
$13=_st($14).__gt($15);
$ctx1.sendIdx[">"]=2;
$9=_st($10).__and($13);
$16=_st(x1).__gt(self._x());
$ctx1.sendIdx[">"]=3;
$8=_st($9).__and($16);
$ctx1.sendIdx["&"]=2;
$7=_st($8).__and(_st(y1).__gt(self._y()));
$ctx1.sendIdx["&"]=1;
return $7;
}, function($ctx1) {$ctx1.fill(self,"collidesWith:",{aSprite:aSprite,x0:x0,x1:x1,y0:y0,y1:y1},globals.Sprite)})},
args: ["aSprite"],
source: "collidesWith: aSprite\x0a\x09| x0 x1 y0 y1 |\x0a\x09x0 := self x + self width.\x0a\x09x1 := aSprite x + aSprite width.\x0a\x09y1 := aSprite y + aSprite height.\x0a\x09y0 := self y + self height.\x0a\x0a\x09^ (x0 > aSprite x) & (y0 > aSprite y) & (x1 > self x) & (y1 > self y).",
messageSends: ["+", "x", "width", "y", "height", "&", ">"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "collidesWithAnyOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aSpriteCollection)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._collidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collidesWithAnyOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "collidesWithAnyOf: aSpriteCollection\x0a\x09^ (aSpriteCollection select: [ :each | self collidesWith: each ]) notEmpty",
messageSends: ["notEmpty", "select:", "collidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "collidesWithWhichOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aSpriteCollection)._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._collidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"collidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "collidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [ :each | self collidesWith: each ] ifNone: [ nil ])",
messageSends: ["detect:ifNone:", "collidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "containsPoint:",
protocol: 'geometry',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $5,$6,$4,$7,$8,$3,$10,$11,$9,$2,$13,$14,$12,$1;
$5=self._x();
$ctx1.sendIdx["x"]=1;
$6=_st(aPoint)._x();
$ctx1.sendIdx["x"]=2;
$4=_st($5).__lt_eq($6);
$ctx1.sendIdx["<="]=1;
$3=_st($4)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$7=self._y();
$ctx2.sendIdx["y"]=1;
$8=_st(aPoint)._y();
$ctx2.sendIdx["y"]=2;
return _st($7).__lt_eq($8);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($3)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$10=self._width();
$11=self._x();
$ctx2.sendIdx["x"]=3;
$9=_st($10).__plus($11);
$ctx2.sendIdx["+"]=1;
return _st($9).__gt_eq(_st(aPoint)._x());
$ctx2.sendIdx[">="]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["and:"]=2;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$13=self._height();
$14=self._y();
$ctx2.sendIdx["y"]=3;
$12=_st($13).__plus($14);
return _st($12).__gt_eq(_st(aPoint)._y());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["and:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"containsPoint:",{aPoint:aPoint},globals.Sprite)})},
args: ["aPoint"],
source: "containsPoint: aPoint\x0a\x09^ (((self x <= aPoint x)\x0a\x09\x09and: [ self y <= aPoint y ])\x0a\x09\x09\x09and: [ self width + self x >= aPoint x ])\x0a\x09\x09\x09\x09and: [ self height + self y >= aPoint y ]",
messageSends: ["and:", "<=", "x", "y", ">=", "+", "width", "height"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "direction",
protocol: 'attributes',
fn: function (){
var self=this;
function $Math(){return globals.Math||(typeof Math=="undefined"?nil:Math)}
function $Number(){return globals.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$5,$6,$4,$8,$7,$receiver;
$1=self["@direction"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var angle;
$3=_st(self["@direction"])._y();
$ctx1.sendIdx["y"]=1;
$2=_st($3).__gt_eq((0));
if(smalltalk.assert($2)){
$5=_st(self["@direction"])._x();
$ctx1.sendIdx["x"]=1;
$6=_st(self["@direction"])._y();
$ctx1.sendIdx["y"]=2;
$4=_st($5).__slash($6);
$ctx1.sendIdx["/"]=1;
angle=_st($Math())._atan_($4);
$ctx1.sendIdx["atan:"]=1;
angle;
} else {
angle=_st(_st($Math())._atan_(_st(_st(self["@direction"])._x()).__slash(_st(self["@direction"])._y()))).__plus(_st($Number())._pi());
angle;
};
self["@direction"]=_st(_st($Math())._sin_(angle)).__at(_st($Math())._cos_(angle));
$ctx1.sendIdx["@"]=1;
self["@direction"];
};
$8=self["@direction"];
if(($receiver = $8) == null || $receiver.isNil){
self["@direction"]=(0).__at((1));
$7=self["@direction"];
} else {
$7=$8;
};
return $7;
}, function($ctx1) {$ctx1.fill(self,"direction",{},globals.Sprite)})},
args: [],
source: "direction\x0a\x09\x22The direction is always a unit vector\x22\x0a\x09direction ifNotNil: [\x0a\x09\x09| angle |\x0a\x09\x09direction y >= 0\x0a\x09\x09\x09ifTrue: [ angle := Math atan: (direction x / direction y) ]\x0a\x09\x09\x09ifFalse: [ angle := (Math atan: (direction x / direction y)) + Number pi ].\x0a\x09\x09direction := (Math sin: angle) @ (Math cos: angle) ].\x0a\x0a\x09^ direction ifNil: [ direction := 0@1 ]",
messageSends: ["ifNotNil:", "ifTrue:ifFalse:", ">=", "y", "atan:", "/", "x", "+", "pi", "@", "sin:", "cos:", "ifNil:"],
referencedClasses: ["Math", "Number"]
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "direction:",
protocol: 'attributes',
fn: function (aPoint){
var self=this;
var angle;
function $Math(){return globals.Math||(typeof Math=="undefined"?nil:Math)}
function $Number(){return globals.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$5,$3;
$2=_st(aPoint)._y();
$ctx1.sendIdx["y"]=1;
$1=_st($2).__gt_eq((0));
if(smalltalk.assert($1)){
$4=_st(aPoint)._x();
$ctx1.sendIdx["x"]=1;
$5=_st(aPoint)._y();
$ctx1.sendIdx["y"]=2;
$3=_st($4).__slash($5);
$ctx1.sendIdx["/"]=1;
angle=_st($Math())._atan_($3);
$ctx1.sendIdx["atan:"]=1;
angle;
} else {
angle=_st(_st($Math())._atan_(_st(_st(aPoint)._x()).__slash(_st(aPoint)._y()))).__plus(_st($Number())._pi());
angle;
};
self["@direction"]=_st(_st($Math())._sin_(angle)).__at(_st($Math())._cos_(angle));
return self}, function($ctx1) {$ctx1.fill(self,"direction:",{aPoint:aPoint,angle:angle},globals.Sprite)})},
args: ["aPoint"],
source: "direction: aPoint\x0a\x09\x22The direction is always a unit vector\x22\x0a\x09| angle |\x0a\x09aPoint y >= 0\x0a\x09\x09ifTrue: [ angle := Math atan: (aPoint x / aPoint y) ]\x0a\x09\x09ifFalse: [ angle := (Math atan: (aPoint x / aPoint y)) + Number pi ].\x0a\x09direction := (Math sin: angle) @ (Math cos: angle).",
messageSends: ["ifTrue:ifFalse:", ">=", "y", "atan:", "/", "x", "+", "pi", "@", "sin:", "cos:"],
referencedClasses: ["Math", "Number"]
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "distanceFromCentreTo:",
protocol: 'geometry',
fn: function (aPoint){
var self=this;
function $Math(){return globals.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
var $6,$5,$4,$3,$9,$8,$7,$2,$1;
$6=self._centre();
$ctx1.sendIdx["centre"]=1;
$5=_st($6)._x();
$ctx1.sendIdx["x"]=1;
$4=_st($5).__minus(_st(aPoint)._x());
$ctx1.sendIdx["-"]=1;
$3=_st($Math())._pow_to_($4,(2));
$ctx1.sendIdx["pow:to:"]=1;
$9=_st(self._centre())._y();
$ctx1.sendIdx["y"]=1;
$8=_st($9).__minus(_st(aPoint)._y());
$7=_st($Math())._pow_to_($8,(2));
$2=_st($3).__plus($7);
$1=_st($Math())._sqrt_($2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"distanceFromCentreTo:",{aPoint:aPoint},globals.Sprite)})},
args: ["aPoint"],
source: "distanceFromCentreTo: aPoint\x0a\x09^ Math \x0a\x09\x09sqrt: \x0a\x09\x09\x09((Math pow: ((self centre x) - (aPoint  x)) to: 2)\x0a\x09\x09\x09\x09+ (Math pow: ((self centre y) - (aPoint y)) to: 2))",
messageSends: ["sqrt:", "+", "pow:to:", "-", "x", "centre", "y"],
referencedClasses: ["Math"]
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOnContext:",
protocol: 'drawing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentFrameGroup())._drawFromSprite_onContext_(self,aContext);
return self}, function($ctx1) {$ctx1.fill(self,"drawOnContext:",{aContext:aContext},globals.Sprite)})},
args: ["aContext"],
source: "drawOnContext: aContext\x0a\x09self currentFrameGroup drawFromSprite: self onContext: aContext",
messageSends: ["drawFromSprite:onContext:", "currentFrameGroup"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "isAllInsideCanvas:",
protocol: 'position',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $5,$4,$6,$3,$8,$9,$7,$11,$10,$2,$13,$14,$12,$1;
$5=self._x();
$ctx1.sendIdx["x"]=1;
$4=_st($5).__gt_eq((0));
$ctx1.sendIdx[">="]=1;
$3=_st($4)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$6=self._y();
$ctx2.sendIdx["y"]=1;
return _st($6).__gt_eq((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($3)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$8=self._x();
$9=self._width();
$ctx2.sendIdx["width"]=1;
$7=_st($8).__plus($9);
$ctx2.sendIdx["+"]=1;
$11=_st(aCanvas)._element();
$ctx2.sendIdx["element"]=1;
$10=_st($11)._width();
return _st($7).__lt_eq($10);
$ctx2.sendIdx["<="]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["and:"]=2;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$13=self._y();
$14=self._height();
$ctx2.sendIdx["height"]=1;
$12=_st($13).__plus($14);
return _st($12).__lt_eq(_st(_st(aCanvas)._element())._height());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["and:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAllInsideCanvas:",{aCanvas:aCanvas},globals.Sprite)})},
args: ["aCanvas"],
source: "isAllInsideCanvas: aCanvas\x0a\x09^ ((((self x) >= 0) \x0a\x09\x09and: [ (self y) >= 0 ])\x0a\x09\x09\x09and: [ self x + self width <= aCanvas element width ])\x0a\x09\x09\x09\x09and: [ self y + self height <= aCanvas element height ]",
messageSends: ["and:", ">=", "x", "y", "<=", "+", "width", "element", "height"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "isBottomInsideCanvas:",
protocol: 'position',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1;
$3=self._y();
$4=self._height();
$ctx1.sendIdx["height"]=1;
$2=_st($3).__plus($4);
$1=_st($2).__lt_eq(_st(_st(aCanvas)._element())._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBottomInsideCanvas:",{aCanvas:aCanvas},globals.Sprite)})},
args: ["aCanvas"],
source: "isBottomInsideCanvas: aCanvas\x0a\x09^ (self y + self height) <= aCanvas element height",
messageSends: ["<=", "+", "y", "height", "element"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "isInsideCanvas:",
protocol: 'position',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $6,$7,$5,$4,$9,$10,$8,$3,$11,$13,$12,$2,$1;
$6=self._x();
$ctx1.sendIdx["x"]=1;
$7=self._width();
$ctx1.sendIdx["width"]=1;
$5=_st($6).__plus($7);
$ctx1.sendIdx["+"]=1;
$4=_st($5).__gt_eq((0));
$ctx1.sendIdx[">="]=1;
$3=_st($4)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$9=self._y();
$ctx2.sendIdx["y"]=1;
$10=self._height();
$ctx2.sendIdx["height"]=1;
$8=_st($9).__plus($10);
return _st($8).__gt_eq((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($3)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$11=self._x();
$13=_st(aCanvas)._element();
$ctx2.sendIdx["element"]=1;
$12=_st($13)._width();
return _st($11).__lt_eq($12);
$ctx2.sendIdx["<="]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["and:"]=2;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._y()).__lt_eq(_st(_st(aCanvas)._element())._height());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["and:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInsideCanvas:",{aCanvas:aCanvas},globals.Sprite)})},
args: ["aCanvas"],
source: "isInsideCanvas: aCanvas\x0a\x09^ ((((self x + self width) >= 0) \x0a\x09\x09and: [ (self y + self height) >= 0 ])\x0a\x09\x09\x09and: [ self x <= aCanvas element width ])\x0a\x09\x09\x09\x09and: [ self y <= aCanvas element height ]",
messageSends: ["and:", ">=", "+", "x", "width", "y", "height", "<=", "element"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "isLeftInsideCanvas:",
protocol: 'position',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._x()).__gt_eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLeftInsideCanvas:",{aCanvas:aCanvas},globals.Sprite)})},
args: ["aCanvas"],
source: "isLeftInsideCanvas: aCanvas\x0a\x09^ self x >= 0",
messageSends: [">=", "x"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "isRightInsideCanvas:",
protocol: 'position',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1;
$3=self._x();
$4=self._width();
$ctx1.sendIdx["width"]=1;
$2=_st($3).__plus($4);
$1=_st($2).__lt_eq(_st(_st(aCanvas)._element())._width());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRightInsideCanvas:",{aCanvas:aCanvas},globals.Sprite)})},
args: ["aCanvas"],
source: "isRightInsideCanvas: aCanvas\x0a\x09^ (self x + self width) <= aCanvas element width",
messageSends: ["<=", "+", "x", "width", "element"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "isTopInsideCanvas:",
protocol: 'position',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._y()).__gt_eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isTopInsideCanvas:",{aCanvas:aCanvas},globals.Sprite)})},
args: ["aCanvas"],
source: "isTopInsideCanvas: aCanvas\x0a\x09^ self y >= 0",
messageSends: [">=", "y"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "leftCollidesWith:",
protocol: 'collisions',
fn: function (aSprite){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aSprite)._rightCollidesWith_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftCollidesWith:",{aSprite:aSprite},globals.Sprite)})},
args: ["aSprite"],
source: "leftCollidesWith: aSprite\x0a\x09^ aSprite rightCollidesWith: self",
messageSends: ["rightCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "leftCollidesWithAnyOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aSpriteCollection)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._leftCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftCollidesWithAnyOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "leftCollidesWithAnyOf: aSpriteCollection\x0a\x09^ (aSpriteCollection select: [ :each | self leftCollidesWith: each ]) notEmpty",
messageSends: ["notEmpty", "select:", "leftCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "leftCollidesWithWhichOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aSpriteCollection)._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._leftCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "leftCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [ :each | self leftCollidesWith: each ] ifNone: [ nil ])",
messageSends: ["detect:ifNone:", "leftCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "moveCentreBy:",
protocol: 'movement',
fn: function (anOffset){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._centre_(_st(self._centre()).__plus(anOffset));
return self}, function($ctx1) {$ctx1.fill(self,"moveCentreBy:",{anOffset:anOffset},globals.Sprite)})},
args: ["anOffset"],
source: "moveCentreBy: anOffset\x0a\x09\x22aSprite moveCentreBy: 0@5\x22\x0a\x09self centre: self centre + anOffset",
messageSends: ["centre:", "+", "centre"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "moveCentreBy:speed:",
protocol: 'movement',
fn: function (anOffset,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._centre_(_st(self._centre()).__plus(_st(anOffset).__star(anInteger)));
return self}, function($ctx1) {$ctx1.fill(self,"moveCentreBy:speed:",{anOffset:anOffset,anInteger:anInteger},globals.Sprite)})},
args: ["anOffset", "anInteger"],
source: "moveCentreBy: anOffset speed: anInteger\x0a\x09\x22aSprite moveCentreBy: 0@5\x22\x0a\x09self centre: self centre + (anOffset * anInteger)",
messageSends: ["centre:", "+", "centre", "*"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@position"];
if(($receiver = $2) == null || $receiver.isNil){
self["@position"]=(0).__at((0));
$1=self["@position"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},globals.Sprite)})},
args: [],
source: "position\x0a\x09^ position ifNil: [ position := 0 @ 0 ]",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
protocol: 'attributes',
fn: function (aPoint){
var self=this;
var $1;
self["@position"]=aPoint;
$1=self["@position"];
return $1;
},
args: ["aPoint"],
source: "position: aPoint\x0a\x09^ position := aPoint",
messageSends: [],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "rightCollidesWith:",
protocol: 'collisions',
fn: function (aSprite){
var self=this;
var x0,y0,y1;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$9,$10,$8,$12,$13,$11,$7,$6,$15,$14,$5;
$1=self._x();
$ctx1.sendIdx["x"]=1;
x0=_st($1).__plus(self._width());
$ctx1.sendIdx["+"]=1;
$2=_st(aSprite)._y();
$ctx1.sendIdx["y"]=1;
$3=_st(aSprite)._height();
$ctx1.sendIdx["height"]=1;
y1=_st($2).__plus($3);
$ctx1.sendIdx["+"]=2;
$4=self._y();
$ctx1.sendIdx["y"]=2;
y0=_st($4).__plus(self._height());
$9=x0;
$10=_st(aSprite)._x();
$ctx1.sendIdx["x"]=2;
$8=_st($9).__gt_eq($10);
$ctx1.sendIdx[">="]=1;
$12=y0;
$13=_st(aSprite)._y();
$ctx1.sendIdx["y"]=3;
$11=_st($12).__gt_eq($13);
$ctx1.sendIdx[">="]=2;
$7=_st($8).__and($11);
$6=_st($7).__and(_st(y1).__gt_eq(self._y()));
$ctx1.sendIdx["&"]=2;
$15=self._x();
$ctx1.sendIdx["x"]=3;
$14=_st($15).__lt(_st(aSprite)._x());
$5=_st($6).__and($14);
$ctx1.sendIdx["&"]=1;
return $5;
}, function($ctx1) {$ctx1.fill(self,"rightCollidesWith:",{aSprite:aSprite,x0:x0,y0:y0,y1:y1},globals.Sprite)})},
args: ["aSprite"],
source: "rightCollidesWith: aSprite\x0a\x09| x0  y0 y1 |\x0a\x09x0 := self x + self width.\x0a\x09y1 := aSprite y + aSprite height.\x0a\x09y0 := self y + self height.\x0a\x0a\x09^ (x0 >= aSprite x) & (y0 >= aSprite y) & (y1 >= self y) & (self x < aSprite x).",
messageSends: ["+", "x", "width", "y", "height", "&", ">=", "<"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "rightCollidesWithAnyOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aSpriteCollection)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._rightCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"rightCollidesWithAnyOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "rightCollidesWithAnyOf: aSpriteCollection\x0a\x09^ (aSpriteCollection select: [ :each | self rightCollidesWith: each ]) notEmpty",
messageSends: ["notEmpty", "select:", "rightCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "rightCollidesWithWhichOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aSpriteCollection)._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._rightCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rightCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "rightCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [ :each | self rightCollidesWith: each ] ifNone: [ nil ])",
messageSends: ["detect:ifNone:", "rightCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "topCollidesWith:",
protocol: 'collisions',
fn: function (aSprite){
var self=this;
var x0,x1,y0,y1;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$9,$8,$11,$12,$10,$7,$14,$13,$6,$5;
$1=self._x();
$ctx1.sendIdx["x"]=1;
$2=self._width();
$ctx1.sendIdx["width"]=1;
x0=_st($1).__plus($2);
$ctx1.sendIdx["+"]=1;
$3=_st(aSprite)._x();
$ctx1.sendIdx["x"]=2;
x1=_st($3).__plus(_st(aSprite)._width());
$ctx1.sendIdx["+"]=2;
$4=_st(aSprite)._y();
$ctx1.sendIdx["y"]=1;
y1=_st($4).__plus(_st(aSprite)._height());
$9=self._y();
$ctx1.sendIdx["y"]=2;
$8=_st($9).__lt_eq(y1);
$11=x0;
$12=_st(aSprite)._x();
$ctx1.sendIdx["x"]=3;
$10=_st($11).__gt_eq($12);
$7=_st($8).__and($10);
$14=self._y();
$ctx1.sendIdx["y"]=3;
$13=_st($14).__gt(_st(aSprite)._y());
$6=_st($7).__and($13);
$ctx1.sendIdx["&"]=2;
$5=_st($6).__and(_st(self._x()).__lt(x1));
$ctx1.sendIdx["&"]=1;
return $5;
}, function($ctx1) {$ctx1.fill(self,"topCollidesWith:",{aSprite:aSprite,x0:x0,x1:x1,y0:y0,y1:y1},globals.Sprite)})},
args: ["aSprite"],
source: "topCollidesWith: aSprite\x0a\x09| x0 x1 y0 y1 |\x0a\x09x0 := self x + self width.\x0a\x09x1 := aSprite x + aSprite width.\x0a\x09y1 := aSprite y + aSprite height.\x0a\x0a\x09 ^ (self y <= y1) & (x0 >= aSprite x) & (self y > aSprite y) & (self x < x1)",
messageSends: ["+", "x", "width", "y", "height", "&", "<=", ">=", ">", "<"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "topCollidesWithAnyOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aSpriteCollection)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._topCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"topCollidesWithAnyOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "topCollidesWithAnyOf: aSpriteCollection\x0a\x09^ (aSpriteCollection select: [ :each | self topCollidesWith: each ]) notEmpty",
messageSends: ["notEmpty", "select:", "topCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "topCollidesWithWhichOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aSpriteCollection)._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._topCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"topCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "topCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [ :each | self topCollidesWith: each ] ifNone: [ nil ])",
messageSends: ["detect:ifNone:", "topCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "touchingMousePointer:",
protocol: 'events',
fn: function (mousePosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._containsPoint_(mousePosition);
return $1;
}, function($ctx1) {$ctx1.fill(self,"touchingMousePointer:",{mousePosition:mousePosition},globals.Sprite)})},
args: ["mousePosition"],
source: "touchingMousePointer: mousePosition\x0a\x09^ self containsPoint: mousePosition",
messageSends: ["containsPoint:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position())._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},globals.Sprite)})},
args: [],
source: "x\x0a\x09^ self position x",
messageSends: ["x", "position"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._position())._x_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"x:",{anInteger:anInteger},globals.Sprite)})},
args: ["anInteger"],
source: "x: anInteger\x0a\x09self position x: anInteger",
messageSends: ["x:", "position"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position())._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},globals.Sprite)})},
args: [],
source: "y\x0a\x09^ self position y",
messageSends: ["y", "position"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._position())._y_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"y:",{anInteger:anInteger},globals.Sprite)})},
args: ["anInteger"],
source: "y: anInteger\x0a\x09self position y: anInteger",
messageSends: ["y:", "position"],
referencedClasses: []
}),
globals.Sprite);



smalltalk.addClass('Drawable', globals.Object, ['origin', 'size', 'image', 'position'], 'Ludus');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOnContext:",
protocol: 'drawing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$6,$8,$7;
$1=self._image();
$3=self._origin();
$ctx1.sendIdx["origin"]=1;
$2=_st($3)._x();
$ctx1.sendIdx["x"]=1;
$4=_st(self._origin())._y();
$ctx1.sendIdx["y"]=1;
$5=self._width();
$ctx1.sendIdx["width"]=1;
$6=self._height();
$ctx1.sendIdx["height"]=1;
$8=self._position();
$ctx1.sendIdx["position"]=1;
$7=_st($8)._x();
_st(aContext)._drawImage_originX_originY_width_height_xPosition_yPosition_scaleWidth_scaleHeight_($1,$2,$4,$5,$6,$7,_st(self._position())._y(),self._width(),self._height());
return self}, function($ctx1) {$ctx1.fill(self,"drawOnContext:",{aContext:aContext},globals.Drawable)})},
args: ["aContext"],
source: "drawOnContext: aContext\x0a\x09aContext\x0a\x09\x09drawImage: self image\x0a\x09\x09originX: self origin x\x0a\x09\x09originY: self origin y\x0a\x09\x09width: self width\x0a\x09\x09height: self height\x0a\x09\x09xPosition: self position x\x0a\x09\x09yPosition: self position y\x0a\x09\x09scaleWidth: self width\x0a\x09\x09scaleHeight: self height.",
messageSends: ["drawImage:originX:originY:width:height:xPosition:yPosition:scaleWidth:scaleHeight:", "image", "x", "origin", "y", "width", "height", "position"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._size())._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},globals.Drawable)})},
args: [],
source: "height\x0a\x09^ self size y",
messageSends: ["y", "size"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@image"];
if(($receiver = $1) == null || $receiver.isNil){
self["@image"]=self._newImage();
self["@image"];
} else {
$1;
};
$2=self["@image"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"image",{},globals.Drawable)})},
args: [],
source: "image\x0a\x09image ifNil: [ image := self newImage ].\x0a\x09^ image",
messageSends: ["ifNil:", "newImage"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "isParallax",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isParallax\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "newImage",
protocol: 'aspect',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(document)._createElement_("img");
return $1;
}, function($ctx1) {$ctx1.fill(self,"newImage",{},globals.Drawable)})},
args: [],
source: "newImage\x0a\x09^ document createElement: 'img'",
messageSends: ["createElement:"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "origin",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@origin"];
return $1;
},
args: [],
source: "origin\x0a\x09^ origin",
messageSends: [],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "origin:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@origin"]=anObject;
return self},
args: ["anObject"],
source: "origin: anObject\x0a\x09origin := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@position"];
if(($receiver = $2) == null || $receiver.isNil){
self["@position"]=(0).__at((0));
$1=self["@position"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},globals.Drawable)})},
args: [],
source: "position\x0a\x09^ position ifNil: [ position := 0@0 ]",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
protocol: 'accessing',
fn: function (aPosition){
var self=this;
self["@position"]=aPosition;
return self},
args: ["aPosition"],
source: "position: aPosition\x0a\x09position := aPosition",
messageSends: [],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@size"];
return $1;
},
args: [],
source: "size\x0a\x09^ size",
messageSends: [],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@size"]=anObject;
return self},
args: ["anObject"],
source: "size: anObject\x0a\x09size := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
protocol: 'accessing',
fn: function (anImageUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._image();
_st($1)._src_(anImageUrl);
$2=_st($1)._yourself();
return self}, function($ctx1) {$ctx1.fill(self,"source:",{anImageUrl:anImageUrl},globals.Drawable)})},
args: ["anImageUrl"],
source: "source: anImageUrl\x0a\x09self image src: anImageUrl; yourself",
messageSends: ["src:", "image", "yourself"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "source:origin:size:position:",
protocol: 'accessing',
fn: function (aSourceString,anOriginPoint,aSizePoint,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._source_(aSourceString);
self._origin_(anOriginPoint);
self._size_(aSizePoint);
$1=self._position_(aPosition);
return self}, function($ctx1) {$ctx1.fill(self,"source:origin:size:position:",{aSourceString:aSourceString,anOriginPoint:anOriginPoint,aSizePoint:aSizePoint,aPosition:aPosition},globals.Drawable)})},
args: ["aSourceString", "anOriginPoint", "aSizePoint", "aPosition"],
source: "source: aSourceString origin: anOriginPoint size: aSizePoint position: aPosition\x0a\x09self \x0a\x09\x09source: aSourceString;\x0a\x09\x09origin: anOriginPoint;\x0a\x09\x09size: aSizePoint;\x0a\x09\x09position: aPosition",
messageSends: ["source:", "origin:", "size:", "position:"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._size())._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},globals.Drawable)})},
args: [],
source: "width\x0a\x09^ self size x",
messageSends: ["x", "size"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position())._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},globals.Drawable)})},
args: [],
source: "x\x0a\x09^ self position x",
messageSends: ["x", "position"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._position())._x_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"x:",{anInteger:anInteger},globals.Drawable)})},
args: ["anInteger"],
source: "x: anInteger\x0a\x09self position x: anInteger",
messageSends: ["x:", "position"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position())._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},globals.Drawable)})},
args: [],
source: "y\x0a\x09^ self position y",
messageSends: ["y", "position"],
referencedClasses: []
}),
globals.Drawable);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._position())._y_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"y:",{anInteger:anInteger},globals.Drawable)})},
args: ["anInteger"],
source: "y: anInteger\x0a\x09self position y: anInteger",
messageSends: ["y:", "position"],
referencedClasses: []
}),
globals.Drawable);



smalltalk.addClass('FrameGroup', globals.Drawable, ['identifier', 'frameCount', 'currentFrameNumber', 'frameRate'], 'Ludus');
globals.FrameGroup.comment="I represent a group of ordered frames. Each frame is a clip rectangle that a Sprite can retrieve from me to paint itself.";
smalltalk.addMethod(
smalltalk.method({
selector: "atLastFrame",
protocol: 'frames - testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._currentFrameNumber()).__eq(_st(self._frameCount()).__minus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atLastFrame",{},globals.FrameGroup)})},
args: [],
source: "atLastFrame\x0a\x09^ self currentFrameNumber = (self frameCount - 1)",
messageSends: ["=", "currentFrameNumber", "-", "frameCount"],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "currentFrameNumber",
protocol: 'frames',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@currentFrameNumber"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentFrameNumber"]=(0);
$1=self["@currentFrameNumber"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentFrameNumber",{},globals.FrameGroup)})},
args: [],
source: "currentFrameNumber\x0a\x09^ currentFrameNumber ifNil: [ currentFrameNumber := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "drawFromSprite:onContext:",
protocol: 'drawing',
fn: function (aSprite,aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5,$6,$7;
$1=_st(aSprite)._image();
$4=self._origin();
$ctx1.sendIdx["origin"]=1;
$3=_st($4)._x();
$ctx1.sendIdx["x"]=1;
$2=_st($3).__plus(self._offset());
$5=_st(self._origin())._y();
$ctx1.sendIdx["y"]=1;
$6=self._width();
$ctx1.sendIdx["width"]=1;
$7=self._height();
$ctx1.sendIdx["height"]=1;
_st(aContext)._drawImage_originX_originY_frameWidth_frameHeight_x_y_scaleWidth_scaleHeight_($1,$2,$5,$6,$7,_st(aSprite)._x(),_st(aSprite)._y(),self._width(),self._height());
return self}, function($ctx1) {$ctx1.fill(self,"drawFromSprite:onContext:",{aSprite:aSprite,aContext:aContext},globals.FrameGroup)})},
args: ["aSprite", "aContext"],
source: "drawFromSprite: aSprite onContext: aContext\x0a\x09aContext\x0a\x09\x09drawImage: aSprite image\x0a\x09\x09originX: self origin x + self offset\x0a\x09\x09originY: self origin y\x0a\x09\x09frameWidth: self width\x0a\x09\x09frameHeight: self height\x0a\x09\x09x: aSprite x \x0a\x09\x09y: aSprite y\x0a\x09\x09scaleWidth: self width\x0a\x09\x09scaleHeight: self height.",
messageSends: ["drawImage:originX:originY:frameWidth:frameHeight:x:y:scaleWidth:scaleHeight:", "image", "+", "x", "origin", "offset", "y", "width", "height"],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "frameCount",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@frameCount"];
return $1;
},
args: [],
source: "frameCount\x0a\x09^ frameCount",
messageSends: [],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "frameCount:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@frameCount"]=anInteger;
return self},
args: ["anInteger"],
source: "frameCount: anInteger\x0a\x09frameCount := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "frameRate",
protocol: 'frames',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@frameRate"];
if(($receiver = $2) == null || $receiver.isNil){
self["@frameRate"]=(5);
$1=self["@frameRate"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"frameRate",{},globals.FrameGroup)})},
args: [],
source: "frameRate\x0a\x09^ frameRate ifNil: [ frameRate := 5 ].",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "frameRate:",
protocol: 'frames',
fn: function (anInteger){
var self=this;
self["@frameRate"]=anInteger;
return self},
args: ["anInteger"],
source: "frameRate: anInteger\x0a\x09frameRate := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "frameSize",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"frameSize",{},globals.FrameGroup)})},
args: [],
source: "frameSize\x0a\x09^ self size",
messageSends: ["size"],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "identifier",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@identifier"];
return $1;
},
args: [],
source: "identifier\x0a\x09^ identifier",
messageSends: [],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "identifier:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@identifier"]=anObject;
return self},
args: ["anObject"],
source: "identifier: anObject\x0a\x09identifier := anObject",
messageSends: [],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "identifier:origin:frameSize:frameCount:",
protocol: 'attributes',
fn: function (aString,anOriginPoint,aSizePoint,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._identifier_(aString);
self._origin_(anOriginPoint);
self._size_(aSizePoint);
$1=self._frameCount_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"identifier:origin:frameSize:frameCount:",{aString:aString,anOriginPoint:anOriginPoint,aSizePoint:aSizePoint,anInteger:anInteger},globals.FrameGroup)})},
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: "identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger\x0a\x09self \x0a\x09\x09identifier: aString;\x0a\x09\x09origin: anOriginPoint;\x0a\x09\x09size: aSizePoint;\x0a\x09\x09frameCount: anInteger.",
messageSends: ["identifier:", "origin:", "size:", "frameCount:"],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrame",
protocol: 'frames',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._atLastFrame();
if(smalltalk.assert($1)){
self["@currentFrameNumber"]=(0);
self["@currentFrameNumber"];
} else {
self["@currentFrameNumber"]=_st(self._currentFrameNumber()).__plus((1));
self["@currentFrameNumber"];
};
return self}, function($ctx1) {$ctx1.fill(self,"nextFrame",{},globals.FrameGroup)})},
args: [],
source: "nextFrame\x0a\x09self atLastFrame\x0a\x09\x09ifTrue: [ currentFrameNumber  := 0 ]\x0a\x09\x09ifFalse: [ currentFrameNumber := self currentFrameNumber + 1 ]",
messageSends: ["ifTrue:ifFalse:", "atLastFrame", "+", "currentFrameNumber"],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "offset",
protocol: 'frames',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__star(self._currentFrameNumber());
return $1;
}, function($ctx1) {$ctx1.fill(self,"offset",{},globals.FrameGroup)})},
args: [],
source: "offset\x0a\x09^ self width * self currentFrameNumber",
messageSends: ["*", "width", "currentFrameNumber"],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "toFirstFrame",
protocol: 'frames',
fn: function (){
var self=this;
self["@currentFrameNumber"]=(0);
return self},
args: [],
source: "toFirstFrame\x0a\x09currentFrameNumber := 0",
messageSends: [],
referencedClasses: []
}),
globals.FrameGroup);



smalltalk.addClass('ParallaxImage', globals.FrameGroup, ['xPosition1', 'xPosition2', 'speed'], 'Ludus');
smalltalk.addMethod(
smalltalk.method({
selector: "drawFromBackground:onContext:",
protocol: 'drawing',
fn: function (aBackground,aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$5,$2,$7,$6,$8,$9,$10,$11,$12,$14,$17,$16,$15,$18,$19,$20,$13;
$1=_st(aBackground)._image();
$ctx1.sendIdx["image"]=1;
$4=self._origin();
$ctx1.sendIdx["origin"]=1;
$3=_st($4)._x();
$ctx1.sendIdx["x"]=1;
$5=self._offset();
$ctx1.sendIdx["offset"]=1;
$2=_st($3).__plus($5);
$ctx1.sendIdx["+"]=1;
$7=self._origin();
$ctx1.sendIdx["origin"]=2;
$6=_st($7)._y();
$ctx1.sendIdx["y"]=1;
$8=self._width();
$ctx1.sendIdx["width"]=1;
$9=self._height();
$ctx1.sendIdx["height"]=1;
$10=self._xPosition1();
$11=self._width();
$ctx1.sendIdx["width"]=2;
$12=self._height();
$ctx1.sendIdx["height"]=2;
_st(aContext)._drawImage_originX_originY_frameWidth_frameHeight_x_y_scaleWidth_scaleHeight_($1,$2,$6,$8,$9,$10,(0),$11,$12);
$ctx1.sendIdx["drawImage:originX:originY:frameWidth:frameHeight:x:y:scaleWidth:scaleHeight:"]=1;
$14=_st(aBackground)._image();
$17=self._origin();
$ctx1.sendIdx["origin"]=3;
$16=_st($17)._x();
$15=_st($16).__plus(self._offset());
$18=_st(self._origin())._y();
$19=self._width();
$ctx1.sendIdx["width"]=3;
$20=self._height();
$ctx1.sendIdx["height"]=3;
$13=_st(aContext)._drawImage_originX_originY_frameWidth_frameHeight_x_y_scaleWidth_scaleHeight_($14,$15,$18,$19,$20,self._xPosition2(),(0),self._width(),self._height());
return self}, function($ctx1) {$ctx1.fill(self,"drawFromBackground:onContext:",{aBackground:aBackground,aContext:aContext},globals.ParallaxImage)})},
args: ["aBackground", "aContext"],
source: "drawFromBackground: aBackground onContext: aContext\x0a\x09aContext\x0a\x09\x09drawImage: aBackground image\x0a\x09\x09originX: self origin x + self offset\x0a\x09\x09originY: self origin y\x0a\x09\x09frameWidth: self width\x0a\x09\x09frameHeight: self height\x0a\x09\x09x: self xPosition1\x0a\x09\x09y: 0\x0a\x09\x09scaleWidth: self width\x0a\x09\x09scaleHeight: self height;\x0a\x09\x09drawImage: aBackground image\x0a\x09\x09originX: self origin x + self offset\x0a\x09\x09originY: self origin y\x0a\x09\x09frameWidth: self width\x0a\x09\x09frameHeight: self height\x0a\x09\x09x: self xPosition2\x0a\x09\x09y: 0\x0a\x09\x09scaleWidth: self width\x0a\x09\x09scaleHeight: self height.",
messageSends: ["drawImage:originX:originY:frameWidth:frameHeight:x:y:scaleWidth:scaleHeight:", "image", "+", "x", "origin", "offset", "y", "width", "height", "xPosition1", "xPosition2"],
referencedClasses: []
}),
globals.ParallaxImage);

smalltalk.addMethod(
smalltalk.method({
selector: "identifier:origin:size:speed:",
protocol: 'attributes',
fn: function (aString,anOriginPoint,aSizePoint,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._identifier_(aString);
self._origin_(anOriginPoint);
self._size_(aSizePoint);
$1=self._speed_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"identifier:origin:size:speed:",{aString:aString,anOriginPoint:anOriginPoint,aSizePoint:aSizePoint,anInteger:anInteger},globals.ParallaxImage)})},
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: "identifier: aString origin: anOriginPoint size: aSizePoint speed: anInteger\x0a\x09self \x0a\x09\x09identifier: aString;\x0a\x09\x09origin: anOriginPoint;\x0a\x09\x09size: aSizePoint;\x0a\x09\x09speed: anInteger.",
messageSends: ["identifier:", "origin:", "size:", "speed:"],
referencedClasses: []
}),
globals.ParallaxImage);

smalltalk.addMethod(
smalltalk.method({
selector: "isParallax",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isParallax\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.ParallaxImage);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
protocol: 'positions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1,$5,$6,$7;
$3=self._xPosition1();
$ctx1.sendIdx["xPosition1"]=1;
$4=self._width();
$ctx1.sendIdx["width"]=1;
$2=_st($3).__plus($4);
$ctx1.sendIdx["+"]=1;
$1=_st($2).__lt((0));
if(smalltalk.assert($1)){
$5=self["@xPosition1"];
$6=self._width();
$ctx1.sendIdx["width"]=2;
self["@xPosition1"]=_st($5).__plus($6);
$ctx1.sendIdx["+"]=2;
self["@xPosition1"];
};
$7=self._xPosition1();
$ctx1.sendIdx["xPosition1"]=2;
self["@xPosition1"]=_st($7).__minus(self._speed());
self["@xPosition2"]=_st(self._xPosition1()).__plus(self._width());
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.ParallaxImage)})},
args: [],
source: "move\x0a\x09(self xPosition1 + self width) < 0\x0a\x09\x09ifTrue: [ xPosition1 := xPosition1 + self width\x09].\x0a\x09xPosition1 := self xPosition1 - self speed.\x0a\x09xPosition2 := self xPosition1 + self width.",
messageSends: ["ifTrue:", "<", "+", "xPosition1", "width", "-", "speed"],
referencedClasses: []
}),
globals.ParallaxImage);

smalltalk.addMethod(
smalltalk.method({
selector: "speed",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@speed"];
if(($receiver = $2) == null || $receiver.isNil){
self["@speed"]=(1);
$1=self["@speed"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"speed",{},globals.ParallaxImage)})},
args: [],
source: "speed\x0a\x09^ speed ifNil: [ speed := 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.ParallaxImage);

smalltalk.addMethod(
smalltalk.method({
selector: "speed:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@speed"]=anInteger;
return self},
args: ["anInteger"],
source: "speed: anInteger\x0a\x09speed := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.ParallaxImage);

smalltalk.addMethod(
smalltalk.method({
selector: "xPosition1",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@xPosition1"];
if(($receiver = $2) == null || $receiver.isNil){
self["@xPosition1"]=(0);
$1=self["@xPosition1"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"xPosition1",{},globals.ParallaxImage)})},
args: [],
source: "xPosition1\x0a\x09^ xPosition1 ifNil: [ xPosition1 := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.ParallaxImage);

smalltalk.addMethod(
smalltalk.method({
selector: "xPosition2",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@xPosition2"];
if(($receiver = $2) == null || $receiver.isNil){
self["@xPosition2"]=self._width();
$1=self["@xPosition2"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"xPosition2",{},globals.ParallaxImage)})},
args: [],
source: "xPosition2\x0a\x09^ xPosition2 ifNil: [ xPosition2 := self width ]",
messageSends: ["ifNil:", "width"],
referencedClasses: []
}),
globals.ParallaxImage);



smalltalk.addClass('InputHandler', globals.Object, ['canvas', 'keys', 'releasedKeys', 'mousePosition', 'mouseDown'], 'Ludus');
smalltalk.addMethod(
smalltalk.method({
selector: "bindEvents",
protocol: 'events - private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(document)._asJQuery();
_st($1)._keydown_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._keyDown_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)})}));
$2=_st($1)._keyup_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._keyUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,2)})}));
$3=self._canvas();
_st($3)._onMouseDown_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._mouseDown_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,3)})}));
_st($3)._onMouseUp_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._mouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,4)})}));
$4=_st($3)._onMouseMove_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._mouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,5)})}));
return self}, function($ctx1) {$ctx1.fill(self,"bindEvents",{},globals.InputHandler)})},
args: [],
source: "bindEvents\x0a\x09document asJQuery\x0a\x09\x09keydown: [ :evt | self keyDown: evt ];\x0a\x09\x09keyup: [ :evt | self keyUp: evt ].\x0a\x09self canvas \x0a\x09\x09onMouseDown: [ :evt | self mouseDown: evt ];\x0a\x09\x09onMouseUp: [ :evt | self mouseUp: evt ];\x0a\x09\x09onMouseMove: [ :evt | self mouseMove: evt ].",
messageSends: ["keydown:", "asJQuery", "keyDown:", "keyup:", "keyUp:", "onMouseDown:", "canvas", "mouseDown:", "onMouseUp:", "mouseUp:", "onMouseMove:", "mouseMove:"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@canvas"];
return $1;
},
args: [],
source: "canvas\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
protocol: 'accessing',
fn: function (aCanvas){
var self=this;
self["@canvas"]=aCanvas;
return self},
args: ["aCanvas"],
source: "canvas: aCanvas\x0a\x09canvas := aCanvas",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "eventData:",
protocol: 'events - private',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return $._data($('#' + self._canvas()._element().id)[0],'events')[anEvent];
return self}, function($ctx1) {$ctx1.fill(self,"eventData:",{anEvent:anEvent},globals.InputHandler)})},
args: ["anEvent"],
source: "eventData: anEvent\x0a\x09<return $._data($('#' + self._canvas()._element().id)[0],'events')[anEvent]>",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.InputHandler.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._initializeKeys();
self["@mouseDown"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.InputHandler)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeKeys.\x0a\x09mouseDown := false.",
messageSends: ["initialize", "initializeKeys"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeKeys",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@keys"]=[];
self["@releasedKeys"]=[];
(255)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@keys"])._add_(false);
$ctx2.sendIdx["add:"]=1;
return _st(self["@releasedKeys"])._add_(true);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeKeys",{},globals.InputHandler)})},
args: [],
source: "initializeKeys\x0a\x09keys := #().\x0a\x09releasedKeys := #().\x0a\x09255 timesRepeat: [ \x0a\x09\x09keys add: false.\x0a\x09\x09releasedKeys add: true ]",
messageSends: ["timesRepeat:", "add:"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "isMouseDown",
protocol: 'events - testing',
fn: function (){
var self=this;
var $1;
$1=self["@mouseDown"];
return $1;
},
args: [],
source: "isMouseDown\x0a\x09^ mouseDown",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "keyDown:",
protocol: 'events - private',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keys())._at_put_(_st(evt)._keyCode(),true);
return self}, function($ctx1) {$ctx1.fill(self,"keyDown:",{evt:evt},globals.InputHandler)})},
args: ["evt"],
source: "keyDown: evt\x0a\x09self keys at: evt keyCode put: true.",
messageSends: ["at:put:", "keys", "keyCode"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "keyUp:",
protocol: 'events - private',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._keys();
$2=_st(evt)._keyCode();
$ctx1.sendIdx["keyCode"]=1;
_st($1)._at_put_($2,false);
$ctx1.sendIdx["at:put:"]=1;
_st(self._releasedKeys())._at_put_(_st(evt)._keyCode(),true);
return self}, function($ctx1) {$ctx1.fill(self,"keyUp:",{evt:evt},globals.InputHandler)})},
args: ["evt"],
source: "keyUp: evt\x0a\x09self keys at: evt keyCode put: false.\x0a\x09self releasedKeys at: evt keyCode put: true",
messageSends: ["at:put:", "keys", "keyCode", "releasedKeys"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
protocol: 'events - private',
fn: function (){
var self=this;
var $1;
$1=self["@keys"];
return $1;
},
args: [],
source: "keys\x0a\x09^ keys",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDown",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@mouseDown"];
return $1;
},
args: [],
source: "mouseDown\x0a\x09^ mouseDown",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDown:",
protocol: 'events - private',
fn: function (evt){
var self=this;
self["@mouseDown"]=true;
return self},
args: ["evt"],
source: "mouseDown: evt\x0a\x09mouseDown := true.",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:",
protocol: 'events - private',
fn: function (evt){
var self=this;
var canvasPosition,windowScrollTop,windowScrollLeft,canvasRelative;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
windowScrollTop=self._windowScrollTop();
windowScrollLeft=self._windowScrollLeft();
canvasPosition=_st("canvas"._asJQuery())._position();
$1=_st(_st(canvasPosition)._left()).__minus(windowScrollLeft);
$ctx1.sendIdx["-"]=1;
$2=_st(_st(canvasPosition)._top()).__minus(windowScrollTop);
$ctx1.sendIdx["-"]=2;
canvasRelative=_st($1).__at($2);
$ctx1.sendIdx["@"]=1;
$3=_st(_st(evt)._clientX()).__minus(_st(canvasRelative)._x());
$ctx1.sendIdx["-"]=3;
self["@mousePosition"]=_st($3).__at(_st(_st(evt)._clientY()).__minus(_st(canvasRelative)._y()));
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:",{evt:evt,canvasPosition:canvasPosition,windowScrollTop:windowScrollTop,windowScrollLeft:windowScrollLeft,canvasRelative:canvasRelative},globals.InputHandler)})},
args: ["evt"],
source: "mouseMove: evt\x0a\x09| canvasPosition windowScrollTop windowScrollLeft canvasRelative |\x0a\x0a\x09windowScrollTop := self windowScrollTop.\x0a\x09windowScrollLeft := self windowScrollLeft.\x0a\x09canvasPosition := 'canvas' asJQuery position.\x0a\x0a\x09canvasRelative := (canvasPosition left - windowScrollLeft) @ (canvasPosition top - windowScrollTop).\x0a\x09mousePosition := (evt clientX - canvasRelative x) @ (evt clientY - canvasRelative y).",
messageSends: ["windowScrollTop", "windowScrollLeft", "position", "asJQuery", "@", "-", "left", "top", "clientX", "x", "clientY", "y"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "mousePosition",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@mousePosition"];
if(($receiver = $2) == null || $receiver.isNil){
self["@mousePosition"]=(0).__at((0));
$1=self["@mousePosition"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"mousePosition",{},globals.InputHandler)})},
args: [],
source: "mousePosition\x0a\x09^ mousePosition ifNil: [ mousePosition := 0 @ 0 ]",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseUp:",
protocol: 'events - private',
fn: function (evt){
var self=this;
self["@mouseDown"]=false;
return self},
args: ["evt"],
source: "mouseUp: evt\x0a\x09mouseDown := false.",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPressed:do:",
protocol: 'events',
fn: function (aKeyCode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self._keys())._at_(aKeyCode);
$ctx1.sendIdx["at:"]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$3=self._releasedKeys();
$ctx2.sendIdx["releasedKeys"]=1;
return _st($3)._at_(aKeyCode);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
_st(self._releasedKeys())._at_put_(aKeyCode,false);
_st(aBlock)._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPressed:do:",{aKeyCode:aKeyCode,aBlock:aBlock},globals.InputHandler)})},
args: ["aKeyCode", "aBlock"],
source: "onKeyPressed: aKeyCode do: aBlock\x0a\x09((self keys at: aKeyCode)\x0a\x09\x09and: [ self releasedKeys at: aKeyCode ])\x0a\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09self releasedKeys at: aKeyCode put: false.\x0a\x09\x09\x09\x09aBlock value ]",
messageSends: ["ifTrue:", "and:", "at:", "keys", "releasedKeys", "at:put:", "value"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseClickDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self._eventData_("click");
if(($receiver = $1) == null || $receiver.isNil){
_st(self._canvas())._onClick_(aBlock);
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"onMouseClickDo:",{aBlock:aBlock},globals.InputHandler)})},
args: ["aBlock"],
source: "onMouseClickDo: aBlock\x0a\x09(self eventData: 'click')\x0a\x09\x09ifNil: [ self canvas onClick: aBlock ]",
messageSends: ["ifNil:", "eventData:", "onClick:", "canvas"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseDownDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self._eventData_("mousedown");
if(($receiver = $1) == null || $receiver.isNil){
_st(self._canvas())._onMouseDown_(aBlock);
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"onMouseDownDo:",{aBlock:aBlock},globals.InputHandler)})},
args: ["aBlock"],
source: "onMouseDownDo: aBlock\x0a\x09(self eventData: 'mousedown')\x0a\x09\x09ifNil: [ self canvas onMouseDown: aBlock ]",
messageSends: ["ifNil:", "eventData:", "onMouseDown:", "canvas"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseUpDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self._eventData_("mouseup");
if(($receiver = $1) == null || $receiver.isNil){
_st(self._canvas())._onMouseUp_(aBlock);
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"onMouseUpDo:",{aBlock:aBlock},globals.InputHandler)})},
args: ["aBlock"],
source: "onMouseUpDo: aBlock\x0a\x09(self eventData: 'mouseup')\x0a\x09\x09ifNil: [ self canvas onMouseUp: aBlock ]",
messageSends: ["ifNil:", "eventData:", "onMouseUp:", "canvas"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "releasedKeys",
protocol: 'events - private',
fn: function (){
var self=this;
var $1;
$1=self["@releasedKeys"];
return $1;
},
args: [],
source: "releasedKeys\x0a\x09^ releasedKeys",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileKeyPressed:do:",
protocol: 'events',
fn: function (aKeyCode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._keys();
$ctx1.sendIdx["keys"]=1;
$2=_st($3)._at_ifAbsent_(aKeyCode,(function(){
return false;
}));
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._keys())._at_(aKeyCode);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st($1)._ifTrue_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whileKeyPressed:do:",{aKeyCode:aKeyCode,aBlock:aBlock},globals.InputHandler)})},
args: ["aKeyCode", "aBlock"],
source: "whileKeyPressed: aKeyCode do: aBlock\x0a\x09((self keys at: aKeyCode ifAbsent: [ false ]) \x0a\x09\x09and: [ self keys at: aKeyCode ]) \x0a\x09\x09\x09ifTrue: aBlock",
messageSends: ["ifTrue:", "and:", "at:ifAbsent:", "keys", "at:"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileMouseDownDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isMouseDown();
_st($1)._ifTrue_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whileMouseDownDo:",{aBlock:aBlock},globals.InputHandler)})},
args: ["aBlock"],
source: "whileMouseDownDo: aBlock\x0a\x09self isMouseDown ifTrue: aBlock",
messageSends: ["ifTrue:", "isMouseDown"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileMouseUpDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isMouseDown();
_st($1)._ifFalse_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whileMouseUpDo:",{aBlock:aBlock},globals.InputHandler)})},
args: ["aBlock"],
source: "whileMouseUpDo: aBlock\x0a\x09self isMouseDown ifFalse: aBlock",
messageSends: ["ifFalse:", "isMouseDown"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileNoKeyPressedDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._keys())._noneSatisfy_((function(all){
return all;
})))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._releasedKeys())._allSatisfy_((function(all){
return all;
}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
if(smalltalk.assert($1)){
_st(aBlock)._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"whileNoKeyPressedDo:",{aBlock:aBlock},globals.InputHandler)})},
args: ["aBlock"],
source: "whileNoKeyPressedDo: aBlock\x0a\x09((self keys noneSatisfy: [ :all | all ])\x0a\x09\x09and: [ self releasedKeys allSatisfy: [ :all | all ] ])\x0a\x09\x09\x09ifTrue: [ aBlock value ]",
messageSends: ["ifTrue:", "and:", "noneSatisfy:", "keys", "allSatisfy:", "releasedKeys", "value"],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "windowScrollLeft",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return $(window).scrollLeft();;
return self}, function($ctx1) {$ctx1.fill(self,"windowScrollLeft",{},globals.InputHandler)})},
args: [],
source: "windowScrollLeft\x0a\x09<return $(window).scrollLeft();>",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "windowScrollTop",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return $(window).scrollTop();;
return self}, function($ctx1) {$ctx1.fill(self,"windowScrollTop",{},globals.InputHandler)})},
args: [],
source: "windowScrollTop\x0a\x09<return $(window).scrollTop();>",
messageSends: [],
referencedClasses: []
}),
globals.InputHandler);



smalltalk.addClass('Key', globals.Object, [], 'Ludus');
globals.Key.comment="I am a helper class that always returns the key code of a certain key.\x0aI have a couple of methods defined for keys that have names, such as:\x0a\x0aspace (or spaceBar)\x0atab\x0aenter\x0aleftArrow\x0a...\x0a\x0aFor the rest of the keys, my #doesNotUnderstand handles the conversion.";

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
protocol: 'error handling',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=_st(aMessage)._selector();
$ctx1.sendIdx["selector"]=1;
$3=_st($4)._size();
$2=_st($3).__eq((1));
if(smalltalk.assert($2)){
$1=self._keyCodeFor_(_st(aMessage)._selector());
} else {
$1=($ctx1.supercall = true, globals.Key.klass.superclass.fn.prototype._doesNotUnderstand_.apply(_st(self), [aMessage]));
$ctx1.supercall = false;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},globals.Key.klass)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ aMessage selector size = 1\x0a\x09\x09ifTrue: [ self keyCodeFor: aMessage selector ]\x0a\x09\x09ifFalse: [ super doesNotUnderstand: aMessage ]",
messageSends: ["ifTrue:ifFalse:", "=", "size", "selector", "keyCodeFor:", "doesNotUnderstand:"],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "downArrow",
protocol: 'key codes',
fn: function (){
var self=this;
return (40);
},
args: [],
source: "downArrow\x0a\x09^ 40",
messageSends: [],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "enter",
protocol: 'key codes',
fn: function (){
var self=this;
return (13);
},
args: [],
source: "enter\x0a\x09^ 13",
messageSends: [],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "esc",
protocol: 'key codes',
fn: function (){
var self=this;
return (27);
},
args: [],
source: "esc\x0a\x09^ 27",
messageSends: [],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "escape",
protocol: 'key codes',
fn: function (){
var self=this;
return (27);
},
args: [],
source: "escape\x0a\x09^ 27",
messageSends: [],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "keyCodeFor:",
protocol: 'key codes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(aValue)._isString();
if(smalltalk.assert($2)){
$1=_st(_st(_st(aValue)._asUppercase())._first())._asciiValue();
$ctx1.sendIdx["asciiValue"]=1;
} else {
$1=_st(_st(aValue)._asString())._asciiValue();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyCodeFor:",{aValue:aValue},globals.Key.klass)})},
args: ["aValue"],
source: "keyCodeFor: aValue\x0a\x09^ aValue isString \x0a\x09\x09ifTrue: [ aValue asUppercase first asciiValue ]\x0a\x09\x09ifFalse: [ aValue asString asciiValue ]",
messageSends: ["ifTrue:ifFalse:", "isString", "asciiValue", "first", "asUppercase", "asString"],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "leftArrow",
protocol: 'key codes',
fn: function (){
var self=this;
return (37);
},
args: [],
source: "leftArrow\x0a\x09^ 37",
messageSends: [],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rightArrow",
protocol: 'key codes',
fn: function (){
var self=this;
return (39);
},
args: [],
source: "rightArrow\x0a\x09^ 39",
messageSends: [],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
protocol: 'key codes',
fn: function (){
var self=this;
return (32);
},
args: [],
source: "space\x0a\x09^ 32",
messageSends: [],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "spaceBar",
protocol: 'key codes',
fn: function (){
var self=this;
return (32);
},
args: [],
source: "spaceBar\x0a\x09^ 32",
messageSends: [],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
protocol: 'key codes',
fn: function (){
var self=this;
return (9);
},
args: [],
source: "tab\x0a\x09^ 9",
messageSends: [],
referencedClasses: []
}),
globals.Key.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "upArrow",
protocol: 'key codes',
fn: function (){
var self=this;
return (38);
},
args: [],
source: "upArrow\x0a\x09^ 38",
messageSends: [],
referencedClasses: []
}),
globals.Key.klass);


smalltalk.addClass('Sound', globals.Widget, ['src', 'cssClass'], 'Ludus');
globals.Sound.comment="I am a sound. I have a source audio file.\x0aI can be played, paused, stopped or looped.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@cssClass"];
if(($receiver = $2) == null || $receiver.isNil){
self["@cssClass"]="";
$1=self["@cssClass"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.Sound)})},
args: [],
source: "cssClass\x0a\x09^ cssClass ifNil: [ cssClass := '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@cssClass"]=aString;
return self},
args: ["aString"],
source: "cssClass: aString\x0a\x09cssClass := aString",
messageSends: [],
referencedClasses: []
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
function $RegularExpression(){return globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1;
$3=self._src();
$4=_st($RegularExpression())._fromString_("\x5c..{2,3}$");
$ctx1.sendIdx["fromString:"]=1;
$2=_st($3)._replaceRegexp_with_($4,"");
$1=_st($2)._replaceRegexp_with_(_st($RegularExpression())._fromString_(".*\x5c/"),"");
$ctx1.sendIdx["replaceRegexp:with:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},globals.Sound)})},
args: [],
source: "id\x0a\x09\x22We take the file name, without extension\x22\x0a\x09^ (self src \x0a           \x09replaceRegexp: (RegularExpression fromString: '\x5c..{2,3}$') with: '')\x0a\x09\x09\x09replaceRegexp: (RegularExpression fromString: '.*\x5c/') with: ''",
messageSends: ["replaceRegexp:with:", "src", "fromString:"],
referencedClasses: ["RegularExpression"]
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "kill",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(document)._getElementById_(self._id()))._remove();
return self}, function($ctx1) {$ctx1.fill(self,"kill",{},globals.Sound)})},
args: [],
source: "kill\x0a\x09(document getElementById: self id) remove",
messageSends: ["remove", "getElementById:", "id"],
referencedClasses: []
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "loop",
protocol: 'sound playing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(document)._getElementById_(self._id()))._at_put_("loop",true);
self._play();
return self}, function($ctx1) {$ctx1.fill(self,"loop",{},globals.Sound)})},
args: [],
source: "loop\x0a\x09(document getElementById: self id) at: 'loop' put: true.\x0a\x09self play.",
messageSends: ["at:put:", "getElementById:", "id", "play"],
referencedClasses: []
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "pause",
protocol: 'sound playing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(document)._getElementById_(self._id()))._pause();
return self}, function($ctx1) {$ctx1.fill(self,"pause",{},globals.Sound)})},
args: [],
source: "pause\x0a\x09(document getElementById: self id) pause.",
messageSends: ["pause", "getElementById:", "id"],
referencedClasses: []
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "play",
protocol: 'sound playing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._stop();
_st(_st(document)._getElementById_(self._id()))._play();
return self}, function($ctx1) {$ctx1.fill(self,"play",{},globals.Sound)})},
args: [],
source: "play\x0a\x09self stop.\x0a\x09(document getElementById: self id) play.",
messageSends: ["stop", "play", "getElementById:", "id"],
referencedClasses: []
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var sound;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._audio();
_st($1)._id_(self._id());
_st($1)._class_(self._cssClass());
$2=_st($1)._src_(self._src());
sound=$2;
_st(sound)._at_put_("preload",true);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,sound:sound},globals.Sound)})},
args: ["html"],
source: "renderOn: html\x0a\x09| sound |\x0a\x09sound := html audio\x0a\x09\x09id: self id;\x0a\x09\x09class: self cssClass;\x0a\x09\x09src: self src.\x0a\x09sound at: 'preload' put: true.",
messageSends: ["id:", "audio", "id", "class:", "cssClass", "src:", "src", "at:put:"],
referencedClasses: []
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "resume",
protocol: 'sound playing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(document)._getElementById_(self._id()))._play();
return self}, function($ctx1) {$ctx1.fill(self,"resume",{},globals.Sound)})},
args: [],
source: "resume\x0a\x09(document getElementById: self id) play.",
messageSends: ["play", "getElementById:", "id"],
referencedClasses: []
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "src",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@src"];
return $1;
},
args: [],
source: "src\x0a\x09^ src",
messageSends: [],
referencedClasses: []
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "src:",
protocol: 'accessing',
fn: function (anUrl){
var self=this;
self["@src"]=anUrl;
return self},
args: ["anUrl"],
source: "src: anUrl\x0a\x09src := anUrl",
messageSends: [],
referencedClasses: []
}),
globals.Sound);

smalltalk.addMethod(
smalltalk.method({
selector: "stop",
protocol: 'sound playing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._pause();
_st(_st(document)._getElementById_(self._id()))._src_(self._src());
return self}, function($ctx1) {$ctx1.fill(self,"stop",{},globals.Sound)})},
args: [],
source: "stop\x0a\x09self pause.\x0a\x09(document getElementById: self id) src: self src.",
messageSends: ["pause", "src:", "getElementById:", "id", "src"],
referencedClasses: []
}),
globals.Sound);


smalltalk.addMethod(
smalltalk.method({
selector: "src:",
protocol: 'instance creation',
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._src_(anUrl);
return $1;
}, function($ctx1) {$ctx1.fill(self,"src:",{anUrl:anUrl},globals.Sound.klass)})},
args: ["anUrl"],
source: "src: anUrl\x0a\x09^ self new src: anUrl",
messageSends: ["src:", "new"],
referencedClasses: []
}),
globals.Sound.klass);


smalltalk.addClass('Text', globals.Object, ['fontName', 'fontSize', 'fontStyle', 'color', 'position', 'contents', 'outlineColor', 'outlineSize'], 'Ludus');
smalltalk.addMethod(
smalltalk.method({
selector: "beBold",
protocol: 'attributes',
fn: function (){
var self=this;
self["@fontStyle"]="bold";
return self},
args: [],
source: "beBold\x0a\x09fontStyle := 'bold'",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "beItalic",
protocol: 'attributes',
fn: function (){
var self=this;
self["@fontStyle"]="italic";
return self},
args: [],
source: "beItalic\x0a\x09fontStyle := 'italic'",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "beNormal",
protocol: 'attributes',
fn: function (){
var self=this;
self["@fontStyle"]="";
return self},
args: [],
source: "beNormal\x0a\x09fontStyle := ''",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@color"];
if(($receiver = $2) == null || $receiver.isNil){
self["@color"]="red";
$1=self["@color"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},globals.Text)})},
args: [],
source: "color\x0a\x09^ color ifNil: [ color := 'red' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@color"]=anObject;
return self},
args: ["anObject"],
source: "color: anObject\x0a\x09color := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@contents"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},globals.Text)})},
args: [],
source: "contents\x0a\x09^ contents ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@contents"]=anObject;
return self},
args: ["anObject"],
source: "contents: anObject\x0a\x09contents := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOnContext:",
protocol: 'drawing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$6,$5,$1,$9,$8,$11,$10,$7,$13,$15,$14,$12;
_st(aContext)._font_(self._fontDefinition());
_st(aContext)._fillStyle_(self._color());
$2=self._contents();
$ctx1.sendIdx["contents"]=1;
$4=self._position();
$ctx1.sendIdx["position"]=1;
$3=_st($4)._x();
$ctx1.sendIdx["x"]=1;
$6=self._position();
$ctx1.sendIdx["position"]=2;
$5=_st($6)._y();
$ctx1.sendIdx["y"]=1;
$1=_st(aContext)._fillText_x_y_($2,$3,$5);
$9=self._outlineSize();
$ctx1.sendIdx["outlineSize"]=1;
$8=_st($9)._notNil();
$ctx1.sendIdx["notNil"]=1;
$11=self._outlineColor();
$ctx1.sendIdx["outlineColor"]=1;
$10=_st($11)._notNil();
$7=_st($8).__and($10);
if(smalltalk.assert($7)){
_st(aContext)._lineWidth_(self._outlineSize());
_st(aContext)._strokeStyle_(self._outlineColor());
$13=self._contents();
$15=self._position();
$ctx1.sendIdx["position"]=3;
$14=_st($15)._x();
$12=_st(aContext)._strokeText_x_y_($13,$14,_st(self._position())._y());
$12;
};
return self}, function($ctx1) {$ctx1.fill(self,"drawOnContext:",{aContext:aContext},globals.Text)})},
args: ["aContext"],
source: "drawOnContext: aContext\x0a\x09aContext\x0a\x09\x09font: self fontDefinition;\x0a\x09\x09fillStyle: self color;\x0a\x09\x09fillText: self contents\x0a\x09\x09\x09x: self position x\x0a\x09\x09\x09y: self position y.\x0a\x09(self outlineSize notNil & self outlineColor notNil) ifTrue: [\x0a\x09\x09aContext\x0a\x09\x09\x09lineWidth: self outlineSize;\x0a\x09\x09\x09strokeStyle: self outlineColor;\x0a\x09\x09\x09strokeText: self contents\x0a\x09\x09\x09\x09x: self position x\x0a\x09\x09\x09\x09y: self position y ]",
messageSends: ["font:", "fontDefinition", "fillStyle:", "color", "fillText:x:y:", "contents", "x", "position", "y", "ifTrue:", "&", "notNil", "outlineSize", "outlineColor", "lineWidth:", "strokeStyle:", "strokeText:x:y:"],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "fontDefinition",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(_st(self._fontStyle()).__comma(" ")).__comma(_st(self._fontSize())._printString());
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma("px ");
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(self._fontName());
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fontDefinition",{},globals.Text)})},
args: [],
source: "fontDefinition\x0a\x09^ self fontStyle  , ' ' , self fontSize printString , 'px ' , self fontName",
messageSends: [",", "fontStyle", "printString", "fontSize", "fontName"],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "fontName",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@fontName"];
if(($receiver = $2) == null || $receiver.isNil){
self["@fontName"]="Sans";
$1=self["@fontName"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"fontName",{},globals.Text)})},
args: [],
source: "fontName\x0a\x09^ fontName ifNil: [ fontName := 'Sans' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "fontName:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@fontName"]=anObject;
return self},
args: ["anObject"],
source: "fontName: anObject\x0a\x09fontName := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "fontSize",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@fontSize"];
if(($receiver = $2) == null || $receiver.isNil){
self["@fontSize"]=(12);
$1=self["@fontSize"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"fontSize",{},globals.Text)})},
args: [],
source: "fontSize\x0a\x09^ fontSize ifNil: [ fontSize := 12 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "fontSize:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@fontSize"]=anObject;
return self},
args: ["anObject"],
source: "fontSize: anObject\x0a\x09fontSize := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "fontStyle",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@fontStyle"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"fontStyle",{},globals.Text)})},
args: [],
source: "fontStyle\x0a\x09^ fontStyle ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "outlineColor",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@outlineColor"];
return $1;
},
args: [],
source: "outlineColor\x0a\x09^ outlineColor",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "outlineColor:",
protocol: 'accessing',
fn: function (aColorName){
var self=this;
self["@outlineColor"]=aColorName;
return self},
args: ["aColorName"],
source: "outlineColor: aColorName\x0a\x09outlineColor := aColorName.",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "outlineSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@outlineSize"];
return $1;
},
args: [],
source: "outlineSize\x0a\x09^ outlineSize",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "outlineSize:",
protocol: 'accessing',
fn: function (aSize){
var self=this;
self["@outlineSize"]=aSize;
return self},
args: ["aSize"],
source: "outlineSize: aSize\x0a\x09outlineSize := aSize",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@position"];
if(($receiver = $2) == null || $receiver.isNil){
self["@position"]=(10).__at((10));
$1=self["@position"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},globals.Text)})},
args: [],
source: "position\x0a\x09^ position ifNil: [ position := 10@10 ]",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@position"]=anObject;
return self},
args: ["anObject"],
source: "position: anObject\x0a\x09position := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "removeOutline",
protocol: 'attributes',
fn: function (){
var self=this;
self["@outlineColor"]=nil;
self["@outlineSize"]=nil;
return self},
args: [],
source: "removeOutline\x0a\x09outlineColor := nil.\x0a\x09outlineSize := nil.",
messageSends: [],
referencedClasses: []
}),
globals.Text);


});
