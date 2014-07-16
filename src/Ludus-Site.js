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



smalltalk.addClass('LSite', globals.Game, ['character', 'tiles', 'tileGenerator', 'tileInterval', 'currentTileType'], 'Ludus-Site');
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
selector: "character:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@character"]=anObject;
return self},
args: ["anObject"],
source: "character: anObject\x0a\x09character := anObject",
messageSends: [],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "currentTileType",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentTileType"];
return $1;
},
args: [],
source: "currentTileType\x0a\x09^ currentTileType",
messageSends: [],
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
self._drawTileSelector();
self._drawTiles();
$1=self._draw_(self._character());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.LSite)})},
args: [],
source: "draw\x0a\x09self\x0a\x09\x09clearCanvas;\x0a\x09\x09drawTileSelector;\x0a\x09\x09drawTiles;\x0a\x09\x09draw: self character",
messageSends: ["clearCanvas", "drawTileSelector", "drawTiles", "draw:", "character"],
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
var $2,$1;
$2=self._tileInterval();
$ctx1.sendIdx["tileInterval"]=1;
$1=_st($2)._first();
self._drawTileSelectorFrom_to_($1,_st(self._tileInterval())._last());
return self}, function($ctx1) {$ctx1.fill(self,"drawTileSelector",{},globals.LSite)})},
args: [],
source: "drawTileSelector\x0a\x09self drawTileSelectorFrom: self tileInterval first to: self tileInterval last",
messageSends: ["drawTileSelectorFrom:to:", "first", "tileInterval", "last"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "drawTileSelectorFrom:to:",
protocol: 'drawing',
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3,$6,$7;
_st(_st(aNumber)._to_(anotherNumber))._withIndexDo_((function(tileIndex,positionIndex){
return smalltalk.withContext(function($ctx2) {
$1=self._tileGenerator();
$ctx2.sendIdx["tileGenerator"]=1;
$2=$1;
$5=self._tileGenerator();
$ctx2.sendIdx["tileGenerator"]=2;
$4=_st($5)._frameGroups();
$3=_st($4)._at_(tileIndex);
_st($2)._currentFrameGroup_($3);
$6=_st($1)._position_(_st(_st(_st(positionIndex).__minus((1))).__star((32))).__at((0)));
$6;
$7=self._tileGenerator();
$ctx2.sendIdx["tileGenerator"]=3;
self._draw_($7);
return _st(self._tileGenerator())._drawBoundingBoxOnCanvas_(self._canvas());
}, function($ctx2) {$ctx2.fillBlock({tileIndex:tileIndex,positionIndex:positionIndex},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawTileSelectorFrom:to:",{aNumber:aNumber,anotherNumber:anotherNumber},globals.LSite)})},
args: ["aNumber", "anotherNumber"],
source: "drawTileSelectorFrom: aNumber to: anotherNumber\x0a\x09(aNumber to: anotherNumber) withIndexDo: [ :tileIndex :positionIndex | \x0a\x09\x09self tileGenerator\x0a\x09\x09\x09currentFrameGroup: (self tileGenerator frameGroups at: tileIndex);\x0a\x09\x09\x09position: ((positionIndex - 1) * 32) @ 0.\x0a\x09\x09self draw: self tileGenerator.\x0a\x09\x09self tileGenerator drawBoundingBoxOnCanvas: self canvas\x0a\x09].",
messageSends: ["withIndexDo:", "to:", "currentFrameGroup:", "tileGenerator", "at:", "frameGroups", "position:", "@", "*", "-", "draw:", "drawBoundingBoxOnCanvas:", "canvas"],
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
var $1,$2,$4,$3,$5;
_st(self._tiles())._withIndexDo_((function(eachRow,x){
return smalltalk.withContext(function($ctx2) {
return _st(eachRow)._do_((function(eachTile,y){
return smalltalk.withContext(function($ctx3) {
$1=self._tileGenerator();
$ctx3.sendIdx["tileGenerator"]=1;
$2=$1;
$4=_st(x).__star((32));
$ctx3.sendIdx["*"]=1;
$3=_st($4).__at(_st(y).__star((32)));
_st($2)._position_($3);
$5=_st($1)._currentFrameGroup_(eachTile);
$5;
return self._draw_(self._tileGenerator());
}, function($ctx3) {$ctx3.fillBlock({eachTile:eachTile,y:y},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,x:x},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawTiles",{},globals.LSite)})},
args: [],
source: "drawTiles\x0a\x09self tiles withIndexDo: [ :eachRow :x | \x0a\x09\x09eachRow do: [ :eachTile :y |\x0a\x09\x09\x09self tileGenerator \x0a\x09\x09\x09\x09position: (x*32)@(y*32);\x0a\x09\x09\x09\x09currentFrameGroup: eachTile.\x0a\x09\x09\x09self draw: self tileGenerator ]]",
messageSends: ["withIndexDo:", "tiles", "do:", "position:", "tileGenerator", "@", "*", "currentFrameGroup:", "draw:"],
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
var $3,$4,$2,$1;
$3=self._tiles();
$4=_st(aPoint).__slash((32));
$ctx1.sendIdx["/"]=1;
$2=_st($3)._at_($4);
$1=_st($2)._at_(_st(aPoint).__slash((32)));
$ctx1.sendIdx["at:"]=1;
_st($1)._put_(aTileType);
return self}, function($ctx1) {$ctx1.fill(self,"newTileAt:type:",{aPoint:aPoint,aTileType:aTileType},globals.LSite)})},
args: ["aPoint", "aTileType"],
source: "newTileAt: aPoint type: aTileType\x0a\x09((self tiles at: aPoint / 32) at: aPoint / 32) put: aTileType",
messageSends: ["put:", "at:", "tiles", "/"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "resize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._width_(_st(window)._innerWidth());
$1=self._height_(_st(window)._innerHeight());
return self}, function($ctx1) {$ctx1.fill(self,"resize",{},globals.LSite)})},
args: [],
source: "resize\x0a\x09self\x0a\x09\x09width: window innerWidth; \x0a\x09\x09height: window innerHeight.",
messageSends: ["width:", "innerWidth", "height:", "innerHeight"],
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
_st(_st(window)._asJQuery())._resize_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._resize();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
self._loadSound_("sounds/site/main-theme.ogg");
$ctx1.sendIdx["loadSound:"]=1;
$2=self._loadSound_("sounds/site/shop.ogg");
_st(self._soundNamed_("main-theme"))._loop();
_st(self._canvas())._style_("position: fixed; top: 0; left: 0; background-color: #82bb65;");
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.LSite)})},
args: [],
source: "startGame\x0a\x09fps := 30.\x0a\x09\x0a\x09self\x0a\x09\x09width: window innerWidth; \x0a\x09\x09height: window innerHeight.\x0a\x09\x0a\x09window asJQuery resize: [ :event | self resize ].\x0a\x09\x0a\x09self\x0a\x09\x09loadSound: 'sounds/site/main-theme.ogg';\x0a\x09\x09loadSound: 'sounds/site/shop.ogg'.\x0a\x09\x0a\x09(self soundNamed: 'main-theme') loop.\x0a\x09\x09\x0a\x09self canvas style: 'position: fixed; top: 0; left: 0; background-color: #82bb65;'.",
messageSends: ["width:", "innerWidth", "height:", "innerHeight", "resize:", "asJQuery", "resize", "loadSound:", "loop", "soundNamed:", "style:", "canvas"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2,$6,$9,$8,$14,$13,$12,$11,$10,$7,$15,$21,$20,$19,$18,$17,$26,$25,$24,$23,$22,$16,$receiver;
_st(self._character())._stepOnGame_(self);
(1)._to_do_((9),(function(number){
return smalltalk.withContext(function($ctx2) {
$1=self._inputHandler();
$ctx2.sendIdx["inputHandler"]=1;
return _st($1)._onKeyPressed_do_(_st($Key())._number_(number),(function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(number).__star((20));
$ctx3.sendIdx["*"]=1;
$5=_st(number).__star((20));
$ctx3.sendIdx["*"]=2;
$4=_st($5).__plus((9));
$ctx3.sendIdx["+"]=1;
$2=[$3,$4];
return self._tileInterval_($2);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({number:number},$ctx1,1)})}));
$6=self._inputHandler();
$ctx1.sendIdx["inputHandler"]=2;
_st($6)._onMouseClickDo_((function(){
return smalltalk.withContext(function($ctx2) {
$9=self._inputHandler();
$ctx2.sendIdx["inputHandler"]=3;
$8=_st($9)._mousePosition();
$ctx2.sendIdx["mousePosition"]=1;
$14=self._tileGenerator();
$ctx2.sendIdx["tileGenerator"]=1;
$13=_st($14)._frameGroups();
$ctx2.sendIdx["frameGroups"]=1;
$12=_st($13)._size();
$11=_st($12).__star((32));
$ctx2.sendIdx["*"]=3;
$10=_st($11).__at((32));
$ctx2.sendIdx["@"]=1;
$7=_st($8).__lt($10);
if(smalltalk.assert($7)){
return self._currentTileType_(_st(_st(self._tileGenerator())._frameGroups())._at_(_st(_st(_st(_st(self._inputHandler())._mousePosition())._x()).__slash_slash((32))).__plus((1))));
} else {
$15=self._currentTileType();
$ctx2.sendIdx["currentTileType"]=1;
if(($receiver = $15) == null || $receiver.isNil){
return $15;
} else {
$21=self._inputHandler();
$ctx2.sendIdx["inputHandler"]=4;
$20=_st($21)._mousePosition();
$ctx2.sendIdx["mousePosition"]=2;
$19=_st($20)._x();
$ctx2.sendIdx["x"]=1;
$18=_st($19).__slash_slash((32));
$ctx2.sendIdx["//"]=1;
$17=_st($18).__star((32));
$ctx2.sendIdx["*"]=4;
$26=self._inputHandler();
$ctx2.sendIdx["inputHandler"]=5;
$25=_st($26)._mousePosition();
$ctx2.sendIdx["mousePosition"]=3;
$24=_st($25)._y();
$23=_st($24).__slash_slash((32));
$ctx2.sendIdx["//"]=2;
$22=_st($23).__star((32));
$16=_st($17).__at($22);
return self._newTileAt_type_($16,self._currentTileType());
};
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.LSite)})},
args: [],
source: "step\x0a\x09self character stepOnGame: self.\x0a\x09\x0a\x091 to: 9 do: [ :number | self inputHandler onKeyPressed: (Key number: number) do: [ self tileInterval: {number * 20. (number * 20) + 9} ] ].\x0a\x09\x0a\x09self inputHandler\x0a\x09\x09onMouseClickDo: [\x0a\x09\x09\x09self inputHandler mousePosition < ((self tileGenerator frameGroups size * 32) @ 32) \x0a\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09self currentTileType ifNotNil: [\x0a\x09\x09\x09\x09\x09\x09self \x0a\x09\x09\x09\x09\x09\x09\x09newTileAt: \x0a\x09\x09\x09\x09\x09\x09\x09\x09((self inputHandler mousePosition x // 32) * 32) \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09@ ((self inputHandler mousePosition y // 32) * 32)\x0a\x09\x09\x09\x09\x09\x09\x09type: self currentTileType ]]\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09self currentTileType: (self tileGenerator frameGroups at: (self inputHandler mousePosition x // 32) + 1)\x0a\x09\x09]\x0a\x09]",
messageSends: ["stepOnGame:", "character", "to:do:", "onKeyPressed:do:", "inputHandler", "number:", "tileInterval:", "*", "+", "onMouseClickDo:", "ifFalse:ifTrue:", "<", "mousePosition", "@", "size", "frameGroups", "tileGenerator", "ifNotNil:", "currentTileType", "newTileAt:type:", "//", "x", "y", "currentTileType:", "at:"],
referencedClasses: ["Key"]
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "tileGenerator",
protocol: 'accessing',
fn: function (){
var self=this;
function $LTileGenerator(){return globals.LTileGenerator||(typeof LTileGenerator=="undefined"?nil:LTileGenerator)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@tileGenerator"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tileGenerator"]=_st($LTileGenerator())._new();
$1=self["@tileGenerator"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileGenerator",{},globals.LSite)})},
args: [],
source: "tileGenerator\x0a\x09^ tileGenerator ifNil: [ tileGenerator := LTileGenerator new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["LTileGenerator"]
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "tileGenerator:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@tileGenerator"]=anObject;
return self},
args: ["anObject"],
source: "tileGenerator: anObject\x0a\x09tileGenerator := anObject",
messageSends: [],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "tileInterval",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@tileInterval"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tileInterval"]=[(1), (10)];
$1=self["@tileInterval"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileInterval",{},globals.LSite)})},
args: [],
source: "tileInterval\x0a\x09^ tileInterval ifNil: [ tileInterval := #(1 10) ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "tileInterval:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@tileInterval"]=anObject;
return self},
args: ["anObject"],
source: "tileInterval: anObject\x0a\x09tileInterval := anObject",
messageSends: [],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "tiles",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@tiles"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tiles"]=[[]];
$1=self["@tiles"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tiles",{},globals.LSite)})},
args: [],
source: "tiles\x0a\x09^ tiles ifNil: [ tiles := #(#()) ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.LSite);

smalltalk.addMethod(
smalltalk.method({
selector: "tiles:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@tiles"]=anObject;
return self},
args: ["anObject"],
source: "tiles: anObject\x0a\x09tiles := anObject",
messageSends: [],
referencedClasses: []
}),
globals.LSite);



smalltalk.addClass('LTileGenerator', globals.Sprite, [], 'Ludus-Site');
smalltalk.addMethod(
smalltalk.method({
selector: "addAllTiles",
protocol: 'tiles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
(1)._to_do_((32),(function(y){
return smalltalk.withContext(function($ctx2) {
return (1)._to_do_((32),(function(x){
return smalltalk.withContext(function($ctx3) {
$4=_st(x)._asString();
$ctx3.sendIdx["asString"]=1;
$3="x".__comma($4);
$2=_st($3).__comma("y");
$ctx3.sendIdx[","]=2;
$1=_st($2).__comma(_st(y)._asString());
$ctx3.sendIdx[","]=1;
return self._newTile_position_($1,_st(x).__at(y));
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)})}));
$ctx1.sendIdx["to:do:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"addAllTiles",{},globals.LTileGenerator)})},
args: [],
source: "addAllTiles\x0a1 to: 32 do: [:y | \x0a\x091 to: 32 do: [:x | \x0a\x09\x09self newTile: 'x' , x asString , 'y' , y asString position: x@y ]]",
messageSends: ["to:do:", "newTile:position:", ",", "asString", "@"],
referencedClasses: []
}),
globals.LTileGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "addFloorTiles",
protocol: 'tiles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14;
$1=(1).__at((0));
$ctx1.sendIdx["@"]=1;
self._newTile_position_("floor-a",$1);
$ctx1.sendIdx["newTile:position:"]=1;
$2=(2).__at((0));
$ctx1.sendIdx["@"]=2;
self._newTile_position_("floor-b",$2);
$ctx1.sendIdx["newTile:position:"]=2;
$3=(3).__at((0));
$ctx1.sendIdx["@"]=3;
self._newTile_position_("floor-c",$3);
$ctx1.sendIdx["newTile:position:"]=3;
$4=(4).__at((0));
$ctx1.sendIdx["@"]=4;
self._newTile_position_("floor-d",$4);
$ctx1.sendIdx["newTile:position:"]=4;
$5=(5).__at((0));
$ctx1.sendIdx["@"]=5;
self._newTile_position_("floor-e",$5);
$ctx1.sendIdx["newTile:position:"]=5;
$6=(6).__at((0));
$ctx1.sendIdx["@"]=6;
self._newTile_position_("floor-f",$6);
$ctx1.sendIdx["newTile:position:"]=6;
$7=(7).__at((0));
$ctx1.sendIdx["@"]=7;
self._newTile_position_("floor-g",$7);
$ctx1.sendIdx["newTile:position:"]=7;
$8=(8).__at((0));
$ctx1.sendIdx["@"]=8;
self._newTile_position_("floor-h",$8);
$ctx1.sendIdx["newTile:position:"]=8;
$9=(9).__at((0));
$ctx1.sendIdx["@"]=9;
self._newTile_position_("floor-i",$9);
$ctx1.sendIdx["newTile:position:"]=9;
$10=(10).__at((0));
$ctx1.sendIdx["@"]=10;
self._newTile_position_("floor-j",$10);
$ctx1.sendIdx["newTile:position:"]=10;
$11=(11).__at((0));
$ctx1.sendIdx["@"]=11;
self._newTile_position_("floor-k",$11);
$ctx1.sendIdx["newTile:position:"]=11;
$12=(12).__at((0));
$ctx1.sendIdx["@"]=12;
self._newTile_position_("floor-l",$12);
$ctx1.sendIdx["newTile:position:"]=12;
$13=(13).__at((0));
$ctx1.sendIdx["@"]=13;
self._newTile_position_("floor-m",$13);
$ctx1.sendIdx["newTile:position:"]=13;
$14=self._newTile_position_("floor-n",(14).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"addFloorTiles",{},globals.LTileGenerator)})},
args: [],
source: "addFloorTiles\x0a\x09self \x0a\x09\x09newTile: 'floor-a' position: 1@0;\x0a\x09\x09newTile: 'floor-b' position: 2@0;\x0a\x09\x09newTile: 'floor-c' position: 3@0;\x0a\x09\x09newTile: 'floor-d' position: 4@0;\x0a\x09\x09newTile: 'floor-e' position: 5@0;\x0a\x09\x09newTile: 'floor-f' position: 6@0;\x0a\x09\x09newTile: 'floor-g' position: 7@0;\x0a\x09\x09newTile: 'floor-h' position: 8@0;\x0a\x09\x09newTile: 'floor-i' position: 9@0;\x0a\x09\x09newTile: 'floor-j' position: 10@0;\x0a\x09\x09newTile: 'floor-k' position: 11@0;\x0a\x09\x09newTile: 'floor-l' position: 12@0;\x0a\x09\x09newTile: 'floor-m' position: 13@0;\x0a\x09\x09newTile: 'floor-n' position: 14@0.\x0a\x09\x09",
messageSends: ["newTile:position:", "@"],
referencedClasses: []
}),
globals.LTileGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "addGrassTiles",
protocol: 'tiles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
$1=(5).__at((17));
$ctx1.sendIdx["@"]=1;
self._newTile_position_("grass-centre",$1);
$ctx1.sendIdx["newTile:position:"]=1;
$2=(11).__at((21));
$ctx1.sendIdx["@"]=2;
self._newTile_position_("grass-left",$2);
$ctx1.sendIdx["newTile:position:"]=2;
$3=(13).__at((21));
$ctx1.sendIdx["@"]=3;
self._newTile_position_("grass-right",$3);
$ctx1.sendIdx["newTile:position:"]=3;
$4=(12).__at((20));
$ctx1.sendIdx["@"]=4;
self._newTile_position_("grass-top",$4);
$ctx1.sendIdx["newTile:position:"]=4;
$5=(12).__at((22));
$ctx1.sendIdx["@"]=5;
self._newTile_position_("grass-bottom",$5);
$ctx1.sendIdx["newTile:position:"]=5;
$6=(11).__at((20));
$ctx1.sendIdx["@"]=6;
self._newTile_position_("grass-top-left",$6);
$ctx1.sendIdx["newTile:position:"]=6;
$7=(13).__at((20));
$ctx1.sendIdx["@"]=7;
self._newTile_position_("grass-top-right",$7);
$ctx1.sendIdx["newTile:position:"]=7;
$8=(11).__at((22));
$ctx1.sendIdx["@"]=8;
self._newTile_position_("grass-bottom-left",$8);
$ctx1.sendIdx["newTile:position:"]=8;
$9=(13).__at((22));
$ctx1.sendIdx["@"]=9;
self._newTile_position_("grass-bottom-right",$9);
$ctx1.sendIdx["newTile:position:"]=9;
$10=(0).__at((35));
$ctx1.sendIdx["@"]=10;
self._newTile_position_("grass-sprouts",$10);
$ctx1.sendIdx["newTile:position:"]=10;
$11=(1).__at((35));
$ctx1.sendIdx["@"]=11;
self._newTile_position_("grass-sprouts-stone",$11);
$ctx1.sendIdx["newTile:position:"]=11;
$12=(2).__at((35));
$ctx1.sendIdx["@"]=12;
self._newTile_position_("grass-tree",$12);
$ctx1.sendIdx["newTile:position:"]=12;
$13=(3).__at((35));
$ctx1.sendIdx["@"]=13;
self._newTile_position_("grass-stump",$13);
$ctx1.sendIdx["newTile:position:"]=13;
$14=(4).__at((35));
$ctx1.sendIdx["@"]=14;
self._newTile_position_("grass-dry-tree",$14);
$ctx1.sendIdx["newTile:position:"]=14;
$15=(6).__at((18));
$ctx1.sendIdx["@"]=15;
self._newTile_position_("grass-flowers",$15);
$ctx1.sendIdx["newTile:position:"]=15;
$16=self._newTile_position_("grass-flowers-0",(6).__at((19)));
return self}, function($ctx1) {$ctx1.fill(self,"addGrassTiles",{},globals.LTileGenerator)})},
args: [],
source: "addGrassTiles\x0a\x0aself\x0a\x09newTile: 'grass-centre' position: 5@17;\x0a\x09newTile: 'grass-left' position: 11@21;\x0a\x09newTile: 'grass-right' position: 13@21;\x0a\x09newTile: 'grass-top' position: 12@20;\x0a\x09newTile: 'grass-bottom' position: 12@22;\x0a\x09newTile: 'grass-top-left' position: 11@20;\x0a\x09newTile: 'grass-top-right' position: 13@20;\x0a\x09newTile: 'grass-bottom-left' position: 11@22;\x0a\x09newTile: 'grass-bottom-right' position: 13@22;\x0a\x09\x09\x0a\x09newTile: 'grass-sprouts' position: 0@35;\x0a\x09newTile: 'grass-sprouts-stone' position: 1@35;\x0a\x09newTile: 'grass-tree' position: 2@35;\x0a\x09newTile: 'grass-stump' position: 3@35;\x0a\x09newTile: 'grass-dry-tree' position: 4@35;\x0a\x09newTile: 'grass-flowers' position: 6@18;\x0a\x09newTile: 'grass-flowers-0' position: 6@19.",
messageSends: ["newTile:position:", "@"],
referencedClasses: []
}),
globals.LTileGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "addSandTiles",
protocol: 'tiles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
$1=(5).__at((15));
$ctx1.sendIdx["@"]=1;
self._newTile_position_("sand-centre",$1);
$ctx1.sendIdx["newTile:position:"]=1;
$2=(12).__at((15));
$ctx1.sendIdx["@"]=2;
self._newTile_position_("sand-left",$2);
$ctx1.sendIdx["newTile:position:"]=2;
$3=(13).__at((15));
$ctx1.sendIdx["@"]=3;
self._newTile_position_("sand-right",$3);
$ctx1.sendIdx["newTile:position:"]=3;
$4=(13).__at((16));
$ctx1.sendIdx["@"]=4;
self._newTile_position_("sand-top",$4);
$ctx1.sendIdx["newTile:position:"]=4;
$5=(13).__at((17));
$ctx1.sendIdx["@"]=5;
self._newTile_position_("sand-bottom",$5);
$ctx1.sendIdx["newTile:position:"]=5;
$6=(16).__at((16));
$ctx1.sendIdx["@"]=6;
self._newTile_position_("sand-top-left",$6);
$ctx1.sendIdx["newTile:position:"]=6;
$7=(17).__at((16));
$ctx1.sendIdx["@"]=7;
self._newTile_position_("sand-top-right",$7);
$ctx1.sendIdx["newTile:position:"]=7;
$8=(16).__at((17));
$ctx1.sendIdx["@"]=8;
self._newTile_position_("sand-bottom-left",$8);
$ctx1.sendIdx["newTile:position:"]=8;
$9=self._newTile_position_("sand-bottom-right",(17).__at((17)));
return self}, function($ctx1) {$ctx1.fill(self,"addSandTiles",{},globals.LTileGenerator)})},
args: [],
source: "addSandTiles\x0a\x0aself \x0a\x09newTile: 'sand-centre' position: 5@15;\x0a\x09newTile: 'sand-left' position: 12@15;\x0a\x09newTile: 'sand-right' position: 13@15;\x0a\x09newTile: 'sand-top' position: 13@16;\x0a\x09newTile: 'sand-bottom' position: 13@17;\x0a\x09newTile: 'sand-top-left' position: 16@16;\x0a\x09newTile: 'sand-top-right' position: 17@16;\x0a\x09newTile: 'sand-bottom-left' position: 16@17;\x0a\x09newTile: 'sand-bottom-right' position: 17@17.",
messageSends: ["newTile:position:", "@"],
referencedClasses: []
}),
globals.LTileGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.LTileGenerator.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._source_("images/site/open_tileset.png");
$1=self._addAllTiles();
self._frameRate_((4));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.LTileGenerator)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/site/open_tileset.png';\x0a\x09\x09addAllTiles.\x0a\x09\x0a\x09self frameRate: 4.",
messageSends: ["initialize", "source:", "addAllTiles", "frameRate:"],
referencedClasses: []
}),
globals.LTileGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "newTile:position:",
protocol: 'tiles',
fn: function (anIdentifier,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(aPosition)._x()).__star((32));
$ctx1.sendIdx["*"]=1;
$1=_st($2).__at(_st(_st(aPosition)._y()).__star((32)));
$ctx1.sendIdx["@"]=1;
self._addFrameGroupNamed_origin_size_frameCount_(anIdentifier,$1,(32).__at((32)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"newTile:position:",{anIdentifier:anIdentifier,aPosition:aPosition},globals.LTileGenerator)})},
args: ["anIdentifier", "aPosition"],
source: "newTile: anIdentifier position: aPosition\x0a\x09self addFrameGroupNamed: anIdentifier origin: (aPosition x * 32)@(aPosition y * 32) size: 32@32 frameCount: 1",
messageSends: ["addFrameGroupNamed:origin:size:frameCount:", "@", "*", "x", "y"],
referencedClasses: []
}),
globals.LTileGenerator);


});
