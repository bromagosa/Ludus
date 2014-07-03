define("HOS/Ludus-Site", ["amber/boot", "HOS/Ludus"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Ludus-Site');
smalltalk.packages["Ludus-Site"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('LCharacter', globals.Sprite, ['lastDirection'], 'Ludus-Site');
smalltalk.addMethod(
smalltalk.method({
selector: "goDown",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._moveCentreBy_speed_((0).__at((1)),self._speed());
self._currentFrameGroup_("walk-down");
$1=self._lastDirection_("down");
return self}, function($ctx1) {$ctx1.fill(self,"goDown",{},globals.LCharacter)})},
args: [],
source: "goDown\x0a\x09self \x0a\x09\x09moveCentreBy: 0 @ 1 speed: self speed;\x0a\x09\x09currentFrameGroup: 'walk-down';\x0a\x09\x09lastDirection: 'down'",
messageSends: ["moveCentreBy:speed:", "@", "speed", "currentFrameGroup:", "lastDirection:"],
referencedClasses: []
}),
globals.LCharacter);

smalltalk.addMethod(
smalltalk.method({
selector: "goLeft",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._moveCentreBy_speed_((-1).__at((0)),self._speed());
self._currentFrameGroup_("walk-left");
$1=self._lastDirection_("left");
return self}, function($ctx1) {$ctx1.fill(self,"goLeft",{},globals.LCharacter)})},
args: [],
source: "goLeft\x0a\x09self \x0a\x09\x09moveCentreBy: -1 @ 0 speed: self speed;\x0a\x09\x09currentFrameGroup: 'walk-left';\x0a\x09\x09lastDirection: 'left'",
messageSends: ["moveCentreBy:speed:", "@", "speed", "currentFrameGroup:", "lastDirection:"],
referencedClasses: []
}),
globals.LCharacter);

smalltalk.addMethod(
smalltalk.method({
selector: "goRight",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._moveCentreBy_speed_((1).__at((0)),self._speed());
self._currentFrameGroup_("walk-right");
$1=self._lastDirection_("right");
return self}, function($ctx1) {$ctx1.fill(self,"goRight",{},globals.LCharacter)})},
args: [],
source: "goRight\x0a\x09self \x0a\x09\x09moveCentreBy: (1 @ 0) speed: self speed;\x0a\x09\x09currentFrameGroup: 'walk-right';\x0a\x09\x09lastDirection: 'right'",
messageSends: ["moveCentreBy:speed:", "@", "speed", "currentFrameGroup:", "lastDirection:"],
referencedClasses: []
}),
globals.LCharacter);

smalltalk.addMethod(
smalltalk.method({
selector: "goUp",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._moveCentreBy_speed_((0).__at((-1)),self._speed());
self._currentFrameGroup_("walk-up");
$1=self._lastDirection_("up");
return self}, function($ctx1) {$ctx1.fill(self,"goUp",{},globals.LCharacter)})},
args: [],
source: "goUp\x0a\x09self \x0a\x09\x09moveCentreBy: (0 @ -1) speed: self speed;\x0a\x09\x09currentFrameGroup: 'walk-up';\x0a\x09\x09lastDirection: 'up'",
messageSends: ["moveCentreBy:speed:", "@", "speed", "currentFrameGroup:", "lastDirection:"],
referencedClasses: []
}),
globals.LCharacter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$16,$15;
($ctx1.supercall = true, globals.LCharacter.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._source_("images/site/character.png");
$1=(0).__at((7));
$ctx1.sendIdx["@"]=1;
$2=(37).__at((48));
$ctx1.sendIdx["@"]=2;
self._addFrameGroupNamed_origin_size_frameCount_("walk-up",$1,$2,(3));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$3=(0).__at((55));
$ctx1.sendIdx["@"]=3;
$4=(37).__at((48));
$ctx1.sendIdx["@"]=4;
self._addFrameGroupNamed_origin_size_frameCount_("walk-right",$3,$4,(3));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
$5=(0).__at((103));
$ctx1.sendIdx["@"]=5;
$6=(37).__at((48));
$ctx1.sendIdx["@"]=6;
self._addFrameGroupNamed_origin_size_frameCount_("walk-down",$5,$6,(3));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=3;
$7=(0).__at((151));
$ctx1.sendIdx["@"]=7;
$8=(37).__at((48));
$ctx1.sendIdx["@"]=8;
self._addFrameGroupNamed_origin_size_frameCount_("walk-left",$7,$8,(3));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=4;
$9=(37).__at((7));
$ctx1.sendIdx["@"]=9;
$10=(37).__at((48));
$ctx1.sendIdx["@"]=10;
self._addFrameGroupNamed_origin_size_frameCount_("stopped-up",$9,$10,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=5;
$11=(37).__at((55));
$ctx1.sendIdx["@"]=11;
$12=(37).__at((48));
$ctx1.sendIdx["@"]=12;
self._addFrameGroupNamed_origin_size_frameCount_("stopped-right",$11,$12,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=6;
$13=(37).__at((103));
$ctx1.sendIdx["@"]=13;
$14=(37).__at((48));
$ctx1.sendIdx["@"]=14;
self._addFrameGroupNamed_origin_size_frameCount_("stopped-down",$13,$14,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=7;
$16=(37).__at((151));
$ctx1.sendIdx["@"]=15;
$15=self._addFrameGroupNamed_origin_size_frameCount_("stopped-left",$16,(37).__at((48)),(1));
self._currentFrameGroup_("stopped-down");
self._frameRate_((4));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.LCharacter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/site/character.png';\x0a\x09\x09addFrameGroupNamed: 'walk-up' origin: 0@7 size: 37@48 frameCount: 3;\x0a\x09\x09addFrameGroupNamed: 'walk-right' origin: 0@55 size: 37@48 frameCount: 3;\x0a\x09\x09addFrameGroupNamed: 'walk-down' origin: 0@103 size: 37@48 frameCount: 3;\x0a\x09\x09addFrameGroupNamed: 'walk-left' origin: 0@151 size: 37@48 frameCount: 3;\x0a\x09\x09addFrameGroupNamed: 'stopped-up' origin: 37@7 size: 37@48 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'stopped-right' origin: 37@55 size: 37@48 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'stopped-down' origin: 37@103 size: 37@48 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'stopped-left' origin: 37@151 size: 37@48 frameCount: 1.\x0a\x09\x0a\x09self currentFrameGroup: 'stopped-down'.\x0a\x09\x0a\x09self frameRate: 4.",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@", "currentFrameGroup:", "frameRate:"],
referencedClasses: []
}),
globals.LCharacter);

smalltalk.addMethod(
smalltalk.method({
selector: "lastDirection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@lastDirection"];
if(($receiver = $2) == null || $receiver.isNil){
self["@lastDirection"]="up";
$1=self["@lastDirection"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastDirection",{},globals.LCharacter)})},
args: [],
source: "lastDirection\x0a\x09^ lastDirection ifNil: [ lastDirection := 'up' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.LCharacter);

smalltalk.addMethod(
smalltalk.method({
selector: "lastDirection:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@lastDirection"]=anObject;
return self},
args: ["anObject"],
source: "lastDirection: anObject\x0a\x09lastDirection := anObject",
messageSends: [],
referencedClasses: []
}),
globals.LCharacter);

smalltalk.addMethod(
smalltalk.method({
selector: "moveWithHandler:inCanvas:",
protocol: 'movement',
fn: function (anInputHandler,aCanvas){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4;
self._currentFrameGroup_("stopped-".__comma(self._lastDirection()));
_st(anInputHandler)._whileKeyPressed_do_(_st($Key())._leftArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$1=self._isLeftInsideCanvas_(aCanvas);
if(smalltalk.assert($1)){
return self._goLeft();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=1;
_st(anInputHandler)._whileKeyPressed_do_(_st($Key())._rightArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$2=self._isRightInsideCanvas_(aCanvas);
if(smalltalk.assert($2)){
return self._goRight();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=2;
_st(anInputHandler)._whileKeyPressed_do_(_st($Key())._upArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$3=self._isTopInsideCanvas_(aCanvas);
if(smalltalk.assert($3)){
return self._goUp();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=3;
$4=_st(anInputHandler)._whileKeyPressed_do_(_st($Key())._downArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$5=self._isBottomInsideCanvas_(aCanvas);
if(smalltalk.assert($5)){
return self._goDown();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveWithHandler:inCanvas:",{anInputHandler:anInputHandler,aCanvas:aCanvas},globals.LCharacter)})},
args: ["anInputHandler", "aCanvas"],
source: "moveWithHandler: anInputHandler inCanvas: aCanvas\x0a\x09self currentFrameGroup: 'stopped-' , self lastDirection.\x0a\x09anInputHandler\x0a\x09\x09whileKeyPressed: Key leftArrow do: [ \x0a\x09\x09\x09(self isLeftInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goLeft ]];\x0a\x09\x09whileKeyPressed: Key rightArrow do: [\x0a\x09\x09\x09(self isRightInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goRight ]];\x0a\x09\x09whileKeyPressed: Key upArrow do: [\x0a\x09\x09\x09(self isTopInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goUp ]];\x0a\x09\x09whileKeyPressed: Key downArrow do: [\x0a\x09\x09\x09(self isBottomInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goDown ]].",
messageSends: ["currentFrameGroup:", ",", "lastDirection", "whileKeyPressed:do:", "leftArrow", "ifTrue:", "isLeftInsideCanvas:", "goLeft", "rightArrow", "isRightInsideCanvas:", "goRight", "upArrow", "isTopInsideCanvas:", "goUp", "downArrow", "isBottomInsideCanvas:", "goDown"],
referencedClasses: ["Key"]
}),
globals.LCharacter);

smalltalk.addMethod(
smalltalk.method({
selector: "speed",
protocol: 'accessing',
fn: function (){
var self=this;
return (5);
},
args: [],
source: "speed\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
globals.LCharacter);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveWithHandler_inCanvas_(_st(aGame)._inputHandler(),_st(aGame)._canvas());
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.LCharacter)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self moveWithHandler: aGame inputHandler inCanvas: aGame canvas.",
messageSends: ["moveWithHandler:inCanvas:", "inputHandler", "canvas"],
referencedClasses: []
}),
globals.LCharacter);



smalltalk.addClass('LSite', globals.Game, ['character', 'tiles', 'tileGenerator', 'currentTileType'], 'Ludus-Site');
smalltalk.addMethod(
smalltalk.method({
selector: "character",
protocol: 'accessing',
fn: function (){
var self=this;
function $LCharacter(){return globals.LCharacter||(typeof LCharacter=="undefined"?nil:LCharacter)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@character"];
if(($receiver = $2) == null || $receiver.isNil){
self["@character"]=_st($LCharacter())._new();
$1=self["@character"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"character",{},globals.LSite)})},
args: [],
source: "character\x0a\x09^ character ifNil: [ character := LCharacter new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["LCharacter"]
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "currentTileType",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@currentTileType"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentTileType"]="sand-centre";
$1=self["@currentTileType"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentTileType",{},globals.LSite)})},
args: [],
source: "currentTileType\x0a\x09^ currentTileType ifNil: [ currentTileType := 'sand-centre' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "currentTileType:",
protocol: 'accessing',
fn: function (aType){
var self=this;
self["@currentTileType"]=aType;
return self},
args: ["aType"],
source: "currentTileType: aType\x0a\x09currentTileType := aType",
messageSends: [],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._clearCanvas();
self._drawTiles();
self._drawTileSelector();
$1=self._draw_(self._character());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.LSite)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09clearCanvas;\x0a\x09\x09drawTiles;\x0a\x09\x09drawTileSelector;\x0a\x09\x09draw: self character.",
messageSends: ["clearCanvas", "drawTiles", "drawTileSelector", "draw:", "character"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "drawTileSelector",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=self._tileGenerator();
$ctx1.sendIdx["tileGenerator"]=1;
$1=_st($2)._frameGroups();
_st($1)._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
$3=self._tileGenerator();
$ctx2.sendIdx["tileGenerator"]=2;
_st($3)._currentFrameGroup_(each);
$4=_st($3)._position_(_st(_st(_st(index).__minus((1))).__star((32))).__at((0)));
$4;
return self._draw_(self._tileGenerator());
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawTileSelector",{},globals.LSite)})},
args: [],
source: "drawTileSelector\x0a\x09self tileGenerator frameGroups withIndexDo: [ :each :index | \x0a\x09\x09self tileGenerator \x0a\x09\x09\x09currentFrameGroup: each;\x0a\x09\x09\x09position: ((index - 1) * 32) @ 0.\x0a\x09\x09self draw: self tileGenerator.\x0a\x09]",
messageSends: ["withIndexDo:", "frameGroups", "tileGenerator", "currentFrameGroup:", "position:", "@", "*", "-", "draw:"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "drawTiles",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._tiles())._associationsDo_((function(eachAssoc){
return smalltalk.withContext(function($ctx2) {
$1=self._tileGenerator();
$ctx2.sendIdx["tileGenerator"]=1;
_st($1)._position_(_st(eachAssoc)._key());
$2=_st($1)._currentFrameGroup_(_st(eachAssoc)._value());
$2;
return self._draw_(self._tileGenerator());
}, function($ctx2) {$ctx2.fillBlock({eachAssoc:eachAssoc},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawTiles",{},globals.LSite)})},
args: [],
source: "drawTiles\x0a\x09self tiles associationsDo: [ :eachAssoc | \x0a\x09\x09self tileGenerator \x0a\x09\x09\x09position: eachAssoc key;\x0a\x09\x09\x09currentFrameGroup: eachAssoc value.\x0a\x09\x09self draw: self tileGenerator ]",
messageSends: ["associationsDo:", "tiles", "position:", "tileGenerator", "key", "currentFrameGroup:", "value", "draw:"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "newTileAt:type:",
protocol: 'accessing',
fn: function (aPoint,aTileType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._tiles())._at_put_(aPoint,aTileType);
return self}, function($ctx1) {$ctx1.fill(self,"newTileAt:type:",{aPoint:aPoint,aTileType:aTileType},globals.LSite)})},
args: ["aPoint", "aTileType"],
source: "newTileAt: aPoint type: aTileType\x0a\x09self tiles at: aPoint put: aTileType",
messageSends: ["at:put:", "tiles"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@fps"]=(30);
self._width_(_st(window)._innerWidth());
$1=self._height_(_st(window)._innerHeight());
self._loadSound_("sounds/site/main-theme.ogg");
$ctx1.sendIdx["loadSound:"]=1;
$2=self._loadSound_("sounds/site/shop.ogg");
_st(self._soundNamed_("main-theme"))._loop();
_st(self._canvas())._style_("position: fixed; top: 0; left: 0");
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.LSite)})},
args: [],
source: "startGame\x0a\x09fps := 30.\x0a\x09\x0a\x09self\x0a\x09\x09width: window innerWidth; \x0a\x09\x09height: window innerHeight.\x0a\x09\x0a\x09self\x0a\x09\x09loadSound: 'sounds/site/main-theme.ogg';\x0a\x09\x09loadSound: 'sounds/site/shop.ogg'.\x0a\x09\x0a\x09(self soundNamed: 'main-theme') loop.\x0a\x09\x09\x0a\x09self canvas style: 'position: fixed; top: 0; left: 0'.",
messageSends: ["width:", "innerWidth", "height:", "innerHeight", "loadSound:", "loop", "soundNamed:", "style:", "canvas"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$9,$8,$7,$6,$5,$2,$15,$14,$13,$12,$11,$20,$19,$18,$17,$16,$10;
_st(self._character())._stepOnGame_(self);
$1=self._inputHandler();
$ctx1.sendIdx["inputHandler"]=1;
_st($1)._onMouseClickDo_((function(){
return smalltalk.withContext(function($ctx2) {
$4=self._inputHandler();
$ctx2.sendIdx["inputHandler"]=2;
$3=_st($4)._mousePosition();
$ctx2.sendIdx["mousePosition"]=1;
$9=self._tileGenerator();
$ctx2.sendIdx["tileGenerator"]=1;
$8=_st($9)._frameGroups();
$ctx2.sendIdx["frameGroups"]=1;
$7=_st($8)._size();
$6=_st($7).__star((32));
$ctx2.sendIdx["*"]=1;
$5=_st($6).__at((32));
$ctx2.sendIdx["@"]=1;
$2=_st($3).__lt($5);
if(smalltalk.assert($2)){
return self._currentTileType_(_st(_st(self._tileGenerator())._frameGroups())._at_(_st(_st(_st(_st(self._inputHandler())._mousePosition())._x()).__slash_slash((32))).__plus((1))));
} else {
$15=self._inputHandler();
$ctx2.sendIdx["inputHandler"]=3;
$14=_st($15)._mousePosition();
$ctx2.sendIdx["mousePosition"]=2;
$13=_st($14)._x();
$ctx2.sendIdx["x"]=1;
$12=_st($13).__slash_slash((32));
$ctx2.sendIdx["//"]=1;
$11=_st($12).__star((32));
$ctx2.sendIdx["*"]=2;
$20=self._inputHandler();
$ctx2.sendIdx["inputHandler"]=4;
$19=_st($20)._mousePosition();
$ctx2.sendIdx["mousePosition"]=3;
$18=_st($19)._y();
$17=_st($18).__slash_slash((32));
$ctx2.sendIdx["//"]=2;
$16=_st($17).__star((32));
$10=_st($11).__at($16);
return self._newTileAt_type_($10,self._currentTileType());
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.LSite)})},
args: [],
source: "step\x0a\x09self character stepOnGame: self.\x0a\x09self inputHandler \x0a\x09\x09onMouseClickDo: [\x0a\x09\x09\x09self inputHandler mousePosition < ((self tileGenerator frameGroups size * 32) @ 32) \x0a\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09self \x0a\x09\x09\x09\x09\x09\x09newTileAt: \x0a\x09\x09\x09\x09\x09\x09\x09((self inputHandler mousePosition x // 32) * 32) \x0a\x09\x09\x09\x09\x09\x09\x09\x09@ ((self inputHandler mousePosition y // 32) * 32)\x0a\x09\x09\x09\x09\x09\x09type: self currentTileType ]\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09self currentTileType: (self tileGenerator frameGroups at: (self inputHandler mousePosition x // 32) + 1)\x0a\x09\x09]\x0a\x09]",
messageSends: ["stepOnGame:", "character", "onMouseClickDo:", "inputHandler", "ifFalse:ifTrue:", "<", "mousePosition", "@", "*", "size", "frameGroups", "tileGenerator", "newTileAt:type:", "//", "x", "y", "currentTileType", "currentTileType:", "at:", "+"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "tileGenerator",
protocol: 'accessing',
fn: function (){
var self=this;
function $LTile(){return globals.LTile||(typeof LTile=="undefined"?nil:LTile)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@tileGenerator"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tileGenerator"]=_st($LTile())._new();
$1=self["@tileGenerator"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileGenerator",{},globals.LSite)})},
args: [],
source: "tileGenerator\x0a\x09^ tileGenerator ifNil: [ tileGenerator := LTile new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["LTile"]
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "tiles",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@tiles"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tiles"]=_st($Dictionary())._new();
$1=self["@tiles"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tiles",{},globals.LSite)})},
args: [],
source: "tiles\x0a\x09^ tiles ifNil: [ tiles := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.LSite);



smalltalk.addClass('LTile', globals.Sprite, [], 'Ludus-Site');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$18,$17;
($ctx1.supercall = true, globals.LTile.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._source_("images/site/open_tileset.png");
$1=(160).__at((480));
$ctx1.sendIdx["@"]=1;
$2=(32).__at((32));
$ctx1.sendIdx["@"]=2;
self._addFrameGroupNamed_origin_size_frameCount_("sand-centre",$1,$2,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$3=(384).__at((480));
$ctx1.sendIdx["@"]=3;
$4=(32).__at((32));
$ctx1.sendIdx["@"]=4;
self._addFrameGroupNamed_origin_size_frameCount_("sand-left",$3,$4,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
$5=(416).__at((480));
$ctx1.sendIdx["@"]=5;
$6=(32).__at((32));
$ctx1.sendIdx["@"]=6;
self._addFrameGroupNamed_origin_size_frameCount_("sand-right",$5,$6,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=3;
$7=(416).__at((512));
$ctx1.sendIdx["@"]=7;
$8=(32).__at((32));
$ctx1.sendIdx["@"]=8;
self._addFrameGroupNamed_origin_size_frameCount_("sand-top",$7,$8,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=4;
$9=(416).__at((544));
$ctx1.sendIdx["@"]=9;
$10=(32).__at((32));
$ctx1.sendIdx["@"]=10;
self._addFrameGroupNamed_origin_size_frameCount_("sand-bottom",$9,$10,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=5;
$11=(192).__at((512));
$ctx1.sendIdx["@"]=11;
$12=(32).__at((32));
$ctx1.sendIdx["@"]=12;
self._addFrameGroupNamed_origin_size_frameCount_("sand-top-left",$11,$12,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=6;
$13=(224).__at((512));
$ctx1.sendIdx["@"]=13;
$14=(32).__at((32));
$ctx1.sendIdx["@"]=14;
self._addFrameGroupNamed_origin_size_frameCount_("sand-top-right",$13,$14,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=7;
$15=(192).__at((544));
$ctx1.sendIdx["@"]=15;
$16=(32).__at((32));
$ctx1.sendIdx["@"]=16;
self._addFrameGroupNamed_origin_size_frameCount_("sand-bottom-left",$15,$16,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=8;
$18=(224).__at((544));
$ctx1.sendIdx["@"]=17;
$17=self._addFrameGroupNamed_origin_size_frameCount_("sand-bottom-right",$18,(32).__at((32)),(1));
self._frameRate_((4));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.LTile)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/site/open_tileset.png';\x0a\x09\x09addFrameGroupNamed: 'sand-centre' origin: 160@480 size: 32@32 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'sand-left' origin: 384@480 size: 32@32 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'sand-right' origin: 416@480 size: 32@32 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'sand-top' origin: 416@512 size: 32@32 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'sand-bottom' origin: 416@544 size: 32@32 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'sand-top-left' origin: 192@512 size: 32@32 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'sand-top-right' origin: 224@512 size: 32@32 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'sand-bottom-left' origin: 192@544 size: 32@32 frameCount: 1;\x0a\x09\x09addFrameGroupNamed: 'sand-bottom-right' origin: 224@544 size: 32@32 frameCount: 1.\x0a\x09\x0a\x09self frameRate: 4.",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:"],
referencedClasses: []
}),
globals.LTile);


});
