import{g as u}from"./_commonjsHelpers-Cpj98o6Y.js";function c(r,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const i in t)if(i!=="default"&&!(i in r)){const o=Object.getOwnPropertyDescriptor(t,i);o&&Object.defineProperty(r,i,o.get?o:{enumerable:!0,get:()=>t[i]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={exports:{}};(function(r,n){ace.define("ace/mode/gitignore_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,i){var o=e("../lib/oop"),l=e("./text_highlight_rules").TextHighlightRules,g=function(){this.$rules={start:[{token:"comment",regex:/^\s*#.*$/},{token:"keyword",regex:/^\s*!.*$/}]},this.normalizeRules()};g.metaData={fileTypes:["gitignore"],name:"Gitignore"},o.inherits(g,l),t.GitignoreHighlightRules=g}),ace.define("ace/mode/gitignore",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/gitignore_highlight_rules"],function(e,t,i){var o=e("../lib/oop"),l=e("./text").Mode,g=e("./gitignore_highlight_rules").GitignoreHighlightRules,s=function(){this.HighlightRules=g,this.$behaviour=this.$defaultBehaviour};o.inherits(s,l),(function(){this.lineCommentStart="#",this.$id="ace/mode/gitignore"}).call(s.prototype),t.Mode=s}),function(){ace.require(["ace/mode/gitignore"],function(e){r&&(r.exports=e)})}()})(a);var h=a.exports;const d=u(h),f=c({__proto__:null,default:d},[h]);export{f as m};
