import{g as R}from"./_commonjsHelpers-Cpj98o6Y.js";function _(k,x){for(var r=0;r<x.length;r++){const c=x[r];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in k)){const h=Object.getOwnPropertyDescriptor(c,d);h&&Object.defineProperty(k,d,h.get?h:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var v={exports:{}};(function(k,x){ace.define("ace/mode/jack_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,c,d){var h=r("../lib/oop"),f=r("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"string",regex:'"',next:"string2"},{token:"string",regex:"'",next:"string1"},{token:"constant.numeric",regex:"-?0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"(?:0|[-+]?[1-9][0-9]*)\\b"},{token:"constant.binary",regex:"<[0-9A-Fa-f][0-9A-Fa-f](\\s+[0-9A-Fa-f][0-9A-Fa-f])*>"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"constant.language.null",regex:"null\\b"},{token:"storage.type",regex:"(?:Integer|Boolean|Null|String|Buffer|Tuple|List|Object|Function|Coroutine|Form)\\b"},{token:"keyword",regex:"(?:return|abort|vars|for|delete|in|is|escape|exec|split|and|if|elif|else|while)\\b"},{token:"language.builtin",regex:"(?:lines|source|parse|read-stream|interval|substr|parseint|write|print|range|rand|inspect|bind|i-values|i-pairs|i-map|i-filter|i-chunk|i-all\\?|i-any\\?|i-collect|i-zip|i-merge|i-each)\\b"},{token:"comment",regex:"--.*$"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"storage.form",regex:"@[a-z]+"},{token:"constant.other.symbol",regex:":+[a-zA-Z_]([-]?[a-zA-Z0-9_])*[?!]?"},{token:"variable",regex:"[a-zA-Z_]([-]?[a-zA-Z0-9_])*[?!]?"},{token:"keyword.operator",regex:"\\|\\||\\^\\^|&&|!=|==|<=|<|>=|>|\\+|-|\\*|\\/|\\^|\\%|\\#|\\!"},{token:"text",regex:"\\s+"}],string1:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|['"\\\/bfnrt])/},{token:"string",regex:"[^'\\\\]+"},{token:"string",regex:"'",next:"start"},{token:"string",regex:"",next:"start"}],string2:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|['"\\\/bfnrt])/},{token:"string",regex:'[^"\\\\]+'},{token:"string",regex:'"',next:"start"},{token:"string",regex:"",next:"start"}]}};h.inherits(l,f),c.JackHighlightRules=l}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,c,d){var h=r("../range").Range,f=function(){};(function(){this.checkOutdent=function(l,u){return/^\s+$/.test(l)?/^\s*\}/.test(u):!1},this.autoOutdent=function(l,u){var e=l.getLine(u),n=e.match(/^(\s*\})/);if(!n)return 0;var t=n[1].length,i=l.findMatchingBracket({row:u,column:t});if(!i||i.row==u)return 0;var a=this.$getIndent(l.getLine(i.row));l.replace(new h(u,0,u,t-1),a)},this.$getIndent=function(l){return l.match(/^\s*/)[0]}}).call(f.prototype),c.MatchingBraceOutdent=f}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,c,d){var h=r("../../lib/oop"),f=r("../../range").Range,l=r("./fold_mode").FoldMode,u=c.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};h.inherits(u,l),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,t){var i=e.getLine(t);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var a=this._getFoldWidgetBase(e,n,t);return!a&&this.startRegionRe.test(i)?"start":a},this.getFoldWidgetRange=function(e,n,t,i){var a=e.getLine(t);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(e,a,t);var o=a.match(this.foldingStartMarker);if(o){var g=o.index;if(o[1])return this.openingBracketBlock(e,o[1],t,g);var s=e.getCommentFoldRange(t,g+o[0].length,1);return s&&!s.isMultiLine()&&(i?s=this.getSectionRange(e,t):n!="all"&&(s=null)),s}if(n!=="markbegin"){var o=a.match(this.foldingStopMarker);if(o){var g=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],t,g):e.getCommentFoldRange(t,g,-1)}}},this.getSectionRange=function(e,n){var t=e.getLine(n),i=t.search(/\S/),a=n,g=t.length;n=n+1;for(var s=n,o=e.getLength();++n<o;){t=e.getLine(n);var p=t.search(/\S/);if(p!==-1){if(i>p)break;var m=this.getFoldWidgetRange(e,"all",n);if(m){if(m.start.row<=a)break;if(m.isMultiLine())n=m.end.row;else if(i==p)break}s=n}}return new f(a,g,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,n,t){for(var i=n.search(/\s*$/),a=e.getLength(),g=t,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++t<a;){n=e.getLine(t);var p=s.exec(n);if(p&&(p[1]?o--:o++,!o))break}var m=t;if(m>g)return new f(g,i,m,n.length)}}).call(u.prototype)}),ace.define("ace/mode/jack",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/jack_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(r,c,d){var h=r("../lib/oop"),f=r("./text").Mode,l=r("./jack_highlight_rules").JackHighlightRules,u=r("./matching_brace_outdent").MatchingBraceOutdent,e=r("./behaviour/cstyle").CstyleBehaviour,n=r("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=l,this.$outdent=new u,this.$behaviour=new e,this.foldingRules=new n};h.inherits(t,f),(function(){this.lineCommentStart="--",this.getNextLineIndent=function(i,a,g){var s=this.$getIndent(a);if(i=="start"){var o=a.match(/^.*[\{\(\[]\s*$/);o&&(s+=g)}return s},this.checkOutdent=function(i,a,g){return this.$outdent.checkOutdent(a,g)},this.autoOutdent=function(i,a,g){this.$outdent.autoOutdent(a,g)},this.$id="ace/mode/jack"}).call(t.prototype),c.Mode=t}),function(){ace.require(["ace/mode/jack"],function(r){k&&(k.exports=r)})}()})(v);var b=v.exports;const F=R(b),y=_({__proto__:null,default:F},[b]);export{y as m};
