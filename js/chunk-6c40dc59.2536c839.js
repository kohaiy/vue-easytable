(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c40dc59"],{"0ecc":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"footer 列合并",fileName:"cell-span.md"}}),t("demo-block",[t("div",[t("p",[n._v("设置 footer 汇总第 1 行"),t("code",[n._v("date")]),n._v("列和"),t("code",[n._v("hoby")]),n._v("列合并。 同时需要指定第 2 行"),t("code",[n._v("hoby")]),n._v("列不渲染")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <ve-table\n        border-y\n        fixed-header\n        :max-height="300"\n        :columns="columns"\n        :table-data="tableData"\n        :footer-data="footerData"\n        rowKeyFieldName="rowKey"\n        :cell-span-option="cellSpanOption"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                cellSpanOption: {\n                    footerCellSpan: this.footerCellSpan,\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        width: 200,\n                        align: "center",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 200,\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address", width: "" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            // footer cell span\n            footerCellSpan({ row, column, rowIndex }) {\n                if (rowIndex === 0) {\n                    if (column.field === "date") {\n                        return {\n                            rowspan: 1,\n                            colspan: 2,\n                        };\n                    }\n                    // does not need to be rendered\n                    else if (column.field === "hobby") {\n                        return {\n                            rowspan: 0,\n                            colspan: 0,\n                        };\n                    }\n                }\n            },\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 15; i++) {\n                    data.push({\n                        rowKey: i,\n                        name: i,\n                        date: i,\n                        hobby: i,\n                        address: i,\n                    });\n                }\n                this.tableData = data;\n            },\n\n            initFooterData() {\n                this.footerData = [\n                    {\n                        rowKey: 0,\n                        name: "平均值",\n                        date: 213,\n                        hobby: 355,\n                        address: 189,\n                    },\n                    {\n                        rowKey: 1,\n                        name: "汇总值",\n                        date: 1780,\n                        hobby: 890,\n                        address: 2988,\n                    },\n                ];\n            },\n        },\n        created() {\n            this.initTableData();\n            this.initFooterData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},r=[];function a(n){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(n)}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e,t){return e=c(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n){var e=s(n,"string");return"symbol"===a(e)?e:String(e)}function s(n,e){if("object"!==a(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,e||"default");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}var u={name:"component-doc",components:{"element-demo0":function(){var n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("ve-table",{attrs:{"border-y":"","fixed-header":"","max-height":300,columns:n.columns,"table-data":n.tableData,"footer-data":n.footerData,rowKeyFieldName:"rowKey","cell-span-option":n.cellSpanOption}})]],2)},e=[],t={data:function(){return{cellSpanOption:{footerCellSpan:this.footerCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{footerCellSpan:function(n){n.row;var e=n.column,t=n.rowIndex;if(0===t){if("date"===e.field)return{rowspan:1,colspan:2};if("hobby"===e.field)return{rowspan:0,colspan:0}}},initTableData:function(){for(var n=[],e=0;e<15;e++)n.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=n},initFooterData:function(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created:function(){this.initTableData(),this.initFooterData()}};return d({render:n,staticRenderFns:e},t)}()}},b=u,p=t("2877"),y=Object(p["a"])(b,o,r,!1,null,null,null);e["a"]=y.exports},"13ad":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h2",[n._v("单元格合并")]),t("Explain"),t("BodyColspan"),t("BodyRowspan"),t("FooterCellSpan"),t("CustomContent")],1)},r=[],a=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},i=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[n._v("1、通过方法"),t("code",[n._v("cellSpanOption")]),n._v("设置合并单元格"),t("br"),n._v(" 2、通过方法"),t("code",[n._v("bodyCellSpan({row,column,rowIndx})")]),n._v("设置 body 单元格合并"),t("br"),n._v(" 3、通过方法"),t("code",[n._v("footerCellSpan({row,column,rowIndx})")]),n._v("设置 footer 单元格合并"),t("br"),n._v(" 4、属性 "),t("code",[n._v("colspan")]),n._v(" 指定合并的列数；属性 "),t("code",[n._v("rowspan")]),n._v(" 指定合并的行数"),t("br"),n._v(" 5、为实现功能，需要指定不需要渲染的列，设置"),t("code",[n._v("colspan")]),n._v("、 "),t("code",[n._v("rowspan")]),n._v(" 的值为 0 即可"),t("br"),n._v(" 6、默认合并后的内容，是渲染的单元格的内容。若要自定义单元格内容，可以结合"),t("code",[n._v("renderBodyCell({row,column,rowIndex},h)")]),n._v("实现"),t("br"),n._v(" 7、具体见下面的示例")])])])}],d=t("2877"),l={},c=Object(d["a"])(l,a,i,!1,null,null,null),s=c.exports,u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"body 列合并",fileName:"body-colspan.md"}}),t("demo-block",[t("div",[t("p",[n._v("设置第 2 行"),t("code",[n._v("date")]),n._v("列和"),t("code",[n._v("hoby")]),n._v("列合并。 同时需要指定第 2 行"),t("code",[n._v("hoby")]),n._v("列不渲染")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n        :cell-span-option="cellSpanOption"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                cellSpanOption: {\n                    bodyCellSpan: this.bodyCellSpan,\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        width: 200,\n                        align: "center",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 200,\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address", width: "" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            // body cell span\n            bodyCellSpan({ row, column, rowIndex }) {\n                if (rowIndex === 1) {\n                    if (column.field === "date") {\n                        return {\n                            rowspan: 1,\n                            colspan: 2,\n                        };\n                    }\n                    // does not need to be rendered\n                    else if (column.field === "hobby") {\n                        return {\n                            rowspan: 0,\n                            colspan: 0,\n                        };\n                    }\n                }\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},b=[];function p(n){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},p(n)}function y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){f(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function f(n,e,t){return e=h(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function h(n){var e=g(n,"string");return"symbol"===p(e)?e:String(e)}function g(n,e){if("object"!==p(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,e||"default");if("object"!==p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}var v={name:"component-doc",components:{"element-demo0":function(){var n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("ve-table",{attrs:{columns:n.columns,"table-data":n.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":n.cellSpanOption}})]],2)},e=[],t={data:function(){return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan:function(n){n.row;var e=n.column,t=n.rowIndex;if(1===t){if("date"===e.field)return{rowspan:1,colspan:2};if("hobby"===e.field)return{rowspan:0,colspan:0}}}}};return m({render:n,staticRenderFns:e},t)}()}},w=v,S=Object(d["a"])(w,u,b,!1,null,null,null),O=S.exports,C=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"body 行合并",fileName:"body-rowspan.md"}}),t("demo-block",[t("div",[t("p",[n._v("设置"),t("code",[n._v("name")]),n._v("列，第 2 和 3 行合并。 同时需要指定"),t("code",[n._v("name")]),n._v("列第 3 行不渲染")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n        :cell-span-option="cellSpanOption"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                cellSpanOption: {\n                    bodyCellSpan: this.bodyCellSpan,\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        width: 200,\n                        align: "center",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 200,\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address", width: "" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            // body cell span\n            bodyCellSpan({ row, column, rowIndex }) {\n                if (column.field === "name") {\n                    if (rowIndex === 1) {\n                        return {\n                            rowspan: 2,\n                            colspan: 1,\n                        };\n                    }\n                    // does not need to be rendered\n                    else if (rowIndex === 2) {\n                        return {\n                            rowspan: 0,\n                            colspan: 0,\n                        };\n                    }\n                }\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},_=[];function j(n){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},j(n)}function D(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function N(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?D(Object(t),!0).forEach((function(e){x(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function x(n,e,t){return e=k(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function k(n){var e=A(n,"string");return"symbol"===j(e)?e:String(e)}function A(n,e){if("object"!==j(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,e||"default");if("object"!==j(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}var P={name:"component-doc",components:{"element-demo0":function(){var n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("ve-table",{attrs:{columns:n.columns,"table-data":n.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":n.cellSpanOption}})]],2)},e=[],t={data:function(){return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan:function(n){n.row;var e=n.column,t=n.rowIndex;if("name"===e.field){if(1===t)return{rowspan:2,colspan:1};if(2===t)return{rowspan:0,colspan:0}}}}};return N({render:n,staticRenderFns:e},t)}()}},E=P,I=Object(d["a"])(E,C,_,!1,null,null,null),B=I.exports,J=t("0ecc"),F=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"自定义合并内容",fileName:"custom-content.md"}}),t("demo-block",[t("div",[t("p",[n._v("结合"),t("code",[n._v("renderBodyCell({row,column,rowIndex},h)")]),n._v("可以实现自定义合并后的内容")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n        :cell-span-option="cellSpanOption"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                cellSpanOption: {\n                    bodyCellSpan: this.bodyCellSpan,\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        width: 200,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            if (column.field === "name") {\n                                if (rowIndex === 1) {\n                                    return (\n                                        <span style="color:#1890ff;">this is custom content</span>\n                                    );\n                                }\n                            }\n\n                            return row[column.field];\n                        },\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        width: 200,\n                        align: "left",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            if (rowIndex === 1) {\n                                if (column.field === "date") {\n                                    return (\n                                        <span style="color:#1890ff;">this is custom content</span>\n                                    );\n                                }\n                            }\n\n                            return row[column.field];\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 200,\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address", width: "" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            // body cell span\n            bodyCellSpan({ row, column, rowIndex }) {\n                // colspan\n                if (rowIndex === 1) {\n                    if (column.field === "date") {\n                        return {\n                            rowspan: 1,\n                            colspan: 2,\n                        };\n                    }\n                    // does not need to be rendered\n                    else if (column.field === "hobby") {\n                        return {\n                            rowspan: 0,\n                            colspan: 0,\n                        };\n                    }\n                }\n\n                // rowspan\n                if (column.field === "name") {\n                    if (rowIndex === 1) {\n                        return {\n                            rowspan: 2,\n                            colspan: 1,\n                        };\n                    }\n                    // does not need to be rendered\n                    else if (rowIndex === 2) {\n                        return {\n                            rowspan: 0,\n                            colspan: 0,\n                        };\n                    }\n                }\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},$=[];function K(n){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},K(n)}function q(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function z(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?q(Object(t),!0).forEach((function(e){G(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function G(n,e,t){return e=H(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function H(n){var e=L(n,"string");return"symbol"===K(e)?e:String(e)}function L(n,e){if("object"!==K(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,e||"default");if("object"!==K(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}var T={name:"component-doc",components:{"element-demo0":function(){var n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("ve-table",{attrs:{columns:n.columns,"table-data":n.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":n.cellSpanOption}})]],2)},e=[],t={data:function(){this.$createElement;return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center",renderBodyCell:function(n,e){var t=n.row,o=n.column,r=n.rowIndex;return"name"===o.field&&1===r?e("span",{style:"color:#1890ff;"},["this is custom content"]):t[o.field]}},{field:"date",key:"b",title:"Date",width:200,align:"left",renderBodyCell:function(n,e){var t=n.row,o=n.column,r=n.rowIndex;return 1===r&&"date"===o.field?e("span",{style:"color:#1890ff;"},["this is custom content"]):t[o.field]}},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan:function(n){n.row;var e=n.column,t=n.rowIndex;if(1===t){if("date"===e.field)return{rowspan:1,colspan:2};if("hobby"===e.field)return{rowspan:0,colspan:0}}if("name"===e.field){if(1===t)return{rowspan:2,colspan:1};if(2===t)return{rowspan:0,colspan:0}}}}};return z({render:n,staticRenderFns:e},t)}()}},X=T,R=Object(d["a"])(X,F,$,!1,null,null,null),M=R.exports,Q={name:"cell-span",components:{Explain:s,BodyColspan:O,BodyRowspan:B,FooterCellSpan:J["a"],CustomContent:M}},U=Q,V=Object(d["a"])(U,o,r,!1,null,null,null);e["default"]=V.exports}}]);
//# sourceMappingURL=chunk-6c40dc59.2536c839.js.map