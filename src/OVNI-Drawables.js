define("HOS/OVNI-Drawables", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "HOS/Ludus"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('OVNI-Drawables');
smalltalk.packages["OVNI-Drawables"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('OVBullet', globals.Circle, ['speed', 'acceleration'], 'OVNI-Drawables');
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
var $1;
($ctx1.supercall = true, globals.OVBullet.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._color_("rgba(200,0,30,0.8)");
self._outlineColor_("rgba(230,0,30,1)");
self._outlineWidth_((1));
$1=self._radius_((3));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVBullet)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09color: 'rgba(200,0,30,0.8)';\x0a\x09\x09outlineColor: 'rgba(230,0,30,1)';\x0a\x09\x09outlineWidth: 1;\x0a\x09\x09radius: 3",
messageSends: ["initialize", "color:", "outlineColor:", "outlineWidth:", "radius:"],
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

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._move();
$1=self._isAllInsideCanvas_(_st(aGame)._canvas());
if(! smalltalk.assert($1)){
_st(_st(aGame)._bullets())._remove_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVBullet)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self move.\x0a\x09(self isAllInsideCanvas: aGame canvas) \x0a\x09\x09ifFalse: [ aGame bullets remove: self ]",
messageSends: ["move", "ifFalse:", "isAllInsideCanvas:", "canvas", "remove:", "bullets"],
referencedClasses: []
}),
globals.OVBullet);



smalltalk.addClass('OVEnemyBullet', globals.OVBullet, [], 'OVNI-Drawables');
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
var $1;
($ctx1.supercall = true, globals.OVEnemyBullet.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._color_("rgba(0,200,30,0.8)");
self._outlineColor_("rgba(0,230,30,1)");
self._outlineWidth_((1));
$1=self._radius_((3));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVEnemyBullet)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09color: 'rgba(0,200,30,0.8)';\x0a\x09\x09outlineColor: 'rgba(0,230,30,1)';\x0a\x09\x09outlineWidth: 1;\x0a\x09\x09radius: 3",
messageSends: ["initialize", "color:", "outlineColor:", "outlineWidth:", "radius:"],
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

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._move();
$1=self._isAllInsideCanvas_(_st(aGame)._canvas());
if(! smalltalk.assert($1)){
_st(_st(aGame)._enemyBullets())._remove_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVEnemyBullet)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self move.\x0a\x09(self isAllInsideCanvas: aGame canvas) \x0a\x09\x09ifFalse: [ aGame enemyBullets remove: self ]",
messageSends: ["move", "ifFalse:", "isAllInsideCanvas:", "canvas", "remove:", "enemyBullets"],
referencedClasses: []
}),
globals.OVEnemyBullet);



smalltalk.addClass('OVBossBullet', globals.OVEnemyBullet, ['targetPosition'], 'OVNI-Drawables');
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
self["@acceleration"]=(1);
$1=self["@acceleration"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"acceleration",{},globals.OVBossBullet)})},
args: [],
source: "acceleration\x0a\x09^ acceleration ifNil: [ acceleration := 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVBossBullet);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.OVBossBullet.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._color_("rgba(200,200,0,0.8)");
self._outlineColor_("rgba(200,200,0,1)");
self._outlineWidth_((1));
$1=self._radius_((3));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVBossBullet)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09color: 'rgba(200,200,0,0.8)';\x0a\x09\x09outlineColor: 'rgba(200,200,0,1)';\x0a\x09\x09outlineWidth: 1;\x0a\x09\x09radius: 3",
messageSends: ["initialize", "color:", "outlineColor:", "outlineWidth:", "radius:"],
referencedClasses: []
}),
globals.OVBossBullet);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._moveCentreBy_speed_(self._direction(),self._speed());
$1=self._accelerate();
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.OVBossBullet)})},
args: [],
source: "move\x0a\x09self \x0a\x09\x09moveCentreBy: self direction speed: self speed;\x0a\x09\x09accelerate",
messageSends: ["moveCentreBy:speed:", "direction", "speed", "accelerate"],
referencedClasses: []
}),
globals.OVBossBullet);



smalltalk.addClass('OVEnemy', globals.FSMSprite, ['exploding', 'dead', 'toughness'], 'OVNI-Drawables');
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
return self}, function($ctx1) {$ctx1.fill(self,"checkCollisionWith:",{aSpriteCollection:aSpriteCollection,killingBullet:killingBullet},globals.OVEnemy)})},
args: ["aSpriteCollection"],
source: "checkCollisionWith: aSpriteCollection\x0a\x09| killingBullet |\x0a\x09killingBullet := (self collidesWithWhichOf: aSpriteCollection).\x0a\x09(killingBullet notNil & self exploding not) \x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self explode.\x0a\x09\x09\x09aSpriteCollection remove: killingBullet ].",
messageSends: ["collidesWithWhichOf:", "ifTrue:", "&", "notNil", "not", "exploding", "explode", "remove:"],
referencedClasses: []
}),
globals.OVEnemy);

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
return self}, function($ctx1) {$ctx1.fill(self,"checkShouldDie",{},globals.OVEnemy)})},
args: [],
source: "checkShouldDie\x0a\x09(self exploding & self atLastFrame ) \x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09exploding: false;\x0a\x09\x09\x09\x09die ]",
messageSends: ["ifTrue:", "&", "exploding", "atLastFrame", "exploding:", "die"],
referencedClasses: []
}),
globals.OVEnemy);

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
}, function($ctx1) {$ctx1.fill(self,"dead",{},globals.OVEnemy)})},
args: [],
source: "dead\x0a\x09^ dead ifNil: [ dead := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVEnemy);

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
globals.OVEnemy);

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
return self}, function($ctx1) {$ctx1.fill(self,"die",{},globals.OVEnemy)})},
args: [],
source: "die\x0a\x09self \x0a\x09\x09currentFrameGroup: 'flying';\x0a\x09\x09loop: true;\x0a\x09\x09dead: true.",
messageSends: ["currentFrameGroup:", "loop:", "dead:"],
referencedClasses: []
}),
globals.OVEnemy);

smalltalk.addMethod(
smalltalk.method({
selector: "escaped",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._x()).__plus(self._width())).__lt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"escaped",{},globals.OVEnemy)})},
args: [],
source: "escaped\x0a\x09^ ((self x + self width) < 0)",
messageSends: ["<", "+", "x", "width"],
referencedClasses: []
}),
globals.OVEnemy);

smalltalk.addMethod(
smalltalk.method({
selector: "explode",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._currentFrameGroup_("exploding");
$1=self._toFirstFrame();
self._loop_(false);
$2=self._exploding_(true);
return self}, function($ctx1) {$ctx1.fill(self,"explode",{},globals.OVEnemy)})},
args: [],
source: "explode\x0a\x09self \x0a\x09\x09currentFrameGroup: 'exploding'; \x0a\x09\x09toFirstFrame.\x0a\x09self\x0a\x09\x09loop: false; \x0a\x09\x09exploding: true.",
messageSends: ["currentFrameGroup:", "toFirstFrame", "loop:", "exploding:"],
referencedClasses: []
}),
globals.OVEnemy);

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
}, function($ctx1) {$ctx1.fill(self,"exploding",{},globals.OVEnemy)})},
args: [],
source: "exploding\x0a\x09^ exploding ifNil: [ exploding := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVEnemy);

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
globals.OVEnemy);

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
}, function($ctx1) {$ctx1.fill(self,"isDead",{},globals.OVEnemy)})},
args: [],
source: "isDead\x0a\x09^ self dead",
messageSends: ["dead"],
referencedClasses: []
}),
globals.OVEnemy);

smalltalk.addMethod(
smalltalk.method({
selector: "isHit",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._exploding())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return self._atFirstFrame();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isHit",{},globals.OVEnemy)})},
args: [],
source: "isHit\x0a\x09^ self exploding and: [ self atFirstFrame ]",
messageSends: ["and:", "exploding", "atFirstFrame"],
referencedClasses: []
}),
globals.OVEnemy);

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
return self}, function($ctx1) {$ctx1.fill(self,"respawnAtX:y:",{anX:anX,aY:aY},globals.OVEnemy)})},
args: ["anX", "aY"],
source: "respawnAtX: anX y: aY\x0a\x09self \x0a\x09\x09x: anX;\x0a\x09\x09y: aY;\x0a\x09\x09dead: false",
messageSends: ["x:", "y:", "dead:"],
referencedClasses: []
}),
globals.OVEnemy);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldRespawn",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._escaped()).__or(self._dead());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldRespawn",{},globals.OVEnemy)})},
args: [],
source: "shouldRespawn\x0a\x09^ self escaped | self dead",
messageSends: ["|", "escaped", "dead"],
referencedClasses: []
}),
globals.OVEnemy);

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
}, function($ctx1) {$ctx1.fill(self,"toughness",{},globals.OVEnemy)})},
args: [],
source: "toughness\x0a\x09^ toughness ifNil: [ toughness := 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVEnemy);

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
globals.OVEnemy);



smalltalk.addClass('OVAsteroid', globals.OVEnemy, [], 'OVNI-Drawables');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultStateClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $OVAsteroidMovingState(){return globals.OVAsteroidMovingState||(typeof OVAsteroidMovingState=="undefined"?nil:OVAsteroidMovingState)}
return $OVAsteroidMovingState();
},
args: [],
source: "defaultStateClass\x0a\x09^ OVAsteroidMovingState",
messageSends: [],
referencedClasses: ["OVAsteroidMovingState"]
}),
globals.OVAsteroid);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
($ctx1.supercall = true, globals.OVAsteroid.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._source_("images/ovni/asteroid.png");
$1=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$2=(30).__at((30));
$ctx1.sendIdx["@"]=2;
self._addFrameGroupNamed_origin_size_frameCount_("flying",$1,$2,(64));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$4=(0).__at((30));
$ctx1.sendIdx["@"]=3;
$3=self._addFrameGroupNamed_origin_size_frameCount_("exploding",$4,(30).__at((30)),(10));
self._frameRate_((2));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVAsteroid)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/ovni/asteroid.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 30@30 frameCount: 64;\x0a\x09\x09addFrameGroupNamed: 'exploding' origin: 0@30 size: 30@30 frameCount: 10.\x0a\x09\x0a\x09self frameRate: 2.",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:"],
referencedClasses: []
}),
globals.OVAsteroid);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$8,$6;
($ctx1.supercall = true, globals.OVAsteroid.superclass.fn.prototype._stepOnGame_.apply(_st(self), [aGame]));
$ctx1.supercall = false;
self._checkCollisionWith_(_st(aGame)._bullets());
$1=self._checkShouldDie();
$2=self._isHit();
if(smalltalk.assert($2)){
_st(aGame)._asteroidWasHit();
};
$3=self._isDead();
if(smalltalk.assert($3)){
_st(aGame)._asteroidDied();
};
$4=self._escaped();
if(smalltalk.assert($4)){
_st(aGame)._asteroidEscaped();
};
$5=self._shouldRespawn();
if(smalltalk.assert($5)){
$7=_st(aGame)._width();
$ctx1.sendIdx["width"]=1;
$8=_st(_st(aGame)._width())._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$6=_st($7).__plus($8);
self._respawnAtX_y_($6,_st(_st(aGame)._height())._atRandom());
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVAsteroid)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09super stepOnGame: aGame.\x0a\x09\x09\x0a\x09self\x0a\x09\x09checkCollisionWith: aGame bullets;\x0a\x09\x09checkShouldDie.\x0a\x0a\x09self isHit ifTrue: [ aGame asteroidWasHit ].\x0a\x09self isDead ifTrue: [ aGame asteroidDied ].\x0a\x09self escaped ifTrue: [ aGame asteroidEscaped ].\x0a\x0a\x09self shouldRespawn ifTrue: [ self respawnAtX: aGame width + aGame width atRandom y: aGame height atRandom ].",
messageSends: ["stepOnGame:", "checkCollisionWith:", "bullets", "checkShouldDie", "ifTrue:", "isHit", "asteroidWasHit", "isDead", "asteroidDied", "escaped", "asteroidEscaped", "shouldRespawn", "respawnAtX:y:", "+", "width", "atRandom", "height"],
referencedClasses: []
}),
globals.OVAsteroid);



smalltalk.addClass('OVBoss', globals.OVEnemy, ['isHit'], 'OVNI-Drawables');
smalltalk.addMethod(
smalltalk.method({
selector: "checkCollisionWith:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
var hittingBullet;
return smalltalk.withContext(function($ctx1) { 
var $1;
hittingBullet=self._collidesWithWhichOf_(aSpriteCollection);
$1=_st(_st(hittingBullet)._notNil()).__and(_st(self._exploding())._not());
if(smalltalk.assert($1)){
self._isHit_(true);
_st(aSpriteCollection)._remove_(hittingBullet);
};
return self}, function($ctx1) {$ctx1.fill(self,"checkCollisionWith:",{aSpriteCollection:aSpriteCollection,hittingBullet:hittingBullet},globals.OVBoss)})},
args: ["aSpriteCollection"],
source: "checkCollisionWith: aSpriteCollection\x0a\x09| hittingBullet |\x0a\x09hittingBullet := (self collidesWithWhichOf: aSpriteCollection).\x0a\x09(hittingBullet notNil & self exploding not) \x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self isHit: true.\x0a\x09\x09\x09aSpriteCollection remove: hittingBullet ].",
messageSends: ["collidesWithWhichOf:", "ifTrue:", "&", "notNil", "not", "exploding", "isHit:", "remove:"],
referencedClasses: []
}),
globals.OVBoss);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultStateClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $OVBossArrivingState(){return globals.OVBossArrivingState||(typeof OVBossArrivingState=="undefined"?nil:OVBossArrivingState)}
return $OVBossArrivingState();
},
args: [],
source: "defaultStateClass\x0a\x09^ OVBossArrivingState",
messageSends: [],
referencedClasses: ["OVBossArrivingState"]
}),
globals.OVBoss);

smalltalk.addMethod(
smalltalk.method({
selector: "die",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._dead_(true);
return self}, function($ctx1) {$ctx1.fill(self,"die",{},globals.OVBoss)})},
args: [],
source: "die\x0a\x09self dead: true.",
messageSends: ["dead:"],
referencedClasses: []
}),
globals.OVBoss);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
($ctx1.supercall = true, globals.OVBoss.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._source_("images/ovni/boss.png");
$1=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$2=(128).__at((128));
$ctx1.sendIdx["@"]=2;
self._addFrameGroupNamed_origin_size_frameCount_("flying",$1,$2,(6));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$3=(0).__at((128));
$ctx1.sendIdx["@"]=3;
self._addFrameGroupNamed_origin_size_frameCount_("exploding",$3,(128).__at((128)),(20));
$4=self._frameRate_((2));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVBoss)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/ovni/boss.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 128@128 frameCount: 6;\x0a\x09\x09addFrameGroupNamed: 'exploding' origin: 0@128 size: 128@128 frameCount: 20;\x0a\x09\x09frameRate: 2.",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:"],
referencedClasses: []
}),
globals.OVBoss);

smalltalk.addMethod(
smalltalk.method({
selector: "isHit",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@isHit"];
if(($receiver = $2) == null || $receiver.isNil){
self["@isHit"]=false;
$1=self["@isHit"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isHit",{},globals.OVBoss)})},
args: [],
source: "isHit\x0a\x09^ isHit ifNil: [ isHit := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVBoss);

smalltalk.addMethod(
smalltalk.method({
selector: "isHit:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@isHit"]=aBoolean;
return self},
args: ["aBoolean"],
source: "isHit: aBoolean\x0a\x09isHit := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.OVBoss);

smalltalk.addMethod(
smalltalk.method({
selector: "newBullet",
protocol: 'accessing',
fn: function (){
var self=this;
function $OVBossBullet(){return globals.OVBossBullet||(typeof OVBossBullet=="undefined"?nil:OVBossBullet)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($OVBossBullet())._new())._centre_(_st(self._centre()).__minus((40).__at((26))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBullet",{},globals.OVBoss)})},
args: [],
source: "newBullet\x0a\x09^ OVBossBullet new centre: (self centre - (40@26))",
messageSends: ["centre:", "new", "-", "centre", "@"],
referencedClasses: ["OVBossBullet"]
}),
globals.OVBoss);

smalltalk.addMethod(
smalltalk.method({
selector: "shootOnGame:",
protocol: 'actions',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
_st(aGame)._everyStepNumber_do_(_st((35).__slash(self._toughness()))._rounded(),(function(){
var bullet;
return smalltalk.withContext(function($ctx2) {
bullet=self._newBullet();
bullet;
$2=bullet;
$4=_st(_st(aGame)._ship())._centre();
$ctx2.sendIdx["centre"]=1;
$3=_st($4).__minus(_st(bullet)._centre());
$1=_st($2)._direction_($3);
return _st(aGame)._enemyShot_($1);
}, function($ctx2) {$ctx2.fillBlock({bullet:bullet},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"shootOnGame:",{aGame:aGame},globals.OVBoss)})},
args: ["aGame"],
source: "shootOnGame: aGame\x0a\x09aGame \x0a\x09\x09everyStepNumber: (35 / self toughness) rounded\x0a\x09\x09do: [\x0a\x09\x09\x09| bullet |\x0a\x09\x09\x09bullet := self newBullet.\x0a\x09\x09\x09aGame enemyShot: (bullet direction: aGame ship centre - bullet centre) ]",
messageSends: ["everyStepNumber:do:", "rounded", "/", "toughness", "newBullet", "enemyShot:", "direction:", "-", "centre", "ship"],
referencedClasses: []
}),
globals.OVBoss);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
($ctx1.supercall = true, globals.OVBoss.superclass.fn.prototype._stepOnGame_.apply(_st(self), [aGame]));
$ctx1.supercall = false;
self._shootOnGame_(aGame);
self._checkCollisionWith_(_st(aGame)._bullets());
$1=self._checkShouldDie();
$2=self._isHit();
if(smalltalk.assert($2)){
_st(aGame)._bossWasHit();
self._isHit_(false);
};
$3=self._isDead();
if(smalltalk.assert($3)){
_st(aGame)._bossDied();
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVBoss)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09super stepOnGame: aGame.\x0a\x09\x09\x0a\x09self\x0a\x09\x09shootOnGame: aGame;\x0a\x09\x09checkCollisionWith: aGame bullets;\x0a\x09\x09checkShouldDie.\x0a\x0a\x09self isHit ifTrue: [ \x0a\x09\x09aGame bossWasHit. \x0a\x09\x09self isHit: false ].\x0a\x09\x0a\x09self isDead ifTrue: [ aGame bossDied ].",
messageSends: ["stepOnGame:", "shootOnGame:", "checkCollisionWith:", "bullets", "checkShouldDie", "ifTrue:", "isHit", "bossWasHit", "isHit:", "isDead", "bossDied"],
referencedClasses: []
}),
globals.OVBoss);



smalltalk.addClass('OVSaucer', globals.OVEnemy, [], 'OVNI-Drawables');
smalltalk.addMethod(
smalltalk.method({
selector: "alignedWith:threshold:",
protocol: 'geometry',
fn: function (aSprite,aThreshold){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $5,$4,$3,$2,$1;
$5=self._centre();
$ctx1.sendIdx["centre"]=1;
$4=_st($5)._y();
$ctx1.sendIdx["y"]=1;
$3=_st($4).__minus(_st(_st(aSprite)._centre())._y());
$2=_st($3)._abs();
$1=_st($2).__lt(aThreshold);
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignedWith:threshold:",{aSprite:aSprite,aThreshold:aThreshold},globals.OVSaucer)})},
args: ["aSprite", "aThreshold"],
source: "alignedWith: aSprite threshold: aThreshold\x0a\x09^ (self centre y - aSprite centre y) abs < aThreshold",
messageSends: ["<", "abs", "-", "y", "centre"],
referencedClasses: []
}),
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "alignedWithWhichOf:threshold:",
protocol: 'geometry',
fn: function (aSpriteCollection,aThreshold){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aSpriteCollection)._detect_ifNone_((function(which){
return smalltalk.withContext(function($ctx2) {
return self._alignedWith_threshold_(which,aThreshold);
}, function($ctx2) {$ctx2.fillBlock({which:which},$ctx1,1)})}),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignedWithWhichOf:threshold:",{aSpriteCollection:aSpriteCollection,aThreshold:aThreshold},globals.OVSaucer)})},
args: ["aSpriteCollection", "aThreshold"],
source: "alignedWithWhichOf: aSpriteCollection threshold: aThreshold\x0a\x09^ aSpriteCollection detect: [ :which | self alignedWith: which threshold: aThreshold ] ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "alignedWith:threshold:"],
referencedClasses: []
}),
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultStateClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $OVSaucerObservingState(){return globals.OVSaucerObservingState||(typeof OVSaucerObservingState=="undefined"?nil:OVSaucerObservingState)}
return $OVSaucerObservingState();
},
args: [],
source: "defaultStateClass\x0a\x09^ OVSaucerObservingState",
messageSends: [],
referencedClasses: ["OVSaucerObservingState"]
}),
globals.OVSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
($ctx1.supercall = true, globals.OVSaucer.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._source_("images/ovni/saucer.png");
$1=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$2=(40).__at((40));
$ctx1.sendIdx["@"]=2;
self._addFrameGroupNamed_origin_size_frameCount_("flying",$1,$2,(6));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$3=(0).__at((40));
$ctx1.sendIdx["@"]=3;
self._addFrameGroupNamed_origin_size_frameCount_("exploding",$3,(40).__at((40)),(10));
$4=self._frameRate_((2));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVSaucer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self\x0a\x09\x09source: 'images/ovni/saucer.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6;\x0a\x09\x09addFrameGroupNamed: 'exploding' origin: 0@40 size: 40@40 frameCount: 10;\x0a\x09\x09frameRate: 2",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:"],
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
selector: "shootOnGame:",
protocol: 'actions',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aGame)._everyStepNumber_do_(_st((10).__slash(self._toughness()))._rounded(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aGame)._enemyShot_(self._newBullet());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"shootOnGame:",{aGame:aGame},globals.OVSaucer)})},
args: ["aGame"],
source: "shootOnGame: aGame\x0a\x09aGame \x0a\x09\x09everyStepNumber: (10 / self toughness) rounded\x0a\x09\x09do: [ aGame enemyShot: self newBullet ]",
messageSends: ["everyStepNumber:do:", "rounded", "/", "toughness", "enemyShot:", "newBullet"],
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
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$8,$6;
($ctx1.supercall = true, globals.OVSaucer.superclass.fn.prototype._stepOnGame_.apply(_st(self), [aGame]));
$ctx1.supercall = false;
self._checkCollisionWith_(_st(aGame)._bullets());
$1=self._checkShouldDie();
$2=self._isHit();
if(smalltalk.assert($2)){
_st(aGame)._saucerWasHit();
};
$3=self._isDead();
if(smalltalk.assert($3)){
_st(aGame)._saucerDied();
};
$4=self._escaped();
if(smalltalk.assert($4)){
_st(aGame)._saucerEscaped();
};
$5=self._shouldRespawn();
if(smalltalk.assert($5)){
$7=_st(aGame)._width();
$ctx1.sendIdx["width"]=1;
$8=_st(_st(aGame)._width())._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$6=_st($7).__plus($8);
self._respawnAtX_y_($6,_st(_st(aGame)._height())._atRandom());
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVSaucer)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09super stepOnGame: aGame.\x0a\x09\x09\x0a\x09self\x0a\x09\x09checkCollisionWith: aGame bullets;\x0a\x09\x09checkShouldDie.\x0a\x0a\x09self isHit ifTrue: [ aGame saucerWasHit ].\x0a\x09self isDead ifTrue: [ aGame saucerDied ].\x0a\x09self escaped ifTrue: [ aGame saucerEscaped ].\x0a\x0a\x09self shouldRespawn ifTrue: [ self respawnAtX: aGame width + aGame width atRandom y: aGame height atRandom ].",
messageSends: ["stepOnGame:", "checkCollisionWith:", "bullets", "checkShouldDie", "ifTrue:", "isHit", "saucerWasHit", "isDead", "saucerDied", "escaped", "saucerEscaped", "shouldRespawn", "respawnAtX:y:", "+", "width", "atRandom", "height"],
referencedClasses: []
}),
globals.OVSaucer);



smalltalk.addClass('OVLifeItem', globals.Sprite, [], 'OVNI-Drawables');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
($ctx1.supercall = true, globals.OVLifeItem.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._source_("images/ovni/life.png");
$1=(0).__at((0));
$ctx1.sendIdx["@"]=1;
self._addFrameGroupNamed_origin_size_frameCount_("life",$1,(20).__at((20)),(4));
$2=self._frameRate_((3));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVLifeItem)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/ovni/life.png';\x0a\x09\x09addFrameGroupNamed: 'life' origin: 0@0 size: 20@20 frameCount: 4;\x0a\x09\x09frameRate: 3.",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:"],
referencedClasses: []
}),
globals.OVLifeItem);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._x()).__lt((20));
if(smalltalk.assert($1)){
self._x_((3000));
};
self._moveCentreBy_((-2).__at(_st((5)._atRandom()).__minus((3))));
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.OVLifeItem)})},
args: [],
source: "move\x0a\x09self x < 20 ifTrue: [ self x: 3000 ].\x0a\x09self moveCentreBy: -2 @ (5 atRandom - 3).",
messageSends: ["ifTrue:", "<", "x", "x:", "moveCentreBy:", "@", "-", "atRandom"],
referencedClasses: []
}),
globals.OVLifeItem);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._move();
$1=self._collidesWith_(_st(aGame)._ship());
if(smalltalk.assert($1)){
_st(aGame)._lifeItemCollected();
self._x_((-20));
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVLifeItem)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self move.\x0a\x09(self collidesWith: aGame ship) \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09aGame lifeItemCollected.\x0a\x09\x09\x09self x: -20 ]",
messageSends: ["move", "ifTrue:", "collidesWith:", "ship", "lifeItemCollected", "x:"],
referencedClasses: []
}),
globals.OVLifeItem);



smalltalk.addClass('OVSpaceShip', globals.Sprite, ['speed', 'exploding'], 'OVNI-Drawables');
smalltalk.addMethod(
smalltalk.method({
selector: "explode",
protocol: 'behaviour',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._currentFrameGroup_("exploding");
self._toFirstFrame();
self._loop_(false);
$1=self._exploding_(true);
return self}, function($ctx1) {$ctx1.fill(self,"explode",{},globals.OVSpaceShip)})},
args: [],
source: "explode\x0a\x09self \x0a\x09\x09currentFrameGroup: 'exploding'; \x0a\x09\x09toFirstFrame;\x0a\x09\x09loop: false; \x0a\x09\x09exploding: true.",
messageSends: ["currentFrameGroup:", "toFirstFrame", "loop:", "exploding:"],
referencedClasses: []
}),
globals.OVSpaceShip);

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
}, function($ctx1) {$ctx1.fill(self,"exploding",{},globals.OVSpaceShip)})},
args: [],
source: "exploding\x0a\x09^ exploding ifNil: [ exploding := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVSpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "exploding:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@exploding"]=anObject;
return self},
args: ["anObject"],
source: "exploding: anObject\x0a\x09exploding := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVSpaceShip);

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
var $1,$2,$3,$4;
($ctx1.supercall = true, globals.OVSpaceShip.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._source_("images/ovni/ship.png");
$1=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$2=(64).__at((29));
$ctx1.sendIdx["@"]=2;
self._addFrameGroupNamed_origin_size_frameCount_("flying",$1,$2,(4));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$3=(0).__at((29));
$ctx1.sendIdx["@"]=3;
self._addFrameGroupNamed_origin_size_frameCount_("exploding",$3,(64).__at((29)),(8));
$4=self._frameRate_((2));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVSpaceShip)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/ovni/ship.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 64@29 frameCount: 4;\x0a\x09\x09addFrameGroupNamed: 'exploding' origin: 0@29 size: 64@29 frameCount: 8;\x0a\x09\x09frameRate: 2.",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:"],
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
selector: "shootOnGame:",
protocol: 'behaviour',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aGame)._canShoot();
if(smalltalk.assert($1)){
_st(aGame)._playerShot_(self._newBullet());
};
return self}, function($ctx1) {$ctx1.fill(self,"shootOnGame:",{aGame:aGame},globals.OVSpaceShip)})},
args: ["aGame"],
source: "shootOnGame: aGame\x0a\x09aGame canShoot ifTrue: [ aGame playerShot: self newBullet ]",
messageSends: ["ifTrue:", "canShoot", "playerShot:", "newBullet"],
referencedClasses: []
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

smalltalk.addMethod(
smalltalk.method({
selector: "speed:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@speed"]=anObject;
return self},
args: ["anObject"],
source: "speed: anObject\x0a\x09speed := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVSpaceShip);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$5,$4,$3,$6;
$2=self._exploding();
$ctx1.sendIdx["exploding"]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return self._atLastFrame();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["and:"]=1;
if(smalltalk.assert($1)){
_st(aGame)._playerDied();
};
$5=_st(_st(_st(aGame)._enemyBullets()).__comma(_st(aGame)._saucers())).__comma(_st(aGame)._asteroids());
$ctx1.sendIdx[","]=1;
$4=self._collidesWithAnyOf_($5);
$3=_st($4)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._exploding())._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
if(smalltalk.assert($3)){
_st(_st(aGame)._soundNamed_("explosion-2"))._play();
self._explode();
};
$6=_st(aGame)._inputHandler();
$ctx1.sendIdx["inputHandler"]=1;
_st($6)._onKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._shootOnGame_(aGame);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
self._moveWithHandler_inCanvas_(_st(aGame)._inputHandler(),_st(aGame)._canvas());
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVSpaceShip)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09(self exploding and: [ self atLastFrame ])\x0a\x09\x09ifTrue: [ aGame playerDied ].\x0a\x09\x09\x0a\x09((self collidesWithAnyOf: aGame enemyBullets , aGame saucers , aGame asteroids)\x0a\x09\x09\x09and: [ self exploding not])\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09(aGame soundNamed: 'explosion-2') play.\x0a\x09\x09\x09self explode ].\x0a\x09\x0a\x09aGame inputHandler onKeyPressed: Key space do: [ self shootOnGame: aGame ].\x0a\x09self moveWithHandler: aGame inputHandler inCanvas: aGame canvas.",
messageSends: ["ifTrue:", "and:", "exploding", "atLastFrame", "playerDied", "collidesWithAnyOf:", ",", "enemyBullets", "saucers", "asteroids", "not", "play", "soundNamed:", "explode", "onKeyPressed:do:", "inputHandler", "space", "shootOnGame:", "moveWithHandler:inCanvas:", "canvas"],
referencedClasses: ["Key"]
}),
globals.OVSpaceShip);


});
