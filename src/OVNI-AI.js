define("HOS/OVNI-AI", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "HOS/Ludus"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('OVNI-AI');
smalltalk.packages["OVNI-AI"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('OVAsteroidMovingState', globals.FSMState, ['goingDown'], 'OVNI-AI');
smalltalk.addMethod(
smalltalk.method({
selector: "checkBounceOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1,$5;
$4=self._context();
$ctx1.sendIdx["context"]=1;
$3=_st($4)._centre();
$ctx1.sendIdx["centre"]=1;
$2=_st($3)._y();
$ctx1.sendIdx["y"]=1;
$1=_st($2).__gt_eq(_st(aGame)._height());
if(smalltalk.assert($1)){
self._goingDown_(false);
$ctx1.sendIdx["goingDown:"]=1;
};
$5=_st(_st(_st(self._context())._centre())._y()).__lt_eq((0));
if(smalltalk.assert($5)){
self._goingDown_(true);
};
return self}, function($ctx1) {$ctx1.fill(self,"checkBounceOnGame:",{aGame:aGame},globals.OVAsteroidMovingState)})},
args: ["aGame"],
source: "checkBounceOnGame: aGame\x0a\x09self context centre y >= aGame height ifTrue: [ self goingDown: false ].\x0a\x09self context centre y <= 0 ifTrue: [ self goingDown: true ].",
messageSends: ["ifTrue:", ">=", "y", "centre", "context", "height", "goingDown:", "<="],
referencedClasses: []
}),
globals.OVAsteroidMovingState);

smalltalk.addMethod(
smalltalk.method({
selector: "goingDown",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@goingDown"];
if(($receiver = $2) == null || $receiver.isNil){
self["@goingDown"]=[true, false]._atRandom();
$1=self["@goingDown"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"goingDown",{},globals.OVAsteroidMovingState)})},
args: [],
source: "goingDown\x0a\x09^ goingDown ifNil: [ goingDown := #(true false) atRandom ]",
messageSends: ["ifNil:", "atRandom"],
referencedClasses: []
}),
globals.OVAsteroidMovingState);

smalltalk.addMethod(
smalltalk.method({
selector: "goingDown:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@goingDown"]=anObject;
return self},
args: ["anObject"],
source: "goingDown: anObject\x0a\x09goingDown := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVAsteroidMovingState);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$7,$6,$5,$4,$3,$8;
$1=self._goingDown();
if(smalltalk.assert($1)){
$2=self._context();
$ctx1.sendIdx["context"]=1;
$7=self._context();
$ctx1.sendIdx["context"]=2;
$6=_st($7)._toughness();
$ctx1.sendIdx["toughness"]=1;
$5=_st($6).__slash((2));
$ctx1.sendIdx["/"]=1;
$4=_st($5).__star((-1));
$ctx1.sendIdx["*"]=1;
$3=_st($4).__at((1));
$ctx1.sendIdx["@"]=1;
_st($2)._moveCentreBy_($3);
$ctx1.sendIdx["moveCentreBy:"]=1;
} else {
$8=self._context();
$ctx1.sendIdx["context"]=3;
_st($8)._moveCentreBy_(_st(_st(_st(_st(self._context())._toughness()).__slash((2))).__star((-1))).__at((-1)));
};
self._checkBounceOnGame_(aGame);
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVAsteroidMovingState)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self goingDown\x0a\x09\x09ifTrue: [ self context moveCentreBy: (self context toughness / 2 * -1) @ 1 ]\x0a\x09\x09ifFalse: [ self context moveCentreBy: (self context toughness / 2 * -1) @ -1 ].\x0a\x09self checkBounceOnGame: aGame",
messageSends: ["ifTrue:ifFalse:", "goingDown", "moveCentreBy:", "context", "@", "*", "/", "toughness", "checkBounceOnGame:"],
referencedClasses: []
}),
globals.OVAsteroidMovingState);



smalltalk.addClass('OVSaucerAvoidingState', globals.FSMState, ['bullet'], 'OVNI-AI');
smalltalk.addMethod(
smalltalk.method({
selector: "bullet",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@bullet"];
return $1;
},
args: [],
source: "bullet\x0a\x09^ bullet",
messageSends: [],
referencedClasses: []
}),
globals.OVSaucerAvoidingState);

smalltalk.addMethod(
smalltalk.method({
selector: "bullet:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@bullet"]=anObject;
return self},
args: ["anObject"],
source: "bullet: anObject\x0a\x09bullet := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVSaucerAvoidingState);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAwayFrom:onGame:",
protocol: 'control',
fn: function (aSprite,aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$8,$7,$6,$9,$5,$2;
$1=self._context();
$ctx1.sendIdx["context"]=1;
$4=_st(aGame)._difficulty();
$ctx1.sendIdx["difficulty"]=1;
$3=_st($4).__star((-1));
$ctx1.sendIdx["*"]=1;
$8=_st(aSprite)._centre();
$ctx1.sendIdx["centre"]=1;
$7=_st($8)._y();
$ctx1.sendIdx["y"]=1;
$6=_st($7).__gt(_st(_st(self._context())._centre())._y());
if(smalltalk.assert($6)){
$9=_st(aGame)._difficulty();
$ctx1.sendIdx["difficulty"]=2;
$5=_st($9).__star((-1));
} else {
$5=_st(aGame)._difficulty();
};
$2=_st($3).__at($5);
_st($1)._moveCentreBy_($2);
return self}, function($ctx1) {$ctx1.fill(self,"moveAwayFrom:onGame:",{aSprite:aSprite,aGame:aGame},globals.OVSaucerAvoidingState)})},
args: ["aSprite", "aGame"],
source: "moveAwayFrom: aSprite onGame: aGame\x0a\x09self context moveCentreBy: aGame difficulty * -1\x0a\x09\x09@ (aSprite centre y > self context centre y \x0a\x09\x09\x09ifTrue: [ aGame difficulty * -1 ] \x0a\x09\x09\x09ifFalse: [ aGame difficulty ]).",
messageSends: ["moveCentreBy:", "context", "@", "*", "difficulty", "ifTrue:ifFalse:", ">", "y", "centre"],
referencedClasses: []
}),
globals.OVSaucerAvoidingState);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
function $OVSaucerObservingState(){return globals.OVSaucerObservingState||(typeof OVSaucerObservingState=="undefined"?nil:OVSaucerObservingState)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$5,$4;
$1=self._bullet();
$ctx1.sendIdx["bullet"]=1;
self._moveAwayFrom_onGame_($1,aGame);
$3=self._context();
$ctx1.sendIdx["context"]=1;
$2=_st($3)._alignedWith_threshold_(self._bullet(),(50));
$ctx1.sendIdx["alignedWith:threshold:"]=1;
if(! smalltalk.assert($2)){
self._switchToState_($OVSaucerObservingState());
};
$5=self._context();
$ctx1.sendIdx["context"]=2;
$4=_st($5)._alignedWith_threshold_(_st(aGame)._ship(),(10));
if(smalltalk.assert($4)){
_st(self._context())._shootOnGame_(aGame);
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVSaucerAvoidingState)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self moveAwayFrom: self bullet onGame: aGame.\x0a\x09(self context alignedWith: self bullet threshold: 50) \x0a\x09\x09ifFalse: [ self switchToState: OVSaucerObservingState ].\x0a\x09(self context alignedWith: aGame ship threshold: 10)\x0a\x09\x09ifTrue: [ self context shootOnGame: aGame ].",
messageSends: ["moveAwayFrom:onGame:", "bullet", "ifFalse:", "alignedWith:threshold:", "context", "switchToState:", "ifTrue:", "ship", "shootOnGame:"],
referencedClasses: ["OVSaucerObservingState"]
}),
globals.OVSaucerAvoidingState);



smalltalk.addClass('OVSaucerObservingState', globals.FSMState, [], 'OVNI-AI');
smalltalk.addMethod(
smalltalk.method({
selector: "move",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._context())._moveCentreBy_((-2).__at(_st((5)._atRandom()).__minus((3))));
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.OVSaucerObservingState)})},
args: [],
source: "move\x0a\x09self context moveCentreBy: -2 @ (5 atRandom - 3).",
messageSends: ["moveCentreBy:", "context", "@", "-", "atRandom"],
referencedClasses: []
}),
globals.OVSaucerObservingState);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
function $OVSaucerAvoidingState(){return globals.OVSaucerAvoidingState||(typeof OVSaucerAvoidingState=="undefined"?nil:OVSaucerAvoidingState)}
function $OVSaucerSeekingState(){return globals.OVSaucerSeekingState||(typeof OVSaucerSeekingState=="undefined"?nil:OVSaucerSeekingState)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5,$receiver;
$2=self._context();
$ctx1.sendIdx["context"]=1;
$1=_st($2)._alignedWithWhichOf_threshold_(_st(aGame)._bullets(),(50));
if(($receiver = $1) == null || $receiver.isNil){
$6=self._context();
$ctx1.sendIdx["context"]=3;
$5=_st($6)._alignedWith_threshold_(_st(aGame)._ship(),(10));
if(smalltalk.assert($5)){
_st(self._context())._shootOnGame_(aGame);
} else {
self._switchToState_($OVSaucerSeekingState());
};
self._move();
} else {
var bullet;
bullet=$receiver;
self._switchToState_($OVSaucerAvoidingState());
$ctx1.sendIdx["switchToState:"]=1;
$4=self._context();
$ctx1.sendIdx["context"]=2;
$3=_st($4)._currentState();
_st($3)._bullet_(bullet);
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVSaucerObservingState)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09(self context alignedWithWhichOf: aGame bullets threshold: 50)\x0a\x09\x09ifNotNil: [ :bullet |\x0a\x09\x09\x09self switchToState: OVSaucerAvoidingState.\x0a\x09\x09\x09self context currentState bullet: bullet ]\x0a\x09\x09ifNil: [\x0a\x09\x09\x09(self context alignedWith: aGame ship threshold: 10)\x0a\x09\x09\x09\x09ifFalse: [ self switchToState: OVSaucerSeekingState ]\x0a\x09\x09\x09\x09ifTrue: [ self context shootOnGame: aGame ].\x0a\x09\x09\x09self move ]",
messageSends: ["ifNotNil:ifNil:", "alignedWithWhichOf:threshold:", "context", "bullets", "switchToState:", "bullet:", "currentState", "ifFalse:ifTrue:", "alignedWith:threshold:", "ship", "shootOnGame:", "move"],
referencedClasses: ["OVSaucerAvoidingState", "OVSaucerSeekingState"]
}),
globals.OVSaucerObservingState);



smalltalk.addClass('OVSaucerSeekingState', globals.FSMState, [], 'OVNI-AI');
smalltalk.addMethod(
smalltalk.method({
selector: "moveTowards:onGame:",
protocol: 'control',
fn: function (aSprite,aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$8,$7,$6,$5,$2;
$1=self._context();
$ctx1.sendIdx["context"]=1;
$4=_st(aGame)._difficulty();
$ctx1.sendIdx["difficulty"]=1;
$3=_st($4).__star((-1));
$ctx1.sendIdx["*"]=1;
$8=_st(aSprite)._centre();
$ctx1.sendIdx["centre"]=1;
$7=_st($8)._y();
$ctx1.sendIdx["y"]=1;
$6=_st($7).__gt(_st(_st(self._context())._centre())._y());
if(smalltalk.assert($6)){
$5=_st(aGame)._difficulty();
$ctx1.sendIdx["difficulty"]=2;
} else {
$5=_st(_st(aGame)._difficulty()).__star((-1));
};
$2=_st($3).__at($5);
_st($1)._moveCentreBy_($2);
return self}, function($ctx1) {$ctx1.fill(self,"moveTowards:onGame:",{aSprite:aSprite,aGame:aGame},globals.OVSaucerSeekingState)})},
args: ["aSprite", "aGame"],
source: "moveTowards: aSprite onGame: aGame\x0a\x09self context moveCentreBy: aGame difficulty * -1\x0a\x09\x09@ (aSprite centre y > self context centre y \x0a\x09\x09\x09ifTrue: [ aGame difficulty ] \x0a\x09\x09\x09ifFalse: [ aGame difficulty * -1 ]).",
messageSends: ["moveCentreBy:", "context", "@", "*", "difficulty", "ifTrue:ifFalse:", ">", "y", "centre"],
referencedClasses: []
}),
globals.OVSaucerSeekingState);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
function $OVSaucerObservingState(){return globals.OVSaucerObservingState||(typeof OVSaucerObservingState=="undefined"?nil:OVSaucerObservingState)}
function $OVSaucerAvoidingState(){return globals.OVSaucerAvoidingState||(typeof OVSaucerAvoidingState=="undefined"?nil:OVSaucerAvoidingState)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$5,$4,$receiver;
$1=_st(aGame)._ship();
$ctx1.sendIdx["ship"]=1;
self._moveTowards_onGame_($1,aGame);
$3=self._context();
$ctx1.sendIdx["context"]=1;
$2=_st($3)._alignedWith_threshold_(_st(aGame)._ship(),(10));
if(smalltalk.assert($2)){
self._switchToState_($OVSaucerObservingState());
$ctx1.sendIdx["switchToState:"]=1;
};
$5=self._context();
$ctx1.sendIdx["context"]=2;
$4=_st($5)._alignedWithWhichOf_threshold_(_st(aGame)._bullets(),(25));
if(($receiver = $4) == null || $receiver.isNil){
$4;
} else {
var bullet;
bullet=$receiver;
self._switchToState_($OVSaucerAvoidingState());
_st(_st(self._context())._currentState())._bullet_(bullet);
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVSaucerSeekingState)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self moveTowards: aGame ship onGame: aGame.\x0a\x09(self context alignedWith: aGame ship threshold: 10)\x0a\x09\x09ifTrue: [ self switchToState: OVSaucerObservingState ].\x0a\x09(self context alignedWithWhichOf: aGame bullets threshold: 25) \x0a\x09\x09ifNotNil: [ :bullet | \x0a\x09\x09\x09self switchToState: OVSaucerAvoidingState.\x0a\x09\x09\x09self context currentState bullet: bullet ]",
messageSends: ["moveTowards:onGame:", "ship", "ifTrue:", "alignedWith:threshold:", "context", "switchToState:", "ifNotNil:", "alignedWithWhichOf:threshold:", "bullets", "bullet:", "currentState"],
referencedClasses: ["OVSaucerObservingState", "OVSaucerAvoidingState"]
}),
globals.OVSaucerSeekingState);



smalltalk.addClass('OVSaucerWanderingState', globals.FSMState, [], 'OVNI-AI');
smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
$1=self._context();
$4=(3)._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$3=_st($4).__minus((2));
$ctx1.sendIdx["-"]=1;
$2=_st($3).__at(_st((3)._atRandom()).__minus((2)));
_st($1)._moveCentreBy_($2);
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVSaucerWanderingState)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self context moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).",
messageSends: ["moveCentreBy:", "context", "@", "-", "atRandom"],
referencedClasses: []
}),
globals.OVSaucerWanderingState);


});
