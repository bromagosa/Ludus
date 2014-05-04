define("HOS/Ludus-Documentation", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Ludus-Documentation');
smalltalk.packages["Ludus-Documentation"].transport = {"type":"amd","amdNamespace":"HOS"};

smalltalk.addClass('LudusDoc', globals.Widget, ['iframe'], 'Ludus-Documentation');
globals.LudusDoc.comment="Document the documentation?";
smalltalk.addMethod(
smalltalk.method({
selector: "display:",
protocol: 'rendering',
fn: function (aPage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=self["@iframe"];
_st($1)._id_(aPage);
$3=$1;
$4=_st("ludusdoc/".__comma(aPage)).__comma(".html");
$ctx1.sendIdx[","]=1;
$2=_st($3)._src_($4);
_st(_st(self["@iframe"])._asJQuery())._bind_do_("load",(function(){
return smalltalk.withContext(function($ctx2) {
return self._resize();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"display:",{aPage:aPage},globals.LudusDoc)})},
args: ["aPage"],
source: "display: aPage\x0a\x09iframe id: aPage;\x0a\x09\x09src: 'ludusdoc/' , aPage , '.html'.\x0a\x0a\x09iframe asJQuery \x0a\x09\x09bind: 'load'\x0a\x09\x09do: [ self resize ]",
messageSends: ["id:", "src:", ",", "bind:do:", "asJQuery", "resize"],
referencedClasses: []
}),
globals.LudusDoc);

smalltalk.addMethod(
smalltalk.method({
selector: "pages",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["Game", "Sprite", "FrameGroup", "Sound"];
return $1;
},
args: [],
source: "pages\x0a\x09^ #('Game' 'Sprite' 'FrameGroup' 'Sound').",
messageSends: [],
referencedClasses: []
}),
globals.LudusDoc);

smalltalk.addMethod(
smalltalk.method({
selector: "renderDocumentationOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._id_("links");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._pages())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._a();
_st($3)._class_("classLink shadowed");
_st($3)._with_(each);
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._display_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@iframe"]=_st(_st(html)._iframe())._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return self._resize();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderDocumentationOn:",{html:html},globals.LudusDoc)})},
args: ["html"],
source: "renderDocumentationOn: html\x0a\x09html div id: 'links'; \x0a\x09\x09with: [\x0a\x09\x09\x09self pages\x0a\x09\x09\x09\x09do: [ :each | \x0a\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09class: 'classLink shadowed';\x0a\x09\x09\x09\x09\x09with: each;\x0a\x09\x09\x09\x09\x09onClick: [ self display: each ] ] ].\x0a\x0a\x09iframe := html iframe onChange: [ self resize ].",
messageSends: ["id:", "div", "with:", "do:", "pages", "class:", "a", "onClick:", "display:", "onChange:", "iframe", "resize"],
referencedClasses: []
}),
globals.LudusDoc);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderDocumentationOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.LudusDoc)})},
args: ["html"],
source: "renderOn: html\x0a\x09self renderDocumentationOn: html.",
messageSends: ["renderDocumentationOn:"],
referencedClasses: []
}),
globals.LudusDoc);

smalltalk.addMethod(
smalltalk.method({
selector: "resize",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$8,$7,$6,$5,$4,$3,$2,$10,$9,$12,$11;
$1=_st(self["@iframe"])._element();
$ctx1.sendIdx["element"]=1;
$8=_st(self["@iframe"])._element();
$ctx1.sendIdx["element"]=2;
$7=_st($8)._contentWindow();
$ctx1.sendIdx["contentWindow"]=1;
$6=_st($7)._document();
$ctx1.sendIdx["document"]=1;
$5=_st($6)._body();
$ctx1.sendIdx["body"]=1;
$4=_st($5)._scrollHeight();
$ctx1.sendIdx["scrollHeight"]=1;
$3=_st($4)._asString();
$ctx1.sendIdx["asString"]=1;
$2=_st($3).__comma("px");
$ctx1.sendIdx[","]=1;
_st($1)._height_($2);
$10=_st(self["@iframe"])._element();
$ctx1.sendIdx["element"]=3;
$9=_st($10)._style();
$ctx1.sendIdx["style"]=1;
_st($9)._setProperty_to_("height","0px");
$ctx1.sendIdx["setProperty:to:"]=1;
$12=_st(self["@iframe"])._element();
$ctx1.sendIdx["element"]=4;
$11=_st($12)._style();
_st($11)._setProperty_to_("height",_st(_st(_st(_st(_st(_st(_st(self["@iframe"])._element())._contentWindow())._document())._body())._scrollHeight())._asString()).__comma("px"));
return self}, function($ctx1) {$ctx1.fill(self,"resize",{},globals.LudusDoc)})},
args: [],
source: "resize\x0a\x09iframe element height: iframe element contentWindow document body scrollHeight asString , 'px'. \x22Needed by Firefox, although the iframe always grows, never shrinks\x22\x0a\x09iframe element style setProperty: 'height' to: '0px'. \x22Needed by Chrome\x22\x0a\x09iframe element style setProperty: 'height' to: iframe element contentWindow document body scrollHeight asString , 'px'.",
messageSends: ["height:", "element", ",", "asString", "scrollHeight", "body", "document", "contentWindow", "setProperty:to:", "style"],
referencedClasses: []
}),
globals.LudusDoc);


});
