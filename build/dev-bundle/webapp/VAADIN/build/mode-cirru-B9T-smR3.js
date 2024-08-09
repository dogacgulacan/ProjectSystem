import{g as y}from"./_commonjsHelpers-Cpj98o6Y.js";function M(d,p){for(var r=0;r<p.length;r++){const n=p[r];if(typeof n!="string"&&!Array.isArray(n)){for(const g in n)if(g!=="default"&&!(g in d)){const i=Object.getOwnPropertyDescriptor(n,g);i&&Object.defineProperty(d,g,i.get?i:{enumerable:!0,get:()=>n[g]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}};(function(d,p){ace.define("ace/mode/cirru_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,n,g){var i=r("../lib/oop"),f=r("./text_highlight_rules").TextHighlightRules,u=function(){this.$rules={start:[{token:"constant.numeric",regex:/[\d\.]+/},{token:"comment.line.double-dash",regex:/--/,next:"comment"},{token:"storage.modifier",regex:/\(/},{token:"storage.modifier",regex:/,/,next:"line"},{token:"support.function",regex:/[^\(\)"\s{}\[\]]+/,next:"line"},{token:"string.quoted.double",regex:/"/,next:"string"},{token:"storage.modifier",regex:/\)/}],comment:[{token:"comment.line.double-dash",regex:/ +[^\n]+/,next:"start"}],string:[{token:"string.quoted.double",regex:/"/,next:"line"},{token:"constant.character.escape",regex:/\\/,next:"escape"},{token:"string.quoted.double",regex:/[^\\"]+/}],escape:[{token:"constant.character.escape",regex:/./,next:"string"}],line:[{token:"constant.numeric",regex:/[\d\.]+/},{token:"markup.raw",regex:/^\s*/,next:"start"},{token:"storage.modifier",regex:/\$/,next:"start"},{token:"variable.parameter",regex:/[^\(\)"\s{}\[\]]+/},{token:"storage.modifier",regex:/\(/,next:"start"},{token:"storage.modifier",regex:/\)/},{token:"markup.raw",regex:/^ */,next:"start"},{token:"string.quoted.double",regex:/"/,next:"string"}]}};i.inherits(u,f),n.CirruHighlightRules=u}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(r,n,g){var i=r("../../lib/oop"),f=r("./fold_mode").FoldMode,u=r("../../range").Range,x=n.FoldMode=function(){};i.inherits(x,f),(function(){this.getFoldWidgetRange=function(e,R,t){var c=this.indentationBlock(e,t);if(c)return c;var o=/\S/,a=e.getLine(t),s=a.search(o);if(!(s==-1||a[s]!="#")){for(var l=a.length,h=e.getLength(),v=t,m=t;++t<h;){a=e.getLine(t);var k=a.search(o);if(k!=-1){if(a[k]!="#")break;m=t}}if(m>v){var C=e.getLine(m).length;return new u(v,l,m,C)}}},this.getFoldWidget=function(e,R,t){var c=e.getLine(t),o=c.search(/\S/),a=e.getLine(t+1),s=e.getLine(t-1),l=s.search(/\S/),h=a.search(/\S/);if(o==-1)return e.foldWidgets[t-1]=l!=-1&&l<h?"start":"","";if(l==-1){if(o==h&&c[o]=="#"&&a[o]=="#")return e.foldWidgets[t-1]="",e.foldWidgets[t+1]="","start"}else if(l==o&&c[o]=="#"&&s[o]=="#"&&e.getLine(t-2).search(/\S/)==-1)return e.foldWidgets[t-1]="start",e.foldWidgets[t+1]="","";return l!=-1&&l<o?e.foldWidgets[t-1]="start":e.foldWidgets[t-1]="",o<h?"start":""}}).call(x.prototype)}),ace.define("ace/mode/cirru",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/cirru_highlight_rules","ace/mode/folding/coffee"],function(r,n,g){var i=r("../lib/oop"),f=r("./text").Mode,u=r("./cirru_highlight_rules").CirruHighlightRules,x=r("./folding/coffee").FoldMode,e=function(){this.HighlightRules=u,this.foldingRules=new x,this.$behaviour=this.$defaultBehaviour};i.inherits(e,f),(function(){this.lineCommentStart="--",this.$id="ace/mode/cirru"}).call(e.prototype),n.Mode=e}),function(){ace.require(["ace/mode/cirru"],function(r){d&&(d.exports=r)})}()})(b);var _=b.exports;const S=y(_),L=M({__proto__:null,default:S},[_]);export{L as m};
