define("HOS/OVNI-Screens", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "HOS/Ludus"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('OVNI-Screens');
smalltalk.packages["OVNI-Screens"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('OVGameOverScreen', globals.Screen, ['gameOverText', 'restartGameText'], 'OVNI-Screens');
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



smalltalk.addClass('OVGameWonScreen', globals.Screen, ['gameWonText', 'restartGameText'], 'OVNI-Screens');
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



smalltalk.addClass('OVMenu', globals.Menu, ['pointer'], 'OVNI-Screens');
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



smalltalk.addClass('OVMainMenu', globals.OVMenu, ['startGameText', 'optionsMenuText'], 'OVNI-Screens');
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



smalltalk.addClass('OVOptionsMenu', globals.OVMenu, ['goBackText', 'difficultyText', 'muteMusicText', 'muteSoundsText', 'debugModeText'], 'OVNI-Screens');
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



smalltalk.addClass('OVPauseScreen', globals.Screen, ['gamePausedText', 'resumeGameText'], 'OVNI-Screens');
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



smalltalk.addClass('OVStartScreen', globals.Screen, ['saucers', 'title', 'startGameText', 'authorText'], 'OVNI-Screens');
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
function $OVSaucerWanderingState(){return globals.OVSaucerWanderingState||(typeof OVSaucerWanderingState=="undefined"?nil:OVSaucerWanderingState)}
function $Image(){return globals.Image||(typeof Image=="undefined"?nil:Image)}
function $Text(){return globals.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$8,$7,$6,$5,$4,$14,$13,$12,$11,$10,$9,$16,$17,$18,$19,$15,$21,$23,$24,$22,$20,$25,$26;
$2=self._game();
$ctx1.sendIdx["game"]=1;
$1=_st($2)._saucers();
$ctx1.sendIdx["saucers"]=1;
self._saucers_($1);
_st(self._saucers())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$3=_st($OVSaucerWanderingState())._new();
$ctx2.sendIdx["new"]=1;
_st(each)._state_($3);
_st(each)._currentFrameGroup_("flying");
$8=self._game();
$ctx2.sendIdx["game"]=2;
$7=_st($8)._width();
$6=_st($7).__minus((100));
$ctx2.sendIdx["-"]=1;
$5=_st($6)._atRandom();
$ctx2.sendIdx["atRandom"]=1;
$4=_st($5).__plus((50));
$ctx2.sendIdx["+"]=1;
_st(each)._x_($4);
$14=self._game();
$ctx2.sendIdx["game"]=3;
$13=_st($14)._height();
$ctx2.sendIdx["height"]=1;
$12=_st($13).__minus((100));
$11=_st($12)._atRandom();
$10=_st($11).__plus((50));
$9=_st(each)._y_($10);
return $9;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$16=_st($Image())._new();
$ctx1.sendIdx["new"]=2;
$17=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$18=(600).__at((196));
$ctx1.sendIdx["@"]=2;
$19=(55).__at(_st(self._game())._height());
$ctx1.sendIdx["@"]=3;
$15=_st($16)._source_origin_size_position_("images/ovni/title.png",$17,$18,$19);
self._title_($15);
$21=_st($Text())._new();
$ctx1.sendIdx["new"]=3;
_st($21)._contents_("Press SPACE to start");
$ctx1.sendIdx["contents:"]=1;
_st($21)._color_("rgba(90,113,26,0.7)");
$ctx1.sendIdx["color:"]=1;
_st($21)._outlineColor_("rgba(242,246,144,0.8)");
_st($21)._outlineSize_((1));
_st($21)._fontName_("ChangaOne");
$ctx1.sendIdx["fontName:"]=1;
_st($21)._fontSize_((40));
$ctx1.sendIdx["fontSize:"]=1;
$23=$21;
$24=(180).__at((320));
$ctx1.sendIdx["@"]=4;
$22=_st($23)._position_($24);
$ctx1.sendIdx["position:"]=1;
$20=$22;
self._startGameText_($20);
$25=_st($Text())._new();
_st($25)._contents_("Bernat Romagosa 2014");
_st($25)._color_("rgba(90,113,26,0.7)");
_st($25)._fontName_("ChangaOne");
_st($25)._fontSize_((12));
$26=_st($25)._position_((580).__at((530)));
self._authorText_($26);
return self}, function($ctx1) {$ctx1.fill(self,"startScreen",{},globals.OVStartScreen)})},
args: [],
source: "startScreen\x0a\x09self saucers: self game saucers.\x0a\x09self saucers do: [ :each | \x0a\x09\x09each\x0a\x09\x09\x09state: OVSaucerWanderingState new;\x0a\x09\x09\x09currentFrameGroup: 'flying';\x0a\x09\x09\x09x: (self game width - 100) atRandom + 50;\x0a\x09\x09\x09y: (self game height - 100) atRandom + 50 ].\x0a\x09\x09\x09\x0a\x09self title: \x0a\x09\x09(Image new \x0a\x09\x09\x09source: 'images/ovni/title.png' \x0a\x09\x09\x09origin: 0@0 \x0a\x09\x09\x09size: 600@196 \x0a\x09\x09\x09position: 55 @ self game height).\x0a\x09\x09\x09\x0a\x09self startGameText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Press SPACE to start';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09outlineColor: 'rgba(242,246,144,0.8)';\x0a\x09\x09\x09outlineSize: 1;\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 40;\x0a\x09\x09\x09position: 180@320).\x0a\x09\x09\x09\x0a\x09self authorText:\x0a\x09\x09(Text new \x0a\x09\x09\x09contents: 'Bernat Romagosa 2014';\x0a\x09\x09\x09color: 'rgba(90,113,26,0.7)';\x0a\x09\x09\x09fontName: 'ChangaOne';\x0a\x09\x09\x09fontSize: 12;\x0a\x09\x09\x09position: 580@530)",
messageSends: ["saucers:", "saucers", "game", "do:", "state:", "new", "currentFrameGroup:", "x:", "+", "atRandom", "-", "width", "y:", "height", "title:", "source:origin:size:position:", "@", "startGameText:", "contents:", "color:", "outlineColor:", "outlineSize:", "fontName:", "fontSize:", "position:", "authorText:"],
referencedClasses: ["OVSaucerWanderingState", "Image", "Text"]
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
var $3,$2,$1,$4,$5,$6,$7,$9,$8;
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
$6=self._game();
$ctx2.sendIdx["game"]=1;
return _st(each)._stepOnGame_($6);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$ctx1.sendIdx["do:"]=1;
_st(self._inputHandler())._onKeyPressed_do_(_st($Key())._space(),(function(){
return smalltalk.withContext(function($ctx2) {
_st(self._saucers())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
_st(each)._state_(nil);
$7=_st(each)._x_((-100));
return $7;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)})}));
$9=self._game();
$ctx2.sendIdx["game"]=2;
$8=_st($9)._soundNamed_("select");
_st($8)._play();
return _st(self._game())._switchToScreenNamed_("mainMenu");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.OVStartScreen)})},
args: [],
source: "step\x0a\x09self title y > 40 ifTrue: [ self title y: self title y - 4 ].\x0a\x09self saucers do: [ :each | each stepOnGame: self game ].\x0a\x09self inputHandler onKeyPressed: Key space do: [ \x0a\x09\x09self saucers do: [ :each | \x0a\x09\x09\x09each \x0a\x09\x09\x09\x09state: nil; \x0a\x09\x09\x09\x09x: -100 ].\x0a\x09\x09(self game soundNamed: 'select') play.\x0a\x09\x09self game switchToScreenNamed: 'mainMenu' ]",
messageSends: ["ifTrue:", ">", "y", "title", "y:", "-", "do:", "saucers", "stepOnGame:", "game", "onKeyPressed:do:", "inputHandler", "space", "state:", "x:", "play", "soundNamed:", "switchToScreenNamed:"],
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
