(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1091:function(e,t,l){"use strict";l.r(t);l(11),l(245),l(86);var o,n=l(165),r=l.n(n),c=l(10),d=l(9),m=(l(405),l(406)),v=l.n(m),f=(l(407),l(408)),h=l.n(f),k=(l(37),l(68)),_=l(402),C=l(403),y=l(404),x={name:"form-components",layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(o={CustomStylesValidation:_.a,BrowserDefaultsValidation:C.a,ServerSideValidation:y.a},Object(d.a)(o,h.a.name,h.a),Object(d.a)(o,v.a.name,v.a),o),data:function(){return{validated:!1,sin:!0,model:{id:"",name:"",field:[],sideenable:!1,sidedeck:0,max:0}}},methods:{firstFormSubmit:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==(l=e).model.name){t.next=8;break}return l.sin=!1,data={name:l.model.name,field:JSON.stringify(l.model.field),sideenable:l.model.sideenable,sidedeck:parseInt(l.model.sidedeck),max:parseInt(l.model.max)},t.next=6,k.a.collection("Deck").update(l.model.id,data).then((function(){setTimeout((function(){r()({showClose:!0,message:"Updated Successfuly!",type:"success"}),window.close()}),1500)})).catch((function(){l.sin=!0,r()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 6:t.next=9;break;case 8:r()({showClose:!0,message:"All fields are required",type:"warning"});case 9:case"end":return t.stop()}}),t)})))()},getData:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(l=e).$route.params.id,t.next=4,k.a.collection("Deck").getOne(o);case 4:l.model=t.sent;case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getData()}},w=(l(955),l(7)),component=Object(w.a)(x,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-3"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white"},[e._v("Deck Detail")])])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"row ht"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card-wrapper"},[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(l){var o=l.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Deck Name",name:"Deck Name",placeholder:"Enter Deck Name","success-message":"Looks good!",rules:"required"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Max Capacity",name:"Max Capacity",placeholder:"Enter Max Capacity","success-message":"Looks good!",rules:"required"},model:{value:e.model.max,callback:function(t){e.$set(e.model,"max",t)},expression:"model.max"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Side Enable?"}},[e._v("\n                       \n                    "),t("base-switch",{staticClass:"mr-1 mt-2 ml-4",attrs:{"on-text":"Yes","off-text":"No"},model:{value:e.model.mask,callback:function(t){e.$set(e.model,"mask",t)},expression:"model.mask"}})],1)],1),e._v(" "),1==e.model.mask?t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"No",name:"No",placeholder:"Enter No","success-message":"Looks good!",rules:"required"},model:{value:e.model.sidedeck,callback:function(t){e.$set(e.model,"sidedeck",t)},expression:"model.sidedeck"}})],1):e._e()]),e._v(" "),1==e.sin?t("base-button",{attrs:{type:"success","native-type":"submit"},on:{click:function(t){return o(e.firstFormSubmit)}}},[e._v("Update")]):t("base-button",{staticClass:"btn btn-success d-flex",attrs:{type:"button"}},[e._v("\n                Updating\n                "),t("p",{staticClass:"spinner"})])],1)]}}])})],1)])])])],1)}),[],!1,null,"aff5de04",null);t.default=component.exports},402:function(e,t,l){"use strict";var o=l(10),n=(l(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),r=l(7),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(l){var o=l.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),o(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},403:function(e,t,l){"use strict";var o=l(10),n=(l(37),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),r=l(7),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},404:function(e,t,l){"use strict";var o=l(10),n=(l(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),r=l(7),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(l){var o=l.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),o(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},751:function(e,t,l){},955:function(e,t,l){"use strict";l(751)}}]);