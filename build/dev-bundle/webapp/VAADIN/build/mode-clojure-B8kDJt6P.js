import{g as k}from"./_commonjsHelpers-Cpj98o6Y.js";function w(h,f){for(var n=0;n<f.length;n++){const i=f[n];if(typeof i!="string"&&!Array.isArray(i)){for(const u in i)if(u!=="default"&&!(u in h)){const l=Object.getOwnPropertyDescriptor(i,u);l&&Object.defineProperty(h,u,l.get?l:{enumerable:!0,get:()=>i[u]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var v={exports:{}};(function(h,f){ace.define("ace/mode/clojure_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,i,u){var l=n("../lib/oop"),m=n("./text_highlight_rules").TextHighlightRules,s=function(){var a="* *1 *2 *3 *agent* *allow-unresolved-vars* *assert* *clojure-version* *command-line-args* *compile-files* *compile-path* *e *err* *file* *flush-on-newline* *in* *macro-meta* *math-context* *ns* *out* *print-dup* *print-length* *print-level* *print-meta* *print-readably* *read-eval* *source-path* *use-context-classloader* *warn-on-reflection* + - -> ->> .. / < <= = == > &gt; >= &gt;= accessor aclone add-classpath add-watch agent agent-errors aget alength alias all-ns alter alter-meta! alter-var-root amap ancestors and apply areduce array-map aset aset-boolean aset-byte aset-char aset-double aset-float aset-int aset-long aset-short assert assoc assoc! assoc-in associative? atom await await-for await1 bases bean bigdec bigint binding bit-and bit-and-not bit-clear bit-flip bit-not bit-or bit-set bit-shift-left bit-shift-right bit-test bit-xor boolean boolean-array booleans bound-fn bound-fn* butlast byte byte-array bytes cast char char-array char-escape-string char-name-string char? chars chunk chunk-append chunk-buffer chunk-cons chunk-first chunk-next chunk-rest chunked-seq? class class? clear-agent-errors clojure-version coll? comment commute comp comparator compare compare-and-set! compile complement concat cond condp conj conj! cons constantly construct-proxy contains? count counted? create-ns create-struct cycle dec decimal? declare definline defmacro defmethod defmulti defn defn- defonce defstruct delay delay? deliver deref derive descendants destructure disj disj! dissoc dissoc! distinct distinct? doall doc dorun doseq dosync dotimes doto double double-array doubles drop drop-last drop-while empty empty? ensure enumeration-seq eval even? every? false? ffirst file-seq filter find find-doc find-ns find-var first float float-array float? floats flush fn fn? fnext for force format future future-call future-cancel future-cancelled? future-done? future? gen-class gen-interface gensym get get-in get-method get-proxy-class get-thread-bindings get-validator hash hash-map hash-set identical? identity if-let if-not ifn? import in-ns inc init-proxy instance? int int-array integer? interleave intern interpose into into-array ints io! isa? iterate iterator-seq juxt key keys keyword keyword? last lazy-cat lazy-seq let letfn line-seq list list* list? load load-file load-reader load-string loaded-libs locking long long-array longs loop macroexpand macroexpand-1 make-array make-hierarchy map map? mapcat max max-key memfn memoize merge merge-with meta method-sig methods min min-key mod name namespace neg? newline next nfirst nil? nnext not not-any? not-empty not-every? not= ns ns-aliases ns-imports ns-interns ns-map ns-name ns-publics ns-refers ns-resolve ns-unalias ns-unmap nth nthnext num number? odd? or parents partial partition pcalls peek persistent! pmap pop pop! pop-thread-bindings pos? pr pr-str prefer-method prefers primitives-classnames print print-ctor print-doc print-dup print-method print-namespace-doc print-simple print-special-doc print-str printf println println-str prn prn-str promise proxy proxy-call-with-super proxy-mappings proxy-name proxy-super push-thread-bindings pvalues quot rand rand-int range ratio? rational? rationalize re-find re-groups re-matcher re-matches re-pattern re-seq read read-line read-string reduce ref ref-history-count ref-max-history ref-min-history ref-set refer refer-clojure release-pending-sends rem remove remove-method remove-ns remove-watch repeat repeatedly replace replicate require reset! reset-meta! resolve rest resultset-seq reverse reversible? rseq rsubseq second select-keys send send-off seq seq? seque sequence sequential? set set-validator! set? short short-array shorts shutdown-agents slurp some sort sort-by sorted-map sorted-map-by sorted-set sorted-set-by sorted? special-form-anchor special-symbol? split-at split-with str stream? string? struct struct-map subs subseq subvec supers swap! symbol symbol? sync syntax-symbol-anchor take take-last take-nth take-while test the-ns time to-array to-array-2d trampoline transient tree-seq true? type unchecked-add unchecked-dec unchecked-divide unchecked-inc unchecked-multiply unchecked-negate unchecked-remainder unchecked-subtract underive unquote unquote-splicing update-in update-proxy use val vals var-get var-set var? vary-meta vec vector vector? when when-first when-let when-not while with-bindings with-bindings* with-in-str with-loading-context with-local-vars with-meta with-open with-out-str with-precision xml-seq zero? zipmap",p="throw try var def do fn if let loop monitor-enter monitor-exit new quote recur set!",e="true false nil",t=this.createKeywordMapper({keyword:p,"constant.language":e,"support.function":a},"identifier",!1," ");this.$rules={start:[{token:"comment",regex:";.*$"},{token:"keyword",regex:"[\\(|\\)]"},{token:"keyword",regex:"[\\'\\(]"},{token:"keyword",regex:"[\\[|\\]]"},{token:"keyword",regex:"[\\{|\\}|\\#\\{|\\#\\}]"},{token:"keyword",regex:"[\\&]"},{token:"keyword",regex:"[\\#\\^\\{]"},{token:"keyword",regex:"[\\%]"},{token:"keyword",regex:"[@]"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language",regex:"[!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+||=|!=|<=|>=|<>|<|>|!|&&]"},{token:t,regex:"[a-zA-Z_$][a-zA-Z0-9_$\\-]*\\b"},{token:"string",regex:'"',next:"string"},{token:"constant",regex:/:[^()\[\]{}'"\^%`,;\s]+/},{token:"string.regexp",regex:`/#"(?:\\.|(?:\\")|[^""
])*"/g`}],string:[{token:"constant.language.escape",regex:"\\\\.|\\\\$"},{token:"string",regex:'[^"\\\\]+'},{token:"string",regex:'"',next:"start"}]}};l.inherits(s,m),i.ClojureHighlightRules=s}),ace.define("ace/mode/matching_parens_outdent",["require","exports","module","ace/range"],function(n,i,u){var l=n("../range").Range,m=function(){};(function(){this.checkOutdent=function(s,a){return/^\s+$/.test(s)?/^\s*\)/.test(a):!1},this.autoOutdent=function(s,a){var p=s.getLine(a),e=p.match(/^(\s*\))/);if(!e)return 0;var t=e[1].length,r=s.findMatchingBracket({row:a,column:t});if(!r||r.row==a)return 0;var d=this.$getIndent(s.getLine(r.row));s.replace(new l(a,0,a,t-1),d)},this.$getIndent=function(s){var a=s.match(/^(\s+)/);return a?a[1]:""}}).call(m.prototype),i.MatchingParensOutdent=m}),ace.define("ace/mode/clojure",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/clojure_highlight_rules","ace/mode/matching_parens_outdent"],function(n,i,u){var l=n("../lib/oop"),m=n("./text").Mode,s=n("./clojure_highlight_rules").ClojureHighlightRules,a=n("./matching_parens_outdent").MatchingParensOutdent,p=function(){this.HighlightRules=s,this.$outdent=new a,this.$behaviour=this.$defaultBehaviour};l.inherits(p,m),(function(){this.lineCommentStart=";",this.minorIndentFunctions=["defn","defn-","defmacro","def","deftest","testing"],this.$toIndent=function(e){return e.split("").map(function(t){return/\s/.exec(t)?t:" "}).join("")},this.$calculateIndent=function(e,t){for(var r=this.$getIndent(e),d=0,g,o,c=e.length-1;c>=0&&(o=e[c],o==="("?(d--,g=!0):o==="("||o==="["||o==="{"?(d--,g=!1):(o===")"||o==="]"||o==="}")&&d++,!(d<0));c--);if(d<0&&g){c+=1;for(var y=c,b="";;){if(o=e[c],o===" "||o==="	")return this.minorIndentFunctions.indexOf(b)!==-1?this.$toIndent(e.substring(0,y-1)+t):this.$toIndent(e.substring(0,c+1));if(o===void 0)return this.$toIndent(e.substring(0,y-1)+t);b+=e[c],c++}}else return d<0&&!g?this.$toIndent(e.substring(0,c+1)):(d>0&&(r=r.substring(0,r.length-t.length)),r)},this.getNextLineIndent=function(e,t,r){return this.$calculateIndent(t,r)},this.checkOutdent=function(e,t,r){return this.$outdent.checkOutdent(t,r)},this.autoOutdent=function(e,t,r){this.$outdent.autoOutdent(t,r)},this.$id="ace/mode/clojure",this.snippetFileId="ace/snippets/clojure"}).call(p.prototype),i.Mode=p}),function(){ace.require(["ace/mode/clojure"],function(n){h&&(h.exports=n)})}()})(v);var x=v.exports;const j=k(x),q=w({__proto__:null,default:j},[x]);export{q as m};
