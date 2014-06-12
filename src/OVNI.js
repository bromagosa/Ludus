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
self._source_("images/ovni/bullet.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("shooting",$2,(9).__at((9)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVBullet)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/ovni/bullet.png';\x0a\x09\x09addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
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
protocol: 'behaviour',
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
self._source_("images/ovni/enemybullet.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("shooting",$2,(9).__at((9)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVEnemyBullet)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/ovni/enemybullet.png';\x0a\x09\x09addFrameGroupNamed: 'shooting' origin: 0@0 size: 9@9 frameCount: 1.",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
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
protocol: 'behaviour',
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



smalltalk.addClass('OVGame', globals.Game, ['player', 'phase', 'difficulty', 'ship', 'lifeItem', 'saucers', 'bullets', 'enemyBullets', 'scoreText', 'highScoreText', 'playTimeText', 'livesText', 'phaseNumberText', 'farBackground', 'starField', 'soundIsMute', 'musicIsMute'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "addScreens",
protocol: 'game initialization',
fn: function (){
var self=this;
function $OVStartScreen(){return globals.OVStartScreen||(typeof OVStartScreen=="undefined"?nil:OVStartScreen)}
function $OVMainMenu(){return globals.OVMainMenu||(typeof OVMainMenu=="undefined"?nil:OVMainMenu)}
function $OVOptionsMenu(){return globals.OVOptionsMenu||(typeof OVOptionsMenu=="undefined"?nil:OVOptionsMenu)}
function $OVPauseScreen(){return globals.OVPauseScreen||(typeof OVPauseScreen=="undefined"?nil:OVPauseScreen)}
function $OVGameWonScreen(){return globals.OVGameWonScreen||(typeof OVGameWonScreen=="undefined"?nil:OVGameWonScreen)}
function $OVGameOverScreen(){return globals.OVGameOverScreen||(typeof OVGameOverScreen=="undefined"?nil:OVGameOverScreen)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
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
$5=_st($OVGameWonScreen())._new();
$ctx1.sendIdx["new"]=5;
self._addScreen_named_($5,"gameWon");
$ctx1.sendIdx["addScreen:named:"]=5;
$6=self._addScreen_named_(_st($OVGameOverScreen())._new(),"end");
return self}, function($ctx1) {$ctx1.fill(self,"addScreens",{},globals.OVGame)})},
args: [],
source: "addScreens\x0a\x09self\x0a\x09\x09addScreen: OVStartScreen new named: 'start';\x0a\x09\x09addScreen: OVMainMenu new named: 'mainMenu';\x0a\x09\x09addScreen: OVOptionsMenu new named: 'optionsMenu';\x0a\x09\x09addScreen: OVPauseScreen new named: 'pause';\x0a\x09\x09addScreen: OVGameWonScreen new named: 'gameWon';\x0a\x09\x09addScreen: OVGameOverScreen new named: 'end'.",
messageSends: ["addScreen:named:", "new"],
referencedClasses: ["OVStartScreen", "OVMainMenu", "OVOptionsMenu", "OVPauseScreen", "OVGameWonScreen", "OVGameOverScreen"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "bullets",
protocol: 'accessing - sprites',
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
selector: "controlPhase",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=self._phase();
$ctx1.sendIdx["phase"]=1;
$1=_st($2)._shouldAdvance();
if(smalltalk.assert($1)){
$3=_st(self._phase())._isLast();
if(smalltalk.assert($3)){
_st(self._soundNamed_("gamewon"))._play();
self._switchToScreenNamed_("gameWon");
} else {
self._nextPhase();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"controlPhase",{},globals.OVGame)})},
args: [],
source: "controlPhase\x0a\x09self phase shouldAdvance \x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self phase isLast \x0a\x09\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09\x09(self soundNamed: 'gamewon') play.\x0a\x09\x09\x09\x09\x09self switchToScreenNamed: 'gameWon' ]\x0a\x09\x09\x09\x09ifFalse: [ self nextPhase ]]",
messageSends: ["ifTrue:", "shouldAdvance", "phase", "ifTrue:ifFalse:", "isLast", "play", "soundNamed:", "switchToScreenNamed:", "nextPhase"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "debug:",
protocol: 'debug',
fn: function (aString){
var self=this;
function $Game(){return globals.Game||(typeof Game=="undefined"?nil:Game)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Game())._debugMode();
if(smalltalk.assert($1)){
_st(console)._log_("debug: ".__comma(aString));
};
return self}, function($ctx1) {$ctx1.fill(self,"debug:",{aString:aString},globals.OVGame)})},
args: ["aString"],
source: "debug: aString\x0a\x09Game debugMode ifTrue: [ console log: 'debug: ' , aString ]",
messageSends: ["ifTrue:", "debugMode", "log:", ","],
referencedClasses: ["Game"]
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
self._debug_("setting difficulty to ".__comma(_st(anInteger)._asString()));
self["@difficulty"]=anInteger;
_st(self._saucers())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._toughness_(self._difficulty());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"difficulty:",{anInteger:anInteger},globals.OVGame)})},
args: ["anInteger"],
source: "difficulty: anInteger\x0a\x09self debug: 'setting difficulty to ' , anInteger asString.\x0a\x09difficulty := anInteger.\x0a\x09self saucers do: [ :each | each toughness: self difficulty ]",
messageSends: ["debug:", ",", "asString", "do:", "saucers", "toughness:", "difficulty"],
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
self._draw_(self._farBackground());
$ctx1.sendIdx["draw:"]=1;
self._drawAll_(self._saucers());
$ctx1.sendIdx["drawAll:"]=1;
self._drawAll_(self._bullets());
$ctx1.sendIdx["drawAll:"]=2;
self._drawAll_(self._enemyBullets());
self._draw_(self._ship());
$ctx1.sendIdx["draw:"]=2;
self._draw_(self._lifeItem());
$ctx1.sendIdx["draw:"]=3;
self._draw_(self._starField());
$ctx1.sendIdx["draw:"]=4;
self._draw_(self._livesText());
$ctx1.sendIdx["draw:"]=5;
self._draw_(self._scoreText());
$ctx1.sendIdx["draw:"]=6;
self._draw_(self._highScoreText());
$ctx1.sendIdx["draw:"]=7;
self._draw_(self._playTimeText());
$ctx1.sendIdx["draw:"]=8;
$1=self._draw_(self._phaseNumberText());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVGame)})},
args: [],
source: "draw\x0a\x09self\x0a\x09\x09clearCanvas;\x0a\x09\x09draw: self farBackground;\x0a\x09\x09drawAll: self saucers;\x0a\x09\x09drawAll: self bullets;\x0a\x09\x09drawAll: self enemyBullets;\x0a\x09\x09draw: self ship;\x0a\x09\x09draw: self lifeItem;\x0a\x09\x09draw: self starField;\x0a\x09\x09draw: self livesText;\x0a\x09\x09draw: self scoreText;\x0a\x09\x09draw: self highScoreText;\x0a\x09\x09draw: self playTimeText;\x0a\x09\x09draw: self phaseNumberText",
messageSends: ["clearCanvas", "draw:", "farBackground", "drawAll:", "saucers", "bullets", "enemyBullets", "ship", "lifeItem", "starField", "livesText", "scoreText", "highScoreText", "playTimeText", "phaseNumberText"],
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
self._debug_("game over");
_st(self._soundNamed_("gameover"))._play();
self._switchToScreenNamed_("end");
return self}, function($ctx1) {$ctx1.fill(self,"end",{},globals.OVGame)})},
args: [],
source: "end\x0a\x09self debug: 'game over'.\x0a\x09(self soundNamed: 'gameover') play.\x0a\x09self switchToScreenNamed: 'end'.",
messageSends: ["debug:", "play", "soundNamed:", "switchToScreenNamed:"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "enemyBullets",
protocol: 'accessing - sprites',
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
selector: "enemyShot:",
protocol: 'game events',
fn: function (aBullet){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._enemyBullets())._add_(aBullet);
return self}, function($ctx1) {$ctx1.fill(self,"enemyShot:",{aBullet:aBullet},globals.OVGame)})},
args: ["aBullet"],
source: "enemyShot: aBullet\x0a\x09self enemyBullets add: aBullet",
messageSends: ["add:", "enemyBullets"],
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
_st($3)._source_("images/ovni/farback.gif");
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
source: "farBackground\x0a\x09^ farBackground ifNil: [ \x0a\x09\x09farBackground := \x0a\x09\x09\x09Background new \x0a\x09\x09\x09\x09source: 'images/ovni/farback.gif';\x0a\x09\x09\x09\x09addParallaxNamed: 'background' origin: 0@0 size: 1782@600 speed: 1 ]",
messageSends: ["ifNil:", "source:", "new", "addParallaxNamed:origin:size:speed:", "@"],
referencedClasses: ["Background"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "farBackground:",
protocol: 'accessing',
fn: function (aBackground){
var self=this;
self["@farBackground"]=aBackground;
return self},
args: ["aBackground"],
source: "farBackground: aBackground\x0a\x09farBackground := aBackground",
messageSends: [],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "highScoreText",
protocol: 'accessing - texts',
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
$4=_st($3)._position_((10).__at((40)));
self["@highScoreText"]=$4;
$1=self["@highScoreText"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"highScoreText",{},globals.OVGame)})},
args: [],
source: "highScoreText\x0a\x09^ highScoreText ifNil: [ highScoreText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: self player highScore;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 10@40) ]",
messageSends: ["ifNil:", "contents:", "new", "highScore", "player", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@"],
referencedClasses: ["Text"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "lifeItem",
protocol: 'accessing - sprites',
fn: function (){
var self=this;
function $OVLifeItem(){return globals.OVLifeItem||(typeof OVLifeItem=="undefined"?nil:OVLifeItem)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@lifeItem"];
if(($receiver = $2) == null || $receiver.isNil){
self["@lifeItem"]=_st(_st($OVLifeItem())._new())._centre_((3000).__at(_st(self._height()).__slash((2))));
$1=self["@lifeItem"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"lifeItem",{},globals.OVGame)})},
args: [],
source: "lifeItem\x0a\x09^ lifeItem ifNil: [ lifeItem := OVLifeItem new centre: 3000 @ (self height / 2) ]",
messageSends: ["ifNil:", "centre:", "new", "@", "/", "height"],
referencedClasses: ["OVLifeItem"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "lifeItemCollected",
protocol: 'game events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._soundNamed_("life"))._play();
_st(self._player())._addLife();
return self}, function($ctx1) {$ctx1.fill(self,"lifeItemCollected",{},globals.OVGame)})},
args: [],
source: "lifeItemCollected\x0a\x09(self soundNamed: 'life') play.\x0a\x09self player addLife.",
messageSends: ["play", "soundNamed:", "addLife", "player"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "livesText",
protocol: 'accessing - texts',
fn: function (){
var self=this;
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@livesText"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($Text())._new();
_st($3)._contents_(self._livesTextContents());
_st($3)._color_("rgba(90,113,26,0.7)");
_st($3)._outlineColor_("rgba(242,246,144,0.8)");
_st($3)._outlineSize_((1));
_st($3)._fontName_("ChangaOne");
_st($3)._fontSize_((20));
$4=_st($3)._position_((7).__at((22)));
self["@livesText"]=$4;
$1=self["@livesText"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"livesText",{},globals.OVGame)})},
args: [],
source: "livesText\x0a\x09^ livesText ifNil: [ livesText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: self livesTextContents;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 7@22) ]",
messageSends: ["ifNil:", "contents:", "new", "livesTextContents", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@"],
referencedClasses: ["Text"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "livesTextContents",
protocol: 'accessing - texts',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(s){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._player())._lives())._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(s)._nextPut_("♥");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"livesTextContents",{},globals.OVGame)})},
args: [],
source: "livesTextContents\x0a\x09^ String streamContents: [ :s |\x0a\x09\x09self player lives timesRepeat: [ s nextPut: '♥' ]]",
messageSends: ["streamContents:", "timesRepeat:", "lives", "player", "nextPut:"],
referencedClasses: ["String"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "loadSounds",
protocol: 'game initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._loadSound_("sounds/ovni/background.ogg");
$ctx1.sendIdx["loadSound:"]=1;
self._loadSound_("sounds/ovni/laser.ogg");
$ctx1.sendIdx["loadSound:"]=2;
self._loadSound_("sounds/ovni/select.ogg");
$ctx1.sendIdx["loadSound:"]=3;
self._loadSound_("sounds/ovni/menu.ogg");
$ctx1.sendIdx["loadSound:"]=4;
self._loadSound_("sounds/ovni/gameover.ogg");
$ctx1.sendIdx["loadSound:"]=5;
self._loadSound_("sounds/ovni/explosion-1.ogg");
$ctx1.sendIdx["loadSound:"]=6;
self._loadSound_("sounds/ovni/explosion-2.ogg");
$ctx1.sendIdx["loadSound:"]=7;
self._loadSound_("sounds/ovni/life.ogg");
$ctx1.sendIdx["loadSound:"]=8;
self._loadSound_("sounds/ovni/nextphase.ogg");
$ctx1.sendIdx["loadSound:"]=9;
$1=self._loadSound_("sounds/ovni/gamewon.ogg");
return self}, function($ctx1) {$ctx1.fill(self,"loadSounds",{},globals.OVGame)})},
args: [],
source: "loadSounds\x0a\x0a\x09self\x0a\x09\x09loadSound: 'sounds/ovni/background.ogg';\x0a\x09\x09loadSound: 'sounds/ovni/laser.ogg';\x0a\x09\x09loadSound: 'sounds/ovni/select.ogg';\x0a\x09\x09loadSound: 'sounds/ovni/menu.ogg';\x0a\x09\x09loadSound: 'sounds/ovni/gameover.ogg';\x0a\x09\x09loadSound: 'sounds/ovni/explosion-1.ogg';\x0a\x09\x09loadSound: 'sounds/ovni/explosion-2.ogg';\x0a\x09\x09loadSound: 'sounds/ovni/life.ogg';\x0a\x09\x09loadSound: 'sounds/ovni/nextphase.ogg';\x0a\x09\x09loadSound: 'sounds/ovni/gamewon.ogg'",
messageSends: ["loadSound:"],
referencedClasses: []
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
self._debug_("new game started");
self._saucers_(nil);
self._phase_(nil);
self._farBackground_(nil);
self._starField_(nil);
self._resetSprites();
_st(self._player())._reset();
return self}, function($ctx1) {$ctx1.fill(self,"newGame",{},globals.OVGame)})},
args: [],
source: "newGame\x0a\x09self debug: 'new game started'.\x0a\x09self saucers: nil.\x0a\x09self phase: nil.\x0a\x09self farBackground: nil.\x0a\x09self starField: nil.\x0a\x09self resetSprites.\x0a\x09self player reset.",
messageSends: ["debug:", "saucers:", "phase:", "farBackground:", "starField:", "resetSprites", "reset", "player"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "newSaucer",
protocol: 'accessing - sprites',
fn: function (){
var self=this;
function $OVSaucer(){return globals.OVSaucer||(typeof OVSaucer=="undefined"?nil:OVSaucer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$6,$1;
$2=_st($OVSaucer())._new();
$3=$2;
$5=_st(self._width())._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$4=_st($5).__at(_st(self._height())._atRandom());
_st($3)._centre_($4);
$6=_st($2)._toughness_(self._difficulty());
$1=$6;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newSaucer",{},globals.OVGame)})},
args: [],
source: "newSaucer\x0a\x09^ (OVSaucer new \x0a\x09\x09centre: self width atRandom @ self height atRandom;\x0a\x09\x09toughness: self difficulty)",
messageSends: ["centre:", "new", "@", "atRandom", "width", "height", "toughness:", "difficulty"],
referencedClasses: ["OVSaucer"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPhase",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$7,$6,$8;
$1=self._soundNamed_("nextphase");
$ctx1.sendIdx["soundNamed:"]=1;
_st($1)._play();
$ctx1.sendIdx["play"]=1;
_st(self._soundNamed_("explosion-1"))._play();
$3=self._phase();
$ctx1.sendIdx["phase"]=1;
$2=_st($3)._next();
self._phase_($2);
$4=self._saucers();
$ctx1.sendIdx["saucers"]=1;
_st($4)._add_(self._newSaucer());
_st(self._saucers())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._explode();
return _st(each)._toughness_(_st(self._difficulty()).__star(_st(self._phase())._number()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$5=self._starField();
$ctx1.sendIdx["starField"]=1;
$7=_st(self._starField())._speed();
$ctx1.sendIdx["speed"]=1;
$6=_st($7).__plus((1));
$ctx1.sendIdx["+"]=1;
_st($5)._speed_($6);
$ctx1.sendIdx["speed:"]=1;
$8=self._farBackground();
$ctx1.sendIdx["farBackground"]=1;
_st($8)._speed_(_st(_st(self._farBackground())._speed()).__plus((0.75)));
return self}, function($ctx1) {$ctx1.fill(self,"nextPhase",{},globals.OVGame)})},
args: [],
source: "nextPhase\x0a\x09(self soundNamed: 'nextphase') play.\x0a\x09(self soundNamed: 'explosion-1') play.\x0a\x09self phase: self phase next.\x0a\x09self saucers add: self newSaucer.\x0a\x09self saucers do: [ :each | \x0a\x09\x09each explode.\x0a\x09\x09each toughness: self difficulty * self phase number ].\x0a\x09self starField speed: self starField speed + 1.\x0a\x09self farBackground speed: self farBackground speed + 0.75.",
messageSends: ["play", "soundNamed:", "phase:", "next", "phase", "add:", "saucers", "newSaucer", "do:", "explode", "toughness:", "*", "difficulty", "number", "speed:", "starField", "+", "speed", "farBackground"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "phase",
protocol: 'accessing',
fn: function (){
var self=this;
function $OVPhase(){return globals.OVPhase||(typeof OVPhase=="undefined"?nil:OVPhase)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@phase"];
if(($receiver = $2) == null || $receiver.isNil){
self["@phase"]=_st($OVPhase())._number_((1));
$1=self["@phase"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"phase",{},globals.OVGame)})},
args: [],
source: "phase\x0a\x09^ phase ifNil: [ phase := OVPhase number: 1 ]",
messageSends: ["ifNil:", "number:"],
referencedClasses: ["OVPhase"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "phase:",
protocol: 'accessing',
fn: function (aPhase){
var self=this;
self["@phase"]=aPhase;
return self},
args: ["aPhase"],
source: "phase: aPhase\x0a\x09phase := aPhase",
messageSends: [],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "phaseNumberText",
protocol: 'accessing - texts',
fn: function (){
var self=this;
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@phaseNumberText"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($Text())._new();
_st($3)._contents_("PHASE ".__comma(_st(_st(self._phase())._number())._asString()));
_st($3)._color_("rgba(90,113,26,0.7)");
_st($3)._outlineColor_("rgba(242,246,144,0.8)");
_st($3)._outlineSize_((1));
_st($3)._fontName_("ChangaOne");
_st($3)._fontSize_((20));
$4=_st($3)._position_((325).__at((20)));
self["@phaseNumberText"]=$4;
$1=self["@phaseNumberText"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"phaseNumberText",{},globals.OVGame)})},
args: [],
source: "phaseNumberText\x0a\x09^ phaseNumberText ifNil: [ phaseNumberText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'PHASE ' , self phase number asString;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 325@20) ]",
messageSends: ["ifNil:", "contents:", "new", ",", "asString", "number", "phase", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@"],
referencedClasses: ["Text"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "playTimeText",
protocol: 'accessing - texts',
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
selector: "playerDied",
protocol: 'game events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5;
self._resetSprites();
$1=self._player();
$ctx1.sendIdx["player"]=1;
$4=self._player();
$ctx1.sendIdx["player"]=2;
$3=_st($4)._lives();
$ctx1.sendIdx["lives"]=1;
$2=_st($3).__minus((1));
_st($1)._lives_($2);
$5=_st(_st(self._player())._lives()).__lt((0));
if(smalltalk.assert($5)){
self._end();
};
return self}, function($ctx1) {$ctx1.fill(self,"playerDied",{},globals.OVGame)})},
args: [],
source: "playerDied\x0a\x09self resetSprites.\x0a\x09self player lives: self player lives - 1.\x0a\x09self player lives < 0 ifTrue: [ self end ]",
messageSends: ["resetSprites", "lives:", "player", "-", "lives", "ifTrue:", "<", "end"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "playerShot:",
protocol: 'game events',
fn: function (aBullet){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._debug_("shooting bullet");
_st(self._soundNamed_("laser"))._play();
_st(self._bullets())._add_(aBullet);
return self}, function($ctx1) {$ctx1.fill(self,"playerShot:",{aBullet:aBullet},globals.OVGame)})},
args: ["aBullet"],
source: "playerShot: aBullet\x0a\x09self debug: 'shooting bullet'.\x0a\x09(self soundNamed: 'laser') play.\x0a\x09self bullets add: aBullet",
messageSends: ["debug:", "play", "soundNamed:", "add:", "bullets"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "preloadImages",
protocol: 'game initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._preloadBackground_(self._farBackground());
$ctx1.sendIdx["preloadBackground:"]=1;
self._preloadBackground_(self._starField());
self._preloadSprite_(self._ship());
$ctx1.sendIdx["preloadSprite:"]=1;
$1=self._preloadSprite_(_st(self._saucers())._first());
return self}, function($ctx1) {$ctx1.fill(self,"preloadImages",{},globals.OVGame)})},
args: [],
source: "preloadImages\x0a\x09self\x0a\x09\x09preloadBackground: self farBackground;\x0a\x09\x09preloadBackground: self starField;\x0a\x09\x09preloadSprite: self ship;\x0a\x09\x09preloadSprite: self saucers first.",
messageSends: ["preloadBackground:", "farBackground", "starField", "preloadSprite:", "ship", "first", "saucers"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "resetSprites",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._debug_("resetting sprites");
self["@ship"]=nil;
_st(self._saucers())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._position_((-100).__at((0)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(self._enemyBullets())._removeAll();
$ctx1.sendIdx["removeAll"]=1;
_st(self._bullets())._removeAll();
return self}, function($ctx1) {$ctx1.fill(self,"resetSprites",{},globals.OVGame)})},
args: [],
source: "resetSprites\x0a\x09self debug: 'resetting sprites'.\x0a\x09ship := nil.\x0a\x09self saucers do: [ :each | each position: -100@0 ].\x0a\x09self enemyBullets removeAll.\x0a\x09self bullets removeAll.",
messageSends: ["debug:", "do:", "saucers", "position:", "@", "removeAll", "enemyBullets", "bullets"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "saucerDied",
protocol: 'game events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._player();
$ctx1.sendIdx["player"]=1;
_st($1)._score_(_st(_st(self._player())._score()).__plus((5).__star(self._difficulty())));
return self}, function($ctx1) {$ctx1.fill(self,"saucerDied",{},globals.OVGame)})},
args: [],
source: "saucerDied\x0a\x09self player score: self player score + (5 * self difficulty)",
messageSends: ["score:", "player", "+", "score", "*", "difficulty"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "saucerEscaped",
protocol: 'game events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._player();
$ctx1.sendIdx["player"]=1;
_st($1)._score_(_st(_st(_st(self._player())._score()).__minus(self._difficulty()))._max_((0)));
return self}, function($ctx1) {$ctx1.fill(self,"saucerEscaped",{},globals.OVGame)})},
args: [],
source: "saucerEscaped\x0a\x09self player score: ((self player score - self difficulty) max: 0)",
messageSends: ["score:", "player", "max:", "-", "score", "difficulty"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "saucerWasHit",
protocol: 'game events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._soundNamed_("explosion-1"))._play();
_st(self._phase())._saucerWasHit();
return self}, function($ctx1) {$ctx1.fill(self,"saucerWasHit",{},globals.OVGame)})},
args: [],
source: "saucerWasHit\x0a\x09(self soundNamed: 'explosion-1') play. \x0a\x09self phase saucerWasHit",
messageSends: ["play", "soundNamed:", "saucerWasHit", "phase"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "saucers",
protocol: 'accessing - sprites',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@saucers"];
if(($receiver = $2) == null || $receiver.isNil){
self["@saucers"]=[];
self["@saucers"];
(5)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@saucers"])._add_(self._newSaucer());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$1=self["@saucers"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"saucers",{},globals.OVGame)})},
args: [],
source: "saucers\x0a\x09^ saucers ifNil: [ \x0a\x09\x09saucers := #().\x0a\x09\x095 timesRepeat: [ saucers add: self newSaucer ].\x0a\x09\x09saucers ]",
messageSends: ["ifNil:", "timesRepeat:", "add:", "newSaucer"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "saucers:",
protocol: 'accessing - sprites',
fn: function (aCollection){
var self=this;
self["@saucers"]=aCollection;
return self},
args: ["aCollection"],
source: "saucers: aCollection\x0a\x09saucers := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "scoreText",
protocol: 'accessing - texts',
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
$4=_st($3)._position_((10).__at((55)));
self["@scoreText"]=$4;
$1=self["@scoreText"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"scoreText",{},globals.OVGame)})},
args: [],
source: "scoreText\x0a\x09^ scoreText ifNil: [ scoreText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: self player score;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 10@55) ]",
messageSends: ["ifNil:", "contents:", "new", "score", "player", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@"],
referencedClasses: ["Text"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "ship",
protocol: 'accessing - sprites',
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
selector: "soundNamed:",
protocol: 'audio',
fn: function (aString){
var self=this;
function $OVNullSound(){return globals.OVNullSound||(typeof OVNullSound=="undefined"?nil:OVNullSound)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._soundIsMute();
if(smalltalk.assert($2)){
$1=_st($OVNullSound())._new();
} else {
$1=($ctx1.supercall = true, globals.OVGame.superclass.fn.prototype._soundNamed_.apply(_st(self), [aString]));
$ctx1.supercall = false;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"soundNamed:",{aString:aString},globals.OVGame)})},
args: ["aString"],
source: "soundNamed: aString\x0a\x09^ self soundIsMute\x0a\x09\x09ifTrue: [ OVNullSound new ]\x0a\x09\x09ifFalse: [ super soundNamed: aString ].",
messageSends: ["ifTrue:ifFalse:", "soundIsMute", "new", "soundNamed:"],
referencedClasses: ["OVNullSound"]
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
_st($3)._source_("images/ovni/starfield.png");
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
source: "starField\x0a\x09^ starField ifNil: [ \x0a\x09\x09starField := \x0a\x09\x09\x09Background new \x0a\x09\x09\x09\x09source: 'images/ovni/starfield.png';\x0a\x09\x09\x09\x09addParallaxNamed: 'background' origin: 0@0 size: 800@600 speed: 6 ]",
messageSends: ["ifNil:", "source:", "new", "addParallaxNamed:origin:size:speed:", "@"],
referencedClasses: ["Background"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "starField:",
protocol: 'accessing',
fn: function (aBackground){
var self=this;
self["@starField"]=aBackground;
return self},
args: ["aBackground"],
source: "starField: aBackground\x0a\x09starField := aBackground",
messageSends: [],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
protocol: 'game initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._debug_("initializing game");
self["@fps"]=(30);
self._width_((720));
self._height_((540));
self._addScreens();
self._loadSounds();
self._preloadImages();
$1=self._addFont_named_("fonts/ChangaOne-Regular.ttf","ChangaOne");
self._switchToScreenNamed_("start");
_st(self._soundNamed_("background"))._loop();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.OVGame)})},
args: [],
source: "startGame\x0a\x09self debug: 'initializing game'.\x0a\x0a\x09fps := 30.\x0a\x09\x0a\x09self\x0a\x09\x09width: 720; \x0a\x09\x09height: 540;\x0a\x09\x09addScreens;\x0a\x09\x09loadSounds;\x0a\x09\x09preloadImages;\x0a\x09\x09addFont: 'fonts/ChangaOne-Regular.ttf' named: 'ChangaOne'.\x0a\x09\x0a\x09self switchToScreenNamed: 'start'.\x0a\x09\x0a\x09(self soundNamed: 'background') loop.",
messageSends: ["debug:", "width:", "height:", "addScreens", "loadSounds", "preloadImages", "addFont:named:", "switchToScreenNamed:", "loop", "soundNamed:"],
referencedClasses: []
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
self._stepSprites();
self._controlPhase();
_st(self._inputHandler())._onKeyPressed_do_(_st($Key())._p(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._switchToScreenNamed_("pause");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(self._player())._updateHighScore();
self._updateTexts();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVGame)})},
args: [],
source: "step\x0a\x0a\x09self stepSprites.\x0a\x09self controlPhase.\x0a\x0a\x09self inputHandler onKeyPressed: Key p do: [ self switchToScreenNamed: 'pause' ].\x0a\x0a\x09self player updateHighScore.\x0a\x09self updateTexts.",
messageSends: ["stepSprites", "controlPhase", "onKeyPressed:do:", "inputHandler", "p", "switchToScreenNamed:", "updateHighScore", "player", "updateTexts"],
referencedClasses: ["Key"]
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "stepSprites",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self._bullets()).__comma(self._enemyBullets())).__comma(self._saucers());
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma([self._ship(),self._lifeItem()]);
$ctx1.sendIdx[","]=1;
_st($1)._do_((function(eachSprite){
return smalltalk.withContext(function($ctx2) {
return _st(eachSprite)._stepOnGame_(self);
}, function($ctx2) {$ctx2.fillBlock({eachSprite:eachSprite},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stepSprites",{},globals.OVGame)})},
args: [],
source: "stepSprites\x0a\x09(self bullets, self enemyBullets, self saucers, { self ship. self lifeItem })\x0a\x09\x09do: [ :eachSprite | eachSprite stepOnGame: self ]",
messageSends: ["do:", ",", "bullets", "enemyBullets", "saucers", "ship", "lifeItem", "stepOnGame:"],
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
var $3,$2,$1,$5,$4,$6,$7;
$3=self._musicIsMute();
$ctx1.sendIdx["musicIsMute"]=1;
if(smalltalk.assert($3)){
$2="activatig";
} else {
$2="muting";
};
$1=_st($2).__comma(" music");
self._debug_($1);
$5=self._musicIsMute();
$ctx1.sendIdx["musicIsMute"]=2;
$4=_st($5)._not();
self._musicIsMute_($4);
$6=self._musicIsMute();
if(smalltalk.assert($6)){
$7=self._soundNamed_("background");
$ctx1.sendIdx["soundNamed:"]=1;
_st($7)._stop();
} else {
_st(self._soundNamed_("background"))._loop();
};
return self}, function($ctx1) {$ctx1.fill(self,"toggleMuteMusic",{},globals.OVGame)})},
args: [],
source: "toggleMuteMusic\x0a\x09self debug: (self musicIsMute ifFalse: [ 'muting' ] ifTrue: [ 'activatig' ]), ' music'.\x0a\x09self musicIsMute: self musicIsMute not.\x0a\x09self musicIsMute \x0a\x09\x09ifTrue: [ (self soundNamed: 'background') stop ]\x0a\x09\x09ifFalse: [ (self soundNamed: 'background') loop ]",
messageSends: ["debug:", ",", "ifFalse:ifTrue:", "musicIsMute", "musicIsMute:", "not", "ifTrue:ifFalse:", "stop", "soundNamed:", "loop"],
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
var $3,$2,$1;
$3=self._soundIsMute();
$ctx1.sendIdx["soundIsMute"]=1;
if(smalltalk.assert($3)){
$2="activatig";
} else {
$2="muting";
};
$1=_st($2).__comma(" sounds");
self._debug_($1);
self._soundIsMute_(_st(self._soundIsMute())._not());
return self}, function($ctx1) {$ctx1.fill(self,"toggleMuteSounds",{},globals.OVGame)})},
args: [],
source: "toggleMuteSounds\x0a\x09self debug: (self soundIsMute ifFalse: [ 'muting' ] ifTrue: [ 'activatig' ]), ' sounds'.\x0a\x09self soundIsMute: self soundIsMute not",
messageSends: ["debug:", ",", "ifFalse:ifTrue:", "soundIsMute", "soundIsMute:", "not"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTexts",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5;
$1=self._scoreText();
$3=self._player();
$ctx1.sendIdx["player"]=1;
$2=_st($3)._score();
_st($1)._contents_($2);
$ctx1.sendIdx["contents:"]=1;
_st(self._livesText())._contents_(self._livesTextContents());
$ctx1.sendIdx["contents:"]=2;
$4=self._highScoreText();
$6=self._player();
$ctx1.sendIdx["player"]=2;
$5=_st($6)._highScore();
_st($4)._contents_($5);
$ctx1.sendIdx["contents:"]=3;
_st(self._playTimeText())._contents_(_st(self._player())._playTimeString());
$ctx1.sendIdx["contents:"]=4;
_st(self._phaseNumberText())._contents_("PHASE ".__comma(_st(_st(self._phase())._number())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"updateTexts",{},globals.OVGame)})},
args: [],
source: "updateTexts\x0a\x09self scoreText contents: self player score.\x0a\x09self livesText contents: self livesTextContents.\x0a\x09self highScoreText contents: self player highScore.\x0a\x09self playTimeText contents: self player playTimeString.\x0a\x09self phaseNumberText contents: 'PHASE ' , self phase number asString.",
messageSends: ["contents:", "scoreText", "score", "player", "livesText", "livesTextContents", "highScoreText", "highScore", "playTimeText", "playTimeString", "phaseNumberText", ",", "asString", "number", "phase"],
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
self._draw_(_st(self._game())._farBackground());
$ctx1.sendIdx["draw:"]=1;
self._draw_(self._gameOverText());
$ctx1.sendIdx["draw:"]=2;
$1=self._draw_(self._restartGameText());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVGameOverScreen)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09draw: self game farBackground;\x0a\x09\x09draw: self gameOverText;\x0a\x09\x09draw: self restartGameText",
messageSends: ["draw:", "farBackground", "game", "gameOverText", "restartGameText"],
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



smalltalk.addClass('OVGameWonScreen', globals.Screen, ['gameWonText', 'restartGameText'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5;
self._clearCanvas();
$2=self._game();
$ctx1.sendIdx["game"]=1;
$1=_st($2)._farBackground();
self._draw_($1);
$ctx1.sendIdx["draw:"]=1;
self._draw_(self._gameWonText());
$ctx1.sendIdx["draw:"]=2;
self._draw_(self._restartGameText());
$ctx1.sendIdx["draw:"]=3;
$4=self._game();
$ctx1.sendIdx["game"]=2;
$3=_st($4)._ship();
self._draw_($3);
$ctx1.sendIdx["draw:"]=4;
$5=self._draw_(_st(self._game())._starField());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVGameWonScreen)})},
args: [],
source: "draw\x0a\x09self clearCanvas.\x0a\x09self \x0a\x09\x09draw: self game farBackground;\x0a\x09\x09draw: self gameWonText;\x0a\x09\x09draw: self restartGameText;\x0a\x09\x09draw: self game ship;\x0a\x09\x09draw: self game starField.",
messageSends: ["clearCanvas", "draw:", "farBackground", "game", "gameWonText", "restartGameText", "ship", "starField"],
referencedClasses: []
}),
globals.OVGameWonScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "gameWonText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@gameWonText"];
return $1;
},
args: [],
source: "gameWonText\x0a\x09^ gameWonText",
messageSends: [],
referencedClasses: []
}),
globals.OVGameWonScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "gameWonText:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@gameWonText"]=anObject;
return self},
args: ["anObject"],
source: "gameWonText: anObject\x0a\x09gameWonText := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVGameWonScreen);

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
globals.OVGameWonScreen);

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
globals.OVGameWonScreen);

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
_st($2)._contents_("YOU WON!");
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
$5=(170).__at((280));
$ctx1.sendIdx["@"]=1;
$3=_st($4)._position_($5);
$ctx1.sendIdx["position:"]=1;
$1=$3;
self._gameWonText_($1);
$6=_st($Text())._new();
_st($6)._contents_("Press SPACE to restart");
_st($6)._color_("rgba(90,113,26,0.7)");
_st($6)._outlineColor_("rgba(242,246,144,0.8)");
_st($6)._outlineSize_((2));
_st($6)._fontName_("ChangaOne");
_st($6)._fontSize_((40));
$7=_st($6)._position_((170).__at((320)));
self._restartGameText_($7);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVGameWonScreen)})},
args: [],
source: "startScreen\x0a\x09self gameWonText:\x0a\x09\x09(Text new\x0a\x09\x09\x09contents: 'YOU WON!';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 92;\x0a\x09\x09\x09position: 170@280).\x0a\x09self restartGameText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Press SPACE to restart';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 2;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 40;\x0a\x09\x09\x09position: 170@320)",
messageSends: ["gameWonText:", "contents:", "new", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@", "restartGameText:"],
referencedClasses: ["Text"]
}),
globals.OVGameWonScreen);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._game();
$ctx1.sendIdx["game"]=1;
$1=_st($2)._ship();
_st($1)._moveCentreBy_((5).__at((0)));
_st(self._inputHandler())._onKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._game())._switchToScreenNamed_("start");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVGameWonScreen)})},
args: [],
source: "step\x0a\x09self game ship moveCentreBy: 5@0.\x0a\x09self inputHandler onKeyPressed: Key space do: [ self game switchToScreenNamed: 'start' ].",
messageSends: ["moveCentreBy:", "ship", "game", "@", "onKeyPressed:do:", "inputHandler", "space", "switchToScreenNamed:"],
referencedClasses: ["Key"]
}),
globals.OVGameWonScreen);



smalltalk.addClass('OVLifeItem', globals.Sprite, [], 'OVNI');
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
protocol: 'as yet unclassified',
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



smalltalk.addClass('OVMenu', globals.Menu, ['pointer'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "currentOption",
protocol: 'accessing',
fn: function (){
var self=this;
var option;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self._game())._soundNamed_("menu"))._play();
$1=($ctx1.supercall = true, globals.OVMenu.superclass.fn.prototype._currentOption.apply(_st(self), []));
$ctx1.supercall = false;
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentOption",{option:option},globals.OVMenu)})},
args: [],
source: "currentOption\x0a\x09| option |\x0a\x09(self game soundNamed: 'menu') play.\x0a\x09^ super currentOption.",
messageSends: ["play", "soundNamed:", "game", "currentOption"],
referencedClasses: []
}),
globals.OVMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "placePointer",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._game())._soundNamed_("menu"))._play();
($ctx1.supercall = true, globals.OVMenu.superclass.fn.prototype._placePointer.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"placePointer",{},globals.OVMenu)})},
args: [],
source: "placePointer\x0a\x09(self game soundNamed: 'menu') play.\x0a\x09super placePointer",
messageSends: ["play", "soundNamed:", "game", "placePointer"],
referencedClasses: []
}),
globals.OVMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5,$7,$10,$9,$11,$13,$12,$8;
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
$3=self._game();
$ctx2.sendIdx["game"]=1;
$2=_st($3)._soundNamed_("select");
$ctx2.sendIdx["soundNamed:"]=1;
_st($2)._play();
$ctx2.sendIdx["play"]=1;
$4=self._game();
$ctx2.sendIdx["game"]=2;
$6=self._currentOption();
$ctx2.sendIdx["currentOption"]=1;
$5="option selected: ".__comma($6);
$ctx2.sendIdx[","]=1;
_st($4)._debug_($5);
$ctx2.sendIdx["debug:"]=1;
$7=self._currentOption();
$ctx2.sendIdx["currentOption"]=2;
return self._perform_($7);
$ctx2.sendIdx["perform:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["onKeyPressed:do:"]=3;
$8=_st($1)._onKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
$10=self._game();
$ctx2.sendIdx["game"]=3;
$9=_st($10)._soundNamed_("select");
_st($9)._play();
$11=self._game();
$13=self._currentOption();
$ctx2.sendIdx["currentOption"]=3;
$12="option selected: ".__comma($13);
_st($11)._debug_($12);
return self._perform_(self._currentOption());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVMenu)})},
args: [],
source: "step\x0a\x09self inputHandler \x0a\x09\x09onKeyPressed: Key downArrow do: [ self nextOption ];\x0a\x09\x09onKeyPressed: Key upArrow do: [ self previousOption ];\x0a\x09\x09onKeyPressed: Key enter do: [ \x0a\x09\x09\x09(self game soundNamed: 'select') play.\x0a\x09\x09\x09self game debug: 'option selected: ' , self currentOption.\x0a\x09\x09\x09self perform: self currentOption ];\x0a\x09\x09onKeyPressed: Key space do: [ \x0a\x09\x09\x09(self game soundNamed: 'select') play.\x0a\x09\x09\x09self game debug: 'option selected: ' , self currentOption.\x0a\x09\x09\x09self perform: self currentOption ]",
messageSends: ["onKeyPressed:do:", "inputHandler", "downArrow", "nextOption", "upArrow", "previousOption", "enter", "play", "soundNamed:", "game", "debug:", ",", "currentOption", "perform:", "space"],
referencedClasses: ["Key"]
}),
globals.OVMenu);



smalltalk.addClass('OVMainMenu', globals.OVMenu, ['startGameText', 'optionsMenuText'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._draw_(_st(self._game())._farBackground());
$ctx1.sendIdx["draw:"]=1;
self._draw_(self["@startGameText"]);
$ctx1.sendIdx["draw:"]=2;
self._draw_(self["@optionsMenuText"]);
$ctx1.sendIdx["draw:"]=3;
$1=self._draw_(self["@pointer"]);
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVMainMenu)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09draw: self game farBackground;\x0a\x09\x09draw: startGameText;\x0a\x09\x09draw: optionsMenuText;\x0a\x09\x09draw: pointer",
messageSends: ["draw:", "farBackground", "game"],
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
_st($14)._source_("images/ovni/pointer.png");
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
source: "startScreen\x0a\x09self \x0a\x09\x09startGameText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'START';\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@250);\x0a\x09\x09optionsMenuText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'OPTIONS';\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@330);\x0a\x09\x09pointer:\x0a\x09\x09\x09((Sprite new\x0a\x09\x09\x09\x09source: 'images/ovni/pointer.png';\x0a\x09\x09\x09\x09addFrameGroupNamed: 'pointing' origin: 0@0 size: 65@40 frameCount: 1)\x0a\x09\x09\x09\x09\x09position: 75@205;\x0a\x09\x09\x09\x09\x09yourself).",
messageSends: ["startGameText:", "contents:", "new", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@", "optionsMenuText:", "pointer:", "source:", "addFrameGroupNamed:origin:size:frameCount:", "yourself"],
referencedClasses: ["Text", "Sprite"]
}),
globals.OVMainMenu);



smalltalk.addClass('OVOptionsMenu', globals.OVMenu, ['goBackText', 'difficultyText', 'muteMusicText', 'muteSoundsText', 'debugModeText'], 'OVNI');
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
self._draw_(_st(self._game())._farBackground());
$ctx1.sendIdx["draw:"]=1;
self._draw_(self._goBackText());
$ctx1.sendIdx["draw:"]=2;
self._draw_(self._difficultyText());
$ctx1.sendIdx["draw:"]=3;
self._draw_(self._muteMusicText());
$ctx1.sendIdx["draw:"]=4;
self._draw_(self._muteSoundsText());
$ctx1.sendIdx["draw:"]=5;
self._draw_(self._debugModeText());
$ctx1.sendIdx["draw:"]=6;
$1=self._draw_(self._pointer());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVOptionsMenu)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09draw: self game farBackground;\x0a\x09\x09draw: self goBackText;\x0a\x09\x09draw: self difficultyText;\x0a\x09\x09draw: self muteMusicText;\x0a\x09\x09draw: self muteSoundsText;\x0a\x09\x09draw: self debugModeText;\x0a\x09\x09draw: self pointer",
messageSends: ["draw:", "farBackground", "game", "goBackText", "difficultyText", "muteMusicText", "muteSoundsText", "debugModeText", "pointer"],
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
function $Game(){return globals.Game||(typeof Game=="undefined"?nil:Game)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
_st($Game())._toggleDebugMode();
$1=self._debugModeText();
$4=_st($Game())._debugMode();
if(smalltalk.assert($4)){
$3="ON";
} else {
$3="OFF";
};
$2="DEBUG: ".__comma($3);
_st($1)._contents_($2);
return self}, function($ctx1) {$ctx1.fill(self,"selectDebugMode",{},globals.OVOptionsMenu)})},
args: [],
source: "selectDebugMode\x0a\x09Game toggleDebugMode.\x0a\x09self debugModeText contents: 'DEBUG: ' , (Game debugMode ifTrue: [ 'ON' ] ifFalse: [ 'OFF' ])",
messageSends: ["toggleDebugMode", "contents:", "debugModeText", ",", "ifTrue:ifFalse:", "debugMode"],
referencedClasses: ["Game"]
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
function $Game(){return globals.Game||(typeof Game=="undefined"?nil:Game)}
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$5,$3,$1,$7,$8,$12,$11,$10,$9,$14,$15,$13,$6,$17,$18,$22,$21,$20,$19,$24,$25,$23,$16,$27,$28,$31,$30,$29,$33,$34,$32,$26,$36,$37,$40,$39,$38,$42,$43,$41,$35,$47,$49,$50,$51,$48,$46,$52,$45,$44;
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
$31=_st(self._game())._musicIsMute();
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
$33=$27;
$34=(150).__at((360));
$ctx1.sendIdx["@"]=4;
$32=_st($33)._position_($34);
$ctx1.sendIdx["position:"]=4;
$26=$32;
self._muteMusicText_($26);
$36=_st($Text())._new();
$ctx1.sendIdx["new"]=5;
$37=$36;
$40=_st($Game())._debugMode();
if(smalltalk.assert($40)){
$39="ON";
} else {
$39="OFF";
};
$38="DEBUG: ".__comma($39);
_st($37)._contents_($38);
_st($36)._color_("rgba(90,113,26,0.7)");
_st($36)._outlineColor_("rgba(242,246,144,0.8)");
_st($36)._outlineSize_((3));
_st($36)._fontName_("ChangaOne");
_st($36)._fontSize_((80));
$42=$36;
$43=(150).__at((440));
$ctx1.sendIdx["@"]=5;
$41=_st($42)._position_($43);
$ctx1.sendIdx["position:"]=5;
$35=$41;
self._debugModeText_($35);
$47=_st($Sprite())._new();
_st($47)._source_("images/ovni/pointer.png");
$49=$47;
$50=(0).__at((0));
$ctx1.sendIdx["@"]=6;
$51=(65).__at((40));
$ctx1.sendIdx["@"]=7;
$48=_st($49)._addFrameGroupNamed_origin_size_frameCount_("pointing",$50,$51,(1));
$46=$48;
_st($46)._position_((75).__at((75)));
$52=_st($46)._yourself();
$45=$52;
$44=self._pointer_($45);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVOptionsMenu)})},
args: [],
source: "startScreen\x0a\x09self \x0a\x09\x09goBackText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'BACK';\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@120);\x0a\x09\x09difficultyText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'DIFFICULTY: ' , self game difficulty printString;\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@200);\x0a\x09\x09muteSoundsText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'SOUNDS: ' , (self game soundIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ]);\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@280); \x0a\x09\x09muteMusicText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'MUSIC: ' , (self game musicIsMute ifTrue: [ 'OFF' ] ifFalse: [ 'ON' ]);\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@360);\x0a\x09\x09debugModeText:\x0a\x09\x09\x09(Text new \x0a\x09\x09\x09\x09contents: 'DEBUG: ' , (Game debugMode ifTrue: [ 'ON' ] ifFalse: [ 'OFF' ]);\x0a\x09\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09\x09outlineSize: 3;\x0a\x09\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09\x09fontSize: 80;\x0a\x09\x09\x09\x09position: 150@440);\x0a\x09\x09pointer:\x0a\x09\x09\x09((Sprite new\x0a\x09\x09\x09\x09source: 'images/ovni/pointer.png';\x0a\x09\x09\x09\x09addFrameGroupNamed: 'pointing' origin: 0@0 size: 65@40 frameCount: 1)\x0a\x09\x09\x09\x09\x09position: 75@75;\x0a\x09\x09\x09\x09\x09yourself).",
messageSends: ["goBackText:", "contents:", "new", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "@", "difficultyText:", ",", "printString", "difficulty", "game", "muteSoundsText:", "ifTrue:ifFalse:", "soundIsMute", "muteMusicText:", "musicIsMute", "debugModeText:", "debugMode", "pointer:", "source:", "addFrameGroupNamed:origin:size:frameCount:", "yourself"],
referencedClasses: ["Text", "Game", "Sprite"]
}),
globals.OVOptionsMenu);



smalltalk.addClass('OVNullSound', globals.Object, [], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "play",
protocol: 'sound playing',
fn: function (){
var self=this;
return self},
args: [],
source: "play\x0a\x09\x22self doNothing\x22",
messageSends: [],
referencedClasses: []
}),
globals.OVNullSound);



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



smalltalk.addClass('OVPhase', globals.Game, ['number', 'saucersToGo', 'shouldAdvance'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "isLast",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._number()).__eq(_st(self._class())._lastPhaseNumber());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLast",{},globals.OVPhase)})},
args: [],
source: "isLast\x0a\x09^ self number = self class lastPhaseNumber",
messageSends: ["=", "number", "lastPhaseNumber", "class"],
referencedClasses: []
}),
globals.OVPhase);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._number_(_st(self._number()).__plus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},globals.OVPhase)})},
args: [],
source: "next\x0a\x09^ self class number: self number + 1",
messageSends: ["number:", "class", "+", "number"],
referencedClasses: []
}),
globals.OVPhase);

smalltalk.addMethod(
smalltalk.method({
selector: "number",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@number"];
return $1;
},
args: [],
source: "number\x0a\x09^ number",
messageSends: [],
referencedClasses: []
}),
globals.OVPhase);

smalltalk.addMethod(
smalltalk.method({
selector: "number:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@number"]=anObject;
return self},
args: ["anObject"],
source: "number: anObject\x0a\x09number := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVPhase);

smalltalk.addMethod(
smalltalk.method({
selector: "saucerWasHit",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=self._saucersToGo();
$ctx1.sendIdx["saucersToGo"]=1;
$1=_st($2).__minus((1));
self._saucersToGo_($1);
$3=_st(self._saucersToGo()).__eq((0));
if(smalltalk.assert($3)){
self._shouldAdvance_(true);
};
return self}, function($ctx1) {$ctx1.fill(self,"saucerWasHit",{},globals.OVPhase)})},
args: [],
source: "saucerWasHit\x0a\x09self saucersToGo: self saucersToGo - 1.\x0a\x09self saucersToGo = 0 ifTrue: [ self shouldAdvance: true ]",
messageSends: ["saucersToGo:", "-", "saucersToGo", "ifTrue:", "=", "shouldAdvance:"],
referencedClasses: []
}),
globals.OVPhase);

smalltalk.addMethod(
smalltalk.method({
selector: "saucersToGo",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@saucersToGo"];
return $1;
},
args: [],
source: "saucersToGo\x0a\x09^ saucersToGo",
messageSends: [],
referencedClasses: []
}),
globals.OVPhase);

smalltalk.addMethod(
smalltalk.method({
selector: "saucersToGo:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@saucersToGo"]=anObject;
return self},
args: ["anObject"],
source: "saucersToGo: anObject\x0a\x09saucersToGo := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVPhase);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldAdvance",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@shouldAdvance"];
if(($receiver = $2) == null || $receiver.isNil){
self["@shouldAdvance"]=false;
$1=self["@shouldAdvance"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldAdvance",{},globals.OVPhase)})},
args: [],
source: "shouldAdvance\x0a\x09^ shouldAdvance ifNil: [ shouldAdvance := false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.OVPhase);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldAdvance:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldAdvance"]=aBoolean;
return self},
args: ["aBoolean"],
source: "shouldAdvance: aBoolean\x0a\x09shouldAdvance := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.OVPhase);


smalltalk.addMethod(
smalltalk.method({
selector: "lastPhaseNumber",
protocol: 'accessing',
fn: function (){
var self=this;
return (4);
},
args: [],
source: "lastPhaseNumber\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
globals.OVPhase.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "number:",
protocol: 'instance creation',
fn: function (aNumber){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
instance=self._new();
$1=instance;
_st($1)._number_(aNumber);
$2=_st($1)._saucersToGo_(_st((20)._to_by_(_st(_st(self._lastPhaseNumber()).__star((5))).__plus((15)),(5)))._at_(aNumber));
$3=instance;
return $3;
}, function($ctx1) {$ctx1.fill(self,"number:",{aNumber:aNumber,instance:instance},globals.OVPhase.klass)})},
args: ["aNumber"],
source: "number: aNumber\x0a\x09| instance |\x0a\x09instance := self new.\x0a\x09instance \x0a\x09\x09number: aNumber;\x0a\x09\x09saucersToGo: ((20 to: (self lastPhaseNumber * 5) + 15 by: 5) at: aNumber).\x0a\x09^ instance",
messageSends: ["new", "number:", "saucersToGo:", "at:", "to:by:", "+", "*", "lastPhaseNumber"],
referencedClasses: []
}),
globals.OVPhase.klass);


smalltalk.addClass('OVPlayer', globals.Object, ['lives', 'score', 'highScore', 'gameStartTime'], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "addLife",
protocol: 'life handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._lives_(_st(_st(self._lives()).__plus((1)))._min_((3)));
return self}, function($ctx1) {$ctx1.fill(self,"addLife",{},globals.OVPlayer)})},
args: [],
source: "addLife\x0a\x09self lives: ((self lives + 1) min: 3)",
messageSends: ["lives:", "min:", "+", "lives"],
referencedClasses: []
}),
globals.OVPlayer);

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
selector: "reset",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._lives_((3));
self._score_((0));
$1=self._resetStartTime();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},globals.OVPlayer)})},
args: [],
source: "reset\x0a\x09self \x0a\x09\x09lives: 3;\x0a\x09\x09score: 0;\x0a\x09\x09resetStartTime",
messageSends: ["lives:", "score:", "resetStartTime"],
referencedClasses: []
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



smalltalk.addClass('OVSaucer', globals.FSMSprite, ['exploding', 'dead', 'toughness'], 'OVNI');
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
selector: "escaped",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._x()).__plus(self._width())).__lt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"escaped",{},globals.OVSaucer)})},
args: [],
source: "escaped\x0a\x09^ ((self x + self width) < 0)",
messageSends: ["<", "+", "x", "width"],
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
self._currentFrameGroup_("exploding");
$1=self._toFirstFrame();
self._loop_(false);
$2=self._exploding_(true);
return self}, function($ctx1) {$ctx1.fill(self,"explode",{},globals.OVSaucer)})},
args: [],
source: "explode\x0a\x09self \x0a\x09\x09currentFrameGroup: 'exploding'; \x0a\x09\x09toFirstFrame.\x0a\x09self\x0a\x09\x09loop: false; \x0a\x09\x09exploding: true.",
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
self._source_("images/ovni/saucer.png");
$1=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$2=(40).__at((40));
$ctx1.sendIdx["@"]=2;
self._addFrameGroupNamed_origin_size_frameCount_("flying",$1,$2,(6));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$4=(0).__at((40));
$ctx1.sendIdx["@"]=3;
$3=self._addFrameGroupNamed_origin_size_frameCount_("exploding",$4,(40).__at((40)),(10));
_st(self._frameGroupNamed_("exploding"))._frameRate_((2));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVSaucer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/ovni/saucer.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 40@40 frameCount: 6;\x0a\x09\x09addFrameGroupNamed: 'exploding' origin: 0@40 size: 40@40 frameCount: 10.\x0a\x09\x0a\x09(self frameGroupNamed: 'exploding') frameRate: 2.",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:", "frameGroupNamed:"],
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
}, function($ctx1) {$ctx1.fill(self,"isHit",{},globals.OVSaucer)})},
args: [],
source: "isHit\x0a\x09^ self exploding and: [ self atFirstFrame ]",
messageSends: ["and:", "exploding", "atFirstFrame"],
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
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._escaped()).__or(self._dead());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldRespawn",{},globals.OVSaucer)})},
args: [],
source: "shouldRespawn\x0a\x09^ self escaped | self dead",
messageSends: ["|", "escaped", "dead"],
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
protocol: 'behaviour',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$8,$6,$9;
self._checkCollisionWith_(_st(aGame)._bullets());
self._move();
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
$9=self._shouldShoot();
if(smalltalk.assert($9)){
_st(aGame)._enemyShot_(self._newBullet());
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVSaucer)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self\x0a\x09\x09checkCollisionWith: aGame bullets;\x0a\x09\x09move;\x0a\x09\x09checkShouldDie.\x0a\x0a\x09self isHit ifTrue: [ aGame saucerWasHit ].\x0a\x09self isDead ifTrue: [ aGame saucerDied ].\x0a\x09self escaped ifTrue: [ aGame saucerEscaped ].\x0a\x0a\x09self shouldRespawn ifTrue: [ self respawnAtX: aGame width + aGame width atRandom y: aGame height atRandom ].\x0a\x09self shouldShoot ifTrue: [ aGame enemyShot: self newBullet ]",
messageSends: ["checkCollisionWith:", "bullets", "move", "checkShouldDie", "ifTrue:", "isHit", "saucerWasHit", "isDead", "saucerDied", "escaped", "saucerEscaped", "shouldRespawn", "respawnAtX:y:", "+", "width", "atRandom", "height", "shouldShoot", "enemyShot:", "newBullet"],
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



smalltalk.addClass('OVSmartSaucer', globals.OVSaucer, [], 'OVNI');
smalltalk.addMethod(
smalltalk.method({
selector: "alignedWith:",
protocol: 'as yet unclassified',
fn: function (aSprite){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=self._y();
$ctx1.sendIdx["y"]=1;
$3=_st($4).__minus(_st(aSprite)._y());
$2=_st($3)._abs();
$1=_st($2).__lt(self._alignmentThreshold());
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignedWith:",{aSprite:aSprite},globals.OVSmartSaucer)})},
args: ["aSprite"],
source: "alignedWith: aSprite\x0a\x09^ (self y - aSprite y) abs < self alignmentThreshold",
messageSends: ["<", "abs", "-", "y", "alignmentThreshold"],
referencedClasses: []
}),
globals.OVSmartSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "alignedWithWhichOf:",
protocol: 'as yet unclassified',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aSpriteCollection)._detect_ifNone_((function(which){
return smalltalk.withContext(function($ctx2) {
return self._alignedWith_(which);
}, function($ctx2) {$ctx2.fillBlock({which:which},$ctx1,1)})}),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignedWithWhichOf:",{aSpriteCollection:aSpriteCollection},globals.OVSmartSaucer)})},
args: ["aSpriteCollection"],
source: "alignedWithWhichOf: aSpriteCollection\x0a\x09^ aSpriteCollection detect: [ :which | self alignedWith: which ] ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "alignedWith:"],
referencedClasses: []
}),
globals.OVSmartSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "alignmentThreshold",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return (10);
},
args: [],
source: "alignmentThreshold\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
globals.OVSmartSaucer);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'as yet unclassified',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$receiver;
($ctx1.supercall = true, globals.OVSmartSaucer.superclass.fn.prototype._step.apply(_st(self), []));
$ctx1.supercall = false;
$2=_st(aGame)._ship();
$ctx1.sendIdx["ship"]=1;
$1=self._alignedWith_($2);
if(smalltalk.assert($1)){
self._shootOnGame_(aGame);
} else {
var dangerousBullet;
dangerousBullet=self._alignedWithWhichOf_(_st(aGame)._bullets());
dangerousBullet;
$3=dangerousBullet;
if(($receiver = $3) == null || $receiver.isNil){
self._moveTowards_(_st(aGame)._ship());
} else {
self._moveAwayFrom_(dangerousBullet);
};
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVSmartSaucer)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09super step.\x0a\x09(self alignedWith: aGame ship)\x0a\x09\x09ifTrue: [ self shootOnGame: aGame ]\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09| dangerousBullet |\x0a\x09\x09\x09dangerousBullet := (self alignedWithWhichOf: aGame bullets).\x0a\x09\x09\x09dangerousBullet \x0a\x09\x09\x09\x09ifNotNil: [ self moveAwayFrom: dangerousBullet ] \x0a\x09\x09\x09\x09ifNil: [ self moveTowards: aGame ship ]].",
messageSends: ["step", "ifTrue:ifFalse:", "alignedWith:", "ship", "shootOnGame:", "alignedWithWhichOf:", "bullets", "ifNotNil:ifNil:", "moveAwayFrom:", "moveTowards:"],
referencedClasses: []
}),
globals.OVSmartSaucer);



smalltalk.addClass('OVSpaceShip', globals.Sprite, ['speed', 'exploding'], 'OVNI');
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
var $1,$2,$4,$3;
($ctx1.supercall = true, globals.OVSpaceShip.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._source_("images/ovni/ship.png");
$1=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$2=(64).__at((29));
$ctx1.sendIdx["@"]=2;
self._addFrameGroupNamed_origin_size_frameCount_("flying",$1,$2,(4));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$4=(0).__at((29));
$ctx1.sendIdx["@"]=3;
$3=self._addFrameGroupNamed_origin_size_frameCount_("exploding",$4,(64).__at((29)),(8));
_st(self._frameGroupNamed_("exploding"))._frameRate_((2));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.OVSpaceShip)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09source: 'images/ovni/ship.png';\x0a\x09\x09addFrameGroupNamed: 'flying' origin: 0@0 size: 64@29 frameCount: 4;\x0a\x09\x09addFrameGroupNamed: 'exploding' origin: 0@29 size: 64@29 frameCount: 8.\x0a\x09\x0a\x09(self frameGroupNamed: 'exploding') frameRate: 2.",
messageSends: ["initialize", "source:", "addFrameGroupNamed:origin:size:frameCount:", "@", "frameRate:", "frameGroupNamed:"],
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
_st(aGame)._playerShot_(self._newBullet());
return self}, function($ctx1) {$ctx1.fill(self,"shootOnGame:",{aGame:aGame},globals.OVSpaceShip)})},
args: ["aGame"],
source: "shootOnGame: aGame\x0a\x09aGame playerShot: self newBullet.",
messageSends: ["playerShot:", "newBullet"],
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
protocol: 'behaviour',
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
$5=self._collidesWithAnyOf_(_st(aGame)._enemyBullets());
$ctx1.sendIdx["collidesWithAnyOf:"]=1;
$4=_st($5)._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._collidesWithAnyOf_(_st(aGame)._saucers());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$3=_st($4)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._exploding())._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
if(smalltalk.assert($3)){
_st(_st(aGame)._soundNamed_("explosion-2"))._play();
self._explode();
};
$6=_st(aGame)._inputHandler();
$ctx1.sendIdx["inputHandler"]=1;
_st($6)._onKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._shootOnGame_(aGame);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}));
self._moveWithHandler_inCanvas_(_st(aGame)._inputHandler(),_st(aGame)._canvas());
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVSpaceShip)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09(self exploding and: [ self atLastFrame ])\x0a\x09\x09ifTrue: [ aGame playerDied ].\x0a\x09\x09\x0a\x09(((self collidesWithAnyOf: aGame enemyBullets)\x0a\x09\x09or: [ (self collidesWithAnyOf: aGame saucers) ]) \x0a\x09\x09\x09and: [ self exploding not])\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09(aGame soundNamed: 'explosion-2') play.\x0a\x09\x09\x09self explode ].\x0a\x09\x0a\x09aGame inputHandler onKeyPressed: Key space do: [ self shootOnGame: aGame ].\x0a\x09self moveWithHandler: aGame inputHandler inCanvas: aGame canvas.",
messageSends: ["ifTrue:", "and:", "exploding", "atLastFrame", "playerDied", "or:", "collidesWithAnyOf:", "enemyBullets", "saucers", "not", "play", "soundNamed:", "explode", "onKeyPressed:do:", "inputHandler", "space", "shootOnGame:", "moveWithHandler:inCanvas:", "canvas"],
referencedClasses: ["Key"]
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
self._draw_(_st(self._game())._farBackground());
$ctx1.sendIdx["draw:"]=1;
self._drawAll_(self._saucers());
$1=self._title();
$ctx1.sendIdx["title"]=1;
self._draw_($1);
$ctx1.sendIdx["draw:"]=2;
$2=self._draw_(self._authorText());
$ctx1.sendIdx["draw:"]=3;
$3=_st(_st(self._title())._y()).__lt((75));
if(smalltalk.assert($3)){
self._draw_(self._startGameText());
};
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVStartScreen)})},
args: [],
source: "draw\x0a\x09self \x0a\x09\x09draw: self game farBackground;\x0a\x09\x09drawAll: self saucers;\x0a\x09\x09draw: self title;\x0a\x09\x09draw: self authorText.\x0a\x09\x09\x0a\x09self title y < 75 ifTrue: [ self draw: self startGameText ]",
messageSends: ["draw:", "farBackground", "game", "drawAll:", "saucers", "title", "authorText", "ifTrue:", "<", "y", "startGameText"],
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
function $Image(){return globals.Image||(typeof Image=="undefined"?nil:Image)}
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
_st(each)._currentFrameGroup_("flying");
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
$15=_st($Image())._new();
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
source: "startScreen\x0a\x09self saucers: self game saucers.\x0a\x09self saucers do: [ :each | \x0a\x09\x09each\x0a\x09\x09\x09currentFrameGroup: 'flying';\x0a\x09\x09\x09x: (self game width - 100) atRandom + 50;\x0a\x09\x09\x09y: (self game height - 100) atRandom + 50 ].\x0a\x09\x09\x09\x0a\x09self title: \x0a\x09\x09(Image new \x0a\x09\x09\x09source: 'images/ovni/title.png' \x0a\x09\x09\x09origin: 0@0 \x0a\x09\x09\x09size: 600@196 \x0a\x09\x09\x09position: 55 @ self game height).\x0a\x09\x09\x09\x0a\x09self startGameText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Press SPACE to start';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 40;\x0a\x09\x09\x09position: 180@320).\x0a\x09\x09\x09\x0a\x09self authorText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Bernat Romagosa 2014';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 12;\x0a\x09\x09\x09position: 580@530)",
messageSends: ["saucers:", "saucers", "game", "do:", "currentFrameGroup:", "x:", "+", "atRandom", "-", "width", "y:", "height", "title:", "source:origin:size:position:", "new", "@", "startGameText:", "contents:", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "authorText:"],
referencedClasses: ["Image", "Text"]
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
var $3,$2,$1,$4,$5,$7,$6;
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
$7=self._game();
$ctx2.sendIdx["game"]=1;
$6=_st($7)._soundNamed_("select");
_st($6)._play();
return _st(self._game())._switchToScreenNamed_("mainMenu");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVStartScreen)})},
args: [],
source: "step\x0a\x09self title y > 40 ifTrue: [ self title y: self title y - 4 ].\x0a\x09self saucers do: [ :each | each wander ].\x0a\x09self inputHandler onKeyPressed: Key space do: [ \x0a\x09\x09self saucers do: [ :each | each x: -100 ].\x0a\x09\x09(self game soundNamed: 'select') play.\x0a\x09\x09self game switchToScreenNamed: 'mainMenu' ]",
messageSends: ["ifTrue:", ">", "y", "title", "y:", "-", "do:", "saucers", "wander", "onKeyPressed:do:", "inputHandler", "space", "x:", "play", "soundNamed:", "game", "switchToScreenNamed:"],
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
