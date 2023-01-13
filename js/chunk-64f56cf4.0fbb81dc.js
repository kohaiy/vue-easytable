(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64f56cf4"],{"0fcc":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Data Empty")]),t("Explain"),t("Basic")],1)},r=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、The component itself does not provide API with data empty effect. You can do it yourself. It's more flexible. 2、Here is an example")])])])}],s=t("2877"),l={},c=Object(s["a"])(l,o,i,!1,null,null,null),d=c.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Data Empty",fileName:"basic.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <button class="button-demo" @click="request()">Toggle Request</button>\n        <br />\n        <br />\n        <ve-table :columns="columns" :table-data="tableData" border-y />\n        <div v-show="showEmpty" class="empty-data">Data Empty.</div>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "center",\n                        width: "20%",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "20%",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "30%",\n                    },\n                ],\n                tableData: [],\n                // show empty\n                showEmpty: false,\n            };\n        },\n        methods: {\n            request() {\n                setTimeout(() => {\n                    this.tableData =\n                        this.tableData.length > 0\n                            ? []\n                            : [\n                                  {\n                                      name: "John",\n                                      date: "1900-05-20",\n                                      hobby: "coding and coding repeat",\n                                      address: "No.1 Century Avenue, Shanghai",\n                                  },\n                                  {\n                                      name: "Dickerson",\n                                      date: "1910-06-20",\n                                      hobby: "coding and coding repeat",\n                                      address: "No.1 Century Avenue, Beijing",\n                                  },\n                                  {\n                                      name: "Larsen",\n                                      date: "2000-07-20",\n                                      hobby: "coding and coding repeat",\n                                      address: "No.1 Century Avenue, Chongqing",\n                                  },\n                                  {\n                                      name: "Geneva",\n                                      date: "2010-08-20",\n                                      hobby: "coding and coding repeat",\n                                      address: "No.1 Century Avenue, Xiamen",\n                                  },\n                                  {\n                                      name: "Jami",\n                                      date: "2020-09-20",\n                                      hobby: "coding and coding repeat",\n                                      address: "No.1 Century Avenue, Shenzhen",\n                                  },\n                              ];\n\n                    if (this.tableData.length === 0) {\n                        this.showEmpty = true;\n                    } else {\n                        this.showEmpty = false;\n                    }\n                });\n            },\n        },\n        created() {\n            this.request();\n        },\n    };\n<\/script>\n\n<style>\n    .empty-data {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 200px;\n        width: 100%;\n        color: #666;\n        font-size: 16px;\n        border: 1px solid #eee;\n        border-top: 0;\n    }\n</style>\n')])])])],2)],1)},m=[];function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){h(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function h(e,n,t){return n=f(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){var n=g(e,"string");return"symbol"===b(n)?n:String(n)}function g(e,n){if("object"!==b(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,n||"default");if("object"!==b(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var v={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("button",{staticClass:"button-demo",on:{click:function(n){return e.request()}}},[e._v("Toggle Request")]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-y":""}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showEmpty,expression:"showEmpty"}],staticClass:"empty-data"},[e._v("Data Empty.")])],1)]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center",width:"20%"},{field:"date",key:"b",title:"Date",align:"left",width:"20%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"30%"}],tableData:[],showEmpty:!1}},methods:{request:function(){var e=this;setTimeout((function(){e.tableData=e.tableData.length>0?[]:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}],0===e.tableData.length?e.showEmpty=!0:e.showEmpty=!1}))}},created:function(){this.request()}};return y({render:e,staticRenderFns:n},t)}()}},w=v,E=(t("6284"),Object(s["a"])(w,u,m,!1,null,null,null)),D=E.exports,O={name:"data-empty",components:{Explain:d,Basic:D}},j=O,_=Object(s["a"])(j,a,r,!1,null,null,null);n["default"]=_.exports},6284:function(e,n,t){"use strict";t("8f30")},"8f30":function(e,n,t){}}]);
//# sourceMappingURL=chunk-64f56cf4.0fbb81dc.js.map