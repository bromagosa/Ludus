define("HOS/OVNI", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "HOS/Ludus", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('OVNI');
smalltalk.packages["OVNI"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('OVBullet', globals.Sprite, ['speed', 'acceleration'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "accelerate",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@speed"]=_st(self._speed()).__plus(self._acceleration());
return self}, function($ctx1) {$ctx1.fill(self,"accelerate",{},globals.OVBullet)})},
args: [],
source: "accelerate\x0a\x09speed := self speed + self acceleration",
messageSends: ["+", "speed", "acceleration"],
referencedClasses: []
}),
globals.OVBullet);

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
}, function($ctx1) {$ctx1.fill(self,"acceleration",{},globals.OVBullet)})},
args: [],
source: "acceleration\x0a\x09^ acceleration ifNil: [ acceleration := 2 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVBullet);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.OVBullet.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._imageSrc_("images/ovni/bullet.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("shooting",$2,(9).__at((9)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVBullet)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09imageSrc: 'images/ovni/bullet.png';\x0a\x09\x09addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.",
messageSends: ["initialize", "imageSrc:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
referencedClasses: []
}),
globals.OVBullet);

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
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.OVBullet)})},
args: [],
source: "move\x0a\x09self \x0a\x09\x09moveCentreBy: self speed @ 0;\x0a\x09\x09accelerate",
messageSends: ["moveCentreBy:", "@", "speed", "accelerate"],
referencedClasses: []
}),
globals.OVBullet);

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
}, function($ctx1) {$ctx1.fill(self,"speed",{},globals.OVBullet)})},
args: [],
source: "speed\x0a\x09^ speed ifNil: [ speed := 5 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVBullet);



smalltalk.addClass('OVEnemyBullet', globals.OVBullet, [], 'OVNI');
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
}, function($ctx1) {$ctx1.fill(self,"acceleration",{},globals.OVEnemyBullet)})},
args: [],
source: "acceleration\x0a\x09^ acceleration ifNil: [ acceleration := -1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVEnemyBullet);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.OVEnemyBullet.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._imageSrc_("images/ovni/enemybullet.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("shooting",$2,(9).__at((9)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVEnemyBullet)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09imageSrc: 'images/ovni/enemybullet.png';\x0a\x09\x09addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.",
messageSends: ["initialize", "imageSrc:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
referencedClasses: []
}),
globals.OVEnemyBullet);

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
}, function($ctx1) {$ctx1.fill(self,"speed",{},globals.OVEnemyBullet)})},
args: [],
source: "speed\x0a\x09^ speed ifNil: [ speed := 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVEnemyBullet);



smalltalk.addClass('OVGame', globals.Game, ['player', 'ship', 'saucers', 'scrollSpeed', 'farBackground', 'starField', 'bullets', 'enemyBullets', 'difficulty', 'soundIsMute', 'musicIsMute', 'debugMode', 'scoreText', 'highScoreText', 'playTimeText'], 'OVNI');
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
}, function($ctx1) {$ctx1.fill(self,"bullets",{},globals.OVGame)})},
args: [],
source: "bullets\x0a\x09^ bullets ifNil: [ bullets := #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVGame);

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
return self}, function($ctx1) {$ctx1.fill(self,"controlBullets",{},globals.OVGame)})},
args: [],
source: "controlBullets\x0a\x09self bullets do: [ :eachBullet | \x0a\x09\x09eachBullet move.\x0a\x09\x09(eachBullet isAllInsideCanvas: self canvas) \x0a\x09\x09\x09ifFalse: [ bullets remove: eachBullet ]].\x0a\x09self enemyBullets do: [ :eachBullet | \x0a\x09\x09eachBullet move.\x0a\x09\x09(eachBullet isAllInsideCanvas: self canvas) \x0a\x09\x09\x09ifFalse: [ enemyBullets remove: eachBullet ]]",
messageSends: ["do:", "bullets", "move", "ifFalse:", "isAllInsideCanvas:", "canvas", "remove:", "enemyBullets"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "controlSaucers",
protocol: 'sprite processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$8,$6,$9;
_st(self._saucers())._do_((function(eachSaucer){
return smalltalk.withContext(function($ctx2) {
_st(eachSaucer)._checkCollisionWith_(self._bullets());
$1=_st(eachSaucer)._step();
$1;
$2=_st(eachSaucer)._isDead();
if(smalltalk.assert($2)){
$3=self._player();
$ctx2.sendIdx["player"]=1;
$4=_st(_st(self._player())._score()).__plus((5).__star(self._difficulty()));
$ctx2.sendIdx["+"]=1;
_st($3)._score_($4);
};
$5=_st(eachSaucer)._shouldRespawn();
if(smalltalk.assert($5)){
$7=self._width();
$ctx2.sendIdx["width"]=1;
$8=_st(self._width())._atRandom();
$ctx2.sendIdx["atRandom"]=1;
$6=_st($7).__plus($8);
_st(eachSaucer)._respawnAtX_y_($6,_st(self._height())._atRandom());
};
$9=_st(eachSaucer)._shouldShoot();
if(smalltalk.assert($9)){
return _st(self._enemyBullets())._add_(_st(eachSaucer)._newBullet());
};
}, function($ctx2) {$ctx2.fillBlock({eachSaucer:eachSaucer},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"controlSaucers",{},globals.OVGame)})},
args: [],
source: "controlSaucers\x0a\x09self saucers do: [ :eachSaucer | \x0a\x09\x09eachSaucer\x0a\x09\x09\x09checkCollisionWith: self bullets;\x0a\x09\x09\x09step.\x0a\x09\x09eachSaucer isDead ifTrue: [ self player score: self player score + (5 * self difficulty) ].\x0a\x09\x09eachSaucer shouldRespawn ifTrue: [\x0a\x09\x09\x09eachSaucer \x0a\x09\x09\x09\x09respawnAtX: self width + self width atRandom y: self height atRandom ].\x0a\x09\x09eachSaucer shouldShoot ifTrue: [ self enemyBullets add: eachSaucer newBullet ]].",
messageSends: ["do:", "saucers", "checkCollisionWith:", "bullets", "step", "ifTrue:", "isDead", "score:", "player", "+", "score", "*", "difficulty", "shouldRespawn", "respawnAtX:y:", "width", "atRandom", "height", "shouldShoot", "add:", "enemyBullets", "newBullet"],
referencedClasses: []
}),
globals.OVGame);

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
return self}, function($ctx1) {$ctx1.fill(self,"controlShip",{},globals.OVGame)})},
args: [],
source: "controlShip\x0a\x09((self ship collidesWithAnyOf: self enemyBullets)\x0a\x09\x09or: [ (self ship collidesWithAnyOf: self saucers) ])\x0a\x09\x09\x09ifTrue: [ self end ].\x0a\x09self ship moveWithHandler: self inputHandler inCanvas: self canvas.",
messageSends: ["ifTrue:", "or:", "collidesWithAnyOf:", "ship", "enemyBullets", "saucers", "end", "moveWithHandler:inCanvas:", "inputHandler", "canvas"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "debugMode",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@debugMode"];
if(($receiver = $2) == null || $receiver.isNil){
self["@debugMode"]=false;
$1=self["@debugMode"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"debugMode",{},globals.OVGame)})},
args: [],
source: "debugMode\x0a\x09^ debugMode ifNil: [ debugMode := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "difficulty",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@difficulty"];
if(($receiver = $2) == null || $receiver.isNil){
self["@difficulty"]=(2);
$1=self["@difficulty"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"difficulty",{},globals.OVGame)})},
args: [],
source: "difficulty\x0a\x09^ difficulty ifNil: [ difficulty := 2 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "difficulty:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@difficulty"]=anInteger;
_st(self._saucers())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._toughness_(self._difficulty());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"difficulty:",{anInteger:anInteger},globals.OVGame)})},
args: ["anInteger"],
source: "difficulty: anInteger\x0a\x09difficulty := anInteger.\x0a\x09self saucers do: [ :each | each toughness: self difficulty ]",
messageSends: ["do:", "saucers", "toughness:", "difficulty"],
referencedClasses: []
}),
globals.OVGame);

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
self._drawBackground_(self._starField());
self._draw_(self._scoreText());
$ctx1.sendIdx["draw:"]=1;
self._draw_(self._highScoreText());
$ctx1.sendIdx["draw:"]=2;
$1=self._draw_(self._playTimeText());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVGame)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09clearCanvas;\x0a\x09\x09drawBackground: self farBackground;\x0a\x09\x09drawSpriteCollection: self saucers;\x0a\x09\x09drawSpriteCollection: self bullets;\x0a\x09\x09drawSpriteCollection: self enemyBullets;\x0a\x09\x09drawSprite: self ship;\x0a\x09\x09drawBackground: self starField;\x0a\x09\x09draw: self scoreText;\x0a\x09\x09draw: self highScoreText;\x0a\x09\x09draw: self playTimeText",
messageSends: ["clearCanvas", "drawBackground:", "farBackground", "drawSpriteCollection:", "saucers", "bullets", "enemyBullets", "drawSprite:", "ship", "starField", "draw:", "scoreText", "highScoreText", "playTimeText"],
referencedClasses: []
}),
globals.OVGame);

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
return self}, function($ctx1) {$ctx1.fill(self,"end",{},globals.OVGame)})},
args: [],
source: "end\x0a\x09ship := nil.\x0a\x09self enemyBullets removeAll.\x0a\x09self bullets removeAll.\x0a\x09self switchToScreenNamed: 'end'.",
messageSends: ["removeAll", "enemyBullets", "bullets", "switchToScreenNamed:"],
referencedClasses: []
}),
globals.OVGame);

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
}, function($ctx1) {$ctx1.fill(self,"enemyBullets",{},globals.OVGame)})},
args: [],
source: "enemyBullets\x0a\x09^ enemyBullets ifNil: [ enemyBullets := #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVGame);

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
}, function($ctx1) {$ctx1.fill(self,"farBackground",{},globals.OVGame)})},
args: [],
source: "farBackground\x0a\x09^ farBackground ifNil: [ \x0a\x09\x09farBackground := \x0a\x09\x09\x09Background new \x0a\x09\x09\x09\x09imageSrc: 'images/ovni/farback.gif';\x0a\x09\x09\x09\x09addParallaxNamed: 'background' origin: 0@0 size: 1782@600 speed: 1 ]",
messageSends: ["ifNil:", "imageSrc:", "new", "addParallaxNamed:origin:size:speed:", "@"],
referencedClasses: ["Background"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "highScoreText",
protocol: 'accessing',
fn: function (){
var self=this;
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@highScoreText"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($Text())._new();
_st($3)._contents_(_st(self._player())._highScore());
_st($3)._color_("rgba(90,113,26,0.7)");
_st($3)._outlineColor_("rgba(242,246,144,0.8)");
_st($3)._outlineSize_((1));
_st($3)._fontName_("ChangaOne");
_st($3)._fontSize_((20));
$4=_st($3)._position_((10).__at((20)));
self["@highScoreText"]=$4;
$1=self["@highScoreText"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"highScoreText",{},globals.OVGame)})},
args: [],
source: "highScoreText\x0a\x09^ highScoreText ifNil: [ highScoreText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: self player highScore;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 10@20) ]",
messageSends: ["ifNil:", "contents:", "new", "highScore", "player", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@"],
referencedClasses: ["Text"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "musicIsMute",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@musicIsMute"];
if(($receiver = $2) == null || $receiver.isNil){
self["@musicIsMute"]=false;
$1=self["@musicIsMute"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"musicIsMute",{},globals.OVGame)})},
args: [],
source: "musicIsMute\x0a\x09^ musicIsMute ifNil: [ musicIsMute := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "musicIsMute:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@musicIsMute"]=aBoolean;
return self},
args: ["aBoolean"],
source: "musicIsMute: aBoolean\x0a\x09musicIsMute := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "newGame",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._player();
_st($1)._score_((0));
$2=_st($1)._resetStartTime();
return self}, function($ctx1) {$ctx1.fill(self,"newGame",{},globals.OVGame)})},
args: [],
source: "newGame\x0a\x09self player \x0a\x09\x09score: 0;\x0a\x09\x09resetStartTime",
messageSends: ["score:", "player", "resetStartTime"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "playTimeText",
protocol: 'accessing',
fn: function (){
var self=this;
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@playTimeText"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($Text())._new();
_st($3)._contents_(_st(self._player())._playTimeString());
_st($3)._color_("rgba(90,113,26,0.7)");
_st($3)._outlineColor_("rgba(242,246,144,0.8)");
_st($3)._outlineSize_((1));
_st($3)._fontName_("ChangaOne");
_st($3)._fontSize_((20));
$4=_st($3)._position_((660).__at((20)));
self["@playTimeText"]=$4;
$1=self["@playTimeText"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"playTimeText",{},globals.OVGame)})},
args: [],
source: "playTimeText\x0a\x09^ playTimeText ifNil: [ playTimeText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: self player playTimeString;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 660@20) ]",
messageSends: ["ifNil:", "contents:", "new", "playTimeString", "player", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@"],
referencedClasses: ["Text"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "player",
protocol: 'accessing',
fn: function (){
var self=this;
function $OVPlayer(){return globals.OVPlayer||(typeof OVPlayer=="undefined"?nil:OVPlayer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@player"];
if(($receiver = $2) == null || $receiver.isNil){
self["@player"]=_st($OVPlayer())._new();
$1=self["@player"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"player",{},globals.OVGame)})},
args: [],
source: "player\x0a\x09^ player ifNil: [ player := OVPlayer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OVPlayer"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "saucers",
protocol: 'accessing',
fn: function (){
var self=this;
function $OVSaucer(){return globals.OVSaucer||(typeof OVSaucer=="undefined"?nil:OVSaucer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$6,$8,$7,$9,$4,$1,$receiver;
$2=self["@saucers"];
if(($receiver = $2) == null || $receiver.isNil){
self["@saucers"]=[];
self["@saucers"];
(5)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$3=self["@saucers"];
$5=_st($OVSaucer())._new();
$6=$5;
$8=_st(self._width())._atRandom();
$ctx2.sendIdx["atRandom"]=1;
$7=_st($8).__at(_st(self._height())._atRandom());
_st($6)._centre_($7);
$9=_st($5)._toughness_(self._difficulty());
$4=$9;
return _st($3)._add_($4);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$1=self["@saucers"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"saucers",{},globals.OVGame)})},
args: [],
source: "saucers\x0a\x09^ saucers ifNil: [ \x0a\x09\x09saucers := #().\x0a\x09\x095 timesRepeat: [ \x0a\x09\x09\x09saucers add:\x0a\x09\x09\x09\x09(OVSaucer new \x0a\x09\x09\x09\x09\x09centre: self width atRandom @ self height atRandom;\x0a\x09\x09\x09\x09\x09toughness: self difficulty)\x0a\x09\x09].\x0a\x09\x09saucers.\x0a\x09]",
messageSends: ["ifNil:", "timesRepeat:", "add:", "centre:", "new", "@", "atRandom", "width", "height", "toughness:", "difficulty"],
referencedClasses: ["OVSaucer"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "scoreText",
protocol: 'accessing',
fn: function (){
var self=this;
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@scoreText"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($Text())._new();
_st($3)._contents_(_st(self._player())._score());
_st($3)._color_("rgba(90,113,26,0.7)");
_st($3)._outlineColor_("rgba(242,246,144,0.8)");
_st($3)._outlineSize_((1));
_st($3)._fontName_("ChangaOne");
_st($3)._fontSize_((20));
$4=_st($3)._position_((10).__at((35)));
self["@scoreText"]=$4;
$1=self["@scoreText"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"scoreText",{},globals.OVGame)})},
args: [],
source: "scoreText\x0a\x09^ scoreText ifNil: [ scoreText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: self player score;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 10@35) ]",
messageSends: ["ifNil:", "contents:", "new", "score", "player", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@"],
referencedClasses: ["Text"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "ship",
protocol: 'accessing',
fn: function (){
var self=this;
function $OVSpaceShip(){return globals.OVSpaceShip||(typeof OVSpaceShip=="undefined"?nil:OVSpaceShip)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@ship"];
if(($receiver = $2) == null || $receiver.isNil){
self["@ship"]=_st(_st($OVSpaceShip())._new())._centre_((105).__at(_st(self._height()).__slash((2))));
$1=self["@ship"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"ship",{},globals.OVGame)})},
args: [],
source: "ship\x0a\x09^ ship ifNil: [ ship := OVSpaceShip new centre: 105 @ (self height / 2) ]",
messageSends: ["ifNil:", "centre:", "new", "@", "/", "height"],
referencedClasses: ["OVSpaceShip"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "shoot",
protocol: 'game actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._soundIsMute();
if(! smalltalk.assert($1)){
_st(self._soundNamed_("laser"))._play();
};
_st(self._bullets())._add_(_st(self._ship())._newBullet());
return self}, function($ctx1) {$ctx1.fill(self,"shoot",{},globals.OVGame)})},
args: [],
source: "shoot\x0a\x09self soundIsMute ifFalse: [ (self soundNamed: 'laser') play ].\x0a\x09self bullets add: self ship newBullet",
messageSends: ["ifFalse:", "soundIsMute", "play", "soundNamed:", "add:", "bullets", "newBullet", "ship"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "soundIsMute",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@soundIsMute"];
if(($receiver = $2) == null || $receiver.isNil){
self["@soundIsMute"]=false;
$1=self["@soundIsMute"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"soundIsMute",{},globals.OVGame)})},
args: [],
source: "soundIsMute\x0a\x09^ soundIsMute ifNil: [ soundIsMute := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "soundIsMute:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@soundIsMute"]=aBoolean;
return self},
args: ["aBoolean"],
source: "soundIsMute: aBoolean\x0a\x09soundIsMute := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.OVGame);

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
}, function($ctx1) {$ctx1.fill(self,"starField",{},globals.OVGame)})},
args: [],
source: "starField\x0a\x09^ starField ifNil: [ \x0a\x09\x09starField := \x0a\x09\x09\x09Background new \x0a\x09\x09\x09\x09imageSrc: 'images/ovni/starfield.png';\x0a\x09\x09\x09\x09addParallaxNamed: 'background' origin: 0@0 size: 800@600 speed: 6 ]",
messageSends: ["ifNil:", "imageSrc:", "new", "addParallaxNamed:origin:size:speed:", "@"],
referencedClasses: ["Background"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
protocol: 'control',
fn: function (){
var self=this;
function $OVStartScreen(){return globals.OVStartScreen||(typeof OVStartScreen=="undefined"?nil:OVStartScreen)}
function $OVMainMenu(){return globals.OVMainMenu||(typeof OVMainMenu=="undefined"?nil:OVMainMenu)}
function $OVOptionsMenu(){return globals.OVOptionsMenu||(typeof OVOptionsMenu=="undefined"?nil:OVOptionsMenu)}
function $OVPauseScreen(){return globals.OVPauseScreen||(typeof OVPauseScreen=="undefined"?nil:OVPauseScreen)}
function $OVGameOverScreen(){return globals.OVGameOverScreen||(typeof OVGameOverScreen=="undefined"?nil:OVGameOverScreen)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
self["@fps"]=(30);
self._width_((720));
self._height_((540));
self._backgroundColor_("black");
self._addSound_("sounds/ovni/background.ogg");
$ctx1.sendIdx["addSound:"]=1;
self._addSound_("sounds/ovni/laser.ogg");
$1=_st($OVStartScreen())._new();
$ctx1.sendIdx["new"]=1;
self._addScreen_named_($1,"start");
$ctx1.sendIdx["addScreen:named:"]=1;
$2=_st($OVMainMenu())._new();
$ctx1.sendIdx["new"]=2;
self._addScreen_named_($2,"mainMenu");
$ctx1.sendIdx["addScreen:named:"]=2;
$3=_st($OVOptionsMenu())._new();
$ctx1.sendIdx["new"]=3;
self._addScreen_named_($3,"optionsMenu");
$ctx1.sendIdx["addScreen:named:"]=3;
$4=_st($OVPauseScreen())._new();
$ctx1.sendIdx["new"]=4;
self._addScreen_named_($4,"pause");
$ctx1.sendIdx["addScreen:named:"]=4;
self._addScreen_named_(_st($OVGameOverScreen())._new(),"end");
$5=self._addFont_named_("fonts/ChangaOne-Regular.ttf","ChangaOne");
self._switchToScreenNamed_("start");
_st(self._soundNamed_("background"))._loop();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.OVGame)})},
args: [],
source: "startGame\x0a\x09fps := 30.\x0a\x09\x0a\x09self\x0a\x09\x09width: 720; \x0a\x09\x09height: 540;\x0a\x09\x09backgroundColor: 'black';\x0a\x09\x09addSound: 'sounds/ovni/background.ogg';\x0a\x09\x09addSound: 'sounds/ovni/laser.ogg';\x0a\x09\x09addScreen: OVStartScreen new named: 'start';\x0a\x09\x09addScreen: OVMainMenu new named: 'mainMenu';\x0a\x09\x09addScreen: OVOptionsMenu new named: 'optionsMenu';\x0a\x09\x09addScreen: OVPauseScreen new named: 'pause';\x0a\x09\x09addScreen: OVGameOverScreen new named: 'end';\x0a\x09\x09addFont: 'fonts/ChangaOne-Regular.ttf' named: 'ChangaOne'.\x0a\x09\x0a\x09self switchToScreenNamed: 'start'.\x0a\x09\x0a\x09(self soundNamed: 'background') loop.",
messageSends: ["width:", "height:", "backgroundColor:", "addSound:", "addScreen:named:", "new", "addFont:named:", "switchToScreenNamed:", "loop", "soundNamed:"],
referencedClasses: ["OVStartScreen", "OVMainMenu", "OVOptionsMenu", "OVPauseScreen", "OVGameOverScreen"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$6,$8,$10,$9;
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
$4=self._player();
$ctx1.sendIdx["player"]=1;
_st($4)._updateHighScore();
$5=self._scoreText();
$7=self._player();
$ctx1.sendIdx["player"]=2;
$6=_st($7)._score();
_st($5)._contents_($6);
$ctx1.sendIdx["contents:"]=1;
$8=self._highScoreText();
$10=self._player();
$ctx1.sendIdx["player"]=3;
$9=_st($10)._highScore();
_st($8)._contents_($9);
$ctx1.sendIdx["contents:"]=2;
_st(self._playTimeText())._contents_(_st(self._player())._playTimeString());
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVGame)})},
args: [],
source: "step\x0a\x09self \x0a\x09\x09controlShip;\x0a\x09\x09controlSaucers;\x0a\x09\x09controlBullets.\x0a\x09self inputHandler \x0a\x09\x09onKeyPressed: Key space do: [ self shoot ];\x0a\x09\x09onKeyPressed: Key p do: [ self switchToScreenNamed: 'pause' ].\x0a\x09self player updateHighScore.\x0a\x09self scoreText contents: self player score.\x0a\x09self highScoreText contents: self player highScore.\x0a\x09self playTimeText contents: self player playTimeString.",
messageSends: ["controlShip", "controlSaucers", "controlBullets", "onKeyPressed:do:", "inputHandler", "space", "shoot", "p", "switchToScreenNamed:", "updateHighScore", "player", "contents:", "scoreText", "score", "highScoreText", "highScore", "playTimeText", "playTimeString"],
referencedClasses: ["Key"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleDebugMode",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._debugMode();
$ctx1.sendIdx["debugMode"]=1;
self["@debugMode"]=_st($1)._not();
_st(self._saucers())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=self._debugMode();
$ctx2.sendIdx["debugMode"]=2;
return _st(each)._debugMode_($2);
$ctx2.sendIdx["debugMode:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(self._ship())._debugMode_(self._debugMode());
return self}, function($ctx1) {$ctx1.fill(self,"toggleDebugMode",{},globals.OVGame)})},
args: [],
source: "toggleDebugMode\x0a\x09debugMode := self debugMode not.\x0a\x09self saucers do: [ :each | each debugMode: self debugMode ].\x0a\x09self ship debugMode: self debugMode",
messageSends: ["not", "debugMode", "do:", "saucers", "debugMode:", "ship"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleMuteMusic",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=self._musicIsMute();
$ctx1.sendIdx["musicIsMute"]=1;
$1=_st($2)._not();
self._musicIsMute_($1);
$3=self._musicIsMute();
if(smalltalk.assert($3)){
$4=self._soundNamed_("background");
$ctx1.sendIdx["soundNamed:"]=1;
_st($4)._stop();
} else {
_st(self._soundNamed_("background"))._loop();
};
return self}, function($ctx1) {$ctx1.fill(self,"toggleMuteMusic",{},globals.OVGame)})},
args: [],
source: "toggleMuteMusic\x0a\x09self musicIsMute: self musicIsMute not.\x0a\x09self musicIsMute \x0a\x09\x09ifTrue: [ (self soundNamed: 'background') stop ]\x0a\x09\x09ifFalse: [ (self soundNamed: 'background') loop ]",
messageSends: ["musicIsMute:", "not", "musicIsMute", "ifTrue:ifFalse:", "stop", "soundNamed:", "loop"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleMuteSounds",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._soundIsMute_(_st(self._soundIsMute())._not());
return self}, function($ctx1) {$ctx1.fill(self,"toggleMuteSounds",{},globals.OVGame)})},
args: [],
source: "toggleMuteSounds\x0a\x09self soundIsMute: self soundIsMute not",
messageSends: ["soundIsMute:", "not", "soundIsMute"],
referencedClasses: []
}),
globals.OVGame);



smalltalk.addClass('OVGameOverScreen', globals.Screen, ['gameOverText', 'restartGameText'], 'OVNI');
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
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVGameOverScreen)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09drawBackground: self game farBackground;\x0a\x09\x09draw: self gameOverText;\x0a\x09\x09draw: self restartGameText",
messageSends: ["drawBackground:", "farBackground", "game", "draw:", "gameOverText", "restartGameText"],
referencedClasses: []
}),
globals.OVGameOverScreen);

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
globals.OVGameOverScreen);

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
globals.OVGameOverScreen);

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
globals.OVGameOverScreen);

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
globals.OVGameOverScreen);

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
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVGameOverScreen)})},
args: [],
source: "startScreen\x0a\x09self gameOverText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'GAME OVER';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 92;\x0a\x09\x09\x09position: 130@280).\x0a\x09self restartGameText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Press SPACE to restart';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 2;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 40;\x0a\x09\x09\x09position: 170@320)",
messageSends: ["gameOverText:", "contents:", "new", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@", "restartGameText:"],
referencedClasses: ["Text"]
}),
globals.OVGameOverScreen);

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
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVGameOverScreen)})},
args: [],
source: "step\x0a\x09self inputHandler onKeyPressed: Key space do: [ self game switchToScreenNamed: 'start' ]",
messageSends: ["onKeyPressed:do:", "inputHandler", "space", "switchToScreenNamed:", "game"],
referencedClasses: ["Key"]
}),
globals.OVGameOverScreen);



smalltalk.addClass('OVMainMenu', globals.Menu, ['startGameText', 'optionsMenuText', 'pointer'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._drawBackground_(_st(self._game())._farBackground());
self._draw_(self["@startGameText"]);
$ctx1.sendIdx["draw:"]=1;
self._draw_(self["@optionsMenuText"]);
$1=self._drawSprite_(self["@pointer"]);
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVMainMenu)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09drawBackground: self game farBackground;\x0a\x09\x09draw: startGameText;\x0a\x09\x09draw: optionsMenuText;\x0a\x09\x09drawSprite: pointer",
messageSends: ["drawBackground:", "farBackground", "game", "draw:", "drawSprite:"],
referencedClasses: []
}),
globals.OVMainMenu);

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
self["@optionSeparation"]=(80);
$1=self["@optionSeparation"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionSeparation",{},globals.OVMainMenu)})},
args: [],
source: "optionSeparation\x0a\x09^ optionSeparation ifNil: [ optionSeparation := 80 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVMainMenu);

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
self["@options"]=["selectStartGame", "selectOptions"];
$1=self["@options"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"options",{},globals.OVMainMenu)})},
args: [],
source: "options\x0a\x09^ options ifNil: [ options := #(#selectStartGame #selectOptions) ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVMainMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "optionsMenuText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@optionsMenuText"];
return $1;
},
args: [],
source: "optionsMenuText\x0a\x09^ optionsMenuText",
messageSends: [],
referencedClasses: []
}),
globals.OVMainMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "optionsMenuText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@optionsMenuText"]=anObject;
return self},
args: ["anObject"],
source: "optionsMenuText: anObject\x0a\x09optionsMenuText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVMainMenu);

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
self["@pointerOriginY"]=(205);
$1=self["@pointerOriginY"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"pointerOriginY",{},globals.OVMainMenu)})},
args: [],
source: "pointerOriginY\x0a\x09^ pointerOriginY ifNil: [ pointerOriginY := 205 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVMainMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "selectOptions",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._game())._switchToScreenNamed_("optionsMenu");
return self}, function($ctx1) {$ctx1.fill(self,"selectOptions",{},globals.OVMainMenu)})},
args: [],
source: "selectOptions\x0a\x09self game switchToScreenNamed: 'optionsMenu'",
messageSends: ["switchToScreenNamed:", "game"],
referencedClasses: []
}),
globals.OVMainMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "selectStartGame",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._game();
_st($2)._switchToGame();
$3=_st($2)._newGame();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectStartGame",{},globals.OVMainMenu)})},
args: [],
source: "selectStartGame\x0a\x09^ self game \x0a\x09\x09switchToGame; \x0a\x09\x09newGame",
messageSends: ["switchToGame", "game", "newGame"],
referencedClasses: []
}),
globals.OVMainMenu);

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
globals.OVMainMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startGameText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@startGameText"]=anObject;
return self},
args: ["anObject"],
source: "startGameText: anObject\x0a\x09startGameText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVMainMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startScreen",
protocol: 'initialization',
fn: function (){
var self=this;
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$5,$3,$1,$7,$9,$10,$8,$6,$14,$16,$17,$18,$15,$13,$19,$12,$11;
$2=_st($Text())._new();
$ctx1.sendIdx["new"]=1;
_st($2)._contents_("START");
$ctx1.sendIdx["contents:"]=1;
_st($2)._color_("rgba(90,113,26,0.7)");
$ctx1.sendIdx["color:"]=1;
_st($2)._outlineColor_("rgba(242,246,144,0.8)");
$ctx1.sendIdx["outlineColor:"]=1;
_st($2)._outlineSize_((3));
$ctx1.sendIdx["outlineSize:"]=1;
_st($2)._fontName_("ChangaOne");
$ctx1.sendIdx["fontName:"]=1;
_st($2)._fontSize_((80));
$ctx1.sendIdx["fontSize:"]=1;
$4=$2;
$5=(150).__at((250));
$ctx1.sendIdx["@"]=1;
$3=_st($4)._position_($5);
$ctx1.sendIdx["position:"]=1;
$1=$3;
self._startGameText_($1);
$7=_st($Text())._new();
$ctx1.sendIdx["new"]=2;
_st($7)._contents_("OPTIONS");
_st($7)._color_("rgba(90,113,26,0.7)");
_st($7)._outlineColor_("rgba(242,246,144,0.8)");
_st($7)._outlineSize_((3));
_st($7)._fontName_("ChangaOne");
_st($7)._fontSize_((80));
$9=$7;
$10=(150).__at((330));
$ctx1.sendIdx["@"]=2;
$8=_st($9)._position_($10);
$ctx1.sendIdx["position:"]=2;
$6=$8;
self._optionsMenuText_($6);
$14=_st($Sprite())._new();
_st($14)._imageSrc_("images/ovni/pointer.png");
$16=$14;
$17=(0).__at((0));
$ctx1.sendIdx["@"]=3;
$18=(65).__at((40));
$ctx1.sendIdx["@"]=4;
$15=_st($16)._addFrameGroupNamed_origin_size_frameCount_("pointing",$17,$18,(1));
$13=$15;
_st($13)._position_((75).__at((205)));
$19=_st($13)._yourself();
$12=$19;
$11=self._pointer_($12);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVMainMenu)})},
args: [],
source: "startScreen\x0a\x09self \x0a\x09\x09startGameText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'START';\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@250);\x0a\x09\x09optionsMenuText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'OPTIONS';\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@330);\x0a\x09\x09pointer:\x0a\x09\x09\x09((Sprite new\x0a\x09\x09\x09\x09imageSrc: 'images/ovni/pointer.png';\x0a\x09\x09\x09\x09addFrameGroupNamed: 'pointing' origin: 0@0 size: 65@40 frameCount: 1)\x0a\x09\x09\x09\x09\x09position: 75@205;\x0a\x09\x09\x09\x09\x09yourself).",
messageSends: ["startGameText:", "contents:", "new", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@", "optionsMenuText:", "pointer:", "imageSrc:", "addFrameGroupNamed:origin:size:frameCount:", "yourself"],
referencedClasses: ["Text", "Sprite"]
}),
globals.OVMainMenu);



smalltalk.addClass('OVOptionsMenu', globals.Menu, ['goBackText', 'difficultyText', 'muteMusicText', 'muteSoundsText', 'debugModeText'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "debugModeText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@debugModeText"];
return $1;
},
args: [],
source: "debugModeText\x0a\x09^ debugModeText",
messageSends: [],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "debugModeText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@debugModeText"]=anObject;
return self},
args: ["anObject"],
source: "debugModeText: anObject\x0a\x09debugModeText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "difficultyText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@difficultyText"];
return $1;
},
args: [],
source: "difficultyText\x0a\x09^ difficultyText",
messageSends: [],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "difficultyText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@difficultyText"]=anObject;
return self},
args: ["anObject"],
source: "difficultyText: anObject\x0a\x09difficultyText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._drawBackground_(_st(self._game())._farBackground());
self._draw_(self._goBackText());
$ctx1.sendIdx["draw:"]=1;
self._draw_(self._difficultyText());
$ctx1.sendIdx["draw:"]=2;
self._draw_(self._muteMusicText());
$ctx1.sendIdx["draw:"]=3;
self._draw_(self._muteSoundsText());
$ctx1.sendIdx["draw:"]=4;
self._draw_(self._debugModeText());
$1=self._drawSprite_(self._pointer());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVOptionsMenu)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09drawBackground: self game farBackground;\x0a\x09\x09draw: self goBackText;\x0a\x09\x09draw: self difficultyText;\x0a\x09\x09draw: self muteMusicText;\x0a\x09\x09draw: self muteSoundsText;\x0a\x09\x09draw: self debugModeText;\x0a\x09\x09drawSprite: self pointer",
messageSends: ["drawBackground:", "farBackground", "game", "draw:", "goBackText", "difficultyText", "muteMusicText", "muteSoundsText", "debugModeText", "drawSprite:", "pointer"],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "goBackText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@goBackText"];
return $1;
},
args: [],
source: "goBackText\x0a\x09^ goBackText",
messageSends: [],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "goBackText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@goBackText"]=anObject;
return self},
args: ["anObject"],
source: "goBackText: anObject\x0a\x09goBackText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "muteMusicText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@muteMusicText"];
return $1;
},
args: [],
source: "muteMusicText\x0a\x09^ muteMusicText",
messageSends: [],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "muteMusicText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@muteMusicText"]=anObject;
return self},
args: ["anObject"],
source: "muteMusicText: anObject\x0a\x09muteMusicText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "muteSoundsText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@muteSoundsText"];
return $1;
},
args: [],
source: "muteSoundsText\x0a\x09^ muteSoundsText",
messageSends: [],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "muteSoundsText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@muteSoundsText"]=anObject;
return self},
args: ["anObject"],
source: "muteSoundsText: anObject\x0a\x09muteSoundsText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVOptionsMenu);

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
self["@optionSeparation"]=(80);
$1=self["@optionSeparation"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionSeparation",{},globals.OVOptionsMenu)})},
args: [],
source: "optionSeparation\x0a\x09^ optionSeparation ifNil: [ optionSeparation := 80 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVOptionsMenu);

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
self["@options"]=["selectGoBack", "selectDifficulty", "selectMuteSounds", "selectMuteMusic", "selectDebugMode"];
$1=self["@options"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"options",{},globals.OVOptionsMenu)})},
args: [],
source: "options\x0a\x09^ options ifNil: [ options := #(#selectGoBack #selectDifficulty #selectMuteSounds #selectMuteMusic #selectDebugMode) ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVOptionsMenu);

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
self["@pointerOriginY"]=(75);
$1=self["@pointerOriginY"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"pointerOriginY",{},globals.OVOptionsMenu)})},
args: [],
source: "pointerOriginY\x0a\x09^ pointerOriginY ifNil: [ pointerOriginY := 75 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "selectDebugMode",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3;
$1=self._game();
$ctx1.sendIdx["game"]=1;
_st($1)._toggleDebugMode();
$2=self._debugModeText();
$5=_st(self._game())._debugMode();
if(smalltalk.assert($5)){
$4="ON";
} else {
$4="OFF";
};
$3="DEBUG: ".__comma($4);
_st($2)._contents_($3);
return self}, function($ctx1) {$ctx1.fill(self,"selectDebugMode",{},globals.OVOptionsMenu)})},
args: [],
source: "selectDebugMode\x0a\x09self game toggleDebugMode.\x0a\x09self debugModeText contents: 'DEBUG: ' , (self game debugMode ifTrue: [ 'ON' ] ifFalse: [ 'OFF' ])",
messageSends: ["toggleDebugMode", "game", "contents:", "debugModeText", ",", "ifTrue:ifFalse:", "debugMode"],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "selectDifficulty",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$5,$4,$3,$2;
$1=self._game();
$ctx1.sendIdx["game"]=1;
$5=self._game();
$ctx1.sendIdx["game"]=2;
$4=_st($5)._difficulty();
$ctx1.sendIdx["difficulty"]=1;
$3=_st($4).__backslash_backslash((4));
$2=_st($3).__plus((1));
_st($1)._difficulty_($2);
_st(self._difficultyText())._contents_("DIFFICULTY: ".__comma(_st(_st(self._game())._difficulty())._printString()));
return self}, function($ctx1) {$ctx1.fill(self,"selectDifficulty",{},globals.OVOptionsMenu)})},
args: [],
source: "selectDifficulty\x0a\x09self game difficulty: (self game difficulty \x5c\x5c 4) + 1.\x0a\x09self difficultyText contents: 'DIFFICULTY: ' , self game difficulty printString",
messageSends: ["difficulty:", "game", "+", "\x5c\x5c", "difficulty", "contents:", "difficultyText", ",", "printString"],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "selectGoBack",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._game();
$ctx1.sendIdx["game"]=1;
_st($1)._switchToScreenNamed_("mainMenu");
_st(_st(self._game())._currentScreen())._placePointer();
return self}, function($ctx1) {$ctx1.fill(self,"selectGoBack",{},globals.OVOptionsMenu)})},
args: [],
source: "selectGoBack\x0a\x09self game switchToScreenNamed: 'mainMenu'.\x0a\x09self game currentScreen placePointer.",
messageSends: ["switchToScreenNamed:", "game", "placePointer", "currentScreen"],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "selectMuteMusic",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3;
$1=self._game();
$ctx1.sendIdx["game"]=1;
_st($1)._toggleMuteMusic();
$2=self._muteMusicText();
$5=_st(self._game())._musicIsMute();
if(smalltalk.assert($5)){
$4="OFF";
} else {
$4="ON";
};
$3="MUSIC: ".__comma($4);
_st($2)._contents_($3);
return self}, function($ctx1) {$ctx1.fill(self,"selectMuteMusic",{},globals.OVOptionsMenu)})},
args: [],
source: "selectMuteMusic\x0a\x09self game toggleMuteMusic.\x0a\x09self muteMusicText contents: 'MUSIC: ' , (self game musicIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ])",
messageSends: ["toggleMuteMusic", "game", "contents:", "muteMusicText", ",", "ifTrue:ifFalse:", "musicIsMute"],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "selectMuteSounds",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3;
$1=self._game();
$ctx1.sendIdx["game"]=1;
_st($1)._toggleMuteSounds();
$2=self._muteSoundsText();
$5=_st(self._game())._soundIsMute();
if(smalltalk.assert($5)){
$4="OFF";
} else {
$4="ON";
};
$3="SOUNDS: ".__comma($4);
_st($2)._contents_($3);
return self}, function($ctx1) {$ctx1.fill(self,"selectMuteSounds",{},globals.OVOptionsMenu)})},
args: [],
source: "selectMuteSounds\x0a\x09self game toggleMuteSounds.\x0a\x09self muteSoundsText contents: 'SOUNDS: ' , (self game soundIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ])",
messageSends: ["toggleMuteSounds", "game", "contents:", "muteSoundsText", ",", "ifTrue:ifFalse:", "soundIsMute"],
referencedClasses: []
}),
globals.OVOptionsMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startScreen",
protocol: 'initialization',
fn: function (){
var self=this;
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$5,$3,$1,$7,$8,$12,$11,$10,$9,$14,$15,$13,$6,$17,$18,$22,$21,$20,$19,$24,$25,$23,$16,$27,$28,$32,$31,$30,$29,$34,$35,$33,$26,$37,$38,$41,$40,$39,$43,$44,$42,$36,$48,$50,$51,$52,$49,$47,$53,$46,$45;
$2=_st($Text())._new();
$ctx1.sendIdx["new"]=1;
_st($2)._contents_("BACK");
$ctx1.sendIdx["contents:"]=1;
_st($2)._color_("rgba(90,113,26,0.7)");
$ctx1.sendIdx["color:"]=1;
_st($2)._outlineColor_("rgba(242,246,144,0.8)");
$ctx1.sendIdx["outlineColor:"]=1;
_st($2)._outlineSize_((3));
$ctx1.sendIdx["outlineSize:"]=1;
_st($2)._fontName_("ChangaOne");
$ctx1.sendIdx["fontName:"]=1;
_st($2)._fontSize_((80));
$ctx1.sendIdx["fontSize:"]=1;
$4=$2;
$5=(150).__at((120));
$ctx1.sendIdx["@"]=1;
$3=_st($4)._position_($5);
$ctx1.sendIdx["position:"]=1;
$1=$3;
self._goBackText_($1);
$7=_st($Text())._new();
$ctx1.sendIdx["new"]=2;
$8=$7;
$12=self._game();
$ctx1.sendIdx["game"]=1;
$11=_st($12)._difficulty();
$10=_st($11)._printString();
$9="DIFFICULTY: ".__comma($10);
$ctx1.sendIdx[","]=1;
_st($8)._contents_($9);
$ctx1.sendIdx["contents:"]=2;
_st($7)._color_("rgba(90,113,26,0.7)");
$ctx1.sendIdx["color:"]=2;
_st($7)._outlineColor_("rgba(242,246,144,0.8)");
$ctx1.sendIdx["outlineColor:"]=2;
_st($7)._outlineSize_((3));
$ctx1.sendIdx["outlineSize:"]=2;
_st($7)._fontName_("ChangaOne");
$ctx1.sendIdx["fontName:"]=2;
_st($7)._fontSize_((80));
$ctx1.sendIdx["fontSize:"]=2;
$14=$7;
$15=(150).__at((200));
$ctx1.sendIdx["@"]=2;
$13=_st($14)._position_($15);
$ctx1.sendIdx["position:"]=2;
$6=$13;
self._difficultyText_($6);
$17=_st($Text())._new();
$ctx1.sendIdx["new"]=3;
$18=$17;
$22=self._game();
$ctx1.sendIdx["game"]=2;
$21=_st($22)._soundIsMute();
if(smalltalk.assert($21)){
$20="OFF";
} else {
$20="ON";
};
$19="SOUNDS: ".__comma($20);
$ctx1.sendIdx[","]=2;
_st($18)._contents_($19);
$ctx1.sendIdx["contents:"]=3;
_st($17)._color_("rgba(90,113,26,0.7)");
$ctx1.sendIdx["color:"]=3;
_st($17)._outlineColor_("rgba(242,246,144,0.8)");
$ctx1.sendIdx["outlineColor:"]=3;
_st($17)._outlineSize_((3));
$ctx1.sendIdx["outlineSize:"]=3;
_st($17)._fontName_("ChangaOne");
$ctx1.sendIdx["fontName:"]=3;
_st($17)._fontSize_((80));
$ctx1.sendIdx["fontSize:"]=3;
$24=$17;
$25=(150).__at((280));
$ctx1.sendIdx["@"]=3;
$23=_st($24)._position_($25);
$ctx1.sendIdx["position:"]=3;
$16=$23;
self._muteSoundsText_($16);
$27=_st($Text())._new();
$ctx1.sendIdx["new"]=4;
$28=$27;
$32=self._game();
$ctx1.sendIdx["game"]=3;
$31=_st($32)._musicIsMute();
if(smalltalk.assert($31)){
$30="OFF";
} else {
$30="ON";
};
$29="MUSIC: ".__comma($30);
$ctx1.sendIdx[","]=3;
_st($28)._contents_($29);
$ctx1.sendIdx["contents:"]=4;
_st($27)._color_("rgba(90,113,26,0.7)");
$ctx1.sendIdx["color:"]=4;
_st($27)._outlineColor_("rgba(242,246,144,0.8)");
$ctx1.sendIdx["outlineColor:"]=4;
_st($27)._outlineSize_((3));
$ctx1.sendIdx["outlineSize:"]=4;
_st($27)._fontName_("ChangaOne");
$ctx1.sendIdx["fontName:"]=4;
_st($27)._fontSize_((80));
$ctx1.sendIdx["fontSize:"]=4;
$34=$27;
$35=(150).__at((360));
$ctx1.sendIdx["@"]=4;
$33=_st($34)._position_($35);
$ctx1.sendIdx["position:"]=4;
$26=$33;
self._muteMusicText_($26);
$37=_st($Text())._new();
$ctx1.sendIdx["new"]=5;
$38=$37;
$41=_st(self._game())._debugMode();
if(smalltalk.assert($41)){
$40="ON";
} else {
$40="OFF";
};
$39="DEBUG: ".__comma($40);
_st($38)._contents_($39);
_st($37)._color_("rgba(90,113,26,0.7)");
_st($37)._outlineColor_("rgba(242,246,144,0.8)");
_st($37)._outlineSize_((3));
_st($37)._fontName_("ChangaOne");
_st($37)._fontSize_((80));
$43=$37;
$44=(150).__at((440));
$ctx1.sendIdx["@"]=5;
$42=_st($43)._position_($44);
$ctx1.sendIdx["position:"]=5;
$36=$42;
self._debugModeText_($36);
$48=_st($Sprite())._new();
_st($48)._imageSrc_("images/ovni/pointer.png");
$50=$48;
$51=(0).__at((0));
$ctx1.sendIdx["@"]=6;
$52=(65).__at((40));
$ctx1.sendIdx["@"]=7;
$49=_st($50)._addFrameGroupNamed_origin_size_frameCount_("pointing",$51,$52,(1));
$47=$49;
_st($47)._position_((75).__at((75)));
$53=_st($47)._yourself();
$46=$53;
$45=self._pointer_($46);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVOptionsMenu)})},
args: [],
source: "startScreen\x0a\x09self \x0a\x09\x09goBackText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'BACK';\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@120);\x0a\x09\x09difficultyText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'DIFFICULTY: ' , self game difficulty printString;\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@200);\x0a\x09\x09muteSoundsText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'SOUNDS: ' , (self game soundIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ]);\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@280); \x0a\x09\x09muteMusicText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'MUSIC: ' , (self game musicIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ]);\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@360);\x0a\x09\x09debugModeText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'DEBUG: ' , (self game debugMode ifTrue: [ 'ON' ] ifFalse: [ 'OFF' ]);\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@440);\x0a\x09\x09pointer:\x0a\x09\x09\x09((Sprite new\x0a\x09\x09\x09\x09imageSrc: 'images/ovni/pointer.png';\x0a\x09\x09\x09\x09addFrameGroupNamed: 'pointing' origin: 0@0 size: 65@40 frameCount: 1)\x0a\x09\x09\x09\x09\x09position: 75@75;\x0a\x09\x09\x09\x09\x09yourself).",
messageSends: ["goBackText:", "contents:", "new", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@", "difficultyText:", ",", "printString", "difficulty", "game", "muteSoundsText:", "ifTrue:ifFalse:", "soundIsMute", "muteMusicText:", "musicIsMute", "debugModeText:", "debugMode", "pointer:", "imageSrc:", "addFrameGroupNamed:origin:size:frameCount:", "yourself"],
referencedClasses: ["Text", "Sprite"]
}),
globals.OVOptionsMenu);



smalltalk.addClass('OVPauseScreen', globals.Screen, ['gamePausedText', 'resumeGameText'], 'OVNI');
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
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVPauseScreen)})},
args: [],
source: "draw\x0a\x09self game draw.\x0a\x09self \x0a\x09\x09draw: self gamePausedText;\x0a\x09\x09draw: self resumeGameText",
messageSends: ["draw", "game", "draw:", "gamePausedText", "resumeGameText"],
referencedClasses: []
}),
globals.OVPauseScreen);

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
globals.OVPauseScreen);

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
globals.OVPauseScreen);

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
globals.OVPauseScreen);

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
globals.OVPauseScreen);

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
$7=_st($6)._position_((155).__at((320)));
self._resumeGameText_($7);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVPauseScreen)})},
args: [],
source: "startScreen\x0a\x09self gamePausedText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'GAME PAUSED';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 92;\x0a\x09\x09\x09position: 70@280).\x0a\x09self resumeGameText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Press SPACE to resume';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 2;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 40;\x0a\x09\x09\x09position: 155@320)",
messageSends: ["gamePausedText:", "contents:", "new", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@", "resumeGameText:"],
referencedClasses: ["Text"]
}),
globals.OVPauseScreen);

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
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVPauseScreen)})},
args: [],
source: "step\x0a\x09self inputHandler onKeyPressed: Key space do: [ self game switchToGame ]",
messageSends: ["onKeyPressed:do:", "inputHandler", "space", "switchToGame", "game"],
referencedClasses: ["Key"]
}),
globals.OVPauseScreen);



smalltalk.addClass('OVPlayer', globals.Object, ['lives', 'score', 'highScore', 'gameStartTime'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "dieOnce",
protocol: 'life handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._lives_max_(_st(self._lives()).__minus((1)),(0));
return self}, function($ctx1) {$ctx1.fill(self,"dieOnce",{},globals.OVPlayer)})},
args: [],
source: "dieOnce\x0a\x09self lives: (self lives - 1) max: 0",
messageSends: ["lives:max:", "-", "lives"],
referencedClasses: []
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "gameStartTime",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@gameStartTime"];
if(($receiver = $2) == null || $receiver.isNil){
self._resetStartTime();
$1=self["@gameStartTime"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameStartTime",{},globals.OVPlayer)})},
args: [],
source: "gameStartTime\x0a\x09^ gameStartTime ifNil: [ self resetStartTime. gameStartTime ]",
messageSends: ["ifNil:", "resetStartTime"],
referencedClasses: []
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "highScore",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@highScore"];
if(($receiver = $2) == null || $receiver.isNil){
self["@highScore"]=(0);
$1=self["@highScore"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"highScore",{},globals.OVPlayer)})},
args: [],
source: "highScore\x0a\x09^ highScore ifNil: [ highScore := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "highScore:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@highScore"]=anObject;
return self},
args: ["anObject"],
source: "highScore: anObject\x0a\x09highScore := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "isDead",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._lives()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isDead",{},globals.OVPlayer)})},
args: [],
source: "isDead\x0a\x09^ self lives = 0",
messageSends: ["=", "lives"],
referencedClasses: []
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "lives",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@lives"];
if(($receiver = $2) == null || $receiver.isNil){
self["@lives"]=(3);
$1=self["@lives"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"lives",{},globals.OVPlayer)})},
args: [],
source: "lives\x0a\x09^ lives ifNil: [ lives := 3 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "lives:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@lives"]=anObject;
return self},
args: ["anObject"],
source: "lives: anObject\x0a\x09lives := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "playTime",
protocol: 'time handling',
fn: function (){
var self=this;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Date())._now()).__minus(self._gameStartTime());
return $1;
}, function($ctx1) {$ctx1.fill(self,"playTime",{},globals.OVPlayer)})},
args: [],
source: "playTime\x0a\x09^ Date now - self gameStartTime",
messageSends: ["-", "now", "gameStartTime"],
referencedClasses: ["Date"]
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "playTimeString",
protocol: 'time handling',
fn: function (){
var self=this;
var date;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $5,$4,$7,$6,$3,$2,$10,$9,$12,$11,$8,$1;
date=_st($Date())._new_(self._playTime());
$5=_st(date)._minutes();
$ctx1.sendIdx["minutes"]=1;
$4=_st($5).__lt((10));
$ctx1.sendIdx["<"]=1;
if(smalltalk.assert($4)){
$7=_st(date)._minutes();
$ctx1.sendIdx["minutes"]=2;
$6=_st($7)._asString();
$ctx1.sendIdx["asString"]=1;
$3="0".__comma($6);
$ctx1.sendIdx[","]=3;
} else {
$3=_st(_st(date)._minutes())._asString();
$ctx1.sendIdx["asString"]=2;
};
$2=_st($3).__comma(":");
$ctx1.sendIdx[","]=2;
$10=_st(date)._seconds();
$ctx1.sendIdx["seconds"]=1;
$9=_st($10).__lt((10));
if(smalltalk.assert($9)){
$12=_st(date)._seconds();
$ctx1.sendIdx["seconds"]=2;
$11=_st($12)._asString();
$ctx1.sendIdx["asString"]=3;
$8="0".__comma($11);
} else {
$8=_st(_st(date)._seconds())._asString();
};
$1=_st($2).__comma($8);
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"playTimeString",{date:date},globals.OVPlayer)})},
args: [],
source: "playTimeString\x0a \x09| date |\x0a\x09date := Date new: self playTime.\x0a\x09^ (date minutes < 10 ifTrue: [ '0' , date minutes asString ] ifFalse: [ date minutes asString ])\x0a\x09\x09, ':' , (date seconds < 10 ifTrue: [ '0' , date seconds asString ] ifFalse: [ date seconds asString ]) ",
messageSends: ["new:", "playTime", ",", "ifTrue:ifFalse:", "<", "minutes", "asString", "seconds"],
referencedClasses: ["Date"]
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "resetStartTime",
protocol: 'time handling',
fn: function (){
var self=this;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
self["@gameStartTime"]=_st($Date())._now();
return self}, function($ctx1) {$ctx1.fill(self,"resetStartTime",{},globals.OVPlayer)})},
args: [],
source: "resetStartTime\x0a\x09gameStartTime := Date now",
messageSends: ["now"],
referencedClasses: ["Date"]
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "score",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@score"];
if(($receiver = $2) == null || $receiver.isNil){
self["@score"]=(0);
$1=self["@score"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"score",{},globals.OVPlayer)})},
args: [],
source: "score\x0a\x09^ score ifNil: [ score := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "score:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@score"]=anObject;
return self},
args: ["anObject"],
source: "score: anObject\x0a\x09score := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateHighScore",
protocol: 'score handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._highScore_(_st(self._highScore())._max_(self._score()));
return self}, function($ctx1) {$ctx1.fill(self,"updateHighScore",{},globals.OVPlayer)})},
args: [],
source: "updateHighScore\x0a\x09self highScore: (self highScore max: self score)",
messageSends: ["highScore:", "max:", "highScore", "score"],
referencedClasses: []
}),
globals.OVPlayer);



smalltalk.addClass('OVSaucer', globals.Sprite, ['exploding', 'dead', 'toughness'], 'OVNI');
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
return self}, function($ctx1) {$ctx1.fill(self,"checkCollisionWith:",{aSpriteCollection:aSpriteCollection,killingBullet:killingBullet},globals.OVSaucer)})},
args: ["aSpriteCollection"],
source: "checkCollisionWith: aSpriteCollection\x0a\x09| killingBullet |\x0a\x09killingBullet := (self collidesWithWhichOf: aSpriteCollection).\x0a\x09(killingBullet notNil & self exploding not) \x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self explode.\x0a\x09\x09\x09aSpriteCollection remove: killingBullet ].",
messageSends: ["collidesWithWhichOf:", "ifTrue:", "&", "notNil", "not", "exploding", "explode", "remove:"],
referencedClasses: []
}),
globals.OVSaucer);

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
return self}, function($ctx1) {$ctx1.fill(self,"checkShouldDie",{},globals.OVSaucer)})},
args: [],
source: "checkShouldDie\x0a\x09(self exploding & self atLastFrame ) \x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09exploding: false;\x0a\x09\x09\x09\x09die ]",
messageSends: ["ifTrue:", "&", "exploding", "atLastFrame", "exploding:", "die"],
referencedClasses: []
}),
globals.OVSaucer);

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
}, function($ctx1) {$ctx1.fill(self,"dead",{},globals.OVSaucer)})},
args: [],
source: "dead\x0a\x09^ dead ifNil: [ dead := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVSaucer);

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
globals.OVSaucer);

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
return self}, function($ctx1) {$ctx1.fill(self,"die",{},globals.OVSaucer)})},
args: [],
source: "die\x0a\x09self \x0a\x09\x09currentFrameGroup: 'flying';\x0a\x09\x09loop: true;\x0a\x09\x09dead: true.",
messageSends: ["currentFrameGroup:", "loop:", "dead:"],
referencedClasses: []
}),
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "explode",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._currentFrameGroup_("explosion");
$1=self._toFirstFrame();
self._loop_(false);
$2=self._exploding_(true);
return self}, function($ctx1) {$ctx1.fill(self,"explode",{},globals.OVSaucer)})},
args: [],
source: "explode\x0a\x09self \x0a\x09\x09currentFrameGroup: 'explosion'; \x0a\x09\x09toFirstFrame.\x0a\x09self\x0a\x09\x09loop: false; \x0a\x09\x09exploding: true.",
messageSends: ["currentFrameGroup:", "toFirstFrame", "loop:", "exploding:"],
referencedClasses: []
}),
globals.OVSaucer);

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
}, function($ctx1) {$ctx1.fill(self,"exploding",{},globals.OVSaucer)})},
args: [],
source: "exploding\x0a\x09^ exploding ifNil: [ exploding := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVSaucer);

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
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
($ctx1.supercall = true, globals.OVSaucer.superclass.fn.prototype._initialize.apply(_st(self), []));
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVSaucer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09imageSrc: 'images/ovni/saucer.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6;\x0a\x09\x09addFrameGroupNamed: 'explosion' origin: 0@40 size: 40@40 frameCount: 10.\x0a\x09\x0a\x09(self frameGroupNamed: 'explosion') frameRate: 2.",
messageSends: ["initialize", "imageSrc:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:", "frameGroupNamed:"],
referencedClasses: []
}),
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "isDead",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._dead();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isDead",{},globals.OVSaucer)})},
args: [],
source: "isDead\x0a\x09^ self dead",
messageSends: ["dead"],
referencedClasses: []
}),
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveCentreBy_((-2).__at(_st((5)._atRandom()).__minus((3))));
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.OVSaucer)})},
args: [],
source: "move\x0a\x09self moveCentreBy: -2 @ (5 atRandom - 3).",
messageSends: ["moveCentreBy:", "@", "-", "atRandom"],
referencedClasses: []
}),
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "newBullet",
protocol: 'accessing',
fn: function (){
var self=this;
function $OVEnemyBullet(){return globals.OVEnemyBullet||(typeof OVEnemyBullet=="undefined"?nil:OVEnemyBullet)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($OVEnemyBullet())._new())._centre_(_st(self._centre()).__minus(_st(_st(self._width()).__slash((2))).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBullet",{},globals.OVSaucer)})},
args: [],
source: "newBullet\x0a\x09^ OVEnemyBullet new centre: (self centre - ((self width / 2) @ 0))",
messageSends: ["centre:", "new", "-", "centre", "@", "/", "width"],
referencedClasses: ["OVEnemyBullet"]
}),
globals.OVSaucer);

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
return self}, function($ctx1) {$ctx1.fill(self,"respawnAtX:y:",{anX:anX,aY:aY},globals.OVSaucer)})},
args: ["anX", "aY"],
source: "respawnAtX: anX y: aY\x0a\x09self \x0a\x09\x09x: anX;\x0a\x09\x09y: aY;\x0a\x09\x09dead: false",
messageSends: ["x:", "y:", "dead:"],
referencedClasses: []
}),
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "shootProbability",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(200).__slash(self._toughness());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shootProbability",{},globals.OVSaucer)})},
args: [],
source: "shootProbability\x0a\x09^ 200 / self toughness",
messageSends: ["/", "toughness"],
referencedClasses: []
}),
globals.OVSaucer);

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
}, function($ctx1) {$ctx1.fill(self,"shouldRespawn",{},globals.OVSaucer)})},
args: [],
source: "shouldRespawn\x0a\x09^ ((self x + self width) < 0) | self dead",
messageSends: ["|", "<", "+", "x", "width", "dead"],
referencedClasses: []
}),
globals.OVSaucer);

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
}, function($ctx1) {$ctx1.fill(self,"shouldShoot",{},globals.OVSaucer)})},
args: [],
source: "shouldShoot\x0a\x09^ self shootProbability atRandom = 1",
messageSends: ["=", "atRandom", "shootProbability"],
referencedClasses: []
}),
globals.OVSaucer);

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
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVSaucer)})},
args: [],
source: "step\x0a\x09self \x0a\x09\x09move;\x0a\x09\x09checkShouldDie",
messageSends: ["move", "checkShouldDie"],
referencedClasses: []
}),
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "toughness",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@toughness"];
if(($receiver = $2) == null || $receiver.isNil){
self["@toughness"]=(1);
$1=self["@toughness"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"toughness",{},globals.OVSaucer)})},
args: [],
source: "toughness\x0a\x09^ toughness ifNil: [ toughness := 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "toughness:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@toughness"]=anInteger;
return self},
args: ["anInteger"],
source: "toughness: anInteger\x0a\x09toughness := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.OVSaucer);

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
return self}, function($ctx1) {$ctx1.fill(self,"wander",{},globals.OVSaucer)})},
args: [],
source: "wander\x0a\x09self moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).",
messageSends: ["moveCentreBy:", "@", "-", "atRandom"],
referencedClasses: []
}),
globals.OVSaucer);



smalltalk.addClass('OVSpaceShip', globals.Sprite, ['speed'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "goDown",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveCentreBy_speed_((0).__at((1)),self._speed());
return self}, function($ctx1) {$ctx1.fill(self,"goDown",{},globals.OVSpaceShip)})},
args: [],
source: "goDown\x0a\x09self moveCentreBy: (0 @ 1) speed: self speed",
messageSends: ["moveCentreBy:speed:", "@", "speed"],
referencedClasses: []
}),
globals.OVSpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "goLeft",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveCentreBy_speed_((-1).__at((0)),self._speed());
return self}, function($ctx1) {$ctx1.fill(self,"goLeft",{},globals.OVSpaceShip)})},
args: [],
source: "goLeft\x0a\x09self moveCentreBy: (-1 @ 0) speed: self speed",
messageSends: ["moveCentreBy:speed:", "@", "speed"],
referencedClasses: []
}),
globals.OVSpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "goRight",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveCentreBy_speed_((1).__at((0)),self._speed());
return self}, function($ctx1) {$ctx1.fill(self,"goRight",{},globals.OVSpaceShip)})},
args: [],
source: "goRight\x0a\x09self moveCentreBy: (1 @ 0) speed: self speed",
messageSends: ["moveCentreBy:speed:", "@", "speed"],
referencedClasses: []
}),
globals.OVSpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "goUp",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveCentreBy_speed_((0).__at((-1)),self._speed());
return self}, function($ctx1) {$ctx1.fill(self,"goUp",{},globals.OVSpaceShip)})},
args: [],
source: "goUp\x0a\x09self moveCentreBy: (0 @ -1) speed: self speed",
messageSends: ["moveCentreBy:speed:", "@", "speed"],
referencedClasses: []
}),
globals.OVSpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.OVSpaceShip.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._imageSrc_("images/ovni/ship.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("flying",$2,(64).__at((29)),(4));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVSpaceShip)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09imageSrc: 'images/ovni/ship.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 64@29 frameCount: 4.",
messageSends: ["initialize", "imageSrc:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
referencedClasses: []
}),
globals.OVSpaceShip);

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
return self}, function($ctx1) {$ctx1.fill(self,"moveWithHandler:inCanvas:",{anInputHandler:anInputHandler,aCanvas:aCanvas},globals.OVSpaceShip)})},
args: ["anInputHandler", "aCanvas"],
source: "moveWithHandler: anInputHandler inCanvas: aCanvas\x0a\x09anInputHandler\x0a\x09\x09whileKeyPressed: Key leftArrow do: [ \x0a\x09\x09\x09(self isLeftInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goLeft ]];\x0a\x09\x09whileKeyPressed: Key rightArrow do: [\x0a\x09\x09\x09(self isRightInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goRight ]];\x0a\x09\x09whileKeyPressed: Key upArrow do: [\x0a\x09\x09\x09(self isTopInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goUp ]];\x0a\x09\x09whileKeyPressed: Key downArrow do: [\x0a\x09\x09\x09(self isBottomInsideCanvas: aCanvas) \x0a\x09\x09\x09\x09ifTrue: [ self goDown ]].",
messageSends: ["whileKeyPressed:do:", "leftArrow", "ifTrue:", "isLeftInsideCanvas:", "goLeft", "rightArrow", "isRightInsideCanvas:", "goRight", "upArrow", "isTopInsideCanvas:", "goUp", "downArrow", "isBottomInsideCanvas:", "goDown"],
referencedClasses: ["Key"]
}),
globals.OVSpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "newBullet",
protocol: 'accessing',
fn: function (){
var self=this;
function $OVBullet(){return globals.OVBullet||(typeof OVBullet=="undefined"?nil:OVBullet)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($OVBullet())._new())._centre_(_st(self._centre()).__plus(_st(_st(self._width()).__slash((2))).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBullet",{},globals.OVSpaceShip)})},
args: [],
source: "newBullet\x0a\x09^ OVBullet new centre: (self centre + ((self width / 2) @ 0))",
messageSends: ["centre:", "new", "+", "centre", "@", "/", "width"],
referencedClasses: ["OVBullet"]
}),
globals.OVSpaceShip);

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
}, function($ctx1) {$ctx1.fill(self,"speed",{},globals.OVSpaceShip)})},
args: [],
source: "speed\x0a\x09^ speed ifNil: [ speed := 5 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVSpaceShip);



smalltalk.addClass('OVStartScreen', globals.Screen, ['saucers', 'title', 'startGameText', 'authorText'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "authorText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@authorText"];
return $1;
},
args: [],
source: "authorText\x0a\x09^ authorText",
messageSends: [],
referencedClasses: []
}),
globals.OVStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "authorText:",
protocol: 'accessing',
fn: function (someText){
var self=this;
self["@authorText"]=someText;
return self},
args: ["someText"],
source: "authorText: someText\x0a\x09authorText := someText",
messageSends: [],
referencedClasses: []
}),
globals.OVStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self._drawBackground_(_st(self._game())._farBackground());
self._drawSpriteCollection_(self._saucers());
$1=self._title();
$ctx1.sendIdx["title"]=1;
self._draw_($1);
$ctx1.sendIdx["draw:"]=1;
$2=self._draw_(self._authorText());
$ctx1.sendIdx["draw:"]=2;
$3=_st(_st(self._title())._y()).__lt((75));
if(smalltalk.assert($3)){
self._draw_(self._startGameText());
};
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVStartScreen)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09drawBackground: self game farBackground;\x0a\x09\x09drawSpriteCollection: self saucers;\x0a\x09\x09draw: self title;\x0a\x09\x09draw: self authorText.\x0a\x09\x09\x0a\x09self title y < 75 ifTrue: [ self draw: self startGameText ]",
messageSends: ["drawBackground:", "farBackground", "game", "drawSpriteCollection:", "saucers", "draw:", "title", "authorText", "ifTrue:", "<", "y", "startGameText"],
referencedClasses: []
}),
globals.OVStartScreen);

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
globals.OVStartScreen);

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
globals.OVStartScreen);

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
globals.OVStartScreen);

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
globals.OVStartScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "startScreen",
protocol: 'control',
fn: function (){
var self=this;
function $Drawable(){return globals.Drawable||(typeof Drawable=="undefined"?nil:Drawable)}
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$7,$6,$5,$4,$3,$13,$12,$11,$10,$9,$8,$15,$16,$17,$18,$14,$20,$22,$23,$21,$19,$24,$25;
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
$20=_st($Text())._new();
$ctx1.sendIdx["new"]=2;
_st($20)._contents_("Press SPACE to start");
$ctx1.sendIdx["contents:"]=1;
_st($20)._color_("rgba(90,113,26,0.7)");
$ctx1.sendIdx["color:"]=1;
_st($20)._outlineColor_("rgba(242,246,144,0.8)");
_st($20)._outlineSize_((1));
_st($20)._fontName_("ChangaOne");
$ctx1.sendIdx["fontName:"]=1;
_st($20)._fontSize_((40));
$ctx1.sendIdx["fontSize:"]=1;
$22=$20;
$23=(180).__at((320));
$ctx1.sendIdx["@"]=4;
$21=_st($22)._position_($23);
$ctx1.sendIdx["position:"]=1;
$19=$21;
self._startGameText_($19);
$24=_st($Text())._new();
_st($24)._contents_("Bernat Romagosa 2014");
_st($24)._color_("rgba(90,113,26,0.7)");
_st($24)._fontName_("ChangaOne");
_st($24)._fontSize_((12));
$25=_st($24)._position_((580).__at((530)));
self._authorText_($25);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVStartScreen)})},
args: [],
source: "startScreen\x0a\x09self saucers: self game saucers.\x0a\x09self saucers do: [ :each | \x0a\x09\x09each \x0a\x09\x09\x09x: (self game width - 100) atRandom + 50;\x0a\x09\x09\x09y: (self game height - 100) atRandom + 50 ].\x0a\x09\x09\x09\x0a\x09self title: \x0a\x09\x09(Drawable new \x0a\x09\x09\x09source: 'images/ovni/title.png' \x0a\x09\x09\x09origin: 0@0 \x0a\x09\x09\x09size: 600@196 \x0a\x09\x09\x09position: 55 @ self game height).\x0a\x09\x09\x09\x0a\x09self startGameText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Press SPACE to start';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 40;\x0a\x09\x09\x09position: 180@320).\x0a\x09\x09\x09\x0a\x09self authorText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Bernat Romagosa 2014';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 12;\x0a\x09\x09\x09position: 580@530)",
messageSends: ["saucers:", "saucers", "game", "do:", "x:", "+", "atRandom", "-", "width", "y:", "height", "title:", "source:origin:size:position:", "new", "@", "startGameText:", "contents:", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "authorText:"],
referencedClasses: ["Drawable", "Text"]
}),
globals.OVStartScreen);

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
return _st(self._game())._switchToScreenNamed_("mainMenu");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVStartScreen)})},
args: [],
source: "step\x0a\x09self title y > 40 ifTrue: [ self title y: self title y - 4 ].\x0a\x09self saucers do: [ :each | each wander ].\x0a\x09self inputHandler onKeyPressed: Key space do: [ \x0a\x09\x09self saucers do: [ :each | each x: -100 ].\x0a\x09\x09self game switchToScreenNamed: 'mainMenu' ]",
messageSends: ["ifTrue:", ">", "y", "title", "y:", "-", "do:", "saucers", "wander", "onKeyPressed:do:", "inputHandler", "space", "x:", "switchToScreenNamed:", "game"],
referencedClasses: ["Key"]
}),
globals.OVStartScreen);

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
globals.OVStartScreen);

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
globals.OVStartScreen);


});
