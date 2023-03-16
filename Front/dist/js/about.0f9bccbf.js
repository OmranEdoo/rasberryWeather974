(function(){"use strict";var e={8060:function(e,t,a){a(2166);var o=a(9242),n=a(3396),r=a.p+"img/img_avatar_femme.f53ff370.png",s=a.p+"img/img_avatar_homme.b27ee444.png";const l={class:"page"},c=(0,n.uE)('<h1 id="title" data-v-ee26bb1c>Connected weather station</h1><div class="flexColumn" data-v-ee26bb1c><div class="flexRow" data-v-ee26bb1c><div class="aboutText flexColumn" id="textLeft" data-v-ee26bb1c><h3 class="centerItself" data-v-ee26bb1c>What is it ?</h3> This site is the realization of a student project as part of an advanced Web programming course in the third year of engineering school. The school name is ENSG, located in Champs-sur-Marne near Paris in France. The project consist of implementing the Software part of a weather station composed of probes and a central unit. Each probe is connected to several sensors which provide various information : <ul data-v-ee26bb1c><li data-v-ee26bb1c>Temperature</li><li data-v-ee26bb1c>Hygrometry</li><li data-v-ee26bb1c>Atmospheric pressure</li><li data-v-ee26bb1c>Rainfall</li><li data-v-ee26bb1c>Brightness</li><li data-v-ee26bb1c>Wind speed and direction</li><li data-v-ee26bb1c>GPS position and time</li></ul> A weather station can be subscribed to several probes and presents the data of the latter. The job was to create the software part of the two elements, using exclusively WEB technologies (html/CSS/javascript/node.js). </div><div class="aboutText flexColumn" id="textRight" data-v-ee26bb1c><h3 class="centerItself" data-v-ee26bb1c>Who we are ?</h3><div class="flewRow container bottomSpace" data-v-ee26bb1c><div class="flexColumn center" data-v-ee26bb1c><img class="image" src="'+r+'" alt="Avatar" data-v-ee26bb1c><h4 data-v-ee26bb1c> Lina Saba </h4></div><div class="flexColumn center" data-v-ee26bb1c><img class="image" src="'+s+'" alt="Avatar" data-v-ee26bb1c><h4 data-v-ee26bb1c> Omran Edoo </h4></div></div> We are both from the ENSG School were we specialize in Information Science Technology. <h6 data-v-ee26bb1c>Lina :</h6> I love coding 🖥️ traveling ✈️ and talking 🎤 you can check my networks down below, feel free to contact me ! <h6 data-v-ee26bb1c>Omran :</h6> Passionated with programming, cars, chess and a lot of other stuff, you can check my portefolio website (in construction) if you want to discover more about me ! <a href="https://omranedoo.vercel.app" data-v-ee26bb1c>omranedoo.vercel.app</a></div></div><div class="flexColumn" id="textBottom" data-v-ee26bb1c><h3 class="centerItself" data-v-ee26bb1c>What we used ?</h3> For the front, we used the framework Vue3 with vue-cli for the project instanciation. To create the chart we used the vue-chart API and for responsiveness and design we exploited bootstrap and mdb-vue-ui-kit. For the back, we used influxDB to create the database and we create our routes with the Express framework. </div></div>',2);function i(e,t,a,o,r,s){const i=(0,n.up)("NavBar"),d=(0,n.up)("FooterBar");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(i,{"actual-page":"about"}),c,(0,n.Wm)(d)])}function d(e,t,a,o,r,s){const l=(0,n.up)("MDBNavbarBrand"),c=(0,n.up)("MDBNavbarToggler"),i=(0,n.up)("MDBNavbarItem"),d=(0,n.up)("MDBDropdownToggle"),u=(0,n.up)("MDBDropdownItem"),m=(0,n.up)("MDBDropdownMenu"),f=(0,n.up)("MDBDropdown"),b=(0,n.up)("MDBNavbarNav"),p=(0,n.up)("MDBCollapse"),h=(0,n.up)("MDBNavbar");return(0,n.wg)(),(0,n.j4)(h,{expand:"lg",light:"",bg:"light",container:""},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{href:"#"},{default:(0,n.w5)((()=>[(0,n.Uk)("RW 974")])),_:1}),(0,n.Wm)(c,{onClick:t[0]||(t[0]=e=>o.collapse1=!o.collapse1),target:"#navbarSupportedContent"}),(0,n.Wm)(p,{modelValue:o.collapse1,"onUpdate:modelValue":t[3]||(t[3]=e=>o.collapse1=e),id:"navbarSupportedContent"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{class:"mb-2 mb-lg-0"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{href:"home",disabled:"home"==a.actualPage},{default:(0,n.w5)((()=>[(0,n.Uk)(" Home ")])),_:1},8,["disabled"]),(0,n.Wm)(i,{href:"about",disabled:"about"==a.actualPage},{default:(0,n.w5)((()=>[(0,n.Uk)(" About ")])),_:1},8,["disabled"]),(0,n.Wm)(i,{href:"#",onmousedown:"window.scrollTo(0, document.body.scrollHeight);"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Contact ")])),_:1}),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{class:"nav-item",modelValue:o.dropdown1,"onUpdate:modelValue":t[2]||(t[2]=e=>o.dropdown1=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{tag:"a",class:"nav-link",onClick:t[1]||(t[1]=e=>o.dropdown1=!o.dropdown1)},{default:(0,n.w5)((()=>[(0,n.Uk)("Data")])),_:1}),(0,n.Wm)(m,{"aria-labelledby":"dropdownMenuButton"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{href:"live",disabled:"live"==a.actualPage},{default:(0,n.w5)((()=>[(0,n.Uk)("Live")])),_:1},8,["disabled"]),(0,n.Wm)(u,{href:"archive",disabled:"archive"==a.actualPage},{default:(0,n.w5)((()=>[(0,n.Uk)("Archive")])),_:1},8,["disabled"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var u=a(4313),m=a(4870),f={components:{MDBNavbar:u.A0,MDBNavbarToggler:u.$Y,MDBNavbarBrand:u.JI,MDBNavbarNav:u.T2,MDBNavbarItem:u.V$,MDBCollapse:u.Eq,MDBDropdown:u.H6,MDBDropdownToggle:u.CU,MDBDropdownMenu:u.Ed,MDBDropdownItem:u.i2},props:{actualPage:String},mounted(){console.log(this.actualPage)},setup(){const e=(0,m.iH)(!1),t=(0,m.iH)(!1);return{collapse1:e,dropdown1:t}}},b=a(89);const p=(0,b.Z)(f,[["render",d],["__scopeId","data-v-c4f7883a"]]);var h=p;const v={class:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom"},w=(0,n._)("div",{class:"me-5 d-none d-lg-block"},[(0,n._)("span",null,"Get connected with us on social networks:")],-1),g={href:"",class:"me-4 text-reset"},_={href:"",class:"me-4 text-reset"},x={href:"",class:"me-4 text-reset"},B={href:"",class:"me-4 text-reset"},D={href:"",class:"me-4 text-reset"},y={href:"",class:"me-4 text-reset"},M={class:""},k=(0,n._)("h6",{class:"text-uppercase fw-bold mb-4"},[(0,n._)("i",{class:"fas fa-gem me-3"}),(0,n.Uk)("RASBERRY WEATHER 974 ")],-1),W=(0,n._)("p",null," Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",-1),S=(0,n._)("h6",{class:"text-uppercase fw-bold mb-4"},"Stack",-1),C=(0,n._)("p",null,[(0,n._)("a",{href:"https://vuejs.org/",class:"text-reset"},"Vue")],-1),T=(0,n._)("p",null,[(0,n._)("a",{href:"https://www.influxdata.com/",class:"text-reset"},"InfluxDB")],-1),j=(0,n._)("p",null,[(0,n._)("a",{href:"https://getbootstrap.com/",class:"text-reset"},"Bootstrap")],-1),O=(0,n._)("p",null,[(0,n._)("a",{href:"https://expressjs.com/fr/",class:"text-reset"},"Express JS")],-1),I=(0,n._)("h6",{class:"text-uppercase fw-bold mb-4"},"Useful links",-1),N=(0,n._)("p",null,[(0,n._)("a",{href:"#!",class:"text-reset"},"Pricing")],-1),P=(0,n._)("p",null,[(0,n._)("a",{href:"#!",class:"text-reset"},"Settings")],-1),E=(0,n._)("p",null,[(0,n._)("a",{href:"#!",class:"text-reset"},"Orders")],-1),U=(0,n._)("p",null,[(0,n._)("a",{href:"#!",class:"text-reset"},"Help")],-1),R=(0,n._)("h6",{class:"text-uppercase fw-bold mb-4"},"Contact",-1),L=(0,n._)("p",null,[(0,n._)("i",{class:"fas fa-home me-3"}),(0,n.Uk)(" Champs-sur-Marne, France ")],-1),A=(0,n._)("div",{class:"containerRow"},[(0,n._)("i",{class:"fas fa-at"}),(0,n._)("p",{style:{"text-align":"center"}}," linasaba.18@gmail.com omranedoo@gmail.com ")],-1),F={class:"containerRow"},H=(0,n._)("div",{class:"containerRow"},[(0,n._)("p",null,[(0,n._)("i",{class:"fab fa-linkedin"}),(0,n._)("a",{class:"margL",href:"https://www.linkedin.com/in/lina-s-59678a157/"},"Lina"),(0,n._)("br"),(0,n._)("a",{class:"margL",href:"https://www.linkedin.com/in/omran-edoo-6a170022a"},"Omran")]),(0,n._)("p",null,[(0,n._)("i",{class:"fab fa-github"}),(0,n._)("a",{class:"margL",href:"https://github.com/LinaSaba"},"Lina"),(0,n._)("br"),(0,n._)("a",{class:"margL",href:"https://github.com/OmranEdoo"},"Omran")])],-1),V=(0,n._)("div",{class:"text-center p-4",style:{"background-color":"rgba(0, 0, 0, 0.05)"}},[(0,n.Uk)(" © 2021 Copyright: "),(0,n._)("a",{class:"text-reset fw-bold",href:"https://mdbootstrap.com/"},"MDBootstrap.com")],-1);function G(e,t,a,o,r,s){const l=(0,n.up)("MDBIcon"),c=(0,n.up)("MDBCol"),i=(0,n.up)("MDBRow"),d=(0,n.up)("MDBContainer"),u=(0,n.up)("MDBFooter");return(0,n.wg)(),(0,n.j4)(u,{text:["center","lg-start","muted"]},{default:(0,n.w5)((()=>[(0,n._)("section",v,[w,(0,n._)("div",null,[(0,n._)("a",g,[(0,n.Wm)(l,{iconStyle:"fab",icon:"facebook-f"})]),(0,n._)("a",_,[(0,n.Wm)(l,{iconStyle:"fab",icon:"twitter"})]),(0,n._)("a",x,[(0,n.Wm)(l,{iconStyle:"fab",icon:"google"})]),(0,n._)("a",B,[(0,n.Wm)(l,{iconStyle:"fab",icon:"instagram"})]),(0,n._)("a",D,[(0,n.Wm)(l,{iconStyle:"fab",icon:"linkedin"})]),(0,n._)("a",y,[(0,n.Wm)(l,{iconStyle:"fab",icon:"github"})])])]),(0,n._)("section",M,[(0,n.Wm)(d,{class:"text-center text-md-start mt-5"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"mt-3"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{md:"3",lg:"4",xl:"3",class:"mx-auto mb-4"},{default:(0,n.w5)((()=>[k,W])),_:1}),(0,n.Wm)(c,{md:"2",lg:"2",xl:"2",class:"mx-auto mb-4"},{default:(0,n.w5)((()=>[S,C,T,j,O])),_:1}),(0,n.Wm)(c,{md:"3",lg:"2",xl:"2",class:"mx-auto mb-4"},{default:(0,n.w5)((()=>[I,N,P,E,U])),_:1}),(0,n.Wm)(c,{md:"4",lg:"3",xl:"3",class:"mx-auto mb-md-0 mb-4"},{default:(0,n.w5)((()=>[R,L,A,(0,n._)("div",F,[(0,n._)("p",null,[(0,n.Wm)(l,{icon:"phone",class:"me-3"}),(0,n.Uk)(" + 01 234 567 88 ")])]),H])),_:1})])),_:1})])),_:1})]),V])),_:1})}var Z={components:{MDBFooter:u.XO,MDBContainer:u.L5,MDBRow:u.uZ,MDBCol:u.TK,MDBIcon:u.vm}};const z=(0,b.Z)(Z,[["render",G]]);var J=z,Y={name:"AboutPage",components:{NavBar:h,FooterBar:J}};const $=(0,b.Z)(Y,[["render",i],["__scopeId","data-v-ee26bb1c"]]);var q=$;(0,o.ri)(q).mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,r){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],r=e[d][2];for(var l=!0,c=0;c<o.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(l=!1,r<s&&(s=r));if(l){e.splice(d--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){a.p="/"}(),function(){var e={443:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,s=o[0],l=o[1],c=o[2],i=0;if(s.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var d=c(a)}for(t&&t(o);i<s.length;i++)r=s[i],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},o=self["webpackChunkstation_meteo"]=self["webpackChunkstation_meteo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(8060)}));o=a.O(o)})();
//# sourceMappingURL=about.0f9bccbf.js.map