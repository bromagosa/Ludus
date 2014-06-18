define("HOS/OVNI-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "HOS/Ludus", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('OVNI-Core');
smalltalk.packages["OVNI-Core"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('OVGame', globals.Game, ['player', 'phase', 'difficulty', 'ship', 'lifeItem', 'saucers', 'bullets', 'enemyBullets', 'scoreText', 'highScoreText', 'playTimeText', 'livesText', 'phaseNumberText', 'farBackground', 'starField', 'soundIsMute', 'musicIsMute', 'asteroids'], 'OVNI-Core');
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
selector: "asteroidDied",
protocol: 'game events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._player();
$ctx1.sendIdx["player"]=1;
_st($1)._score_(_st(_st(self._player())._score()).__plus((2).__star(self._difficulty())));
return self}, function($ctx1) {$ctx1.fill(self,"asteroidDied",{},globals.OVGame)})},
args: [],
source: "asteroidDied\x0a\x09self player score: self player score + (2 * self difficulty)",
messageSends: ["score:", "player", "+", "score", "*", "difficulty"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "asteroidEscaped",
protocol: 'game events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._player();
$ctx1.sendIdx["player"]=1;
_st($1)._score_(_st(_st(_st(self._player())._score()).__minus(self._difficulty()))._max_((0)));
return self}, function($ctx1) {$ctx1.fill(self,"asteroidEscaped",{},globals.OVGame)})},
args: [],
source: "asteroidEscaped\x0a\x09self player score: ((self player score - self difficulty) max: 0)",
messageSends: ["score:", "player", "max:", "-", "score", "difficulty"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "asteroidWasHit",
protocol: 'game events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._soundNamed_("explosion-1"))._play();
return self}, function($ctx1) {$ctx1.fill(self,"asteroidWasHit",{},globals.OVGame)})},
args: [],
source: "asteroidWasHit\x0a\x09(self soundNamed: 'explosion-1') play.",
messageSends: ["play", "soundNamed:"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "asteroids",
protocol: 'accessing - sprites',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@asteroids"];
if(($receiver = $2) == null || $receiver.isNil){
self["@asteroids"]=[];
self["@asteroids"];
_st((2).__star(self._difficulty()))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@asteroids"])._add_(self._newAsteroid());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$1=self["@asteroids"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asteroids",{},globals.OVGame)})},
args: [],
source: "asteroids\x0a\x09^ asteroids ifNil: [ \x0a\x09\x09asteroids := #().\x0a\x09\x09(2 * self difficulty) timesRepeat: [ asteroids add: self newAsteroid ].\x0a\x09\x09asteroids ]",
messageSends: ["ifNil:", "timesRepeat:", "*", "difficulty", "add:", "newAsteroid"],
referencedClasses: []
}),
globals.OVGame);

smalltalk.addMethod(
smalltalk.method({
selector: "asteroids:",
protocol: 'accessing - sprites',
fn: function (aCollection){
var self=this;
self["@asteroids"]=aCollection;
return self},
args: ["aCollection"],
source: "asteroids: aCollection\x0a\x09asteroids := aCollection",
messageSends: [],
referencedClasses: []
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
var $4,$3,$2,$1;
self._clearCanvas();
$4=_st(_st([self._farBackground()]).__comma(self._saucers())).__comma(self._asteroids());
$ctx1.sendIdx[","]=4;
$3=_st($4).__comma(self._bullets());
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma(self._enemyBullets());
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma([self._ship(),self._lifeItem(),self._starField(),self._livesText(),self._scoreText(),self._highScoreText(),self._playTimeText(),self._phaseNumberText()]);
$ctx1.sendIdx[","]=1;
self._drawAll_($1);
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.OVGame)})},
args: [],
source: "draw\x0a\x09self\x0a\x09\x09clearCanvas.\x0a\x09\x0a\x09self \x0a\x09\x09drawAll:\x0a\x09\x09\x09{ self farBackground } , self saucers , self asteroids , self bullets , self enemyBullets\x0a\x09\x09\x09,  { self ship. self lifeItem. self starField. self livesText.\x0a\x09\x09\x09\x09self scoreText. self highScoreText. self playTimeText. self phaseNumberText }.",
messageSends: ["clearCanvas", "drawAll:", ",", "farBackground", "saucers", "asteroids", "bullets", "enemyBullets", "ship", "lifeItem", "starField", "livesText", "scoreText", "highScoreText", "playTimeText", "phaseNumberText"],
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
_st($3)._outlineWidth_((1));
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
source: "highScoreText\x0a\x09^ highScoreText ifNil: [ highScoreText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: self player highScore;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineWidth: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 10@40) ]",
messageSends: ["ifNil:", "contents:", "new", "highScore", "player", "color:", "outlineColor:", "outlineWidth:", "fontName:", "fontSize:", "position:", "@"],
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
_st($3)._outlineWidth_((1));
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
source: "livesText\x0a\x09^ livesText ifNil: [ livesText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: self livesTextContents;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineWidth: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 7@22) ]",
messageSends: ["ifNil:", "contents:", "new", "livesTextContents", "color:", "outlineColor:", "outlineWidth:", "fontName:", "fontSize:", "position:", "@"],
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
selector: "newAsteroid",
protocol: 'accessing - sprites',
fn: function (){
var self=this;
function $OVAsteroid(){return globals.OVAsteroid||(typeof OVAsteroid=="undefined"?nil:OVAsteroid)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$7,$6,$5,$4,$8,$1;
$2=_st($OVAsteroid())._new();
$3=$2;
$7=self._width();
$ctx1.sendIdx["width"]=1;
$6=_st($7)._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$5=_st($6).__plus(self._width());
$4=_st($5).__at(_st(self._height())._atRandom());
_st($3)._centre_($4);
$8=_st($2)._toughness_(self._difficulty());
$1=$8;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newAsteroid",{},globals.OVGame)})},
args: [],
source: "newAsteroid\x0a\x09^ (OVAsteroid new \x0a\x09\x09centre: self width atRandom + self width @ self height atRandom;\x0a\x09\x09toughness: self difficulty)",
messageSends: ["centre:", "new", "@", "+", "atRandom", "width", "height", "toughness:", "difficulty"],
referencedClasses: ["OVAsteroid"]
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
self._asteroids_(nil);
self._phase_(nil);
self._farBackground_(nil);
self._starField_(nil);
self._resetSprites();
_st(self._player())._reset();
return self}, function($ctx1) {$ctx1.fill(self,"newGame",{},globals.OVGame)})},
args: [],
source: "newGame\x0a\x09self debug: 'new game started'.\x0a\x09self saucers: nil.\x0a\x09self asteroids: nil.\x0a\x09self phase: nil.\x0a\x09self farBackground: nil.\x0a\x09self starField: nil.\x0a\x09self resetSprites.\x0a\x09self player reset.",
messageSends: ["debug:", "saucers:", "asteroids:", "phase:", "farBackground:", "starField:", "resetSprites", "reset", "player"],
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
var $2,$3,$7,$6,$5,$4,$8,$1;
$2=_st($OVSaucer())._new();
$3=$2;
$7=self._width();
$ctx1.sendIdx["width"]=1;
$6=_st($7)._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$5=_st($6).__plus(self._width());
$4=_st($5).__at(_st(self._height())._atRandom());
_st($3)._centre_($4);
$8=_st($2)._toughness_(self._difficulty());
$1=$8;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newSaucer",{},globals.OVGame)})},
args: [],
source: "newSaucer\x0a\x09^ (OVSaucer new \x0a\x09\x09centre: self width atRandom + self width @ self height atRandom;\x0a\x09\x09toughness: self difficulty)",
messageSends: ["centre:", "new", "@", "+", "atRandom", "width", "height", "toughness:", "difficulty"],
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
var $2,$3,$1,$5,$7,$6,$4,$8,$9,$11,$10,$12;
$2=self._saucers();
$ctx1.sendIdx["saucers"]=1;
$3=self._asteroids();
$ctx1.sendIdx["asteroids"]=1;
$1=_st($2).__comma($3);
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._explode();
$5=self._difficulty();
$7=self._phase();
$ctx2.sendIdx["phase"]=1;
$6=_st($7)._number();
$4=_st($5).__star($6);
return _st(each)._toughness_($4);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$8=self._soundNamed_("nextphase");
$ctx1.sendIdx["soundNamed:"]=1;
_st($8)._play();
$ctx1.sendIdx["play"]=1;
_st(self._soundNamed_("explosion-1"))._play();
self._phase_(_st(self._phase())._next());
_st(self._asteroids())._add_(self._newAsteroid());
$ctx1.sendIdx["add:"]=1;
_st(self._saucers())._add_(self._newSaucer());
$9=self._starField();
$ctx1.sendIdx["starField"]=1;
$11=_st(self._starField())._speed();
$ctx1.sendIdx["speed"]=1;
$10=_st($11).__plus((1));
$ctx1.sendIdx["+"]=1;
_st($9)._speed_($10);
$ctx1.sendIdx["speed:"]=1;
$12=self._farBackground();
$ctx1.sendIdx["farBackground"]=1;
_st($12)._speed_(_st(_st(self._farBackground())._speed()).__plus((0.75)));
return self}, function($ctx1) {$ctx1.fill(self,"nextPhase",{},globals.OVGame)})},
args: [],
source: "nextPhase\x0a\x09self saucers , self asteroids do: [ :each |\x0a\x09\x09each explode.\x0a\x09\x09each toughness: self difficulty * self phase number ].\x0a\x09(self soundNamed: 'nextphase') play.\x0a\x09(self soundNamed: 'explosion-1') play.\x0a\x09self phase: self phase next.\x0a\x09self asteroids add: self newAsteroid.\x0a\x09self saucers add: self newSaucer.\x0a\x09self starField speed: self starField speed + 1.\x0a\x09self farBackground speed: self farBackground speed + 0.75.",
messageSends: ["do:", ",", "saucers", "asteroids", "explode", "toughness:", "*", "difficulty", "number", "phase", "play", "soundNamed:", "phase:", "next", "add:", "newAsteroid", "newSaucer", "speed:", "starField", "+", "speed", "farBackground"],
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
_st($3)._outlineWidth_((1));
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
source: "phaseNumberText\x0a\x09^ phaseNumberText ifNil: [ phaseNumberText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'PHASE ' , self phase number asString;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineWidth: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 325@20) ]",
messageSends: ["ifNil:", "contents:", "new", ",", "asString", "number", "phase", "color:", "outlineColor:", "outlineWidth:", "fontName:", "fontSize:", "position:", "@"],
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
_st($3)._outlineWidth_((1));
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
source: "playTimeText\x0a\x09^ playTimeText ifNil: [ playTimeText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: self player playTimeString;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineWidth: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 660@20) ]",
messageSends: ["ifNil:", "contents:", "new", "playTimeString", "player", "color:", "outlineColor:", "outlineWidth:", "fontName:", "fontSize:", "position:", "@"],
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
_st($3)._outlineWidth_((1));
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
source: "scoreText\x0a\x09^ scoreText ifNil: [ scoreText := \x0a\x09\x09(Text new \x0a\x09\x09\x09contents: self player score;\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineWidth: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 20;\x0a\x09\x09\x09position: 10@55) ]",
messageSends: ["ifNil:", "contents:", "new", "score", "player", "color:", "outlineColor:", "outlineWidth:", "fontName:", "fontSize:", "position:", "@"],
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
var $3,$2,$1;
$3=_st(_st(self._bullets()).__comma(self._enemyBullets())).__comma(self._saucers());
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma(self._asteroids());
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma([self._ship(),self._lifeItem()]);
$ctx1.sendIdx[","]=1;
_st($1)._do_((function(eachSprite){
return smalltalk.withContext(function($ctx2) {
return _st(eachSprite)._stepOnGame_(self);
}, function($ctx2) {$ctx2.fillBlock({eachSprite:eachSprite},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stepSprites",{},globals.OVGame)})},
args: [],
source: "stepSprites\x0a\x09(self bullets, self enemyBullets, self saucers, self asteroids, { self ship. self lifeItem })\x0a\x09\x09do: [ :eachSprite | eachSprite stepOnGame: self ]",
messageSends: ["do:", ",", "bullets", "enemyBullets", "saucers", "asteroids", "ship", "lifeItem", "stepOnGame:"],
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



smalltalk.addClass('OVPhase', globals.Game, ['number', 'saucersToGo', 'shouldAdvance'], 'OVNI-Core');
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


smalltalk.addClass('OVPlayer', globals.Object, ['lives', 'score', 'highScore', 'gameStartTime'], 'OVNI-Core');
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


});
