(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de6c6"],{"861c":function(e,l,t){"use strict";t.r(l);var o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("h2",[e._v("列固定")]),t("Explain"),t("ColumnFixedLeft"),t("ColumnFixedRight"),t("ColumnFixedLeftRight"),t("ColumnFixedAutoWidth")],1)},n=[],c=function(){var e=this,l=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、属性"),t("code",[e._v("scroll-width")]),e._v("为滚动区域的宽度"),t("br"),e._v(" 2、当外层容器宽度小于"),t("code",[e._v("scroll-width")]),e._v("值时，将会出现横向滚动条；当外层容器宽度大于"),t("code",[e._v("scroll-width")]),e._v("值时，将会跟随容器自适应；当"),t("code",[e._v("scroll-width=0")]),e._v("时，滚动条将根据你的列宽度决定"),t("br"),e._v(" 3、列宽可以不设置、或者设置为百分比、或者为像素值（px）"),t("br"),e._v(" 4、设置了"),t("code",[e._v("scroll-width")]),e._v("属性，列宽单位"),t("strong",[e._v("强烈建议保持一致！")]),t("br")])])])}],r=t("2877"),a={},f=Object(r["a"])(a,c,i,!1,null,null,null),d=f.exports,u=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"左列固定",fileName:"column-fixed-left.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、通过"),t("code",[e._v('scroll-width="1200"')]),e._v("设置滚动区域宽度，通过"),t("code",[e._v('style="width:900px"')]),e._v("设置外层容器宽度"),t("br"),e._v("2、通过"),t("code",[e._v('fixed:"left"')]),e._v("设置需要固定的左列")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    { field: "col9", key: "i", title: "Title9" },\n                    { field: "col10", key: "j", title: "Title10" },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},s=[];function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?b(Object(t),!0).forEach((function(l){p(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function p(e,l,t){return l=v(l),l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function v(e){var l=h(e,"string");return"symbol"===y(l)?l:String(l)}function h(e,l){if("object"!==y(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,l||"default");if("object"!==y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},l=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9"},{field:"col10",key:"j",title:"Title10"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return m({render:e,staticRenderFns:l},t)}()}},T=k,g=Object(r["a"])(T,u,s,!1,null,null,null),_=g.exports,w=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"右列固定",fileName:"column-fixed-right.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、通过"),t("code",[e._v('scroll-width="1200"')]),e._v("设置滚动区域宽度，通过"),t("code",[e._v('style="width:900px"')]),e._v("设置外层容器宽度"),t("br"),e._v("2、通过"),t("code",[e._v('fixed:"right"')]),e._v("设置需要固定的右列")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1" },\n                    { field: "col2", key: "b", title: "Title2" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},O=[];function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function x(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,o)}return t}function P(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?x(Object(t),!0).forEach((function(l){S(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function S(e,l,t){return l=D(l),l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function D(e){var l=E(e,"string");return"symbol"===j(l)?l:String(l)}function E(e,l){if("object"!==j(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,l||"default");if("object"!==j(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}var C={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},l=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1"},{field:"col2",key:"b",title:"Title2"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return P({render:e,staticRenderFns:l},t)}()}},F=C,$=Object(r["a"])(F,w,O,!1,null,null,null),N=$.exports,R=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"左右列固定",fileName:"column-fixed-left-right.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、通过"),t("code",[e._v('scroll-width="1200"')]),e._v("设置滚动区域宽度，通过"),t("code",[e._v('style="width:900px"')]),e._v("设置外层容器宽度"),t("br"),e._v("2、通过"),t("code",[e._v('fixed:"left"')]),e._v("设置需要固定的左列;通过"),t("code",[e._v('fixed:"right"')]),e._v("设置需要固定的右列")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},K=[];function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function A(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,o)}return t}function J(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?A(Object(t),!0).forEach((function(l){W(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function W(e,l,t){return l=q(l),l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function q(e){var l=z(e,"string");return"symbol"===L(l)?l:String(l)}function z(e,l){if("object"!==L(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,l||"default");if("object"!==L(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}var B={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},l=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return J({render:e,staticRenderFns:l},t)}()}},G=B,H=Object(r["a"])(G,R,K,!1,null,null,null),I=H.exports,M=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"‘容器自适应’列固定",fileName:"column-fixed-auto-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、通过"),t("code",[e._v('scroll-width="1600"')]),e._v("设置滚动区域宽度"),t("br"),e._v("2、不设置外层容器宽度。等同于设置"),t("code",[e._v('style="width:100%"')]),t("br"),e._v("3、改变浏览器宽度试试看。当容器宽度小于"),t("code",[e._v("scroll-width")]),e._v("时，出滚动条；大于"),t("code",[e._v("scroll-width")]),e._v("时，将会跟随容器自适应")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :scroll-width="1600"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n        rowKeyFieldName="rowKey"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 10; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                        col9: i,\n                        col10: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},Q=[];function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function V(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,o)}return t}function X(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?V(Object(t),!0).forEach((function(l){Y(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function Y(e,l,t){return l=Z(l),l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function Z(e){var l=ee(e,"string");return"symbol"===U(l)?l:String(l)}function ee(e,l){if("object"!==U(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,l||"default");if("object"!==U(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}var le={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("ve-table",{attrs:{"scroll-width":1600,"border-y":"",columns:e.columns,"table-data":e.tableData,rowKeyFieldName:"rowKey"}})]],2)},l=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}]}},methods:{initTableData:function(){for(var e=[],l=0;l<10;l++)e.push({rowKey:l,col1:l,col2:l,col3:l,col4:l,col5:l,col6:l,col7:l,col8:l,col9:l,col10:l});this.tableData=e}},created:function(){this.initTableData()}};return X({render:e,staticRenderFns:l},t)}()}},te=le,oe=Object(r["a"])(te,M,Q,!1,null,null,null),ne=oe.exports,ce={name:"basic-main",components:{Explain:d,ColumnFixedLeft:_,ColumnFixedRight:N,ColumnFixedLeftRight:I,ColumnFixedAutoWidth:ne}},ie=ce,re=Object(r["a"])(ie,o,n,!1,null,null,null);l["default"]=re.exports}}]);
//# sourceMappingURL=chunk-2d0de6c6.d0579ad8.js.map