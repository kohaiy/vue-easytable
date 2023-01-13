(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20efb8"],{b24f:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h2",[n._v("Enable Loading")]),t("Explain"),t("basic")],1)},a=[],r=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},i=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[n._v("It's very simple for the table component to start loading. You can start loading when you request data"),t("br")])])])}],c=t("2877"),s={},l=Object(c["a"])(s,r,i,!1,null,null,null),d=l.exports,u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Usage",fileName:"basic.md"}}),n._m(0),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <div>\n        <button class="button-demo" @click="show()">Open</button>\n        <button class="button-demo" @click="close()">Close</button>\n        <br />\n        <br />\n        <ve-table id="loading-container" :columns="columns" :table-data="tableData" />\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                loadingInstance: null,\n                columns: [\n                    { field: "name", key: "a", title: "Name", align: "center" },\n                    { field: "date", key: "b", title: "Date", align: "left" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            show() {\n                this.loadingInstance.show();\n            },\n            close() {\n                this.loadingInstance.close();\n            },\n        },\n        mounted() {\n            this.loadingInstance = this.$veLoading({\n                target: document.querySelector("#loading-container"),\n                // 等同于\n                // target:"#loading-container"\n                name: "wave",\n            });\n            this.show();\n        },\n        destroyed() {\n            this.loadingInstance.destroy();\n        },\n    };\n<\/script>\n')])])])],2)],1)},b=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("More about Loading, Please refer to "),t("a",{attrs:{href:"#/en/doc/base/loading"}},[n._v("Loading component")])])}];function m(n){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m(n)}function g(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){h(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function h(n,e,t){return e=p(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p(n){var e=y(n,"string");return"symbol"===m(e)?e:String(e)}function y(n,e){if("object"!==m(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,e||"default");if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}var v={name:"component-doc",components:{"element-demo0":function(){var n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("div",[t("button",{staticClass:"button-demo",on:{click:function(e){return n.show()}}},[n._v("Open")]),n._v(" "),t("button",{staticClass:"button-demo",on:{click:function(e){return n.close()}}},[n._v("Close")]),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("ve-table",{attrs:{id:"loading-container",columns:n.columns,"table-data":n.tableData}})],1)]],2)},e=[],t={data:function(){return{loadingInstance:null,columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{show:function(){this.loadingInstance.show()},close:function(){this.loadingInstance.close()}},mounted:function(){this.loadingInstance=this.$veLoading({target:document.querySelector("#loading-container"),name:"wave"}),this.show()},destroyed:function(){this.loadingInstance.destroy()}};return f({render:n,staticRenderFns:e},t)}()}},w=v,_=Object(c["a"])(w,u,b,!1,null,null,null),O=_.exports,j={name:"basic-main",components:{Explain:d,Basic:O}},k=j,C=Object(c["a"])(k,o,a,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d20efb8.7c775136.js.map