(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1adb8639"],{"0775":function(t,e,o){"use strict";var n=o("12f1"),r=o.n(n);r.a},"12f1":function(t,e,o){},"177a":function(t,e,o){"use strict";var n=o("7343"),r=o.n(n);r.a},"23f8":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"moderation_header"},[o("h1",{staticClass:"moderation_header__h1"},[t._v("Moderation")]),o("div",{staticClass:"moderation_header__tabs"},[o("div",{staticClass:"tab_button",class:{"tab_button--selected":"reports"===t.selectedTab},on:{click:function(e){return t.$router.push("reports")}}},[t._v(" Reports ")]),o("div",{staticClass:"tab_button",class:{"tab_button--selected":"bans"===t.selectedTab},on:{click:function(e){return t.$router.push("bans")}}},[t._v(" Banned users ")])])])},r=[],a={name:"ModerationHeader",props:["selected-tab"]},s=a,i=(o("af3f"),o("2877")),d=Object(i["a"])(s,n,r,!1,null,"3b09a957",null);e["a"]=d.exports},3103:function(t,e,o){"use strict";var n=o("3e69"),r=o.n(n);r.a},"3e69":function(t,e,o){},"6f58":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"overlay_message"},[o("span",{staticClass:"overlay_message__loading"},[o("loading-icon",{attrs:{dark:!0}})],1),t._v(" Loading... ")])},r=[],a=o("c5af"),s={name:"LoadingMessage",components:{LoadingIcon:a["a"]}},i=s,d=o("2877"),l=Object(d["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},"6fab":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu_tooltip",class:{"menu_tooltip--touch":!t.touchDisabled}},[o("div",{staticClass:"menu_tooltip__overlay",class:{"menu_tooltip__overlay--show":t.value},on:{click:function(e){return t.$emit("input",!1)}}}),t._t("button"),o("div",{staticClass:"menu_tooltip__menu",class:{"menu_tooltip__menu--show":t.value},style:{top:t.top,width:t.width}},[o("div",{staticClass:"menu_tooltip__menu__inner"},[t._t("menu")],2)])],2)},r=[],a={name:"MenuTooltip",props:["value","top","width","touch-disabled"]},s=a,i=(o("177a"),o("2877")),d=Object(i["a"])(s,n,r,!1,null,"1f24160c",null);e["a"]=d.exports},7343:function(t,e,o){},8649:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"admin_moderation"},[o("moderation-header",{attrs:{"selected-tab":"reports"}}),o("confirm-modal",{attrs:{text:"Remove",color:"red"},on:{confirm:t.removePost},model:{value:t.removePostObj.showConfirmModal,callback:function(e){t.$set(t.removePostObj,"showConfirmModal",e)},expression:"removePostObj.showConfirmModal"}},[t._v(" Are you sure you want to remove this post? ")]),o("confirm-modal",{attrs:{text:"Delete",color:"red"},on:{confirm:t.deleteThread},model:{value:t.removePostObj.showThreadDeleteModal,callback:function(e){t.$set(t.removePostObj,"showThreadDeleteModal",e)},expression:"removePostObj.showThreadDeleteModal"}},[t._v(" Are you sure you want to delete the thread containing this post? ")]),o("transition",{attrs:{name:"fade",mode:"out-in"}},[t.reports?t.filteredReports.length?o("div",{key:"reports",staticClass:"admin_moderation__reports"},[o("div",{staticClass:"admin_moderation__report admin_moderation__report--header"},[o("div",{staticClass:"admin_moderation__report__post admin_moderation__report--cell_border admin_moderation__report--cell_border-hidden"},[t._v(" User and post reported ")]),o("div",{staticClass:"admin_moderation__report__reason admin_moderation__report--cell_border admin_moderation__report--cell_border-hidden"},[t._v("Report reason")]),o("div",{staticClass:"admin_moderation__report__flagged_by admin_moderation__report--cell_border admin_moderation__report--cell_border-hidden"},[t._v(" Reported by user ")]),o("div",{staticClass:"admin_moderation__report__actions"},[t._v(" Actions ")])]),t._l(t.filteredReports,(function(e,n){return o("div",{key:"report-"+n,staticClass:"admin_moderation__report"},[o("div",{staticClass:"admin_moderation__report__post admin_moderation__report--cell_border"},[o("div",{staticClass:"admin_moderation__report__post__header"},[o("avatar-icon",{staticClass:"admin_moderation__report__flagged_by__avatar",attrs:{size:"small",user:e.Post.User}}),o("div",[o("div",{staticClass:"admin_moderation__report__post__user"},[t._v(t._s(e.PostUserUsername))]),o("div",{staticClass:"admin_moderation__report__flagged_by__date"},[t._v("Posted "+t._s(t._f("formatDate")(e.createdAt)))])])],1),o("div",{staticClass:"admin_moderation__report__post__content"},[t._v(t._s(t._f("truncate")(t._f("stripTags")(e.Post.content),150)))])]),o("div",{staticClass:"admin_moderation__report__reason admin_moderation__report--cell_border"},[t._v(t._s(e.reason))]),o("div",{staticClass:"admin_moderation__report__flagged_by admin_moderation__report--cell_border"},[o("avatar-icon",{staticClass:"admin_moderation__report__flagged_by__avatar",attrs:{size:"small",user:e.FlaggedByUser}}),o("div",{staticClass:"admin_moderation__report__flagged_by__text_info"},[o("div",{staticClass:"admin_moderation__report__flagged_by__user"},[t._v(t._s(e.FlaggedByUserUsername))]),o("div",{staticClass:"admin_moderation__report__flagged_by__date"},[t._v(t._s(t._f("formatDate")(e.createdAt)))])])],1),o("div",{staticClass:"admin_moderation__report__actions"},[o("button",{staticClass:"button button--red",on:{click:function(o){return t.removePost(e,n)}}},[t._v("Remove post")]),o("menu-button",{attrs:{options:t.reportMenuOptions},on:{delete:function(o){return t.deleteReport(e.id,n)},ban:function(o){return t.banUser(e,n)},deleteThread:function(o){return t.deleteThread(e,n)}}},[o("button",{staticClass:"button"},[t._v("More options…")])])],1)])}))],2):o("div",{key:"no reports",staticClass:"overlay_message"},[o("font-awesome-icon",{attrs:{icon:["fa","thumbs-up"]}}),t._v(" No user reports ")],1):o("loading-message",{key:"loading"})],1)],1)},r=[],a=(o("4de4"),o("d81d"),o("a434"),o("96cf")),s=o("6f58"),i=o("9098"),d=o("da16"),l=o("23f8"),_=o("c4b0"),c=o.n(_),u={name:"AdminDashboard",components:{MenuButton:a["a"],LoadingMessage:s["a"],AvatarIcon:i["a"],ConfirmModal:d["a"],ModerationHeader:l["a"]},data:function(){return{reportMenuOptions:[{value:"Delete report",event:"delete"},{value:"Ban or block user",event:"ban"},{value:"Delete thread",event:"deleteThread"}],reports:null,removePostObj:{showConfirmModal:!1,showThreadDeleteModal:!1,report:null,index:null}}},computed:{filteredReports:function(){return this.reports?this.reports.filter((function(t){return t.Post})).map((function(t){var e=Object.create(t);return t.Post.User?e.PostUserUsername=t.Post.User.username:e.PostUserUsername="[Deleted]",t.FlaggedByUser?e.FlaggedByUserUsername=t.FlaggedByUser.username:e.FlaggedByUserUsername="[Deleted]",e})):null}},methods:{deleteReport:function(t,e){var o=this;return this.axios.delete("/api/v1/report/"+t).then((function(){o.reports.splice(e,1)})).catch(c()(this.$store))},deleteThread:function(t,e){var o=this;if(t)this.removePostObj.report=t,this.removePostObj.index=e,this.removePostObj.showThreadDeleteModal=!0;else{var n=this.removePostObj.report.Post.Thread.id;this.axios.delete("/api/v1/thread/"+n).then((function(){o.reports=o.reports.filter((function(t){return t.Post.Thread.id!==n}))})).catch(c()(this.$store))}},removePost:function(t,e){var o=this;t?(this.removePostObj.report=t,this.removePostObj.index=e,this.removePostObj.showConfirmModal=!0):this.axios.delete("/api/v1/post/"+this.removePostObj.report.Post.id).then((function(){return o.axios.delete("/api/v1/report/"+o.removePostObj.report.id)})).then((function(){o.reports.splice(o.removePostObj.index,1)})).catch(c()(this.$store))},banUser:function(t){var e=this;this.$router.push("bans"),setTimeout((function(){e.$store.commit("moderation/setModal",!0),e.$store.commit("moderation/setUsername",t.Post.User.username)}),0)}},mounted:function(){var t=this;this.$store.dispatch("setTitle","admin | moderation"),this.axios.get("/api/v1/report").then((function(e){t.reports=e.data})).catch(c()(this.$store))}},m=u,p=(o("0775"),o("2877")),v=Object(p["a"])(m,n,r,!1,null,"356338b3",null);e["default"]=v.exports},9447:function(t,e,o){},"96cf":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("menu-tooltip",{staticClass:"menu_button",attrs:{top:"0",width:"10rem","touch-disabled":"true"},model:{value:t.menuOpen,callback:function(e){t.menuOpen=e},expression:"menuOpen"}},[o("div",{staticClass:"menu_button__icon",attrs:{slot:"button"},on:{click:function(e){t.menuOpen=!0}},slot:"button"},[t._t("default")],2),o("template",{slot:"menu"},t._l(t.options,(function(e,n){return o("div",{key:"menu-button-option-"+e.value+"-"+n,staticClass:"menu_button__option",style:{"border-bottom":n===t.options.length-1?"none":"solid thin rgb(245, 245, 245)"},on:{click:function(o){return t.emit(e.event)}}},[t._v(" "+t._s(e.value)+" ")])})),0)],2)},r=[],a=o("6fab"),s={name:"MenuButton",props:["options"],components:{MenuTooltip:a["a"]},data:function(){return{menuOpen:!1}},methods:{emit:function(t){this.$emit(t),this.menuOpen=!1}}},i=s,d=(o("3103"),o("2877")),l=Object(d["a"])(i,n,r,!1,null,"1305bd0e",null);e["a"]=l.exports},af3f:function(t,e,o){"use strict";var n=o("9447"),r=o.n(n);r.a},da16:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("modal-window",{attrs:{value:t.showModal},on:{input:t.setShowModal}},[o("div",{staticStyle:{"padding-top":"1rem"},attrs:{slot:"main"},slot:"main"},[t._t("default")],2),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("button",{staticClass:"button button--modal",class:t.buttonColor,on:{click:t.confirm}},[t._v(t._s(t.text||"OK"))]),o("button",{staticClass:"button button--modal",on:{click:function(e){return t.setShowModal(!1)}}},[t._v("Cancel")])])])},r=[],a=o("6307"),s={name:"ConfirmModal",props:["value","color","text"],components:{ModalWindow:a["a"]},data:function(){return{showModal:!1}},computed:{buttonColor:function(){return this.color?"button--"+this.color:""}},watch:{value:function(t){this.showModal=t}},methods:{setShowModal:function(t){this.showModal=t,this.$emit("input",t)},confirm:function(){this.$emit("confirm"),this.setShowModal(!1)}},mounted:function(){this.setShowModal(this.value)}},i=s,d=o("2877"),l=Object(d["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-1adb8639.0010175b.js.map