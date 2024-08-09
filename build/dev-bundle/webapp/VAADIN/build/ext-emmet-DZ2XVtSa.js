import{g as Q}from"./_commonjsHelpers-Cpj98o6Y.js";function q(N,j){for(var x=0;x<j.length;x++){const m=j[x];if(typeof m!="string"&&!Array.isArray(m)){for(const $ in m)if($!=="default"&&!($ in N)){const k=Object.getOwnPropertyDescriptor(m,$);k&&Object.defineProperty(N,$,k.get?k:{enumerable:!0,get:()=>m[$]})}}}return Object.freeze(Object.defineProperty(N,Symbol.toStringTag,{value:"Module"}))}var W={exports:{}};(function(N,j){ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(x,m,$){var k=x("./lib/dom"),B=x("./lib/oop"),D=x("./lib/event_emitter").EventEmitter,I=x("./lib/lang"),L=x("./range").Range,S=x("./range_list").RangeList,A=x("./keyboard/hash_handler").HashHandler,F=x("./tokenizer").Tokenizer,P=x("./clipboard"),C={CURRENT_WORD:function(n){return n.session.getTextRange(n.session.getWordRange())},SELECTION:function(n,e,t){var a=n.session.getTextRange();return t?a.replace(/\n\r?([ \t]*\S)/g,`
`+t+"$1"):a},CURRENT_LINE:function(n){return n.session.getLine(n.getCursorPosition().row)},PREV_LINE:function(n){return n.session.getLine(n.getCursorPosition().row-1)},LINE_INDEX:function(n){return n.getCursorPosition().row},LINE_NUMBER:function(n){return n.getCursorPosition().row+1},SOFT_TABS:function(n){return n.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(n){return n.session.getTabSize()},CLIPBOARD:function(n){return P.getText&&P.getText()},FILENAME:function(n){return/[^/\\]*$/.exec(this.FILEPATH(n))[0]},FILENAME_BASE:function(n){return/[^/\\]*$/.exec(this.FILEPATH(n))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(n){return this.FILEPATH(n).replace(/[^/\\]*$/,"")},FILEPATH:function(n){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(n){var e=n.session.$mode||{};return e.blockComment&&e.blockComment.start||""},BLOCK_COMMENT_END:function(n){var e=n.session.$mode||{};return e.blockComment&&e.blockComment.end||""},LINE_COMMENT:function(n){var e=n.session.$mode||{};return e.lineCommentStart||""},CURRENT_YEAR:T.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:T.bind(null,{year:"2-digit"}),CURRENT_MONTH:T.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:T.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:T.bind(null,{month:"short"}),CURRENT_DATE:T.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:T.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:T.bind(null,{weekday:"short"}),CURRENT_HOUR:T.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:T.bind(null,{minute:"2-digit"}),CURRENT_SECOND:T.bind(null,{second:"2-digit"})};C.SELECTED_TEXT=C.SELECTION;function T(n){var e=new Date().toLocaleString("en-us",n);return e.length==1?"0"+e:e}var R=function(){this.snippetMap={},this.snippetNameMap={}};(function(){B.implement(this,D),this.getTokenizer=function(){return R.$tokenizer||this.createTokenizer()},this.createTokenizer=function(){function e(i){return i=i.substr(1),/^\d+$/.test(i)?[{tabstopId:parseInt(i,10)}]:[{text:i}]}function t(i){return"(?:[^\\\\"+i+"]|\\\\.)"}var a={regex:"/("+t("/")+"+)/",onMatch:function(i,c,s){var r=s[0];return r.fmtString=!0,r.guard=i.slice(1,-1),r.flag="",""},next:"formatString"};return R.$tokenizer=new F({start:[{regex:/\\./,onMatch:function(i,c,s){var r=i[1];return(r=="}"&&s.length||"`$\\".indexOf(r)!=-1)&&(i=r),[i]}},{regex:/}/,onMatch:function(i,c,s){return[s.length?s.shift():i]}},{regex:/\$(?:\d+|\w+)/,onMatch:e},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(i,c,s){var r=e(i.substr(1));return s.unshift(r[0]),r},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+t("\\|")+"*\\|",onMatch:function(i,c,s){var r=i.slice(1,-1).replace(/\\[,|\\]|,/g,function(f){return f.length==2?f[1]:"\0"}).split("\0").map(function(f){return{value:f}});return s[0].choices=r,[r[0]]},next:"start"},a,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(i,c,s){return s.length&&s[0].expectElse?(s[0].expectElse=!1,s[0].ifEnd={elseEnd:s[0]},[s[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(i,c,s){var r=i[1];return r=="}"&&s.length||"`$\\".indexOf(r)!=-1?i=r:r=="n"?i=`
`:r=="t"?i="	":"ulULE".indexOf(r)!=-1&&(i={changeCase:r,local:r>"a"}),[i]}},{regex:"/\\w*}",onMatch:function(i,c,s){var r=s.shift();return r&&(r.flag=i.slice(1,-1)),this.next=r&&r.tabstopId?"start":"",[r||i]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(i,c,s){return[{text:i.slice(1)}]}},{regex:/\${\w+/,onMatch:function(i,c,s){var r={text:i.slice(2)};return s.unshift(r),[r]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(i,c,s){var r=s.shift();return this.next=r&&r.tabstopId?"start":"",[r||i]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(i,c,s){var r=s[0];return r.formatFunction=i.slice(2,-1),[s.shift()]},next:"formatString"},a,{regex:/:[\?\-+]?/,onMatch:function(i,c,s){i[1]=="+"&&(s[0].ifEnd=s[0]),i[1]=="?"&&(s[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),R.$tokenizer},this.tokenizeTmSnippet=function(e,t){return this.getTokenizer().getLineTokens(e,t).tokens.map(function(a){return a.value||a})},this.getVariableValue=function(e,t,a){if(/^\d+$/.test(t))return(this.variables.__||{})[t]||"";if(/^[A-Z]\d+$/.test(t))return(this.variables[t[0]+"__"]||{})[t.substr(1)]||"";if(t=t.replace(/^TM_/,""),!this.variables.hasOwnProperty(t))return"";var i=this.variables[t];return typeof i=="function"&&(i=this.variables[t](e,t,a)),i??""},this.variables=C,this.tmStrFormat=function(e,t,a){if(!t.fmt)return e;var i=t.flag||"",c=t.guard;c=new RegExp(c,i.replace(/[^gim]/g,""));var s=typeof t.fmt=="string"?this.tokenizeTmSnippet(t.fmt,"formatString"):t.fmt,r=this,f=e.replace(c,function(){var o=r.variables.__;r.variables.__=[].slice.call(arguments);for(var u=r.resolveVariables(s,a),E="E",v=0;v<u.length;v++){var d=u[v];if(typeof d=="object")if(u[v]="",d.changeCase&&d.local){var y=u[v+1];y&&typeof y=="string"&&(d.changeCase=="u"?u[v]=y[0].toUpperCase():u[v]=y[0].toLowerCase(),u[v+1]=y.substr(1))}else d.changeCase&&(E=d.changeCase);else E=="U"?u[v]=d.toUpperCase():E=="L"&&(u[v]=d.toLowerCase())}return r.variables.__=o,u.join("")});return f},this.tmFormatFunction=function(e,t,a){return t.formatFunction=="upcase"?e.toUpperCase():t.formatFunction=="downcase"?e.toLowerCase():e},this.resolveVariables=function(e,t){for(var a=[],i="",c=!0,s=0;s<e.length;s++){var r=e[s];if(typeof r=="string"){a.push(r),r==`
`?(c=!0,i=""):c&&(i=/^\t*/.exec(r)[0],c=/\S/.test(r));continue}if(r){if(c=!1,r.fmtString){var f=e.indexOf(r,s+1);f==-1&&(f=e.length),r.fmt=e.slice(s+1,f),s=f}if(r.text){var o=this.getVariableValue(t,r.text,i)+"";r.fmtString&&(o=this.tmStrFormat(o,r,t)),r.formatFunction&&(o=this.tmFormatFunction(o,r,t)),o&&!r.ifEnd?(a.push(o),u(r)):!o&&r.ifEnd&&u(r.ifEnd)}else r.elseEnd?u(r.elseEnd):(r.tabstopId!=null||r.changeCase!=null)&&a.push(r)}}function u(E){var v=e.indexOf(E,s+1);v!=-1&&(s=v)}return a};var n=function(e,t,a){var i=e.getCursorPosition(),c=e.session.getLine(i.row),s=e.session.getTabString(),r=c.match(/^\s*/)[0];i.column<r.length&&(r=r.slice(0,i.column)),t=t.replace(/\r/g,"");var f=this.tokenizeTmSnippet(t);f=this.resolveVariables(f,e),f=f.map(function(b){return b==`
`?b+r:typeof b=="string"?b.replace(/\t/g,s):b});var o=[];f.forEach(function(b,M){if(typeof b=="object"){var w=b.tabstopId,_=o[w];if(_||(_=o[w]=[],_.index=w,_.value="",_.parents={}),_.indexOf(b)===-1){b.choices&&!_.choices&&(_.choices=b.choices),_.push(b);var V=f.indexOf(b,M+1);if(V!==-1){var z=f.slice(M+1,V),X=z.some(function(J){return typeof J=="object"});X&&!_.value?_.value=z:z.length&&(!_.value||typeof _.value!="string")&&(_.value=z.join(""))}}}}),o.forEach(function(b){b.length=0});var u={};function E(b){for(var M=[],w=0;w<b.length;w++){var _=b[w];if(typeof _=="object"){if(u[_.tabstopId])continue;var V=b.lastIndexOf(_,w-1);_=M[V]||{tabstopId:_.tabstopId}}M[w]=_}return M}for(var v=0;v<f.length;v++){var d=f[v];if(typeof d=="object"){var y=d.tabstopId,H=o[y],G=f.indexOf(d,v+1);if(u[y]){u[y]===d&&(delete u[y],Object.keys(u).forEach(function(b){H.parents[b]=!0}));continue}u[y]=d;var O=H.value;typeof O!="string"?O=E(O):d.fmt&&(O=this.tmStrFormat(O,d,e)),f.splice.apply(f,[v+1,Math.max(0,G-v)].concat(O,d)),H.indexOf(d)===-1&&H.push(d)}}var K=0,U=0,Y="";return f.forEach(function(b){if(typeof b=="string"){var M=b.split(`
`);M.length>1?(U=M[M.length-1].length,K+=M.length-1):U+=b.length,Y+=b}else b&&(b.start?b.end={row:K,column:U}:b.start={row:K,column:U})}),{text:Y,tabstops:o,tokens:f}};this.getDisplayTextForSnippet=function(e,t){var a=n.call(this,e,t);return a.text},this.insertSnippetForSelection=function(e,t,a){var i=n.call(this,e,t),c=e.getSelectionRange();a&&a.compareRange(c)===0&&(c=a);var s=e.session.replace(c,i.text),r=new h(e),f=e.inVirtualSelectionMode&&e.selection.index;r.addTabstops(i.tabstops,c.start,s,f)},this.insertSnippet=function(e,t,a){var i=this;if(e.inVirtualSelectionMode)return i.insertSnippetForSelection(e,t,a);e.forEachSelection(function(){i.insertSnippetForSelection(e,t,a)},null,{keepOrder:!0}),e.tabstopManager&&e.tabstopManager.tabNext()},this.$getScope=function(e){var t=e.session.$mode.$id||"";if(t=t.split("/").pop(),t==="html"||t==="php"){t==="php"&&!e.session.$mode.inlinePhp&&(t="html");var a=e.getCursorPosition(),i=e.session.getState(a.row);typeof i=="object"&&(i=i[0]),i.substring&&(i.substring(0,3)=="js-"?t="javascript":i.substring(0,4)=="css-"?t="css":i.substring(0,4)=="php-"&&(t="php"))}return t},this.getActiveScopes=function(e){var t=this.$getScope(e),a=[t],i=this.snippetMap;return i[t]&&i[t].includeScopes&&a.push.apply(a,i[t].includeScopes),a.push("_"),a},this.expandWithTab=function(e,t){var a=this,i=e.forEachSelection(function(){return a.expandSnippetForSelection(e,t)},null,{keepOrder:!0});return i&&e.tabstopManager&&e.tabstopManager.tabNext(),i},this.expandSnippetForSelection=function(e,t){var a=e.getCursorPosition(),i=e.session.getLine(a.row),c=i.substring(0,a.column),s=i.substr(a.column),r=this.snippetMap,f;return this.getActiveScopes(e).some(function(o){var u=r[o];return u&&(f=this.findMatchingSnippet(u,c,s)),!!f},this),f?(t&&t.dryRun||(e.session.doc.removeInLine(a.row,a.column-f.replaceBefore.length,a.column+f.replaceAfter.length),this.variables.M__=f.matchBefore,this.variables.T__=f.matchAfter,this.insertSnippetForSelection(e,f.content),this.variables.M__=this.variables.T__=null),!0):!1},this.findMatchingSnippet=function(e,t,a){for(var i=e.length;i--;){var c=e[i];if(!(c.startRe&&!c.startRe.test(t))&&!(c.endRe&&!c.endRe.test(a))&&!(!c.startRe&&!c.endRe))return c.matchBefore=c.startRe?c.startRe.exec(t):[""],c.matchAfter=c.endRe?c.endRe.exec(a):[""],c.replaceBefore=c.triggerRe?c.triggerRe.exec(t)[0]:"",c.replaceAfter=c.endTriggerRe?c.endTriggerRe.exec(a)[0]:"",c}},this.snippetMap={},this.snippetNameMap={},this.register=function(e,t){var a=this.snippetMap,i=this.snippetNameMap,c=this;e||(e=[]);function s(o){return o&&!/^\^?\(.*\)\$?$|^\\b$/.test(o)&&(o="(?:"+o+")"),o||""}function r(o,u,E){return o=s(o),u=s(u),o=u+o,o&&o[o.length-1]!="$"&&(o=o+"$"),new RegExp(o)}function f(o){o.scope||(o.scope=t||"_"),t=o.scope,a[t]||(a[t]=[],i[t]={});var u=i[t];if(o.name){var E=u[o.name];E&&c.unregister(E),u[o.name]=o}a[t].push(o),o.prefix&&(o.tabTrigger=o.prefix),!o.content&&o.body&&(o.content=Array.isArray(o.body)?o.body.join(`
`):o.body),o.tabTrigger&&!o.trigger&&(!o.guard&&/^\w/.test(o.tabTrigger)&&(o.guard="\\b"),o.trigger=I.escapeRegExp(o.tabTrigger)),!(!o.trigger&&!o.guard&&!o.endTrigger&&!o.endGuard)&&(o.startRe=r(o.trigger,o.guard),o.triggerRe=new RegExp(o.trigger),o.endRe=r(o.endTrigger,o.endGuard),o.endTriggerRe=new RegExp(o.endTrigger))}Array.isArray(e)?e.forEach(f):Object.keys(e).forEach(function(o){f(e[o])}),this._signal("registerSnippets",{scope:t})},this.unregister=function(e,t){var a=this.snippetMap,i=this.snippetNameMap;function c(s){var r=i[s.scope||t];if(r&&r[s.name]){delete r[s.name];var f=a[s.scope||t],o=f&&f.indexOf(s);o>=0&&f.splice(o,1)}}e.content?c(e):Array.isArray(e)&&e.forEach(c)},this.parseSnippetFile=function(e){e=e.replace(/\r/g,"");for(var t=[],a={},i=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,c;c=i.exec(e);){if(c[1])try{a=JSON.parse(c[1]),t.push(a)}catch{}if(c[4])a.content=c[4].replace(/^\t/gm,""),t.push(a),a={};else{var s=c[2],r=c[3];if(s=="regex"){var f=/\/((?:[^\/\\]|\\.)*)|$/g;a.guard=f.exec(r)[1],a.trigger=f.exec(r)[1],a.endTrigger=f.exec(r)[1],a.endGuard=f.exec(r)[1]}else s=="snippet"?(a.tabTrigger=r.match(/^\S*/)[0],a.name||(a.name=r)):s&&(a[s]=r)}}return t},this.getSnippetByName=function(e,t){var a=this.snippetNameMap,i;return this.getActiveScopes(t).some(function(c){var s=a[c];return s&&(i=s[e]),!!i},this),i}}).call(R.prototype);var h=function(n){if(n.tabstopManager)return n.tabstopManager;n.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=I.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(n)};(function(){this.attach=function(n){this.index=0,this.ranges=[],this.tabstops=[],this.$openTabstops=null,this.selectedTabstop=null,this.editor=n,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges=null,this.tabstops=null,this.selectedTabstop=null,this.editor.removeListener("change",this.$onChange),this.editor.removeListener("changeSelection",this.$onChangeSelection),this.editor.removeListener("changeSession",this.$onChangeSession),this.editor.commands.removeListener("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.editor=null},this.onChange=function(n){for(var e=n.action[0]=="r",t=this.selectedTabstop||{},a=t.parents||{},i=(this.tabstops||[]).slice(),c=0;c<i.length;c++){var s=i[c],r=s==t||a[s.index];if(s.rangeList.$bias=r?0:1,n.action=="remove"&&s!==t){var f=s.parents&&s.parents[t.index],o=s.rangeList.pointIndex(n.start,f);o=o<0?-o-1:o+1;var u=s.rangeList.pointIndex(n.end,f);u=u<0?-u-1:u-1;for(var E=s.rangeList.ranges.slice(o,u),v=0;v<E.length;v++)this.removeRange(E[v])}s.rangeList.$onChange(n)}var d=this.editor.session;!this.$inChange&&e&&d.getLength()==1&&!d.getValue()&&this.detach()},this.updateLinkedFields=function(){var n=this.selectedTabstop;if(!(!n||!n.hasLinkedRanges||!n.firstNonLinked)){this.$inChange=!0;for(var e=this.editor.session,t=e.getTextRange(n.firstNonLinked),a=0;a<n.length;a++){var i=n[a];if(i.linked){var c=i.original,s=m.snippetManager.tmStrFormat(t,c,this.editor);e.replace(i,s)}}this.$inChange=!1}},this.onAfterExec=function(n){n.command&&!n.command.readOnly&&this.updateLinkedFields()},this.onChangeSelection=function(){if(this.editor){for(var n=this.editor.selection.lead,e=this.editor.selection.anchor,t=this.editor.selection.isEmpty(),a=0;a<this.ranges.length;a++)if(!this.ranges[a].linked){var i=this.ranges[a].contains(n.row,n.column),c=t||this.ranges[a].contains(e.row,e.column);if(i&&c)return}this.detach()}},this.onChangeSession=function(){this.detach()},this.tabNext=function(n){var e=this.tabstops.length,t=this.index+(n||1);t=Math.min(Math.max(t,1),e),t==e&&(t=0),this.selectTabstop(t),t===0&&this.detach()},this.selectTabstop=function(n){this.$openTabstops=null;var e=this.tabstops[this.index];if(e&&this.addTabstopMarkers(e),this.index=n,e=this.tabstops[this.index],!(!e||!e.length)){this.selectedTabstop=e;var t=e.firstNonLinked||e;if(e.choices&&(t.cursor=t.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(t);else{var a=this.editor.multiSelect;a.toSingleRange(t);for(var i=0;i<e.length;i++)e.hasLinkedRanges&&e[i].linked||a.addRange(e[i].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},this.addTabstops=function(n,e,t){var a=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!n[0]){var i=L.fromPoints(t,t);p(i.start,e),p(i.end,e),n[0]=[i],n[0].index=0}var c=this.index,s=[c+1,0],r=this.ranges;n.forEach(function(f,o){for(var u=this.$openTabstops[o]||f,E=0;E<f.length;E++){var v=f[E],d=L.fromPoints(v.start,v.end||v.start);l(d.start,e),l(d.end,e),d.original=v,d.tabstop=u,r.push(d),u!=f?u.unshift(d):u[E]=d,v.fmtString||u.firstNonLinked&&a?(d.linked=!0,u.hasLinkedRanges=!0):u.firstNonLinked||(u.firstNonLinked=d)}u.firstNonLinked||(u.hasLinkedRanges=!1),u===f&&(s.push(u),this.$openTabstops[o]=u),this.addTabstopMarkers(u),u.rangeList=u.rangeList||new S,u.rangeList.$bias=0,u.rangeList.addList(u)},this),s.length>2&&(this.tabstops.length&&s.push(s.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,s))},this.addTabstopMarkers=function(n){var e=this.editor.session;n.forEach(function(t){t.markerId||(t.markerId=e.addMarker(t,"ace_snippet-marker","text"))})},this.removeTabstopMarkers=function(n){var e=this.editor.session;n.forEach(function(t){e.removeMarker(t.markerId),t.markerId=null})},this.removeRange=function(n){var e=n.tabstop.indexOf(n);e!=-1&&n.tabstop.splice(e,1),e=this.ranges.indexOf(n),e!=-1&&this.ranges.splice(e,1),e=n.tabstop.rangeList.ranges.indexOf(n),e!=-1&&n.tabstop.splice(e,1),this.editor.session.removeMarker(n.markerId),n.tabstop.length||(e=this.tabstops.indexOf(n.tabstop),e!=-1&&this.tabstops.splice(e,1),this.tabstops.length||this.detach())},this.keyboardHandler=new A,this.keyboardHandler.bindKeys({Tab:function(n){m.snippetManager&&m.snippetManager.expandWithTab(n)||(n.tabstopManager.tabNext(1),n.renderer.scrollCursorIntoView())},"Shift-Tab":function(n){n.tabstopManager.tabNext(-1),n.renderer.scrollCursorIntoView()},Esc:function(n){n.tabstopManager.detach()}})}).call(h.prototype);var l=function(n,e){n.row==0&&(n.column+=e.column),n.row+=e.row},p=function(n,e){n.row==e.row&&(n.column-=e.column),n.row-=e.row};k.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`,"snippets.css",!1),m.snippetManager=new R;var g=x("./editor").Editor;(function(){this.insertSnippet=function(n,e){return m.snippetManager.insertSnippet(this,n,e)},this.expandSnippet=function(n){return m.snippetManager.expandWithTab(this,n)}}).call(g.prototype)}),ace.define("ace/ext/emmet",["require","exports","module","ace/keyboard/hash_handler","ace/editor","ace/snippets","ace/range","ace/config","resources","resources","tabStops","resources","utils","actions"],function(x,m,$){var k=x("../keyboard/hash_handler").HashHandler,B=x("../editor").Editor,D=x("../snippets").snippetManager,I=x("../range").Range,L=x("../config"),S,A,F=function(){function h(){}return h.prototype.setupContext=function(l){this.ace=l,this.indentation=l.session.getTabString(),S||(S=window.emmet);var p=S.resources||S.require("resources");p.setVariable("indentation",this.indentation),this.$syntax=null,this.$syntax=this.getSyntax()},h.prototype.getSelectionRange=function(){var l=this.ace.getSelectionRange(),p=this.ace.session.doc;return{start:p.positionToIndex(l.start),end:p.positionToIndex(l.end)}},h.prototype.createSelection=function(l,p){var g=this.ace.session.doc;this.ace.selection.setRange({start:g.indexToPosition(l),end:g.indexToPosition(p)})},h.prototype.getCurrentLineRange=function(){var l=this.ace,p=l.getCursorPosition().row,g=l.session.getLine(p).length,n=l.session.doc.positionToIndex({row:p,column:0});return{start:n,end:n+g}},h.prototype.getCaretPos=function(){var l=this.ace.getCursorPosition();return this.ace.session.doc.positionToIndex(l)},h.prototype.setCaretPos=function(l){var p=this.ace.session.doc.indexToPosition(l);this.ace.selection.moveToPosition(p)},h.prototype.getCurrentLine=function(){var l=this.ace.getCursorPosition().row;return this.ace.session.getLine(l)},h.prototype.replaceContent=function(l,p,g,n){g==null&&(g=p??this.getContent().length),p==null&&(p=0);var e=this.ace,t=e.session.doc,a=I.fromPoints(t.indexToPosition(p),t.indexToPosition(g));e.session.remove(a),a.end=a.start,l=this.$updateTabstops(l),D.insertSnippet(e,l)},h.prototype.getContent=function(){return this.ace.getValue()},h.prototype.getSyntax=function(){if(this.$syntax)return this.$syntax;var l=this.ace.session.$modeId.split("/").pop();if(l=="html"||l=="php"){var p=this.ace.getCursorPosition(),g=this.ace.session.getState(p.row);typeof g!="string"&&(g=g[0]),g&&(g=g.split("-"),g.length>1?l=g[0]:l=="php"&&(l="html"))}return l},h.prototype.getProfileName=function(){var l=S.resources||S.require("resources");switch(this.getSyntax()){case"css":return"css";case"xml":case"xsl":return"xml";case"html":var p=l.getVariable("profile");return p||(p=this.ace.session.getLines(0,2).join("").search(/<!DOCTYPE[^>]+XHTML/i)!=-1?"xhtml":"html"),p;default:var g=this.ace.session.$mode;return g.emmetConfig&&g.emmetConfig.profile||"xhtml"}},h.prototype.prompt=function(l){return prompt(l)},h.prototype.getSelection=function(){return this.ace.session.getTextRange()},h.prototype.getFilePath=function(){return""},h.prototype.$updateTabstops=function(l){var p=1e3,g=0,n=null,e=S.tabStops||S.require("tabStops"),t=S.resources||S.require("resources"),a=t.getVocabulary("user"),i={tabstop:function(s){var r=parseInt(s.group,10),f=r===0;f?r=++g:r+=p;var o=s.placeholder;o&&(o=e.processText(o,i));var u="${"+r+(o?":"+o:"")+"}";return f&&(n=[s.start,u]),u},escape:function(s){return s=="$"?"\\$":s=="\\"?"\\\\":s}};if(l=e.processText(l,i),a.variables.insert_final_tabstop&&!/\$\{0\}$/.test(l))l+="${0}";else if(n){var c=S.utils?S.utils.common:S.require("utils");l=c.replaceSubstring(l,"${0}",n[0],n[1])}return l},h}(),P={expand_abbreviation:{mac:"ctrl+alt+e",win:"alt+e"},match_pair_outward:{mac:"ctrl+d",win:"ctrl+,"},match_pair_inward:{mac:"ctrl+j",win:"ctrl+shift+0"},matching_pair:{mac:"ctrl+alt+j",win:"alt+j"},next_edit_point:"alt+right",prev_edit_point:"alt+left",toggle_comment:{mac:"command+/",win:"ctrl+/"},split_join_tag:{mac:"shift+command+'",win:"shift+ctrl+`"},remove_tag:{mac:"command+'",win:"shift+ctrl+;"},evaluate_math_expression:{mac:"shift+command+y",win:"shift+ctrl+y"},increment_number_by_1:"ctrl+up",decrement_number_by_1:"ctrl+down",increment_number_by_01:"alt+up",decrement_number_by_01:"alt+down",increment_number_by_10:{mac:"alt+command+up",win:"shift+alt+up"},decrement_number_by_10:{mac:"alt+command+down",win:"shift+alt+down"},select_next_item:{mac:"shift+command+.",win:"shift+ctrl+."},select_previous_item:{mac:"shift+command+,",win:"shift+ctrl+,"},reflect_css_value:{mac:"shift+command+r",win:"shift+ctrl+r"},encode_decode_data_url:{mac:"shift+ctrl+d",win:"ctrl+'"},expand_abbreviation_with_tab:"Tab",wrap_with_abbreviation:{mac:"shift+ctrl+a",win:"shift+ctrl+a"}},C=new F;m.commands=new k,m.runEmmetCommand=function h(l){if(this.action=="expand_abbreviation_with_tab"){if(!l.selection.isEmpty())return!1;var p=l.selection.lead,g=l.session.getTokenAt(p.row,p.column);if(g&&/\btag\b/.test(g.type))return!1}try{C.setupContext(l);var n=S.actions||S.require("actions");if(this.action=="wrap_with_abbreviation")return setTimeout(function(){n.run("wrap_with_abbreviation",C)},0);var e=n.run(this.action,C)}catch(a){if(!S){var t=m.load(h.bind(this,l));return this.action=="expand_abbreviation_with_tab"?!1:t}l._signal("changeStatus",typeof a=="string"?a:a.message),L.warn(a),e=!1}return e};for(var T in P)m.commands.addCommand({name:"emmet:"+T,action:T,bindKey:P[T],exec:m.runEmmetCommand,multiSelectAction:"forEach"});m.updateCommands=function(h,l){l?h.keyBinding.addKeyboardHandler(m.commands):h.keyBinding.removeKeyboardHandler(m.commands)},m.isSupportedMode=function(h){if(!h)return!1;if(h.emmetConfig)return!0;var l=h.$id||h;return/css|less|scss|sass|stylus|html|php|twig|ejs|handlebars/.test(l)},m.isAvailable=function(h,l){if(/(evaluate_math_expression|expand_abbreviation)$/.test(l))return!0;var p=h.session.$mode,g=m.isSupportedMode(p);if(g&&p.$modes)try{C.setupContext(h),/js|php/.test(C.getSyntax())&&(g=!1)}catch{}return g};var R=function(h,l){var p=l;if(p){var g=m.isSupportedMode(p.session.$mode);h.enableEmmet===!1&&(g=!1),g&&m.load(),m.updateCommands(p,g)}};m.load=function(h){return typeof A!="string"?(L.warn("script for emmet-core is not loaded"),!1):(L.loadModule(A,function(){A=null,h&&h()}),!0)},m.AceEmmetEditor=F,L.defineOptions(B.prototype,"editor",{enableEmmet:{set:function(h){this[h?"on":"removeListener"]("changeMode",R),R({enableEmmet:!!h},this)},value:!0}}),m.setCore=function(h){typeof h=="string"?A=h:S=h}}),function(){ace.require(["ace/ext/emmet"],function(x){N&&(N.exports=x)})}()})(W);var Z=W.exports;const ee=Q(Z),ne=q({__proto__:null,default:ee},[Z]);export{ne as e};