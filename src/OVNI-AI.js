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



smalltalk.addClass('OVBossArrivingState', globals.FSMState, [], 'OVNI-AI');
smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._context())._centre_((900).__at((250)));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.OVBossArrivingState)})},
args: [],
source: "start\x0a\x09self context centre: 900@250.",
messageSends: ["centre:", "context", "@"],
referencedClasses: []
}),
globals.OVBossArrivingState);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
function $OVBossCircularMovementState(){return globals.OVBossCircularMovementState||(typeof OVBossCircularMovementState=="undefined"?nil:OVBossCircularMovementState)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._context();
$ctx1.sendIdx["context"]=1;
_st($1)._moveCentreBy_((-2).__at(_st((3)._atRandom()).__minus((2))));
$2=_st(_st(self._context())._x()).__lt((550));
if(smalltalk.assert($2)){
_st(aGame)._canShoot_(true);
self._switchToState_($OVBossCircularMovementState());
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVBossArrivingState)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self context moveCentreBy: -2 @ (3 atRandom - 2).\x0a\x09self context x < 550 ifTrue: [\x0a\x09\x09aGame canShoot: true.\x0a\x09\x09self switchToState: OVBossCircularMovementState ]",
messageSends: ["moveCentreBy:", "context", "@", "-", "atRandom", "ifTrue:", "<", "x", "canShoot:", "switchToState:"],
referencedClasses: ["OVBossCircularMovementState"]
}),
globals.OVBossArrivingState);



smalltalk.addClass('OVBossCircularMovementState', globals.FSMState, ['currentAngle', 'circleCentre'], 'OVNI-AI');
smalltalk.addMethod(
smalltalk.method({
selector: "circleCentre",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@circleCentre"];
return $1;
},
args: [],
source: "circleCentre\x0a\x09^ circleCentre",
messageSends: [],
referencedClasses: []
}),
globals.OVBossCircularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "circleCentre:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@circleCentre"]=anObject;
return self},
args: ["anObject"],
source: "circleCentre: anObject\x0a\x09circleCentre := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVBossCircularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "currentAngle",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentAngle"];
return $1;
},
args: [],
source: "currentAngle\x0a\x09^ currentAngle",
messageSends: [],
referencedClasses: []
}),
globals.OVBossCircularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "currentAngle:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@currentAngle"]=anObject;
return self},
args: ["anObject"],
source: "currentAngle: anObject\x0a\x09currentAngle := anObject",
messageSends: [],
referencedClasses: []
}),
globals.OVBossCircularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$7,$6,$8,$5,$4,$2;
$1=self._context();
$3=self._circleCentre();
$7=self._currentAngle();
$ctx1.sendIdx["currentAngle"]=1;
$6=_st($7)._cos();
$8=self._radius();
$ctx1.sendIdx["radius"]=1;
$5=_st($6).__star($8);
$ctx1.sendIdx["*"]=1;
$4=_st($5).__at(_st(_st(self._currentAngle())._sin()).__star(self._radius()));
$2=_st($3).__plus($4);
_st($1)._centre_($2);
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.OVBossCircularMovementState)})},
args: [],
source: "move\x0a\x09self context centre: self circleCentre + ((self currentAngle cos * self radius) @ (self currentAngle sin * self radius))",
messageSends: ["centre:", "context", "+", "circleCentre", "@", "*", "cos", "currentAngle", "radius", "sin"],
referencedClasses: []
}),
globals.OVBossCircularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
protocol: 'accessing',
fn: function (){
var self=this;
return (100);
},
args: [],
source: "radius\x0a\x09^ 100",
messageSends: [],
referencedClasses: []
}),
globals.OVBossCircularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._currentAngle_((0));
$1=self._circleCentre_(_st(_st(self._context())._centre()).__minus(_st(self._radius()).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.OVBossCircularMovementState)})},
args: [],
source: "start\x0a\x09self \x0a\x09\x09currentAngle: 0;\x0a\x09\x09circleCentre: self context centre - (self radius @ 0)",
messageSends: ["currentAngle:", "circleCentre:", "-", "centre", "context", "@", "radius"],
referencedClasses: []
}),
globals.OVBossCircularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
function $Number(){return globals.Number||(typeof Number=="undefined"?nil:Number)}
function $OVBossRandomWarpState(){return globals.OVBossRandomWarpState||(typeof OVBossRandomWarpState=="undefined"?nil:OVBossRandomWarpState)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
self._move();
$2=self._currentAngle();
$ctx1.sendIdx["currentAngle"]=1;
$1=_st($2).__plus((0.1));
self._currentAngle_($1);
$3=_st(self._currentAngle()).__gt(_st(_st($Number())._pi()).__star((8)));
if(smalltalk.assert($3)){
self._switchToState_($OVBossRandomWarpState());
};
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVBossCircularMovementState)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self move.\x0a\x09self currentAngle: self currentAngle + 0.1.\x0a\x09self currentAngle > (Number pi * 8) ifTrue: [ self switchToState: OVBossRandomWarpState ]",
messageSends: ["move", "currentAngle:", "+", "currentAngle", "ifTrue:", ">", "*", "pi", "switchToState:"],
referencedClasses: ["Number", "OVBossRandomWarpState"]
}),
globals.OVBossCircularMovementState);



smalltalk.addClass('OVBossRandomWarpState', globals.FSMState, [], 'OVNI-AI');
smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
function $OVBossRectangularMovementState(){return globals.OVBossRectangularMovementState||(typeof OVBossRectangularMovementState=="undefined"?nil:OVBossRectangularMovementState)}
return smalltalk.withContext(function($ctx1) { 
_st(aGame)._everyStepNumber_do_((100),(function(){
return smalltalk.withContext(function($ctx2) {
return self._warpOnGame_(aGame);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["everyStepNumber:do:"]=1;
_st(aGame)._everyStepNumber_do_((1000),(function(){
return smalltalk.withContext(function($ctx2) {
return self._switchToState_($OVBossRectangularMovementState());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVBossRandomWarpState)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09aGame everyStepNumber: 100 do: [ self warpOnGame: aGame ].\x0a\x09aGame everyStepNumber: 1000 do: [ self switchToState: OVBossRectangularMovementState ].",
messageSends: ["everyStepNumber:do:", "warpOnGame:", "switchToState:"],
referencedClasses: ["OVBossRectangularMovementState"]
}),
globals.OVBossRandomWarpState);

smalltalk.addMethod(
smalltalk.method({
selector: "warpOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$6,$5,$10,$9,$12,$11,$8,$7,$4,$15,$14,$13,$3,$19,$21,$20,$18,$17,$16,$2;
$1=self._context();
$ctx1.sendIdx["context"]=1;
$6=_st(aGame)._width();
$ctx1.sendIdx["width"]=1;
$5=_st($6).__slash((2));
$ctx1.sendIdx["/"]=1;
$10=_st(aGame)._width();
$ctx1.sendIdx["width"]=2;
$9=_st($10).__slash((2));
$ctx1.sendIdx["/"]=2;
$12=self._context();
$ctx1.sendIdx["context"]=2;
$11=_st($12)._width();
$ctx1.sendIdx["width"]=3;
$8=_st($9).__minus($11);
$ctx1.sendIdx["-"]=1;
$7=_st($8)._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$4=_st($5).__plus($7);
$ctx1.sendIdx["+"]=2;
$15=self._context();
$ctx1.sendIdx["context"]=3;
$14=_st($15)._width();
$13=_st($14).__slash((2));
$ctx1.sendIdx["/"]=3;
$3=_st($4).__plus($13);
$ctx1.sendIdx["+"]=1;
$19=_st(aGame)._height();
$ctx1.sendIdx["height"]=1;
$21=self._context();
$ctx1.sendIdx["context"]=4;
$20=_st($21)._height();
$ctx1.sendIdx["height"]=2;
$18=_st($19).__minus($20);
$17=_st($18)._atRandom();
$16=_st($17).__plus(_st(_st(self._context())._height()).__slash((2)));
$2=_st($3).__at($16);
_st($1)._centre_($2);
return self}, function($ctx1) {$ctx1.fill(self,"warpOnGame:",{aGame:aGame},globals.OVBossRandomWarpState)})},
args: ["aGame"],
source: "warpOnGame: aGame\x0a\x09self context centre: \x0a\x09\x09((aGame width / 2) + ((aGame width / 2) - self context width) atRandom + (self context width / 2))\x0a\x09\x09\x09@ ((aGame height - self context height) atRandom + (self context height / 2))",
messageSends: ["centre:", "context", "@", "+", "/", "width", "atRandom", "-", "height"],
referencedClasses: []
}),
globals.OVBossRandomWarpState);



smalltalk.addClass('OVBossRectangularMovementState', globals.FSMState, ['currentDestination'], 'OVNI-AI');
smalltalk.addMethod(
smalltalk.method({
selector: "currentDestination",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@currentDestination"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentDestination"]=self._startPosition();
$1=self["@currentDestination"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentDestination",{},globals.OVBossRectangularMovementState)})},
args: [],
source: "currentDestination\x0a\x09^ currentDestination ifNil: [ currentDestination := self startPosition ]",
messageSends: ["ifNil:", "startPosition"],
referencedClasses: []
}),
globals.OVBossRectangularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "currentDestination:",
protocol: 'accessing',
fn: function (aPoint){
var self=this;
self["@currentDestination"]=aPoint;
return self},
args: ["aPoint"],
source: "currentDestination: aPoint\x0a\x09currentDestination := aPoint",
messageSends: [],
referencedClasses: []
}),
globals.OVBossRectangularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$1;
$3=self._context();
$ctx1.sendIdx["context"]=1;
$2=_st($3)._centre();
$4=self._currentDestination();
$ctx1.sendIdx["currentDestination"]=1;
$1=_st($2).__eq($4);
if(smalltalk.assert($1)){
self._nextDestination();
} else {
_st(self._context())._moveCentreTowards_speed_(self._currentDestination(),(4));
};
return self}, function($ctx1) {$ctx1.fill(self,"move",{},globals.OVBossRectangularMovementState)})},
args: [],
source: "move\x0a\x09self context centre = self currentDestination \x0a\x09\x09ifTrue: [ self nextDestination ]\x0a\x09\x09ifFalse: [ self context moveCentreTowards: self currentDestination speed: 4 ]",
messageSends: ["ifTrue:ifFalse:", "=", "centre", "context", "currentDestination", "nextDestination", "moveCentreTowards:speed:"],
referencedClasses: []
}),
globals.OVBossRectangularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "nextDestination",
protocol: 'movement',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$2,$1;
$3=_st($Dictionary())._new();
$4=$3;
$5=(640).__at((80));
$ctx1.sendIdx["@"]=1;
$6=(80).__at((80));
$ctx1.sendIdx["@"]=2;
_st($4)._at_put_($5,$6);
$ctx1.sendIdx["at:put:"]=1;
$7=$3;
$8=(80).__at((80));
$ctx1.sendIdx["@"]=3;
$9=(80).__at((460));
$ctx1.sendIdx["@"]=4;
_st($7)._at_put_($8,$9);
$ctx1.sendIdx["at:put:"]=2;
$10=$3;
$11=(80).__at((460));
$ctx1.sendIdx["@"]=5;
$12=(640).__at((460));
$ctx1.sendIdx["@"]=6;
_st($10)._at_put_($11,$12);
$ctx1.sendIdx["at:put:"]=3;
$13=$3;
$14=(640).__at((460));
$ctx1.sendIdx["@"]=7;
_st($13)._at_put_($14,(640).__at((80)));
$15=_st($3)._yourself();
$2=$15;
$1=_st($2)._at_(self._currentDestination());
self._currentDestination_($1);
return self}, function($ctx1) {$ctx1.fill(self,"nextDestination",{},globals.OVBossRectangularMovementState)})},
args: [],
source: "nextDestination\x0a\x09self currentDestination:\x0a\x09\x09((Dictionary new\x0a\x09\x09\x09at: 640@80 put: 80@80;\x0a\x09\x09\x09at: 80@80 put: 80@460;\x0a\x09\x09\x09at: 80@460 put: 640@460;\x0a\x09\x09\x09at: 640@460 put: 640@80;\x0a\x09\x09\x09yourself) at: self currentDestination)",
messageSends: ["currentDestination:", "at:", "at:put:", "new", "@", "yourself", "currentDestination"],
referencedClasses: ["Dictionary"]
}),
globals.OVBossRectangularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "startPosition",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(640).__at((80));
return $1;
}, function($ctx1) {$ctx1.fill(self,"startPosition",{},globals.OVBossRectangularMovementState)})},
args: [],
source: "startPosition\x0a\x09^ 640@80",
messageSends: ["@"],
referencedClasses: []
}),
globals.OVBossRectangularMovementState);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOnGame:",
protocol: 'control',
fn: function (aGame){
var self=this;
function $OVBossCircularMovementState(){return globals.OVBossCircularMovementState||(typeof OVBossCircularMovementState=="undefined"?nil:OVBossCircularMovementState)}
return smalltalk.withContext(function($ctx1) { 
self._move();
_st(aGame)._everyStepNumber_do_((2000),(function(){
return smalltalk.withContext(function($ctx2) {
return self._switchToState_($OVBossCircularMovementState());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVBossRectangularMovementState)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self move.\x0a\x09aGame everyStepNumber: 2000 do: [ self switchToState: OVBossCircularMovementState ].",
messageSends: ["move", "everyStepNumber:do:", "switchToState:"],
referencedClasses: ["OVBossCircularMovementState"]
}),
globals.OVBossRectangularMovementState);



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



smalltalk.addClass('OVWanderingState', globals.FSMState, [], 'OVNI-AI');
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
return self}, function($ctx1) {$ctx1.fill(self,"stepOnGame:",{aGame:aGame},globals.OVWanderingState)})},
args: ["aGame"],
source: "stepOnGame: aGame\x0a\x09self context moveCentreBy: (3 atRandom - 2) @ (3 atRandom - 2).",
messageSends: ["moveCentreBy:", "context", "@", "-", "atRandom"],
referencedClasses: []
}),
globals.OVWanderingState);


});
