(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{392:function(t,e,l){},393:function(t,e,l){},394:function(t,e,l){"use strict";var n=l(418),r=l(9),o=(l(425),l(86),l(427)),c=l.n(o),d=(l(11),{name:"tags-input",components:Object(r.a)({},c.a.name,c.a),props:{value:{type:Array,default:function(){return[]},description:"List of tags"},tagType:{type:String,default:"primary",description:"Tag type (primary|danger etc)"}},model:{prop:"value",event:"change"},data:function(){return{dynamicTags:[],inputVisible:!1,inputValue:""}},methods:{handleClose:function(t){this.dynamicTags.splice(this.dynamicTags.indexOf(t),1),this.$emit("change",this.dynamicTags)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&(this.dynamicTags.push(t),this.$emit("change",this.dynamicTags)),this.inputVisible=!1,this.inputValue=""},onInput:function(t){this.$emit("input",t.target.value)}},created:function(){var t=this;this.$watch("value",(function(e){t.dynamicTags=Object(n.a)(e)}),{immediate:!0})}}),v=d,f=(l(409),l(410),l(7)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tags-input__wrapper"},[t._l(t.dynamicTags,(function(l,n){return e("el-tag",{key:l+n,attrs:{size:"small",type:t.tagType,closable:!0,"close-transition":!1},on:{close:function(e){return t.handleClose(l)}}},[t._v("\n    "+t._s(l)+"\n  ")])})),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],ref:"saveTagInput",staticClass:"form-control",attrs:{type:"text",placeholder:"Add new tag",size:"mini"},domProps:{value:t.inputValue},on:{input:[function(e){e.target.composing||(t.inputValue=e.target.value)},t.onInput],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)},blur:t.handleInputConfirm}})],2)}),[],!1,null,"6bd5f62c",null);e.a=component.exports},398:function(t,e,l){"use strict";l(32),l(21),l(26),l(38),l(39);var n=l(9),r=(l(54),l(426)),o=l.n(r);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var d={name:"base-slider",props:{value:{type:[String,Array,Number],description:"slider value"},disabled:{type:Boolean,default:!1,description:"whether the slider is disabled"},start:{type:[Number,Array],default:0,description:"[noUi Slider start](https://refreshless.com/nouislider/slider-options/#section-start)"},connect:{type:[Boolean,Array],default:function(){return[!0,!1]},description:"[noUi Slider connect](https://refreshless.com/nouislider/slider-options/#section-connect)"},range:{type:Object,default:function(){return{min:0,max:100}},description:"[noUi Slider range](https://refreshless.com/nouislider/slider-values/#section-range)"},options:{type:Object,default:function(){return{}},description:"[noUi Slider options](https://refreshless.com/nouislider/slider-options/)"}},data:function(){return{slider:null}},methods:{createSlider:function(){var t=this;o.a.create(this.$el,function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({start:this.value||this.start,connect:!!Array.isArray(this.value)||this.connect,range:this.range},this.options));var e=this.$el.noUiSlider;e.on("slide",(function(){var l=e.get();l!==t.value&&t.$emit("input",l)}))}},mounted:function(){this.createSlider()},watch:{value:function(t,e){var l=this.$el.noUiSlider,n=l.get();t!==e&&n!==t&&(Array.isArray(n)&&Array.isArray(t)?e.length===t.length&&e.every((function(e,i){return e===t[i]}))&&l.set(t):l.set(t))}}},v=d,f=l(7),component=Object(f.a)(v,(function(){return(0,this._self._c)("div",{staticClass:"slider",attrs:{disabled:this.disabled}})}),[],!1,null,null,null);e.a=component.exports},409:function(t,e,l){"use strict";l(392)},410:function(t,e,l){"use strict";l(393)},992:function(t,e,l){"use strict";l.r(e);l(11);var n=l(9),r=(l(405),l(86),l(406)),o=l.n(r),c=(l(407),l(408)),d=l.n(c),v=(l(19),l(61),l(62),l(423)),f=l.n(v),m=(l(424),l(10)),h=(l(37),{name:"html-editor",props:{value:{type:String,default:""},name:String},data:function(){return{editor:null,content:null,lastHtmlValue:"",editorId:null,toolbarId:null}},methods:{initialize:function(t){var e=this;this.editor=new t("#".concat(this.editorId),{theme:"snow",modules:{toolbar:"#".concat(this.toolbarId)}}),this.value.length>0&&this.editor.pasteHTML(this.value);var l=this.$refs.editor.children[0];this.editor.on("text-change",(function(){var html=l.innerHTML;"<p><br></p>"===html&&(html=""),e.content=html,e.$emit("input",e.content),console.log(e.content)}))},pasteHTML:function(){this.editor&&this.editor.pasteHTML(this.value)},randomString:function(){for(var text="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",i=0;i<5;i++)text+=t.charAt(Math.floor(Math.random()*t.length));return text}},mounted:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.e(130).then(l.t.bind(null,987,7));case 2:n=(n=e.sent).default||n,t.editorId=t.randomString(),t.toolbarId=t.randomString(),t.$nextTick((function(){t.initialize(n)}));case 7:case"end":return e.stop()}}),e)})))()},watch:{value:function(t){t!==this.content&&this.pasteHTML(t)}}}),C=l(7),_=Object(C.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"quill"},[e("div",{attrs:{id:t.toolbarId}},[t._m(0)]),t._v(" "),e("div",{ref:"editor",staticStyle:{height:"500px !important"},attrs:{id:t.editorId,name:t.name}})])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"ql-formats"},[e("button",{staticClass:"ql-bold"}),t._v(" "),e("button",{staticClass:"ql-italic"}),t._v(" "),e("button",{staticClass:"ql-underline"}),t._v(" "),e("button",{staticClass:"ql-link"}),t._v(" "),e("button",{staticClass:"ql-blockquote"}),t._v(" "),e("button",{staticClass:"ql-code"}),t._v(" "),e("button",{staticClass:"ql-image"}),t._v(" "),e("button",{staticClass:"ql-list",attrs:{type:"button",value:"ordered"}}),t._v(" "),e("button",{staticClass:"ql-list",attrs:{type:"button",value:"bullet"}})])}],!1,null,null,null).exports,w=l(394);l(32),l(21),l(26),l(38),l(39),l(168);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k,x={name:"dropzone-file-upload",props:{options:{type:Object,default:function(){return{}}},value:[String,Object,Array],url:{type:String,default:"http://"},multiple:Boolean,previewClasses:[String,Object,Array]},model:{prop:"value",event:"change"},data:function(){return{currentFile:null,files:[],showList:!1}},methods:{initDropzone:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.e(132).then(l.t.bind(null,988,7));case 2:(n=(n=e.sent).default||n).autoDiscover=!1,r=t.multiple?t.$refs.previewMultiple:t.$refs.previewSingle,o=t,c=O(O({},t.options),{},{url:t.url,thumbnailWidth:null,thumbnailHeight:null,previewsContainer:r,previewTemplate:r.innerHTML,maxFiles:t.multiple?null:1,acceptedFiles:t.multiple?null:"image/*",init:function(){this.on("addedfile",(function(t){!o.multiple&&o.currentFile,o.currentFile=t}))}}),t.dropzone=new n(t.$el,c),r.innerHTML="",["drop","dragstart","dragend","dragenter","dragover","addedfile","removedfile","thumbnail","error","processing","uploadprogress","sending","success","complete","canceled","maxfilesreached","maxfilesexceeded","processingmultiple","sendingmultiple","successmultiple","completemultiple","canceledmultiple","totaluploadprogress","reset","queuecomplete"].forEach((function(e){t.dropzone.on(e,(function(data){if(t.$emit(e,data),"addedfile"===e)t.files.push(data),t.$emit("change",t.files);else if("removedfile"===e){var l=t.files.findIndex((function(t){return t.upload.uuid===data.upload.uuid}));-1!==l&&t.files.splice(l,1),t.$emit("change",t.files)}}))}));case 12:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.initDropzone();case 1:case"end":return e.stop()}}),e)})))()}},j=Object(C.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropzone mb-3 dz-clickable",class:[t.multiple?"dropzone-multiple":"dropzone-single"]},[e("div",{staticClass:"fallback"},[e("div",{staticClass:"custom-file"},[e("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"projectCoverUploads",multiple:t.multiple}}),t._v(" "),e("label",{staticClass:"custom-file-label",attrs:{for:"projectCoverUploads"}},[t._v("Choose file")])])]),t._v(" "),t.multiple?e("ul",{ref:"previewMultiple",staticClass:"dz-preview dz-preview-multiple list-group list-group-lg list-group-flush",class:t.previewClasses},[t._m(1)]):e("div",{ref:"previewSingle",staticClass:"dz-preview dz-preview-single",class:t.previewClasses},[t._m(0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"dz-preview-cover"},[t("img",{staticClass:"dz-preview-img",attrs:{"data-dz-thumbnail":""}})])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"avatar"},[e("img",{staticClass:"avatar-img rounded",attrs:{"data-dz-thumbnail":""}})])]),t._v(" "),e("div",{staticClass:"col ml--3"},[e("h4",{staticClass:"mb-1",attrs:{"data-dz-name":""}},[t._v("...")]),t._v(" "),e("p",{staticClass:"small text-muted mb-0",attrs:{"data-dz-size":""}},[t._v("...")])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-danger btn-sm",attrs:{"data-dz-remove":"true"}},[e("i",{staticClass:"fas fa-trash"})])])])])}],!1,null,null,null).exports,S=l(398),$={name:"form-components",layout:"DashboardLayout",components:(k={HtmlEditor:_,TagsInput:w.a,DropzoneFileUpload:j,BaseSlider:S.a,flatPicker:f.a},Object(n.a)(k,d.a.name,d.a),Object(n.a)(k,o.a.name,o.a),k),data:function(){return{selectOptions:[{label:"Alerts",value:"Alerts"},{label:"Badges",value:"Badges"},{label:"Buttons",value:"Buttons"},{label:"Cards",value:"Cards"},{label:"Forms",value:"Forms"},{label:"Modals",value:"Modals"}],selects:{simple:"Badges",multiple:["Alerts","Buttons"]},dates:{simple:(new Date).toString(),range:"2019-04-19 to 2019-04-24"},inputs:{tags:["BUCHAREST","IASI","TIMISOARA"],fileSingle:[],fileMultiple:[]},switches:{off:!1,primary:!0,default:!0,danger:!0,warning:!0,success:!0,info:!0},sliders:{simple:50,range:[200,400]}}}},z=Object(C.a)($,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v(t._s(t.$route.name))]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("route-breadcrumb")],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card-wrapper"},[e("card",[e("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Input groups")]),t._v(" "),e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{"prepend-icon":"fas fa-user",placeholder:"Your name"}})],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{"prepend-icon":"fas fa-envelope",placeholder:"Email"}})],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{"append-icon":"fas fa-map-marker",placeholder:"Location"}})],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{"append-icon":"fas fa-eye",placeholder:"Password",type:"password"}})],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{"prepend-icon":"fas fa-credit-card",placeholder:"Payment Method"}},[e("small",{staticClass:"font-weight-bold",attrs:{slot:"append"},slot:"append"},[t._v("USD")])])],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{"append-icon":"fas fa-phone","prepend-icon":"fas fa-globe-americas",placeholder:"Phone"}})],1)])])]),t._v(" "),e("card",[e("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Selects")]),t._v(" "),e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{label:"Simple select"}},[e("el-select",{attrs:{filterable:"",placeholder:"Simple select"},model:{value:t.selects.simple,callback:function(e){t.$set(t.selects,"simple",e)},expression:"selects.simple"}},t._l(t.selectOptions,(function(option){return e("el-option",{key:option.label,attrs:{label:option.label,value:option.value}})})),1)],1)],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{label:"Multiple select"}},[e("el-select",{attrs:{multiple:"",filterable:"",placeholder:"Multiple select"},model:{value:t.selects.multiple,callback:function(e){t.$set(t.selects,"multiple",e)},expression:"selects.multiple"}},t._l(t.selectOptions,(function(option){return e("el-option",{key:option.label,attrs:{label:option.label,value:option.value}})})),1)],1)],1)])])]),t._v(" "),e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{label:"Date picker"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.focus,r=l.blur;return e("flat-picker",{staticClass:"form-control datepicker",attrs:{config:{allowInput:!0}},on:{"on-open":n,"on-close":r},model:{value:t.dates.simple,callback:function(e){t.$set(t.dates,"simple",e)},expression:"dates.simple"}})}}])})],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{label:"Range picker"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.focus,r=l.blur;return e("flat-picker",{staticClass:"form-control datepicker",attrs:{config:{allowInput:!0,mode:"range"}},on:{"on-open":n,"on-close":r},model:{value:t.dates.range,callback:function(e){t.$set(t.dates,"range",e)},expression:"dates.range"}})}}])})],1)])])])]),t._v(" "),e("div",{staticClass:"card"},[t._m(1),t._v(" "),e("div",{staticClass:"card-body"},[e("form",[e("html-editor")],1)])])],1)]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card-wrapper"},[e("card",[e("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Tags")]),t._v(" "),e("tags-input",{model:{value:t.inputs.tags,callback:function(e){t.$set(t.inputs,"tags",e)},expression:"inputs.tags"}})],1),t._v(" "),e("card",[e("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Toggle buttons")]),t._v(" "),e("base-switch",{staticClass:"mr-1",attrs:{"on-text":"On","off-text":"Off"}}),t._v(" "),e("base-switch",{staticClass:"mr-1",model:{value:t.switches.primary,callback:function(e){t.$set(t.switches,"primary",e)},expression:"switches.primary"}}),t._v(" "),e("base-switch",{staticClass:"mr-1",attrs:{type:"default"},model:{value:t.switches.default,callback:function(e){t.$set(t.switches,"default",e)},expression:"switches.default"}}),t._v(" "),e("base-switch",{staticClass:"mr-1",attrs:{type:"danger"},model:{value:t.switches.danger,callback:function(e){t.$set(t.switches,"danger",e)},expression:"switches.danger"}}),t._v(" "),e("base-switch",{staticClass:"mr-1",attrs:{type:"warning"},model:{value:t.switches.warning,callback:function(e){t.$set(t.switches,"warning",e)},expression:"switches.warning"}}),t._v(" "),e("base-switch",{staticClass:"mr-1",attrs:{type:"success"},model:{value:t.switches.success,callback:function(e){t.$set(t.switches,"success",e)},expression:"switches.success"}}),t._v(" "),e("base-switch",{staticClass:"mr-1",attrs:{type:"info"},model:{value:t.switches.info,callback:function(e){t.$set(t.switches,"info",e)},expression:"switches.info"}})],1),t._v(" "),e("card",[e("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Sliders")]),t._v(" "),e("base-slider",{model:{value:t.sliders.simple,callback:function(e){t.$set(t.sliders,"simple",e)},expression:"sliders.simple"}}),t._v(" "),e("div",{staticClass:"mt-3 row"},[e("div",{staticClass:"col-6"},[e("span",{staticClass:"range-slider-value"},[t._v(t._s(t.sliders.simple))])])]),t._v(" "),e("base-slider",{staticClass:"mt-5",attrs:{range:{min:100,max:500}},model:{value:t.sliders.range,callback:function(e){t.$set(t.sliders,"range",e)},expression:"sliders.range"}}),t._v(" "),e("div",{staticClass:"mt-3 row"},[e("div",{staticClass:"col-6"},[e("span",{staticClass:"range-slider-value"},[t._v(t._s(t.sliders.range[0]))])]),t._v(" "),e("div",{staticClass:"text-right col-6"},[e("span",{staticClass:"range-slider-value value-high"},[t._v(t._s(t.sliders.range[1]))])])])],1),t._v(" "),e("card",[e("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Dropzone")]),t._v(" "),e("dropzone-file-upload",{model:{value:t.inputs.fileSingle,callback:function(e){t.$set(t.inputs,"fileSingle",e)},expression:"inputs.fileSingle"}}),t._v(" "),e("dropzone-file-upload",{attrs:{multiple:""},model:{value:t.inputs.fileMultiple,callback:function(e){t.$set(t.inputs,"fileMultiple",e)},expression:"inputs.fileMultiple"}})],1)],1)])])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Datepicker")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Text editor")])])}],!1,null,null,null);e.default=z.exports}}]);