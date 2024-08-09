import{g as R}from"./_commonjsHelpers-Cpj98o6Y.js";function _(u,k){for(var n=0;n<k.length;n++){const a=k[n];if(typeof a!="string"&&!Array.isArray(a)){for(const p in a)if(p!=="default"&&!(p in u)){const d=Object.getOwnPropertyDescriptor(a,p);d&&Object.defineProperty(u,p,d.get?d:{enumerable:!0,get:()=>a[p]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}};(function(u,k){ace.define("ace/mode/bibtex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,a,p){var d=n("../lib/oop"),h=n("./text_highlight_rules").TextHighlightRules,x=function(){this.$rules={start:[{token:"comment",regex:/@Comment\{/,stateName:"bibtexComment",push:[{token:"comment",regex:/}/,next:"pop"},{token:"comment",regex:/\{/,push:"bibtexComment"},{defaultToken:"comment"}]},{token:["keyword","text","paren.lparen","text","variable","text","keyword.operator"],regex:/(@String)(\s*)(\{)(\s*)([a-zA-Z]*)(\s*)(=)/,push:[{token:"paren.rparen",regex:/\}/,next:"pop"},{include:"#misc"},{defaultToken:"text"}]},{token:["keyword","text","paren.lparen","text","variable","text","keyword.operator"],regex:/(@String)(\s*)(\()(\s*)([a-zA-Z]*)(\s*)(=)/,push:[{token:"paren.rparen",regex:/\)/,next:"pop"},{include:"#misc"},{defaultToken:"text"}]},{token:["keyword","text","paren.lparen"],regex:/(@preamble)(\s*)(\()/,push:[{token:"paren.rparen",regex:/\)/,next:"pop"},{include:"#misc"},{defaultToken:"text"}]},{token:["keyword","text","paren.lparen"],regex:/(@preamble)(\s*)(\{)/,push:[{token:"paren.rparen",regex:/\}/,next:"pop"},{include:"#misc"},{defaultToken:"text"}]},{token:["keyword","text","paren.lparen","text","support.class"],regex:/(@[a-zA-Z]+)(\s*)(\{)(\s*)([\w-]+)/,push:[{token:"paren.rparen",regex:/\}/,next:"pop"},{token:["variable","text","keyword.operator"],regex:/([a-zA-Z0-9\!\$\&\*\+\-\.\/\:\;\<\>\?\[\]\^\_\`\|]+)(\s*)(=)/,push:[{token:"text",regex:/(?=[,}])/,next:"pop"},{include:"#misc"},{include:"#integer"},{defaultToken:"text"}]},{token:"punctuation",regex:/,/},{defaultToken:"text"}]},{defaultToken:"comment"}],"#integer":[{token:"constant.numeric.bibtex",regex:/\d+/}],"#misc":[{token:"string",regex:/"/,push:"#string_quotes"},{token:"paren.lparen",regex:/\{/,push:"#string_braces"},{token:"keyword.operator",regex:/#/}],"#string_braces":[{token:"paren.rparen",regex:/\}/,next:"pop"},{token:"invalid.illegal",regex:/@/},{include:"#misc"},{defaultToken:"string"}],"#string_quotes":[{token:"string",regex:/"/,next:"pop"},{include:"#misc"},{defaultToken:"string"}]},this.normalizeRules()};d.inherits(x,h),a.BibTeXHighlightRules=x}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,a,p){var d=n("../../lib/oop"),h=n("../../range").Range,x=n("./fold_mode").FoldMode,m=a.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(m,x),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,r){var l=e.getLine(r);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var o=this._getFoldWidgetBase(e,t,r);return!o&&this.startRegionRe.test(l)?"start":o},this.getFoldWidgetRange=function(e,t,r,l){var o=e.getLine(r);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,r);var i=o.match(this.foldingStartMarker);if(i){var s=i.index;if(i[1])return this.openingBracketBlock(e,i[1],r,s);var g=e.getCommentFoldRange(r,s+i[0].length,1);return g&&!g.isMultiLine()&&(l?g=this.getSectionRange(e,r):t!="all"&&(g=null)),g}if(t!=="markbegin"){var i=o.match(this.foldingStopMarker);if(i){var s=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],r,s):e.getCommentFoldRange(r,s,-1)}}},this.getSectionRange=function(e,t){var r=e.getLine(t),l=r.search(/\S/),o=t,s=r.length;t=t+1;for(var g=t,i=e.getLength();++t<i;){r=e.getLine(t);var f=r.search(/\S/);if(f!==-1){if(l>f)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=o)break;if(c.isMultiLine())t=c.end.row;else if(l==f)break}g=t}}return new h(o,s,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,t,r){for(var l=t.search(/\s*$/),o=e.getLength(),s=r,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,i=1;++r<o;){t=e.getLine(r);var f=g.exec(t);if(f&&(f[1]?i--:i++,!i))break}var c=r;if(c>s)return new h(s,l,c,t.length)}}).call(m.prototype)}),ace.define("ace/mode/bibtex",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/bibtex_highlight_rules","ace/mode/folding/cstyle"],function(n,a,p){var d=n("../lib/oop"),h=n("./text").Mode,x=n("./bibtex_highlight_rules").BibTeXHighlightRules,m=n("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=x,this.foldingRules=new m};d.inherits(e,h),(function(){this.$id="ace/mode/bibtex"}).call(e.prototype),a.Mode=e}),function(){ace.require(["ace/mode/bibtex"],function(n){u&&(u.exports=n)})}()})(b);var v=b.exports;const B=R(v),y=_({__proto__:null,default:B},[v]);export{y as m};