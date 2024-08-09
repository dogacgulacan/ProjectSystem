import{g as A}from"./_commonjsHelpers-Cpj98o6Y.js";function S(F,R){for(var r=0;r<R.length;r++){const u=R[r];if(typeof u!="string"&&!Array.isArray(u)){for(const d in u)if(d!=="default"&&!(d in F)){const K=Object.getOwnPropertyDescriptor(u,d);K&&Object.defineProperty(F,d,K.get?K:{enumerable:!0,get:()=>u[d]})}}}return Object.freeze(Object.defineProperty(F,Symbol.toStringTag,{value:"Module"}))}var h={exports:{}};(function(F,R){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,u,d){var K=r("../lib/oop"),c=r("./text_highlight_rules").TextHighlightRules,g=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},g.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};K.inherits(g,c),g.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},g.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},g.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},u.DocCommentHighlightRules=g}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(r,u,d){var K=r("../lib/oop"),c=r("./doc_comment_highlight_rules").DocCommentHighlightRules,g=r("./text_highlight_rules").TextHighlightRules,e="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",n=function(_){var t=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),s="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",T="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[c.getStartRule("doc-start"),o("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+e+")(\\.)(prototype)(\\.)("+e+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+e+")(\\.)("+e+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+e+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+e+")(\\.)("+e+")(\\s*)(=)(\\s*)(function\\*?)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function\\*?)(\\s+)("+e+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+e+")(\\s*)(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+s+")\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:t,regex:e},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+e+")(\\.)("+e+")(\\s*)(=)(\\s*)(function\\*?)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:e},{regex:"",token:"empty",next:"no_regex"}],start:[c.getStartRule("doc-start"),o("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[o("function_arguments"),{token:"variable.parameter",regex:e},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:T},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:T},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!_||!_.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(i,l,L){if(this.next=i=="{"?this.nextState:"",i=="{"&&L.length)L.unshift("start",l);else if(i=="}"&&L.length&&(L.shift(),this.next=L.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return i=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:T},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+e+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=.+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),(!_||_.jsx!=!1)&&a.call(this)),this.embedRules(c,"doc-",[c.getEndRule("no_regex")]),this.normalizeRules()};K.inherits(n,g);function a(){var _=e.replace("\\d","\\d\\-"),t={onMatch:function(T,i,l){var L=T.charAt(1)=="/"?2:1;return L==1?(i!=this.nextState?l.unshift(this.next,this.nextState,0):l.unshift(this.next),l[2]++):L==2&&i==this.nextState&&(l[1]--,(!l[1]||l[1]<0)&&(l.shift(),l.shift())),[{type:"meta.tag.punctuation."+(L==1?"":"end-")+"tag-open.xml",value:T.slice(0,L)},{type:"meta.tag.tag-name.xml",value:T.substr(L)}]},regex:"</?"+_,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(t);var s={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[s,t,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(T,i,l){return i==l[0]&&l.shift(),T.length==2&&(l[0]==this.nextState&&l[1]--,(!l[1]||l[1]<0)&&l.splice(0,2)),this.next=l[0]||"start",[{type:this.token,value:T}]},nextState:"jsx"},s,o("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:_},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},t],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function o(_){return[{token:"comment",regex:/\/\*/,next:[c.getTagRule(),{token:"comment",regex:"\\*\\/",next:_||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[c.getTagRule(),{token:"comment",regex:"$|^",next:_||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}u.JavaScriptHighlightRules=n}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,u,d){var K=r("../range").Range,c=function(){};(function(){this.checkOutdent=function(g,e){return/^\s+$/.test(g)?/^\s*\}/.test(e):!1},this.autoOutdent=function(g,e){var n=g.getLine(e),a=n.match(/^(\s*\})/);if(!a)return 0;var o=a[1].length,_=g.findMatchingBracket({row:e,column:o});if(!_||_.row==e)return 0;var t=this.$getIndent(g.getLine(_.row));g.replace(new K(e,0,e,o-1),t)},this.$getIndent=function(g){return g.match(/^\s*/)[0]}}).call(c.prototype),u.MatchingBraceOutdent=c}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,u,d){var K=r("../../lib/oop"),c=r("../../range").Range,g=r("./fold_mode").FoldMode,e=u.FoldMode=function(n){n&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+n.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+n.end)))};K.inherits(e,g),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(n,a,o){var _=n.getLine(o);if(this.singleLineBlockCommentRe.test(_)&&!this.startRegionRe.test(_)&&!this.tripleStarBlockCommentRe.test(_))return"";var t=this._getFoldWidgetBase(n,a,o);return!t&&this.startRegionRe.test(_)?"start":t},this.getFoldWidgetRange=function(n,a,o,_){var t=n.getLine(o);if(this.startRegionRe.test(t))return this.getCommentRegionBlock(n,t,o);var i=t.match(this.foldingStartMarker);if(i){var s=i.index;if(i[1])return this.openingBracketBlock(n,i[1],o,s);var T=n.getCommentFoldRange(o,s+i[0].length,1);return T&&!T.isMultiLine()&&(_?T=this.getSectionRange(n,o):a!="all"&&(T=null)),T}if(a!=="markbegin"){var i=t.match(this.foldingStopMarker);if(i){var s=i.index+i[0].length;return i[1]?this.closingBracketBlock(n,i[1],o,s):n.getCommentFoldRange(o,s,-1)}}},this.getSectionRange=function(n,a){var o=n.getLine(a),_=o.search(/\S/),t=a,s=o.length;a=a+1;for(var T=a,i=n.getLength();++a<i;){o=n.getLine(a);var l=o.search(/\S/);if(l!==-1){if(_>l)break;var L=this.getFoldWidgetRange(n,"all",a);if(L){if(L.start.row<=t)break;if(L.isMultiLine())a=L.end.row;else if(_==l)break}T=a}}return new c(t,s,T,n.getLine(T).length)},this.getCommentRegionBlock=function(n,a,o){for(var _=a.search(/\s*$/),t=n.getLength(),s=o,T=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,i=1;++o<t;){a=n.getLine(o);var l=T.exec(a);if(l&&(l[1]?i--:i++,!i))break}var L=o;if(L>s)return new c(s,_,L,a.length)}}).call(e.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(r,u,d){var K=r("../lib/oop"),c=r("./text").Mode,g=r("./javascript_highlight_rules").JavaScriptHighlightRules,e=r("./matching_brace_outdent").MatchingBraceOutdent,n=r("../worker/worker_client").WorkerClient,a=r("./behaviour/cstyle").CstyleBehaviour,o=r("./folding/cstyle").FoldMode,_=function(){this.HighlightRules=g,this.$outdent=new e,this.$behaviour=new a,this.foldingRules=new o};K.inherits(_,c),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(t,s,T){var i=this.$getIndent(s),l=this.getTokenizer().getLineTokens(s,t),L=l.tokens,m=l.state;if(L.length&&L[L.length-1].type=="comment")return i;if(t=="start"||t=="no_regex"){var p=s.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);p&&(i+=T)}else if(t=="doc-start"){if(m=="start"||m=="no_regex")return"";var p=s.match(/^\s*(\/?)\*/);p&&(p[1]&&(i+=" "),i+="* ")}return i},this.checkOutdent=function(t,s,T){return this.$outdent.checkOutdent(s,T)},this.autoOutdent=function(t,s,T){this.$outdent.autoOutdent(s,T)},this.createWorker=function(t){var s=new n(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return s.attachToDocument(t.getDocument()),s.on("annotate",function(T){t.setAnnotations(T.data)}),s.on("terminate",function(){t.clearAnnotations()}),s},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}).call(_.prototype),u.Mode=_}),ace.define("ace/mode/gobstones_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,u,d){var K=r("../lib/oop"),c=r("./text_highlight_rules").TextHighlightRules,g=function(){var e={standard:"program|procedure|function|interactive|return|let",type:"type|is|variant|record|field|case"},n={commands:{repetitions:"repeat|while|foreach|in",alternatives:"if|elseif|else|switch"},expressions:{alternatives:"choose|when|otherwise|matching|select|on"}},a={colors:"Verde|Rojo|Azul|Negro",cardinals:"Norte|Sur|Este|Oeste",booleans:"True|False",numbers:/([-]?)([0-9]+)\b/,strings:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},o={commands:"Poner|Sacar|Mover|IrAlBorde|VaciarTablero|BOOM",expressions:"nroBolitas|hayBolitas|puedeMover|siguiente|previo|opuesto|minBool|maxBool|minDir|maxDir|minColor|maxColor|primero|sinElPrimero|esVacía|boom",keys:"K_A|K_B|K_C|K_D|K_E|K_F|K_G|K_G|K_H|K_I|K_J|K_K|K_L|K_M|K_N|K_Ñ|K_O|K_P|K_Q|K_R|K_S|K_T|K_U|K_V|K_W|K_X|K_Y|K_Z|K_0|K_1|K_2|K_3|K_4|K_5|K_6|K_7|K_8|K_9|K_F1|K_F2|K_F3|K_F4|K_F5|K_F6|K_F7|K_F8|K_F9|K_F10|K_F11|K_12|K_UP|K_DOWN|K_LEFT|K_RIGHT|K_RETURN|K_BACKSPACE|K_TAB|K_SPACE|K_ESCAPEK_CTRL_A|K_CTRL_B|K_CTRL_C|K_CTRL_D|K_CTRL_E|K_CTRL_F|K_CTRL_G|K_CTRL_G|K_CTRL_H|K_CTRL_I|K_CTRL_J|K_CTRL_K|K_CTRL_L|K_CTRL_M|K_CTRL_N|K_CTRL_Ñ|K_CTRL_O|K_CTRL_P|K_CTRL_Q|K_CTRL_R|K_CTRL_S|K_CTRL_T|K_CTRL_U|K_CTRL_V|K_CTRL_W|K_CTRL_X|K_CTRL_Y|K_CTRL_Z|K_CTRL_0|K_CTRL_1|K_CTRL_2|K_CTRL_3|K_CTRL_4|K_CTRL_5|K_CTRL_6|K_CTRL_7|K_CTRL_8|K_CTRL_9|K_CTRL_F1|K_CTRL_F2|K_CTRL_F3|K_CTRL_F4|K_CTRL_F5|K_CTRL_F6|K_CTRL_F7|K_CTRL_F8|K_CTRL_F9|K_CTRL_F10|K_CTRL_F11|K_CTRL_F12|K_CTRL_UP|K_CTRL_DOWN|K_CTRL_LEFT|K_CTRL_RIGHT|K_CTRL_RETURN|K_CTRL_BACKSPACE|K_CTRL_TAB|K_CTRL_SPACE|K_CTRL_ESCAPEK_ALT_A|K_ALT_B|K_ALT_C|K_ALT_D|K_ALT_E|K_ALT_F|K_ALT_G|K_ALT_G|K_ALT_H|K_ALT_I|K_ALT_J|K_ALT_K|K_ALT_L|K_ALT_M|K_ALT_N|K_ALT_Ñ|K_ALT_O|K_ALT_P|K_ALT_Q|K_ALT_R|K_ALT_S|K_ALT_T|K_ALT_U|K_ALT_V|K_ALT_W|K_ALT_X|K_ALT_Y|K_ALT_Z|K_ALT_0|K_ALT_1|K_ALT_2|K_ALT_3|K_ALT_4|K_ALT_5|K_ALT_6|K_ALT_7|K_ALT_8|K_ALT_9|K_ALT_F1|K_ALT_F2|K_ALT_F3|K_ALT_F4|K_ALT_F5|K_ALT_F6|K_ALT_F7|K_ALT_F8|K_ALT_F9|K_ALT_F10|K_ALT_F11|K_ALT_F12|K_ALT_UP|K_ALT_DOWN|K_ALT_LEFT|K_ALT_RIGHT|K_ALT_RETURN|K_ALT_BACKSPACE|K_ALT_TAB|K_ALT_SPACE|K_ALT_ESCAPEK_SHIFT_A|K_SHIFT_B|K_SHIFT_C|K_SHIFT_D|K_SHIFT_E|K_SHIFT_F|K_SHIFT_G|K_SHIFT_G|K_SHIFT_H|K_SHIFT_I|K_SHIFT_J|K_SHIFT_K|K_SHIFT_L|K_SHIFT_M|K_SHIFT_N|K_SHIFT_Ñ|K_SHIFT_O|K_SHIFT_P|K_SHIFT_Q|K_SHIFT_R|K_SHIFT_S|K_SHIFT_T|K_SHIFT_U|K_SHIFT_V|K_SHIFT_W|K_SHIFT_X|K_SHIFT_Y|K_SHIFT_Z|K_SHIFT_0|K_SHIFT_1|K_SHIFT_2|K_SHIFT_3|K_SHIFT_4|K_SHIFT_5|K_SHIFT_6|K_SHIFT_7|K_SHIFT_8|K_SHIFT_9|K_SHIFT_F1|K_SHIFT_F2|K_SHIFT_F3|K_SHIFT_F4|K_SHIFT_F5|K_SHIFT_F6|K_SHIFT_F7|K_SHIFT_F8|K_SHIFT_F9|K_SHIFT_F10|K_SHIFT_F11|K_SHIFT_F12|K_SHIFT_UP|K_SHIFT_DOWN|K_SHIFT_LEFT|K_SHIFT_RIGHT|K_SHIFT_RETURN|K_SHIFT_BACKSPACE|K_SHIFT_TAB|K_SHIFT_SPACE|K_SHIFT_ESCAPEK_CTRL_ALT_A|K_CTRL_ALT_B|K_CTRL_ALT_C|K_CTRL_ALT_D|K_CTRL_ALT_E|K_CTRL_ALT_F|K_CTRL_ALT_G|K_CTRL_ALT_G|K_CTRL_ALT_H|K_CTRL_ALT_I|K_CTRL_ALT_J|K_CTRL_ALT_K|K_CTRL_ALT_L|K_CTRL_ALT_M|K_CTRL_ALT_N|K_CTRL_ALT_Ñ|K_CTRL_ALT_O|K_CTRL_ALT_P|K_CTRL_ALT_Q|K_CTRL_ALT_R|K_CTRL_ALT_S|K_CTRL_ALT_T|K_CTRL_ALT_U|K_CTRL_ALT_V|K_CTRL_ALT_W|K_CTRL_ALT_X|K_CTRL_ALT_Y|K_CTRL_ALT_Z|K_CTRL_ALT_0|K_CTRL_ALT_1|K_CTRL_ALT_2|K_CTRL_ALT_3|K_CTRL_ALT_4|K_CTRL_ALT_5|K_CTRL_ALT_6|K_CTRL_ALT_7|K_CTRL_ALT_8|K_CTRL_ALT_9|K_CTRL_ALT_F1|K_CTRL_ALT_F2|K_CTRL_ALT_F3|K_CTRL_ALT_F4|K_CTRL_ALT_F5|K_CTRL_ALT_F6|K_CTRL_ALT_F7|K_CTRL_ALT_F8|K_CTRL_ALT_F9|K_CTRL_ALT_F10|K_CTRL_ALT_F11|K_CTRL_ALT_F12|K_CTRL_ALT_UP|K_CTRL_ALT_DOWN|K_CTRL_ALT_LEFT|K_CTRL_ALT_RIGHT|K_CTRL_ALT_RETURN|K_CTRL_ALT_BACKSPACE|K_CTRL_ALT_TAB|K_CTRL_ALT_SPACE|K_CTRL_ALT_ESCAPEK_CTRL_SHIFT_A|K_CTRL_SHIFT_B|K_CTRL_SHIFT_C|K_CTRL_SHIFT_D|K_CTRL_SHIFT_E|K_CTRL_SHIFT_F|K_CTRL_SHIFT_G|K_CTRL_SHIFT_G|K_CTRL_SHIFT_H|K_CTRL_SHIFT_I|K_CTRL_SHIFT_J|K_CTRL_SHIFT_K|K_CTRL_SHIFT_L|K_CTRL_SHIFT_M|K_CTRL_SHIFT_N|K_CTRL_SHIFT_Ñ|K_CTRL_SHIFT_O|K_CTRL_SHIFT_P|K_CTRL_SHIFT_Q|K_CTRL_SHIFT_R|K_CTRL_SHIFT_S|K_CTRL_SHIFT_T|K_CTRL_SHIFT_U|K_CTRL_SHIFT_V|K_CTRL_SHIFT_W|K_CTRL_SHIFT_X|K_CTRL_SHIFT_Y|K_CTRL_SHIFT_Z|K_CTRL_SHIFT_0|K_CTRL_SHIFT_1|K_CTRL_SHIFT_2|K_CTRL_SHIFT_3|K_CTRL_SHIFT_4|K_CTRL_SHIFT_5|K_CTRL_SHIFT_6|K_CTRL_SHIFT_7|K_CTRL_SHIFT_8|K_CTRL_SHIFT_9|K_CTRL_SHIFT_F1|K_CTRL_SHIFT_F2|K_CTRL_SHIFT_F3|K_CTRL_SHIFT_F4|K_CTRL_SHIFT_F5|K_CTRL_SHIFT_F6|K_CTRL_SHIFT_F7|K_CTRL_SHIFT_F8|K_CTRL_SHIFT_9|K_CTRL_SHIFT_10|K_CTRL_SHIFT_11|K_CTRL_SHIFT_12|K_CTRL_SHIFT_UP|K_CTRL_SHIFT_DOWN|K_CTRL_SHIFT_LEFT|K_CTRL_SHIFT_RIGHT|K_CTRL_SHIFT_RETURN|K_CTRL_SHIFT_BACKSPACE|K_CTRL_SHIFT_TAB|K_CTRL_SHIFT_SPACE|K_CTRL_SHIFT_ESCAPEK_ALT_SHIFT_A|K_ALT_SHIFT_B|K_ALT_SHIFT_C|K_ALT_SHIFT_D|K_ALT_SHIFT_E|K_ALT_SHIFT_F|K_ALT_SHIFT_G|K_ALT_SHIFT_G|K_ALT_SHIFT_H|K_ALT_SHIFT_I|K_ALT_SHIFT_J|K_ALT_SHIFT_K|K_ALT_SHIFT_L|K_ALT_SHIFT_M|K_ALT_SHIFT_N|K_ALT_SHIFT_Ñ|K_ALT_SHIFT_O|K_ALT_SHIFT_P|K_ALT_SHIFT_Q|K_ALT_SHIFT_R|K_ALT_SHIFT_S|K_ALT_SHIFT_T|K_ALT_SHIFT_U|K_ALT_SHIFT_V|K_ALT_SHIFT_W|K_ALT_SHIFT_X|K_ALT_SHIFT_Y|K_ALT_SHIFT_Z|K_ALT_SHIFT_0|K_ALT_SHIFT_1|K_ALT_SHIFT_2|K_ALT_SHIFT_3|K_ALT_SHIFT_4|K_ALT_SHIFT_5|K_ALT_SHIFT_6|K_ALT_SHIFT_7|K_ALT_SHIFT_8|K_ALT_SHIFT_9|K_ALT_SHIFT_F1|K_ALT_SHIFT_F2|K_ALT_SHIFT_F3|K_ALT_SHIFT_F4|K_ALT_SHIFT_F5|K_ALT_SHIFT_F6|K_ALT_SHIFT_F7|K_ALT_SHIFT_F8|K_ALT_SHIFT_9|K_ALT_SHIFT_10|K_ALT_SHIFT_11|K_ALT_SHIFT_12|K_ALT_SHIFT_UP|K_ALT_SHIFT_DOWN|K_ALT_SHIFT_LEFT|K_ALT_SHIFT_RIGHT|K_ALT_SHIFT_RETURN|K_ALT_SHIFT_BACKSPACE|K_ALT_SHIFT_TAB|K_ALT_SHIFT_SPACE|K_ALT_SHIFT_ESCAPEK_CTRL_ALT_SHIFT_A|K_CTRL_ALT_SHIFT_B|K_CTRL_ALT_SHIFT_C|K_CTRL_ALT_SHIFT_D|K_CTRL_ALT_SHIFT_E|K_CTRL_ALT_SHIFT_F|K_CTRL_ALT_SHIFT_G|K_CTRL_ALT_SHIFT_G|K_CTRL_ALT_SHIFT_H|K_CTRL_ALT_SHIFT_I|K_CTRL_ALT_SHIFT_J|K_CTRL_ALT_SHIFT_K|K_CTRL_ALT_SHIFT_L|K_CTRL_ALT_SHIFT_M|K_CTRL_ALT_SHIFT_N|K_CTRL_ALT_SHIFT_Ñ|K_CTRL_ALT_SHIFT_O|K_CTRL_ALT_SHIFT_P|K_CTRL_ALT_SHIFT_Q|K_CTRL_ALT_SHIFT_R|K_CTRL_ALT_SHIFT_S|K_CTRL_ALT_SHIFT_T|K_CTRL_ALT_SHIFT_U|K_CTRL_ALT_SHIFT_V|K_CTRL_ALT_SHIFT_W|K_CTRL_ALT_SHIFT_X|K_CTRL_ALT_SHIFT_Y|K_CTRL_ALT_SHIFT_Z|K_CTRL_ALT_SHIFT_0|K_CTRL_ALT_SHIFT_1|K_CTRL_ALT_SHIFT_2|K_CTRL_ALT_SHIFT_3|K_CTRL_ALT_SHIFT_4|K_CTRL_ALT_SHIFT_5|K_CTRL_ALT_SHIFT_6|K_CTRL_ALT_SHIFT_7|K_CTRL_ALT_SHIFT_8|K_CTRL_ALT_SHIFT_9|K_CTRL_ALT_SHIFT_F1|K_CTRL_ALT_SHIFT_F2|K_CTRL_ALT_SHIFT_F3|K_CTRL_ALT_SHIFT_F4|K_CTRL_ALT_SHIFT_F5|K_CTRL_ALT_SHIFT_F6|K_CTRL_ALT_SHIFT_F7|K_CTRL_ALT_SHIFT_F8|K_CTRL_ALT_SHIFT_F9|K_CTRL_ALT_SHIFT_F10|K_CTRL_ALT_SHIFT_F11|K_CTRL_ALT_SHIFT_F12|K_CTRL_ALT_SHIFT_UP|K_CTRL_ALT_SHIFT_DOWN|K_CTRL_ALT_SHIFT_LEFT|K_CTRL_ALT_SHIFT_RIGHT|K_CTRL_ALT_SHIFT_RETURN|K_CTRL_ALT_SHIFT_BACKSPACE|K_CTRL_ALT_SHIFT_TAB|K_CTRL_ALT_SHIFT_SPACE|K_CTRL_ALT_SHIFT_ESCAPE"},_={commands:":=",expressions:{numeric:"\\+|\\-|\\*|\\^|div|mod",comparison:">=|<=|==|\\/=|>|<",boolean:"\\|\\||&&|not",other:"\\+\\+|<\\-|\\[|\\]|\\_|\\->"}},t={line:{double_slash:"\\/\\/.*$",double_dash:"\\-\\-.*$",number_sign:"#.*$"},block:{start:"\\/\\*",end:"\\*\\/"},block_alt:{start:"\\{\\-",end:"\\-\\}"}};this.$rules={start:[{token:"comment.line.double-slash.gobstones",regex:t.line.double_slash},{token:"comment.line.double-dash.gobstones",regex:t.line.double_dash},{token:"comment.line.number-sign.gobstones",regex:t.line.number_sign},{token:"comment.block.dash-asterisc.gobstones",regex:t.block.start,next:"block_comment_end"},{token:"comment.block.brace-dash.gobstones",regex:t.block_alt.start,next:"block_comment_alt_end"},{token:"constant.numeric.gobstones",regex:a.numbers},{token:"string.quoted.double.gobstones",regex:a.strings},{token:"keyword.operator.other.gobstones",regex:_.expressions.other},{token:"keyword.operator.numeric.gobstones",regex:_.expressions.numeric},{token:"keyword.operator.compare.gobstones",regex:_.expressions.comparison},{token:"keyword.operator.boolean.gobstones",regex:_.expressions.boolean},{token:this.createKeywordMapper({"storage.type.definitions.gobstones":e.standard,"storage.type.types.gobstones":e.type,"keyword.control.commands.repetitions.gobstones":n.commands.repetitions,"keyword.control.commands.alternatives.gobstones":n.commands.alternatives,"keyword.control.expressions.alternatives.gobstones":n.expressions.alternatives,"constant.language.colors.gobstones":a.colors,"constant.language.cardinals.gobstones":a.cardinals,"constant.language.boolean.gobstones":a.booleans,"support.function.gobstones":o.commands,"support.variable.gobstones":o.expressions,"variable.language.gobstones":o.keys},"identifier.gobstones"),regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"comma.gobstones",regex:","},{token:"semicolon.gobstones",regex:";"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],block_comment_end:[{token:"comment.block.dash-asterisc.gobstones",regex:t.block.end,next:"start"},{defaultToken:"comment.block.dash-asterisc.gobstones"}],block_comment_alt_end:[{token:"comment.block.brace-dash.gobstones",regex:t.block_alt.end,next:"start"},{defaultToken:"comment.block.brace-dash.gobstones"}]}};K.inherits(g,c),u.GobstonesHighlightRules=g}),ace.define("ace/mode/gobstones",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/mode/gobstones_highlight_rules"],function(r,u,d){var K=r("../lib/oop"),c=r("./javascript").Mode,g=r("./gobstones_highlight_rules").GobstonesHighlightRules,e=function(){c.call(this),this.HighlightRules=g,this.$behaviour=this.$defaultBehaviour};K.inherits(e,c),(function(){this.createWorker=function(){return null},this.$id="ace/mode/gobstones",this.snippetFileId="ace/snippets/gobstones"}).call(e.prototype),u.Mode=e}),function(){ace.require(["ace/mode/gobstones"],function(r){F&&(F.exports=r)})}()})(h);var x=h.exports;const C=A(x),f=S({__proto__:null,default:C},[x]);export{f as m};
