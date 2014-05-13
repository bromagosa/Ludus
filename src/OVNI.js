define("HOS/OVNI", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "HOS/Ludus"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('OVNI');
smalltalk.packages["OVNI"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('OVNI', globals.Game, ['ship', 'saucers', 'scrollSpeed', 'farBackground', 'starField'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._clearCanvas();
self._drawFarBackground();
self._drawSprite_(self._ship());
self._drawSpriteCollection_(self._saucers());
$1=self._drawBackground_(self._starField());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVNI)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09clearCanvas;\x0a\x09\x09drawFarBackground;\x0a\x09\x09drawSprite: self ship;\x0a\x09\x09drawSpriteCollection: self saucers;\x0a\x09\x09drawBackground: self starField.",
messageSends: ["clearCanvas", "drawFarBackground", "drawSprite:", "ship", "drawSpriteCollection:", "saucers", "drawBackground:", "starField"],
referencedClasses: []
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "drawFarBackground",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._drawBackground_(self._farBackground());
return self}, function($ctx1) {$ctx1.fill(self,"drawFarBackground",{},globals.OVNI)})},
args: [],
source: "drawFarBackground\x0a\x09self drawBackground: self farBackground.",
messageSends: ["drawBackground:", "farBackground"],
referencedClasses: []
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "farBackground",
protocol: 'accessing',
fn: function (){
var self=this;
function $Background(){return globals.Background||(typeof Background=="undefined"?nil:Background)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$6,$4,$1,$receiver;
$2=self["@farBackground"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($Background())._new();
_st($3)._spriteSheet_("images/ovni/farback.gif");
$5=$3;
$6=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$4=_st($5)._addParallaxNamed_origin_size_speed_("background",$6,(1782).__at((600)),(1));
self["@farBackground"]=$4;
$1=self["@farBackground"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"farBackground",{},globals.OVNI)})},
args: [],
source: "farBackground\x0a\x09^ farBackground ifNil: [ \x0a\x09\x09farBackground := \x0a\x09\x09\x09Background new \x0a\x09\x09\x09\x09spriteSheet: 'images/ovni/farback.gif';\x0a\x09\x09\x09\x09addParallaxNamed: 'background' origin: 0@0 size: 1782@600 speed: 1 ]",
messageSends: ["ifNil:", "spriteSheet:", "new", "addParallaxNamed:origin:size:speed:", "@"],
referencedClasses: ["Background"]
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "saucers",
protocol: 'accessing',
fn: function (){
var self=this;
function $Saucer(){return globals.Saucer||(typeof Saucer=="undefined"?nil:Saucer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$7,$6,$4,$1,$receiver;
$2=self["@saucers"];
if(($receiver = $2) == null || $receiver.isNil){
self["@saucers"]=[];
self["@saucers"];
(5)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$3=self["@saucers"];
$5=_st($Saucer())._new();
$7=_st(self._width())._atRandom();
$ctx2.sendIdx["atRandom"]=1;
$6=_st($7).__at(_st(self._height())._atRandom());
$4=_st($5)._centre_($6);
return _st($3)._add_($4);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$1=self["@saucers"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"saucers",{},globals.OVNI)})},
args: [],
source: "saucers\x0a\x09^ saucers ifNil: [ \x0a\x09\x09saucers := #().\x0a\x09\x095 timesRepeat: [ \x0a\x09\x09\x09saucers add:\x0a\x09\x09\x09\x09(Saucer new centre: self width atRandom @ self height atRandom)\x0a\x09\x09].\x0a\x09\x09saucers.\x0a\x09]",
messageSends: ["ifNil:", "timesRepeat:", "add:", "centre:", "new", "@", "atRandom", "width", "height"],
referencedClasses: ["Saucer"]
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "ship",
protocol: 'accessing',
fn: function (){
var self=this;
function $SpaceShip(){return globals.SpaceShip||(typeof SpaceShip=="undefined"?nil:SpaceShip)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@ship"];
if(($receiver = $2) == null || $receiver.isNil){
self["@ship"]=_st(_st($SpaceShip())._new())._centre_((105).__at(_st(self._height()).__slash((2))));
$1=self["@ship"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"ship",{},globals.OVNI)})},
args: [],
source: "ship\x0a\x09^ ship ifNil: [ ship := SpaceShip new centre: 105 @ (self height / 2) ]",
messageSends: ["ifNil:", "centre:", "new", "@", "/", "height"],
referencedClasses: ["SpaceShip"]
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "starField",
protocol: 'accessing',
fn: function (){
var self=this;
function $Background(){return globals.Background||(typeof Background=="undefined"?nil:Background)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$6,$4,$1,$receiver;
$2=self["@starField"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($Background())._new();
_st($3)._spriteSheet_("images/ovni/starfield.png");
$5=$3;
$6=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$4=_st($5)._addParallaxNamed_origin_size_speed_("background",$6,(800).__at((600)),(6));
self["@starField"]=$4;
$1=self["@starField"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"starField",{},globals.OVNI)})},
args: [],
source: "starField\x0a\x09^ starField ifNil: [ \x0a\x09\x09starField := \x0a\x09\x09\x09Background new \x0a\x09\x09\x09\x09spriteSheet: 'images/ovni/starfield.png';\x0a\x09\x09\x09\x09addParallaxNamed: 'background' origin: 0@0 size: 800@600 speed: 6 ]",
messageSends: ["ifNil:", "spriteSheet:", "new", "addParallaxNamed:origin:size:speed:", "@"],
referencedClasses: ["Background"]
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
protocol: 'control',
fn: function (){
var self=this;
function $OVNIStartScreen(){return globals.OVNIStartScreen||(typeof OVNIStartScreen=="undefined"?nil:OVNIStartScreen)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@fps"]=(30);
self._width_((720));
self._height_((540));
self._backgroundColor_("black");
self._addSound_("sounds/ovni/background.ogg");
$ctx1.sendIdx["addSound:"]=1;
self._addSound_("sounds/ovni/laser.ogg");
$1=self._addScreen_(_st($OVNIStartScreen())._new());
self._switchToScreen_(_st(self._screens())._first());
_st(self._soundNamed_("background"))._loop();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.OVNI)})},
args: [],
source: "startGame\x0a\x09fps := 30.\x0a\x09\x0a\x09self width: 720; \x0a\x09\x09height: 540;\x0a\x09\x09backgroundColor: 'black';\x0a\x09\x09addSound: 'sounds/ovni/background.ogg';\x0a\x09\x09addSound: 'sounds/ovni/laser.ogg';\x0a\x09\x09addScreen: OVNIStartScreen new.\x0a\x09\x0a\x09self switchToScreen: self screens first.\x0a\x09\x0a\x09(self soundNamed: 'background') loop.",
messageSends: ["width:", "height:", "backgroundColor:", "addSound:", "addScreen:", "new", "switchToScreen:", "first", "screens", "loop", "soundNamed:"],
referencedClasses: ["OVNIStartScreen"]
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
self._whileKeyPressed_do_(_st($Key())._leftArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$1=self._ship();
$ctx2.sendIdx["ship"]=1;
return _st($1)._goLeft();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=1;
self._whileKeyPressed_do_(_st($Key())._rightArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$2=self._ship();
$ctx2.sendIdx["ship"]=2;
return _st($2)._goRight();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=2;
self._whileKeyPressed_do_(_st($Key())._upArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$3=self._ship();
$ctx2.sendIdx["ship"]=3;
return _st($3)._goUp();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=3;
self._whileKeyPressed_do_(_st($Key())._downArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._ship())._goDown();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=4;
$4=self._whileKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._soundNamed_("laser"))._play();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
_st(self._saucers())._do_((function(eachSaucer){
return smalltalk.withContext(function($ctx2) {
_st(eachSaucer)._move();
$5=_st(eachSaucer)._isInsideCanvas_(self._canvas());
if(! smalltalk.assert($5)){
_st(eachSaucer)._x_(self._width());
$6=_st(eachSaucer)._y_(_st(self._height())._atRandom());
return $6;
};
}, function($ctx2) {$ctx2.fillBlock({eachSaucer:eachSaucer},$ctx1,6)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVNI)})},
args: [],
source: "step\x0a\x09self \x0a\x09\x09whileKeyPressed: Key leftArrow do: [ self ship goLeft ];\x0a\x09\x09whileKeyPressed: Key rightArrow do: [ self ship goRight ];\x0a\x09\x09whileKeyPressed: Key upArrow do: [ self ship goUp ];\x0a\x09\x09whileKeyPressed: Key downArrow do: [ self ship goDown ];\x0a\x09\x09whileKeyPressed: Key space do: [ (self soundNamed: 'laser') play ].\x0a\x09\x09\x0a\x09self saucers do: [ :eachSaucer | \x0a\x09\x09eachSaucer move.\x0a\x09\x09(eachSaucer isInsideCanvas: self canvas) \x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09eachSaucer\x0a\x09\x09\x09\x09\x09x: self width;\x0a\x09\x09\x09\x09\x09y: self height atRandom ]]",
messageSends: ["whileKeyPressed:do:", "leftArrow", "goLeft", "ship", "rightArrow", "goRight", "upArrow", "goUp", "downArrow", "goDown", "space", "play", "soundNamed:", "do:", "saucers", "move", "ifFalse:", "isInsideCanvas:", "canvas", "x:", "width", "y:", "atRandom", "height"],
referencedClasses: ["Key"]
}),
globals.OVNI);



smalltalk.addClass('OVNIStartScreen', globals.Screen, [], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._game())._drawFarBackground();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVNIStartScreen)})},
args: [],
source: "draw\x0a\x09self game drawFarBackground",
messageSends: ["drawFarBackground", "game"],
referencedClasses: []
}),
globals.OVNIStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "startScreen",
protocol: 'control',
fn: function (){
var self=this;
return self},
args: [],
source: "startScreen\x0a\x09\x22self doNothing\x22",
messageSends: [],
referencedClasses: []
}),
globals.OVNIStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
return self},
args: [],
source: "step\x0a\x09\x22self doNothing\x22",
messageSends: [],
referencedClasses: []
}),
globals.OVNIStartScreen);



smalltalk.addClass('Saucer', globals.Sprite, [], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.Saucer.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._spriteSheet_("images/ovni/saucer.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("flying",$2,(40).__at((40)),(6));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Saucer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09spriteSheet: 'images/ovni/saucer.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6.",
messageSends: ["initialize", "spriteSheet:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveCentreBy_((-2).__at(_st((-2)._to_((2)))._atRandom()));
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.Saucer)})},
args: [],
source: "move\x0a\x09self moveCentreBy: -2 @ (-2 to: 2) atRandom.\x0a\x09\x0a\x09",
messageSends: ["moveCentreBy:", "@", "atRandom", "to:"],
referencedClasses: []
}),
globals.Saucer);



smalltalk.addClass('SpaceShip', globals.Sprite, ['speed'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "goDown",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveCentreBy_speed_((0).__at((1)),self._speed());
return self}, function($ctx1) {$ctx1.fill(self,"goDown",{},globals.SpaceShip)})},
args: [],
source: "goDown\x0a\x09self moveCentreBy: (0 @ 1) speed: self speed",
messageSends: ["moveCentreBy:speed:", "@", "speed"],
referencedClasses: []
}),
globals.SpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "goLeft",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveCentreBy_speed_((-1).__at((0)),self._speed());
return self}, function($ctx1) {$ctx1.fill(self,"goLeft",{},globals.SpaceShip)})},
args: [],
source: "goLeft\x0a\x09self moveCentreBy: (-1 @ 0) speed: self speed",
messageSends: ["moveCentreBy:speed:", "@", "speed"],
referencedClasses: []
}),
globals.SpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "goRight",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveCentreBy_speed_((1).__at((0)),self._speed());
return self}, function($ctx1) {$ctx1.fill(self,"goRight",{},globals.SpaceShip)})},
args: [],
source: "goRight\x0a\x09self moveCentreBy: (1 @ 0) speed: self speed",
messageSends: ["moveCentreBy:speed:", "@", "speed"],
referencedClasses: []
}),
globals.SpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "goUp",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveCentreBy_speed_((0).__at((-1)),self._speed());
return self}, function($ctx1) {$ctx1.fill(self,"goUp",{},globals.SpaceShip)})},
args: [],
source: "goUp\x0a\x09self moveCentreBy: (0 @ -1) speed: self speed",
messageSends: ["moveCentreBy:speed:", "@", "speed"],
referencedClasses: []
}),
globals.SpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.SpaceShip.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._spriteSheet_("images/ovni/ship.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("flying",$2,(64).__at((29)),(4));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SpaceShip)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09spriteSheet: 'images/ovni/ship.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 64@29 frameCount: 4.",
messageSends: ["initialize", "spriteSheet:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
referencedClasses: []
}),
globals.SpaceShip);

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
self["@speed"]=(5);
$1=self["@speed"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"speed",{},globals.SpaceShip)})},
args: [],
source: "speed\x0a\x09^ speed ifNil: [ speed := 5 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.SpaceShip);


});
