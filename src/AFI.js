define("HOS/AFI", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('AFI');
smalltalk.packages["AFI"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('Ajax', globals.Object, ['url', 'settings', 'options'], 'AFI');
smalltalk.addMethod(
smalltalk.method({
selector: "onCompleteDo:",
protocol: 'callback',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._options())._at_put_("complete",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onCompleteDo:",{aBlock:aBlock},globals.Ajax)})},
args: ["aBlock"],
source: "onCompleteDo: aBlock\x0a\x09\x22A block to be called when the request finishes (after success and error callbacks are executed). Block arguments: jqXHR, textStatus\x22\x0a\x09self options at: 'complete' put: aBlock",
messageSends: ["at:put:", "options"],
referencedClasses: []
}),
globals.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "onErrorDo:",
protocol: 'callback',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._options())._at_put_("error",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onErrorDo:",{aBlock:aBlock},globals.Ajax)})},
args: ["aBlock"],
source: "onErrorDo: aBlock\x0a\x09\x22A block to be called if the request fails.Block arguments: jqXHR, textStatus, errorThrown\x22\x0a\x09self options at: 'error' put: aBlock",
messageSends: ["at:put:", "options"],
referencedClasses: []
}),
globals.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "onSuccessDo:",
protocol: 'callback',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._options())._at_put_("success",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onSuccessDo:",{aBlock:aBlock},globals.Ajax)})},
args: ["aBlock"],
source: "onSuccessDo: aBlock\x0a\x09\x22Set action to execute when Ajax request is successful. Pass received data as block argument. Block arguments: data, textStatus, jqXHR\x22\x0a\x09self options at: 'success' put: aBlock",
messageSends: ["at:put:", "options"],
referencedClasses: []
}),
globals.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "options",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@options"];
if(($receiver = $2) == null || $receiver.isNil){
self["@options"]=_st($Dictionary())._new();
$1=self["@options"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"options",{},globals.Ajax)})},
args: [],
source: "options\x0a\x09^ options ifNil: [options := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "send",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_(self["@url"],self["@options"]);
return self}, function($ctx1) {$ctx1.fill(self,"send",{},globals.Ajax)})},
args: [],
source: "send\x0a\x09jQuery ajax: url options: options.",
messageSends: ["ajax:options:"],
referencedClasses: []
}),
globals.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@url"]=aString;
return self},
args: ["aString"],
source: "url: aString\x0a\x09url := aString",
messageSends: [],
referencedClasses: []
}),
globals.Ajax);


smalltalk.addMethod(
smalltalk.method({
selector: "url:",
protocol: 'initialize',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._url_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},globals.Ajax.klass)})},
args: ["aString"],
source: "url: aString\x0a\x09^ self new \x0a\x09\x09url: aString;\x0a\x09\x09yourself",
messageSends: ["url:", "new", "yourself"],
referencedClasses: []
}),
globals.Ajax.klass);

});
