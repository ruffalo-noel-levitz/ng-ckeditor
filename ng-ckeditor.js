!function(a,b){return"function"==typeof define&&define.amd?(define(["angular","ckeditor"],function(a){return b(a)}),void 0):b(a)}(angular||null,function(a){var b,c=a.module("ngCkeditor",[]),d=!1;return c.run(["$q","$timeout",function(c,e){function f(){"loaded"==CKEDITOR.status?(d=!0,b.resolve()):f()}if(b=c.defer(),a.isUndefined(CKEDITOR))throw new Error("CKEDITOR not found");CKEDITOR.disableAutoInline=!0,CKEDITOR.on("loaded",f),e(f,100)}]),c.directive("ckeditor",["$timeout","$q",function(c,e){"use strict";return{restrict:"AC",require:"ngModel",scope:!1,link:function(f,g,h,i){var j="<p></p>",k="textarea"==g[0].tagName.toLowerCase(),l=[],m=!1;k||g.attr("contenteditable",!0);var n=function(){var b={toolbar:"full",toolbar_full:[{name:"basicstyles",items:["Bold","Italic","Strike","Underline"]},{name:"paragraph",items:["BulletedList","NumberedList","Blockquote"]},{name:"editing",items:["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"]},{name:"links",items:["Link","Unlink","Anchor"]},{name:"tools",items:["SpellChecker","Maximize"]},"/",{name:"styles",items:["Format","FontSize","TextColor","PasteText","PasteFromWord","RemoveFormat"]},{name:"insert",items:["Image","Table","SpecialChar"]},{name:"forms",items:["Outdent","Indent"]},{name:"clipboard",items:["Undo","Redo"]},{name:"document",items:["PageBreak","Source"]}],disableNativeSpellChecker:!1,uiColor:"#FAFAFA",height:"400px",width:"100%"};b=a.extend(b,f[h.ckeditor]);var d=k?CKEDITOR.replace(g[0],b):CKEDITOR.inline(g[0],b),n=e.defer();g.bind("$destroy",function(){d.destroy(!1)});var o=function(){var a=d.getData();a==j&&(a=null),c(function(){i.$setViewValue(a)},0)},p=function(){if(l.length){var a=l.pop();d.setData(a||j,function(){o(),m=!1})}};d.on("pasteState",o),d.on("change",o),d.on("blur",o),d.on("key",o),d.on("instanceReady",function(){f.$apply(function(){p()})}),d.on("customConfigLoaded",function(){n.resolve()}),i.$render=function(){void 0===i.$viewValue&&(i.$setViewValue(null),i.$viewValue=null),l.push(i.$viewValue),m||(m=!1,p())}};"loaded"==CKEDITOR.status&&(d=!0),d?n():b.promise.then(n)}}}]),c});
/*
//@ sourceMappingURL=ng-ckeditor.map
*/