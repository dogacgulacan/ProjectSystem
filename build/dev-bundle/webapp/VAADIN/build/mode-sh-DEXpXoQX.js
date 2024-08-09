import{g as w}from"./_commonjsHelpers-Cpj98o6Y.js";function C(v,R){for(var l=0;l<R.length;l++){const d=R[l];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in v)){const c=Object.getOwnPropertyDescriptor(d,p);c&&Object.defineProperty(v,p,c.get?c:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var S={exports:{}};(function(v,R){ace.define("ace/mode/sh_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(l,d,p){var c=l("../lib/oop"),x=l("./text_highlight_rules").TextHighlightRules,y=d.reservedKeywords="!|{|}|case|do|done|elif|else|esac|fi|for|if|in|then|until|while|&|;|export|local|read|typeset|unset|elif|select|set|function|declare|readonly",m=d.languageConstructs="[|]|alias|bg|bind|break|builtin|cd|command|compgen|complete|continue|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|return|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|wait",t=function(){var n=this.createKeywordMapper({keyword:y,"support.function.builtin":m,"invalid.deprecated":"debugger"},"identifier"),r="(?:(?:[1-9]\\d*)|(?:0))",g="(?:\\.\\d+)",a="(?:\\d+)",o="(?:(?:"+a+"?"+g+")|(?:"+a+"\\.))",i="(?:(?:"+o+"|"+a+"))",e="(?:"+i+"|"+o+")",s="(?:&"+a+")",h="[a-zA-Z_][a-zA-Z0-9_]*",$="(?:"+h+"(?==))",M="(?:\\$(?:SHLVL|\\$|\\!|\\?))",F="(?:"+h+"\\s*\\(\\))";this.$rules={start:[{token:"constant",regex:/\\./},{token:["text","comment"],regex:/(^|\s)(#.*)$/},{token:"string.start",regex:'"',push:[{token:"constant.language.escape",regex:/\\(?:[$`"\\]|$)/},{include:"variables"},{token:"keyword.operator",regex:/`/},{token:"string.end",regex:'"',next:"pop"},{defaultToken:"string"}]},{token:"string",regex:"\\$'",push:[{token:"constant.language.escape",regex:/\\(?:[abeEfnrtv\\'"]|x[a-fA-F\d]{1,2}|u[a-fA-F\d]{4}([a-fA-F\d]{4})?|c.|\d{1,3})/},{token:"string",regex:"'",next:"pop"},{defaultToken:"string"}]},{regex:"<<<",token:"keyword.operator"},{stateName:"heredoc",regex:"(<<-?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)",onMatch:function(f,k,u){var L=f[2]=="-"?"indentedHeredoc":"heredoc",b=f.split(this.splitRegex);return u.push(L,b[4]),[{type:"constant",value:b[1]},{type:"text",value:b[2]},{type:"string",value:b[3]},{type:"support.class",value:b[4]},{type:"string",value:b[5]}]},rules:{heredoc:[{onMatch:function(f,k,u){return f===u[1]?(u.shift(),u.shift(),this.next=u[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^	+"},{onMatch:function(f,k,u){return f===u[1]?(u.shift(),u.shift(),this.next=u[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(f,k){return k[0]==="heredoc"||k[0]==="indentedHeredoc"?k[0]:f}},{token:["keyword","text","text","text","variable"],regex:/(declare|local|readonly)(\s+)(?:(-[fixar]+)(\s+))?([a-zA-Z_][a-zA-Z0-9_]*\b)/},{token:"variable.language",regex:M},{token:"variable",regex:$},{include:"variables"},{token:"support.function",regex:F},{token:"support.function",regex:s},{token:"string",start:"'",end:"'"},{token:"constant.numeric",regex:e},{token:"constant.numeric",regex:r+"\\b"},{token:n,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|~|<|>|<=|=>|=|!=|[%&|`]"},{token:"punctuation.operator",regex:";"},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]]"},{token:"paren.rparen",regex:"[\\)\\}]",next:"pop"}],variables:[{token:"variable",regex:/(\$)(\w+)/},{token:["variable","paren.lparen"],regex:/(\$)(\()/,push:"start"},{token:["variable","paren.lparen","keyword.operator","variable","keyword.operator"],regex:/(\$)(\{)([#!]?)(\w+|[*@#?\-$!0_])(:[?+\-=]?|##?|%%?|,,?\/|\^\^?)?/,push:"start"},{token:"variable",regex:/\$[*@#?\-$!0_]/},{token:["variable","paren.lparen"],regex:/(\$)(\{)/,push:"start"}]},this.normalizeRules()};c.inherits(t,x),d.ShHighlightRules=t}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(l,d,p){var c=l("../../lib/oop"),x=l("../../range").Range,y=l("./fold_mode").FoldMode,m=d.FoldMode=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};c.inherits(m,y),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,n,r){var g=t.getLine(r);if(this.singleLineBlockCommentRe.test(g)&&!this.startRegionRe.test(g)&&!this.tripleStarBlockCommentRe.test(g))return"";var a=this._getFoldWidgetBase(t,n,r);return!a&&this.startRegionRe.test(g)?"start":a},this.getFoldWidgetRange=function(t,n,r,g){var a=t.getLine(r);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(t,a,r);var e=a.match(this.foldingStartMarker);if(e){var o=e.index;if(e[1])return this.openingBracketBlock(t,e[1],r,o);var i=t.getCommentFoldRange(r,o+e[0].length,1);return i&&!i.isMultiLine()&&(g?i=this.getSectionRange(t,r):n!="all"&&(i=null)),i}if(n!=="markbegin"){var e=a.match(this.foldingStopMarker);if(e){var o=e.index+e[0].length;return e[1]?this.closingBracketBlock(t,e[1],r,o):t.getCommentFoldRange(r,o,-1)}}},this.getSectionRange=function(t,n){var r=t.getLine(n),g=r.search(/\S/),a=n,o=r.length;n=n+1;for(var i=n,e=t.getLength();++n<e;){r=t.getLine(n);var s=r.search(/\S/);if(s!==-1){if(g>s)break;var h=this.getFoldWidgetRange(t,"all",n);if(h){if(h.start.row<=a)break;if(h.isMultiLine())n=h.end.row;else if(g==s)break}i=n}}return new x(a,o,i,t.getLine(i).length)},this.getCommentRegionBlock=function(t,n,r){for(var g=n.search(/\s*$/),a=t.getLength(),o=r,i=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,e=1;++r<a;){n=t.getLine(r);var s=i.exec(n);if(s&&(s[1]?e--:e++,!e))break}var h=r;if(h>o)return new x(o,g,h,n.length)}}).call(m.prototype)}),ace.define("ace/mode/sh",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sh_highlight_rules","ace/range","ace/mode/folding/cstyle","ace/mode/behaviour/cstyle"],function(l,d,p){var c=l("../lib/oop"),x=l("./text").Mode,y=l("./sh_highlight_rules").ShHighlightRules,m=l("../range").Range,t=l("./folding/cstyle").FoldMode,n=l("./behaviour/cstyle").CstyleBehaviour,r=function(){this.HighlightRules=y,this.foldingRules=new t,this.$behaviour=new n};c.inherits(r,x),(function(){this.lineCommentStart="#",this.getNextLineIndent=function(a,o,i){var e=this.$getIndent(o),s=this.getTokenizer().getLineTokens(o,a),h=s.tokens;if(h.length&&h[h.length-1].type=="comment")return e;if(a=="start"){var $=o.match(/^.*[\{\(\[:]\s*$/);$&&(e+=i)}return e};var g={pass:1,return:1,raise:1,break:1,continue:1};this.checkOutdent=function(a,o,i){if(i!==`\r
`&&i!=="\r"&&i!==`
`)return!1;var e=this.getTokenizer().getLineTokens(o.trim(),a).tokens;if(!e)return!1;do var s=e.pop();while(s&&(s.type=="comment"||s.type=="text"&&s.value.match(/^\s+$/)));return s?s.type=="keyword"&&g[s.value]:!1},this.autoOutdent=function(a,o,i){i+=1;var e=this.$getIndent(o.getLine(i)),s=o.getTabString();e.slice(-s.length)==s&&o.remove(new m(i,e.length-s.length,i,e.length))},this.$id="ace/mode/sh",this.snippetFileId="ace/snippets/sh"}).call(r.prototype),d.Mode=r}),function(){ace.require(["ace/mode/sh"],function(l){v&&(v.exports=l)})}()})(S);var _=S.exports;const B=w(_),A=C({__proto__:null,default:B},[_]);export{A as m};
