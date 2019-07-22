(function(e){function t(t){for(var r,s,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)s=o[d],i[s]&&p.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"098b":function(e,t,n){"use strict";var r=n("8d58"),i=n.n(r);i.a},"201e":function(e,t,n){"use strict";var r=n("aee3"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Projects"),n("Footer")],1)},a=[],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"depth big",attrs:{title:"CHRIS FOX"}},[e._v("CHRIS FOX")]),n("div",{staticClass:"depth medium",attrs:{title:"Front-End Developer"}},[e._v("Front-End Developer")])])}],l={},c=l,u=(n("201e"),n("2877")),d=Object(u["a"])(c,s,o,!1,null,"17a4f778",null),p=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("FilterProjects",{on:{filterChange:e.filterChanged}}),n("div",{staticClass:"project-area"},[n("ProjectList",{attrs:{items:e.items,filters:e.filters}})],1)],1)},h=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"selection-wrapper"},[n("div",{staticClass:"styled-button blue semi-square",on:{click:function(){e.showFilters=!e.showFilters}}},[n("input",{attrs:{type:"button",value:"Filter"}})])]),n("transition",{attrs:{name:"grow"}},[e.showFilters?n("div",{staticClass:"filter-styles"},e._l(e.FilterItems,function(t){return n("FilterItem",{key:t.id,attrs:{text:t.id,enabled:t.enabled},on:{filterItemChanged:e.adjustFilters}})}),1):e._e()])],1)},m=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{id:e.text.toLowerCase(),type:"checkbox"},domProps:{checked:e.enabled},on:{change:e.handleChange}}),n("label",{attrs:{for:e.text.toLowerCase()}},[e._v(e._s(e.text))])])},b=[],_=(n("3e8f"),{props:{text:String,enabled:Boolean},methods:{handleChange:function(e){this.$emit("filterItemChanged",this.text)}}}),j=_,L=Object(u["a"])(j,v,b,!1,null,"753ff307",null),C=L.exports,y={components:{FilterItem:C},data:function(){return{filter:"all",showFilters:!1,FilterItems:[{id:"HTML",enabled:!1},{id:"C#",enabled:!1},{id:"Python",enabled:!1},{id:"React",enabled:!1},{id:"VueJs",enabled:!1},{id:"CSS",enabled:!1},{id:"Javascript",enabled:!1},{id:"Android",enabled:!1}]}},mounted:function(){},methods:{onChange:function(e){this.$emit("filterChange",this.filter)},adjustFilters:function(e){for(var t=0;t<this.FilterItems.length;t++)if(this.FilterItems[t].id===e){this.FilterItems[t].enabled=!this.FilterItems[t].enabled;var n=[];for(t=0;t<this.FilterItems.length;t++)this.FilterItems[t].enabled&&n.push(this.FilterItems[t].id.toLowerCase().trim());this.$emit("filterChange",n)}}}},w=y,k=(n("b187"),Object(u["a"])(w,g,m,!1,null,"fce15a18",null)),x=k.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},e._l(e.matchingProjects,function(e){return n("ProjectItem",{key:e.id,attrs:{project:e}})}),1)},F=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("img",{attrs:{src:e.actualURL}}),n("div",{staticClass:"content"},[n("h2",[e._v(e._s(e.project.title))]),n("div",{staticClass:"language-style"},[n("h3",[e._v("Technologies:")]),e._l(e.project.languages,function(t){return n("div",[e._v("\n                "+e._s(t)+"\n            ")])})],2),e._l(e.project.desc,function(t){return n("div",[n("p",[e._v(e._s(t))])])}),n("div",{staticClass:"link"},[n("a",{attrs:{href:e.project.goToLink,target:"_blank",rel:"noopener noreferrer"}},[e._v("Go to")])])],2)])},I=[],O={data:function(){return{publicPath:"/"}},props:{project:Object},computed:{actualURL:function(){return this.project.imgURL?this.project.imgURL:"https://via.placeholder.com/250x150"}}},R=O,T=(n("098b"),Object(u["a"])(R,P,I,!1,null,"1aabcc88",null)),U=T.exports,$={components:{ProjectItem:U},props:{items:Array,filters:{default:["html","c#","python","react","vuejs","css","javascript","android"],type:Array}},computed:{matchingProjects:function(){var e=this;if(0==this.filters.length)return this.items;for(var t=[],n=0;n<this.items.length;n++)this.items[n].languages.some(function(t){return e.filters.indexOf(t.toLowerCase())>=0})&&t.push(this.items[n]);return t}}},A=$,E=(n("cdfd"),Object(u["a"])(A,S,F,!1,null,"9aba4224",null)),M=E.exports,J=[{id:1,title:"Star Wars Match Up",languages:["React","HTML","CSS","Javascript"],imgURL:"./Images/StarWars.png",goToLink:"https://highdivinefox.github.io/Star-Wars-Match-up/build/",desc:["A simple React app that give you a random scenario, two characters, and asks you to pick the winner.","This app fetches data form the Star Wars API (swapi.co)."]},{id:2,title:"Letter Links",languages:["C#","Android"],imgURL:"./Images/Screen2.PNG",goToLink:"https://play.google.com/store/apps/details?id=com.GamesInADen.LetterLinks&hl=en_AU",desc:["A word-based puzzle game for Android devices. Developed in only a single month and built using Unity3d."]},{id:3,title:"Letter Links Puzzle Creator",languages:["Python"],imgURL:"./Images/LetterLinkPuzzleCreator.png",goToLink:"#",desc:["A supplementary app used to create puzzles for Letter Links.","This app checks the letters in a provided word for all possible combinations that make actual words and saves them."]},{id:4,title:"Web Site Design Mock-ups",languages:["CSS","HTML","Javascript"],imgURL:"./Images/WebDesigns.png",goToLink:"#",desc:["Various page designs"]},{id:5,title:"Reddit Collage",languages:["Javascript","HTML","VueJS","CSS"],imgURL:"./Images/Collage.png",goToLink:"https://highdivinefox.github.io/reddit-collage/",desc:["An infinite scrolling collage of images sourced from reddit"]},{id:6,title:"Six",languages:["React"],imgURL:"",goToLink:"#",desc:["Pit two Star Wars characters against each other. You choose you goes to the next round"]},{id:7,title:"Seven",languages:["VueJS"],imgURL:"",goToLink:"#",desc:["Pit two Star Wars characters against each other. You choose you goes to the next round"]}],z={components:{FilterProjects:x,ProjectList:M},data:function(){return{filters:["html","c#","python","react","vuejs","css","javascript","android"],items:J}},methods:{filterChanged:function(e){this.filters=e}}},H=z,W=(n("8935"),Object(u["a"])(H,f,h,!1,null,"72e30771",null)),D=W.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},G=[],X={},Y=X,q=(n("7f13"),Object(u["a"])(Y,V,G,!1,null,"6588edcc",null)),B=q.exports,N={name:"app",components:{Header:p,Projects:D,Footer:B}},K=N,Q=(n("034f"),Object(u["a"])(K,i,a,!1,null,null,null)),Z=Q.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Z)}}).$mount("#app")},"64a9":function(e,t,n){},"7f13":function(e,t,n){"use strict";var r=n("d9ce"),i=n.n(r);i.a},8935:function(e,t,n){"use strict";var r=n("ed98"),i=n.n(r);i.a},"8d58":function(e,t,n){},ab0e:function(e,t,n){},aee3:function(e,t,n){},b187:function(e,t,n){"use strict";var r=n("ab0e"),i=n.n(r);i.a},ccd9:function(e,t,n){},cdfd:function(e,t,n){"use strict";var r=n("ccd9"),i=n.n(r);i.a},d9ce:function(e,t,n){},ed98:function(e,t,n){}});
//# sourceMappingURL=app.a33b16ed.js.map