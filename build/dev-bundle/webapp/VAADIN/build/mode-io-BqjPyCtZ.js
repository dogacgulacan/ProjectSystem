import{g as R}from"./_commonjsHelpers-Cpj98o6Y.js";function F(f,b){for(var i=0;i<b.length;i++){const a=b[i];if(typeof a!="string"&&!Array.isArray(a)){for(const u in a)if(u!=="default"&&!(u in f)){const c=Object.getOwnPropertyDescriptor(a,u);c&&Object.defineProperty(f,u,c.get?c:{enumerable:!0,get:()=>a[u]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(f,b){ace.define("ace/mode/io_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,a,u){var c=i("../lib/oop"),p=i("./text_highlight_rules").TextHighlightRules,h=function(){this.$rules={start:[{token:"keyword.control.io",regex:"\\b(?:if|ifTrue|ifFalse|ifTrueIfFalse|for|loop|reverseForeach|foreach|map|continue|break|while|do|return)\\b"},{token:"punctuation.definition.comment.io",regex:"/\\*",push:[{token:"punctuation.definition.comment.io",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.io"}]},{token:"punctuation.definition.comment.io",regex:"//",push:[{token:"comment.line.double-slash.io",regex:"$",next:"pop"},{defaultToken:"comment.line.double-slash.io"}]},{token:"punctuation.definition.comment.io",regex:"#",push:[{token:"comment.line.number-sign.io",regex:"$",next:"pop"},{defaultToken:"comment.line.number-sign.io"}]},{token:"variable.language.io",regex:"\\b(?:self|sender|target|proto|protos|parent)\\b",comment:"I wonder if some of this isn't variable.other.language? --Allan; scoping this as variable.language to match Objective-C's handling of 'self', which is inconsistent with C++'s handling of 'this' but perhaps intentionally so -- Rob"},{token:"keyword.operator.io",regex:"<=|>=|=|:=|\\*|\\||\\|\\||\\+|-|/|&|&&|>|<|\\?|@|@@|\\b(?:and|or)\\b"},{token:"constant.other.io",regex:"\\bGL[\\w_]+\\b"},{token:"support.class.io",regex:"\\b[A-Z](?:\\w+)?\\b"},{token:"support.function.io",regex:"\\b(?:clone|call|init|method|list|vector|block|\\w+(?=\\s*\\())\\b"},{token:"support.function.open-gl.io",regex:"\\bgl(?:u|ut)?[A-Z]\\w+\\b"},{token:"punctuation.definition.string.begin.io",regex:'"""',push:[{token:"punctuation.definition.string.end.io",regex:'"""',next:"pop"},{token:"constant.character.escape.io",regex:"\\\\."},{defaultToken:"string.quoted.triple.io"}]},{token:"punctuation.definition.string.begin.io",regex:'"',push:[{token:"punctuation.definition.string.end.io",regex:'"',next:"pop"},{token:"constant.character.escape.io",regex:"\\\\."},{defaultToken:"string.quoted.double.io"}]},{token:"constant.numeric.io",regex:"\\b(?:0(?:x|X)[0-9a-fA-F]*|(?:[0-9]+\\.?[0-9]*|\\.[0-9]+)(?:(?:e|E)(?:\\+|-)?[0-9]+)?)(?:L|l|UL|ul|u|U|F|f)?\\b"},{token:"variable.other.global.io",regex:"Lobby\\b"},{token:"constant.language.io",regex:"\\b(?:TRUE|true|FALSE|false|NULL|null|Null|Nil|nil|YES|NO)\\b"}]},this.normalizeRules()};h.metaData={fileTypes:["io"],keyEquivalent:"^~I",name:"Io",scopeName:"source.io"},c.inherits(h,p),a.IoHighlightRules=h}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(i,a,u){var c=i("../../lib/oop"),p=i("../../range").Range,h=i("./fold_mode").FoldMode,k=a.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};c.inherits(k,h),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,o){var l=e.getLine(o);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var r=this._getFoldWidgetBase(e,t,o);return!r&&this.startRegionRe.test(l)?"start":r},this.getFoldWidgetRange=function(e,t,o,l){var r=e.getLine(o);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,o);var n=r.match(this.foldingStartMarker);if(n){var g=n.index;if(n[1])return this.openingBracketBlock(e,n[1],o,g);var s=e.getCommentFoldRange(o,g+n[0].length,1);return s&&!s.isMultiLine()&&(l?s=this.getSectionRange(e,o):t!="all"&&(s=null)),s}if(t!=="markbegin"){var n=r.match(this.foldingStopMarker);if(n){var g=n.index+n[0].length;return n[1]?this.closingBracketBlock(e,n[1],o,g):e.getCommentFoldRange(o,g,-1)}}},this.getSectionRange=function(e,t){var o=e.getLine(t),l=o.search(/\S/),r=t,g=o.length;t=t+1;for(var s=t,n=e.getLength();++t<n;){o=e.getLine(t);var m=o.search(/\S/);if(m!==-1){if(l>m)break;var d=this.getFoldWidgetRange(e,"all",t);if(d){if(d.start.row<=r)break;if(d.isMultiLine())t=d.end.row;else if(l==m)break}s=t}}return new p(r,g,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,o){for(var l=t.search(/\s*$/),r=e.getLength(),g=o,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,n=1;++o<r;){t=e.getLine(o);var m=s.exec(t);if(m&&(m[1]?n--:n++,!n))break}var d=o;if(d>g)return new p(g,l,d,t.length)}}).call(k.prototype)}),ace.define("ace/mode/io",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/io_highlight_rules","ace/mode/folding/cstyle"],function(i,a,u){var c=i("../lib/oop"),p=i("./text").Mode,h=i("./io_highlight_rules").IoHighlightRules,k=i("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=h,this.foldingRules=new k,this.$behaviour=this.$defaultBehaviour};c.inherits(e,p),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/io",this.snippetFileId="ace/snippets/io"}).call(e.prototype),a.Mode=e}),function(){ace.require(["ace/mode/io"],function(i){f&&(f.exports=i)})}()})(x);var v=x.exports;const M=R(v),L=F({__proto__:null,default:M},[v]);export{L as m};
