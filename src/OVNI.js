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
self._imageSrc_("images/ovni/bullet.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("shooting",$2,(9).__at((9)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Bullet)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09imageSrc: 'images/ovni/bullet.png';\x0a\x09\x09addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.",
messageSends: ["initialize", "imageSrc:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
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



smalltalk.addClass('EnemyBullet', globals.Bullet, [], 'OVNI');
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
self["@acceleration"]=(-1);
$1=self["@acceleration"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"acceleration",{},globals.EnemyBullet)})},
args: [],
source: "acceleration\x0a\x09^ acceleration ifNil: [ acceleration := -1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.EnemyBullet);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.EnemyBullet.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._imageSrc_("images/ovni/enemybullet.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("shooting",$2,(9).__at((9)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.EnemyBullet)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09imageSrc: 'images/ovni/enemybullet.png';\x0a\x09\x09addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.",
messageSends: ["initialize", "imageSrc:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
referencedClasses: []
}),
globals.EnemyBullet);

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
}, function($ctx1) {$ctx1.fill(self,"speed",{},globals.EnemyBullet)})},
args: [],
source: "speed\x0a\x09^ speed ifNil: [ speed := 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.EnemyBullet);



smalltalk.addClass('OVNI', globals.Game, ['ship', 'saucers', 'scrollSpeed', 'farBackground', 'starField', 'bullets', 'enemyBullets'], 'OVNI');
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
selector: "controlBullets",
protocol: 'sprite processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
_st(self._bullets())._do_((function(eachBullet){
return smalltalk.withContext(function($ctx2) {
_st(eachBullet)._move();
$ctx2.sendIdx["move"]=1;
$2=self._canvas();
$ctx2.sendIdx["canvas"]=1;
$1=_st(eachBullet)._isAllInsideCanvas_($2);
$ctx2.sendIdx["isAllInsideCanvas:"]=1;
if(! smalltalk.assert($1)){
return _st(self["@bullets"])._remove_(eachBullet);
$ctx2.sendIdx["remove:"]=1;
};
}, function($ctx2) {$ctx2.fillBlock({eachBullet:eachBullet},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(self._enemyBullets())._do_((function(eachBullet){
return smalltalk.withContext(function($ctx2) {
_st(eachBullet)._move();
$3=_st(eachBullet)._isAllInsideCanvas_(self._canvas());
if(! smalltalk.assert($3)){
return _st(self["@enemyBullets"])._remove_(eachBullet);
};
}, function($ctx2) {$ctx2.fillBlock({eachBullet:eachBullet},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"controlBullets",{},globals.OVNI)})},
args: [],
source: "controlBullets\x0a\x09self bullets do: [ :eachBullet | \x0a\x09\x09eachBullet move.\x0a\x09\x09(eachBullet isAllInsideCanvas: self canvas) \x0a\x09\x09\x09ifFalse: [ bullets remove: eachBullet ]].\x0a\x09self enemyBullets do: [ :eachBullet | \x0a\x09\x09eachBullet move.\x0a\x09\x09(eachBullet isAllInsideCanvas: self canvas) \x0a\x09\x09\x09ifFalse: [ enemyBullets remove: eachBullet ]]",
messageSends: ["do:", "bullets", "move", "ifFalse:", "isAllInsideCanvas:", "canvas", "remove:", "enemyBullets"],
referencedClasses: []
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "controlSaucers",
protocol: 'sprite processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6;
_st(self._saucers())._do_((function(eachSaucer){
return smalltalk.withContext(function($ctx2) {
_st(eachSaucer)._checkCollisionWith_(self._bullets());
$1=_st(eachSaucer)._step();
$1;
$2=_st(eachSaucer)._shouldRespawn();
if(smalltalk.assert($2)){
$4=self._width();
$ctx2.sendIdx["width"]=1;
$5=_st(self._width())._atRandom();
$ctx2.sendIdx["atRandom"]=1;
$3=_st($4).__plus($5);
_st(eachSaucer)._respawnAtX_y_($3,_st(self._height())._atRandom());
};
$6=_st(eachSaucer)._shouldShoot();
if(smalltalk.assert($6)){
return _st(self._enemyBullets())._add_(_st(eachSaucer)._newBullet());
};
}, function($ctx2) {$ctx2.fillBlock({eachSaucer:eachSaucer},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"controlSaucers",{},globals.OVNI)})},
args: [],
source: "controlSaucers\x0a\x09self saucers do: [ :eachSaucer | \x0a\x09\x09eachSaucer \x0a\x09\x09\x09checkCollisionWith: self bullets;\x0a\x09\x09\x09step.\x0a\x09\x09eachSaucer shouldRespawn ifTrue: [\x0a\x09\x09\x09eachSaucer \x0a\x09\x09\x09\x09respawnAtX: self width + self width atRandom y: self height atRandom ].\x0a\x09\x09eachSaucer shouldShoot ifTrue: [ self enemyBullets add: eachSaucer newBullet ]].",
messageSends: ["do:", "saucers", "checkCollisionWith:", "bullets", "step", "ifTrue:", "shouldRespawn", "respawnAtX:y:", "+", "width", "atRandom", "height", "shouldShoot", "add:", "enemyBullets", "newBullet"],
referencedClasses: []
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "controlShip",
protocol: 'sprite processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$1;
$3=self._ship();
$ctx1.sendIdx["ship"]=1;
$2=_st($3)._collidesWithAnyOf_(self._enemyBullets());
$ctx1.sendIdx["collidesWithAnyOf:"]=1;
$1=_st($2)._or_((function(){
return smalltalk.withContext(function($ctx2) {
$4=self._ship();
$ctx2.sendIdx["ship"]=2;
return _st($4)._collidesWithAnyOf_(self._saucers());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
self._end();
};
_st(self._ship())._moveWithHandler_inCanvas_(self._inputHandler(),self._canvas());
return self}, function($ctx1) {$ctx1.fill(self,"controlShip",{},globals.OVNI)})},
args: [],
source: "controlShip\x0a\x09((self ship collidesWithAnyOf: self enemyBullets)\x0a\x09\x09or: [ (self ship collidesWithAnyOf: self saucers) ])\x0a\x09\x09\x09ifTrue: [ self end ].\x0a\x09self ship moveWithHandler: self inputHandler inCanvas: self canvas.",
messageSends: ["ifTrue:", "or:", "collidesWithAnyOf:", "ship", "enemyBullets", "saucers", "end", "moveWithHandler:inCanvas:", "inputHandler", "canvas"],
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
$ctx1.sendIdx["drawSpriteCollection:"]=2;
self._drawSpriteCollection_(self._enemyBullets());
self._drawSprite_(self._ship());
$1=self._drawBackground_(self._starField());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVNI)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09clearCanvas;\x0a\x09\x09drawBackground: self farBackground;\x0a\x09\x09drawSpriteCollection: self saucers;\x0a\x09\x09drawSpriteCollection: self bullets;\x0a\x09\x09drawSpriteCollection: self enemyBullets;\x0a\x09\x09drawSprite: self ship;\x0a\x09\x09drawBackground: self starField.",
messageSends: ["clearCanvas", "drawBackground:", "farBackground", "drawSpriteCollection:", "saucers", "bullets", "enemyBullets", "drawSprite:", "ship", "starField"],
referencedClasses: []
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "end",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@ship"]=nil;
_st(self._enemyBullets())._removeAll();
$ctx1.sendIdx["removeAll"]=1;
_st(self._bullets())._removeAll();
self._switchToScreenNamed_("end");
return self}, function($ctx1) {$ctx1.fill(self,"end",{},globals.OVNI)})},
args: [],
source: "end\x0a\x09ship := nil.\x0a\x09self enemyBullets removeAll.\x0a\x09self bullets removeAll.\x0a\x09self switchToScreenNamed: 'end'.",
messageSends: ["removeAll", "enemyBullets", "bullets", "switchToScreenNamed:"],
referencedClasses: []
}),
globals.OVNI);

smalltalk.addMethod(
smalltalk.method({
selector: "enemyBullets",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@enemyBullets"];
if(($receiver = $2) == null || $receiver.isNil){
self["@enemyBullets"]=[];
$1=self["@enemyBullets"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"enemyBullets",{},globals.OVNI)})},
args: [],
source: "enemyBullets\x0a\x09^ enemyBullets ifNil: [ enemyBullets := #() ]",
messageSends: ["ifNil:"],
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
_st($3)._imageSrc_("images/ovni/farback.gif");
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
source: "farBackground\x0a\x09^ farBackground ifNil: [ \x0a\x09\x09farBackground := \x0a\x09\x09\x09Background new \x0a\x09\x09\x09\x09imageSrc: 'images/ovni/farback.gif';\x0a\x09\x09\x09\x09addParallaxNamed: 'background' origin: 0@0 size: 1782@600 speed: 1 ]",
messageSends: ["ifNil:", "imageSrc:", "new", "addParallaxNamed:origin:size:speed:", "@"],
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
selector: "shoot",
protocol: 'game actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._soundNamed_("laser"))._play();
_st(self._bullets())._add_(_st(self._ship())._newBullet());
return self}, function($ctx1) {$ctx1.fill(self,"shoot",{},globals.OVNI)})},
args: [],
source: "shoot\x0a\x09(self soundNamed: 'laser') play.\x0a\x09self bullets add: self ship newBullet",
messageSends: ["play", "soundNamed:", "add:", "bullets", "newBullet", "ship"],
referencedClasses: []
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
_st($3)._imageSrc_("images/ovni/starfield.png");
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
source: "starField\x0a\x09^ starField ifNil: [ \x0a\x09\x09starField := \x0a\x09\x09\x09Background new \x0a\x09\x09\x09\x09imageSrc: 'images/ovni/starfield.png';\x0a\x09\x09\x09\x09addParallaxNamed: 'background' origin: 0@0 size: 800@600 speed: 6 ]",
messageSends: ["ifNil:", "imageSrc:", "new", "addParallaxNamed:origin:size:speed:", "@"],
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
function $OVNIPauseScreen(){return globals.OVNIPauseScreen||(typeof OVNIPauseScreen=="undefined"?nil:OVNIPauseScreen)}
function $OVNIGameOverScreen(){return globals.OVNIGameOverScreen||(typeof OVNIGameOverScreen=="undefined"?nil:OVNIGameOverScreen)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self["@fps"]=(30);
self._width_((720));
self._height_((540));
self._backgroundColor_("black");
self._addSound_("sounds/ovni/background.ogg");
$ctx1.sendIdx["addSound:"]=1;
self._addSound_("sounds/ovni/laser.ogg");
$1=_st($OVNIStartScreen())._new();
$ctx1.sendIdx["new"]=1;
self._addScreen_named_($1,"start");
$ctx1.sendIdx["addScreen:named:"]=1;
$2=_st($OVNIPauseScreen())._new();
$ctx1.sendIdx["new"]=2;
self._addScreen_named_($2,"pause");
$ctx1.sendIdx["addScreen:named:"]=2;
self._addScreen_named_(_st($OVNIGameOverScreen())._new(),"end");
$3=self._addFont_named_("fonts/ChangaOne-Regular.ttf","ChangaOne");
self._switchToScreenNamed_("start");
_st(self._soundNamed_("background"))._loop();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.OVNI)})},
args: [],
source: "startGame\x0a\x09fps := 30.\x0a\x09\x0a\x09self\x0a\x09\x09width: 720; \x0a\x09\x09height: 540;\x0a\x09\x09backgroundColor: 'black';\x0a\x09\x09addSound: 'sounds/ovni/background.ogg';\x0a\x09\x09addSound: 'sounds/ovni/laser.ogg';\x0a\x09\x09addScreen: OVNIStartScreen new named: 'start';\x0a\x09\x09addScreen: OVNIPauseScreen new named: 'pause';\x0a\x09\x09addScreen: OVNIGameOverScreen new named: 'end';\x0a\x09\x09addFont: 'fonts/ChangaOne-Regular.ttf' named: 'ChangaOne'.\x0a\x09\x0a\x09self switchToScreenNamed: 'start'.\x0a\x09\x0a\x09(self soundNamed: 'background') loop.",
messageSends: ["width:", "height:", "backgroundColor:", "addSound:", "addScreen:named:", "new", "addFont:named:", "switchToScreenNamed:", "loop", "soundNamed:"],
referencedClasses: ["OVNIStartScreen", "OVNIPauseScreen", "OVNIGameOverScreen"]
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
var $1,$2,$3;
self._controlShip();
self._controlSaucers();
$1=self._controlBullets();
$2=self._inputHandler();
_st($2)._onKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._shoot();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["onKeyPressed:do:"]=1;
$3=_st($2)._onKeyPressed_do_(_st($Key())._p(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._switchToScreenNamed_("pause");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVNI)})},
args: [],
source: "step\x0a\x09self \x0a\x09\x09controlShip;\x0a\x09\x09controlSaucers;\x0a\x09\x09controlBullets.\x0a\x09self inputHandler \x0a\x09\x09onKeyPressed: Key space do: [ self shoot ];\x0a\x09\x09onKeyPressed: Key p do: [ self switchToScreenNamed: 'pause' ].",
messageSends: ["controlShip", "controlSaucers", "controlBullets", "onKeyPressed:do:", "inputHandler", "space", "shoot", "p", "switchToScreenNamed:"],
referencedClasses: ["Key"]
}),
globals.OVNI);



smalltalk.addClass('OVNIGameOverScreen', globals.Screen, ['gameOverText', 'restartGameText'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._drawBackground_(_st(self._game())._farBackground());
self._draw_(self._gameOverText());
$ctx1.sendIdx["draw:"]=1;
$1=self._draw_(self._restartGameText());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVNIGameOverScreen)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09drawBackground: self game farBackground;\x0a\x09\x09draw: self gameOverText;\x0a\x09\x09draw: self restartGameText",
messageSends: ["drawBackground:", "farBackground", "game", "draw:", "gameOverText", "restartGameText"],
referencedClasses: []
}),
globals.OVNIGameOverScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@gameOverText"];
return $1;
},
args: [],
source: "gameOverText\x0a\x09^ gameOverText",
messageSends: [],
referencedClasses: []
}),
globals.OVNIGameOverScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@gameOverText"]=anObject;
return self},
args: ["anObject"],
source: "gameOverText: anObject\x0a\x09gameOverText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVNIGameOverScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "restartGameText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@restartGameText"];
return $1;
},
args: [],
source: "restartGameText\x0a\x09^ restartGameText",
messageSends: [],
referencedClasses: []
}),
globals.OVNIGameOverScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "restartGameText:",
protocol: 'accessing',
fn: function (aText){
var self=this;
self["@restartGameText"]=aText;
return self},
args: ["aText"],
source: "restartGameText: aText\x0a\x09restartGameText := aText",
messageSends: [],
referencedClasses: []
}),
globals.OVNIGameOverScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "startScreen",
protocol: 'initialization',
fn: function (){
var self=this;
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$5,$3,$1,$6,$7;
$2=_st($Text())._new();
$ctx1.sendIdx["new"]=1;
_st($2)._contents_("GAME OVER");
$ctx1.sendIdx["contents:"]=1;
_st($2)._color_("rgba(90,113,26,0.7)");
$ctx1.sendIdx["color:"]=1;
_st($2)._outlineColor_("rgba(242,246,144,0.8)");
$ctx1.sendIdx["outlineColor:"]=1;
_st($2)._outlineSize_((3));
$ctx1.sendIdx["outlineSize:"]=1;
_st($2)._fontName_("ChangaOne");
$ctx1.sendIdx["fontName:"]=1;
_st($2)._fontSize_((92));
$ctx1.sendIdx["fontSize:"]=1;
$4=$2;
$5=(130).__at((280));
$ctx1.sendIdx["@"]=1;
$3=_st($4)._position_($5);
$ctx1.sendIdx["position:"]=1;
$1=$3;
self._gameOverText_($1);
$6=_st($Text())._new();
_st($6)._contents_("Press SPACE to restart");
_st($6)._color_("rgba(90,113,26,0.7)");
_st($6)._outlineColor_("rgba(242,246,144,0.8)");
_st($6)._outlineSize_((2));
_st($6)._fontName_("ChangaOne");
_st($6)._fontSize_((40));
$7=_st($6)._position_((170).__at((320)));
self._restartGameText_($7);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVNIGameOverScreen)})},
args: [],
source: "startScreen\x0a\x09self gameOverText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'GAME OVER';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 92;\x0a\x09\x09\x09position: 130@280).\x0a\x09self restartGameText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Press SPACE to restart';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 2;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 40;\x0a\x09\x09\x09position: 170@320)",
messageSends: ["gameOverText:", "contents:", "new", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@", "restartGameText:"],
referencedClasses: ["Text"]
}),
globals.OVNIGameOverScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
_st(self._inputHandler())._onKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._game())._switchToScreenNamed_("start");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVNIGameOverScreen)})},
args: [],
source: "step\x0a\x09self inputHandler onKeyPressed: Key space do: [ self game switchToScreenNamed: 'start' ]",
messageSends: ["onKeyPressed:do:", "inputHandler", "space", "switchToScreenNamed:", "game"],
referencedClasses: ["Key"]
}),
globals.OVNIGameOverScreen);



smalltalk.addClass('OVNIMainMenu', globals.Screen, [], 'OVNI');


smalltalk.addClass('OVNIPauseScreen', globals.Screen, ['gamePausedText', 'resumeGameText'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._game())._draw();
self._draw_(self._gamePausedText());
$ctx1.sendIdx["draw:"]=1;
$1=self._draw_(self._resumeGameText());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVNIPauseScreen)})},
args: [],
source: "draw\x0a\x09self game draw.\x0a\x09self \x0a\x09\x09draw: self gamePausedText;\x0a\x09\x09draw: self resumeGameText",
messageSends: ["draw", "game", "draw:", "gamePausedText", "resumeGameText"],
referencedClasses: []
}),
globals.OVNIPauseScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "gamePausedText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@gamePausedText"];
return $1;
},
args: [],
source: "gamePausedText\x0a\x09^ gamePausedText",
messageSends: [],
referencedClasses: []
}),
globals.OVNIPauseScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "gamePausedText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@gamePausedText"]=anObject;
return self},
args: ["anObject"],
source: "gamePausedText: anObject\x0a\x09gamePausedText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVNIPauseScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "resumeGameText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@resumeGameText"];
return $1;
},
args: [],
source: "resumeGameText\x0a\x09^ resumeGameText",
messageSends: [],
referencedClasses: []
}),
globals.OVNIPauseScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "resumeGameText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@resumeGameText"]=anObject;
return self},
args: ["anObject"],
source: "resumeGameText: anObject\x0a\x09resumeGameText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVNIPauseScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "startScreen",
protocol: 'initialization',
fn: function (){
var self=this;
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$5,$3,$1,$6,$7;
$2=_st($Text())._new();
$ctx1.sendIdx["new"]=1;
_st($2)._contents_("GAME PAUSED");
$ctx1.sendIdx["contents:"]=1;
_st($2)._color_("rgba(90,113,26,0.7)");
$ctx1.sendIdx["color:"]=1;
_st($2)._outlineColor_("rgba(242,246,144,0.8)");
$ctx1.sendIdx["outlineColor:"]=1;
_st($2)._outlineSize_((3));
$ctx1.sendIdx["outlineSize:"]=1;
_st($2)._fontName_("ChangaOne");
$ctx1.sendIdx["fontName:"]=1;
_st($2)._fontSize_((92));
$ctx1.sendIdx["fontSize:"]=1;
$4=$2;
$5=(70).__at((280));
$ctx1.sendIdx["@"]=1;
$3=_st($4)._position_($5);
$ctx1.sendIdx["position:"]=1;
$1=$3;
self._gamePausedText_($1);
$6=_st($Text())._new();
_st($6)._contents_("Press SPACE to resume");
_st($6)._color_("rgba(90,113,26,0.7)");
_st($6)._outlineColor_("rgba(242,246,144,0.8)");
_st($6)._outlineSize_((2));
_st($6)._fontName_("ChangaOne");
_st($6)._fontSize_((40));
$7=_st($6)._position_((120).__at((320)));
self._resumeGameText_($7);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVNIPauseScreen)})},
args: [],
source: "startScreen\x0a\x09self gamePausedText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'GAME PAUSED';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 92;\x0a\x09\x09\x09position: 70@280).\x0a\x09self resumeGameText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Press SPACE to resume';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 2;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 40;\x0a\x09\x09\x09position: 120@320)",
messageSends: ["gamePausedText:", "contents:", "new", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@", "resumeGameText:"],
referencedClasses: ["Text"]
}),
globals.OVNIPauseScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'accessing',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
_st(self._inputHandler())._onKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._game())._switchToGame();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVNIPauseScreen)})},
args: [],
source: "step\x0a\x09self inputHandler onKeyPressed: Key space do: [ self game switchToGame ]",
messageSends: ["onKeyPressed:do:", "inputHandler", "space", "switchToGame", "game"],
referencedClasses: ["Key"]
}),
globals.OVNIPauseScreen);



smalltalk.addClass('OVNIStartScreen', globals.Screen, ['saucers', 'title', 'startGameText'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
self._drawBackground_(_st(self._game())._farBackground());
self._drawSpriteCollection_(self._saucers());
$2=self._title();
$ctx1.sendIdx["title"]=1;
$1=self._draw_($2);
$ctx1.sendIdx["draw:"]=1;
$3=_st(_st(self._title())._y()).__lt((75));
if(smalltalk.assert($3)){
self._draw_(self._startGameText());
};
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVNIStartScreen)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09drawBackground: self game farBackground;\x0a\x09\x09drawSpriteCollection: self saucers;\x0a\x09\x09draw: self title.\x0a\x09\x09\x0a\x09self title y < 75 ifTrue: [ self draw: self startGameText ]",
messageSends: ["drawBackground:", "farBackground", "game", "drawSpriteCollection:", "saucers", "draw:", "title", "ifTrue:", "<", "y", "startGameText"],
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
selector: "startGameText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@startGameText"];
return $1;
},
args: [],
source: "startGameText\x0a\x09^ startGameText",
messageSends: [],
referencedClasses: []
}),
globals.OVNIStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "startGameText:",
protocol: 'accessing',
fn: function (someText){
var self=this;
self["@startGameText"]=someText;
return self},
args: ["someText"],
source: "startGameText: someText\x0a\x09startGameText := someText",
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
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$7,$6,$5,$4,$3,$13,$12,$11,$10,$9,$8,$15,$16,$17,$18,$14,$19,$20;
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
$ctx1.sendIdx["new"]=1;
$16=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$17=(600).__at((196));
$ctx1.sendIdx["@"]=2;
$18=(55).__at(_st(self._game())._height());
$ctx1.sendIdx["@"]=3;
$14=_st($15)._source_origin_size_position_("images/ovni/title.png",$16,$17,$18);
self._title_($14);
$19=_st($Text())._new();
_st($19)._contents_("Press SPACE to start");
_st($19)._color_("rgba(90,113,26,0.7)");
_st($19)._outlineColor_("rgba(242,246,144,0.8)");
_st($19)._outlineSize_((2));
_st($19)._fontName_("ChangaOne");
_st($19)._fontSize_((40));
$20=_st($19)._position_((180).__at((320)));
self._startGameText_($20);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVNIStartScreen)})},
args: [],
source: "startScreen\x0a\x09self saucers: self game saucers.\x0a\x09self saucers do: [ :each | \x0a\x09\x09each \x0a\x09\x09\x09x: (self game width - 100) atRandom + 50;\x0a\x09\x09\x09y: (self game height - 100) atRandom + 50 ].\x0a\x09\x09\x09\x0a\x09self title: \x0a\x09\x09(Drawable new \x0a\x09\x09\x09source: 'images/ovni/title.png' \x0a\x09\x09\x09origin: 0@0 \x0a\x09\x09\x09size: 600@196 \x0a\x09\x09\x09position: 55 @ self game height).\x0a\x09\x09\x09\x0a\x09self startGameText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Press SPACE to start';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 2;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 40;\x0a\x09\x09\x09position: 180@320)",
messageSends: ["saucers:", "saucers", "game", "do:", "x:", "+", "atRandom", "-", "width", "y:", "height", "title:", "source:origin:size:position:", "new", "@", "startGameText:", "contents:", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:"],
referencedClasses: ["Drawable", "Text"]
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
var $3,$2,$1,$4,$5;
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
$5=self._saucers();
$ctx1.sendIdx["saucers"]=1;
_st($5)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._wander();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$ctx1.sendIdx["do:"]=1;
_st(self._inputHandler())._onKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
_st(self._saucers())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._x_((-100));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)})}));
return _st(self._game())._switchToGame();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVNIStartScreen)})},
args: [],
source: "step\x0a\x09self title y > 40 ifTrue: [ self title y: self title y - 4 ].\x0a\x09self saucers do: [ :each | each wander ].\x0a\x09self inputHandler onKeyPressed: Key space do: [ \x0a\x09\x09self saucers do: [ :each | each x: -100 ].\x0a\x09\x09self game switchToGame ]",
messageSends: ["ifTrue:", ">", "y", "title", "y:", "-", "do:", "saucers", "wander", "onKeyPressed:do:", "inputHandler", "space", "x:", "switchToGame", "game"],
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



smalltalk.addClass('Saucer', globals.Sprite, ['exploding', 'dead', 'shootProbability'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "checkCollisionWith:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
var killingBullet;
return smalltalk.withContext(function($ctx1) { 
var $1;
killingBullet=self._collidesWithWhichOf_(aSpriteCollection);
$1=_st(_st(killingBullet)._notNil()).__and(_st(self._exploding())._not());
if(smalltalk.assert($1)){
self._explode();
_st(aSpriteCollection)._remove_(killingBullet);
};
return self}, function($ctx1) {$ctx1.fill(self,"checkCollisionWith:",{aSpriteCollection:aSpriteCollection,killingBullet:killingBullet},globals.Saucer)})},
args: ["aSpriteCollection"],
source: "checkCollisionWith: aSpriteCollection\x0a\x09| killingBullet |\x0a\x09killingBullet := (self collidesWithWhichOf: aSpriteCollection).\x0a\x09(killingBullet notNil & self exploding not) \x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self explode.\x0a\x09\x09\x09aSpriteCollection remove: killingBullet ].",
messageSends: ["collidesWithWhichOf:", "ifTrue:", "&", "notNil", "not", "exploding", "explode", "remove:"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "checkShouldDie",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._exploding()).__and(self._atLastFrame());
if(smalltalk.assert($1)){
self._exploding_(false);
$2=self._die();
$2;
};
return self}, function($ctx1) {$ctx1.fill(self,"checkShouldDie",{},globals.Saucer)})},
args: [],
source: "checkShouldDie\x0a\x09(self exploding & self atLastFrame ) \x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09exploding: false;\x0a\x09\x09\x09\x09die ]",
messageSends: ["ifTrue:", "&", "exploding", "atLastFrame", "exploding:", "die"],
referencedClasses: []
}),
globals.Saucer);

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
self._imageSrc_("images/ovni/saucer.png");
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
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09imageSrc: 'images/ovni/saucer.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6;\x0a\x09\x09addFrameGroupNamed: 'explosion' origin: 0@40 size: 40@40 frameCount: 10.\x0a\x09\x0a\x09(self frameGroupNamed: 'explosion') frameRate: 2.",
messageSends: ["initialize", "imageSrc:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:", "frameGroupNamed:"],
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
self._moveCentreBy_((-2).__at(_st((5)._atRandom()).__minus((3))));
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.Saucer)})},
args: [],
source: "move\x0a\x09self moveCentreBy: -2 @ (5 atRandom - 3).",
messageSends: ["moveCentreBy:", "@", "-", "atRandom"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "newBullet",
protocol: 'accessing',
fn: function (){
var self=this;
function $EnemyBullet(){return globals.EnemyBullet||(typeof EnemyBullet=="undefined"?nil:EnemyBullet)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($EnemyBullet())._new())._centre_(_st(self._centre()).__minus(_st(_st(self._width()).__slash((2))).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBullet",{},globals.Saucer)})},
args: [],
source: "newBullet\x0a\x09^ EnemyBullet new centre: (self centre - ((self width / 2) @ 0))",
messageSends: ["centre:", "new", "-", "centre", "@", "/", "width"],
referencedClasses: ["EnemyBullet"]
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "respawnAtX:y:",
protocol: 'actions',
fn: function (anX,aY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._x_(anX);
self._y_(aY);
$1=self._dead_(false);
return self}, function($ctx1) {$ctx1.fill(self,"respawnAtX:y:",{anX:anX,aY:aY},globals.Saucer)})},
args: ["anX", "aY"],
source: "respawnAtX: anX y: aY\x0a\x09self \x0a\x09\x09x: anX;\x0a\x09\x09y: aY;\x0a\x09\x09dead: false",
messageSends: ["x:", "y:", "dead:"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "shootProbability",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@shootProbability"];
if(($receiver = $2) == null || $receiver.isNil){
self["@shootProbability"]=(100);
$1=self["@shootProbability"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shootProbability",{},globals.Saucer)})},
args: [],
source: "shootProbability\x0a\x09^ shootProbability ifNil: [ shootProbability := 100 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldRespawn",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._x()).__plus(self._width())).__lt((0))).__or(self._dead());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldRespawn",{},globals.Saucer)})},
args: [],
source: "shouldRespawn\x0a\x09^ ((self x + self width) < 0) | self dead",
messageSends: ["|", "<", "+", "x", "width", "dead"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldShoot",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._shootProbability())._atRandom()).__eq((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldShoot",{},globals.Saucer)})},
args: [],
source: "shouldShoot\x0a\x09^ self shootProbability atRandom = 1",
messageSends: ["=", "atRandom", "shootProbability"],
referencedClasses: []
}),
globals.Saucer);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._move();
$1=self._checkShouldDie();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.Saucer)})},
args: [],
source: "step\x0a\x09self \x0a\x09\x09move;\x0a\x09\x09checkShouldDie",
messageSends: ["move", "checkShouldDie"],
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
self._imageSrc_("images/ovni/ship.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("flying",$2,(64).__at((29)),(4));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SpaceShip)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09imageSrc: 'images/ovni/ship.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 64@29 frameCount: 4.",
messageSends: ["initialize", "imageSrc:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
referencedClasses: []
}),
globals.SpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "moveWithHandler:inCanvas:",
protocol: 'movement',
fn: function (anInputHandler,aCanvas){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4;
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
return self}, function($ctx1) {$ctx1.fill(self,"moveWithHandler:inCanvas:",{anInputHandler:anInputHandler,aCanvas:aCanvas},globals.SpaceShip)})},
args: ["anInputHandler", "aCanvas"],
source: "moveWithHandler: anInputHandler inCanvas: aCanvas\x0a\x09anInputHandler\x0a\x09\x09whileKeyPressed: Key leftArrow do: [ \x0a\x09\x09\x09(self isLeftInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goLeft ]];\x0a\x09\x09whileKeyPressed: Key rightArrow do: [\x0a\x09\x09\x09(self isRightInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goRight ]];\x0a\x09\x09whileKeyPressed: Key upArrow do: [\x0a\x09\x09\x09(self isTopInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goUp ]];\x0a\x09\x09whileKeyPressed: Key downArrow do: [\x0a\x09\x09\x09(self isBottomInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goDown ]].",
messageSends: ["whileKeyPressed:do:", "leftArrow", "ifTrue:", "isLeftInsideCanvas:", "goLeft", "rightArrow", "isRightInsideCanvas:", "goRight", "upArrow", "isTopInsideCanvas:", "goUp", "downArrow", "isBottomInsideCanvas:", "goDown"],
referencedClasses: ["Key"]
}),
globals.SpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "newBullet",
protocol: 'accessing',
fn: function (){
var self=this;
function $Bullet(){return globals.Bullet||(typeof Bullet=="undefined"?nil:Bullet)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Bullet())._new())._centre_(_st(self._centre()).__plus(_st(_st(self._width()).__slash((2))).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBullet",{},globals.SpaceShip)})},
args: [],
source: "newBullet\x0a\x09^ Bullet new centre: (self centre + ((self width / 2) @ 0))",
messageSends: ["centre:", "new", "+", "centre", "@", "/", "width"],
referencedClasses: ["Bullet"]
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
