(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1180f1b0"],{"19b4":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fancy_textarea"},[i("div",{staticClass:"fancy_textarea__container",staticStyle:{position:"relative",display:"inline-block"},style:{width:t.width||"20rem"}},[i("div",{staticClass:"fancy_textarea__placeholder",class:{"fancy_textarea__placeholder--active":t.active||t.value.length}},[t._v(" "+t._s(t.placeholder)+" ")]),i("textarea",{staticClass:"input fancy_textarea__textarea",domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)},focus:t.addActive,blur:t.removeActive}})]),i("error-tooltip",{attrs:{error:t.error}})],1)},o=[],r=i("e145"),n={name:"FancyTextarea",props:["value","placeholder","width","error"],components:{ErrorTooltip:r["a"]},data:function(){return{active:!1}},methods:{updateValue:function(t){this.$emit("input",t)},addActive:function(){this.active=!0},removeActive:function(){this.active=!1}}},s=n,c=(i("b701"),i("2877")),l=Object(c["a"])(s,a,o,!1,null,"2fc2e934",null);e["a"]=l.exports},"3ef7":function(t,e,i){},"466d":function(t,e,i){"use strict";var a=i("d784"),o=i("825a"),r=i("50c4"),n=i("1d80"),s=i("8aa5"),c=i("14c3");a("match",1,(function(t,e,i){return[function(e){var i=n(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i):new RegExp(e)[t](String(i))},function(t){var a=i(e,t,this);if(a.done)return a.value;var n=o(t),l=String(this);if(!n.global)return c(n,l);var u=n.unicode;n.lastIndex=0;var d,p=[],f=0;while(null!==(d=c(n,l))){var v=String(d[0]);p[f]=v,""===v&&(n.lastIndex=s(l,r(n.lastIndex),u)),f++}return 0===f?null:p}]}))},"4a36":function(t,e,i){},"7da2":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"route_container"},[i("confirm-modal",{attrs:{color:"red",text:"Yes, remove it"},on:{confirm:t.removeProfilePicture},model:{value:t.picture.showRemoveProfilePictureModal,callback:function(e){t.$set(t.picture,"showRemoveProfilePictureModal",e)},expression:"picture.showRemoveProfilePictureModal"}},[t._v(" Are you sure you want to remove your profile picture? ")]),i("modal-window",{attrs:{loading:t.picture.loading,width:"25rem"},on:{input:t.hideProflePictureModal},model:{value:t.picture.showProfilePictureModal,callback:function(e){t.$set(t.picture,"showProfilePictureModal",e)},expression:"picture.showProfilePictureModal"}},[i("div",{staticClass:"profile_picture_modal",class:{"profile_picture_modal--picture.dragging":t.picture.dragging},attrs:{slot:"main"},on:{dragover:t.handleDragOver,drkagend:function(e){t.picture.dragging=!1},drkgleave:function(e){t.picture.dragging=!1},drop:t.handleFileDrop},slot:"main"},[i("div",{staticClass:"h3"},[t._v("Add a profile picture")]),i("p",{staticClass:"p--condensed"},[t._v(" Drag and drop an image or "),i("label",{staticClass:"button profile_picture_modal__upload_button"},[i("input",{attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.processImage(e.target.files[0])}}}),t._v(" upload a file ")])]),i("div",{staticClass:"profile_picture_modal__drag_area"},[t.picture.dataURL?i("div",{staticClass:"profile_picture_modal__drag_area__image picture_circle",style:{"background-image":"url("+t.picture.dataURL+")"}}):i("span",{staticClass:"profile_picture_modal__drag_area__icon",class:{"profile_picture_modal__drag_area__icon--picture.dragging":t.picture.dragging}},[i("font-awesome-icon",{attrs:{icon:["fa","cloud-upload-alt"]}})],1)])]),i("div",{staticClass:"profile_picture_modal__buttons",attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"button button--modal button--green",class:{"button--disabled":!t.picture.dataURL},on:{click:t.uploadProfilePicture}},[t._v(" Upload picture ")]),i("button",{staticClass:"button button--modal",on:{click:t.hideProflePictureModal}},[t._v("Cancel")])])]),i("div",{staticClass:"h1"},[t._v("General settings")]),i("div",[i("div",{staticClass:"h3"},[t._v("About me")]),i("p",{staticClass:"p--condensed"},[t._v(" Write something about yourself to be displayed on your user page ")]),i("fancy-textarea",{attrs:{placeholder:"About me description",error:t.description.error,type:"password"},model:{value:t.description.value,callback:function(e){t.$set(t.description,"value",e)},expression:"description.value"}}),i("loading-button",{staticClass:"button button--green",attrs:{loading:t.description.loading},on:{click:t.saveDescription}},[t._v(" Save description ")])],1),i("div",[i("div",{staticClass:"h3"},[t._v("Profile picture")]),i("p",{staticClass:"p--condensed"},[t._v(" This will be displayed by your posts on the site ")]),t.picture.current?i("p",{staticClass:"p--condensed profile_picture_preview picture_circle",style:{"background-image":"url("+t.picture.current+")"}}):t._e(),i("button",{staticClass:"button",on:{click:function(e){t.picture.showProfilePictureModal=!0}}},[t._v(" "+t._s(t.picture.current?"Change":"Add")+" profile picture ")]),t.picture.current?i("button",{staticClass:"button",staticStyle:{"margin-left":"0.5rem"},on:{click:function(e){t.picture.showRemoveProfilePictureModal=!0}}},[t._v(" Remove ")]):t._e()])],1)},o=[],r=(i("a4d3"),i("e01a"),i("ac1f"),i("466d"),i("19b4")),n=i("8e8d"),s=i("6307"),c=i("da16"),l=i("c4b0"),u=i.n(l),d=i("bd28"),p={name:"settingsGeneral",components:{FancyTextarea:r["a"],LoadingButton:n["a"],ModalWindow:s["a"],ConfirmModal:c["a"]},data:function(){return{description:{value:"",loading:!1,error:""},picture:{current:null,showProfilePictureModal:!1,showRemoveProfilePictureModal:!1,dragging:!1,dataURL:null,file:null,loading:!1}}},computed:{},methods:{saveDescription:function(){var t=this;this.description.error="",this.description.loading=!0,this.axios.put("/api/v1/user/"+this.$store.state.username,{description:this.description.value}).then((function(){t.description.loading=!1})).catch((function(e){t.description.loading=!1,u()(t.$store)(e,(function(e){t.description.error=e.message}))}))},uploadProfilePicture:function(){var t=this;this.picture.loading=!0;var e=new FormData;e.append("picture",this.picture.file),this.axios.post("/api/v1/user/"+this.$store.state.username+"/picture",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.hideProflePictureModal(),t.picture.current=e.data.picture})).catch((function(e){t.picture.loading=!1,u()(t.$store)(e)}))},removeProfilePicture:function(){var t=this;this.axios.delete("/api/v1/user/"+this.$store.state.username+"/picture").then((function(){t.picture.current=null})).catch(u()(this.$store))},hideProflePictureModal:function(){var t=this;this.picture.showProfilePictureModal=!1,setTimeout((function(){t.picture.dataURL=null,t.picture.loading=!1}),200)},handleDragOver:function(t){t.preventDefault(),this.picture.dragging=!0},handleFileDrop:function(t){if(t.preventDefault(),this.picture.dragging=!1,t.dataTransfer&&t.dataTransfer.items){var e=t.dataTransfer.items[0];e.type.match("^image/")&&this.processImage(e.getAsFile())}},processImage:function(t){var e=this,i=new FileReader;i.readAsDataURL(t),this.picture.file=t,i.addEventListener("load",(function(){e.picture.dataURL=i.result}))}},created:function(){var t=this;this.$store.dispatch("setTitle","general settings"),this.$nextTick((function(){t.axios.get("/api/v1/user/"+t.$store.state.username).then((function(e){t.description.value=e.data.description||"",t.picture.current=e.data.picture})).catch((function(e){u()(t.$store)(e)}))})),Object(d["a"])("settingsGeneral")}},f=p,v=(i("f913"),i("2877")),h=Object(v["a"])(f,a,o,!1,null,"19c5f084",null);e["default"]=h.exports},b701:function(t,e,i){"use strict";var a=i("3ef7"),o=i.n(a);o.a},bd28:function(t,e,i){"use strict";var a=i("bc3a"),o=i.n(a);e["a"]=function(t,e){"userPosts"===t||"userThreads"===t?o.a.get("/api/v1/user/"+e).then((function(e){return o.a.post("/api/v1/log",{route:t,resourceId:e.data.id})})).catch(console.log):o.a.post("/api/v1/log",{route:t,resourceId:e}).catch(console.log)}},da16:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("modal-window",{attrs:{value:t.showModal},on:{input:t.setShowModal}},[i("div",{staticStyle:{"padding-top":"1rem"},attrs:{slot:"main"},slot:"main"},[t._t("default")],2),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"button button--modal",class:t.buttonColor,on:{click:t.confirm}},[t._v(t._s(t.text||"OK"))]),i("button",{staticClass:"button button--modal",on:{click:function(e){return t.setShowModal(!1)}}},[t._v("Cancel")])])])},o=[],r=i("6307"),n={name:"ConfirmModal",props:["value","color","text"],components:{ModalWindow:r["a"]},data:function(){return{showModal:!1}},computed:{buttonColor:function(){return this.color?"button--"+this.color:""}},watch:{value:function(t){this.showModal=t}},methods:{setShowModal:function(t){this.showModal=t,this.$emit("input",t)},confirm:function(){this.$emit("confirm"),this.setShowModal(!1)}},mounted:function(){this.setShowModal(this.value)}},s=n,c=i("2877"),l=Object(c["a"])(s,a,o,!1,null,null,null);e["a"]=l.exports},f913:function(t,e,i){"use strict";var a=i("4a36"),o=i.n(a);o.a}}]);
//# sourceMappingURL=chunk-1180f1b0.c5830f0b.js.map