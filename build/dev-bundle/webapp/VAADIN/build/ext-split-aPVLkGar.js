import{g as E}from"./_commonjsHelpers-Cpj98o6Y.js";function m(a,l){for(var s=0;s<l.length;s++){const n=l[s];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in a)){const c=Object.getOwnPropertyDescriptor(n,o);c&&Object.defineProperty(a,o,c.get?c:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}};(function(a,l){ace.define("ace/split",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/editor","ace/virtual_renderer","ace/edit_session"],function(s,n,o){var c=s("./lib/oop");s("./lib/lang");var $=s("./lib/event_emitter").EventEmitter,S=s("./editor").Editor,g=s("./virtual_renderer").VirtualRenderer,v=s("./edit_session").EditSession,p=function(t,e,i){this.BELOW=1,this.BESIDE=0,this.$container=t,this.$theme=e,this.$splits=0,this.$editorCSS="",this.$editors=[],this.$orientation=this.BESIDE,this.setSplits(i||1),this.$cEditor=this.$editors[0],this.on("focus",(function(h){this.$cEditor=h}).bind(this))};(function(){c.implement(this,$),this.$createEditor=function(){var t=document.createElement("div");t.className=this.$editorCSS,t.style.cssText="position: absolute; top:0px; bottom:0px",this.$container.appendChild(t);var e=new S(new g(t,this.$theme));return e.on("focus",(function(){this._emit("focus",e)}).bind(this)),this.$editors.push(e),e.setFontSize(this.$fontSize),e},this.setSplits=function(t){var e;if(t<1)throw"The number of splits have to be > 0!";if(t!=this.$splits){if(t>this.$splits){for(;this.$splits<this.$editors.length&&this.$splits<t;)e=this.$editors[this.$splits],this.$container.appendChild(e.container),e.setFontSize(this.$fontSize),this.$splits++;for(;this.$splits<t;)this.$createEditor(),this.$splits++}else for(;this.$splits>t;)e=this.$editors[this.$splits-1],this.$container.removeChild(e.container),this.$splits--;this.resize()}},this.getSplits=function(){return this.$splits},this.getEditor=function(t){return this.$editors[t]},this.getCurrentEditor=function(){return this.$cEditor},this.focus=function(){this.$cEditor.focus()},this.blur=function(){this.$cEditor.blur()},this.setTheme=function(t){this.$editors.forEach(function(e){e.setTheme(t)})},this.setKeyboardHandler=function(t){this.$editors.forEach(function(e){e.setKeyboardHandler(t)})},this.forEach=function(t,e){this.$editors.forEach(t,e)},this.$fontSize="",this.setFontSize=function(t){this.$fontSize=t,this.forEach(function(e){e.setFontSize(t)})},this.$cloneSession=function(t){var e=new v(t.getDocument(),t.getMode()),i=t.getUndoManager();return e.setUndoManager(i),e.setTabSize(t.getTabSize()),e.setUseSoftTabs(t.getUseSoftTabs()),e.setOverwrite(t.getOverwrite()),e.setBreakpoints(t.getBreakpoints()),e.setUseWrapMode(t.getUseWrapMode()),e.setUseWorker(t.getUseWorker()),e.setWrapLimitRange(t.$wrapLimitRange.min,t.$wrapLimitRange.max),e.$foldData=t.$cloneFoldData(),e},this.setSession=function(t,e){var i;e==null?i=this.$cEditor:i=this.$editors[e];var h=this.$editors.some(function(r){return r.session===t});return h&&(t=this.$cloneSession(t)),i.setSession(t),t},this.getOrientation=function(){return this.$orientation},this.setOrientation=function(t){this.$orientation!=t&&(this.$orientation=t,this.resize())},this.resize=function(){var t=this.$container.clientWidth,e=this.$container.clientHeight,i;if(this.$orientation==this.BESIDE)for(var h=t/this.$splits,r=0;r<this.$splits;r++)i=this.$editors[r],i.container.style.width=h+"px",i.container.style.top="0px",i.container.style.left=r*h+"px",i.container.style.height=e+"px",i.resize();else for(var f=e/this.$splits,r=0;r<this.$splits;r++)i=this.$editors[r],i.container.style.width=t+"px",i.container.style.top=r*f+"px",i.container.style.left="0px",i.container.style.height=f+"px",i.resize()}}).call(p.prototype),n.Split=p}),ace.define("ace/ext/split",["require","exports","module","ace/split"],function(s,n,o){o.exports=s("../split")}),function(){ace.require(["ace/ext/split"],function(s){a&&(a.exports=s)})}()})(d);var u=d.exports;const x=E(u),y=m({__proto__:null,default:x},[u]);export{y as e};