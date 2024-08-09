import{g as w}from"./_commonjsHelpers-Cpj98o6Y.js";function C(b,v){for(var l=0;l<v.length;l++){const u=v[l];if(typeof u!="string"&&!Array.isArray(u)){for(const f in u)if(f!=="default"&&!(f in b)){const p=Object.getOwnPropertyDescriptor(u,f);p&&Object.defineProperty(b,f,p.get?p:{enumerable:!0,get:()=>u[f]})}}}return Object.freeze(Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(b,v){ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(l,u,f){var p=l("../lib/oop");l("../lib/lang");var m=l("./text_highlight_rules").TextHighlightRules,c=u.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",d=u.supportFunction="rgb|rgba|url|attr|counter|counters",t=u.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",s=u.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",e=u.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",r=u.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",i=u.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",o=u.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",a=function(){var n=this.createKeywordMapper({"support.function":d,"support.constant":t,"support.type":c,"support.constant.color":s,"support.constant.fonts":e},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:r},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+r+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:r},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:i},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:o},{include:"url"},{token:n,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};p.inherits(a,m),u.CssHighlightRules=a}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(l,u,f){var p=l("../range").Range,m=function(){};(function(){this.checkOutdent=function(c,d){return/^\s+$/.test(c)?/^\s*\}/.test(d):!1},this.autoOutdent=function(c,d){var t=c.getLine(d),s=t.match(/^(\s*\})/);if(!s)return 0;var e=s[1].length,r=c.findMatchingBracket({row:d,column:e});if(!r||r.row==d)return 0;var i=this.$getIndent(c.getLine(r.row));c.replace(new p(d,0,d,e-1),i)},this.$getIndent=function(c){return c.match(/^\s*/)[0]}}).call(m.prototype),u.MatchingBraceOutdent=m}),ace.define("ace/mode/css_completions",["require","exports","module"],function(l,u,f){var p={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},m=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var c=document.createElement("c").style;for(var d in c)if(typeof c[d]=="string"){var t=d.replace(/[A-Z]/g,function(s){return"-"+s.toLowerCase()});p.hasOwnProperty(t)||(p[t]=1)}}this.completionsDefined=!0},this.getCompletions=function(c,d,t,s){if(this.completionsDefined||this.defineCompletions(),c==="ruleset"||d.$mode.$id=="ace/mode/scss"){var e=d.getLine(t.row).substr(0,t.column),r=/\([^)]*$/.test(e);return r&&(e=e.substr(e.lastIndexOf("(")+1)),/:[^;]+$/.test(e)?this.getPropertyValueCompletions(c,d,t,s):this.getPropertyCompletions(c,d,t,s,r)}return[]},this.getPropertyCompletions=function(c,d,t,s,e){e=e||!1;var r=Object.keys(p);return r.map(function(i){return{caption:i,snippet:i+": $0"+(e?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(c,d,t,s){var e=d.getLine(t.row).substr(0,t.column),r=(/([\w\-]+):[^:]*$/.exec(e)||{})[1];if(!r)return[];var i=[];return r in p&&typeof p[r]=="object"&&(i=Object.keys(p[r])),i.map(function(o){return{caption:o,snippet:o,meta:"property value",score:1e6}})}}).call(m.prototype),u.CssCompletions=m}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(l,u,f){var p=l("../../lib/oop");l("../behaviour").Behaviour;var m=l("./cstyle").CstyleBehaviour,c=l("../../token_iterator").TokenIterator,d=function(){this.inherit(m),this.add("colon","insertion",function(t,s,e,r,i){if(i===":"&&e.selection.isEmpty()){var o=e.getCursorPosition(),a=new c(r,o.row,o.column),n=a.getCurrentToken();if(n&&n.value.match(/\s+/)&&(n=a.stepBackward()),n&&n.type==="support.type"){var g=r.doc.getLine(o.row),h=g.substring(o.column,o.column+1);if(h===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(g.substring(o.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(t,s,e,r,i){var o=r.doc.getTextRange(i);if(!i.isMultiLine()&&o===":"){var a=e.getCursorPosition(),n=new c(r,a.row,a.column),g=n.getCurrentToken();if(g&&g.value.match(/\s+/)&&(g=n.stepBackward()),g&&g.type==="support.type"){var h=r.doc.getLine(i.start.row),k=h.substring(i.end.column,i.end.column+1);if(k===";")return i.end.column++,i}}}),this.add("semicolon","insertion",function(t,s,e,r,i){if(i===";"&&e.selection.isEmpty()){var o=e.getCursorPosition(),a=r.doc.getLine(o.row),n=a.substring(o.column,o.column+1);if(n===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(t,s,e,r,i){if(i==="!"&&e.selection.isEmpty()){var o=e.getCursorPosition(),a=r.doc.getLine(o.row);if(/^\s*(;|}|$)/.test(a.substring(o.column)))return{text:"!important",selection:[10,10]}}})};p.inherits(d,m),u.CssBehaviour=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(l,u,f){var p=l("../../lib/oop"),m=l("../../range").Range,c=l("./fold_mode").FoldMode,d=u.FoldMode=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};p.inherits(d,c),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,s,e){var r=t.getLine(e);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(t,s,e);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(t,s,e,r){var i=t.getLine(e);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(t,i,e);var n=i.match(this.foldingStartMarker);if(n){var o=n.index;if(n[1])return this.openingBracketBlock(t,n[1],e,o);var a=t.getCommentFoldRange(e,o+n[0].length,1);return a&&!a.isMultiLine()&&(r?a=this.getSectionRange(t,e):s!="all"&&(a=null)),a}if(s!=="markbegin"){var n=i.match(this.foldingStopMarker);if(n){var o=n.index+n[0].length;return n[1]?this.closingBracketBlock(t,n[1],e,o):t.getCommentFoldRange(e,o,-1)}}},this.getSectionRange=function(t,s){var e=t.getLine(s),r=e.search(/\S/),i=s,o=e.length;s=s+1;for(var a=s,n=t.getLength();++s<n;){e=t.getLine(s);var g=e.search(/\S/);if(g!==-1){if(r>g)break;var h=this.getFoldWidgetRange(t,"all",s);if(h){if(h.start.row<=i)break;if(h.isMultiLine())s=h.end.row;else if(r==g)break}a=s}}return new m(i,o,a,t.getLine(a).length)},this.getCommentRegionBlock=function(t,s,e){for(var r=s.search(/\s*$/),i=t.getLength(),o=e,a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,n=1;++e<i;){s=t.getLine(e);var g=a.exec(s);if(g&&(g[1]?n--:n++,!n))break}var h=e;if(h>o)return new m(o,r,h,s.length)}}).call(d.prototype)}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(l,u,f){var p=l("../lib/oop"),m=l("./text").Mode,c=l("./css_highlight_rules").CssHighlightRules,d=l("./matching_brace_outdent").MatchingBraceOutdent,t=l("../worker/worker_client").WorkerClient,s=l("./css_completions").CssCompletions,e=l("./behaviour/css").CssBehaviour,r=l("./folding/cstyle").FoldMode,i=function(){this.HighlightRules=c,this.$outdent=new d,this.$behaviour=new e,this.$completer=new s,this.foldingRules=new r};p.inherits(i,m),(function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(o,a,n){var g=this.$getIndent(a),h=this.getTokenizer().getLineTokens(a,o).tokens;if(h.length&&h[h.length-1].type=="comment")return g;var k=a.match(/^.*\{\s*$/);return k&&(g+=n),g},this.checkOutdent=function(o,a,n){return this.$outdent.checkOutdent(a,n)},this.autoOutdent=function(o,a,n){this.$outdent.autoOutdent(a,n)},this.getCompletions=function(o,a,n,g){return this.$completer.getCompletions(o,a,n,g)},this.createWorker=function(o){var a=new t(["ace"],"ace/mode/css_worker","Worker");return a.attachToDocument(o.getDocument()),a.on("annotate",function(n){o.setAnnotations(n.data)}),a.on("terminate",function(){o.clearAnnotations()}),a},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}).call(i.prototype),u.Mode=i}),function(){ace.require(["ace/mode/css"],function(l){b&&(b.exports=l)})}()})(x);var y=x.exports;const z=w(y),R=C({__proto__:null,default:z},[y]);export{R as m};
