define("HOS/Ludus", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Ludus');
smalltalk.packages["Ludus"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('FrameGroup', globals.Object, ['identifier', 'origin', 'frameSize', 'frameCount', 'currentFrameNumber', 'frameRate'], 'Ludus');
globals.FrameGroup.comment="I represent a group of ordered frames. Each frame is a clip rectangle that a Sprite can retrieve from me to paint itself.";
smalltalk.addMethod(
smalltalk.method({
selector: "atLastFrame",
protocol: 'frames',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@currentFrameNumber"]).__eq(_st(self["@frameCount"]).__minus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atLastFrame",{},globals.FrameGroup)})},
args: [],
source: "atLastFrame\x0a\x09^ currentFrameNumber = (frameCount - 1)",
messageSends: ["=", "-"],
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
selector: "height",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@frameSize"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},globals.FrameGroup)})},
args: [],
source: "height\x0a\x09^ frameSize y",
messageSends: ["y"],
referencedClasses: []
}),
globals.FrameGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "identifier",
protocol: 'attributes',
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
selector: "identifier:origin:frameSize:frameCount:",
protocol: 'attributes',
fn: function (aString,anOriginPoint,aSizePoint,anInteger){
var self=this;
self["@identifier"]=aString;
self["@origin"]=anOriginPoint;
self["@frameSize"]=aSizePoint;
self["@frameCount"]=anInteger;
return self},
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: "identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger\x0a\x09identifier := aString.\x0a\x09origin := anOriginPoint.\x0a\x09frameSize := aSizePoint.\x0a\x09frameCount := anInteger.",
messageSends: [],
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
selector: "origin",
protocol: 'attributes',
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

smalltalk.addMethod(
smalltalk.method({
selector: "width",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@frameSize"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},globals.FrameGroup)})},
args: [],
source: "width\x0a\x09^ frameSize x",
messageSends: ["x"],
referencedClasses: []
}),
globals.FrameGroup);


smalltalk.addMethod(
smalltalk.method({
selector: "identifier:origin:frameSize:frameCount:",
protocol: 'instance creation',
fn: function (aString,anOriginPoint,aSizePoint,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._identifier_origin_frameSize_frameCount_(aString,anOriginPoint,aSizePoint,anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"identifier:origin:frameSize:frameCount:",{aString:aString,anOriginPoint:anOriginPoint,aSizePoint:aSizePoint,anInteger:anInteger},globals.FrameGroup.klass)})},
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: "identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger\x0a\x09^ self new identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger",
messageSends: ["identifier:origin:frameSize:frameCount:", "new"],
referencedClasses: []
}),
globals.FrameGroup.klass);


smalltalk.addClass('Game', globals.Widget, ['canvas', 'context', 'fps', 'keys', 'step', 'end', 'mousePosition', 'mouseDown', 'sounds'], 'Ludus');
globals.Game.comment="I am a game. You need to override a couple of my methods to make me usable:\x0a\x0a**#startGame** Here you can define my intial conditions, such as the size of the canvas, my sounds, the background properties, the FPS, etc.\x0a\x0a**#step**  Here you can define what has to be done at each game cycle, or step. This method should control posititions, collisions, mouse and keyboard events, etc. This method should not deal with any graphic properties, these should be dealt with by:\x0a\x0a**#draw**  This is the method that controls my view. Here you should define the drawing of sprites and other graphic elements. Don't forget to clear the canvas before re-drawing sprites, if your game requires so.";
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
_st(self["@sounds"])._add_(sound);
};
return self}, function($ctx1) {$ctx1.fill(self,"addSound:",{aSoundUrl:aSoundUrl},globals.Game)})},
args: ["aSoundUrl"],
source: "addSound: aSoundUrl\x0a\x09(self hasSound: aSoundUrl) ifFalse: [\x0a\x09\x09| sound |\x0a\x09\x09sound := (Sound src: aSoundUrl).\x0a\x09\x09sound \x0a\x09\x09\x09cssClass: self class name;\x0a\x09\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x09sounds add: sound.\x0a\x09]",
messageSends: ["ifFalse:", "hasSound:", "src:", "cssClass:", "name", "class", "appendToJQuery:", "asJQuery", "add:"],
referencedClasses: ["Sound"]
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor:",
protocol: 'attributes',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@canvas"];
$2=_st("background-color: ".__comma(aColor)).__comma(";");
$ctx1.sendIdx[","]=1;
_st($1)._at_put_("style",$2);
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor:",{aColor:aColor},globals.Game)})},
args: ["aColor"],
source: "backgroundColor: aColor\x0a\x09canvas at: 'style' put: ('background-color: ', aColor , ';')",
messageSends: ["at:put:", ","],
referencedClasses: []
}),
globals.Game);

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
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "clearCanvas",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self["@context"];
$3=_st(self["@canvas"])._element();
$ctx1.sendIdx["element"]=1;
$2=_st($3)._width();
_st($1)._clearRect_y_width_height_((0),(0),$2,_st(_st(self["@canvas"])._element())._height());
return self}, function($ctx1) {$ctx1.fill(self,"clearCanvas",{},globals.Game)})},
args: [],
source: "clearCanvas\x0a\x09context\x0a\x09\x09clearRect: 0\x0a\x09\x09y: 0\x0a\x09\x09width: canvas element width\x0a\x09\x09height: canvas element height.",
messageSends: ["clearRect:y:width:height:", "width", "element", "height"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'drawing',
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
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.Game)})},
args: [],
source: "draw\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "drawSprite:",
protocol: 'drawing',
fn: function (aSprite){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$6,$5,$4,$8,$7,$3,$11,$10,$9,$12,$13,$14;
$1=self["@context"];
$2=_st(aSprite)._spriteSheet();
$6=_st(aSprite)._currentFrameGroup();
$ctx1.sendIdx["currentFrameGroup"]=1;
$5=_st($6)._origin();
$ctx1.sendIdx["origin"]=1;
$4=_st($5)._x();
$ctx1.sendIdx["x"]=1;
$8=_st(aSprite)._currentFrameGroup();
$ctx1.sendIdx["currentFrameGroup"]=2;
$7=_st($8)._offset();
$3=_st($4).__plus($7);
$11=_st(aSprite)._currentFrameGroup();
$ctx1.sendIdx["currentFrameGroup"]=3;
$10=_st($11)._origin();
$9=_st($10)._y();
$ctx1.sendIdx["y"]=1;
$12=_st(aSprite)._width();
$ctx1.sendIdx["width"]=1;
$13=_st(aSprite)._height();
$ctx1.sendIdx["height"]=1;
_st($1)._drawImage_originX_originY_frameWidth_frameHeight_x_y_scaleWidth_scaleHeight_($2,$3,$9,$12,$13,_st(aSprite)._x(),_st(aSprite)._y(),_st(aSprite)._width(),_st(aSprite)._height());
$14=_st(_st(self["@step"]).__backslash_backslash(_st(_st(aSprite)._currentFrameGroup())._frameRate())).__eq((0));
if(smalltalk.assert($14)){
_st(aSprite)._nextFrame();
};
return self}, function($ctx1) {$ctx1.fill(self,"drawSprite:",{aSprite:aSprite},globals.Game)})},
args: ["aSprite"],
source: "drawSprite: aSprite\x0a\x09context \x0a\x09\x09drawImage: aSprite spriteSheet\x0a\x09\x09originX: aSprite currentFrameGroup origin x + (aSprite currentFrameGroup offset)\x0a\x09\x09originY: aSprite currentFrameGroup origin y\x0a\x09\x09frameWidth: aSprite width\x0a\x09\x09frameHeight: aSprite height\x0a\x09\x09x: aSprite x \x0a\x09\x09y: aSprite y\x0a\x09\x09scaleWidth: aSprite width\x0a\x09\x09scaleHeight: aSprite height.\x0a\x09(step \x5c\x5c aSprite currentFrameGroup frameRate) = 0 ifTrue: [ aSprite nextFrame ].",
messageSends: ["drawImage:originX:originY:frameWidth:frameHeight:x:y:scaleWidth:scaleHeight:", "spriteSheet", "+", "x", "origin", "currentFrameGroup", "offset", "y", "width", "height", "ifTrue:", "=", "\x5c\x5c", "frameRate", "nextFrame"],
referencedClasses: []
}),
globals.Game);

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
return self}, function($ctx1) {$ctx1.fill(self,"drawSpriteCollection:",{aSpriteCollection:aSpriteCollection},globals.Game)})},
args: ["aSpriteCollection"],
source: "drawSpriteCollection: aSpriteCollection\x0a\x09aSpriteCollection\x0a\x09\x09do: [ :eachSprite | \x0a\x09\x09\x09self drawSprite: eachSprite ]",
messageSends: ["do:", "drawSprite:"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "drawSprites",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._drawSpriteCollection_(self._sprites());
return self}, function($ctx1) {$ctx1.fill(self,"drawSprites",{},globals.Game)})},
args: [],
source: "drawSprites\x0a\x09self drawSpriteCollection: self sprites",
messageSends: ["drawSpriteCollection:", "sprites"],
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
selector: "eventData:",
protocol: 'events - private',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return $._data($('#' + self._class()._name())[0],'events')[anEvent];
return self}, function($ctx1) {$ctx1.fill(self,"eventData:",{anEvent:anEvent},globals.Game)})},
args: ["anEvent"],
source: "eventData: anEvent\x0a\x09<return $._data($('#' + self._class()._name())[0],'events')[anEvent]>",
messageSends: [],
referencedClasses: []
}),
globals.Game);

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
return self}, function($ctx1) {$ctx1.fill(self,"everyStepNumber:do:",{anInteger:anInteger,aBlock:aBlock},globals.Game)})},
args: ["anInteger", "aBlock"],
source: "everyStepNumber: anInteger do: aBlock\x0a\x09(step \x5c\x5c anInteger) = 0 ifTrue: aBlock",
messageSends: ["ifTrue:", "=", "\x5c\x5c"],
referencedClasses: []
}),
globals.Game);

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
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "gameLoop",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._gameOver();
if(! smalltalk.assert($1)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
self._step();
$2=self._draw();
$2;
self["@step"]=_st(self["@step"]).__plus((1));
self["@step"];
return self._gameLoop();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._valueWithTimeout_((1000).__slash(self["@fps"]));
};
return self}, function($ctx1) {$ctx1.fill(self,"gameLoop",{},globals.Game)})},
args: [],
source: "gameLoop\x0a\x09\x22Do not override me, use #step and #draw instead\x22\x0a\x09self gameOver \x0a\x09\x09ifFalse: [[\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09step;\x0a\x09\x09\x09\x09draw.\x0a\x09\x09\x09step := step + 1.\x0a\x09\x09\x09self gameLoop ] valueWithTimeout: (1000 / fps) ]",
messageSends: ["ifFalse:", "gameOver", "valueWithTimeout:", "step", "draw", "+", "gameLoop", "/"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOver",
protocol: 'control',
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
}, function($ctx1) {$ctx1.fill(self,"gameOver",{},globals.Game)})},
args: [],
source: "gameOver\x0a\x09^ end ifNil: [ end := false ]",
messageSends: ["ifNil:"],
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
$1=_st(self["@sounds"])._anySatisfy_((function(any){
return smalltalk.withContext(function($ctx2) {
return _st(_st(any)._src()).__eq(aSoundUrl);
}, function($ctx2) {$ctx2.fillBlock({any:any},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasSound:",{aSoundUrl:aSoundUrl},globals.Game)})},
args: ["aSoundUrl"],
source: "hasSound: aSoundUrl\x0a\x09^ sounds anySatisfy: [ :any | any src = aSoundUrl ]",
messageSends: ["anySatisfy:", "=", "src"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@canvas"])._element())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},globals.Game)})},
args: [],
source: "height\x0a\x09^ canvas element height",
messageSends: ["height", "element"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._at_put_("height",anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"height:",{anInteger:anInteger},globals.Game)})},
args: ["anInteger"],
source: "height: anInteger\x0a\x09canvas at: 'height' put: anInteger.",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Game.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._initializeKeys();
self["@mouseDown"]=false;
self["@fps"]=(30);
self["@sprites"]=[];
self["@sounds"]=[];
self["@step"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Game)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeKeys.\x0a\x09mouseDown := false.\x0a\x09fps := 30.\x0a\x09sprites := #().\x0a\x09sounds := #().\x0a\x09step := 1.",
messageSends: ["initialize", "initializeKeys"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeKeys",
protocol: 'initialization',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@keys"]=_st($Array())._new();
(255)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@keys"])._add_(false);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeKeys",{},globals.Game)})},
args: [],
source: "initializeKeys\x0a\x09keys := Array new.\x0a\x09255 timesRepeat: [ keys add: false ].",
messageSends: ["new", "timesRepeat:", "add:"],
referencedClasses: ["Array"]
}),
globals.Game);

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
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "keyDown:",
protocol: 'events - private',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@keys"])._at_put_(_st(evt)._keyCode(),true);
return self}, function($ctx1) {$ctx1.fill(self,"keyDown:",{evt:evt},globals.Game)})},
args: ["evt"],
source: "keyDown: evt\x0a\x09keys at: evt keyCode put: true.",
messageSends: ["at:put:", "keyCode"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "keyUp:",
protocol: 'events - private',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@keys"])._at_put_(_st(evt)._keyCode(),false);
return self}, function($ctx1) {$ctx1.fill(self,"keyUp:",{evt:evt},globals.Game)})},
args: ["evt"],
source: "keyUp: evt\x0a\x09keys at: evt keyCode put: false.",
messageSends: ["at:put:", "keyCode"],
referencedClasses: []
}),
globals.Game);

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
globals.Game);

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
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:",{evt:evt,canvasPosition:canvasPosition,windowScrollTop:windowScrollTop,windowScrollLeft:windowScrollLeft,canvasRelative:canvasRelative},globals.Game)})},
args: ["evt"],
source: "mouseMove: evt\x0a\x09| canvasPosition windowScrollTop windowScrollLeft canvasRelative |\x0a\x0a\x09windowScrollTop := self windowScrollTop.\x0a\x09windowScrollLeft := self windowScrollLeft.\x0a\x09canvasPosition := 'canvas' asJQuery position.\x0a\x0a\x09canvasRelative := (canvasPosition left - windowScrollLeft) @ (canvasPosition top - windowScrollTop).\x0a\x09mousePosition := (evt clientX - canvasRelative x) @ (evt clientY - canvasRelative y).",
messageSends: ["windowScrollTop", "windowScrollLeft", "position", "asJQuery", "@", "-", "left", "top", "clientX", "x", "clientY", "y"],
referencedClasses: []
}),
globals.Game);

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
}, function($ctx1) {$ctx1.fill(self,"mousePosition",{},globals.Game)})},
args: [],
source: "mousePosition\x0a\x09^ mousePosition ifNil: [ mousePosition := 0 @ 0 ]",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
globals.Game);

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
globals.Game);

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
_st(self["@canvas"])._onClick_(aBlock);
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"onMouseClickDo:",{aBlock:aBlock},globals.Game)})},
args: ["aBlock"],
source: "onMouseClickDo: aBlock\x0a\x09(self eventData: 'click')\x0a\x09\x09ifNil: [ canvas onClick: aBlock ]",
messageSends: ["ifNil:", "eventData:", "onClick:"],
referencedClasses: []
}),
globals.Game);

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
_st(_st(self["@canvas"])._asJQuery())._bind_do_("mousedown",aBlock);
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"onMouseDownDo:",{aBlock:aBlock},globals.Game)})},
args: ["aBlock"],
source: "onMouseDownDo: aBlock\x0a\x09(self eventData: 'mousedown')\x0a\x09\x09ifNil: [ canvas asJQuery bind: 'mousedown' do: aBlock ]",
messageSends: ["ifNil:", "eventData:", "bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.Game);

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
_st(_st(self["@canvas"])._asJQuery())._bind_do_("mouseup",aBlock);
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"onMouseUpDo:",{aBlock:aBlock},globals.Game)})},
args: ["aBlock"],
source: "onMouseUpDo: aBlock\x0a\x09(self eventData: 'mouseup')\x0a\x09\x09ifNil: [ canvas asJQuery bind: 'mouseup' do: aBlock ]",
messageSends: ["ifNil:", "eventData:", "bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
self["@canvas"]=_st(html)._canvas();
$1=self["@canvas"];
_st($1)._at_put_("width",(250));
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("height",(250));
$2=_st($1)._id_(_st(self._class())._name());
self["@context"]=_st(_st(self["@canvas"])._element())._getContext_("2d");
$3=_st(window)._jQuery_(document);
$ctx1.sendIdx["jQuery:"]=1;
_st($3)._keydown_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._keyDown_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)})}));
_st(_st(window)._jQuery_(document))._keyup_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._keyUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,2)})}));
$4=_st(self["@canvas"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($4)._bind_do_("mousedown",(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._mouseDown_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,3)})}));
$ctx1.sendIdx["bind:do:"]=1;
$5=_st(self["@canvas"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($5)._bind_do_("mouseup",(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._mouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,4)})}));
$ctx1.sendIdx["bind:do:"]=2;
_st(_st(self["@canvas"])._asJQuery())._bind_do_("mousemove",(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._mouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,5)})}));
self._startGame();
self._gameLoop();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Game)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Do not override me, use #startGame instead\x22\x0a\x09canvas := html canvas.\x0a\x09canvas \x0a\x09\x09at: 'width' put: 250;\x0a\x09\x09at: 'height' put: 250;\x0a\x09\x09id: self class name.\x0a\x09context := canvas element getContext: '2d'.\x0a\x0a\x09(window jQuery: document) keydown: [ :evt | self keyDown: evt ].\x0a\x09(window jQuery: document) keyup: [ :evt | self keyUp: evt ].\x0a\x09canvas asJQuery bind: 'mousedown' do: [ :evt | self mouseDown: evt ].\x0a\x09canvas asJQuery bind: 'mouseup' do: [ :evt | self mouseUp: evt ].\x0a\x09canvas asJQuery bind: 'mousemove' do: [ :evt | self mouseMove: evt ].\x0a\x0a\x09self startGame.\x0a\x0a\x09self gameLoop.",
messageSends: ["canvas", "at:put:", "id:", "name", "class", "getContext:", "element", "keydown:", "jQuery:", "keyDown:", "keyup:", "keyUp:", "bind:do:", "asJQuery", "mouseDown:", "mouseUp:", "mouseMove:", "startGame", "gameLoop"],
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
selector: "soundNamed:",
protocol: 'audio',
fn: function (aName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@sounds"])._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._id()).__eq(aName);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"soundNamed:",{aName:aName},globals.Game)})},
args: ["aName"],
source: "soundNamed: aName\x0a\x09^ sounds detect: [ :each | each id = aName ]",
messageSends: ["detect:", "=", "id"],
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
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.Game)})},
args: [],
source: "step\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "stepCount",
protocol: 'control',
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
globals.Game);

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
return self}, function($ctx1) {$ctx1.fill(self,"whileKeyPressed:do:",{aKeyCode:aKeyCode,aBlock:aBlock},globals.Game)})},
args: ["aKeyCode", "aBlock"],
source: "whileKeyPressed: aKeyCode do: aBlock\x0a\x09((self keys at: aKeyCode ifAbsent: [ false ]) and: [ self keys at: aKeyCode ]) ifTrue: aBlock",
messageSends: ["ifTrue:", "and:", "at:ifAbsent:", "keys", "at:"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "whileMouseDownDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mouseDown"];
_st($1)._ifTrue_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whileMouseDownDo:",{aBlock:aBlock},globals.Game)})},
args: ["aBlock"],
source: "whileMouseDownDo: aBlock\x0a\x09mouseDown ifTrue: aBlock",
messageSends: ["ifTrue:"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "whileMouseUpDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mouseDown"];
_st($1)._ifFalse_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whileMouseUpDo:",{aBlock:aBlock},globals.Game)})},
args: ["aBlock"],
source: "whileMouseUpDo: aBlock\x0a\x09mouseDown ifFalse: aBlock",
messageSends: ["ifFalse:"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@canvas"])._element())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},globals.Game)})},
args: [],
source: "width\x0a\x09^ canvas element width",
messageSends: ["width", "element"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._at_put_("width",anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"width:",{anInteger:anInteger},globals.Game)})},
args: ["anInteger"],
source: "width: anInteger\x0a\x09canvas at: 'width' put: anInteger.",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "windowScrollLeft",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return $(window).scrollLeft();;
return self}, function($ctx1) {$ctx1.fill(self,"windowScrollLeft",{},globals.Game)})},
args: [],
source: "windowScrollLeft\x0a\x09<return $(window).scrollLeft();>",
messageSends: [],
referencedClasses: []
}),
globals.Game);

smalltalk.addMethod(
smalltalk.method({
selector: "windowScrollTop",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return $(window).scrollTop();;
return self}, function($ctx1) {$ctx1.fill(self,"windowScrollTop",{},globals.Game)})},
args: [],
source: "windowScrollTop\x0a\x09<return $(window).scrollTop();>",
messageSends: [],
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
var $3,$2,$1;
$3=self._name();
$ctx1.sendIdx["name"]=1;
$2="canvas#".__comma($3);
$ctx1.sendIdx[","]=1;
$1=_st($2)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._remove();
$ctx1.sendIdx["remove"]=1;
_st(_st("audio.".__comma(self._name()))._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"stop",{},globals.Game.klass)})},
args: [],
source: "stop\x0a\x09('canvas#' , self name) asJQuery remove.\x0a\x09('audio.' , self name) asJQuery remove.",
messageSends: ["remove", "asJQuery", ",", "name"],
referencedClasses: []
}),
globals.Game.klass);


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


smalltalk.addClass('Sprite', globals.Object, ['position', 'direction', 'spriteSheet', 'currentFrameGroup', 'frameGroups', 'animating', 'loop'], 'Ludus');
globals.Sprite.comment="I am a Sprite. I need to have a spritesheet, which is an image file that displays all possible frames I can paint organized in an ordered fashion.\x0aYou define different frame groups for this spritesheet, and you can cycle through these framegroups and through the frames of each of them.\x0aI have a direction, defined by a unit vector. This vector will always be a unit vector. If someone tries to force-set my direction to a vector that is not a unit one, I will just convert it.\x0aI handle collisions with other sprites and sprite collections.\x0aOf course, I also have a position, defined by cartesian coordinates.";
smalltalk.addMethod(
smalltalk.method({
selector: "addFrameGroupNamed:origin:size:frameCount:",
protocol: 'frames',
fn: function (aString,anOriginPoint,aSizePoint,anInteger){
var self=this;
function $FrameGroup(){return globals.FrameGroup||(typeof FrameGroup=="undefined"?nil:FrameGroup)}
return smalltalk.withContext(function($ctx1) { 
_st(self._frameGroups())._add_(_st(_st($FrameGroup())._new())._identifier_origin_frameSize_frameCount_(aString,anOriginPoint,aSizePoint,anInteger));
return self}, function($ctx1) {$ctx1.fill(self,"addFrameGroupNamed:origin:size:frameCount:",{aString:aString,anOriginPoint:anOriginPoint,aSizePoint:aSizePoint,anInteger:anInteger},globals.Sprite)})},
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: "addFrameGroupNamed: aString origin: anOriginPoint size: aSizePoint frameCount: anInteger\x0a\x09self frameGroups \x0a\x09\x09add: \x0a\x09\x09\x09(FrameGroup new \x0a\x09\x09\x09\x09identifier: aString\x0a\x09\x09\x09\x09origin: anOriginPoint\x0a\x09\x09\x09\x09frameSize: aSizePoint\x0a\x09\x09\x09\x09frameCount: anInteger)",
messageSends: ["add:", "frameGroups", "identifier:origin:frameSize:frameCount:", "new"],
referencedClasses: ["FrameGroup"]
}),
globals.Sprite);

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
}, function($ctx1) {$ctx1.fill(self,"animating",{},globals.Sprite)})},
args: [],
source: "animating\x0a\x09animating ifNil: [ animating := true ].\x0a\x09\x0a\x09^ (animating & (self loop | self atLastFrame not))",
messageSends: ["ifNil:", "&", "|", "loop", "not", "atLastFrame"],
referencedClasses: []
}),
globals.Sprite);

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
}, function($ctx1) {$ctx1.fill(self,"atLastFrame",{},globals.Sprite)})},
args: [],
source: "atLastFrame\x0a\x09^ self currentFrameGroup atLastFrame",
messageSends: ["atLastFrame", "currentFrameGroup"],
referencedClasses: []
}),
globals.Sprite);

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
$1=_st(aSpriteCollection)._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._bottomCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "bottomCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [ :each | self bottomCollidesWith: each ])",
messageSends: ["detect:", "bottomCollidesWith:"],
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
}, function($ctx1) {$ctx1.fill(self,"currentFrameGroup",{},globals.Sprite)})},
args: [],
source: "currentFrameGroup\x0a\x09^ currentFrameGroup ifNil: [ self frameGroups first ]",
messageSends: ["ifNil:", "first", "frameGroups"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "currentFrameGroup:",
protocol: 'frames',
fn: function (anIdentifier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentFrameGroup"]=_st(self._frameGroups())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._identifier()).__eq(anIdentifier);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"currentFrameGroup:",{anIdentifier:anIdentifier},globals.Sprite)})},
args: ["anIdentifier"],
source: "currentFrameGroup: anIdentifier\x0a\x09currentFrameGroup := self frameGroups detect: [ :each | each identifier = anIdentifier ].",
messageSends: ["detect:", "frameGroups", "=", "identifier"],
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
}, function($ctx1) {$ctx1.fill(self,"frameGroups",{},globals.Sprite)})},
args: [],
source: "frameGroups\x0a\x09^ frameGroups ifNil: [ frameGroups := Array new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
globals.Sprite);

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
return self}, function($ctx1) {$ctx1.fill(self,"frameRate:",{anInteger:anInteger},globals.Sprite)})},
args: ["anInteger"],
source: "frameRate: anInteger\x0a\x09self frameGroups do: [ :each | each frameRate: anInteger ]",
messageSends: ["do:", "frameGroups", "frameRate:"],
referencedClasses: []
}),
globals.Sprite);

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
}, function($ctx1) {$ctx1.fill(self,"height",{},globals.Sprite)})},
args: [],
source: "height\x0a\x09^ self currentFrameGroup height",
messageSends: ["height", "currentFrameGroup"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "isInsideCanvas:",
protocol: 'geometry',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $5,$4,$6,$3,$8,$7,$2,$10,$9,$1;
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
$8=self._width();
$ctx2.sendIdx["width"]=1;
$7=_st($8).__plus(self._x());
$ctx2.sendIdx["+"]=1;
return _st($7).__lt_eq(_st(aCanvas)._width());
$ctx2.sendIdx["<="]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["and:"]=2;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$10=self._height();
$ctx2.sendIdx["height"]=1;
$9=_st($10).__plus(self._y());
return _st($9).__lt_eq(_st(aCanvas)._height());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["and:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInsideCanvas:",{aCanvas:aCanvas},globals.Sprite)})},
args: ["aCanvas"],
source: "isInsideCanvas: aCanvas\x0a\x09^ (((self x >= 0) \x0a\x09\x09and: [ self y >= 0 ])\x0a\x09\x09\x09and: [ self width + self x <= aCanvas width ])\x0a\x09\x09\x09\x09and: [ self height + self y <= aCanvas height ]",
messageSends: ["and:", ">=", "x", "y", "<=", "+", "width", "height"],
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
$1=_st(aSpriteCollection)._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._leftCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "leftCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [ :each | self leftCollidesWith: each ])",
messageSends: ["detect:", "leftCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

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
}, function($ctx1) {$ctx1.fill(self,"loop",{},globals.Sprite)})},
args: [],
source: "loop\x0a\x09^ loop ifNil: [ loop := true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Sprite);

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
selector: "newImage",
protocol: 'aspect',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(document)._createElement_("img");
return $1;
}, function($ctx1) {$ctx1.fill(self,"newImage",{},globals.Sprite)})},
args: [],
source: "newImage\x0a\x09^ document createElement: 'img'",
messageSends: ["createElement:"],
referencedClasses: []
}),
globals.Sprite);

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
return self}, function($ctx1) {$ctx1.fill(self,"nextFrame",{},globals.Sprite)})},
args: [],
source: "nextFrame\x0a\x09self animating ifTrue: [ self currentFrameGroup nextFrame ].",
messageSends: ["ifTrue:", "animating", "nextFrame", "currentFrameGroup"],
referencedClasses: []
}),
globals.Sprite);

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
return self}, function($ctx1) {$ctx1.fill(self,"nextFrameGroup",{},globals.Sprite)})},
args: [],
source: "nextFrameGroup\x0a\x09(self currentFrameGroup = self frameGroups last)\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09currentFrameGroup := \x0a\x09\x09\x09\x09self frameGroups at: ((self frameGroups indexOf: self currentFrameGroup) + 1) ]\x0a\x09\x09ifTrue: [ currentFrameGroup := self frameGroups first ]",
messageSends: ["ifFalse:ifTrue:", "=", "currentFrameGroup", "last", "frameGroups", "at:", "+", "indexOf:", "first"],
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
selector: "restartAnimation",
protocol: 'animation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._stopAnimation();
_st(self._currentFrameGroup())._toFirstFrame();
self._startAnimation();
return self}, function($ctx1) {$ctx1.fill(self,"restartAnimation",{},globals.Sprite)})},
args: [],
source: "restartAnimation\x0a\x09self stopAnimation.\x0a\x09self currentFrameGroup toFirstFrame.\x0a\x09self startAnimation.",
messageSends: ["stopAnimation", "toFirstFrame", "currentFrameGroup", "startAnimation"],
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
$1=_st(aSpriteCollection)._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._rightCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rightCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "rightCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [ :each | self rightCollidesWith: each ])",
messageSends: ["detect:", "rightCollidesWith:"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "spriteSheet",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@spriteSheet"];
if(($receiver = $1) == null || $receiver.isNil){
self["@spriteSheet"]=self._newImage();
self["@spriteSheet"];
} else {
$1;
};
$2=self["@spriteSheet"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"spriteSheet",{},globals.Sprite)})},
args: [],
source: "spriteSheet\x0a\x09spriteSheet ifNil: [ spriteSheet := self newImage ].\x0a\x09^ spriteSheet",
messageSends: ["ifNil:", "newImage"],
referencedClasses: []
}),
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "spriteSheet:",
protocol: 'attributes',
fn: function (anImageUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._spriteSheet())._src_(anImageUrl);
return self}, function($ctx1) {$ctx1.fill(self,"spriteSheet:",{anImageUrl:anImageUrl},globals.Sprite)})},
args: ["anImageUrl"],
source: "spriteSheet: anImageUrl\x0a\x09self spriteSheet src: anImageUrl",
messageSends: ["src:", "spriteSheet"],
referencedClasses: []
}),
globals.Sprite);

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
globals.Sprite);

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
globals.Sprite);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleAnimation",
protocol: 'animation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@animating"]=_st(self["@animating"])._not();
return self}, function($ctx1) {$ctx1.fill(self,"toggleAnimation",{},globals.Sprite)})},
args: [],
source: "toggleAnimation\x0a\x09animating := animating not",
messageSends: ["not"],
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
$1=_st(aSpriteCollection)._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._topCollidesWith_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"topCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},globals.Sprite)})},
args: ["aSpriteCollection"],
source: "topCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [ :each | self topCollidesWith: each ])",
messageSends: ["detect:", "topCollidesWith:"],
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
selector: "width",
protocol: 'geometry',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._currentFrameGroup())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},globals.Sprite)})},
args: [],
source: "width\x0a\x09^ self currentFrameGroup width",
messageSends: ["width", "currentFrameGroup"],
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


});
