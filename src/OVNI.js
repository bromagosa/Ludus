define("HOS/OVNI", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "HOS/Ludus"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('OVNI');
smalltalk.packages["OVNI"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('Bullet', globals.Sprite, ['speed', 'acceleration'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "accelerate",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@speed"]=_st(self._speed()).__plus(self._acceleration());
return self}, function($ctx1) {$ctx1.fill(self,"accelerate",{},globals.Bullet)})},
args: [],
source: "accelerate\x0a\x09speed := self speed + self acceleration",
messageSends: ["+", "speed", "acceleration"],
referencedClasses: []
}),
globals.Bullet);

smalltalk.addMethod(
smalltalk.method({
selector: "acceleration",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@acceleration"];
if(($receiver = $2) == null || $receiver.isNil){
self["@acceleration"]=(2);
$1=self["@acceleration"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"acceleration",{},globals.Bullet)})},
args: [],
source: "acceleration\x0a\x09^ acceleration ifNil: [ acceleration := 2 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Bullet);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.Bullet.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._spriteSheet_("images/ovni/bullet.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("shooting",$2,(9).__at((9)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Bullet)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09spriteSheet: 'images/ovni/bullet.png';\x0a\x09\x09addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.",
messageSends: ["initialize", "spriteSheet:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
referencedClasses: []
}),
globals.Bullet);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._moveCentreBy_(_st(self._speed()).__at((0)));
$1=self._accelerate();
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.Bullet)})},
args: [],
source: "move\x0a\x09self \x0a\x09\x09moveCentreBy: self speed @ 0;\x0a\x09\x09accelerate",
messageSends: ["moveCentreBy:", "@", "speed", "accelerate"],
referencedClasses: []
}),
globals.Bullet);

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
}, function($ctx1) {$ctx1.fill(self,"speed",{},globals.Bullet)})},
args: [],
source: "speed\x0a\x09^ speed ifNil: [ speed := 5 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Bullet);



smalltalk.addClass('OVNI', globals.Game, ['ship', 'saucers', 'scrollSpeed', 'farBackground', 'starField', 'bullets'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "bullets",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@bullets"];
if(($receiver = $2) == null || $receiver.isNil){
self["@bullets"]=[];
$1=self["@bullets"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bullets",{},globals.OVNI)})},
args: [],
source: "bullets\x0a\x09^ bullets ifNil: [ bullets := #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._clearCanvas();
self._drawBackground_(self._farBackground());
$ctx1.sendIdx["drawBackground:"]=1;
self._drawSpriteCollection_(self._saucers());
$ctx1.sendIdx["drawSpriteCollection:"]=1;
self._drawSpriteCollection_(self._bullets());
self._drawSprite_(self._ship());
$1=self._drawBackground_(self._starField());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVNI)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09clearCanvas;\x0a\x09\x09drawBackground: self farBackground;\x0a\x09\x09drawSpriteCollection: self saucers;\x0a\x09\x09drawSpriteCollection: self bullets;\x0a\x09\x09drawSprite: self ship;\x0a\x09\x09drawBackground: self starField.",
messageSends: ["clearCanvas", "drawBackground:", "farBackground", "drawSpriteCollection:", "saucers", "bullets", "drawSprite:", "ship", "starField"],
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
selector: "moveBullets",
protocol: 'sprite processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._bullets())._do_((function(eachBullet){
return smalltalk.withContext(function($ctx2) {
_st(eachBullet)._move();
$1=_st(eachBullet)._isAllInsideCanvas_(self._canvas());
if(! smalltalk.assert($1)){
return _st(self["@bullets"])._remove_(eachBullet);
};
}, function($ctx2) {$ctx2.fillBlock({eachBullet:eachBullet},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveBullets",{},globals.OVNI)})},
args: [],
source: "moveBullets\x0a\x09self bullets do: [ :eachBullet | \x0a\x09\x09eachBullet move.\x0a\x09\x09(eachBullet isAllInsideCanvas: self canvas) \x0a\x09\x09\x09ifFalse: [ bullets remove: eachBullet ]]",
messageSends: ["do:", "bullets", "move", "ifFalse:", "isAllInsideCanvas:", "canvas", "remove:"],
referencedClasses: []
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "moveSaucers",
protocol: 'sprite processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$5,$6,$4,$3,$2,$9,$8,$7,$10,$receiver;
_st(self._saucers())._do_((function(eachSaucer){
var killingBullet;
return smalltalk.withContext(function($ctx2) {
killingBullet=_st(eachSaucer)._collidesWithWhichOf_(self._bullets());
killingBullet;
$1=killingBullet;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(eachSaucer)._explode();
_st(self["@bullets"])._remove_(killingBullet);
};
_st(eachSaucer)._move();
$5=_st(eachSaucer)._x();
$6=_st(eachSaucer)._width();
$ctx2.sendIdx["width"]=1;
$4=_st($5).__plus($6);
$ctx2.sendIdx["+"]=1;
$3=_st($4).__lt((0));
$2=_st($3).__or(_st(eachSaucer)._dead());
if(smalltalk.assert($2)){
$9=self._width();
$ctx2.sendIdx["width"]=2;
$8=_st($9)._atRandom();
$ctx2.sendIdx["atRandom"]=1;
$7=_st($8).__plus(self._width());
_st(eachSaucer)._x_($7);
_st(eachSaucer)._y_(_st(self._height())._atRandom());
$10=_st(eachSaucer)._dead_(false);
return $10;
};
}, function($ctx2) {$ctx2.fillBlock({eachSaucer:eachSaucer,killingBullet:killingBullet},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveSaucers",{},globals.OVNI)})},
args: [],
source: "moveSaucers\x0a\x09self saucers do: [ :eachSaucer | \x0a\x09\x09| killingBullet |\x0a\x09\x09killingBullet := (eachSaucer collidesWithWhichOf: self bullets).\x0a\x09\x09killingBullet ifNotNil: [ \x0a\x09\x09\x09eachSaucer explode.\x0a\x09\x09\x09bullets remove: killingBullet ].\x0a\x09\x09\x0a\x09\x09eachSaucer move.\x0a\x09\x09\x0a\x09\x09((eachSaucer x + eachSaucer width) < 0) | eachSaucer dead\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09eachSaucer\x0a\x09\x09\x09\x09\x09\x09x: self width atRandom + self width;\x0a\x09\x09\x09\x09\x09\x09y: self height atRandom;\x0a\x09\x09\x09\x09\x09\x09dead: false ]]",
messageSends: ["do:", "saucers", "collidesWithWhichOf:", "bullets", "ifNotNil:", "explode", "remove:", "move", "ifTrue:", "|", "<", "+", "x", "width", "dead", "x:", "atRandom", "y:", "height", "dead:"],
referencedClasses: []
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "moveShip",
protocol: 'sprite processing',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5,$7,$8,$6,$9,$11,$12,$10,$13,$16,$15,$14;
$1=self._inputHandler();
_st($1)._whileKeyPressed_do_(_st($Key())._leftArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$3=self._ship();
$ctx2.sendIdx["ship"]=1;
$4=self._canvas();
$ctx2.sendIdx["canvas"]=1;
$2=_st($3)._isLeftInsideCanvas_($4);
if(smalltalk.assert($2)){
$5=self._ship();
$ctx2.sendIdx["ship"]=2;
return _st($5)._goLeft();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=1;
_st($1)._whileKeyPressed_do_(_st($Key())._rightArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$7=self._ship();
$ctx2.sendIdx["ship"]=3;
$8=self._canvas();
$ctx2.sendIdx["canvas"]=2;
$6=_st($7)._isRightInsideCanvas_($8);
if(smalltalk.assert($6)){
$9=self._ship();
$ctx2.sendIdx["ship"]=4;
return _st($9)._goRight();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=2;
_st($1)._whileKeyPressed_do_(_st($Key())._upArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$11=self._ship();
$ctx2.sendIdx["ship"]=5;
$12=self._canvas();
$ctx2.sendIdx["canvas"]=3;
$10=_st($11)._isTopInsideCanvas_($12);
if(smalltalk.assert($10)){
$13=self._ship();
$ctx2.sendIdx["ship"]=6;
return _st($13)._goUp();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=3;
$14=_st($1)._whileKeyPressed_do_(_st($Key())._downArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
$16=self._ship();
$ctx2.sendIdx["ship"]=7;
$15=_st($16)._isBottomInsideCanvas_(self._canvas());
if(smalltalk.assert($15)){
return _st(self._ship())._goDown();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveShip",{},globals.OVNI)})},
args: [],
source: "moveShip\x0a\x09self inputHandler\x0a\x09\x09whileKeyPressed: Key leftArrow do: [ \x0a\x09\x09\x09(self ship isLeftInsideCanvas: self canvas) \x0a\x09\x09\x09\x09ifTrue: [ self ship goLeft ]];\x0a\x09\x09whileKeyPressed: Key rightArrow do: [\x0a\x09\x09\x09(self ship isRightInsideCanvas: self canvas) \x0a\x09\x09\x09\x09ifTrue: [ self ship goRight ]];\x0a\x09\x09whileKeyPressed: Key upArrow do: [\x0a\x09\x09\x09(self ship isTopInsideCanvas: self canvas) \x0a\x09\x09\x09\x09ifTrue: [ self ship goUp ]];\x0a\x09\x09whileKeyPressed: Key downArrow do: [\x0a\x09\x09\x09(self ship isBottomInsideCanvas: self canvas) \x0a\x09\x09\x09\x09ifTrue: [ self ship goDown ]].",
messageSends: ["whileKeyPressed:do:", "inputHandler", "leftArrow", "ifTrue:", "isLeftInsideCanvas:", "ship", "canvas", "goLeft", "rightArrow", "isRightInsideCanvas:", "goRight", "upArrow", "isTopInsideCanvas:", "goUp", "downArrow", "isBottomInsideCanvas:", "goDown"],
referencedClasses: ["Key"]
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
selector: "shoot",
protocol: 'game actions',
fn: function (){
var self=this;
function $Bullet(){return globals.Bullet||(typeof Bullet=="undefined"?nil:Bullet)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4,$6,$9,$8,$7,$5;
$3=self._bullets();
$ctx1.sendIdx["bullets"]=1;
$2=_st($3)._size();
$1=_st($2).__lt((6));
if(smalltalk.assert($1)){
_st(self._soundNamed_("laser"))._play();
$4=self._bullets();
$6=_st($Bullet())._new();
$9=self._ship();
$ctx1.sendIdx["ship"]=1;
$8=_st($9)._centre();
$7=_st($8).__plus(_st(_st(_st(self._ship())._width()).__slash((2))).__at((0)));
$5=_st($6)._centre_($7);
_st($4)._add_($5);
};
return self}, function($ctx1) {$ctx1.fill(self,"shoot",{},globals.OVNI)})},
args: [],
source: "shoot\x0a\x09self bullets size < 6 ifTrue: [\x0a\x09\x09(self soundNamed: 'laser') play.\x0a\x09\x09self bullets \x0a\x09\x09\x09add: \x0a\x09\x09\x09\x09(Bullet new centre: (self ship centre + ((self ship width / 2) @ 0)))]",
messageSends: ["ifTrue:", "<", "size", "bullets", "play", "soundNamed:", "add:", "centre:", "new", "+", "centre", "ship", "@", "/", "width"],
referencedClasses: ["Bullet"]
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
var $1;
self._moveShip();
self._moveSaucers();
$1=self._moveBullets();
_st(self._inputHandler())._whileKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._shoot();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVNI)})},
args: [],
source: "step\x0a\x09self \x0a\x09\x09moveShip;\x0a\x09\x09moveSaucers;\x0a\x09\x09moveBullets.\x0a\x09self inputHandler whileKeyPressed: Key space do: [ self shoot ]",
messageSends: ["moveShip", "moveSaucers", "moveBullets", "whileKeyPressed:do:", "inputHandler", "space", "shoot"],
referencedClasses: ["Key"]
}),
globals.OVNI);



smalltalk.addClass('OVNIStartScreen', globals.Screen, ['saucers', 'title'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._drawBackground_(_st(self._game())._farBackground());
self._drawSpriteCollection_(self._saucers());
$1=self._draw_(self._title());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVNIStartScreen)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09drawBackground: self game farBackground;\x0a\x09\x09drawSpriteCollection: self saucers;\x0a\x09\x09draw: self title",
messageSends: ["drawBackground:", "farBackground", "game", "drawSpriteCollection:", "saucers", "draw:", "title"],
referencedClasses: []
}),
globals.OVNIStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "saucers",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@saucers"];
return $1;
},
args: [],
source: "saucers\x0a\x09^ saucers",
messageSends: [],
referencedClasses: []
}),
globals.OVNIStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "saucers:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@saucers"]=anObject;
return self},
args: ["anObject"],
source: "saucers: anObject\x0a\x09saucers := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVNIStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "startScreen",
protocol: 'control',
fn: function (){
var self=this;
function $Drawable(){return globals.Drawable||(typeof Drawable=="undefined"?nil:Drawable)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$7,$6,$5,$4,$3,$13,$12,$11,$10,$9,$8,$15,$16,$17,$14;
$2=self._game();
$ctx1.sendIdx["game"]=1;
$1=_st($2)._saucers();
$ctx1.sendIdx["saucers"]=1;
self._saucers_($1);
_st(self._saucers())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$7=self._game();
$ctx2.sendIdx["game"]=2;
$6=_st($7)._width();
$5=_st($6).__minus((100));
$ctx2.sendIdx["-"]=1;
$4=_st($5)._atRandom();
$ctx2.sendIdx["atRandom"]=1;
$3=_st($4).__plus((50));
$ctx2.sendIdx["+"]=1;
_st(each)._x_($3);
$13=self._game();
$ctx2.sendIdx["game"]=3;
$12=_st($13)._height();
$ctx2.sendIdx["height"]=1;
$11=_st($12).__minus((100));
$10=_st($11)._atRandom();
$9=_st($10).__plus((50));
$8=_st(each)._y_($9);
return $8;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$15=_st($Drawable())._new();
$16=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$17=(600).__at((196));
$ctx1.sendIdx["@"]=2;
$14=_st($15)._source_origin_size_position_("images/ovni/title.png",$16,$17,(55).__at(_st(self._game())._height()));
self._title_($14);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVNIStartScreen)})},
args: [],
source: "startScreen\x0a\x09self saucers: self game saucers.\x0a\x09self saucers do: [ :each | \x0a\x09\x09each \x0a\x09\x09\x09x: (self game width - 100) atRandom + 50;\x0a\x09\x09\x09y: (self game height - 100) atRandom + 50 ].\x0a\x09\x09\x09\x0a\x09self title: \x0a\x09\x09(Drawable new \x0a\x09\x09\x09source: 'images/ovni/title.png' \x0a\x09\x09\x09origin: 0@0 \x0a\x09\x09\x09size: 600@196 \x0a\x09\x09\x09position: 55 @ self game height)",
messageSends: ["saucers:", "saucers", "game", "do:", "x:", "+", "atRandom", "-", "width", "y:", "height", "title:", "source:origin:size:position:", "new", "@"],
referencedClasses: ["Drawable"]
}),
globals.OVNIStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4;
$3=self._title();
$ctx1.sendIdx["title"]=1;
$2=_st($3)._y();
$ctx1.sendIdx["y"]=1;
$1=_st($2).__gt((40));
if(smalltalk.assert($1)){
$4=self._title();
$ctx1.sendIdx["title"]=2;
_st($4)._y_(_st(_st(self._title())._y()).__minus((4)));
};
_st(self._saucers())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._wander();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
_st(self._inputHandler())._whileKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._game())._switchToGame();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVNIStartScreen)})},
args: [],
source: "step\x0a\x09self title y > 40 ifTrue: [ self title y: self title y - 4 ].\x0a\x09self saucers do: [ :each | each wander ].\x0a\x09self inputHandler whileKeyPressed: Key space do: [ self game switchToGame ]",
messageSends: ["ifTrue:", ">", "y", "title", "y:", "-", "do:", "saucers", "wander", "whileKeyPressed:do:", "inputHandler", "space", "switchToGame", "game"],
referencedClasses: ["Key"]
}),
globals.OVNIStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@title"];
return $1;
},
args: [],
source: "title\x0a\x09^ title",
messageSends: [],
referencedClasses: []
}),
globals.OVNIStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@title"]=anObject;
return self},
args: ["anObject"],
source: "title: anObject\x0a\x09title := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVNIStartScreen);



smalltalk.addClass('Saucer', globals.Sprite, ['exploding', 'dead'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "dead",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@dead"];
if(($receiver = $2) == null || $receiver.isNil){
self["@dead"]=false;
$1=self["@dead"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"dead",{},globals.Saucer)})},
args: [],
source: "dead\x0a\x09^ dead ifNil: [ dead := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "dead:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@dead"]=aBoolean;
return self},
args: ["aBoolean"],
source: "dead: aBoolean\x0a\x09dead := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "die",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._currentFrameGroup_("flying");
self._loop_(true);
$1=self._dead_(true);
return self}, function($ctx1) {$ctx1.fill(self,"die",{},globals.Saucer)})},
args: [],
source: "die\x0a\x09self \x0a\x09\x09currentFrameGroup: 'flying';\x0a\x09\x09loop: true;\x0a\x09\x09dead: true.",
messageSends: ["currentFrameGroup:", "loop:", "dead:"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "explode",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._currentFrameGroup_("explosion");
self._loop_(false);
$1=self._exploding_(true);
return self}, function($ctx1) {$ctx1.fill(self,"explode",{},globals.Saucer)})},
args: [],
source: "explode\x0a\x09self currentFrameGroup: 'explosion'.\x0a\x09self\x0a\x09\x09loop: false; \x0a\x09\x09exploding: true.",
messageSends: ["currentFrameGroup:", "loop:", "exploding:"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "exploding",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@exploding"];
if(($receiver = $2) == null || $receiver.isNil){
self["@exploding"]=false;
$1=self["@exploding"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"exploding",{},globals.Saucer)})},
args: [],
source: "exploding\x0a\x09^ exploding ifNil: [ exploding := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "exploding:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@exploding"]=aBoolean;
return self},
args: ["aBoolean"],
source: "exploding: aBoolean\x0a\x09exploding := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
($ctx1.supercall = true, globals.Saucer.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._spriteSheet_("images/ovni/saucer.png");
$1=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$2=(40).__at((40));
$ctx1.sendIdx["@"]=2;
self._addFrameGroupNamed_origin_size_frameCount_("flying",$1,$2,(6));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$4=(0).__at((40));
$ctx1.sendIdx["@"]=3;
$3=self._addFrameGroupNamed_origin_size_frameCount_("explosion",$4,(40).__at((40)),(10));
_st(self._frameGroupNamed_("explosion"))._frameRate_((2));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Saucer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09spriteSheet: 'images/ovni/saucer.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6;\x0a\x09\x09addFrameGroupNamed: 'explosion' origin: 0@40 size: 40@40 frameCount: 10.\x0a\x09\x0a\x09(self frameGroupNamed: 'explosion') frameRate: 2.",
messageSends: ["initialize", "spriteSheet:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:", "frameGroupNamed:"],
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
var $1,$2;
self._moveCentreBy_((-2).__at(_st((5)._atRandom()).__minus((3))));
$1=_st(self._exploding()).__and(self._atLastFrame());
if(smalltalk.assert($1)){
self._exploding_(false);
$2=self._die();
$2;
};
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.Saucer)})},
args: [],
source: "move\x0a\x09self moveCentreBy: -2 @ (5 atRandom - 3).\x0a\x09(self exploding & self atLastFrame ) \x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09exploding: false;\x0a\x09\x09\x09\x09die ]",
messageSends: ["moveCentreBy:", "@", "-", "atRandom", "ifTrue:", "&", "exploding", "atLastFrame", "exploding:", "die"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "wander",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=(3)._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$2=_st($3).__minus((2));
$ctx1.sendIdx["-"]=1;
$1=_st($2).__at(_st((3)._atRandom()).__minus((2)));
self._moveCentreBy_($1);
return self}, function($ctx1) {$ctx1.fill(self,"wander",{},globals.Saucer)})},
args: [],
source: "wander\x0a\x09self moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).",
messageSends: ["moveCentreBy:", "@", "-", "atRandom"],
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
