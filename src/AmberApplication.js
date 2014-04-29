define("HOS/AmberApplication", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/SUnit", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('AmberApplication');
smalltalk.packages["AmberApplication"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('AmberApplication', globals.Object, ['mainCanvas', 'logCanvas'], 'AmberApplication');
smalltalk.addMethod(
smalltalk.method({
selector: "addMapWidget",
protocol: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._mainCanvas();
return self}, function($ctx1) {$ctx1.fill(self,"addMapWidget",{},globals.AmberApplication)})},
args: [],
source: "addMapWidget\x0a\x09self mainCanvas",
messageSends: ["mainCanvas"],
referencedClasses: []
}),
globals.AmberApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "log:",
protocol: 'logging',
fn: function (aThing){
var self=this;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st(self._logCanvas())._p_(aThing);
_st($Transcript())._show_(_st(aThing)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"log:",{aThing:aThing},globals.AmberApplication)})},
args: ["aThing"],
source: "log: aThing\x0a\x09self logCanvas p: aThing.\x0a\x09Transcript show: aThing asString",
messageSends: ["p:", "logCanvas", "show:", "asString"],
referencedClasses: ["Transcript"]
}),
globals.AmberApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "logCanvas",
protocol: 'accessing',
fn: function (){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@logCanvas"];
if(($receiver = $2) == null || $receiver.isNil){
self["@logCanvas"]=_st($HTMLCanvas())._onJQuery_("#log"._asJQuery());
$1=self["@logCanvas"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"logCanvas",{},globals.AmberApplication)})},
args: [],
source: "logCanvas\x0a\x09^logCanvas ifNil:[logCanvas := (HTMLCanvas onJQuery: '#log' asJQuery)]",
messageSends: ["ifNil:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.AmberApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "mainCanvas",
protocol: 'accessing',
fn: function (){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@mainCanvas"];
if(($receiver = $2) == null || $receiver.isNil){
self["@mainCanvas"]=_st($HTMLCanvas())._onJQuery_("#main"._asJQuery());
$1=self["@mainCanvas"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"mainCanvas",{},globals.AmberApplication)})},
args: [],
source: "mainCanvas\x0a  \x22Need to call mainCanvas as main is a JSProxy object mirroring the DOM\x22\x0a  ^mainCanvas ifNil: [mainCanvas := (HTMLCanvas onJQuery: '#main' asJQuery)]",
messageSends: ["ifNil:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.AmberApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "run",
protocol: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._log_("Welcome to Amber");
self._setMapWidget();
return self}, function($ctx1) {$ctx1.fill(self,"run",{},globals.AmberApplication)})},
args: [],
source: "run\x0a\x09self log: 'Welcome to Amber'.\x0a\x09\x22self sampleMain.\x22\x0a\x09self setMapWidget.",
messageSends: ["log:", "setMapWidget"],
referencedClasses: []
}),
globals.AmberApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "sampleMain",
protocol: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._mainCanvas())._p_("Main Area");
return self}, function($ctx1) {$ctx1.fill(self,"sampleMain",{},globals.AmberApplication)})},
args: [],
source: "sampleMain\x0a\x09self mainCanvas p: 'Main Area'.",
messageSends: ["p:", "mainCanvas"],
referencedClasses: []
}),
globals.AmberApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "setMapWidget",
protocol: 'running',
fn: function (){
var self=this;
function $MapWidget(){return globals.MapWidget||(typeof MapWidget=="undefined"?nil:MapWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(self._mainCanvas())._with_(_st($MapWidget())._new());
return self}, function($ctx1) {$ctx1.fill(self,"setMapWidget",{},globals.AmberApplication)})},
args: [],
source: "setMapWidget\x0a\x09self mainCanvas with: MapWidget new",
messageSends: ["with:", "mainCanvas", "new"],
referencedClasses: ["MapWidget"]
}),
globals.AmberApplication);


smalltalk.addMethod(
smalltalk.method({
selector: "run",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._run();
return self}, function($ctx1) {$ctx1.fill(self,"run",{},globals.AmberApplication.klass)})},
args: [],
source: "run\x0a\x09self new run",
messageSends: ["run", "new"],
referencedClasses: []
}),
globals.AmberApplication.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "testTranscript",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var tst;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
tst="Welcome";
_st($Transcript())._show_(tst);
return self}, function($ctx1) {$ctx1.fill(self,"testTranscript",{tst:tst},globals.AmberApplication.klass)})},
args: [],
source: "testTranscript\x0a\x09|tst|\x0a\x09tst := 'Welcome'.\x0a\x09Transcript  show: tst",
messageSends: ["show:"],
referencedClasses: ["Transcript"]
}),
globals.AmberApplication.klass);


smalltalk.addClass('AmberApplicationTests', globals.TestCase, ['app'], 'AmberApplication');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'testing',
fn: function (){
var self=this;
function $AmberApplication(){return globals.AmberApplication||(typeof AmberApplication=="undefined"?nil:AmberApplication)}
return smalltalk.withContext(function($ctx1) { 
self["@app"]=_st($AmberApplication())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.AmberApplicationTests)})},
args: [],
source: "setUp\x0a\x09app := AmberApplication new",
messageSends: ["new"],
referencedClasses: ["AmberApplication"]
}),
globals.AmberApplicationTests);

smalltalk.addMethod(
smalltalk.method({
selector: "testLog",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@app"])._log())._p_("Test Log");
return self}, function($ctx1) {$ctx1.fill(self,"testLog",{},globals.AmberApplicationTests)})},
args: [],
source: "testLog\x0a\x09app log p: 'Test Log'.",
messageSends: ["p:", "log"],
referencedClasses: []
}),
globals.AmberApplicationTests);

smalltalk.addMethod(
smalltalk.method({
selector: "testTranscript",
protocol: 'testing',
fn: function (){
var self=this;
var tst;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
tst="Welcome";
_st($Transcript())._show_(tst);
return self}, function($ctx1) {$ctx1.fill(self,"testTranscript",{tst:tst},globals.AmberApplicationTests)})},
args: [],
source: "testTranscript\x0a\x09|tst|\x0a\x09tst := 'Welcome'.\x0a\x09Transcript  show: tst",
messageSends: ["show:"],
referencedClasses: ["Transcript"]
}),
globals.AmberApplicationTests);



smalltalk.addClass('MapWidget', globals.Widget, [], 'AmberApplication');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.MapWidget.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MapWidget)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.MapWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._p_("MAPWIDGET");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MapWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html p: 'MAPWIDGET'",
messageSends: ["p:"],
referencedClasses: []
}),
globals.MapWidget);


});
