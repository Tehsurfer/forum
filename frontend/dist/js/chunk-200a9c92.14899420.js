(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-200a9c92"],{"0b60":function(e,t,a){"use strict";var s=a("519c"),r=a.n(s);r.a},1193:function(e,t,a){"use strict";var s=a("ee53"),r=a.n(s);r.a},"519c":function(e,t,a){},"65ee":function(e,t,a){},"713f":function(e,t,a){},7183:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"route_container"},[a("h1",[e._v("Results for "+e._s(e.searchType)+" containing '"+e._s(e.$route.params.q)+"'")]),a("transition",{attrs:{name:"fade",mode:"out-in"}},[e.results&&e.results.length?a("div",{key:"results",staticClass:"search__results"},[a("scroll-load",{attrs:{loading:e.loading},on:{loadNext:e.loadNextPage}},["users"===e.searchType?[e._l(e.results,(function(e){return a("user-display",{key:"search-user-result-"+e.id,attrs:{user:e}})})),e.loading?e._l(e.next,(function(e){return a("user-placeholder",{key:"user-placeholder-"+e})})):e._e()]:e._e(),"threads"===e.searchType?[e._l(e.results,(function(e){return a("thread-display",{key:"search-thread-result-"+e.id,attrs:{thread:e}})})),e.loading?e._l(e.next,(function(e){return a("thread-display-placeholder",{key:"thread-placeholder-"+e})})):e._e()]:e._e()],2)],1):e._e(),e.showNoResults||e.queryTooShort?a("div",{key:"no results",staticClass:"overlay_message search__overlay_message"},[a("font-awesome-icon",{attrs:{icon:["fa","exclamation-circle"]}}),e._v(" "+e._s(e.queryTooShort?"Search term is too short":"No results found")+" ")],1):a("div",{key:"loading"},["users"===e.searchType?a("user-placeholder"):e._e(),"threads"===e.searchType?a("thread-display-placeholder"):e._e()],1)])],1)},r=[],i=(a("99af"),a("fb6a"),a("b0c0"),a("2909")),n=a("8674"),o=a("ac51"),l=a("73b2"),c=a("ce34"),d=a("9870"),u=a("c4b0"),h=a.n(u),_=a("bd28"),p={name:"Search",components:{ScrollLoad:n["a"],UserDisplay:o["a"],UserPlaceholder:l["a"],ThreadDisplay:c["a"],ThreadDisplayPlaceholder:d["a"]},data:function(){return{results:null,next:0,offset:0,loading:!1}},computed:{searchType:function(){var e=this.$route.name;return"search/users"===e?"users":"threads"},showNoResults:function(){return!this.loading&&this.results&&!this.results.length},queryTooShort:function(){return this.$route.params.q.length<this.$store.state.MinQueryLength}},methods:{getResults:function(){var e=this;this.queryTooShort||(this.$store.dispatch("setTitle","Search | "+this.$route.params.q),this.axios.get("/api/v1/search/".concat(this.searchType.slice(0,-1),"?q=").concat(this.$route.params.q)).then((function(t){e.results=t.data[e.searchType],e.next=t.data.next,e.offset=t.data.offset})).catch(h()(this.$store)))},loadNextPage:function(){var e=this;this.next&&(this.loading=!0,this.axios.get("/api/v1/search/".concat(this.searchType.slice(0,-1),"?q=").concat(this.$route.params.q,"&offset=").concat(this.offset)).then((function(t){var a;(a=e.results).push.apply(a,Object(i["a"])(t.data[e.searchType])),e.next=t.data.next,e.offset=t.data.offset,e.loading=!1})).catch((function(t){e.loading=!1,h()(e.$store)(t)})))}},watch:{"$route.params":"getResults"},mounted:function(){this.$store.dispatch("setTitle","Search | "+this.$route.params.q),this.getResults(),Object(_["a"])("search")}},f=p,v=(a("f849"),a("2877")),y=Object(v["a"])(f,s,r,!1,null,"a8233c2c",null);t["default"]=y.exports},"73b2":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user_placeholder"},[a("div",{staticClass:"user_placeholder__avatar"}),a("div",{staticClass:"user_placeholder__username"})])}],i={name:"UserPlaceholder"},n=i,o=(a("0b60"),a("2877")),l=Object(o["a"])(n,s,r,!1,null,"b9fa307a",null);t["a"]=l.exports},"82e1":function(e,t,a){"use strict";var s=a("713f"),r=a.n(s);r.a},"84a2":function(e,t,a){(function(t){var a="Expected a function",s=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,h=d||u||Function("return this")(),_=Object.prototype,p=_.toString,f=Math.max,v=Math.min,y=function(){return h.Date.now()};function m(e,t,s){var r,i,n,o,l,c,d=0,u=!1,h=!1,_=!0;if("function"!=typeof e)throw new TypeError(a);function p(t){var a=r,s=i;return r=i=void 0,d=t,o=e.apply(s,a),o}function m(e){return d=e,l=setTimeout(C,t),u?p(e):o}function g(e){var a=e-c,s=e-d,r=t-a;return h?v(r,n-s):r}function T(e){var a=e-c,s=e-d;return void 0===c||a>=t||a<0||h&&s>=n}function C(){var e=y();if(T(e))return $(e);l=setTimeout(C,g(e))}function $(e){return l=void 0,_&&r?p(e):(r=i=void 0,o)}function w(){void 0!==l&&clearTimeout(l),d=0,r=c=i=l=void 0}function S(){return void 0===l?o:$(y())}function j(){var e=y(),a=T(e);if(r=arguments,i=this,c=e,a){if(void 0===l)return m(c);if(h)return l=setTimeout(C,t),p(c)}return void 0===l&&(l=setTimeout(C,t)),o}return t=x(t)||0,b(s)&&(u=!!s.leading,h="maxWait"in s,n=h?f(x(s.maxWait)||0,t):n,_="trailing"in s?!!s.trailing:_),j.cancel=w,j.flush=S,j}function g(e,t,s){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(a);return b(s)&&(r="leading"in s?!!s.leading:r,i="trailing"in s?!!s.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){return!!e&&"object"==typeof e}function C(e){return"symbol"==typeof e||T(e)&&p.call(e)==r}function x(e){if("number"==typeof e)return e;if(C(e))return s;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var a=o.test(e);return a||l.test(e)?c(e.slice(2),a?2:8):n.test(e)?s:+e}e.exports=g}).call(this,a("c8ba"))},8674:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"scroll_load"},[e._t("default")],2)},r=[],i=a("84a2"),n=a.n(i),o={name:"ScrollLoad",props:["loading","query-selector","padding-bottom","padding-top"],computed:{element:function(){return this.querySelector?document.querySelector(this.querySelector):null}},methods:{onScroll:n()((function(){var e,t,a=this.paddingBottom||300,s=this.paddingTop||150;this.loading||(this.element?(e=Math.floor(this.element.scrollTop+this.element.getBoundingClientRect().height+a-this.element.scrollHeight),t=s-this.element.scrollTop):(e=window.innerHeight+window.pageYOffset+a-document.body.scrollHeight,t=s-document.body.scrollTop),e>0?this.$emit("loadNext"):t>0&&this.$emit("loadPrevious"))}))},mounted:function(){(this.element||window).addEventListener("scroll",this.onScroll)},destroyed:function(){(this.element||window).removeEventListener("scroll",this.onScroll)}},l=o,c=a("2877"),d=Object(c["a"])(l,s,r,!1,null,null,null);t["a"]=d.exports},9314:function(e,t,a){"use strict";var s=a("65ee"),r=a.n(s);r.a},9870:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"thread_display_placeholder"},[a("div",{staticClass:"thread_display_placeholder__icon"}),a("div",{staticStyle:{width:"100%"}},[a("div",{staticClass:"thread_display_placeholder__header"},[a("div",{staticClass:"thread_display_placeholder__bar thread_display_placeholder__bar--15"}),a("div",{staticClass:"thread_display_placeholder__bar thread_display_placeholder__bar--33"})]),a("div",{staticClass:"thread_display_placeholder__replies_bar"},[a("div",{staticClass:"thread_display_placeholder__bar thread_display_placeholder__bar--20"}),a("div",{staticClass:"thread_display_placeholder__bar thread_display_placeholder__bar--5"})]),a("div",{staticClass:"thread_display_placeholder__content"},[a("div",{staticClass:"thread_display_placeholder__bar"}),a("div",{staticClass:"thread_display_placeholder__bar thread_display_placeholder__bar--58"})])])])}],i={name:"ThreadDisplayPlaceholder"},n=i,o=(a("1193"),a("2877")),l=Object(o["a"])(n,s,r,!1,null,"0d1773f1",null);t["a"]=l.exports},ac51:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user_display",on:{click:function(t){return e.$router.push("/user/"+e.user.username)}}},[a("avatar-icon",{attrs:{user:e.user,size:"small"}}),a("div",{staticClass:"user_display__username"},[e._v(" "+e._s(e.user.username)+" ")])],1)},r=[],i=a("9098"),n={name:"UserDisplay",props:["user"],components:{AvatarIcon:i["a"]}},o=n,l=(a("9314"),a("2877")),c=Object(l["a"])(o,s,r,!1,null,"297425d2",null);t["a"]=c.exports},ba27:function(e,t,a){},bd28:function(e,t,a){"use strict";var s=a("bc3a"),r=a.n(s);t["a"]=function(e,t){"userPosts"===e||"userThreads"===e?r.a.get("/api/v1/user/"+t).then((function(t){return r.a.post("/api/v1/log",{route:e,resourceId:t.data.id})})).catch(console.log):r.a.post("/api/v1/log",{route:e,resourceId:t}).catch(console.log)}},ce34:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"thread_display"},[a("avatar-icon",{ref:"avatar",staticClass:"thread_display__icon",attrs:{user:e.thread.User,size:"small"},on:{click:e.goToUser}}),a("div",{staticStyle:{width:"calc(100% - 3rem)"},on:{click:e.goToThread}},[a("div",{staticClass:"thread_display__header"},[a("span",{staticClass:"thread_display__name"},[e._v(" "+e._s(e.thread.name)+" ")]),a("div",{staticClass:"thread_display__meta_bar"},[a("div",[e._v(" By "),a("span",{ref:"username",staticClass:"thread_display__username"},[e._v(e._s(e._f("truncateMid")(e.threadUsername,25)))]),e._v(" in "),a("span",{ref:"category",staticClass:"thread_display__category"},[e._v(e._s(e.thread.Category.name))]),e._v(" · "),a("span",{staticClass:"thread_display__date"},[e._v(e._s(e._f("formatDate")(e.thread.createdAt)))])])])]),a("div",{staticClass:"thread_display__replies_bar"},[2===e.thread.Posts.length?a("div",{staticClass:"thread_display__latest_reply"},[a("font-awesome-icon",{attrs:{icon:["fa","reply"],"fixed-width":""}}),a("span",{staticClass:"thread_display__latest_reply__text"},[e._v("Latest reply by ")]),a("span",{staticClass:"thread_display__username"},[e._v(e._s(e.replyUsername))]),e._v(" · "),a("span",{staticClass:"thread_display__date"},[e._v(e._s(e._f("formatDate")(e.thread.Posts[1].createdAt)))])],1):a("span",{staticStyle:{cursor:"default"}},[e._v("No replies")]),a("div",{staticClass:"thread_display__replies",attrs:{title:"Replies to thread"}},[a("font-awesome-icon",{attrs:{icon:["far","comment"],"fixed-width":""}}),e._v(" "+e._s(e.thread.postsCount-1)+" ")],1)]),a("div",{staticClass:"thread_display__content"},[e._v(" "+e._s(e._f("truncate")(e._f("stripTags")(e.thread.Posts[0].content),150))+" ")])])],1)},r=[],i=a("9098"),n={name:"ThreadDisplay",props:["thread"],components:{AvatarIcon:i["a"]},computed:{threadUsername:function(){return this.thread.User?this.thread.User.username:"[deleted]"},replyUsername:function(){return this.thread.Posts[1].User?this.thread.Posts[1].User.username:"[deleted]"}},methods:{goToUser:function(){this.$router.push("/user/"+this.thread.User.username)},goToThread:function(){this.$router.push("/thread/"+this.thread.slug+"/"+this.thread.id)}}},o=n,l=(a("82e1"),a("2877")),c=Object(l["a"])(o,s,r,!1,null,"6bf65f18",null);t["a"]=c.exports},ee53:function(e,t,a){},f849:function(e,t,a){"use strict";var s=a("ba27"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-200a9c92.14899420.js.map