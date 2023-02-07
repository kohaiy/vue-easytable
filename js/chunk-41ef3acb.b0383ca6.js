(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41ef3acb"],{"378a":function(t,e,n){},5111:function(t,e,n){"use strict";n("378a")},a1fe:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Loading 加载")]),n("Usage"),n("Container"),n("Fullscreen"),n("Custom"),n("Collection"),n("Api")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"使用方法",fileName:"usage.md"}}),n("p",[t._v("在你需要的地方引用")]),t._m(0),n("p",[t._v("调用")]),t._m(1),n("anchor",{attrs:{"is-edit":"",label:"全局使用",fileName:"usage.md"}}),n("p",[t._v("将 veLoading 组件挂载到 Vue 的 prototype 原型上，便于全局调用")]),t._m(2),n("p",[t._v("调用")]),t._m(3)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-javascript"},[t._v('import Vue from "vue";\nimport { veLoading } from "vue-easytable";\n')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-javascript"},[t._v('veLoading({\n    target: "#loading-1",\n    name: "grid",\n    tip: "loading...",\n});\n')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-javascript"},[t._v('import Vue from "vue";\nimport { veLoading } from "vue-easytable";\n\nVue.prototype.$veLoading = veLoading;\n')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-javascript"},[t._v('this.$veLoading({\n    target: "#loading-1",\n    name: "grid",\n    tip: "loading...",\n});\n')])])}],c=n("2877"),l={},s=Object(c["a"])(l,a,i,!1,null,null,null),d=s.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"区域加载",fileName:"container.md"}}),n("p",[t._v("在表格等容器中显示 Loading 效果")]),n("demo-block",[n("div",[n("p",[t._v("1、通过 "),n("code",[t._v("target")]),t._v(" 参数指定 Loading 的容器。"),n("code",[t._v("target")]),t._v("为 DOM 对象或 字符串选择器（可以通过"),n("code",[t._v("document.querySelector")]),t._v("获取的字符串）"),n("br"),t._v("2、"),n("code",[t._v("name")]),t._v("参数指定加载效果类型名称"),n("br"),t._v("3、Loading 实例包含"),n("code",[t._v("show")]),t._v("、"),n("code",[t._v("close")]),t._v("、"),n("code",[t._v("destroy")]),t._v("3 个方法")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <button class="button-demo" @click="show()">开启 Loading</button>\n        <button class="button-demo" @click="close()">关闭 Loading</button>\n        <br />\n        <br />\n        <ve-table id="loading-container" :columns="columns" :table-data="tableData" />\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                loadingInstance: null,\n                columns: [\n                    { field: "name", key: "a", title: "Name", align: "center" },\n                    { field: "date", key: "b", title: "Date", align: "left" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            show() {\n                this.loadingInstance.show();\n            },\n            close() {\n                this.loadingInstance.close();\n            },\n        },\n        mounted() {\n            this.loadingInstance = this.$veLoading({\n                target: document.querySelector("#loading-container"),\n                // 等同于\n                // target:"#loading-container"\n                name: "wave",\n            });\n            this.show();\n        },\n        destroyed() {\n            this.loadingInstance.destroy();\n        },\n    };\n<\/script>\n')])])])],2)],1)},v=[];function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e=p(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=h(t,"string");return"symbol"===m(e)?e:String(e)}function h(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var _={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("button",{staticClass:"button-demo",on:{click:function(e){return t.show()}}},[t._v("开启 Loading")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.close()}}},[t._v("关闭 Loading")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("ve-table",{attrs:{id:"loading-container",columns:t.columns,"table-data":t.tableData}})],1)]],2)},e=[],n={data:function(){return{loadingInstance:null,columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{show:function(){this.loadingInstance.show()},close:function(){this.loadingInstance.close()}},mounted:function(){this.loadingInstance=this.$veLoading({target:document.querySelector("#loading-container"),name:"wave"}),this.show()},destroyed:function(){this.loadingInstance.destroy()}};return g({render:t,staticRenderFns:e},n)}()}},y=_,w=Object(c["a"])(y,u,v,!1,null,null,null),O=w.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"整屏加载",fileName:"fullscreen.md"}}),n("demo-block",[n("div",[n("p",[t._v("1、通过"),n("code",[t._v("fullscreen")]),t._v("参数，指定 Loading 全屏展示"),n("br"),t._v("2、通过"),n("code",[t._v("lock")]),t._v("参数，指定禁止鼠标滚动")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <button class="button-demo" @click="show()">开启 Loading</button>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                loadingInstance: null,\n            };\n        },\n        methods: {\n            show() {\n                this.loadingInstance.show();\n\n                setTimeout(() => {\n                    this.loadingInstance.close();\n                }, 2000);\n            },\n        },\n        mounted() {\n            this.loadingInstance = this.$veLoading({\n                fullscreen: true,\n                name: "bounce",\n                lock: true,\n            });\n        },\n        destroyed() {\n            this.loadingInstance.destroy();\n        },\n    };\n<\/script>\n')])])])],2)],1)},S=[];function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){L(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t,e,n){return e=I(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t){var e=E(t,"string");return"symbol"===C(e)?e:String(e)}function E(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==C(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var N={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("button",{staticClass:"button-demo",on:{click:function(e){return t.show()}}},[t._v("开启 Loading")])])]],2)},e=[],n={data:function(){return{loadingInstance:null}},methods:{show:function(){var t=this;this.loadingInstance.show(),setTimeout((function(){t.loadingInstance.close()}),2e3)}},mounted:function(){this.loadingInstance=this.$veLoading({fullscreen:!0,name:"bounce",lock:!0})},destroyed:function(){this.loadingInstance.destroy()}};return P({render:t,staticRenderFns:e},n)}()}},$=N,D=Object(c["a"])($,j,S,!1,null,null,null),A=D.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"自定义",fileName:"custom.md"}}),n("p",[t._v("你还可以自定义加载文案、背景色、大小")]),n("demo-block",[n("div",[n("p",[t._v("1、"),n("code",[t._v("color")]),t._v(" 设置加载效果的颜色"),n("br"),t._v("2、"),n("code",[t._v("tip")]),t._v("设置加载文案"),n("br"),t._v("2、"),n("code",[t._v("overlayBackgroundColor")]),t._v("设置遮罩背景色，可以指定 "),n("a",{attrs:{href:"https://www.w3schools.com/cssref/func_rgba.asp"}},[t._v("rgba")]),t._v("，让背景变得透明")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <button class="button-demo" @click="show()">开启 Loading</button>\n        <button class="button-demo" @click="close()">关闭 Loading</button>\n        <br />\n        <br />\n        <div\n            id="custom-loading-container"\n            style="width:100%;height:250px;background-color:#2980b9;"\n        />\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                loadingInstance: null,\n            };\n        },\n        methods: {\n            show() {\n                this.loadingInstance.show();\n            },\n            close() {\n                this.loadingInstance.close();\n            },\n        },\n        mounted() {\n            this.loadingInstance = this.$veLoading({\n                target: document.querySelector("#custom-loading-container"),\n                name: "wave",\n                color: "#fff",\n                tip: "loading...",\n                overlayBackgroundColor: "rgba(255, 255, 255, 0.1)",\n            });\n            this.show();\n        },\n        destroyed() {\n            this.loadingInstance.destroy();\n        },\n    };\n<\/script>\n')])])])],2)],1)},q=[];function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){M(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t,e,n){return e=T(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t){var e=V(t,"string");return"symbol"===B(e)?e:String(e)}function V(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==B(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var R={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("button",{staticClass:"button-demo",on:{click:function(e){return t.show()}}},[t._v("开启 Loading")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.close()}}},[t._v("关闭 Loading")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticStyle:{width:"100%",height:"250px","background-color":"#2980b9"},attrs:{id:"custom-loading-container"}})])]],2)},e=[],n={data:function(){return{loadingInstance:null}},methods:{show:function(){this.loadingInstance.show()},close:function(){this.loadingInstance.close()}},mounted:function(){this.loadingInstance=this.$veLoading({target:document.querySelector("#custom-loading-container"),name:"wave",color:"#fff",tip:"loading...",overlayBackgroundColor:"rgba(255, 255, 255, 0.1)"}),this.show()},destroyed:function(){this.loadingInstance.destroy()}};return J({render:t,staticRenderFns:e},n)}()}},U=R,G=Object(c["a"])(U,x,q,!1,null,null,null),z=G.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("anchor",{attrs:{label:"loading 集合","is-edit":!1}},[n("div",{staticClass:"loading-container"},t._l(Object.values(t.SPIN_NAMES),(function(e){return n("div",{key:e,staticClass:"loading-item"},[n("div",{staticClass:"loading-item-spin",attrs:{id:"loading-"+e}}),n("span",{staticClass:"loading-name"},[t._v(t._s(e))])])})),0)])},W=[],X={data:function(){return{SPIN_NAMES:{PLANE:"plane",GRID:"grid",WAVE:"wave",FLOW:"flow",BOUNCE:"bounce",PULSE:"pulse"}}},mounted:function(){var t=this;Object.values(this.SPIN_NAMES).forEach((function(e){t.$veLoading({target:"#loading-".concat(e),name:e}).show()}))}},K=X,Q=(n("5111"),Object(c["a"])(K,H,W,!1,null,"352f34cd",null)),Y=Q.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"API",fileName:"api.md"}}),n("h3",[t._v("props")]),t._m(0),n("h3",[t._v("methods")]),t._m(1)],1)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("name")]),n("td",[t._v("加载效果类型名称")]),n("td",[n("code",[t._v("String")])]),n("td",[t._v("见“Loading 集合”示例")]),n("td",[t._v('"plane"')])]),n("tr",[n("td",[t._v("target")]),n("td",[t._v("DOM 对象 或 可以通过 document.querySelector 获取的字符串")]),n("td",[n("code",[t._v("Object | String")])]),n("td",[t._v("-")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("fullscreen")]),n("td",[t._v("是否全屏展示")]),n("td",[n("code",[t._v("Boolean")])]),n("td",[t._v("-")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("tip")]),n("td",[t._v("加载文案")]),n("td",[n("code",[t._v("String")])]),n("td",[t._v("-")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("color")]),n("td",[t._v("加载图标的颜色")]),n("td",[n("code",[t._v("String")])]),n("td",[t._v("-")]),n("td",[t._v('"#1890ff"')])]),n("tr",[n("td",[t._v("overlayBackgroundColor")]),n("td",[t._v("遮罩背景色")]),n("td",[n("code",[t._v("String")])]),n("td",[t._v("-")]),n("td",[t._v('"rgba(255, 255, 255, 0.5)"')])]),n("tr",[n("td",[t._v("height")]),n("td",[t._v("加载图标的高度")]),n("td",[n("code",[t._v("String | Number")])]),n("td",[t._v("-")]),n("td",[t._v("40")])]),n("tr",[n("td",[t._v("width")]),n("td",[t._v("加载图标的宽度")]),n("td",[n("code",[t._v("String | Number")])]),n("td",[t._v("-")]),n("td",[t._v("40")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",[t._v("方法名称")]),n("th",[t._v("说明")]),n("th",[t._v("参数")])])]),n("tbody",[n("tr",[n("td",[t._v("show")]),n("td",[t._v("展示 Loading 效果")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("close")]),n("td",[t._v("关闭 Loading 效果")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("destroy")]),n("td",[t._v("默认关闭不会销毁，需要手动调用销毁 Loading")]),n("td",[t._v("-")])])])])}],et={},nt=Object(c["a"])(et,Z,tt,!1,null,null,null),ot=nt.exports,rt={components:{Usage:d,Container:O,Fullscreen:A,Custom:z,Collection:Y,Api:ot}},at=rt,it=Object(c["a"])(at,o,r,!1,null,null,null);e["default"]=it.exports}}]);
//# sourceMappingURL=chunk-41ef3acb.b0383ca6.js.map