define("HOS/Ludus-Examples", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "HOS/Ludus", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Ludus-Examples');
smalltalk.packages["Ludus-Examples"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('MemoryCard', globals.Sprite, ['animalName'], 'Ludus-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "animalName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@animalName"];
return $1;
},
args: [],
source: "animalName\x0a\x09^ animalName",
messageSends: [],
referencedClasses: []
}),
globals.MemoryCard);

smalltalk.addMethod(
smalltalk.method({
selector: "animalName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@animalName"]=aString;
return self},
args: ["aString"],
source: "animalName: aString\x0a\x09animalName := aString",
messageSends: [],
referencedClasses: []
}),
globals.MemoryCard);

smalltalk.addMethod(
smalltalk.method({
selector: "hideAnimal",
protocol: 'animation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._startAnimation();
return self}, function($ctx1) {$ctx1.fill(self,"hideAnimal",{},globals.MemoryCard)})},
args: [],
source: "hideAnimal\x0a\x09self \x0a\x09\x09startAnimation.",
messageSends: ["startAnimation"],
referencedClasses: []
}),
globals.MemoryCard);

smalltalk.addMethod(
smalltalk.method({
selector: "showAnimal",
protocol: 'animation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._restartAnimation();
$1=self._stopAnimation();
return self}, function($ctx1) {$ctx1.fill(self,"showAnimal",{},globals.MemoryCard)})},
args: [],
source: "showAnimal\x0a\x09self \x0a\x09\x09restartAnimation;\x0a\x09\x09stopAnimation.",
messageSends: ["restartAnimation", "stopAnimation"],
referencedClasses: []
}),
globals.MemoryCard);



smalltalk.addClass('MemoryGame', globals.Game, ['cards', 'lastSelectedCard'], 'Ludus-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "addCardForAnimal:inPosition:",
protocol: 'sprites',
fn: function (anAnimal,aPosition){
var self=this;
function $MemoryCard(){return globals.MemoryCard||(typeof MemoryCard=="undefined"?nil:MemoryCard)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
$1=self._cards();
$3=_st($MemoryCard())._new();
_st($3)._animalName_(anAnimal);
$4=$3;
$5=_st("images/memory/".__comma(anAnimal)).__comma(".png");
$ctx1.sendIdx[","]=1;
_st($4)._spriteSheet_($5);
$6=$3;
$7=(0).__at((0));
$ctx1.sendIdx["@"]=1;
_st($6)._addFrameGroupNamed_origin_size_frameCount_("card",$7,(100).__at((100)),(2));
_st($3)._centre_(aPosition);
_st($3)._frameRate_((30));
_st($3)._loop_(false);
_st($3)._stopAnimation();
$8=_st($3)._hideAnimal();
$2=$8;
_st($1)._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addCardForAnimal:inPosition:",{anAnimal:anAnimal,aPosition:aPosition},globals.MemoryGame)})},
args: ["anAnimal", "aPosition"],
source: "addCardForAnimal: anAnimal inPosition: aPosition\x0a\x0a\x09self cards add:\x0a\x09\x09(MemoryCard new\x0a\x09\x09\x09animalName: anAnimal;\x0a\x09\x09\x09spriteSheet: 'images/memory/' , anAnimal , '.png';\x0a\x09\x09\x09addFrameGroupNamed: 'card' origin: 0@0 size: 100@100 frameCount: 2;\x0a\x09\x09\x09centre: aPosition;\x0a\x09\x09\x09frameRate: 30;\x0a\x09\x09\x09loop: false;\x0a\x09\x09\x09stopAnimation;\x0a\x09\x09\x09hideAnimal)",
messageSends: ["add:", "cards", "animalName:", "new", "spriteSheet:", ",", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:", "frameRate:", "loop:", "stopAnimation", "hideAnimal"],
referencedClasses: ["MemoryCard"]
}),
globals.MemoryGame);

smalltalk.addMethod(
smalltalk.method({
selector: "addCards",
protocol: 'sprites',
fn: function (){
var self=this;
var positions;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
$1=(50).__at((50));
$ctx1.sendIdx["@"]=1;
$2=(150).__at((50));
$ctx1.sendIdx["@"]=2;
$3=(250).__at((50));
$ctx1.sendIdx["@"]=3;
$4=(350).__at((50));
$ctx1.sendIdx["@"]=4;
$5=(450).__at((50));
$ctx1.sendIdx["@"]=5;
$6=(50).__at((150));
$ctx1.sendIdx["@"]=6;
$7=(150).__at((150));
$ctx1.sendIdx["@"]=7;
$8=(250).__at((150));
$ctx1.sendIdx["@"]=8;
$9=(350).__at((150));
$ctx1.sendIdx["@"]=9;
positions=[$1,$2,$3,$4,$5,$6,$7,$8,$9,(450).__at((150))];
["cat", "cow", "mouse", "pig", "sheep"]._do_((function(eachAnimal){
return smalltalk.withContext(function($ctx2) {
$10=_st("sounds/".__comma(eachAnimal)).__comma(".ogg");
$ctx2.sendIdx[","]=1;
self._addSound_($10);
return (2)._timesRepeat_((function(){
var position;
return smalltalk.withContext(function($ctx3) {
position=_st(positions)._atRandom();
position;
_st(positions)._remove_(position);
return self._addCardForAnimal_inPosition_(eachAnimal,position);
}, function($ctx3) {$ctx3.fillBlock({position:position},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({eachAnimal:eachAnimal},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addCards",{positions:positions},globals.MemoryGame)})},
args: [],
source: "addCards\x0a\x09\x0a\x09| positions |\x0a\x0a\x09positions := \x0a\x09\x09{50@50.  150@50.  250@50.  350@50.  450@50.\x0a\x09\x09 50@150. 150@150. 250@150. 350@150. 450@150}.\x0a\x09\x0a\x09#('cat' 'cow' 'mouse' 'pig' 'sheep') do: \x0a\x09\x09[ :eachAnimal |\x0a\x09\x09\x09self addSound: 'sounds/' , eachAnimal , '.ogg'.\x0a\x09\x09\x092 timesRepeat: [\x0a\x09\x09\x09\x09| position |\x0a\x09\x09\x09\x09position := positions atRandom.\x0a\x09\x09\x09\x09positions remove: position.\x0a\x09\x09\x09\x09self addCardForAnimal: eachAnimal inPosition: position.\x0a\x09\x09\x09]\x0a\x09\x09]",
messageSends: ["@", "do:", "addSound:", ",", "timesRepeat:", "atRandom", "remove:", "addCardForAnimal:inPosition:"],
referencedClasses: []
}),
globals.MemoryGame);

smalltalk.addMethod(
smalltalk.method({
selector: "cards",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@cards"];
if(($receiver = $2) == null || $receiver.isNil){
self["@cards"]=[];
$1=self["@cards"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cards",{},globals.MemoryGame)})},
args: [],
source: "cards\x0a\x09^ cards ifNil: [ cards := #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MemoryGame);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._drawSpriteCollection_(self["@cards"]);
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.MemoryGame)})},
args: [],
source: "draw\x0a\x09self drawSpriteCollection: cards",
messageSends: ["drawSpriteCollection:"],
referencedClasses: []
}),
globals.MemoryGame);

smalltalk.addMethod(
smalltalk.method({
selector: "handleCardClick",
protocol: 'events',
fn: function (){
var self=this;
var clickedCard;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$7,$6,$8,$receiver;
clickedCard=_st(self["@cards"])._detect_ifNone_((function(which){
return smalltalk.withContext(function($ctx2) {
return _st(which)._touchingMousePointer_(self._mousePosition());
}, function($ctx2) {$ctx2.fillBlock({which:which},$ctx1,1)})}),(function(){
return nil;
}));
$1=clickedCard;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$3=_st(clickedCard)._animalName();
$ctx1.sendIdx["animalName"]=1;
$2=self._soundNamed_($3);
_st($2)._play();
_st(clickedCard)._showAnimal();
$4=self["@lastSelectedCard"];
if(($receiver = $4) == null || $receiver.isNil){
self["@lastSelectedCard"]=clickedCard;
self["@lastSelectedCard"];
} else {
$5=_st(self["@lastSelectedCard"]).__eq(clickedCard);
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($5)){
_st(clickedCard)._hideAnimal();
$ctx1.sendIdx["hideAnimal"]=1;
} else {
$7=_st(self["@lastSelectedCard"])._animalName();
$ctx1.sendIdx["animalName"]=2;
$6=_st($7).__eq(_st(clickedCard)._animalName());
if(smalltalk.assert($6)){
_st($Transcript())._show_("yay :)");
$8=_st($Transcript())._cr();
$8;
} else {
_st(self["@lastSelectedCard"])._hideAnimal();
$ctx1.sendIdx["hideAnimal"]=2;
_st(clickedCard)._hideAnimal();
};
};
self["@lastSelectedCard"]=nil;
self["@lastSelectedCard"];
};
};
return self}, function($ctx1) {$ctx1.fill(self,"handleCardClick",{clickedCard:clickedCard},globals.MemoryGame)})},
args: [],
source: "handleCardClick\x0a\x0a\x09| clickedCard |\x0a\x09\x0a\x09clickedCard := cards detect: [ :which | which touchingMousePointer: self mousePosition ] ifNone: [ nil ].\x0a\x09\x0a\x09clickedCard ifNotNil: [\x0a\x09\x09(self soundNamed: clickedCard animalName) play.\x0a\x09\x09clickedCard showAnimal.\x0a\x09\x09lastSelectedCard \x0a\x09\x09\x09ifNil: [ lastSelectedCard := clickedCard ]\x0a\x09\x09\x09ifNotNil: [\x0a\x09\x09\x09\x09lastSelectedCard = clickedCard \x0a\x09\x09\x09\x09\x09ifTrue: [ clickedCard hideAnimal ]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09lastSelectedCard animalName = clickedCard animalName \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [ Transcript show: 'yay :)'; cr ]\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09lastSelectedCard hideAnimal.\x0a\x09\x09\x09\x09\x09\x09\x09\x09clickedCard hideAnimal ]].\x0a\x09\x09\x09\x09lastSelectedCard := nil.\x0a\x09\x09\x09]\x0a\x09]",
messageSends: ["detect:ifNone:", "touchingMousePointer:", "mousePosition", "ifNotNil:", "play", "soundNamed:", "animalName", "showAnimal", "ifNil:ifNotNil:", "ifTrue:ifFalse:", "=", "hideAnimal", "show:", "cr"],
referencedClasses: ["Transcript"]
}),
globals.MemoryGame);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._width_((500));
$1=self._height_((200));
self._addCards();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.MemoryGame)})},
args: [],
source: "startGame\x0a\x09self \x0a\x09\x09width: 500;\x0a\x09\x09height: 200.\x0a\x09\x0a\x09self addCards",
messageSends: ["width:", "height:", "addCards"],
referencedClasses: []
}),
globals.MemoryGame);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._onMouseClickDo_((function(){
return smalltalk.withContext(function($ctx2) {
return self._handleCardClick();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.MemoryGame)})},
args: [],
source: "step\x0a\x09self onMouseClickDo: [\x0a\x09\x09self handleCardClick\x0a\x09]",
messageSends: ["onMouseClickDo:", "handleCardClick"],
referencedClasses: []
}),
globals.MemoryGame);



smalltalk.addClass('Pong', globals.Game, ['ball', 'score', 'paddle1', 'paddle2', 'speed', 'ai'], 'Ludus-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "bounceAgainstPaddle1",
protocol: 'not yet classified',
fn: function (){
var self=this;
var y;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$5,$3,$2;
y=self._verticalAngleFor_(self["@paddle1"]);
$1=self["@ball"];
$4=_st(self["@ball"])._direction();
$5=(-1).__at((0));
$ctx1.sendIdx["@"]=1;
$3=_st($4).__star($5);
$2=_st($3).__plus((0).__at(y));
_st($1)._direction_($2);
_st(self._soundNamed_("click"))._play();
return self}, function($ctx1) {$ctx1.fill(self,"bounceAgainstPaddle1",{y:y},globals.Pong)})},
args: [],
source: "bounceAgainstPaddle1\x0a\x09|y|\x0a\x09y := self verticalAngleFor: paddle1.\x0a\x09ball direction: (ball direction * (-1@ 0)) + (0 @ y).\x0a\x09(self soundNamed: 'click') play.",
messageSends: ["verticalAngleFor:", "direction:", "+", "*", "direction", "@", "play", "soundNamed:"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "bounceAgainstPaddle2",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$5,$3,$2;
$1=self["@ball"];
$4=_st(self["@ball"])._direction();
$5=(-1).__at((0));
$ctx1.sendIdx["@"]=1;
$3=_st($4).__star($5);
$2=_st($3).__plus((0).__at(self._verticalAngleFor_(self["@paddle2"])));
_st($1)._direction_($2);
_st(self._soundNamed_("click"))._play();
return self}, function($ctx1) {$ctx1.fill(self,"bounceAgainstPaddle2",{},globals.Pong)})},
args: [],
source: "bounceAgainstPaddle2\x0a\x09ball direction: (ball direction * (-1@ 0)) + (0 @ (self verticalAngleFor: paddle2)).\x0a\x09(self soundNamed: 'click') play.",
messageSends: ["direction:", "+", "*", "direction", "@", "verticalAngleFor:", "play", "soundNamed:"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "createBall",
protocol: 'not yet classified',
fn: function (){
var self=this;
var offsetX,offsetY;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5;
self["@ball"]=_st(_st($Sprite())._new())._spriteSheet_("images/ball.png");
$1=self["@ball"];
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$3=(15).__at((15));
$ctx1.sendIdx["@"]=2;
_st($1)._addFrameGroupNamed_origin_size_frameCount_("moving",$2,$3,(6));
$4=self["@ball"];
$6=_st(self._width()).__slash((2));
$ctx1.sendIdx["/"]=1;
$5=_st($6).__at(_st(self._height()).__slash((2)));
_st($4)._centre_($5);
_st(self["@ball"])._frameRate_((5));
return self}, function($ctx1) {$ctx1.fill(self,"createBall",{offsetX:offsetX,offsetY:offsetY},globals.Pong)})},
args: [],
source: "createBall\x0a\x09|offsetX offsetY|\x0a\x09ball := Sprite new spriteSheet: 'images/ball.png'.\x0a\x09ball addFrameGroupNamed: 'moving' origin: (0@0) size: (15@15) frameCount: 6.\x0a\x09ball centre:  ((self width / 2) @ (self height / 2)).\x0a\x09ball frameRate: 5.",
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:", "/", "width", "height", "frameRate:"],
referencedClasses: ["Sprite"]
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "createPaddle1",
protocol: 'not yet classified',
fn: function (){
var self=this;
var verticalOffset;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
self["@paddle1"]=_st(_st($Sprite())._new())._spriteSheet_("images/paddle.png");
$1=self["@paddle1"];
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$3=(15).__at((80));
$ctx1.sendIdx["@"]=2;
_st($1)._addFrameGroupNamed_origin_size_frameCount_("still",$2,$3,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$4=self["@paddle1"];
$5=(15).__at((0));
$ctx1.sendIdx["@"]=3;
$6=(15).__at((80));
$ctx1.sendIdx["@"]=4;
_st($4)._addFrameGroupNamed_origin_size_frameCount_("up",$5,$6,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
$7=self["@paddle1"];
$8=(30).__at((0));
$ctx1.sendIdx["@"]=5;
_st($7)._addFrameGroupNamed_origin_size_frameCount_("down",$8,(15).__at((80)),(1));
$9=_st(self["@paddle1"])._height();
$ctx1.sendIdx["height"]=1;
verticalOffset=_st($9).__slash((2));
$ctx1.sendIdx["/"]=1;
_st(self["@paddle1"])._x_((10));
_st(self["@paddle1"])._y_(_st(_st(self._height()).__slash((2))).__minus(verticalOffset));
return self}, function($ctx1) {$ctx1.fill(self,"createPaddle1",{verticalOffset:verticalOffset},globals.Pong)})},
args: [],
source: "createPaddle1\x0a\x09|verticalOffset|\x0a\x09paddle1 := Sprite new spriteSheet: 'images/paddle.png'.\x0a\x09paddle1 addFrameGroupNamed: 'still' origin: (0@0) size: (15@80) frameCount: 1.\x0a\x09paddle1 addFrameGroupNamed: 'up' origin: (15@0) size: (15@80) frameCount: 1.\x0a\x09paddle1 addFrameGroupNamed: 'down' origin: (30@0) size: (15@80) frameCount: 1.\x0a\x09verticalOffset := paddle1 height / 2.\x0a\x09paddle1 x: 10.\x0a\x09paddle1 y: ((self height / 2) - verticalOffset)",
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "/", "height", "x:", "y:", "-"],
referencedClasses: ["Sprite"]
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "createPaddle2",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$12,$11,$10;
self["@paddle2"]=_st(_st($Sprite())._new())._spriteSheet_("images/paddle.png");
$1=self["@paddle2"];
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$3=(15).__at((80));
$ctx1.sendIdx["@"]=2;
_st($1)._addFrameGroupNamed_origin_size_frameCount_("still",$2,$3,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$4=self["@paddle2"];
$5=(15).__at((0));
$ctx1.sendIdx["@"]=3;
$6=(15).__at((80));
$ctx1.sendIdx["@"]=4;
_st($4)._addFrameGroupNamed_origin_size_frameCount_("up",$5,$6,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
$7=self["@paddle2"];
$8=(30).__at((0));
$ctx1.sendIdx["@"]=5;
_st($7)._addFrameGroupNamed_origin_size_frameCount_("down",$8,(15).__at((80)),(1));
$9=self["@paddle2"];
$12=self._width();
$ctx1.sendIdx["width"]=1;
$11=_st($12).__minus(_st(self["@paddle2"])._width());
$10=_st($11).__minus((10));
$ctx1.sendIdx["-"]=1;
_st($9)._x_($10);
_st(self["@paddle2"])._y_(_st(self["@paddle1"])._y());
return self}, function($ctx1) {$ctx1.fill(self,"createPaddle2",{},globals.Pong)})},
args: [],
source: "createPaddle2\x0a\x09paddle2 := Sprite new spriteSheet: 'images/paddle.png'.\x0a\x09paddle2 addFrameGroupNamed: 'still' origin: (0@0) size: (15@80) frameCount: 1.\x0a\x09paddle2 addFrameGroupNamed: 'up' origin: (15@0) size: (15@80) frameCount: 1.\x0a\x09paddle2 addFrameGroupNamed: 'down' origin: (30@0) size: (15@80) frameCount: 1.\x0a\x09paddle2 x: self width - paddle2 width - 10.\x0a\x09paddle2 y: paddle1 y",
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "x:", "-", "width", "y:", "y"],
referencedClasses: ["Sprite"]
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._clearCanvas();
self._drawSprite_(self["@paddle1"]);
$ctx1.sendIdx["drawSprite:"]=1;
self._drawSprite_(self["@paddle2"]);
$ctx1.sendIdx["drawSprite:"]=2;
self._drawMiddleLine();
$1=self._drawSprite_(self["@ball"]);
_st(self["@paddle1"])._currentFrameGroup_("still");
$ctx1.sendIdx["currentFrameGroup:"]=1;
_st(self["@paddle2"])._currentFrameGroup_("still");
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.Pong)})},
args: [],
source: "draw\x0a\x09\x09self clearCanvas;\x0a\x09\x09\x09drawSprite: paddle1;\x0a\x09\x09\x09drawSprite: paddle2;\x0a\x09\x09\x09drawMiddleLine;\x0a\x09\x09\x09drawSprite: ball.\x0a\x09\x09paddle1 currentFrameGroup: 'still'.\x0a\x09\x09paddle2 currentFrameGroup: 'still'",
messageSends: ["clearCanvas", "drawSprite:", "drawMiddleLine", "currentFrameGroup:"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "drawMiddleLine",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
$1=self["@context"];
$2=$1;
$4=self._width();
$ctx1.sendIdx["width"]=1;
$3=_st($4).__slash((2));
$ctx1.sendIdx["/"]=1;
_st($2)._moveTo_y_($3,(0));
_st($1)._lineTo_y_(_st(self._width()).__slash((2)),self._height());
_st($1)._strokeStyle_("white");
$5=_st($1)._stroke();
return self}, function($ctx1) {$ctx1.fill(self,"drawMiddleLine",{},globals.Pong)})},
args: [],
source: "drawMiddleLine\x0a\x09context\x0a\x09\x09moveTo: (self width / 2) y: 0;\x0a\x09\x09lineTo: (self width / 2) y: (self height);\x0a\x09\x09strokeStyle: 'white';\x0a\x09\x09stroke.",
messageSends: ["moveTo:y:", "/", "width", "lineTo:y:", "height", "strokeStyle:", "stroke"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "end",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Pong.superclass.fn.prototype._end.apply(_st(self), []));
$ctx1.supercall = false;
_st(self._soundNamed_("applause"))._play();
return self}, function($ctx1) {$ctx1.fill(self,"end",{},globals.Pong)})},
args: [],
source: "end\x0a\x09super end.\x0a\x09(self soundNamed: 'applause') play.",
messageSends: ["end", "play", "soundNamed:"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "goDown:",
protocol: 'not yet classified',
fn: function (aPaddle){
var self=this;
var maxBottom;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
$2=self._height();
$ctx1.sendIdx["height"]=1;
$1=_st($2).__minus(self["@speed"]);
maxBottom=_st($1).__minus(_st(aPaddle)._height());
$ctx1.sendIdx["-"]=1;
$4=_st(aPaddle)._y();
$ctx1.sendIdx["y"]=1;
$3=_st($4).__gt(maxBottom);
if(! smalltalk.assert($3)){
_st(aPaddle)._y_(_st(_st(aPaddle)._y()).__plus(self["@speed"]));
};
_st(aPaddle)._currentFrameGroup_("down");
return self}, function($ctx1) {$ctx1.fill(self,"goDown:",{aPaddle:aPaddle,maxBottom:maxBottom},globals.Pong)})},
args: ["aPaddle"],
source: "goDown: aPaddle\x0a\x09|maxBottom|\x0a\x09maxBottom := ((self height - speed) - aPaddle height).\x0a\x09(aPaddle y > maxBottom)\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[aPaddle y: aPaddle y + speed].\x0a\x09aPaddle currentFrameGroup: 'down'",
messageSends: ["-", "height", "ifFalse:", ">", "y", "y:", "+", "currentFrameGroup:"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "goUp:",
protocol: 'not yet classified',
fn: function (aPaddle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(aPaddle)._y();
$ctx1.sendIdx["y"]=1;
$1=_st($2).__lt(self["@speed"]);
if(! smalltalk.assert($1)){
_st(aPaddle)._y_(_st(_st(aPaddle)._y()).__minus(self["@speed"]));
};
_st(aPaddle)._currentFrameGroup_("up");
return self}, function($ctx1) {$ctx1.fill(self,"goUp:",{aPaddle:aPaddle},globals.Pong)})},
args: ["aPaddle"],
source: "goUp: aPaddle\x0a\x09aPaddle y < speed \x0a\x09\x09ifFalse: \x0a\x09\x09\x09[aPaddle y: aPaddle y - speed].\x0a\x09aPaddle currentFrameGroup: 'up'",
messageSends: ["ifFalse:", "<", "y", "y:", "-", "currentFrameGroup:"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Pong.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@ai"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Pong)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09ai := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "processAI",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
$1=_st(_st(self["@step"]).__backslash_backslash((5))).__eq((0));
if(smalltalk.assert($1)){
$4=_st(self["@ball"])._centre();
$ctx1.sendIdx["centre"]=1;
$3=_st($4)._y();
$ctx1.sendIdx["y"]=1;
$2=_st($3).__gt(_st(_st(self["@paddle1"])._centre())._y());
if(smalltalk.assert($2)){
self._goDown_(self["@paddle1"]);
} else {
self._goUp_(self["@paddle1"]);
};
};
return self}, function($ctx1) {$ctx1.fill(self,"processAI",{},globals.Pong)})},
args: [],
source: "processAI\x0a\x09(step \x5c\x5c 5) = 0\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09ball centre y > paddle1 centre y \x0a\x09\x09\x09\x09ifTrue: [ self goDown: paddle1 ]\x0a\x09\x09\x09\x09ifFalse: [ self goUp: paddle1 ] ]",
messageSends: ["ifTrue:", "=", "\x5c\x5c", "ifTrue:ifFalse:", ">", "y", "centre", "goDown:", "goUp:"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "processBallBorderCollision",
protocol: 'not yet classified',
fn: function (){
var self=this;
var offsetY;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
$1=self._height();
$ctx1.sendIdx["height"]=1;
offsetY=_st($1).__minus(_st(self["@ball"])._height());
$4=_st(self["@ball"])._y();
$ctx1.sendIdx["y"]=1;
$3=_st($4).__lt_eq((0));
$2=_st($3)._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@ball"])._y()).__gt_eq(offsetY);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($2)){
_st(self["@ball"])._direction_(_st(_st(self["@ball"])._direction()).__star((1).__at((-1))));
};
return self}, function($ctx1) {$ctx1.fill(self,"processBallBorderCollision",{offsetY:offsetY},globals.Pong)})},
args: [],
source: "processBallBorderCollision\x0a\x09|offsetY|\x0a\x09offsetY := (self height - ball height).\x0a\x09((ball y <= 0) or: [(ball y >= offsetY)]) \x0a\x09\x09ifTrue: [ball direction: ball direction * (1@ -1)].",
messageSends: ["-", "height", "ifTrue:", "or:", "<=", "y", ">=", "direction:", "*", "direction", "@"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "processBallCollision",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._processBallBorderCollision();
$1=_st(self["@ball"])._leftCollidesWith_(self["@paddle1"]);
if(smalltalk.assert($1)){
self._bounceAgainstPaddle1();
};
$2=_st(self["@ball"])._rightCollidesWith_(self["@paddle2"]);
if(smalltalk.assert($2)){
self._bounceAgainstPaddle2();
};
self._processEndGame();
return self}, function($ctx1) {$ctx1.fill(self,"processBallCollision",{},globals.Pong)})},
args: [],
source: "processBallCollision\x0a\x09self processBallBorderCollision.\x0a\x0a\x09(ball leftCollidesWith: paddle1)\x0a\x09\x09ifTrue: [self bounceAgainstPaddle1].\x0a\x0a\x09(ball rightCollidesWith: paddle2)\x0a\x09\x09ifTrue: [self bounceAgainstPaddle2].\x0a\x0a\x09self processEndGame",
messageSends: ["processBallBorderCollision", "ifTrue:", "leftCollidesWith:", "bounceAgainstPaddle1", "rightCollidesWith:", "bounceAgainstPaddle2", "processEndGame"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "processBallMovement",
protocol: 'not yet classified',
fn: function (){
var self=this;
var ballStep;
return smalltalk.withContext(function($ctx1) { 
self._processBallCollision();
_st(self["@ball"])._centre_(_st(_st(self["@ball"])._centre()).__plus(_st(_st(self["@ball"])._direction()).__star(self["@speed"])));
return self}, function($ctx1) {$ctx1.fill(self,"processBallMovement",{ballStep:ballStep},globals.Pong)})},
args: [],
source: "processBallMovement\x0a\x09|ballStep|\x0a\x09self processBallCollision.\x0a\x09ball centre: ball centre + (ball direction * speed).",
messageSends: ["processBallCollision", "centre:", "+", "centre", "*", "direction"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "processEndGame",
protocol: 'not yet classified',
fn: function (){
var self=this;
var offsetX;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
$1=self._width();
$ctx1.sendIdx["width"]=1;
offsetX=_st($1).__minus(_st(self["@ball"])._width());
$3=_st(self["@ball"])._x();
$ctx1.sendIdx["x"]=1;
$2=_st($3).__lt_eq((0));
if(smalltalk.assert($2)){
self._end();
$ctx1.sendIdx["end"]=1;
_st(window)._alert_("Right player wins!");
$ctx1.sendIdx["alert:"]=1;
};
$4=_st(_st(self["@ball"])._x()).__gt_eq(offsetX);
if(smalltalk.assert($4)){
self._end();
_st(window)._alert_("Left player wins!");
};
return self}, function($ctx1) {$ctx1.fill(self,"processEndGame",{offsetX:offsetX},globals.Pong)})},
args: [],
source: "processEndGame\x0a\x09|offsetX|\x0a\x0a\x09offsetX := (self width - ball width).\x0a\x0a\x09(ball x <= 0) \x0a\x09\x09ifTrue: [ self end.\x0a                         window alert: 'Right player wins!'].\x0a\x09(ball x >= offsetX)\x0a\x09\x09ifTrue: [ self end.\x0a                        window alert: 'Left player wins!'].",
messageSends: ["-", "width", "ifTrue:", "<=", "x", "end", "alert:", ">="],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$6,$7,$5,$4;
self._width_((640));
$1=self._height_((360));
self["@speed"]=(10);
_st(self["@canvas"])._style_("background-color: blue");
self._addSound_("sounds/applause.ogg");
$ctx1.sendIdx["addSound:"]=1;
self._addSound_("sounds/click.ogg");
self._createPaddle1();
self._createPaddle2();
$2=self._createBall();
$3=self["@ball"];
$6=[(-1), (1)];
$7=(2)._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$5=_st($6)._at_($7);
$4=_st($5).__at(_st(_st((20)._atRandom()).__minus((10))).__slash((10)));
_st($3)._direction_($4);
_st(window)._alert_("Left Player: s - up x - down / Right Player: up/down arrows");
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.Pong)})},
args: [],
source: "startGame\x0a\x09self width: 640; \x0a\x09\x09height: 360.\x0a\x0a\x09speed := 10.\x0a\x0a\x09canvas style: 'background-color: blue'.\x0a\x0a\x09self addSound: 'sounds/applause.ogg'.\x0a\x09self addSound: 'sounds/click.ogg'.\x0a\x0a\x09self createPaddle1;\x0a\x09\x09createPaddle2;\x0a\x09\x09createBall.\x0a\x0a\x09ball direction: (#(-1 1) at: (2 atRandom)) @ ((20 atRandom - 10)/10).\x0a\x09window alert: 'Left Player: s - up x - down / Right Player: up/down arrows'",
messageSends: ["width:", "height:", "style:", "addSound:", "createPaddle1", "createPaddle2", "createBall", "direction:", "@", "at:", "atRandom", "/", "-", "alert:"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@ai"];
if(smalltalk.assert($1)){
self._processAI();
} else {
self._whileKeyPressed_do_(_st($Key())._s(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._goUp_(self["@paddle1"]);
$ctx2.sendIdx["goUp:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=1;
$2=self._whileKeyPressed_do_(_st($Key())._x(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._goDown_(self["@paddle1"]);
$ctx2.sendIdx["goDown:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=2;
$2;
};
self._whileKeyPressed_do_(_st($Key())._upArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._goUp_(self["@paddle2"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=3;
self._whileKeyPressed_do_(_st($Key())._downArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._goDown_(self["@paddle2"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}));
$3=self._processBallMovement();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.Pong)})},
args: [],
source: "step\x0a\x09ai\x0a\x09\x09ifFalse: [self whileKeyPressed: Key s do: [self goUp: paddle1];\x0a\x09\x09\x09whileKeyPressed: Key x do: [self goDown: paddle1]]\x0a\x09\x09ifTrue: [self processAI].\x0a\x09self whileKeyPressed: Key upArrow do: [self goUp: paddle2];\x0a\x09\x09whileKeyPressed: Key downArrow do: [self goDown: paddle2];\x0a\x09\x09processBallMovement.",
messageSends: ["ifFalse:ifTrue:", "whileKeyPressed:do:", "s", "goUp:", "x", "goDown:", "processAI", "upArrow", "downArrow", "processBallMovement"],
referencedClasses: ["Key"]
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalAngleFor:",
protocol: 'not yet classified',
fn: function (aPaddle){
var self=this;
var impactPosition;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=_st(aPaddle)._y();
$ctx1.sendIdx["y"]=1;
$1=_st($2).__minus(_st(self["@ball"])._y());
impactPosition=_st($1).__slash(_st(aPaddle)._height());
$3=_st(_st(_st(impactPosition).__star((2))).__plus((1))).__star((-1));
$ctx1.sendIdx["*"]=1;
return $3;
}, function($ctx1) {$ctx1.fill(self,"verticalAngleFor:",{aPaddle:aPaddle,impactPosition:impactPosition},globals.Pong)})},
args: ["aPaddle"],
source: "verticalAngleFor: aPaddle\x0a \x09|impactPosition|\x0a\x09impactPosition := (aPaddle y - ball y) / aPaddle height.\x0a\x09^ ((impactPosition * 2) + 1) * -1.",
messageSends: ["/", "-", "y", "height", "*", "+"],
referencedClasses: []
}),
globals.Pong);

smalltalk.addMethod(
smalltalk.method({
selector: "withAI",
protocol: 'not yet classified',
fn: function (){
var self=this;
self["@ai"]=true;
return self},
args: [],
source: "withAI\x0a\x09ai := true.",
messageSends: [],
referencedClasses: []
}),
globals.Pong);



smalltalk.addClass('Ship', globals.Sprite, ['speed'], 'Ludus-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "decreaseSpeed",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._speed_(_st(self._speed()).__minus((0.05)));
return self}, function($ctx1) {$ctx1.fill(self,"decreaseSpeed",{},globals.Ship)})},
args: [],
source: "decreaseSpeed\x0a\x09self speed: self speed - 0.05",
messageSends: ["speed:", "-", "speed"],
referencedClasses: []
}),
globals.Ship);

smalltalk.addMethod(
smalltalk.method({
selector: "increaseSpeed",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._speed_(_st(self._speed()).__plus((0.05)));
return self}, function($ctx1) {$ctx1.fill(self,"increaseSpeed",{},globals.Ship)})},
args: [],
source: "increaseSpeed\x0a\x09self speed: self speed + 0.05",
messageSends: ["speed:", "+", "speed"],
referencedClasses: []
}),
globals.Ship);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.Ship.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._spriteSheet_("images/trail.png");
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=self._addFrameGroupNamed_origin_size_frameCount_("ship",$2,(10).__at((10)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Ship)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self spriteSheet: 'images/trail.png';\x0a\x09\x09addFrameGroupNamed: 'ship' origin: 0@0 size: 10@10 frameCount: 1.",
messageSends: ["initialize", "spriteSheet:", "addFrameGroupNamed:origin:size:frameCount:", "@"],
referencedClasses: []
}),
globals.Ship);

smalltalk.addMethod(
smalltalk.method({
selector: "speed",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@speed"];
if(($receiver = $2) == null || $receiver.isNil){
self["@speed"]=(0);
$1=self["@speed"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"speed",{},globals.Ship)})},
args: [],
source: "speed\x0a\x09^ speed ifNil: [speed := 0]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Ship);

smalltalk.addMethod(
smalltalk.method({
selector: "speed:",
protocol: 'not yet classified',
fn: function (aSpeed){
var self=this;
self["@speed"]=aSpeed;
return self},
args: ["aSpeed"],
source: "speed: aSpeed\x0a\x09speed := aSpeed",
messageSends: [],
referencedClasses: []
}),
globals.Ship);



smalltalk.addClass('SimplePacman', globals.Game, ['pacman', 'ghost', 'pills'], 'Ludus-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "createGhost",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
self["@ghost"]=_st(_st($Sprite())._new())._spriteSheet_("images/ghost.png");
$1=self["@ghost"];
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$3=(50).__at((55));
$ctx1.sendIdx["@"]=2;
_st($1)._addFrameGroupNamed_origin_size_frameCount_("down",$2,$3,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$4=self["@ghost"];
$5=(100).__at((0));
$ctx1.sendIdx["@"]=3;
$6=(50).__at((55));
$ctx1.sendIdx["@"]=4;
_st($4)._addFrameGroupNamed_origin_size_frameCount_("up",$5,$6,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
$7=self["@ghost"];
$8=(0).__at((55));
$ctx1.sendIdx["@"]=5;
$9=(50).__at((55));
$ctx1.sendIdx["@"]=6;
_st($7)._addFrameGroupNamed_origin_size_frameCount_("right",$8,$9,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=3;
$10=self["@ghost"];
$11=(100).__at((55));
$ctx1.sendIdx["@"]=7;
$12=(50).__at((55));
$ctx1.sendIdx["@"]=8;
_st($10)._addFrameGroupNamed_origin_size_frameCount_("left",$11,$12,(2));
_st(self["@ghost"])._centre_((500).__at((500)));
return self}, function($ctx1) {$ctx1.fill(self,"createGhost",{},globals.SimplePacman)})},
args: [],
source: "createGhost\x0a\x09ghost := Sprite new spriteSheet: 'images/ghost.png'.\x0a\x09ghost addFrameGroupNamed: 'down' origin: (0@0) size: (50@55) frameCount: 2.\x0a\x09ghost addFrameGroupNamed: 'up' origin: (100@0) size: (50@55) frameCount: 2.\x0a\x09ghost addFrameGroupNamed: 'right' origin: (0@55) size: (50@55) frameCount: 2.\x0a\x09ghost addFrameGroupNamed: 'left' origin: (100@55) size: (50@55) frameCount: 2.\x0a\x09ghost centre: 500@500.",
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:"],
referencedClasses: ["Sprite"]
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "createPacman",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
self["@pacman"]=_st(_st($Sprite())._new())._spriteSheet_("images/pacman.png");
$1=self["@pacman"];
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$3=(50).__at((50));
$ctx1.sendIdx["@"]=2;
_st($1)._addFrameGroupNamed_origin_size_frameCount_("left",$2,$3,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$4=self["@pacman"];
$5=(0).__at((50));
$ctx1.sendIdx["@"]=3;
$6=(50).__at((50));
$ctx1.sendIdx["@"]=4;
_st($4)._addFrameGroupNamed_origin_size_frameCount_("right",$5,$6,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
$7=self["@pacman"];
$8=(100).__at((0));
$ctx1.sendIdx["@"]=5;
$9=(50).__at((50));
$ctx1.sendIdx["@"]=6;
_st($7)._addFrameGroupNamed_origin_size_frameCount_("down",$8,$9,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=3;
$10=self["@pacman"];
$11=(100).__at((50));
$ctx1.sendIdx["@"]=7;
$12=(50).__at((50));
$ctx1.sendIdx["@"]=8;
_st($10)._addFrameGroupNamed_origin_size_frameCount_("up",$11,$12,(2));
_st(self["@pacman"])._centre_((100).__at((100)));
return self}, function($ctx1) {$ctx1.fill(self,"createPacman",{},globals.SimplePacman)})},
args: [],
source: "createPacman\x0a\x09pacman := Sprite new spriteSheet: 'images/pacman.png'.\x0a\x09pacman addFrameGroupNamed: 'left' origin: (0@0) size: (50@50) frameCount: 2.\x0a\x09pacman addFrameGroupNamed: 'right' origin: (0@50) size: (50@50) frameCount: 2.\x0a\x09pacman addFrameGroupNamed: 'down' origin: (100@0) size: (50@50) frameCount: 2.\x0a\x09pacman addFrameGroupNamed: 'up' origin: (100@50) size: (50@50) frameCount: 2.\x0a\x09pacman centre: 100@100.",
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:"],
referencedClasses: ["Sprite"]
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._clearCanvas();
self._drawSprite_(self["@ghost"]);
$ctx1.sendIdx["drawSprite:"]=1;
self._drawSprite_(self["@pacman"]);
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.SimplePacman)})},
args: [],
source: "draw\x0a\x09self clearCanvas.\x0a\x09self drawSprite: ghost.\x0a\x09self drawSprite: pacman.",
messageSends: ["clearCanvas", "drawSprite:"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "moveDown",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@pacman"])._centre())._y()).__plus((25))).__gt_eq(self._height());
if(! smalltalk.assert($1)){
_st(self["@pacman"])._moveCentreBy_((0).__at((15)));
};
_st(self["@pacman"])._currentFrameGroup_("down");
return self}, function($ctx1) {$ctx1.fill(self,"moveDown",{},globals.SimplePacman)})},
args: [],
source: "moveDown\x0a\x09(pacman centre y + 25) >= self height \x0a\x09\x09ifFalse: \x0a\x09\x09\x09[pacman moveCentreBy: (0@ 15)].\x0a\x09pacman currentFrameGroup: 'down'",
messageSends: ["ifFalse:", ">=", "+", "y", "centre", "height", "moveCentreBy:", "@", "currentFrameGroup:"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "moveGhost",
protocol: 'not yet classified',
fn: function (){
var self=this;
var direction;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
direction=(4)._atRandom();
$1=_st(direction).__eq((1));
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
self._moveGhostUp();
};
$2=_st(direction).__eq((2));
$ctx1.sendIdx["="]=2;
if(smalltalk.assert($2)){
self._moveGhostDown();
};
$3=_st(direction).__eq((3));
$ctx1.sendIdx["="]=3;
if(smalltalk.assert($3)){
self._moveGhostLeft();
};
$4=_st(direction).__eq((4));
if(smalltalk.assert($4)){
self._moveGhostRight();
};
return self}, function($ctx1) {$ctx1.fill(self,"moveGhost",{direction:direction},globals.SimplePacman)})},
args: [],
source: "moveGhost\x0a\x09|direction|\x0a\x09direction := 4 atRandom.\x0a\x09direction = 1 ifTrue: [self moveGhostUp].\x0a\x09direction = 2 ifTrue: [self moveGhostDown].\x0a\x09direction = 3 ifTrue: [self moveGhostLeft].\x0a\x09direction = 4 ifTrue: [self moveGhostRight].",
messageSends: ["atRandom", "ifTrue:", "=", "moveGhostUp", "moveGhostDown", "moveGhostLeft", "moveGhostRight"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "moveGhostDown",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@ghost"])._centre())._y()).__plus((27))).__gt_eq(self._height());
if(! smalltalk.assert($1)){
_st(self["@ghost"])._moveCentreBy_((0).__at((15)));
};
_st(self["@ghost"])._currentFrameGroup_("down");
return self}, function($ctx1) {$ctx1.fill(self,"moveGhostDown",{},globals.SimplePacman)})},
args: [],
source: "moveGhostDown\x0a\x09(ghost centre y + 27) >= self height \x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ghost moveCentreBy: (0@ 15)].\x0a\x09ghost currentFrameGroup: 'down'",
messageSends: ["ifFalse:", ">=", "+", "y", "centre", "height", "moveCentreBy:", "@", "currentFrameGroup:"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "moveGhostLeft",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@ghost"])._centre())._x()).__lt_eq((25));
if(! smalltalk.assert($1)){
_st(self["@ghost"])._moveCentreBy_((-15).__at((0)));
};
_st(self["@ghost"])._currentFrameGroup_("left");
return self}, function($ctx1) {$ctx1.fill(self,"moveGhostLeft",{},globals.SimplePacman)})},
args: [],
source: "moveGhostLeft\x0a\x09ghost centre x <= 25\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ghost moveCentreBy: (-15@ 0)].\x0a\x09ghost currentFrameGroup: 'left'",
messageSends: ["ifFalse:", "<=", "x", "centre", "moveCentreBy:", "@", "currentFrameGroup:"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "moveGhostRight",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@ghost"])._centre())._x()).__plus((25))).__gt_eq(self._width());
if(! smalltalk.assert($1)){
_st(self["@ghost"])._moveCentreBy_((15).__at((0)));
};
_st(self["@ghost"])._currentFrameGroup_("right");
return self}, function($ctx1) {$ctx1.fill(self,"moveGhostRight",{},globals.SimplePacman)})},
args: [],
source: "moveGhostRight\x0a\x09ghost centre x + 25 >= self width\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ghost moveCentreBy: (15@ 0)].\x0a\x09ghost currentFrameGroup: 'right'",
messageSends: ["ifFalse:", ">=", "+", "x", "centre", "width", "moveCentreBy:", "@", "currentFrameGroup:"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "moveGhostUp",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@ghost"])._centre())._y()).__lt_eq((27));
if(! smalltalk.assert($1)){
_st(self["@ghost"])._moveCentreBy_((0).__at((-15)));
};
_st(self["@ghost"])._currentFrameGroup_("up");
return self}, function($ctx1) {$ctx1.fill(self,"moveGhostUp",{},globals.SimplePacman)})},
args: [],
source: "moveGhostUp\x0a\x09ghost centre y <= 27\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ghost moveCentreBy: (0@ -15)].\x0a\x09ghost currentFrameGroup: 'up'",
messageSends: ["ifFalse:", "<=", "y", "centre", "moveCentreBy:", "@", "currentFrameGroup:"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "moveLeft",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@pacman"])._centre())._x()).__lt_eq((25));
if(! smalltalk.assert($1)){
_st(self["@pacman"])._moveCentreBy_((-15).__at((0)));
};
_st(self["@pacman"])._currentFrameGroup_("left");
return self}, function($ctx1) {$ctx1.fill(self,"moveLeft",{},globals.SimplePacman)})},
args: [],
source: "moveLeft\x0a\x09pacman centre x <= 25\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[pacman moveCentreBy: (-15@ 0)].\x0a\x09pacman currentFrameGroup: 'left'",
messageSends: ["ifFalse:", "<=", "x", "centre", "moveCentreBy:", "@", "currentFrameGroup:"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "moveRight",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@pacman"])._centre())._x()).__plus((25))).__gt_eq(self._width());
if(! smalltalk.assert($1)){
_st(self["@pacman"])._moveCentreBy_((15).__at((0)));
};
_st(self["@pacman"])._currentFrameGroup_("right");
return self}, function($ctx1) {$ctx1.fill(self,"moveRight",{},globals.SimplePacman)})},
args: [],
source: "moveRight\x0a\x09pacman centre x + 25 >= self width\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[pacman moveCentreBy: (15@ 0)].\x0a\x09pacman currentFrameGroup: 'right'",
messageSends: ["ifFalse:", ">=", "+", "x", "centre", "width", "moveCentreBy:", "@", "currentFrameGroup:"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "moveUp",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@pacman"])._centre())._y()).__lt_eq((25));
if(! smalltalk.assert($1)){
_st(self["@pacman"])._moveCentreBy_((0).__at((-15)));
};
_st(self["@pacman"])._currentFrameGroup_("up");
return self}, function($ctx1) {$ctx1.fill(self,"moveUp",{},globals.SimplePacman)})},
args: [],
source: "moveUp\x0a\x09pacman centre y <= 25\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[pacman moveCentreBy: (0@ -15)].\x0a\x09pacman currentFrameGroup: 'up'",
messageSends: ["ifFalse:", "<=", "y", "centre", "moveCentreBy:", "@", "currentFrameGroup:"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._width_((720));
self._height_((540));
$1=self._backgroundColor_("black");
self._createPacman();
self._createGhost();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.SimplePacman)})},
args: [],
source: "startGame\x0a\x09self width: 720; \x0a\x09\x09height: 540;\x0a\x09\x09backgroundColor: 'black'.\x0a\x0a\x09self createPacman.\x0a\x09self createGhost.",
messageSends: ["width:", "height:", "backgroundColor:", "createPacman", "createGhost"],
referencedClasses: []
}),
globals.SimplePacman);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$7,$6,$5,$4,$3,$8;
self._whileKeyPressed_do_(_st($Key())._leftArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._moveLeft();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=1;
self._whileKeyPressed_do_(_st($Key())._rightArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._moveRight();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=2;
self._whileKeyPressed_do_(_st($Key())._upArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._moveUp();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=3;
$1=self._whileKeyPressed_do_(_st($Key())._downArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._moveDown();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
self._onMouseClickDo_((function(){
return smalltalk.withContext(function($ctx2) {
$2=window;
$7=self._mousePosition();
$ctx2.sendIdx["mousePosition"]=1;
$6=_st($7)._x();
$5=_st($6)._asString();
$ctx2.sendIdx["asString"]=1;
$4=_st($5).__comma(",");
$3=_st($4).__comma(_st(_st(self._mousePosition())._y())._asString());
$ctx2.sendIdx[","]=1;
return _st($2)._alert_($3);
$ctx2.sendIdx["alert:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
self._moveGhost();
$8=_st(self["@pacman"])._collidesWith_(self["@ghost"]);
if(smalltalk.assert($8)){
self._end();
_st(window)._alert_("You lost!");
};
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.SimplePacman)})},
args: [],
source: "step\x0a\x09self whileKeyPressed: Key leftArrow do: [self moveLeft];\x0a\x09\x09whileKeyPressed: Key rightArrow do: [self moveRight];\x0a\x09\x09whileKeyPressed: Key upArrow do: [self moveUp];\x0a\x09\x09whileKeyPressed: Key downArrow do: [self moveDown].\x0a\x09self onMouseClickDo: [ window alert: self mousePosition x asString , ',' , self mousePosition y asString ].\x0a\x09self moveGhost.\x0a\x09(pacman collidesWith: ghost) ifTrue: [ self end. window alert: 'You lost!' ]",
messageSends: ["whileKeyPressed:do:", "leftArrow", "moveLeft", "rightArrow", "moveRight", "upArrow", "moveUp", "downArrow", "moveDown", "onMouseClickDo:", "alert:", ",", "asString", "x", "mousePosition", "y", "moveGhost", "ifTrue:", "collidesWith:", "end"],
referencedClasses: ["Key"]
}),
globals.SimplePacman);



smalltalk.addClass('SmallCave', globals.Game, ['ship', 'gravity', 'trail', 'upOrDown', 'bumps', 'goingUp', 'light', 'maxVariation', 'obstaclePositions', 'started', 'scrollSpeed'], 'Ludus-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "bumps",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$7,$6,$5,$1,$receiver;
$2=self["@bumps"];
if(($receiver = $2) == null || $receiver.isNil){
self["@bumps"]=_st((0)._to_((25)))._collect_((function(x){
return smalltalk.withContext(function($ctx2) {
$4=_st(self._width()).__slash((25));
$ctx2.sendIdx["/"]=1;
$3=_st($4).__star(x);
$7=_st(self["@step"]).__slash((20));
$ctx2.sendIdx["/"]=2;
$6=_st($7)._atRandom();
$5=_st($6).__plus(_st(self["@step"]).__slash((20)));
return _st($3).__at($5);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)})}));
$1=self["@bumps"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bumps",{},globals.SmallCave)})},
args: [],
source: "bumps\x0a\x09^bumps ifNil: [bumps := (0 to: 25) collect: [:x | (self width / 25) * x @ ((step / 20) atRandom + (step / 20))]]",
messageSends: ["ifNil:", "collect:", "to:", "@", "*", "/", "width", "+", "atRandom"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "detectCollision",
protocol: 'not yet classified',
fn: function (){
var self=this;
var imageData,greenComponent;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$8,$7,$10,$9,$6,$5,$11,$12,$13,$16,$15,$14,$17;
$1=self["@context"];
$4=self._ship();
$ctx1.sendIdx["ship"]=1;
$3=_st($4)._centre();
$ctx1.sendIdx["centre"]=1;
$2=_st($3)._x();
$ctx1.sendIdx["x"]=1;
$8=self._ship();
$ctx1.sendIdx["ship"]=2;
$7=_st($8)._y();
$ctx1.sendIdx["y"]=1;
$10=self._ship();
$ctx1.sendIdx["ship"]=3;
$9=_st($10)._height();
$6=_st($7).__plus($9);
$5=_st($6).__plus((1));
$ctx1.sendIdx["+"]=1;
imageData=_st($1)._getImageData_y_width_height_($2,$5,(1),(1));
$ctx1.sendIdx["getImageData:y:width:height:"]=1;
$11=_st(imageData)._data();
$ctx1.sendIdx["data"]=1;
greenComponent=_st($11)._at_((1));
$ctx1.sendIdx["at:"]=1;
$12=_st(greenComponent).__gt((0));
$ctx1.sendIdx[">"]=1;
if(smalltalk.assert($12)){
self._end();
$ctx1.sendIdx["end"]=1;
};
$13=self["@context"];
$16=self._ship();
$ctx1.sendIdx["ship"]=4;
$15=_st($16)._centre();
$14=_st($15)._x();
imageData=_st($13)._getImageData_y_width_height_($14,_st(_st(self._ship())._y()).__minus((1)),(1),(1));
greenComponent=_st(_st(imageData)._data())._at_((1));
$17=_st(greenComponent).__gt((0));
if(smalltalk.assert($17)){
self._end();
};
return self}, function($ctx1) {$ctx1.fill(self,"detectCollision",{imageData:imageData,greenComponent:greenComponent},globals.SmallCave)})},
args: [],
source: "detectCollision\x0a\x09|imageData greenComponent|\x0a\x0a\x09imageData := context getImageData: self ship centre x y: self ship y + self ship height + 1 width: 1 height: 1.\x0a\x09greenComponent := imageData data at: 1.\x0a    greenComponent > 0 ifTrue: [self end].\x0a\x0a\x09imageData := context getImageData: self ship centre x y: self ship y - 1 width: 1 height: 1.\x0a\x09greenComponent := imageData data at: 1.\x0a    greenComponent > 0 ifTrue: [self end].",
messageSends: ["getImageData:y:width:height:", "x", "centre", "ship", "+", "y", "height", "at:", "data", "ifTrue:", ">", "end", "-"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._started();
if(smalltalk.assert($1)){
self._clearCanvas();
self._drawCeiling();
self._drawFloor();
self._drawObstacles();
$2=self._drawSprite_(self["@ship"]);
$ctx1.sendIdx["drawSprite:"]=1;
$2;
_st(_st(self._trail())._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._drawSprite_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
} else {
self._drawWelcomeScreen();
};
self._onMouseClickDo_((function(){
self["@started"]=true;
return self["@started"];
}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.SmallCave)})},
args: [],
source: "draw\x0a\x09self started \x0a\x09\x09ifFalse: [self drawWelcomeScreen]\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self clearCanvas;\x0a\x09\x09\x09\x09drawCeiling; \x0a\x09\x09\x09\x09drawFloor;\x0a\x09\x09\x09\x09drawObstacles;\x0a\x09\x09\x09\x09drawSprite: ship.\x0a\x09\x09\x09self trail allButLast do: [:each | self drawSprite: each ]].\x0a\x09self onMouseClickDo: [started := true].",
messageSends: ["ifFalse:ifTrue:", "started", "drawWelcomeScreen", "clearCanvas", "drawCeiling", "drawFloor", "drawObstacles", "drawSprite:", "do:", "allButLast", "trail", "onMouseClickDo:"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "drawCeiling",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$6,$5,$4,$2,$9,$8,$7,$10,$11,$12,$13,$14,$15,$16;
$1=self["@context"];
_st($1)._beginPath();
_st($1)._moveTo_y_((-200),(0));
$3=$1;
$6=self._bumps();
$ctx1.sendIdx["bumps"]=1;
$5=_st($6)._first();
$4=_st($5)._y();
$ctx1.sendIdx["y"]=1;
$2=_st($3)._lineTo_y_((-200),$4);
$ctx1.sendIdx["lineTo:y:"]=1;
$9=self._bumps();
$ctx1.sendIdx["bumps"]=2;
$8=_st($9)._allButFirst();
$7=_st($8)._allButLast();
_st($7)._do_((function(eachBump){
return smalltalk.withContext(function($ctx2) {
$10=self["@context"];
$11=_st(eachBump)._x();
$12=_st(eachBump)._y();
$ctx2.sendIdx["y"]=2;
return _st($10)._lineTo_y_($11,$12);
$ctx2.sendIdx["lineTo:y:"]=2;
}, function($ctx2) {$ctx2.fillBlock({eachBump:eachBump},$ctx1,1)})}));
$13=self["@context"];
$14=$13;
$15=self._width();
$ctx1.sendIdx["width"]=1;
_st($14)._lineTo_y_($15,_st(_st(self._bumps())._last())._y());
$ctx1.sendIdx["lineTo:y:"]=3;
_st($13)._lineTo_y_(_st(self._width()).__plus((200)),(0));
_st($13)._closePath();
_st($13)._fillStyle_("green");
$16=_st($13)._fill();
return self}, function($ctx1) {$ctx1.fill(self,"drawCeiling",{},globals.SmallCave)})},
args: [],
source: "drawCeiling\x0a\x09context\x0a\x09\x09beginPath;\x0a\x09\x09moveTo:-200 y: 0;\x0a\x09\x09lineTo: -200 y: self bumps first y.\x0a\x0a\x09self bumps allButFirst allButLast do: [:eachBump |\x0a\x09\x09context lineTo: eachBump x y: eachBump y].\x0a\x0a\x09context\x0a\x09\x09lineTo: self width y: self bumps last y;\x0a\x09\x09lineTo: self width + 200 y: 0;\x0a\x09\x09closePath;\x0a\x09\x09fillStyle: 'green';\x0a\x09\x09fill.",
messageSends: ["beginPath", "moveTo:y:", "lineTo:y:", "y", "first", "bumps", "do:", "allButLast", "allButFirst", "x", "width", "last", "+", "closePath", "fillStyle:", "fill"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "drawFloor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$9,$8,$7,$10,$6,$4,$13,$12,$11,$14,$15,$17,$18,$16,$19,$20,$21,$22,$23;
$1=self["@context"];
_st($1)._beginPath();
$2=$1;
$3=self._height();
$ctx1.sendIdx["height"]=1;
_st($2)._moveTo_y_((-200),$3);
$5=$1;
$9=self._bumps();
$ctx1.sendIdx["bumps"]=1;
$8=_st($9)._first();
$7=_st($8)._y();
$ctx1.sendIdx["y"]=1;
$10=self._light();
$ctx1.sendIdx["light"]=1;
$6=_st($7).__plus($10);
$ctx1.sendIdx["+"]=1;
$4=_st($5)._lineTo_y_((-200),$6);
$ctx1.sendIdx["lineTo:y:"]=1;
$13=self._bumps();
$ctx1.sendIdx["bumps"]=2;
$12=_st($13)._allButFirst();
$11=_st($12)._allButLast();
_st($11)._do_((function(eachBump){
return smalltalk.withContext(function($ctx2) {
$14=self["@context"];
$15=_st(eachBump)._x();
$17=_st(eachBump)._y();
$ctx2.sendIdx["y"]=2;
$18=self._light();
$ctx2.sendIdx["light"]=2;
$16=_st($17).__plus($18);
$ctx2.sendIdx["+"]=2;
return _st($14)._lineTo_y_($15,$16);
$ctx2.sendIdx["lineTo:y:"]=2;
}, function($ctx2) {$ctx2.fillBlock({eachBump:eachBump},$ctx1,1)})}));
$19=self["@context"];
$20=$19;
$21=self._width();
$ctx1.sendIdx["width"]=1;
$22=_st(_st(_st(self._bumps())._last())._y()).__plus(self._light());
$ctx1.sendIdx["+"]=3;
_st($20)._lineTo_y_($21,$22);
$ctx1.sendIdx["lineTo:y:"]=3;
_st($19)._lineTo_y_(_st(self._width()).__plus((200)),self._height());
_st($19)._closePath();
_st($19)._fillStyle_("green");
$23=_st($19)._fill();
return self}, function($ctx1) {$ctx1.fill(self,"drawFloor",{},globals.SmallCave)})},
args: [],
source: "drawFloor\x0a\x09context\x0a\x09\x09beginPath;\x0a\x09\x09moveTo:-200 y: self height;\x0a\x09\x09lineTo: -200 y: self bumps first y + self light.\x0a\x0a\x09self bumps allButFirst allButLast do: [:eachBump |\x0a\x09\x09context lineTo: eachBump x y: eachBump y + self light].\x0a\x0a\x09context\x0a\x09\x09lineTo: self width y: self bumps last y + self light;\x0a\x09\x09lineTo: self width + 200 y: self height;\x0a\x09\x09closePath;\x0a\x09\x09fillStyle: 'green';\x0a\x09\x09fill.",
messageSends: ["beginPath", "moveTo:y:", "height", "lineTo:y:", "+", "y", "first", "bumps", "light", "do:", "allButLast", "allButFirst", "x", "width", "last", "closePath", "fillStyle:", "fill"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "drawObstacles",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._obstaclePositions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=self["@context"];
_st($1)._fillStyle_("green");
$2=_st($1)._fillRect_y_width_height_(_st(each)._x(),_st(each)._y(),(50),(100));
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawObstacles",{},globals.SmallCave)})},
args: [],
source: "drawObstacles\x0a\x09self obstaclePositions do: [:each |\x0a\x09\x09context\x0a\x09\x09\x09fillStyle: 'green';\x0a\x09\x09\x09fillRect: each x y: each y width: 50 height: 100]",
messageSends: ["do:", "obstaclePositions", "fillStyle:", "fillRect:y:width:height:", "x", "y"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "drawWelcomeScreen",
protocol: 'not yet classified',
fn: function (){
var self=this;
var image;
return smalltalk.withContext(function($ctx1) { 
image=self._newImage();
_st(image)._src_("images/welcome.png");
_st(self["@context"])._drawImage_x_y_(image,(40),(50));
return self}, function($ctx1) {$ctx1.fill(self,"drawWelcomeScreen",{image:image},globals.SmallCave)})},
args: [],
source: "drawWelcomeScreen\x0a\x09|image|\x0a\x09image := self newImage.\x0a\x09image src: 'images/welcome.png'.\x0a\x09context drawImage: image x: 40 y: 50.",
messageSends: ["newImage", "src:", "drawImage:x:y:"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "end",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
($ctx1.supercall = true, globals.SmallCave.superclass.fn.prototype._end.apply(_st(self), []));
$ctx1.supercall = false;
$1=window;
$2=_st("OUCH! Your score is ".__comma(_st(self._stepCount())._asString())).__comma(". Refresh the page to try again!");
$ctx1.sendIdx[","]=1;
_st($1)._alert_($2);
return self}, function($ctx1) {$ctx1.fill(self,"end",{},globals.SmallCave)})},
args: [],
source: "end\x0a\x09super end.\x0a\x09window alert: 'OUCH! Your score is ' , self stepCount asString , '. Refresh the page to try again!'",
messageSends: ["end", "alert:", ",", "asString", "stepCount"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "goingUp",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$5,$4,$3,$2,$6,$7,$receiver;
$1=self["@goingUp"];
if(($receiver = $1) == null || $receiver.isNil){
self["@goingUp"]=false;
self["@goingUp"];
} else {
$1;
};
$5=self._bumps();
$ctx1.sendIdx["bumps"]=1;
$4=_st($5)._last();
$ctx1.sendIdx["last"]=1;
$3=_st($4)._y();
$ctx1.sendIdx["y"]=1;
$2=_st($3).__lt((0));
if(smalltalk.assert($2)){
self["@goingUp"]=false;
self["@goingUp"];
};
$6=_st(_st(_st(_st(self._bumps())._last())._y()).__plus(self._light())).__gt(self._height());
if(smalltalk.assert($6)){
self["@goingUp"]=true;
self["@goingUp"];
};
$7=self["@goingUp"];
return $7;
}, function($ctx1) {$ctx1.fill(self,"goingUp",{},globals.SmallCave)})},
args: [],
source: "goingUp\x0a\x09goingUp ifNil: [goingUp := false].\x0a\x09self bumps last y < 0 ifTrue: [goingUp := false].\x0a\x09(self bumps last y + self light) > self height ifTrue: [goingUp := true].\x0a\x09^ goingUp",
messageSends: ["ifNil:", "ifTrue:", "<", "y", "last", "bumps", ">", "+", "light", "height"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "light",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@light"];
if(($receiver = $2) == null || $receiver.isNil){
self["@light"]=_st(self._height()).__star((0.75));
$1=self["@light"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"light",{},globals.SmallCave)})},
args: [],
source: "light\x0a\x09^ light ifNil: [\x09light := (self height * 0.75) ]",
messageSends: ["ifNil:", "*", "height"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "maxVariation",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@maxVariation"];
if(($receiver = $2) == null || $receiver.isNil){
self["@maxVariation"]=(2);
$1=self["@maxVariation"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxVariation",{},globals.SmallCave)})},
args: [],
source: "maxVariation\x0a\x09^ maxVariation ifNil: [maxVariation := 2]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "moveShip",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$6,$5,$4;
self._whileMouseUpDo_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._ship();
$ctx2.sendIdx["ship"]=1;
return _st($1)._increaseSpeed();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self._whileMouseDownDo_((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._ship();
$ctx2.sendIdx["ship"]=2;
return _st($2)._decreaseSpeed();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$3=self._ship();
$ctx1.sendIdx["ship"]=3;
$6=self._ship();
$ctx1.sendIdx["ship"]=4;
$5=_st($6)._y();
$4=_st($5).__plus(_st(_st(self._ship())._speed()).__star(self["@gravity"]));
_st($3)._y_($4);
return self}, function($ctx1) {$ctx1.fill(self,"moveShip",{},globals.SmallCave)})},
args: [],
source: "moveShip\x0a\x09self whileMouseUpDo: [self ship increaseSpeed].\x0a\x09self whileMouseDownDo: [self ship decreaseSpeed].\x0a\x09self ship y: (self ship y + (self ship speed * gravity))",
messageSends: ["whileMouseUpDo:", "increaseSpeed", "ship", "whileMouseDownDo:", "decreaseSpeed", "y:", "+", "y", "*", "speed"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "newImage",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(document)._createElement_("img");
return $1;
}, function($ctx1) {$ctx1.fill(self,"newImage",{},globals.SmallCave)})},
args: [],
source: "newImage\x0a\x09^ document createElement: 'img'",
messageSends: ["createElement:"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "obstaclePositions",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$6,$5,$4,$9,$8,$7,$3,$14,$13,$12,$11,$18,$17,$16,$15,$10,$1,$receiver;
$2=self["@obstaclePositions"];
if(($receiver = $2) == null || $receiver.isNil){
$6=self._width();
$ctx1.sendIdx["width"]=1;
$5=_st($6).__slash((2));
$ctx1.sendIdx["/"]=1;
$4=_st($5)._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$9=self._height();
$ctx1.sendIdx["height"]=1;
$8=_st($9).__slash((2));
$ctx1.sendIdx["/"]=2;
$7=_st($8)._atRandom();
$ctx1.sendIdx["atRandom"]=2;
$3=_st($4).__at($7);
$ctx1.sendIdx["@"]=1;
$14=self._width();
$ctx1.sendIdx["width"]=2;
$13=_st($14).__slash((2));
$ctx1.sendIdx["/"]=3;
$12=_st($13)._atRandom();
$ctx1.sendIdx["atRandom"]=3;
$11=_st($12).__plus(self._width());
$ctx1.sendIdx["+"]=1;
$18=self._height();
$ctx1.sendIdx["height"]=2;
$17=_st($18).__slash((2));
$ctx1.sendIdx["/"]=4;
$16=_st($17)._atRandom();
$15=_st($16).__plus(_st(self._height()).__slash((2)));
$10=_st($11).__at($15);
self["@obstaclePositions"]=[$3,$10];
$1=self["@obstaclePositions"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"obstaclePositions",{},globals.SmallCave)})},
args: [],
source: "obstaclePositions\x0a\x09^obstaclePositions ifNil: [obstaclePositions := \x0a                                  { (self width / 2) atRandom @ (self height / 2) atRandom. ((self width / 2) atRandom + self width) @ ((self height / 2) atRandom + (self height / 2)) } ]",
messageSends: ["ifNil:", "@", "atRandom", "/", "width", "height", "+"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "scrollSpeed",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@scrollSpeed"];
if(($receiver = $2) == null || $receiver.isNil){
self["@scrollSpeed"]=(5);
$1=self["@scrollSpeed"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"scrollSpeed",{},globals.SmallCave)})},
args: [],
source: "scrollSpeed\x0a\x09^ scrollSpeed ifNil: [scrollSpeed := 5]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "ship",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Ship(){return globals.Ship||(typeof Ship=="undefined"?nil:Ship)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@ship"];
if(($receiver = $2) == null || $receiver.isNil){
self["@ship"]=_st(_st($Ship())._new())._centre_((105).__at(_st(self._height()).__slash((2))));
$1=self["@ship"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"ship",{},globals.SmallCave)})},
args: [],
source: "ship\x0a\x09^ ship ifNil: [ship := Ship new centre: 105 @ (self height / 2)]",
messageSends: ["ifNil:", "centre:", "new", "@", "/", "height"],
referencedClasses: ["Ship"]
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@fps"]=(30);
self["@gravity"]=(1.1);
self._width_((720));
self._height_((540));
$1=self._backgroundColor_("black");
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.SmallCave)})},
args: [],
source: "startGame\x0a\x09fps := 30.\x0a\x09gravity := 1.1.\x0a\x0a\x09self width: 720; \x0a\x09\x09height: 540;\x0a\x09\x09backgroundColor: 'black'.",
messageSends: ["width:", "height:", "backgroundColor:"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "started",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@started"];
if(($receiver = $2) == null || $receiver.isNil){
self["@started"]=false;
$1=self["@started"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"started",{},globals.SmallCave)})},
args: [],
source: "started\x0a\x09^ started ifNil: [started := false]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._started();
if(smalltalk.assert($1)){
self._detectCollision();
self._updateTrail();
self._updateBumps();
self._updateObstacles();
self._updateDifficulty();
$2=self._moveShip();
$2;
};
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.SmallCave)})},
args: [],
source: "step\x0a\x09self started ifTrue: [self detectCollision; updateTrail; updateBumps; updateObstacles; updateDifficulty; moveShip]",
messageSends: ["ifTrue:", "started", "detectCollision", "updateTrail", "updateBumps", "updateObstacles", "updateDifficulty", "moveShip"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "trail",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1,$receiver;
$2=self["@trail"];
if(($receiver = $2) == null || $receiver.isNil){
self["@trail"]=[];
self["@trail"];
(0)._to_do_((10),(function(i){
var ghostBall;
return smalltalk.withContext(function($ctx2) {
ghostBall=_st(_st($Sprite())._new())._spriteSheet_("images/trail.png");
ghostBall;
$3=ghostBall;
$4=(0).__at((0));
$ctx2.sendIdx["@"]=1;
$5=(10).__at((10));
$ctx2.sendIdx["@"]=2;
_st($3)._addFrameGroupNamed_origin_size_frameCount_("trail",$4,$5,(1));
_st(ghostBall)._position_(_st(_st(i).__star((10))).__at(_st(self._height()).__slash((2))));
return _st(self["@trail"])._add_(ghostBall);
}, function($ctx2) {$ctx2.fillBlock({i:i,ghostBall:ghostBall},$ctx1,2)})}));
$1=self["@trail"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"trail",{},globals.SmallCave)})},
args: [],
source: "trail\x0a\x09^ trail ifNil: [\x0a        \x09trail := #().\x0a          \x090 to: 10 do: [:i |\x0a                             |ghostBall|\x0a                              ghostBall := Sprite new spriteSheet: 'images/trail.png'.\x0a                              ghostBall addFrameGroupNamed: 'trail' origin: (0@0) size: (10@10) frameCount: 1.\x0a                              ghostBall position: (i * 10) @ (self height / 2).\x0a                              trail add: ghostBall.\x0a                             ].\x0a\x09\x09trail]",
messageSends: ["ifNil:", "to:do:", "spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "position:", "*", "/", "height", "add:"],
referencedClasses: ["Sprite"]
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "updateBumps",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$7,$6,$9,$8,$5,$1,$10,$13,$12,$15,$14,$11,$17,$16,$18,$21,$20,$19,$22,$24,$23;
$4=self._bumps();
$ctx1.sendIdx["bumps"]=1;
$3=_st($4)._second();
$2=_st($3)._x();
$ctx1.sendIdx["x"]=1;
$7=self._scrollSpeed();
$ctx1.sendIdx["scrollSpeed"]=1;
$6=(0).__minus($7);
$ctx1.sendIdx["-"]=2;
$9=self._width();
$ctx1.sendIdx["width"]=1;
$8=_st($9).__slash((25));
$ctx1.sendIdx["/"]=1;
$5=_st($6).__minus($8);
$ctx1.sendIdx["-"]=1;
$1=_st($2).__lt($5);
if(smalltalk.assert($1)){
var y;
$10=self._goingUp();
if(smalltalk.assert($10)){
$13=_st(self["@bumps"])._last();
$ctx1.sendIdx["last"]=1;
$12=_st($13)._y();
$ctx1.sendIdx["y"]=1;
$15=self._maxVariation();
$ctx1.sendIdx["maxVariation"]=1;
$14=_st($15)._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$11=_st($12).__plus($14);
$ctx1.sendIdx["+"]=1;
$17=self._maxVariation();
$ctx1.sendIdx["maxVariation"]=2;
$16=_st($17).__star((2));
y=_st($11).__minus($16);
$ctx1.sendIdx["-"]=3;
} else {
y=_st(_st(_st(self["@bumps"])._last())._y()).__plus(_st(self._maxVariation())._atRandom());
$ctx1.sendIdx["+"]=2;
};
y;
$18=self._bumps();
$ctx1.sendIdx["bumps"]=2;
$21=self._width();
$ctx1.sendIdx["width"]=2;
$20=_st($21).__plus(_st(self._width()).__slash((25)));
$19=_st($20).__at(y);
_st($18)._add_($19);
$22=self._bumps();
$ctx1.sendIdx["bumps"]=3;
$24=self._bumps();
$ctx1.sendIdx["bumps"]=4;
$23=_st($24)._first();
_st($22)._remove_($23);
};
_st(self._bumps())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._x_(_st(_st(each)._x()).__minus(self._scrollSpeed()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateBumps",{},globals.SmallCave)})},
args: [],
source: "updateBumps\x0a\x09self bumps second x < ( 0 - self scrollSpeed - (self width / 25))\x0a\x09\x09ifTrue: [|y|\x0a                         y := self \x0a                         \x09goingUp \x0a                         \x09\x09ifTrue: [bumps last y + self maxVariation atRandom - (self maxVariation * 2)]\x0a                         \x09\x09ifFalse: [bumps last y + self maxVariation atRandom].\x0a                         self bumps add: (self width + (self width / 25) @ y).\x0a                         self bumps remove: self bumps first].\x0a\x09self bumps do: [:each | each x: each x - self scrollSpeed].",
messageSends: ["ifTrue:", "<", "x", "second", "bumps", "-", "scrollSpeed", "/", "width", "ifTrue:ifFalse:", "goingUp", "+", "y", "last", "atRandom", "maxVariation", "*", "add:", "@", "remove:", "first", "do:", "x:"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "updateDifficulty",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4,$5,$8,$7,$6,$9,$10,$11,$12,$15,$16,$14,$13;
$3=self._stepCount();
$ctx1.sendIdx["stepCount"]=1;
$2=_st($3).__backslash_backslash((200));
$ctx1.sendIdx["\x5c\x5c"]=1;
$1=_st($2).__eq((0));
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
$4=[false,true];
$5=(2)._atRandom();
$ctx1.sendIdx["atRandom"]=1;
self["@goingUp"]=_st($4)._at_($5);
self["@goingUp"];
};
$8=self._stepCount();
$ctx1.sendIdx["stepCount"]=2;
$7=_st($8).__backslash_backslash((50));
$ctx1.sendIdx["\x5c\x5c"]=2;
$6=_st($7).__eq((0));
$ctx1.sendIdx["="]=2;
if(smalltalk.assert($6)){
$9=self._light();
$ctx1.sendIdx["light"]=1;
self["@light"]=_st($9).__minus((1));
self["@light"];
};
$10=_st(self._light()).__lt((20));
if(smalltalk.assert($10)){
self["@light"]=(20);
self["@light"];
};
$11=_st(_st(self._stepCount()).__backslash_backslash((1200))).__eq((0));
if(smalltalk.assert($11)){
self["@maxVariation"]=_st(self._maxVariation()).__plus((1));
$ctx1.sendIdx["+"]=1;
self["@maxVariation"];
$12=self._obstaclePositions();
$15=self._width();
$ctx1.sendIdx["width"]=1;
$16=_st(self._width())._atRandom();
$ctx1.sendIdx["atRandom"]=2;
$14=_st($15).__plus($16);
$ctx1.sendIdx["+"]=2;
$13=_st($14).__at(_st(self._height())._atRandom());
_st($12)._add_($13);
self["@scrollSpeed"]=_st(self._scrollSpeed()).__plus((1));
self["@scrollSpeed"];
};
return self}, function($ctx1) {$ctx1.fill(self,"updateDifficulty",{},globals.SmallCave)})},
args: [],
source: "updateDifficulty\x0a\x09(self stepCount \x5c\x5c 200) = 0\x0a\x09\x09ifTrue: [goingUp := {false. true} at: 2 atRandom].\x0a\x09(self stepCount \x5c\x5c 50 = 0)\x0a\x09\x09ifTrue: [light := self light - 1].\x0a\x09self light < 20 ifTrue: [light := 20].\x0a\x09(self stepCount \x5c\x5c 1200) = 0\x0a\x09\x09ifTrue: [\x0a                  \x09maxVariation := self maxVariation + 1.\x0a                        self obstaclePositions add: ((self width + self width atRandom) @ (self height atRandom)).\x0a                        scrollSpeed := self scrollSpeed + 1].",
messageSends: ["ifTrue:", "=", "\x5c\x5c", "stepCount", "at:", "atRandom", "-", "light", "<", "+", "maxVariation", "add:", "obstaclePositions", "@", "width", "height", "scrollSpeed"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "updateObstacles",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1,$5,$8,$9,$7,$6,$10,$12,$11;
$4=self._obstaclePositions();
$ctx1.sendIdx["obstaclePositions"]=1;
$3=_st($4)._first();
$ctx1.sendIdx["first"]=1;
$2=_st($3)._x();
$ctx1.sendIdx["x"]=1;
$1=_st($2).__lt((-100));
if(smalltalk.assert($1)){
$5=self._obstaclePositions();
$ctx1.sendIdx["obstaclePositions"]=2;
$8=self._width();
$ctx1.sendIdx["width"]=1;
$9=_st(self._width())._atRandom();
$ctx1.sendIdx["atRandom"]=1;
$7=_st($8).__plus($9);
$6=_st($7).__at(_st(self._height())._atRandom());
_st($5)._add_($6);
$10=self._obstaclePositions();
$ctx1.sendIdx["obstaclePositions"]=3;
$12=self._obstaclePositions();
$ctx1.sendIdx["obstaclePositions"]=4;
$11=_st($12)._first();
_st($10)._remove_($11);
};
_st(self._obstaclePositions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._x_(_st(_st(each)._x()).__minus(self._scrollSpeed()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateObstacles",{},globals.SmallCave)})},
args: [],
source: "updateObstacles\x0a\x09self obstaclePositions first x < -100\x0a\x09\x09ifTrue: [\x0a                         self obstaclePositions add: ((self width + self width atRandom) @ (self height atRandom)).\x0a                         self obstaclePositions remove: self obstaclePositions first].\x0a\x09self obstaclePositions do: [:each | each x: each x - self scrollSpeed].",
messageSends: ["ifTrue:", "<", "x", "first", "obstaclePositions", "add:", "@", "+", "width", "atRandom", "height", "remove:", "do:", "x:", "-", "scrollSpeed"],
referencedClasses: []
}),
globals.SmallCave);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTrail",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$5,$4,$3,$7,$6;
$2=self._trail();
$ctx1.sendIdx["trail"]=1;
$1=_st($2)._allButLast();
_st($1)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {
$5=self._trail();
$ctx2.sendIdx["trail"]=2;
$4=_st($5)._at_(_st(i).__plus((1)));
$3=_st($4)._y();
$ctx2.sendIdx["y"]=1;
return _st(each)._y_($3);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,1)})}));
$7=self._trail();
$ctx1.sendIdx["trail"]=3;
$6=_st($7)._last();
$ctx1.sendIdx["last"]=1;
_st($6)._centre_(_st(_st(_st(self._trail())._last())._x()).__at(_st(_st(self._ship())._centre())._y()));
return self}, function($ctx1) {$ctx1.fill(self,"updateTrail",{},globals.SmallCave)})},
args: [],
source: "updateTrail\x0a\x09self trail allButLast withIndexDo: [:each :i | each y: (self trail at: i + 1) y].\x0a\x09self trail last centre: self trail last x @ self ship centre y.",
messageSends: ["withIndexDo:", "allButLast", "trail", "y:", "y", "at:", "+", "centre:", "last", "@", "x", "centre", "ship"],
referencedClasses: []
}),
globals.SmallCave);



smalltalk.addClass('Sokoban', globals.Game, ['guy', 'walls', 'stepSize', 'boxes', 'exits', 'lastMove', 'floor', 'currentLevel', 'directionDictionary', 'guyOffsetDictionary', 'boxOffsetDictionary'], 'Ludus-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "advanceLevel",
protocol: 'levels',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$5,$4,$3,$1,$receiver;
_st(self._soundNamed_("applause"))._play();
$2=self._class();
$5=_st(self["@currentLevel"]).__plus((1));
$ctx1.sendIdx["+"]=1;
$4=_st($5)._asString();
$3="level".__comma($4);
$1=_st($2)._methodAt_($3);
if(($receiver = $1) == null || $receiver.isNil){
self._end();
} else {
self["@currentLevel"]=_st(self["@currentLevel"]).__plus((1));
self["@currentLevel"];
};
self._clearLevel();
self._createLevel();
return self}, function($ctx1) {$ctx1.fill(self,"advanceLevel",{},globals.Sokoban)})},
args: [],
source: "advanceLevel\x0a\x09(self soundNamed: 'applause') play.\x0a\x09(self class methodAt: 'level' , (currentLevel + 1) asString) \x0a\x09\x09ifNil: [self end]\x0a\x09\x09ifNotNil:\x09[currentLevel := currentLevel + 1].\x0a\x09self clearLevel.\x0a\x09self createLevel.",
messageSends: ["play", "soundNamed:", "ifNil:ifNotNil:", "methodAt:", "class", ",", "asString", "+", "end", "clearLevel", "createLevel"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "boxOffsetDictionary",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1,$receiver;
$2=self["@boxOffsetDictionary"];
if(($receiver = $2) == null || $receiver.isNil){
$3=(0).__at((5));
$ctx1.sendIdx["@"]=1;
$4=(0).__at((-5));
$ctx1.sendIdx["@"]=2;
$5=(-5).__at((0));
$ctx1.sendIdx["@"]=3;
self["@boxOffsetDictionary"]=globals.HashedCollection._newFromPairs_(["Down",$3,"Up",$4,"Left",$5,"Right",(5).__at((0))]);
$1=self["@boxOffsetDictionary"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"boxOffsetDictionary",{},globals.Sokoban)})},
args: [],
source: "boxOffsetDictionary\x0a\x09^ boxOffsetDictionary ifNil: [ boxOffsetDictionary := #{'Down' -> (0@5). 'Up' -> (0@ -5). 'Left' -> (-5@0). 'Right' -> (5@0)} ]",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "boxes",
protocol: 'sprite collections',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@boxes"];
if(($receiver = $2) == null || $receiver.isNil){
self["@boxes"]=[];
$1=self["@boxes"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"boxes",{},globals.Sokoban)})},
args: [],
source: "boxes\x0a\x09^ boxes ifNil: [boxes := #()]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "clearLevel",
protocol: 'levels',
fn: function (){
var self=this;
self["@boxes"]=[];
self["@walls"]=[];
self["@exits"]=[];
self["@floor"]=[];
return self},
args: [],
source: "clearLevel\x0a\x09boxes := #().\x0a\x09walls := #().\x0a\x09exits := #().\x0a\x09floor := #().",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "createBoxes",
protocol: 'sprite creation',
fn: function (){
var self=this;
var box;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$6,$5,$4,$7,$8,$11,$10,$9;
_st(self._currentLevel())._withIndexDo_((function(eachRow,y){
return smalltalk.withContext(function($ctx2) {
$1=_st(eachRow)._includes_((7));
if(smalltalk.assert($1)){
return _st(eachRow)._withIndexDo_((function(eachColumn,x){
return smalltalk.withContext(function($ctx3) {
$2=_st(eachColumn).__eq((7));
if(smalltalk.assert($2)){
box=_st(_st($Sprite())._new())._spriteSheet_("images/box.png");
box;
$3=box;
$6=_st((6)._atRandom()).__minus((1));
$ctx3.sendIdx["-"]=1;
$5=_st($6).__star((28));
$ctx3.sendIdx["*"]=1;
$4=_st($5).__at((0));
$ctx3.sendIdx["@"]=1;
$7=(28).__at((28));
$ctx3.sendIdx["@"]=2;
_st($3)._addFrameGroupNamed_origin_size_frameCount_("still",$4,$7,(1));
$8=box;
$11=_st(x).__star((30));
$ctx3.sendIdx["*"]=2;
$10=_st($11).__minus((15));
$ctx3.sendIdx["-"]=2;
$9=_st($10).__at(_st(_st(y).__star((30))).__minus((15)));
_st($8)._centre_($9);
return _st(self._boxes())._add_(box);
};
}, function($ctx3) {$ctx3.fillBlock({eachColumn:eachColumn,x:x},$ctx2,3)})}));
};
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,y:y},$ctx1,1)})}));
$ctx1.sendIdx["withIndexDo:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"createBoxes",{box:box},globals.Sokoban)})},
args: [],
source: "createBoxes\x0a\x09|box|\x0a\x0a\x09self currentLevel\x0a\x09\x09withIndexDo: [:eachRow :y | \x0a\x09\x09\x09(eachRow includes: 7) \x0a                              \x09ifTrue: \x0a                              \x09\x09[eachRow withIndexDo: [:eachColumn :x |\x0a\x09\x09\x09\x09\x09\x09eachColumn = 7 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a                                                        \x09box := Sprite new spriteSheet: 'images/box.png'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09box addFrameGroupNamed: 'still' origin: (((6 atRandom - 1) * 28)@0) size: (28@28) frameCount: 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09box centre: ((x * 30) - 15) @ ((y * 30) - 15).\x0a\x09\x09\x09\x09\x09\x09\x09\x09self boxes add: box ]]]].",
messageSends: ["withIndexDo:", "currentLevel", "ifTrue:", "includes:", "=", "spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "*", "-", "atRandom", "centre:", "add:", "boxes"],
referencedClasses: ["Sprite"]
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "createExits",
protocol: 'sprite creation',
fn: function (){
var self=this;
var exit;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$9,$8,$7;
_st(self._currentLevel())._withIndexDo_((function(eachRow,y){
return smalltalk.withContext(function($ctx2) {
$1=_st(eachRow)._includes_((9));
if(smalltalk.assert($1)){
return _st(eachRow)._withIndexDo_((function(eachColumn,x){
return smalltalk.withContext(function($ctx3) {
$2=_st(eachColumn).__eq((9));
if(smalltalk.assert($2)){
exit=_st(_st($Sprite())._new())._spriteSheet_("images/exit.png");
exit;
$3=exit;
$4=(0).__at((0));
$ctx3.sendIdx["@"]=1;
$5=(28).__at((28));
$ctx3.sendIdx["@"]=2;
_st($3)._addFrameGroupNamed_origin_size_frameCount_("exit",$4,$5,(1));
$6=exit;
$9=_st(x).__star((30));
$ctx3.sendIdx["*"]=1;
$8=_st($9).__minus((15));
$ctx3.sendIdx["-"]=1;
$7=_st($8).__at(_st(_st(y).__star((30))).__minus((15)));
_st($6)._centre_($7);
return _st(self._exits())._add_(exit);
};
}, function($ctx3) {$ctx3.fillBlock({eachColumn:eachColumn,x:x},$ctx2,3)})}));
};
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,y:y},$ctx1,1)})}));
$ctx1.sendIdx["withIndexDo:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"createExits",{exit:exit},globals.Sokoban)})},
args: [],
source: "createExits\x0a\x09|exit|\x0a\x0a\x09self currentLevel\x0a\x09\x09withIndexDo: [:eachRow :y | \x0a\x09\x09\x09(eachRow includes: 9) \x0a                              \x09ifTrue: \x0a                              \x09\x09[eachRow withIndexDo: [:eachColumn :x |\x0a\x09\x09\x09\x09\x09\x09eachColumn = 9 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a                                                        \x09exit := Sprite new spriteSheet: 'images/exit.png'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09exit addFrameGroupNamed: 'exit' origin: (0@0) size: (28@28) frameCount: 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09exit centre: ((x * 30) - 15) @ ((y * 30) - 15).\x0a\x09\x09\x09\x09\x09\x09\x09\x09self exits add: exit ]]]].",
messageSends: ["withIndexDo:", "currentLevel", "ifTrue:", "includes:", "=", "spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:", "-", "*", "add:", "exits"],
referencedClasses: ["Sprite"]
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "createFloor",
protocol: 'sprite creation',
fn: function (){
var self=this;
var tile;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$9,$8,$7;
_st(self._currentLevel())._withIndexDo_((function(eachRow,y){
return smalltalk.withContext(function($ctx2) {
$1=_st(eachRow)._includes_((1));
if(smalltalk.assert($1)){
return _st(eachRow)._withIndexDo_((function(eachColumn,x){
return smalltalk.withContext(function($ctx3) {
$2=_st(eachColumn).__gt((1));
if(smalltalk.assert($2)){
tile=_st(_st($Sprite())._new())._spriteSheet_("images/floor.png");
tile;
$3=tile;
$4=(0).__at((0));
$ctx3.sendIdx["@"]=1;
$5=(30).__at((30));
$ctx3.sendIdx["@"]=2;
_st($3)._addFrameGroupNamed_origin_size_frameCount_("tile",$4,$5,(1));
$6=tile;
$9=_st(x).__star((30));
$ctx3.sendIdx["*"]=1;
$8=_st($9).__minus((15));
$ctx3.sendIdx["-"]=1;
$7=_st($8).__at(_st(_st(y).__star((30))).__minus((15)));
_st($6)._centre_($7);
return _st(self._floor())._add_(tile);
};
}, function($ctx3) {$ctx3.fillBlock({eachColumn:eachColumn,x:x},$ctx2,3)})}));
};
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,y:y},$ctx1,1)})}));
$ctx1.sendIdx["withIndexDo:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"createFloor",{tile:tile},globals.Sokoban)})},
args: [],
source: "createFloor\x0a\x09|tile|\x0a\x09self currentLevel\x0a\x09\x09withIndexDo: [:eachRow :y | \x0a\x09\x09\x09(eachRow includes: 1) \x0a                              \x09ifTrue: \x0a                              \x09\x09[eachRow withIndexDo: [:eachColumn :x |\x0a\x09\x09\x09\x09\x09\x09eachColumn > 1\x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a                                                        \x09tile := Sprite new spriteSheet: 'images/floor.png'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09tile addFrameGroupNamed: 'tile' origin: (0@0) size: (30@30) frameCount: 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09tile centre: ((x * 30) - 15) @ ((y * 30) - 15).\x0a\x09\x09\x09\x09\x09\x09\x09\x09self floor add: tile]]]].",
messageSends: ["withIndexDo:", "currentLevel", "ifTrue:", "includes:", ">", "spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:", "-", "*", "add:", "floor"],
referencedClasses: ["Sprite"]
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "createGuy",
protocol: 'sprite creation',
fn: function (){
var self=this;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35;
self["@guy"]=_st(_st($Sprite())._new())._spriteSheet_("images/guy.png");
$1=self["@guy"];
$2=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$3=(25).__at((25));
$ctx1.sendIdx["@"]=2;
_st($1)._addFrameGroupNamed_origin_size_frameCount_("walkDown",$2,$3,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
$4=self["@guy"];
$5=(0).__at((25));
$ctx1.sendIdx["@"]=3;
$6=(25).__at((25));
$ctx1.sendIdx["@"]=4;
_st($4)._addFrameGroupNamed_origin_size_frameCount_("walkUp",$5,$6,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
$7=self["@guy"];
$8=(0).__at((50));
$ctx1.sendIdx["@"]=5;
$9=(25).__at((25));
$ctx1.sendIdx["@"]=6;
_st($7)._addFrameGroupNamed_origin_size_frameCount_("walkLeft",$8,$9,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=3;
$10=self["@guy"];
$11=(0).__at((75));
$ctx1.sendIdx["@"]=7;
$12=(25).__at((25));
$ctx1.sendIdx["@"]=8;
_st($10)._addFrameGroupNamed_origin_size_frameCount_("walkRight",$11,$12,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=4;
$13=self["@guy"];
$14=(50).__at((0));
$ctx1.sendIdx["@"]=9;
$15=(25).__at((25));
$ctx1.sendIdx["@"]=10;
_st($13)._addFrameGroupNamed_origin_size_frameCount_("stillDown",$14,$15,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=5;
$16=self["@guy"];
$17=(50).__at((25));
$ctx1.sendIdx["@"]=11;
$18=(25).__at((25));
$ctx1.sendIdx["@"]=12;
_st($16)._addFrameGroupNamed_origin_size_frameCount_("stillUp",$17,$18,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=6;
$19=self["@guy"];
$20=(50).__at((50));
$ctx1.sendIdx["@"]=13;
$21=(25).__at((25));
$ctx1.sendIdx["@"]=14;
_st($19)._addFrameGroupNamed_origin_size_frameCount_("stillLeft",$20,$21,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=7;
$22=self["@guy"];
$23=(50).__at((75));
$ctx1.sendIdx["@"]=15;
$24=(25).__at((25));
$ctx1.sendIdx["@"]=16;
_st($22)._addFrameGroupNamed_origin_size_frameCount_("stillRight",$23,$24,(1));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=8;
$25=self["@guy"];
$26=(75).__at((0));
$ctx1.sendIdx["@"]=17;
$27=(25).__at((25));
$ctx1.sendIdx["@"]=18;
_st($25)._addFrameGroupNamed_origin_size_frameCount_("pushDown",$26,$27,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=9;
$28=self["@guy"];
$29=(75).__at((25));
$ctx1.sendIdx["@"]=19;
$30=(25).__at((25));
$ctx1.sendIdx["@"]=20;
_st($28)._addFrameGroupNamed_origin_size_frameCount_("pushUp",$29,$30,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=10;
$31=self["@guy"];
$32=(75).__at((50));
$ctx1.sendIdx["@"]=21;
$33=(25).__at((25));
$ctx1.sendIdx["@"]=22;
_st($31)._addFrameGroupNamed_origin_size_frameCount_("pushLeft",$32,$33,(2));
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=11;
$34=self["@guy"];
$35=(75).__at((75));
$ctx1.sendIdx["@"]=23;
_st($34)._addFrameGroupNamed_origin_size_frameCount_("pushRight",$35,(25).__at((25)),(2));
_st(self["@guy"])._centre_(self._startPositionFor_(self._currentLevel()));
_st(self["@guy"])._frameRate_((2));
return self}, function($ctx1) {$ctx1.fill(self,"createGuy",{},globals.Sokoban)})},
args: [],
source: "createGuy\x0a\x09guy := Sprite new spriteSheet: 'images/guy.png'.\x0a\x09guy addFrameGroupNamed: 'walkDown' origin: (0@0) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'walkUp' origin: (0@25) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'walkLeft' origin: (0@50) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'walkRight' origin: (0@75) size: (25@25) frameCount: 2.\x0a\x0a\x09guy addFrameGroupNamed: 'stillDown' origin: (50@0) size: (25@25) frameCount: 1.\x0a\x09guy addFrameGroupNamed: 'stillUp' origin: (50@25) size: (25@25) frameCount: 1.\x0a\x09guy addFrameGroupNamed: 'stillLeft' origin: (50@50) size: (25@25) frameCount: 1.\x0a\x09guy addFrameGroupNamed: 'stillRight' origin: (50@75) size: (25@25) frameCount: 1.\x0a\x0a\x09guy addFrameGroupNamed: 'pushDown' origin: (75@0) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'pushUp' origin: (75@25) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'pushLeft' origin: (75@50) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'pushRight' origin: (75@75) size: (25@25) frameCount: 2.\x0a\x0a\x09guy centre: (self startPositionFor: self currentLevel).\x0a\x0a\x09guy frameRate: 2.",
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:", "startPositionFor:", "currentLevel", "frameRate:"],
referencedClasses: ["Sprite"]
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "createLevel",
protocol: 'levels',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._createFloor();
self._createExits();
self._createGuy();
self._createBoxes();
$1=self._createWalls();
return self}, function($ctx1) {$ctx1.fill(self,"createLevel",{},globals.Sokoban)})},
args: [],
source: "createLevel\x0a\x09self createFloor;\x0a\x09\x09createExits;\x0a\x09\x09createGuy;\x0a\x09\x09createBoxes;\x0a\x09\x09createWalls.",
messageSends: ["createFloor", "createExits", "createGuy", "createBoxes", "createWalls"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "createWalls",
protocol: 'sprite creation',
fn: function (){
var self=this;
var wall;
function $Sprite(){return globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$8,$7,$9;
_st(self._currentLevel())._withIndexDo_((function(eachRow,y){
return smalltalk.withContext(function($ctx2) {
$1=_st(eachRow)._includes_((1));
if(smalltalk.assert($1)){
return _st(eachRow)._withIndexDo_((function(eachColumn,x){
return smalltalk.withContext(function($ctx3) {
$2=_st(eachColumn).__eq((1));
if(smalltalk.assert($2)){
wall=_st(_st($Sprite())._new())._spriteSheet_("images/wall.png");
wall;
$3=wall;
$4=(0).__at((0));
$ctx3.sendIdx["@"]=1;
_st($3)._addFrameGroupNamed_origin_size_frameCount_("wall",$4,(30).__at((30)),(1));
$5=wall;
$6=$5;
$8=_st(x).__star((30));
$ctx3.sendIdx["*"]=1;
$7=_st($8).__minus((30));
$ctx3.sendIdx["-"]=1;
_st($6)._x_($7);
$9=_st($5)._y_(_st(_st(y).__star((30))).__minus((30)));
$9;
return _st(self._walls())._add_(wall);
};
}, function($ctx3) {$ctx3.fillBlock({eachColumn:eachColumn,x:x},$ctx2,3)})}));
};
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,y:y},$ctx1,1)})}));
$ctx1.sendIdx["withIndexDo:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"createWalls",{wall:wall},globals.Sokoban)})},
args: [],
source: "createWalls\x0a\x09|wall|\x0a\x0a\x09self currentLevel\x0a\x09\x09withIndexDo: [:eachRow :y | \x0a\x09\x09\x09(eachRow includes: 1) \x0a                              \x09ifTrue: \x0a                              \x09\x09[eachRow withIndexDo: [:eachColumn :x |\x0a\x09\x09\x09\x09\x09\x09eachColumn = 1 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a                                                        \x09wall := Sprite new spriteSheet: 'images/wall.png'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09wall addFrameGroupNamed: 'wall' origin: (0@0) size: (30@30) frameCount: 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09wall x: ((x * 30) - 30); y: ((y * 30) - 30).\x0a\x09\x09\x09\x09\x09\x09\x09\x09self walls add: wall ]]]].",
messageSends: ["withIndexDo:", "currentLevel", "ifTrue:", "includes:", "=", "spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "x:", "-", "*", "y:", "add:", "walls"],
referencedClasses: ["Sprite"]
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "currentLevel",
protocol: 'levels',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@currentLevel"];
if(($receiver = $1) == null || $receiver.isNil){
self["@currentLevel"]=(1);
self["@currentLevel"];
} else {
$1;
};
$2=self._perform_("level".__comma(_st(self["@currentLevel"])._asString()));
return $2;
}, function($ctx1) {$ctx1.fill(self,"currentLevel",{},globals.Sokoban)})},
args: [],
source: "currentLevel\x0a\x09currentLevel ifNil: [currentLevel := 1].\x0a\x09^ self perform: 'level' , currentLevel asString",
messageSends: ["ifNil:", "perform:", ",", "asString"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "directionDictionary",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@directionDictionary"];
if(($receiver = $2) == null || $receiver.isNil){
self["@directionDictionary"]=globals.HashedCollection._newFromPairs_(["Down","bottom","Up","top","Left","left","Right","right"]);
$1=self["@directionDictionary"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"directionDictionary",{},globals.Sokoban)})},
args: [],
source: "directionDictionary\x0a\x09^ directionDictionary ifNil: [ directionDictionary := #{'Down' -> 'bottom'. 'Up' -> 'top'. 'Left' -> 'left'. 'Right' -> 'right'} ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._clearCanvas();
_st(self._floor())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._drawSprite_(each);
$ctx2.sendIdx["drawSprite:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(self._walls())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._drawSprite_(each);
$ctx2.sendIdx["drawSprite:"]=2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$ctx1.sendIdx["do:"]=2;
_st(self._exits())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._drawSprite_(each);
$ctx2.sendIdx["drawSprite:"]=3;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
$ctx1.sendIdx["do:"]=3;
self._drawSprite_(self["@guy"]);
$ctx1.sendIdx["drawSprite:"]=4;
_st(self._boxes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._drawSprite_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.Sokoban)})},
args: [],
source: "draw\x0a\x09self clearCanvas.\x0a        self floor do: [:each | self drawSprite: each].\x0a\x09self walls do: [:each | self drawSprite: each].\x0a\x09self exits do: [:each | self drawSprite: each].\x0a\x09self drawSprite: guy.\x0a\x09self boxes do: [:each | self drawSprite: each].",
messageSends: ["clearCanvas", "do:", "floor", "drawSprite:", "walls", "exits", "boxes"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "end",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Sokoban.superclass.fn.prototype._end.apply(_st(self), []));
$ctx1.supercall = false;
_st(self._soundNamed_("factory"))._stop();
return self}, function($ctx1) {$ctx1.fill(self,"end",{},globals.Sokoban)})},
args: [],
source: "end\x0a\x09super end.\x0a\x09(self soundNamed: 'factory') stop.",
messageSends: ["end", "stop", "soundNamed:"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "exits",
protocol: 'sprite collections',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@exits"];
if(($receiver = $2) == null || $receiver.isNil){
self["@exits"]=[];
$1=self["@exits"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"exits",{},globals.Sokoban)})},
args: [],
source: "exits\x0a\x09^ exits ifNil: [exits := #()]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "floor",
protocol: 'sprite collections',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@floor"];
if(($receiver = $2) == null || $receiver.isNil){
self["@floor"]=[];
$1=self["@floor"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"floor",{},globals.Sokoban)})},
args: [],
source: "floor\x0a\x09^ floor ifNil: [floor := #()]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "go:",
protocol: 'movement',
fn: function (aDirection){
var self=this;
var side,offset;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$10,$11,$12,$13,$14,$15,$16,$17;
side=_st(self._directionDictionary())._at_(aDirection);
$ctx1.sendIdx["at:"]=1;
offset=_st(self._guyOffsetDictionary())._at_(aDirection);
_st(self["@guy"])._moveCentreBy_(offset);
$ctx1.sendIdx["moveCentreBy:"]=1;
$2=self["@guy"];
$3=_st(side).__comma("CollidesWithAnyOf:");
$ctx1.sendIdx[","]=1;
$1=_st($2)._perform_withArguments_($3,[self["@walls"]]);
$ctx1.sendIdx["perform:withArguments:"]=1;
if(smalltalk.assert($1)){
_st(self["@guy"])._moveCentreBy_(_st(offset).__star((-1)));
_st(self["@guy"])._currentFrameGroup_("push".__comma(aDirection));
} else {
$5=self["@guy"];
$6=_st(side).__comma("CollidesWithAnyOf:");
$ctx1.sendIdx[","]=2;
$4=_st($5)._perform_withArguments_($6,[self["@boxes"]]);
$ctx1.sendIdx["perform:withArguments:"]=2;
if(smalltalk.assert($4)){
$8=self["@guy"];
$9=_st(side).__comma("CollidesWithWhichOf:");
$ctx1.sendIdx[","]=3;
$7=_st($8)._perform_withArguments_($9,[self["@boxes"]]);
self._moveBox_direction_($7,aDirection);
$10=self["@guy"];
$11=_st(offset).__star((-1));
$ctx1.sendIdx["*"]=1;
_st($10)._moveCentreBy_($11);
$ctx1.sendIdx["moveCentreBy:"]=2;
$12=self["@guy"];
$13="push".__comma(aDirection);
$ctx1.sendIdx[","]=4;
_st($12)._currentFrameGroup_($13);
$ctx1.sendIdx["currentFrameGroup:"]=1;
} else {
$14=self["@guy"];
$15=_st(_st(offset).__slash((8))).__star(_st(self["@stepSize"]).__minus((8)));
$ctx1.sendIdx["*"]=2;
_st($14)._moveCentreBy_($15);
$ctx1.sendIdx["moveCentreBy:"]=3;
$16=self["@guy"];
$17="walk".__comma(aDirection);
$ctx1.sendIdx[","]=5;
_st($16)._currentFrameGroup_($17);
$ctx1.sendIdx["currentFrameGroup:"]=2;
};
};
self["@lastMove"]=aDirection;
return self}, function($ctx1) {$ctx1.fill(self,"go:",{aDirection:aDirection,side:side,offset:offset},globals.Sokoban)})},
args: ["aDirection"],
source: "go: aDirection\x0a\x09|side offset|\x0a\x09side := self directionDictionary at: aDirection.\x0a\x09offset := self guyOffsetDictionary at: aDirection.\x0a\x0a\x09guy moveCentreBy: offset.\x0a\x09(guy perform: side , 'CollidesWithAnyOf:' withArguments: {walls})\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[(guy perform: side , 'CollidesWithAnyOf:' withArguments: {boxes})\x0a                         \x09ifTrue: \x0a                         \x09\x09[self moveBox: (guy perform: side , 'CollidesWithWhichOf:' withArguments: {boxes}) direction: aDirection.\x0a                                        guy moveCentreBy: (offset * -1).\x0a                                        guy currentFrameGroup: 'push', aDirection]\x0a\x09                        ifFalse: \x0a                         \x09\x09[guy moveCentreBy: ((offset / 8) * (stepSize - 8)).\x0a        \x09                \x09guy currentFrameGroup: 'walk', aDirection]]\x0a\x09\x09ifTrue: \x0a\x09\x09\x09[guy moveCentreBy: (offset * -1).\x0a                        guy currentFrameGroup: 'push' , aDirection].\x0a\x0a\x09lastMove := aDirection.",
messageSends: ["at:", "directionDictionary", "guyOffsetDictionary", "moveCentreBy:", "ifFalse:ifTrue:", "perform:withArguments:", ",", "ifTrue:ifFalse:", "moveBox:direction:", "*", "currentFrameGroup:", "/", "-"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "guyOffsetDictionary",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1,$receiver;
$2=self["@guyOffsetDictionary"];
if(($receiver = $2) == null || $receiver.isNil){
$3=(0).__at((8));
$ctx1.sendIdx["@"]=1;
$4=(0).__at((-8));
$ctx1.sendIdx["@"]=2;
$5=(-8).__at((0));
$ctx1.sendIdx["@"]=3;
self["@guyOffsetDictionary"]=globals.HashedCollection._newFromPairs_(["Down",$3,"Up",$4,"Left",$5,"Right",(8).__at((0))]);
$1=self["@guyOffsetDictionary"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"guyOffsetDictionary",{},globals.Sokoban)})},
args: [],
source: "guyOffsetDictionary\x0a\x09^ guyOffsetDictionary ifNil: [ guyOffsetDictionary := #{'Down' -> (0@8). 'Up' -> (0@ -8). 'Left' -> (-8@0). 'Right' -> (8@0)} ]",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "isLevelOver",
protocol: 'control',
fn: function (){
var self=this;
var exitCentres;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
exitCentres=_st(self._exits())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._centre();
$ctx2.sendIdx["centre"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(self._boxes())._do_((function(elem){
return smalltalk.withContext(function($ctx2) {
$1=_st(exitCentres)._includes_(_st(elem)._centre());
if(! smalltalk.assert($1)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1,2)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"isLevelOver",{exitCentres:exitCentres},globals.Sokoban)})},
args: [],
source: "isLevelOver\x0a\x09|exitCentres|\x0a\x09exitCentres := (self exits collect: [:each | each centre]).\x0a\x0a\x09self boxes do: [:elem | (exitCentres includes: elem centre) ifFalse: [^ false]].\x0a\x0a\x09^ true",
messageSends: ["collect:", "exits", "centre", "do:", "boxes", "ifFalse:", "includes:"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "lastMove",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@lastMove"];
if(($receiver = $2) == null || $receiver.isNil){
self["@lastMove"]="Down";
$1=self["@lastMove"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastMove",{},globals.Sokoban)})},
args: [],
source: "lastMove\x0a\x09^ lastMove ifNil: [lastMove := 'Down']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level1",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (1), (7), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (2), (2), (7), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (2), (1), (2), (1), (1), (2), (1), (0), (0), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (1), (2), (2), (2), (1), (2), (1), (1), (2), (1), (1), (1), (1), (2), (2), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (1), (2), (7), (2), (2), (7), (2), (2), (2), (2), (2), (2), (2), (2), (2), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (1), (1), (2), (1), (1), (1), (2), (1), (8), (1), (2), (2), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level1\x0a\x09^  \x0a     #(#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 1 2 2 2 1 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 1 7 2 2 1 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 1 1 1 2 2 7 1 1 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 1 2 2 7 2 7 2 1 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 1 1 1 2 1 2 1 1 2 1 0 0 1 1 1 1 1 1 0 0 0)\x0a       #(0 0 0 1 2 2 2 1 2 1 1 2 1 1 1 1 2 2 9 9 1 0 0 0)\x0a       #(0 0 0 1 2 7 2 2 7 2 2 2 2 2 2 2 2 2 9 9 1 0 0 0)\x0a       #(0 0 0 1 1 1 1 1 2 1 1 1 2 1 8 1 2 2 9 9 1 0 0 0)\x0a       #(0 0 0 0 0 0 0 1 2 2 2 2 2 1 1 1 1 1 1 1 1 0 0 0)\x0a       #(0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level10",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (1), (1), (8), (1), (1), (1), (1), (2), (2), (2), (2), (2), (2), (2), (1), (2), (2), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (7), (2), (2), (2), (7), (7), (2), (2), (7), (2), (7), (2), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (7), (7), (7), (1), (2), (2), (2), (2), (7), (2), (2), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (2), (2), (2), (1), (2), (7), (7), (2), (7), (7), (2), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (1), (1), (2), (2), (2), (1), (2), (2), (7), (2), (2), (2), (2), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (2), (1), (2), (7), (2), (7), (2), (7), (2), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (1), (1), (1), (1), (1), (1), (2), (1), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (1), (2), (1), (2), (2), (1), (2), (2), (7), (2), (7), (2), (2), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (1), (1), (2), (1), (2), (7), (7), (2), (7), (2), (7), (1), (1), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (9), (9), (1), (2), (1), (2), (2), (7), (2), (2), (2), (2), (2), (2), (1), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (9), (9), (1), (2), (1), (2), (7), (7), (7), (2), (7), (7), (7), (2), (1), (9), (1), (0), (0), (0)], [(0), (0), (1), (1), (1), (1), (1), (2), (1), (2), (2), (2), (2), (2), (2), (2), (1), (2), (1), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (2), (1), (1), (1), (1), (1), (1), (1), (1), (1), (2), (1), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (1), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level10\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 1 1 1 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 1 1 8 1 1 1 1 2 2 2 2 2 2 2 1 2 2 2 1 0 0 0) \x0a#(0 0 1 2 7 7 2 2 2 7 7 2 2 7 2 7 2 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 7 7 7 1 2 2 2 2 7 2 2 1 9 9 9 1 0 0 0) \x0a#(0 0 1 2 7 2 2 2 1 2 7 7 2 7 7 2 1 9 9 9 1 0 0 0) \x0a#(0 0 1 1 1 2 2 2 1 2 2 7 2 2 2 2 1 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 2 2 2 1 2 7 2 7 2 7 2 1 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 2 2 1 1 1 1 1 1 2 1 1 1 9 9 9 1 0 0 0) \x0a#(0 0 1 1 2 1 2 2 1 2 2 7 2 7 2 2 1 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 1 1 2 1 2 7 7 2 7 2 7 1 1 9 9 1 0 0 0) \x0a#(0 0 1 2 9 9 1 2 1 2 2 7 2 2 2 2 2 2 1 9 1 0 0 0) \x0a#(0 0 1 2 9 9 1 2 1 2 7 7 7 2 7 7 7 2 1 9 1 0 0 0) \x0a#(0 0 1 1 1 1 1 2 1 2 2 2 2 2 2 2 1 2 1 9 1 0 0 0) \x0a#(0 0 0 0 0 0 1 2 1 1 1 1 1 1 1 1 1 2 1 9 1 0 0 0) \x0a#(0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 1 9 1 0 0 0) \x0a#(0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level11",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (0), (1), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (2), (8), (1), (1), (1), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (2), (2), (2), (2), (2), (2), (7), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (1), (2), (2), (7), (2), (7), (7), (1), (1), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (1), (7), (1), (1), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (1), (2), (7), (2), (7), (7), (2), (1), (2), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (7), (2), (1), (2), (2), (1), (2), (7), (2), (1), (1), (1), (1), (1), (0), (0), (0), (0)], [(0), (1), (1), (1), (1), (2), (2), (2), (2), (1), (2), (2), (7), (7), (2), (1), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (1), (1), (1), (1), (2), (1), (1), (2), (7), (2), (2), (2), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (1), (9), (2), (2), (2), (2), (1), (1), (1), (2), (2), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0)], [(0), (1), (9), (9), (2), (9), (9), (1), (0), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (1), (9), (9), (9), (1), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (1), (9), (9), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level11\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a#(0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 1 1 1 1 0 1 2 2 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 1 2 8 1 1 1 7 2 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 1 1 2 2 2 2 2 2 7 2 2 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 1 2 2 7 2 7 7 1 1 2 1 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 1 7 1 1 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 1 2 7 2 7 7 2 1 2 1 1 1 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 2 7 2 1 2 2 1 2 7 2 1 1 1 1 1 0 0 0 0) \x0a#(0 1 1 1 1 2 2 2 2 1 2 2 7 7 2 1 2 2 2 1 0 0 0 0) \x0a#(0 1 1 1 1 2 1 1 2 7 2 2 2 2 2 2 2 2 2 1 0 0 0 0) \x0a#(0 1 9 2 2 2 2 1 1 1 2 2 1 1 1 1 1 1 1 1 0 0 0 0) \x0a#(0 1 9 9 2 9 9 1 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 1 9 9 9 1 9 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 1 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)  \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level12",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (2), (1), (1), (1), (1), (1), (1), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (2), (2), (7), (2), (7), (2), (7), (2), (7), (1), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (2), (2), (2), (7), (8), (7), (2), (2), (2), (1), (1), (2), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (2), (2), (7), (2), (7), (2), (7), (1), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (2), (2), (2), (7), (2), (7), (2), (2), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (1), (1), (7), (7), (7), (2), (7), (2), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (1), (2), (1), (1), (2), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (2), (2), (2), (1), (1), (2), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (2), (2), (2), (2), (2), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level12\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0) \x0a#(0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0) \x0a#(0 0 0 0 1 2 1 2 1 1 1 1 1 1 2 2 2 2 2 1 0 0 0 0) \x0a#(0 0 0 0 1 2 1 2 2 7 2 7 2 7 2 7 1 2 2 1 0 0 0 0) \x0a#(0 0 0 0 1 2 1 2 2 2 7 8 7 2 2 2 1 1 2 1 1 0 0 0) \x0a#(0 0 0 0 1 2 1 2 2 7 2 7 2 7 1 1 1 9 9 9 1 0 0 0) \x0a#(0 0 0 0 1 2 1 2 2 2 7 2 7 2 2 1 1 9 9 9 1 0 0 0) \x0a#(0 0 0 0 1 2 1 1 1 7 7 7 2 7 2 1 1 9 9 9 1 0 0 0) \x0a#(0 0 0 0 1 2 2 2 2 2 1 2 1 1 2 1 1 9 9 9 1 0 0 0) \x0a#(0 0 0 0 1 1 1 1 1 2 2 2 1 1 2 1 1 9 9 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 1 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level13",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (2), (2), (2), (1), (1), (2), (2), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (1), (1), (1), (2), (2), (2), (2), (2), (1), (2), (2), (1), (2), (2), (2), (2), (1), (1), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (7), (2), (1), (7), (2), (1), (2), (2), (1), (2), (2), (9), (9), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (1), (2), (7), (1), (8), (7), (1), (1), (2), (1), (2), (1), (9), (1), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (1), (2), (1), (7), (2), (2), (1), (2), (2), (2), (2), (9), (2), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (2), (2), (2), (2), (7), (2), (1), (2), (1), (2), (1), (9), (1), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (1), (1), (2), (2), (1), (1), (7), (2), (7), (2), (9), (2), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (2), (1), (2), (2), (2), (1), (2), (2), (1), (7), (1), (9), (1), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (1), (2), (7), (2), (2), (7), (2), (2), (2), (7), (2), (2), (7), (9), (9), (9), (2), (1), (0), (0), (0)], [(0), (0), (0), (1), (7), (2), (1), (1), (1), (1), (1), (1), (2), (2), (2), (2), (1), (1), (2), (2), (1), (0), (0), (0)], [(0), (0), (0), (1), (2), (2), (1), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level13\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 2 2 2 1 1 2 2 1 1 1 1 1 1 0 0 0 0 0) \x0a#(0 0 1 1 1 2 2 2 2 2 1 2 2 1 2 2 2 2 1 1 1 0 0 0) \x0a#(0 0 1 2 2 7 2 1 7 2 1 2 2 1 2 2 9 9 9 2 1 0 0 0) \x0a#(0 0 1 2 1 2 7 1 8 7 1 1 2 1 2 1 9 1 9 2 1 0 0 0) \x0a#(0 0 1 2 2 1 2 1 7 2 2 1 2 2 2 2 9 2 9 2 1 0 0 0) \x0a#(0 0 1 2 7 2 2 2 2 7 2 1 2 1 2 1 9 1 9 2 1 0 0 0) \x0a#(0 0 1 2 2 2 1 1 2 2 1 1 7 2 7 2 9 2 9 2 1 0 0 0) \x0a#(0 0 1 2 7 2 1 2 2 2 1 2 2 1 7 1 9 1 9 2 1 0 0 0) \x0a#(0 0 1 1 2 7 2 2 7 2 2 2 7 2 2 7 9 9 9 2 1 0 0 0) \x0a#(0 0 0 1 7 2 1 1 1 1 1 1 2 2 2 2 1 1 2 2 1 0 0 0) \x0a#(0 0 0 1 2 2 1 0 0 0 0 1 1 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level2",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (2), (2), (2), (2), (2), (1), (1), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (2), (7), (2), (2), (7), (2), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (7), (1), (1), (1), (1), (2), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (2), (2), (2), (2), (8), (2), (1), (1), (2), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (2), (1), (2), (2), (7), (2), (1), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (2), (1), (1), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (2), (7), (2), (2), (7), (2), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (1), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level2\x0a\x09^  \x0a   #(#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 9 9 2 2 1 2 2 2 2 2 1 1 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 9 9 2 2 1 2 7 2 2 7 2 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 9 9 2 2 1 7 1 1 1 1 2 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 9 9 2 2 2 2 8 2 1 1 2 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 9 9 2 2 1 2 1 2 2 7 2 1 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 1 1 1 1 1 2 1 1 7 2 7 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 1 2 7 2 2 7 2 7 2 7 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 1 2 2 2 2 1 2 2 2 2 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level3",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (8), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (7), (1), (7), (2), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (7), (2), (2), (7), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (2), (7), (2), (1), (2), (1), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (1), (9), (9), (9), (9), (2), (2), (1), (1), (2), (7), (2), (2), (7), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (9), (9), (9), (2), (2), (2), (2), (7), (2), (2), (7), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (1), (9), (9), (9), (9), (2), (2), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level3\x0a\x09^\x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)  \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 8 1 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 2 7 1 7 2 1 1 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 2 7 2 2 7 1 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 1 7 2 7 2 1 0 0 0 0 0 0) \x0a#(0 0 0 1 1 1 1 1 1 1 1 1 2 7 2 1 2 1 1 1 0 0 0 0) \x0a#(0 0 0 1 9 9 9 9 2 2 1 1 2 7 2 2 7 2 2 1 0 0 0 0) \x0a#(0 0 0 1 1 9 9 9 2 2 2 2 7 2 2 7 2 2 2 1 0 0 0 0) \x0a#(0 0 0 1 9 9 9 9 2 2 1 1 1 1 1 1 1 1 1 1 0 0 0 0) \x0a#(0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level4",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (9), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (2), (2), (9), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (1), (2), (2), (7), (2), (7), (2), (2), (2), (9), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (7), (7), (1), (7), (2), (2), (7), (2), (1), (2), (2), (9), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (7), (2), (2), (2), (2), (2), (7), (2), (1), (2), (2), (9), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (7), (2), (1), (7), (2), (7), (2), (7), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (7), (2), (1), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (1), (2), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (1), (2), (2), (2), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (2), (7), (2), (2), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (7), (7), (1), (7), (7), (2), (2), (8), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (1), (2), (2), (2), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level4\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 9 9 9 9 1 0 0 0) \x0a#(0 0 1 1 1 1 1 1 1 1 1 1 1 1 2 2 9 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 2 2 1 2 2 7 2 7 2 2 2 9 9 9 9 1 0 0 0) \x0a#(0 0 1 2 7 7 7 1 7 2 2 7 2 1 2 2 9 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 7 2 2 2 2 2 7 2 1 2 2 9 9 9 9 1 0 0 0) \x0a#(0 0 1 2 7 7 2 1 7 2 7 2 7 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 1 2 2 7 2 1 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 1 2 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 2 2 1 2 2 2 2 1 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 2 2 2 7 2 2 2 1 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 7 7 1 7 7 2 2 8 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 2 2 1 2 2 2 2 1 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0)\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level5",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (1), (7), (1), (1), (2), (2), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (7), (2), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (2), (1), (1), (1), (2), (2), (2), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (9), (9), (2), (2), (1), (1), (2), (7), (2), (2), (7), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (9), (9), (2), (2), (2), (2), (7), (2), (7), (7), (2), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (9), (9), (2), (2), (1), (1), (7), (2), (2), (7), (2), (8), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (2), (2), (7), (2), (2), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (7), (2), (7), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (2), (1), (1), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level5\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 1 7 1 1 2 2 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 7 2 1 0 0 0) \x0a#(0 0 0 0 1 1 1 1 1 1 1 1 1 2 1 1 1 2 2 2 1 0 0 0) \x0a#(0 0 0 0 1 9 9 9 9 2 2 1 1 2 7 2 2 7 1 1 1 0 0 0) \x0a#(0 0 0 0 1 9 9 9 9 2 2 2 2 7 2 7 7 2 1 1 0 0 0 0) \x0a#(0 0 0 0 1 9 9 9 9 2 2 1 1 7 2 2 7 2 8 1 0 0 0 0) \x0a#(0 0 0 0 1 1 1 1 1 1 1 1 1 2 2 7 2 2 1 1 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 7 2 7 2 2 1 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 2 1 1 2 1 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 1 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level6",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (0), (0), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (0), (1), (1), (8), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (1), (1), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (2), (2), (2), (2), (2), (7), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (2), (1), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (1), (1), (1), (2), (1), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (2), (7), (2), (1), (7), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (7), (1), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (7), (2), (2), (7), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (1), (1), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level6\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 1 1 0 0 1 1 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 2 2 1 0 1 1 8 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 2 2 1 1 1 2 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 2 2 2 2 2 7 7 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 2 2 1 2 1 2 7 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 1 1 1 2 1 2 7 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 2 7 2 1 7 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 1 2 2 7 1 2 7 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 1 2 7 2 2 7 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 1 2 2 1 1 2 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level7",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (2), (2), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (2), (1), (2), (8), (1), (1), (2), (7), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (2), (2), (7), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (7), (2), (2), (1), (1), (1), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (2), (1), (1), (1), (1), (1), (7), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (7), (2), (2), (1), (1), (1), (2), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (7), (2), (7), (2), (7), (2), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (2), (2), (1), (1), (1), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (7), (7), (2), (1), (0), (1), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (1), (1), (1), (0), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level7\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 1 1 1 2 2 2 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 2 1 2 8 1 1 2 7 7 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 2 2 2 7 2 2 2 2 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 2 7 2 2 1 1 1 2 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 1 2 1 1 1 1 1 7 1 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 7 2 2 1 1 1 2 9 9 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 7 2 7 2 7 2 9 9 9 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 2 2 2 1 1 1 9 9 9 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 7 7 2 1 0 1 9 9 9 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 2 1 1 1 0 1 1 1 1 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level8",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (7), (2), (2), (2), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (7), (1), (2), (7), (2), (1), (2), (2), (7), (2), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (7), (2), (7), (2), (2), (1), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (2), (7), (1), (2), (1), (2), (2), (1), (1), (1), (1), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (8), (1), (7), (2), (7), (2), (7), (2), (2), (1), (1), (2), (2), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (2), (2), (2), (2), (7), (2), (1), (7), (1), (2), (2), (2), (1), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (2), (2), (2), (7), (2), (2), (2), (2), (7), (2), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (1), (1), (2), (2), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (9), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (9), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (9), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level8\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 2 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 2 2 2 7 2 2 2 7 2 7 2 1 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 7 1 2 7 2 1 2 2 7 2 2 1 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 2 7 2 7 2 2 1 2 2 2 2 1 0 0 0 0 0) \x0a#(0 0 0 1 1 1 2 7 1 2 1 2 2 1 1 1 1 2 1 0 0 0 0 0) \x0a#(0 0 0 1 8 1 7 2 7 2 7 2 2 1 1 2 2 2 1 0 0 0 0 0) \x0a#(0 0 0 1 2 2 2 2 7 2 1 7 1 2 2 2 1 2 1 0 0 0 0 0) \x0a#(0 0 0 1 2 2 2 7 2 2 2 2 7 2 7 2 7 2 1 0 0 0 0 0) \x0a#(0 0 0 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "level9",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (2), (2), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (9), (2), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (1), (1), (2), (2), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (2), (1), (1), (2), (2), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (2), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (7), (7), (7), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (2), (2), (7), (2), (7), (2), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (2), (2), (2), (1), (7), (2), (7), (2), (2), (2), (1), (2), (2), (2), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (8), (2), (7), (2), (2), (7), (2), (2), (2), (2), (7), (2), (2), (7), (2), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (2), (7), (7), (2), (7), (2), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "level9\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 9 9 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 2 2 9 9 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 2 9 2 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 1 2 2 1 1 2 2 9 9 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 1 1 2 1 1 2 2 9 9 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 1 1 1 2 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 1 2 7 7 7 2 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 1 2 2 7 2 7 2 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 1 1 2 2 2 1 7 2 7 2 2 2 1 2 2 2 1 0 0 0) \x0a#(0 0 0 0 1 8 2 7 2 2 7 2 2 2 2 7 2 2 7 2 1 0 0 0) \x0a#(0 0 0 0 1 1 1 1 1 1 2 7 7 2 7 2 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "moveBox:direction:",
protocol: 'movement',
fn: function (aBox,aDirection){
var self=this;
var side,offset;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$7,$6;
side=_st(self._directionDictionary())._at_(aDirection);
$ctx1.sendIdx["at:"]=1;
offset=_st(self._boxOffsetDictionary())._at_(aDirection);
$2=_st(aBox)._centre();
$ctx1.sendIdx["centre"]=1;
$1=_st($2).__plus(offset);
_st(aBox)._centre_($1);
$ctx1.sendIdx["centre:"]=1;
$4=_st(side).__comma("CollidesWithAnyOf:");
$ctx1.sendIdx[","]=1;
$3=_st(aBox)._perform_withArguments_($4,[self["@walls"]]);
$ctx1.sendIdx["perform:withArguments:"]=1;
if(smalltalk.assert($3)){
_st(aBox)._centre_(_st(_st(aBox)._centre()).__minus(offset));
} else {
$5=_st(aBox)._perform_withArguments_(_st(side).__comma("CollidesWithAnyOf:"),[self["@boxes"]]);
if(smalltalk.assert($5)){
$7=_st(aBox)._centre();
$ctx1.sendIdx["centre"]=2;
$6=_st($7).__minus(offset);
$ctx1.sendIdx["-"]=1;
_st(aBox)._centre_($6);
$ctx1.sendIdx["centre:"]=2;
} else {
_st(self._soundNamed_("slide"))._play();
(5)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aBox)._moveCentreBy_(offset);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}))._valueWithTimeout_((100));
self._clearCanvas();
return _st(self._boxes())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return self._drawSprite_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,5)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
};
};
return self}, function($ctx1) {$ctx1.fill(self,"moveBox:direction:",{aBox:aBox,aDirection:aDirection,side:side,offset:offset},globals.Sokoban)})},
args: ["aBox", "aDirection"],
source: "moveBox: aBox direction: aDirection\x0a\x09|side offset|\x0a\x09side := self directionDictionary at: aDirection.\x0a\x09offset := self boxOffsetDictionary at: aDirection.\x0a\x0a\x09aBox centre: aBox centre + offset.\x0a\x09(aBox perform: side , 'CollidesWithAnyOf:' withArguments: {walls})\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[(aBox perform: side , 'CollidesWithAnyOf:' withArguments: {boxes})\x0a                         \x09ifFalse: \x0a                         \x09\x09[ (self soundNamed: 'slide') play.\x0a                                          5 timesRepeat: \x0a                                         \x09[[aBox moveCentreBy: offset] valueWithTimeout: 100.\x0a                                         \x09self clearCanvas. \x0a                                         \x09self boxes do: [:each | self drawSprite: each]]]\x0a\x09                        ifTrue: \x0a                         \x09\x09[aBox centre: aBox centre - offset]]\x0a\x09\x09ifTrue: [aBox centre: aBox centre - offset]",
messageSends: ["at:", "directionDictionary", "boxOffsetDictionary", "centre:", "+", "centre", "ifFalse:ifTrue:", "perform:withArguments:", ",", "play", "soundNamed:", "timesRepeat:", "valueWithTimeout:", "moveCentreBy:", "clearCanvas", "do:", "boxes", "drawSprite:", "-"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "processMovement",
protocol: 'movement',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@guy"])._currentFrameGroup_("still".__comma(self._lastMove()));
return self}, function($ctx1) {$ctx1.fill(self,"processMovement",{},globals.Sokoban)})},
args: [],
source: "processMovement\x0a\x09guy currentFrameGroup: 'still' , self lastMove.",
messageSends: ["currentFrameGroup:", ",", "lastMove"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "restartLevel",
protocol: 'levels',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._clearLevel();
$1=self._createLevel();
return self}, function($ctx1) {$ctx1.fill(self,"restartLevel",{},globals.Sokoban)})},
args: [],
source: "restartLevel\x0a\x09self clearLevel;\x0a\x09\x09createLevel.",
messageSends: ["clearLevel", "createLevel"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
protocol: 'control',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@fps"]=(20);
self["@stepSize"]=(10);
self._width_((720));
$1=self._height_((540));
_st(self["@canvas"])._style_("border: 1px solid; background-image: url(\x22images/background.png\x22)");
self._addSound_("sounds/slide.ogg");
$ctx1.sendIdx["addSound:"]=1;
self._addSound_("sounds/factory.ogg");
$ctx1.sendIdx["addSound:"]=2;
$2=self._addSound_("sounds/applause.ogg");
_st(self._soundNamed_("factory"))._loop();
self._createLevel();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},globals.Sokoban)})},
args: [],
source: "startGame\x0a\x09fps := 20.\x09\x0a\x09stepSize := 10.\x0a\x0a\x09self\x0a\x09\x09width: 720; \x0a\x09\x09height: 540.\x0a\x0a\x09canvas style: 'border: 1px solid; background-image: url(\x22images/background.png\x22)'.\x0a\x0a\x09self\x0a\x09\x09addSound: 'sounds/slide.ogg';\x0a\x09\x09addSound: 'sounds/factory.ogg';\x0a\x09\x09addSound: 'sounds/applause.ogg'.\x0a\x0a\x09(self soundNamed: 'factory') loop.\x0a\x0a\x09self createLevel.",
messageSends: ["width:", "height:", "style:", "addSound:", "loop", "soundNamed:", "createLevel"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "startPositionFor:",
protocol: 'control',
fn: function (aLevel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3;
var $early={};
try {
_st(aLevel)._withIndexDo_((function(eachRow,y){
return smalltalk.withContext(function($ctx2) {
$1=_st(eachRow)._includes_((8));
if(smalltalk.assert($1)){
return _st(eachRow)._withIndexDo_((function(eachColumn,x){
return smalltalk.withContext(function($ctx3) {
$2=_st(eachColumn).__eq((8));
if(smalltalk.assert($2)){
$5=_st(x).__star((30));
$ctx3.sendIdx["*"]=1;
$4=_st($5).__minus((15));
$ctx3.sendIdx["-"]=1;
$3=_st($4).__at(_st(_st(y).__star((30))).__minus((15)));
throw $early=[$3];
};
}, function($ctx3) {$ctx3.fillBlock({eachColumn:eachColumn,x:x},$ctx2,3)})}));
};
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,y:y},$ctx1,1)})}));
$ctx1.sendIdx["withIndexDo:"]=1;
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"startPositionFor:",{aLevel:aLevel},globals.Sokoban)})},
args: ["aLevel"],
source: "startPositionFor: aLevel\x0a\x09aLevel\x0a\x09\x09withIndexDo: [:eachRow :y | \x0a\x09\x09\x09(eachRow includes: 8) \x0a                              \x09ifTrue: \x0a                              \x09\x09[eachRow withIndexDo: [:eachColumn :x |\x0a\x09\x09\x09\x09\x09\x09eachColumn = 8 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [ ^ ((x * 30) - 15) @ ((y * 30) - 15) ]]]].",
messageSends: ["withIndexDo:", "ifTrue:", "includes:", "=", "@", "-", "*"],
referencedClasses: []
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
function $Key(){return globals.Key||(typeof Key=="undefined"?nil:Key)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@guy"])._currentFrameGroup_("still".__comma(self._lastMove()));
self._whileKeyPressed_do_(_st($Key())._leftArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._go_("Left");
$ctx2.sendIdx["go:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=1;
self._whileKeyPressed_do_(_st($Key())._rightArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._go_("Right");
$ctx2.sendIdx["go:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=2;
self._whileKeyPressed_do_(_st($Key())._upArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._go_("Up");
$ctx2.sendIdx["go:"]=3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=3;
self._whileKeyPressed_do_(_st($Key())._downArrow(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._go_("Down");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=4;
self._whileKeyPressed_do_(_st($Key())._r(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._restartLevel();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=5;
self._whileKeyPressed_do_(_st($Key())._m(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._soundNamed_("factory"))._stop();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}));
$ctx1.sendIdx["whileKeyPressed:do:"]=6;
$1=self._whileKeyPressed_do_(_st($Key())._n(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._advanceLevel();
$ctx2.sendIdx["advanceLevel"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}));
$2=self._isLevelOver();
if(smalltalk.assert($2)){
self._advanceLevel();
};
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.Sokoban)})},
args: [],
source: "step\x0a\x09guy currentFrameGroup: 'still' , self lastMove.\x0a\x09self whileKeyPressed: Key leftArrow do: [self go: 'Left'];\x0a\x09\x09whileKeyPressed: Key rightArrow do: [self go: 'Right'];\x0a\x09\x09whileKeyPressed: Key upArrow do: [self go: 'Up'];\x0a\x09\x09whileKeyPressed: Key downArrow do: [self go: 'Down'];\x0a\x09\x09whileKeyPressed: Key r do: [self restartLevel];\x0a\x09\x09whileKeyPressed: Key m do: [(self soundNamed: 'factory') stop];\x0a\x09\x09whileKeyPressed: Key n do: [self advanceLevel].\x0a\x0a\x09self isLevelOver ifTrue: [self advanceLevel]",
messageSends: ["currentFrameGroup:", ",", "lastMove", "whileKeyPressed:do:", "leftArrow", "go:", "rightArrow", "upArrow", "downArrow", "r", "restartLevel", "m", "stop", "soundNamed:", "n", "advanceLevel", "ifTrue:", "isLevelOver"],
referencedClasses: ["Key"]
}),
globals.Sokoban);

smalltalk.addMethod(
smalltalk.method({
selector: "walls",
protocol: 'sprite collections',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@walls"];
if(($receiver = $2) == null || $receiver.isNil){
self["@walls"]=[];
$1=self["@walls"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"walls",{},globals.Sokoban)})},
args: [],
source: "walls\x0a\x09^ walls ifNil: [walls := #()]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Sokoban);



smalltalk.addClass('SokobanLevelCreator', globals.Widget, ['level', 'table', 'palette', 'currentBrush', 'div', 'textarea'], 'Ludus-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "emptyLevel",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;
},
args: [],
source: "emptyLevel\x0a^   #(#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))",
messageSends: [],
referencedClasses: []
}),
globals.SokobanLevelCreator);

smalltalk.addMethod(
smalltalk.method({
selector: "imageFor:",
protocol: 'not yet classified',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.HashedCollection._newFromPairs_([(7),"box",(9),"exit",(1),"wall",(2),"floor",(8),"guy",(0),"no"]))._at_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageFor:",{anInteger:anInteger},globals.SokobanLevelCreator)})},
args: ["anInteger"],
source: "imageFor: anInteger\x0a\x09^ #{7 -> 'box'. 9 -> 'exit'. 1 -> 'wall'. 2 -> 'floor'. 8 -> 'guy'. 0 -> 'no' } at: anInteger",
messageSends: ["at:"],
referencedClasses: []
}),
globals.SokobanLevelCreator);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.SokobanLevelCreator.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@currentBrush"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SokobanLevelCreator)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09currentBrush := 0.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.SokobanLevelCreator);

smalltalk.addMethod(
smalltalk.method({
selector: "level",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@level"];
if(($receiver = $2) == null || $receiver.isNil){
self["@level"]=self._emptyLevel();
$1=self["@level"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"level",{},globals.SokobanLevelCreator)})},
args: [],
source: "level\x0a\x09^ level ifNil: [level := self emptyLevel]",
messageSends: ["ifNil:", "emptyLevel"],
referencedClasses: []
}),
globals.SokobanLevelCreator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._renderTableOn_(html);
self._renderPaletteOn_(html);
$1=_st(html)._button();
_st($1)._with_("Print Array");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderTextAreaOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.SokobanLevelCreator)})},
args: ["html"],
source: "renderOn: html\x0a\x09self renderTableOn:html.\x0a\x09self renderPaletteOn: html.\x0a\x09html button \x0a\x09\x09with: 'Print Array'; \x0a\x09\x09onClick: [self renderTextAreaOn: html].",
messageSends: ["renderTableOn:", "renderPaletteOn:", "with:", "button", "onClick:", "renderTextAreaOn:"],
referencedClasses: []
}),
globals.SokobanLevelCreator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderPaletteOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$7,$6,$5,$8,$9,$10,$13,$12,$11,$14,$15,$16,$19,$18,$17,$20,$21,$22,$25,$24,$23,$26,$27,$28,$29,$30,$31,$32,$2;
$1=_st(html)._table();
_st($1)._id_("palette");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._img();
$ctx2.sendIdx["img"]=1;
$4=$3;
$7=self._imageFor_((7));
$ctx2.sendIdx["imageFor:"]=1;
$6="images/".__comma($7);
$ctx2.sendIdx[","]=2;
$5=_st($6).__comma("Icon.png");
$ctx2.sendIdx[","]=1;
_st($4)._src_($5);
$ctx2.sendIdx["src:"]=1;
$8=_st($3)._onClick_((function(){
self["@currentBrush"]=(7);
return self["@currentBrush"];
}));
$ctx2.sendIdx["onClick:"]=1;
$8;
$9=_st(html)._img();
$ctx2.sendIdx["img"]=2;
$10=$9;
$13=self._imageFor_((9));
$ctx2.sendIdx["imageFor:"]=2;
$12="images/".__comma($13);
$ctx2.sendIdx[","]=4;
$11=_st($12).__comma("Icon.png");
$ctx2.sendIdx[","]=3;
_st($10)._src_($11);
$ctx2.sendIdx["src:"]=2;
$14=_st($9)._onClick_((function(){
self["@currentBrush"]=(9);
return self["@currentBrush"];
}));
$ctx2.sendIdx["onClick:"]=2;
$14;
$15=_st(html)._img();
$ctx2.sendIdx["img"]=3;
$16=$15;
$19=self._imageFor_((1));
$ctx2.sendIdx["imageFor:"]=3;
$18="images/".__comma($19);
$ctx2.sendIdx[","]=6;
$17=_st($18).__comma("Icon.png");
$ctx2.sendIdx[","]=5;
_st($16)._src_($17);
$ctx2.sendIdx["src:"]=3;
$20=_st($15)._onClick_((function(){
self["@currentBrush"]=(1);
return self["@currentBrush"];
}));
$ctx2.sendIdx["onClick:"]=3;
$20;
$21=_st(html)._img();
$ctx2.sendIdx["img"]=4;
$22=$21;
$25=self._imageFor_((2));
$ctx2.sendIdx["imageFor:"]=4;
$24="images/".__comma($25);
$ctx2.sendIdx[","]=8;
$23=_st($24).__comma("Icon.png");
$ctx2.sendIdx[","]=7;
_st($22)._src_($23);
$ctx2.sendIdx["src:"]=4;
$26=_st($21)._onClick_((function(){
self["@currentBrush"]=(2);
return self["@currentBrush"];
}));
$ctx2.sendIdx["onClick:"]=4;
$26;
$27=_st(html)._img();
$ctx2.sendIdx["img"]=5;
$28=$27;
$29=_st("images/".__comma(self._imageFor_((8)))).__comma("Icon.png");
$ctx2.sendIdx[","]=9;
_st($28)._src_($29);
$ctx2.sendIdx["src:"]=5;
$30=_st($27)._onClick_((function(){
self["@currentBrush"]=(8);
return self["@currentBrush"];
}));
$ctx2.sendIdx["onClick:"]=5;
$30;
$31=_st(html)._img();
_st($31)._src_("images/eraserIcon.png");
$32=_st($31)._onClick_((function(){
self["@currentBrush"]=(0);
return self["@currentBrush"];
}));
return $32;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self["@palette"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderPaletteOn:",{html:html},globals.SokobanLevelCreator)})},
args: ["html"],
source: "renderPaletteOn: html\x0a\x09palette := html table\x0a\x09\x09id: 'palette';\x0a\x09\x09with: [\x0a                \x09html img src: 'images/', (self imageFor: 7) , 'Icon.png';\x0a                  \x09\x09onClick: [currentBrush := 7].\x0a                \x09html img src: 'images/', (self imageFor: 9) , 'Icon.png';\x0a                  \x09\x09onClick: [currentBrush := 9].\x0a                \x09html img src: 'images/', (self imageFor: 1) , 'Icon.png';\x0a                  \x09\x09onClick: [currentBrush := 1].\x0a                \x09html img src: 'images/', (self imageFor: 2) , 'Icon.png';\x0a                  \x09\x09onClick: [currentBrush := 2].\x0a                \x09html img src: 'images/', (self imageFor: 8) , 'Icon.png';\x0a                  \x09\x09onClick: [currentBrush := 8].\x0a                \x09html img src: 'images/eraserIcon.png';\x0a                  \x09\x09onClick: [currentBrush := 0]]",
messageSends: ["id:", "table", "with:", "src:", "img", ",", "imageFor:", "onClick:"],
referencedClasses: []
}),
globals.SokobanLevelCreator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTableOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$12,$11,$10,$9,$8,$7,$13,$16,$15,$14,$17,$4,$2;
$1=_st(html)._table();
_st($1)._id_("levelTable");
$ctx1.sendIdx["id:"]=1;
_st($1)._style_("border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif;");
$ctx1.sendIdx["style:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return (1)._to_do_((18),(function(y){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._tr();
_st($3)._style_("border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif;");
$ctx3.sendIdx["style:"]=2;
_st($3)._id_(y);
$ctx3.sendIdx["id:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return (1)._to_do_((24),(function(x){
var cell;
return smalltalk.withContext(function($ctx5) {
$5=_st(html)._td();
_st($5)._style_("border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif; background-image: url(\x22images/emptyIcon.png\x22);");
_st($5)._id_(x);
_st($5)._with_((function(){
return smalltalk.withContext(function($ctx6) {
$6=_st(html)._img();
$12=self._level();
$ctx6.sendIdx["level"]=1;
$11=_st($12)._at_(y);
$ctx6.sendIdx["at:"]=2;
$10=_st($11)._at_(x);
$ctx6.sendIdx["at:"]=1;
$9=self._imageFor_($10);
$8="images/".__comma($9);
$7=_st($8).__comma("Icon.png");
$ctx6.sendIdx[","]=1;
return _st($6)._src_($7);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)})}));
$13=$5;
$16=self._level();
$ctx5.sendIdx["level"]=2;
$15=_st($16)._at_(y);
$ctx5.sendIdx["at:"]=4;
$14=_st($15)._at_(x);
$ctx5.sendIdx["at:"]=3;
_st($13)._class_($14);
$17=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
_st(_st(self._level())._at_(y))._at_put_(x,self["@currentBrush"]);
return self._updateTable();
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,6)})}));
cell=$17;
return cell;
}, function($ctx5) {$ctx5.fillBlock({x:x,cell:cell},$ctx4,4)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=2;
return $4;
}, function($ctx3) {$ctx3.fillBlock({y:y},$ctx2,2)})}));
$ctx2.sendIdx["to:do:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@table"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderTableOn:",{html:html},globals.SokobanLevelCreator)})},
args: ["html"],
source: "renderTableOn:html\x0a\x09table := html table\x0a\x09\x09id: 'levelTable';\x0a\x09\x09style: 'border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif;';\x0a\x09\x09with: [\x0a                \x091 to: 18 do: [:y | \x0a\x09\x09\x09\x09html tr \x0a                                      \x09style: 'border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif;';\x0a                                     \x09id: y;\x0a                                \x09with: [ 1 to: 24 do: [:x |\x0a\x09\x09\x09\x09\x09\x09|cell|\x0a\x09\x09\x09\x09\x09\x09cell := html td \x0a\x09\x09                                      \x09style: 'border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif; background-image: url(\x22images/emptyIcon.png\x22);';\x0a\x09\x09\x09\x09\x09\x09\x09id: x;\x0a                                                        with: [ html img src: 'images/', (self imageFor: ((self level at: y) at: x)) , 'Icon.png' ];\x0a                                                        class: ((self level at: y) at: x);\x0a                                                        onClick: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09(self level at: y) at: x put: (currentBrush). \x0a\x09\x09\x09\x09\x09\x09\x09\x09self updateTable]]]]].",
messageSends: ["id:", "table", "style:", "with:", "to:do:", "tr", "td", "src:", "img", ",", "imageFor:", "at:", "level", "class:", "onClick:", "at:put:", "updateTable"],
referencedClasses: []
}),
globals.SokobanLevelCreator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTextAreaOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
self["@textarea"]=_st(_st(html)._textarea())._with_(_st(_st(self._level())._asString())._replace_with_("a Array ",_st(_st($String())._cr()).__comma("#")));
return self}, function($ctx1) {$ctx1.fill(self,"renderTextAreaOn:",{html:html},globals.SokobanLevelCreator)})},
args: ["html"],
source: "renderTextAreaOn: html\x0a\x09textarea := html textarea with: (self level asString replace: 'a Array ' with: String cr , '#')",
messageSends: ["with:", "textarea", "replace:with:", "asString", "level", ",", "cr"],
referencedClasses: ["String"]
}),
globals.SokobanLevelCreator);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTable",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@table"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderTableOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateTable",{},globals.SokobanLevelCreator)})},
args: [],
source: "updateTable\x0a\x09table contents: [:html | self renderTableOn: html].",
messageSends: ["contents:", "renderTableOn:"],
referencedClasses: []
}),
globals.SokobanLevelCreator);


smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"open",{},globals.SokobanLevelCreator.klass)})},
args: [],
source: "open\x0a\x09self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
globals.SokobanLevelCreator.klass);

});
