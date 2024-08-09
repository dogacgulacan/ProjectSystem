import{g as _}from"./_commonjsHelpers-Cpj98o6Y.js";function y(u,x){for(var o=0;o<x.length;o++){const s=x[o];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in u)){const g=Object.getOwnPropertyDescriptor(s,c);g&&Object.defineProperty(u,c,g.get?g:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var j={exports:{}};(function(u,x){ace.define("ace/mode/jssm_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,s,c){var g=o("../lib/oop"),f=o("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"punctuation.definition.comment.mn",regex:/\/\*/,push:[{token:"punctuation.definition.comment.mn",regex:/\*\//,next:"pop"},{defaultToken:"comment.block.jssm"}],comment:"block comment"},{token:"comment.line.jssm",regex:/\/\//,push:[{token:"comment.line.jssm",regex:/$/,next:"pop"},{defaultToken:"comment.line.jssm"}],comment:"block comment"},{token:"entity.name.function",regex:/\${/,push:[{token:"entity.name.function",regex:/}/,next:"pop"},{defaultToken:"keyword.other"}],comment:"js outcalls"},{token:"constant.numeric",regex:/[0-9]*\.[0-9]*\.[0-9]*/,comment:"semver"},{token:"constant.language.jssmLanguage",regex:/graph_layout\s*:/,comment:"jssm language tokens"},{token:"constant.language.jssmLanguage",regex:/machine_name\s*:/,comment:"jssm language tokens"},{token:"constant.language.jssmLanguage",regex:/machine_version\s*:/,comment:"jssm language tokens"},{token:"constant.language.jssmLanguage",regex:/jssm_version\s*:/,comment:"jssm language tokens"},{token:"keyword.control.transition.jssmArrow.legal_legal",regex:/<->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.legal_none",regex:/<-/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.none_legal",regex:/->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_main",regex:/<=>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.none_main",regex:/=>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_none",regex:/<=/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_forced",regex:/<~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.none_forced",regex:/~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_none",regex:/<~/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.legal_main",regex:/<-=>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_legal",regex:/<=->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.legal_forced",regex:/<-~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_legal",regex:/<~->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_forced",regex:/<=~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_main",regex:/<~=>/,comment:"transitions"},{token:"constant.numeric.jssmProbability",regex:/[0-9]+%/,comment:"edge probability annotation"},{token:"constant.character.jssmAction",regex:/\'[^']*\'/,comment:"action annotation"},{token:"entity.name.tag.jssmLabel.doublequoted",regex:/\"[^"]*\"/,comment:"jssm label annotation"},{token:"entity.name.tag.jssmLabel.atom",regex:/[a-zA-Z0-9_.+&()#@!?,]/,comment:"jssm label annotation"}]},this.normalizeRules()};d.metaData={fileTypes:["jssm","jssm_state"],name:"JSSM",scopeName:"source.jssm"},g.inherits(d,f),s.JSSMHighlightRules=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,s,c){var g=o("../../lib/oop"),f=o("../../range").Range,d=o("./fold_mode").FoldMode,p=s.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};g.inherits(p,d),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var a=e.getLine(n);if(this.singleLineBlockCommentRe.test(a)&&!this.startRegionRe.test(a)&&!this.tripleStarBlockCommentRe.test(a))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(a)?"start":i},this.getFoldWidgetRange=function(e,t,n,a){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var r=i.match(this.foldingStartMarker);if(r){var l=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,l);var m=e.getCommentFoldRange(n,l+r[0].length,1);return m&&!m.isMultiLine()&&(a?m=this.getSectionRange(e,n):t!="all"&&(m=null)),m}if(t!=="markbegin"){var r=i.match(this.foldingStopMarker);if(r){var l=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,l):e.getCommentFoldRange(n,l,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),a=n.search(/\S/),i=t,l=n.length;t=t+1;for(var m=t,r=e.getLength();++t<r;){n=e.getLine(t);var k=n.search(/\S/);if(k!==-1){if(a>k)break;var h=this.getFoldWidgetRange(e,"all",t);if(h){if(h.start.row<=i)break;if(h.isMultiLine())t=h.end.row;else if(a==k)break}m=t}}return new f(i,l,m,e.getLine(m).length)},this.getCommentRegionBlock=function(e,t,n){for(var a=t.search(/\s*$/),i=e.getLength(),l=n,m=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,r=1;++n<i;){t=e.getLine(n);var k=m.exec(t);if(k&&(k[1]?r--:r++,!r))break}var h=n;if(h>l)return new f(l,a,h,t.length)}}).call(p.prototype)}),ace.define("ace/mode/jssm",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/jssm_highlight_rules","ace/mode/folding/cstyle"],function(o,s,c){var g=o("../lib/oop"),f=o("./text").Mode,d=o("./jssm_highlight_rules").JSSMHighlightRules,p=o("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=d,this.foldingRules=new p};g.inherits(e,f),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/jssm"}).call(e.prototype),s.Mode=e}),function(){ace.require(["ace/mode/jssm"],function(o){u&&(u.exports=o)})}()})(j);var v=j.exports;const R=_(v),w=y({__proto__:null,default:R},[v]);export{w as m};
