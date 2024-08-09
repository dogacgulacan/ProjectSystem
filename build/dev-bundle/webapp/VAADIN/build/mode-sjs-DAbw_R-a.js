import{g as S}from"./_commonjsHelpers-Cpj98o6Y.js";function R(k,_){for(var r=0;r<_.length;r++){const x=_[r];if(typeof x!="string"&&!Array.isArray(x)){for(const f in x)if(f!=="default"&&!(f in k)){const h=Object.getOwnPropertyDescriptor(x,f);h&&Object.defineProperty(k,f,h.get?h:{enumerable:!0,get:()=>x[f]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var y={exports:{}};(function(k,_){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,x,f){var h=r("../lib/oop"),p=r("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},d.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};h.inherits(d,p),d.getTagRule=function(t){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},d.getStartRule=function(t){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:t}},d.getEndRule=function(t){return{token:"comment.doc",regex:"\\*\\/",next:t}},x.DocCommentHighlightRules=d}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(r,x,f){var h=r("../lib/oop"),p=r("./doc_comment_highlight_rules").DocCommentHighlightRules,d=r("./text_highlight_rules").TextHighlightRules,t="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",i=function(e){var a=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),l="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",s="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[p.getStartRule("doc-start"),o("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+t+")(\\.)(prototype)(\\.)("+t+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+t+")(\\.)("+t+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+t+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+t+")(\\.)("+t+")(\\s*)(=)(\\s*)(function\\*?)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function\\*?)(\\s+)("+t+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+t+")(\\s*)(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+l+")\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:a,regex:t},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+t+")(\\.)("+t+")(\\s*)(=)(\\s*)(function\\*?)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:t},{regex:"",token:"empty",next:"no_regex"}],start:[p.getStartRule("doc-start"),o("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[o("function_arguments"),{token:"variable.parameter",regex:t},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:s},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:s},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!e||!e.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(n,c,g){if(this.next=n=="{"?this.nextState:"",n=="{"&&g.length)g.unshift("start",c);else if(n=="}"&&g.length&&(g.shift(),this.next=g.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return n=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:s},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+t+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=.+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),(!e||e.jsx!=!1)&&u.call(this)),this.embedRules(p,"doc-",[p.getEndRule("no_regex")]),this.normalizeRules()};h.inherits(i,d);function u(){var e=t.replace("\\d","\\d\\-"),a={onMatch:function(s,n,c){var g=s.charAt(1)=="/"?2:1;return g==1?(n!=this.nextState?c.unshift(this.next,this.nextState,0):c.unshift(this.next),c[2]++):g==2&&n==this.nextState&&(c[1]--,(!c[1]||c[1]<0)&&(c.shift(),c.shift())),[{type:"meta.tag.punctuation."+(g==1?"":"end-")+"tag-open.xml",value:s.slice(0,g)},{type:"meta.tag.tag-name.xml",value:s.substr(g)}]},regex:"</?"+e,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(a);var l={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[l,a,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(s,n,c){return n==c[0]&&c.shift(),s.length==2&&(c[0]==this.nextState&&c[1]--,(!c[1]||c[1]<0)&&c.splice(0,2)),this.next=c[0]||"start",[{type:this.token,value:s}]},nextState:"jsx"},l,o("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:e},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},a],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function o(e){return[{token:"comment",regex:/\/\*/,next:[p.getTagRule(),{token:"comment",regex:"\\*\\/",next:e||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[p.getTagRule(),{token:"comment",regex:"$|^",next:e||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}x.JavaScriptHighlightRules=i}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,x,f){var h=r("../range").Range,p=function(){};(function(){this.checkOutdent=function(d,t){return/^\s+$/.test(d)?/^\s*\}/.test(t):!1},this.autoOutdent=function(d,t){var i=d.getLine(t),u=i.match(/^(\s*\})/);if(!u)return 0;var o=u[1].length,e=d.findMatchingBracket({row:t,column:o});if(!e||e.row==t)return 0;var a=this.$getIndent(d.getLine(e.row));d.replace(new h(t,0,t,o-1),a)},this.$getIndent=function(d){return d.match(/^\s*/)[0]}}).call(p.prototype),x.MatchingBraceOutdent=p}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,x,f){var h=r("../../lib/oop"),p=r("../../range").Range,d=r("./fold_mode").FoldMode,t=x.FoldMode=function(i){i&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+i.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+i.end)))};h.inherits(t,d),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(i,u,o){var e=i.getLine(o);if(this.singleLineBlockCommentRe.test(e)&&!this.startRegionRe.test(e)&&!this.tripleStarBlockCommentRe.test(e))return"";var a=this._getFoldWidgetBase(i,u,o);return!a&&this.startRegionRe.test(e)?"start":a},this.getFoldWidgetRange=function(i,u,o,e){var a=i.getLine(o);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(i,a,o);var n=a.match(this.foldingStartMarker);if(n){var l=n.index;if(n[1])return this.openingBracketBlock(i,n[1],o,l);var s=i.getCommentFoldRange(o,l+n[0].length,1);return s&&!s.isMultiLine()&&(e?s=this.getSectionRange(i,o):u!="all"&&(s=null)),s}if(u!=="markbegin"){var n=a.match(this.foldingStopMarker);if(n){var l=n.index+n[0].length;return n[1]?this.closingBracketBlock(i,n[1],o,l):i.getCommentFoldRange(o,l,-1)}}},this.getSectionRange=function(i,u){var o=i.getLine(u),e=o.search(/\S/),a=u,l=o.length;u=u+1;for(var s=u,n=i.getLength();++u<n;){o=i.getLine(u);var c=o.search(/\S/);if(c!==-1){if(e>c)break;var g=this.getFoldWidgetRange(i,"all",u);if(g){if(g.start.row<=a)break;if(g.isMultiLine())u=g.end.row;else if(e==c)break}s=u}}return new p(a,l,s,i.getLine(s).length)},this.getCommentRegionBlock=function(i,u,o){for(var e=u.search(/\s*$/),a=i.getLength(),l=o,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,n=1;++o<a;){u=i.getLine(o);var c=s.exec(u);if(c&&(c[1]?n--:n++,!n))break}var g=o;if(g>l)return new p(l,e,g,u.length)}}).call(t.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(r,x,f){var h=r("../lib/oop"),p=r("./text").Mode,d=r("./javascript_highlight_rules").JavaScriptHighlightRules,t=r("./matching_brace_outdent").MatchingBraceOutdent,i=r("../worker/worker_client").WorkerClient,u=r("./behaviour/cstyle").CstyleBehaviour,o=r("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=d,this.$outdent=new t,this.$behaviour=new u,this.foldingRules=new o};h.inherits(e,p),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(a,l,s){var n=this.$getIndent(l),c=this.getTokenizer().getLineTokens(l,a),g=c.tokens,v=c.state;if(g.length&&g[g.length-1].type=="comment")return n;if(a=="start"||a=="no_regex"){var m=l.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);m&&(n+=s)}else if(a=="doc-start"){if(v=="start"||v=="no_regex")return"";var m=l.match(/^\s*(\/?)\*/);m&&(m[1]&&(n+=" "),n+="* ")}return n},this.checkOutdent=function(a,l,s){return this.$outdent.checkOutdent(l,s)},this.autoOutdent=function(a,l,s){this.$outdent.autoOutdent(l,s)},this.createWorker=function(a){var l=new i(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return l.attachToDocument(a.getDocument()),l.on("annotate",function(s){a.setAnnotations(s.data)}),l.on("terminate",function(){a.clearAnnotations()}),l},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}).call(e.prototype),x.Mode=e}),ace.define("ace/mode/sjs_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/javascript_highlight_rules","ace/mode/text_highlight_rules"],function(r,x,f){var h=r("../lib/oop"),p=r("./javascript_highlight_rules").JavaScriptHighlightRules,d=r("./text_highlight_rules").TextHighlightRules,t=function(){var i=new p({noES6:!0}),u="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",o=function(g){return g.isContextAware=!0,g},e=function(g){return{token:g.token,regex:g.regex,next:o(function(v,m){return m.length===0&&m.unshift(v),m.unshift(g.next),g.next})}},a=function(g){return{token:g.token,regex:g.regex,next:o(function(v,m){return m.shift(),m[0]||"start"})}};this.$rules=i.$rules,this.$rules.no_regex=[{token:"keyword",regex:"(waitfor|or|and|collapse|spawn|retract)\\b"},{token:"keyword.operator",regex:"(->|=>|\\.\\.)"},{token:"variable.language",regex:"(hold|default)\\b"},e({token:"string",regex:"`",next:"bstring"}),e({token:"string",regex:'"',next:"qqstring"}),e({token:"string",regex:'"',next:"qqstring"}),{token:["paren.lparen","text","paren.rparen"],regex:"(\\{)(\\s*)(\\|)",next:"block_arguments"}].concat(this.$rules.no_regex),this.$rules.block_arguments=[{token:"paren.rparen",regex:"\\|",next:"no_regex"}].concat(this.$rules.function_arguments),this.$rules.bstring=[{token:"constant.language.escape",regex:u},{token:"string",regex:"\\\\$",next:"bstring"},e({token:"paren.lparen",regex:"\\$\\{",next:"string_interp"}),e({token:"paren.lparen",regex:"\\$",next:"bstring_interp_single"}),a({token:"string",regex:"`"}),{defaultToken:"string"}],this.$rules.qqstring=[{token:"constant.language.escape",regex:u},{token:"string",regex:"\\\\$",next:"qqstring"},e({token:"paren.lparen",regex:"#\\{",next:"string_interp"}),a({token:"string",regex:'"'}),{defaultToken:"string"}];for(var l=[],s=0;s<this.$rules.no_regex.length;s++){var n=this.$rules.no_regex[s],c=String(n.token);c.indexOf("paren")==-1&&(!n.next||n.next.isContextAware)&&l.push(n)}this.$rules.string_interp=[a({token:"paren.rparen",regex:"\\}"}),e({token:"paren.lparen",regex:"{",next:"string_interp"})].concat(l),this.$rules.bstring_interp_single=[{token:["identifier","paren.lparen"],regex:"(\\w+)(\\()",next:"bstring_interp_single_call"},a({token:"identifier",regex:"\\w*"})],this.$rules.bstring_interp_single_call=[e({token:"paren.lparen",regex:"\\(",next:"bstring_interp_single_call"}),a({token:"paren.rparen",regex:"\\)"})].concat(l)};h.inherits(t,d),x.SJSHighlightRules=t}),ace.define("ace/mode/sjs",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/mode/sjs_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(r,x,f){var h=r("../lib/oop"),p=r("./javascript").Mode,d=r("./sjs_highlight_rules").SJSHighlightRules,t=r("./matching_brace_outdent").MatchingBraceOutdent,i=r("./behaviour/cstyle").CstyleBehaviour,u=r("./folding/cstyle").FoldMode,o=function(){this.HighlightRules=d,this.$outdent=new t,this.$behaviour=new i,this.foldingRules=new u};h.inherits(o,p),(function(){this.createWorker=function(e){return null},this.$id="ace/mode/sjs"}).call(o.prototype),x.Mode=o}),function(){ace.require(["ace/mode/sjs"],function(r){k&&(k.exports=r)})}()})(y);var b=y.exports;const w=S(b),C=R({__proto__:null,default:w},[b]);export{C as m};