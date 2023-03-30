(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bb7c056"],{2258:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Instance Methods")]),n("Explain"),n("ScrollTo"),n("ScrollToColKey"),n("ScrollToRowKey"),n("API",{attrs:{title:"API",anchor:"API",desc:"Instance Methods"}})],1)},o=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[t._v("1、Instance methods can be accessed directly through "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"}},[t._v("ref")])])])])}],r=n("2877"),a={},s=Object(r["a"])(a,c,i,!1,null,null,null),d=s.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"scrollTo",fileName:"scroll-to.md"}}),n("demo-block",[n("div",[n("p",[t._v("1、Scroll the table to the specified location(px)"),n("br"),t._v("2、Params refer to "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo"}},[t._v("scrollTo")])])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollY(1000)">Scroll vertically to 1000px</button>\n            <button class="button-demo" @click="scrollY(500)">Scroll vertically to 500px</button>\n            <button class="button-demo" @click="scrollY(0)">Scroll vertically to 0px</button>\n            <button class="button-demo" @click="scrollX(500)">Scroll horizontally to 300px</button>\n            <button class="button-demo" @click="scrollX(300)">Scroll horizontally to 200px</button>\n            <button class="button-demo" @click="scrollX(0)">Scroll horizontally to 0px</button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="350"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "g",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 80; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                        col9: i,\n                        col10: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollY(val) {\n                this.$refs["tableRef"].scrollTo({ top: val, behavior: "smooth" });\n            },\n            // scroll x\n            scrollX(val) {\n                this.$refs["tableRef"].scrollTo({ left: val, behavior: "smooth" });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},f=[];function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e=p(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=w(t,"string");return"symbol"===h(e)?e:String(e)}function w(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var l=n.call(t,e||"default");if("object"!==h(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var v={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(1e3)}}},[t._v("Scroll vertically to 1000px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(500)}}},[t._v("Scroll vertically to 500px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(0)}}},[t._v("Scroll vertically to 0px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(500)}}},[t._v("Scroll horizontally to 300px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(300)}}},[t._v("Scroll horizontally to 200px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(0)}}},[t._v("Scroll horizontally to 0px")])]),t._v(" "),n("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey"}})],1)]],2)},e=[],n={data:function(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{initTableData:function(){for(var t=[],e=0;e<80;e++)t.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e,col9:e,col10:e});this.tableData=t},scrollY:function(t){this.$refs["tableRef"].scrollTo({top:t,behavior:"smooth"})},scrollX:function(t){this.$refs["tableRef"].scrollTo({left:t,behavior:"smooth"})}},created:function(){this.initTableData()}};return m({render:t,staticRenderFns:e},n)}()}},k=v,g=Object(r["a"])(k,u,f,!1,null,null,null),S=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"scrollToColKey Column scroll method",fileName:"scroll-to-col-key.md"}}),n("p",[t._v("When there are fixed columns, you can use this method to display the specified columns in the visual area")]),n("demo-block",[n("div",[n("p",[t._v("1、Scroll to the specified column position")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollToColKey(\'col4\')">\n                Scroll to col4 column\n            </button>\n            <button class="button-demo" @click="scrollToColKey(\'col5\')">\n                Scroll to col5 column\n            </button>\n            <button class="button-demo" @click="scrollToColKey(\'col6\')">\n                Scroll to col6 column\n            </button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="350"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "col4",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "col5",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "col6",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "g",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 80; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollToColKey(colKey) {\n                this.$refs["tableRef"].scrollToColKey({ colKey });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},O=[];function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e=P(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t){var e=D(t,"string");return"symbol"===_(e)?e:String(e)}function D(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var l=n.call(t,e||"default");if("object"!==_(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var C={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToColKey("col4")}}},[t._v("\n                Scroll to col4 column\n            ")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToColKey("col5")}}},[t._v("\n                Scroll to col5 column\n            ")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToColKey("col6")}}},[t._v("\n                Scroll to col6 column\n            ")])]),t._v(" "),n("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey"}})],1)]],2)},e=[],n={data:function(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{initTableData:function(){for(var t=[],e=0;e<80;e++)t.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=t},scrollToColKey:function(t){this.$refs["tableRef"].scrollToColKey({colKey:t})}},created:function(){this.initTableData()}};return K({render:t,staticRenderFns:e},n)}()}},R=C,E=Object(r["a"])(R,x,O,!1,null,null,null),$=E.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"scrollToRowKey",fileName:"scroll-to-row-key.md"}}),n("demo-block",[n("div",[n("p",[t._v("1、Scroll the table to the location of the row key")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollToRowKey(9999)">\n                Scroll to the row with rowkey 9999\n            </button>\n            <button class="button-demo" @click="scrollToRowKey(9989)">\n                Scroll to the row with rowkey 9989\n            </button>\n            <button class="button-demo" @click="scrollToRowKey(5000)">\n                Scroll to the row with rowkey 5000\n            </button>\n            <button class="button-demo" @click="scrollToRowKey(0)">\n                Scroll to the row with rowkey 0\n            </button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="400"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowKey"\n            :virtual-scroll-option="virtualScrollOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                    minRowHeight: 40,\n                },\n                tableData: [],\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "g",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            getRandom(min, max) {\n                return Math.floor(Math.random() * (max - min) + min);\n            },\n            initTableData() {\n                for (let i = 0; i < 10000; i++) {\n                    this.tableData.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                    });\n                }\n            },\n            // scroll y\n            scrollToRowKey(rowKey) {\n                this.$refs["tableRef"].scrollToRowKey({ rowKey: rowKey });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},F=[];function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(Object(n),!0).forEach((function(e){X(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function X(t,e,n){return e=Y(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Y(t){var e=A(t,"string");return"symbol"===I(e)?e:String(e)}function A(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var l=n.call(t,e||"default");if("object"!==I(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var H={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(9999)}}},[t._v("\n                Scroll to the row with rowkey 9999\n            ")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(9989)}}},[t._v("\n                Scroll to the row with rowkey 9989\n            ")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(5e3)}}},[t._v("\n                Scroll to the row with rowkey 5000\n            ")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(0)}}},[t._v("\n                Scroll to the row with rowkey 0\n            ")])]),t._v(" "),n("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":400,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey","virtual-scroll-option":t.virtualScrollOption}})],1)]],2)},e=[],n={data:function(){return{virtualScrollOption:{enable:!0,minRowHeight:40},tableData:[],columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{getRandom:function(t,e){return Math.floor(Math.random()*(e-t)+t)},initTableData:function(){for(var t=0;t<1e4;t++)this.tableData.push({rowKey:t,col1:t,col2:t,col3:t,col4:t,col5:t,col6:t,col7:t,col8:t})},scrollToRowKey:function(t){this.$refs["tableRef"].scrollToRowKey({rowKey:t})}},created:function(){this.initTableData()}};return M({render:t,staticRenderFns:e},n)}()}},J=H,W=Object(r["a"])(J,N,F,!1,null,null,null),q=W.exports,B=n("252e"),G={name:"basic-main",components:{Explain:d,ScrollTo:S,ScrollToColKey:$,ScrollToRowKey:q,API:B["a"]}},L=G,Q=Object(r["a"])(L,l,o,!1,null,null,null);e["default"]=Q.exports},"252e":function(t,e,n){"use strict";var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tpl",{attrs:{desc:t.desc,anchor:t.anchor,"table-data":t.db.instanceMethods.data,columns:t.db.instanceMethods.columns}})],1)},o=[],c=n("3ef3"),i=n("7eb4"),r={components:{tpl:c["a"]},props:{anchor:{type:String,default:"Table instance methods"},desc:{type:String,default:"Table instance methods"}},data:function(){return{db:i["a"]}}},a=r,s=n("2877"),d=Object(s["a"])(a,l,o,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-1bb7c056.d8b74feb.js.map