(function(e){function t(t){for(var r,a,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d22498b":"2a64d314","chunk-40652608":"218e6e6b"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-40652608":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22498b":"31d6cfe0","chunk-40652608":"51d829b3"}[e]+".css",o=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0df4":function(e,t,n){e.exports=n.p+"img/logo-mini.c949e51e.svg"},2261:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"main-view"},[n("div",{staticClass:"container-scroller"},[n("Sidebar"),n("div",{staticClass:"container-fluid page-body-wrapper"},[n("Header"),n("div",{staticClass:"main-panel"},[n("div",{staticClass:"content-wrapper"},[n("router-view")],1),e._v(" "),n("Footer")],1)],1)],1)])])},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{staticClass:"p-0 fixed-top d-flex flex-row",attrs:{id:"template-header",toggleable:"lg"}},[r("div",{staticClass:"navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center"},[r("router-link",{staticClass:"navbar-brand brand-logo-mini",attrs:{to:"/"}},[r("img",{attrs:{src:n("0df4"),alt:"logo"}})])],1),r("div",{staticClass:"navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0"},[r("button",{staticClass:"navbar-toggler navbar-toggler align-self-center d-lg-block",attrs:{type:"button"},on:{click:function(t){return e.toggleSidebar()}}},[r("span",{staticClass:"mdi mdi-format-line-spacing"})]),r("ul",{staticClass:"navbar-nav w-100"}),r("b-navbar-nav",{staticClass:"navbar-nav-right ml-auto"}),r("button",{staticClass:"navbar-toggler navbar-toggler-right align-self-center",attrs:{type:"button"},on:{click:function(t){return e.toggleMobileSidebar()}}},[r("span",{staticClass:"mdi mdi-menu"})])],1)])},i=[],l={name:"app-header",methods:{toggleSidebar:function(){document.querySelector("body").classList.toggle("sidebar-icon-only")},toggleMobileSidebar:function(){document.querySelector("#sidebar").classList.toggle("active")}}},c=l,u=n("2877"),d=Object(u["a"])(c,s,i,!1,null,"74b3bc7a",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-sidebar"},[n("nav",{staticClass:"sidebar sidebar-offcanvas",attrs:{id:"sidebar"}},[n("div",{staticClass:"sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top text-center"},[n("router-link",{staticClass:"sidebar-brand brand-logo",attrs:{to:"/"}},[e._v(" Locatelli ")]),n("router-link",{staticClass:"sidebar-brand brand-logo-mini",attrs:{to:"/"}},[e._v(" LC ")])],1),n("ul",{staticClass:"nav"},[n("li",{staticClass:"nav-item menu-items",on:{click:e.collapseAll}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",{staticClass:"menu-icon"},[n("i",{staticClass:"mdi mdi-format-list-bulleted"})]),n("span",{staticClass:"menu-title"},[e._v("Kata")])])],1)])])])},b=[],m=(n("d3b7"),n("159b"),{name:"sidebar",data:function(){return{collapses:[{show:!1},{show:!1},{show:!1}]}},mounted:function(){var e=document.querySelector("body");document.querySelectorAll(".sidebar .nav-item").forEach((function(t){t.addEventListener("mouseover",(function(){e.classList.contains("sidebar-icon-only")&&t.classList.add("hover-open")})),t.addEventListener("mouseout",(function(){e.classList.contains("sidebar-icon-only")&&t.classList.remove("hover-open")}))}))},methods:{collapseAll:function(){var e=document.getElementsByClassName("show");if(e.length>0){var t=e[0].id;this.$root.$emit("bv::toggle::collapse",t)}},subIsActive:function(e){var t=this,n=Array.isArray(e)?e:[e];return n.some((function(e){return 0===t.$route.path.indexOf(e)}))}},watch:{$route:function(){document.querySelector("#sidebar").classList.remove("active")}}}),v=m,g=(n("ea4c"),Object(u["a"])(v,p,b,!1,null,null,null)),h=g.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-footer"},[n("footer",{staticClass:"footer"},[n("div",{staticClass:"container-fluid clearfix"},[n("span",{staticClass:"text-muted d-block text-center text-sm-left d-sm-inline-block"},[e._v("Copyright © "),n("a",{attrs:{href:"https://danielsunami.github.io/",target:"_blank"}},[e._v("Daniel Sunami")])])])])])}],w={name:"app-footer"},k=w,_=Object(u["a"])(k,y,C,!1,null,null,null),x=_.exports,S={name:"app",components:{Header:f,Sidebar:h,Footer:x}},E=S,j=(n("5c0b"),Object(u["a"])(E,a,o,!1,null,null,null)),O=j.exports,L=(n("3ca3"),n("ddb0"),n("8c4f"));r["default"].use(L["a"]);var A=new L["a"]({linkExactActiveClass:"active",scrollBehavior:function(){return{y:0}},mode:"history",base:"/",routes:[{path:"*",redirect:"/error-404",component:function(){return n.e("chunk-2d22498b").then(n.bind(null,"e18a"))}},{path:"/",name:"home",component:function(){return n.e("chunk-40652608").then(n.bind(null,"cd56"))}}]}),P=n("5f5b"),$=n("5886");r["default"].use(P["a"]),r["default"].use($["a"]),r["default"].config.productionTip=!1,new r["default"]({router:A,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},ea4c:function(e,t,n){"use strict";n("2261")}});
//# sourceMappingURL=app.18ea8845.js.map