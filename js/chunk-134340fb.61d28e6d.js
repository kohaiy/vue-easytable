(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-134340fb"],{8725:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.sortOption.data,columns:e.db.sortOption.columns}})],1)},r=[],o=t("3ef3"),i=t("d890"),s={components:{tpl:o["a"]},props:{anchor:{type:String,default:"排序配置"},desc:{type:String,default:"sortOption"}},data:function(){return{db:i["a"]}}},l=s,c=t("2877"),g=Object(c["a"])(l,a,r,!1,null,null,null);n["a"]=g.exports},e119:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("排序")]),t("Explain"),t("SingleSort"),t("MultiSort"),t("SortAlways"),t("API",{attrs:{title:"API",anchor:"API",desc:"sortOption 排序配置"}})],1)},r=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、通过 "),t("code",[e._v("sortBy")]),e._v("属性，设置需要排序的列。"),t("code",[e._v('sortBy="asc"')]),e._v("：默认当前列升序；"),t("code",[e._v('sortBy="desc"')]),e._v("：默认当前列降序；"),t("code",[e._v('sortBy=""')]),e._v("：允许排序但无排序规则"),t("br"),e._v(" 2、通过 "),t("code",[e._v("sortOption")]),e._v("对象，设置更多排序功能。排序功能需要配合"),t("code",[e._v("sortChange(param)")]),e._v("回调函数实现，回调参数包含列的排序规则")])])])}],s=t("2877"),l={},c=Object(s["a"])(l,o,i,!1,null,null,null),g=c.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"单字段排序",fileName:"single-sort.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、默认为单字段排序"),t("br"),e._v("2、"),t("code",[e._v("sortChange(params)")]),e._v("回调函数接收列的排序规则")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table :columns="columns" :table-data="tableData" :sort-option="sortOption" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                sortOption: {\n                    sortChange: (params) => {\n                        console.log("sortChange::", params);\n                        this.sortChange(params);\n                    },\n                },\n                columns: [\n                    { field: "name", key: "a", title: "Name", align: "left" },\n                    {\n                        field: "age",\n                        key: "b",\n                        title: "Age",\n                        align: "center",\n                        sortBy: "",\n                    },\n                    {\n                        field: "weight",\n                        key: "c",\n                        title: "Weight(kg)",\n                        align: "center",\n                        sortBy: "asc",\n                    },\n                    {\n                        field: "hobby",\n                        key: "d",\n                        title: "Hobby",\n                        align: "center",\n                    },\n                    {\n                        field: "address",\n                        key: "e",\n                        title: "Address",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        age: 25,\n                        weight: 66,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        age: 20,\n                        weight: 70,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        age: 18,\n                        weight: 65,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        age: 17,\n                        weight: 80,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        age: 26,\n                        weight: 72,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            sortChange(params) {\n                this.tableData.sort((a, b) => {\n                    if (params.age) {\n                        if (params.age === "asc") {\n                            return a.age - b.age;\n                        } else if (params.age === "desc") {\n                            return b.age - a.age;\n                        } else {\n                            return 0;\n                        }\n                    } else if (params.weight) {\n                        if (params.weight === "asc") {\n                            return a.weight - b.weight;\n                        } else if (params.weight === "desc") {\n                            return b.weight - a.weight;\n                        } else {\n                            return 0;\n                        }\n                    }\n                });\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},h=[];function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"sort-option":e.sortOption}})]],2)},n=[],t={data:function(){var e=this;return{sortOption:{sortChange:function(n){console.log("sortChange::",n),e.sortChange(n)}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"age",key:"b",title:"Age",align:"center",sortBy:""},{field:"weight",key:"c",title:"Weight(kg)",align:"center",sortBy:"asc"},{field:"hobby",key:"d",title:"Hobby",align:"center"},{field:"address",key:"e",title:"Address",align:"left"}],tableData:[{name:"John",age:25,weight:66,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",age:20,weight:70,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",age:18,weight:65,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",age:17,weight:80,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",age:26,weight:72,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{sortChange:function(e){this.tableData.sort((function(n,t){return e.age?"asc"===e.age?n.age-t.age:"desc"===e.age?t.age-n.age:0:e.weight?"asc"===e.weight?n.weight-t.weight:"desc"===e.weight?t.weight-n.weight:0:void 0}))}}};return b({render:e,staticRenderFns:n},t)}()}},y=m,f=Object(s["a"])(y,d,h,!1,null,null,null),v=f.exports,w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"多字段排序",fileName:"multi-sort.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、通过"),t("code",[e._v("multipleSort=true")]),e._v("开启多字段排序"),t("br"),e._v("2、排序字段的优先级需要自己指定，此处只是示例，具体逻辑自行实现（一般由后端服务返回）")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table :columns="columns" :table-data="tableData" :sort-option="sortOption" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                sortOption: {\n                    // 是否开启多字段排序\n                    multipleSort: true,\n                    sortChange: (params) => {\n                        console.log("sortChange::", params);\n                        this.sortChange(params);\n                    },\n                },\n                columns: [\n                    { field: "name", key: "a", title: "Name", align: "left" },\n                    {\n                        field: "age",\n                        key: "b",\n                        title: "Age",\n                        align: "center",\n                        sortBy: "",\n                    },\n                    {\n                        field: "weight",\n                        key: "c",\n                        title: "Weight(kg)",\n                        align: "center",\n                        sortBy: "asc",\n                    },\n                    {\n                        field: "hobby",\n                        key: "d",\n                        title: "Hobby",\n                        align: "center",\n                    },\n                    {\n                        field: "address",\n                        key: "e",\n                        title: "Address",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        age: 25,\n                        weight: 66,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        age: 20,\n                        weight: 70,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        age: 18,\n                        weight: 65,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        age: 17,\n                        weight: 80,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        age: 26,\n                        weight: 72,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            sortChange(params) {\n                let data = this.tableData.slice(0);\n\n                data.sort((a, b) => {\n                    if (params.age) {\n                        if (params.age === "asc") {\n                            return a.age - b.age;\n                        } else if (params.age === "desc") {\n                            return b.age - a.age;\n                        } else {\n                            return 0;\n                        }\n                    }\n                });\n\n                data.sort((a, b) => {\n                    if (params.weight) {\n                        if (params.weight === "asc") {\n                            return a.weight - b.weight;\n                        } else if (params.weight === "desc") {\n                            return b.weight - a.weight;\n                        } else {\n                            return 0;\n                        }\n                    }\n                });\n\n                this.tableData = data;\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},O=[];function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){A(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var _={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"sort-option":e.sortOption}})]],2)},n=[],t={data:function(){var e=this;return{sortOption:{multipleSort:!0,sortChange:function(n){console.log("sortChange::",n),e.sortChange(n)}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"age",key:"b",title:"Age",align:"center",sortBy:""},{field:"weight",key:"c",title:"Weight(kg)",align:"center",sortBy:"asc"},{field:"hobby",key:"d",title:"Hobby",align:"center"},{field:"address",key:"e",title:"Address",align:"left"}],tableData:[{name:"John",age:25,weight:66,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",age:20,weight:70,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",age:18,weight:65,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",age:17,weight:80,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",age:26,weight:72,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{sortChange:function(e){var n=this.tableData.slice(0);n.sort((function(n,t){if(e.age)return"asc"===e.age?n.age-t.age:"desc"===e.age?t.age-n.age:0})),n.sort((function(n,t){if(e.weight)return"asc"===e.weight?n.weight-t.weight:"desc"===e.weight?t.weight-n.weight:0})),this.tableData=n}}};return k({render:e,staticRenderFns:n},t)}()}},j=_,N=Object(s["a"])(j,w,O,!1,null,null,null),D=N.exports,P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"排序切换",fileName:"sort-always.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、通过"),t("code",[e._v("sortAlways=true")]),e._v("允许排序只在升序和降序切换")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table :columns="columns" :table-data="tableData" :sort-option="sortOption" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                sortOption: {\n                    // sort always\n                    sortAlways: true,\n                    sortChange: (params) => {\n                        console.log("sortChange::", params);\n                        this.sortChange(params);\n                    },\n                },\n                columns: [\n                    { field: "name", key: "a", title: "Name", align: "left" },\n                    {\n                        field: "age",\n                        key: "b",\n                        title: "Age",\n                        align: "center",\n                        sortBy: "",\n                    },\n                    {\n                        field: "weight",\n                        key: "c",\n                        title: "Weight(kg)",\n                        align: "center",\n                        sortBy: "asc",\n                    },\n                    {\n                        field: "hobby",\n                        key: "d",\n                        title: "Hobby",\n                        align: "center",\n                    },\n                    {\n                        field: "address",\n                        key: "e",\n                        title: "Address",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        age: 25,\n                        weight: 66,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        age: 20,\n                        weight: 70,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        age: 18,\n                        weight: 65,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        age: 17,\n                        weight: 80,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        age: 26,\n                        weight: 72,\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            sortChange(params) {\n                this.tableData.sort((a, b) => {\n                    if (params.age) {\n                        if (params.age === "asc") {\n                            return a.age - b.age;\n                        } else if (params.age === "desc") {\n                            return b.age - a.age;\n                        } else {\n                            return 0;\n                        }\n                    } else if (params.weight) {\n                        if (params.weight === "asc") {\n                            return a.weight - b.weight;\n                        } else if (params.weight === "desc") {\n                            return b.weight - a.weight;\n                        } else {\n                            return 0;\n                        }\n                    }\n                });\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},S=[];function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var J={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"sort-option":e.sortOption}})]],2)},n=[],t={data:function(){var e=this;return{sortOption:{sortAlways:!0,sortChange:function(n){console.log("sortChange::",n),e.sortChange(n)}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"age",key:"b",title:"Age",align:"center",sortBy:""},{field:"weight",key:"c",title:"Weight(kg)",align:"center",sortBy:"asc"},{field:"hobby",key:"d",title:"Hobby",align:"center"},{field:"address",key:"e",title:"Address",align:"left"}],tableData:[{name:"John",age:25,weight:66,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",age:20,weight:70,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",age:18,weight:65,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",age:17,weight:80,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",age:26,weight:72,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{sortChange:function(e){this.tableData.sort((function(n,t){return e.age?"asc"===e.age?n.age-t.age:"desc"===e.age?t.age-n.age:0:e.weight?"asc"===e.weight?n.weight-t.weight:"desc"===e.weight?t.weight-n.weight:0:void 0}))}}};return E({render:e,staticRenderFns:n},t)}()}},$=J,q=Object(s["a"])($,P,S,!1,null,null,null),z=q.exports,G=t("8725"),H={name:"basic-main",components:{Explain:g,SingleSort:v,MultiSort:D,SortAlways:z,API:G["a"]}},L=H,W=Object(s["a"])(L,a,r,!1,null,null,null);n["default"]=W.exports}}]);
//# sourceMappingURL=chunk-134340fb.61d28e6d.js.map