webpackJsonp([0],{"9tRD":function(t,i){},CdTh:function(t,i,e){"use strict";(function(t){i.a={name:"blog",data:function(){return{images:["static/pipi/file_6212624.webp","static/pipi/file_6212625.webp","static/pipi/file_6212626.webp","static/pipi/file_6212627.webp","static/pipi/file_6212628.webp","static/pipi/file_6212629.webp","static/pipi/file_6212630.webp","static/pipi/file_6212631.webp","static/pipi/file_6212632.webp","static/pipi/file_6212623.webp","static/pipi/file_6212651.webp","static/pipi/file_6212659.webp","static/pipi/file_6212660.webp","static/pipi/file_6212661.webp","static/pipi/file_6212662.webp"],imgpipi:"",lists:[{name:"wangEditor —— 轻量级web富文本框 测试demo",text:"wangEditor 是一款使用 Typescript 开发的 Web 富文本编辑器， 轻量、简洁、易用、开源免费。\n            兼容常见的 PC 浏览器：Chrome，Firefox，Safar，Edge，QQ 浏览器，IE11。\n            不支持移动端",href:"/blog/editor"}]}},created:function(){this.imgpipi=parseInt(15*Math.random())},mounted:function(){this.$nextTick(function(){t(window).scroll(function(){t(window).scrollTop()>=20?t(".site-header").addClass("fixed"):t(".site-header").removeClass("fixed")})})}}}).call(i,e("7t+N"))},DReh:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("7+uW");function n(){var t=document.getElementById("SwanSong"),i=function i(){t.play(),document.removeEventListener("touchstart",i,!1)};t.play(),document.addEventListener("WeixinJSBridgeReady",function(){i()},!1),document.addEventListener("YixinJSBridgeReady",function(){i()},!1),document.addEventListener("touchstart",i,!1)}var r={name:"App",data:function(){return{audioSwanSong_type:!0,style:[{image:"static/background/preview.jpg",opacity:"1",gradient:"linear-gradient(45deg, #002453 0%,#ff2b4a 100%)",backgroundColor:"#000",bgm:"static/bgm/横山克 - Feel like Crying.mp3",backgroundPosition:"center center"},{image:"static/background/gallery_m_009.jpg",opacity:"0.75",gradient:"linear-gradient(65deg, #002453 34%,#ff2b4a 100%)",backgroundColor:"#000",bgm:"static/bgm/柏大輔 - Swan Song.mp3",backgroundPosition:"center center"},{image:"static/background/Cover.jpg",opacity:"1",gradient:"rgb(0 0 0 / 80%)",backgroundColor:"#000",bgm:"static/bgm/Eminence Symphony Orchestra.flac",backgroundPosition:"0 center"},{image:"static/background/yan.jpg",opacity:"1",gradient:"rgb(0 0 0 / 80%)",backgroundColor:"#000",bgm:"static/bgm/Eminence Symphony Orchestra.flac",backgroundPosition:"center center"}],styleRandom:parseInt(3*Math.random())}},created:function(){document.getElementById("SwanSong").src=this.style[this.styleRandom].bgm},mounted:function(){this.$nextTick(function(){!function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,20)};window.requestAnimationFrame=t;var i=[],e=document.getElementById("Snow"),a=e.getContext("2d"),n=parseInt(e.getAttribute("data-count")),r=-100,s=-100;function o(){a.clearRect(0,0,e.width,e.height);for(var p=0;p<n;p++){var d=i[p],l=r,m=s,u=parseInt(e.getAttribute("data-dist")),f=d.x,g=d.y,h=Math.sqrt((f-l)*(f-l)+(g-m)*(g-m));if(h<u){var _=(l-f)/h,v=(m-g)/h,w=u/(h*h)/2;d.velX-=w*_,d.velY-=w*v}else d.velX*=.98,d.velY<=d.speed&&(d.velY=d.speed),d.velX+=Math.cos(d.step+=.05)*d.stepSize;a.fillStyle="rgba("+e.getAttribute("data-color")+","+d.opacity+")",d.y+=d.velY,d.x+=d.velX,(d.y>=e.height||d.y<=0)&&c(d),(d.x>=e.width||d.x<=0)&&c(d),a.beginPath(),a.font="8px serif",a.fillText("❄",d.x,d.y),a.fill()}t(o)}function c(t){t.x=Math.floor(Math.random()*e.width),t.y=0,t.size=3*Math.random()+parseInt(e.getAttribute("data-size")),t.speed=1*Math.random()+parseInt(e.getAttribute("data-speed")),t.velY=t.speed,t.velX=0,t.opacity=.5*Math.random()+parseInt(e.getAttribute("data-opacity"))}e.width=window.innerWidth,e.height=window.innerHeight,document.addEventListener("mousemove",function(t){r=t.clientX,s=t.clientY}),window.addEventListener("resize",function(){e.width=window.innerWidth,e.height=window.innerHeight}),function(){for(var t=0;t<n;t++){var a=Math.floor(Math.random()*e.width),r=Math.floor(Math.random()*e.height),s=3*Math.random()+parseInt(e.getAttribute("data-size")),c=1*Math.random()+parseInt(e.getAttribute("data-speed")),p=.5*Math.random()+parseInt(e.getAttribute("data-opacity"));i.push({speed:c,velY:c,velX:0,x:a,y:r,size:s,stepSize:Math.random()/30*parseInt(e.getAttribute("data-step")),step:0,angle:180,opacity:p})}o()}()}(),n()})},methods:{click_on:function(){if(this.audioSwanSong_type)try{this.audioSwanSong_type=!1,document.getElementById("SwanSong").play(),n()}catch(t){n()}}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{style:{backgroundColor:t.style[t.styleRandom].backgroundColor},attrs:{id:"app"},on:{click:t.click_on}},[e("div",{staticClass:"home-banner fullscreen"},[e("div",{staticClass:"background",style:{backgroundImage:"url("+t.style[t.styleRandom].image+")",opacity:t.style[t.styleRandom].opacity,backgroundPosition:t.style[t.styleRandom].backgroundPosition}}),t._v(" "),e("canvas",{attrs:{id:"Snow","data-count":"100","data-dist":"200","data-color":"255,255,255","data-size":"2","data-speed":"0.5","data-opacity":"0.8","data-step":"0",width:"1273",height:"913"}}),t._v(" "),e("div",{staticClass:"gradient",style:{background:t.style[t.styleRandom].gradient}}),t._v(" "),e("div",{staticClass:"banner-content dtable fullscreen"},[e("div",{staticClass:"content-inner dtablecell"},[e("router-view")],1)])])])},staticRenderFns:[]};var o=e("VU/8")(r,s,!1,function(t){e("9tRD")},null,null).exports,c=e("/ocq"),p={name:"home",data:function(){return{images:["static/pipi/file_6212624.webp","static/pipi/file_6212625.webp","static/pipi/file_6212626.webp","static/pipi/file_6212627.webp","static/pipi/file_6212628.webp","static/pipi/file_6212629.webp","static/pipi/file_6212630.webp","static/pipi/file_6212631.webp","static/pipi/file_6212632.webp","static/pipi/file_6212623.webp","static/pipi/file_6212651.webp","static/pipi/file_6212659.webp","static/pipi/file_6212660.webp","static/pipi/file_6212661.webp","static/pipi/file_6212662.webp"],imgpipi:"static/pipi/file_6212623.webp",imgpipi1:"static/pipi/file_6212624.webp",imgpipi_opacity:"1",imgpipi_opacity1:"0",img_if_1:!0,img_if_2:!1}},methods:{random:function(t){var i=parseInt(15*Math.random());return t==i?(9==i?i-=1:0==i&&(i+=1),i+=1):i}},created:function(){this.imgpipi=parseInt(15*Math.random()),this.imgpipi1=this.random(this.imgpipi)},mounted:function(){var t=this,i=!0;setInterval(function(){i?(i=!1,t.img_if_1=!1,setTimeout(function(){t.img_if_2=!0,t.imgpipi=t.random(t.imgpipi1)},510)):(i=!0,t.img_if_2=!1,setTimeout(function(){t.img_if_1=!0,t.imgpipi1=t.random(t.imgpipi)},510))},3e4)}},d={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"home"},[e("div",{staticClass:"container"},[e("transition",{attrs:{name:"fade"}},[t.img_if_1?e("img",{staticClass:"imgpipi",attrs:{src:t.images[t.imgpipi],alt:""}}):t._e()]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.img_if_2?e("img",{staticClass:"imgpipi",attrs:{src:t.images[t.imgpipi1],alt:""}}):t._e()]),t._v(" "),e("p",{staticClass:"name"},[t._v("皮皮")]),t._v(" "),e("p",[t._v('皮皮的皮卡丘研究所製作(￣▽￣)"')]),t._v(" "),t._m(0),t._v(" "),e("p"),t._v(" "),e("div",{staticClass:"lists"},[e("p",[e("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("\n            Email:\n            "),i("a",{attrs:{href:"mailto:pisenliang@gmail.com"}},[this._v("pisenliang@gmail.com")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("a",{attrs:{target:"view_window",href:"https://github.com/SenLiangpi"}},[this._v("GitHub")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("a",{attrs:{target:"view_window",href:"https://www.npmjs.com/~pipiandpikachu"}},[this._v("NPM")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("a",{attrs:{target:"view_window",href:"https://t.me/webjavascript"}},[this._v("Telegram")])])}]};var l=e("VU/8")(p,d,!1,function(t){e("yb5P")},"data-v-5e7eb71c",null).exports,m=e("CdTh"),u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"blog"},[e("div",{staticStyle:{height:"120px"}}),t._v(" "),e("header",{staticClass:"site-header navbar-fixed-top navbar-default",staticStyle:{overflow:"hidden",position:"fixed",width:"100%",top:"0"}},[e("div",{staticClass:"container"},[e("img",{staticStyle:{height:"60px",float:"left"},attrs:{src:t.images[t.imgpipi],alt:""}}),t._v(" "),e("div",{staticClass:"lists"},[e("p",[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("p",[e("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("a",{attrs:{target:"view_window",href:"https://github.com/SenLiangpi"}},[this._v("GitHub")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("a",{attrs:{target:"view_window",href:"https://www.npmjs.com/~pipiandpikachu"}},[this._v("NPM")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("a",{attrs:{target:"view_window",href:"https://t.me/webjavascript"}},[this._v("Telegram")])])}]};var f=function(t){e("qvON")},g=e("VU/8")(m.a,u,!1,f,"data-v-6132dc56",null).exports,h={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"list"},[e("div",{staticClass:"test-lists container"},t._l(t.lists,function(i,a){return e("div",{key:a,staticClass:"dom-list"},[e("router-link",{attrs:{to:i.href}},[e("h1",[t._v(t._s(i.name))]),t._v(" "),e("p",[t._v("\n          "+t._s(i.text)+"\n        ")])])],1)}),0)])},staticRenderFns:[]};var _=e("VU/8")({name:"list",data:function(){return{lists:[{name:"wangEditor —— 轻量级web富文本框 测试demo",text:"wangEditor 是一款使用 Typescript 开发的 Web 富文本编辑器， 轻量、简洁、易用、开源免费。\n            兼容常见的 PC 浏览器：Chrome，Firefox，Safar，Edge，QQ 浏览器，IE11。\n            不支持移动端",href:"/blog/editor"}]}},created:function(){},mounted:function(){}},h,!1,function(t){e("DReh")},"data-v-7f966478",null).exports,v=e("alfv"),w=e.n(v),b={name:"editor",data:function(){return{}},created:function(){},mounted:function(){this.$nextTick(function(){new w.a("#toolbar-container","#text-container").create()})}},y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"editor"},[i("div",{},[i("div",{staticClass:"toolbar",staticStyle:{width:"1000px",margin:"0 auto"},attrs:{id:"toolbar-container"}})]),this._v(" "),i("div",{staticClass:"text",staticStyle:{height:"500px",width:"1000px",margin:"0 auto"},attrs:{id:"text-container"}},[i("p",[this._v("wangEditor 编辑器测试使用")])])])}]};var C=e("VU/8")(b,y,!1,function(t){e("cKzY")},null,null).exports;a.a.use(c.a);var x=new c.a({routes:[{path:"/",name:"HelloWorld",component:l},{path:"/blog",name:"blog",component:g,redirect:"/blog/list",children:[{path:"list",component:_,name:"列表"},{path:"editor",component:C,name:"editor"}]}]});e("qb6w"),e("7t+N"),e("Rive");a.a.config.productionTip=!1,new a.a({el:"#app",router:x,components:{App:o},template:"<App/>"})},cKzY:function(t,i){},qb6w:function(t,i){},qvON:function(t,i){},yb5P:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.22f37e0f294e0a74edcc.js.map