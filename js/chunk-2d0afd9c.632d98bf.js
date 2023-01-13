(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afd9c"],{"0fa1":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("列宽设置")]),t("Explain"),t("NoWidth"),t("PercentWidth"),t("PxWidth"),t("LongWord")],1)},a=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、当列宽不设置时，单元格宽度按照内容自动缩放"),t("br"),e._v(" 2、当列宽设置百分比，单元格宽度按照百分比缩放"),t("br"),e._v(" 3、当列宽设置像素值（px），单元格宽度按照像素比缩放"),t("br"),e._v(" 4、表格的固定宽度，需要设置外层容器宽度")])])])}],d=t("2877"),l={},c=Object(d["a"])(l,o,i,!1,null,null,null),u=c.exports,s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"列宽不设置",fileName:"no-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("当列宽不设置时，单元格宽度按照内容自动缩放")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name" },\n                    { field: "date", key: "b", title: "Date" },\n                    { field: "hobby", key: "c", title: "Hobby" },\n                    { field: "address", key: "d", title: "Address" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},b=[];function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){f(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n,t){return n=h(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){var n=g(e,"string");return"symbol"===m(n)?n:String(n)}function g(e,n){if("object"!==m(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var v={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name"},{field:"date",key:"b",title:"Date"},{field:"hobby",key:"c",title:"Hobby"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return p({render:e,staticRenderFns:n},t)}()}},k=v,w=Object(d["a"])(k,s,b,!1,null,null,null),O=w.exports,j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"列宽百分比",fileName:"percent-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("当列宽设置百分比，单元格宽度按照百分比缩放")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name 40%",\n                        width: "40%",\n                    },\n                    { field: "date", key: "b", title: "Tel 20%", width: "20%" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby 20%",\n                        width: "20%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address 20%",\n                        width: "20%",\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},N=[];function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){A(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n,t){return n=P(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e){var n=D(e,"string");return"symbol"===C(n)?n:String(n)}function D(e,n){if("object"!==C(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var x={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name 40%",width:"40%"},{field:"date",key:"b",title:"Tel 20%",width:"20%"},{field:"hobby",key:"c",title:"Hobby 20%",width:"20%"},{field:"address",key:"d",title:"Address 20%",width:"20%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return _({render:e,staticRenderFns:n},t)}()}},E=x,J=Object(d["a"])(E,j,N,!1,null,null,null),B=J.exports,z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"列宽像素值",fileName:"px-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、当列宽设置素值（px），单元格宽度按照像素比缩放。如果不希望缩放，需要设置外层容器宽度"),t("br"),e._v("2、设置像素值，记得不要加单位")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name 400px",\n                        width: 400,\n                    },\n                    { field: "date", key: "b", title: "Tel 200px", width: 200 },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby 200px",\n                        width: 200,\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address 200px",\n                        width: 200,\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},T=[];function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){X(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function X(e,n,t){return n=W(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W(e){var n=q(e,"string");return"symbol"===$(n)?n:String(n)}function q(e,n){if("object"!==$(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var G={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name 400px",width:400},{field:"date",key:"b",title:"Tel 200px",width:200},{field:"hobby",key:"c",title:"Hobby 200px",width:200},{field:"address",key:"d",title:"Address 200px",width:200}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return L({render:e,staticRenderFns:n},t)}()}},F=G,R=Object(d["a"])(F,z,T,!1,null,null,null),I=R.exports,K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"长文本破坏布局",fileName:"long-word.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、当单元格文本内容过多时会破坏布局，此时可以通过样式 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break"}},[e._v("word-break")]),e._v(" 控制"),t("br"),e._v("2、你也可以结合"),t("a",{attrs:{href:"#/zh/doc/table/cell-ellipsis"}},[e._v("单元格省略")]),e._v("功能一起使用")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        word-break：\n        <el-radio-group size="small" v-model="wordBreak">\n            <el-radio-button label="normal">normal</el-radio-button>\n            <el-radio-button label="keep-all">keep-all</el-radio-button>\n            <el-radio-button label="break-all">break-all</el-radio-button>\n            <el-radio-button label="break-word">break-word</el-radio-button>\n        </el-radio-group>\n        <br />\n        <br />\n        <ve-table\n            :style="{\'word-break\':wordBreak}"\n            :columns="columns"\n            :table-data="tableData"\n            :border-around="true"\n            :border-x="true"\n            :border-y="true"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                wordBreak: "normal",\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name 40%",\n                        width: "40%",\n                    },\n                    { field: "date", key: "b", title: "Tel 20%", width: "20%" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby 20%",\n                        width: "20%",\n                        /*   ellipsis: {\n              showTitle: true,\n              lineClamp: 5,\n            }, */\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address 20%",\n                        width: "20%",\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu 大江东去浪淘尽千古风流人物故垒西边人道是三国周郎赤壁乱石穿空惊涛拍岸卷起千堆雪江山如画一时多少豪杰",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},M=[];function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){Y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Y(e,n,t){return n=Z(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Z(e){var n=ee(e,"string");return"symbol"===Q(n)?n:String(n)}function ee(e,n){if("object"!==Q(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var ne={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[e._v("\n        word-break：\n        "),t("el-radio-group",{attrs:{size:"small"},model:{value:e.wordBreak,callback:function(n){e.wordBreak=n},expression:"wordBreak"}},[t("el-radio-button",{attrs:{label:"normal"}},[e._v("normal")]),e._v(" "),t("el-radio-button",{attrs:{label:"keep-all"}},[e._v("keep-all")]),e._v(" "),t("el-radio-button",{attrs:{label:"break-all"}},[e._v("break-all")]),e._v(" "),t("el-radio-button",{attrs:{label:"break-word"}},[e._v("break-word")])],1),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("ve-table",{style:{"word-break":e.wordBreak},attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})],1)]],2)},n=[],t={data:function(){return{wordBreak:"normal",columns:[{field:"name",key:"a",title:"Name 40%",width:"40%"},{field:"date",key:"b",title:"Tel 20%",width:"20%"},{field:"hobby",key:"c",title:"Hobby 20%",width:"20%"},{field:"address",key:"d",title:"Address 20%",width:"20%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu 大江东去浪淘尽千古风流人物故垒西边人道是三国周郎赤壁乱石穿空惊涛拍岸卷起千堆雪江山如画一时多少豪杰",address:"No.1 Century Avenue, Xiamen"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return V({render:e,staticRenderFns:n},t)}()}},te=ne,re=Object(d["a"])(te,K,M,!1,null,null,null),ae=re.exports,oe={name:"basic-main",components:{Explain:u,NoWidth:O,PercentWidth:B,PxWidth:I,LongWord:ae}},ie=oe,de=Object(d["a"])(ie,r,a,!1,null,null,null);n["default"]=de.exports}}]);
//# sourceMappingURL=chunk-2d0afd9c.632d98bf.js.map