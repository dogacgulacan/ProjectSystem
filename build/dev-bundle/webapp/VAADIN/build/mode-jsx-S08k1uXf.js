import{g as R}from"./_commonjsHelpers-Cpj98o6Y.js";function b(x,v){for(var i=0;i<v.length;i++){const c=v[i];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in x)){const u=Object.getOwnPropertyDescriptor(c,f);u&&Object.defineProperty(x,f,u.get?u:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var k={exports:{}};(function(x,v){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,c,f){var u=i("../lib/oop"),d=i("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},o.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};u.inherits(o,d),o.getTagRule=function(s){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},o.getStartRule=function(s){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:s}},o.getEndRule=function(s){return{token:"comment.doc",regex:"\\*\\/",next:s}},c.DocCommentHighlightRules=o}),ace.define("ace/mode/jsx_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(i,c,f){var u=i("../lib/oop"),d=i("../lib/lang"),o=i("./doc_comment_highlight_rules").DocCommentHighlightRules,s=i("./text_highlight_rules").TextHighlightRules,e=function(){var n=d.arrayToMap("break|do|instanceof|typeof|case|else|new|var|catch|finally|return|void|continue|for|switch|default|while|function|this|if|throw|delete|in|try|class|extends|super|import|from|into|implements|interface|static|mixin|override|abstract|final|number|int|string|boolean|variant|log|assert".split("|")),t=d.arrayToMap("null|true|false|NaN|Infinity|__FILE__|__LINE__|undefined".split("|")),l=d.arrayToMap("debugger|with|const|export|let|private|public|yield|protected|extern|native|as|operator|__fake__|__readonly__".split("|")),r="[a-zA-Z_][a-zA-Z0-9_]*\\b";this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},o.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:["storage.type","text","entity.name.function"],regex:"(function)(\\s+)("+r+")"},{token:function(a){return a=="this"?"variable.language":a=="function"?"storage.type":n.hasOwnProperty(a)||l.hasOwnProperty(a)?"keyword":t.hasOwnProperty(a)?"constant.language":/^_?[A-Z][a-zA-Z0-9_]*$/.test(a)?"language.support.class":"identifier"},regex:r},{token:"keyword.operator",regex:"!|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({<]"},{token:"paren.rparen",regex:"[\\])}>]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]},this.embedRules(o,"doc-",[o.getEndRule("start")])};u.inherits(e,s),c.JsxHighlightRules=e}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(i,c,f){var u=i("../range").Range,d=function(){};(function(){this.checkOutdent=function(o,s){return/^\s+$/.test(o)?/^\s*\}/.test(s):!1},this.autoOutdent=function(o,s){var e=o.getLine(s),n=e.match(/^(\s*\})/);if(!n)return 0;var t=n[1].length,l=o.findMatchingBracket({row:s,column:t});if(!l||l.row==s)return 0;var r=this.$getIndent(o.getLine(l.row));o.replace(new u(s,0,s,t-1),r)},this.$getIndent=function(o){return o.match(/^\s*/)[0]}}).call(d.prototype),c.MatchingBraceOutdent=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(i,c,f){var u=i("../../lib/oop"),d=i("../../range").Range,o=i("./fold_mode").FoldMode,s=c.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};u.inherits(s,o),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,t){var l=e.getLine(t);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var r=this._getFoldWidgetBase(e,n,t);return!r&&this.startRegionRe.test(l)?"start":r},this.getFoldWidgetRange=function(e,n,t,l){var r=e.getLine(t);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,t);var g=r.match(this.foldingStartMarker);if(g){var a=g.index;if(g[1])return this.openingBracketBlock(e,g[1],t,a);var h=e.getCommentFoldRange(t,a+g[0].length,1);return h&&!h.isMultiLine()&&(l?h=this.getSectionRange(e,t):n!="all"&&(h=null)),h}if(n!=="markbegin"){var g=r.match(this.foldingStopMarker);if(g){var a=g.index+g[0].length;return g[1]?this.closingBracketBlock(e,g[1],t,a):e.getCommentFoldRange(t,a,-1)}}},this.getSectionRange=function(e,n){var t=e.getLine(n),l=t.search(/\S/),r=n,a=t.length;n=n+1;for(var h=n,g=e.getLength();++n<g;){t=e.getLine(n);var m=t.search(/\S/);if(m!==-1){if(l>m)break;var p=this.getFoldWidgetRange(e,"all",n);if(p){if(p.start.row<=r)break;if(p.isMultiLine())n=p.end.row;else if(l==m)break}h=n}}return new d(r,a,h,e.getLine(h).length)},this.getCommentRegionBlock=function(e,n,t){for(var l=n.search(/\s*$/),r=e.getLength(),a=t,h=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,g=1;++t<r;){n=e.getLine(t);var m=h.exec(n);if(m&&(m[1]?g--:g++,!g))break}var p=t;if(p>a)return new d(a,l,p,n.length)}}).call(s.prototype)}),ace.define("ace/mode/jsx",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/jsx_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(i,c,f){var u=i("../lib/oop"),d=i("./text").Mode,o=i("./jsx_highlight_rules").JsxHighlightRules,s=i("./matching_brace_outdent").MatchingBraceOutdent,e=i("./behaviour/cstyle").CstyleBehaviour,n=i("./folding/cstyle").FoldMode;function t(){this.HighlightRules=o,this.$outdent=new s,this.$behaviour=new e,this.foldingRules=new n}u.inherits(t,d),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(l,r,a){var h=this.$getIndent(r),g=this.getTokenizer().getLineTokens(r,l),m=g.tokens;if(m.length&&m[m.length-1].type=="comment")return h;if(l=="start"){var p=r.match(/^.*[\{\(\[]\s*$/);p&&(h+=a)}return h},this.checkOutdent=function(l,r,a){return this.$outdent.checkOutdent(r,a)},this.autoOutdent=function(l,r,a){this.$outdent.autoOutdent(r,a)},this.$id="ace/mode/jsx"}).call(t.prototype),c.Mode=t}),function(){ace.require(["ace/mode/jsx"],function(i){x&&(x.exports=i)})}()})(k);var _=k.exports;const y=R(_),$=b({__proto__:null,default:y},[_]);export{$ as m};
