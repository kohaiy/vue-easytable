(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c0a0447"],{"25f6":function(e,n,t){},8444:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Combining Pagination")]),t("Explain"),t("Basic"),t("Checkbox")],1)},i=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、The table component and the paging component are separate"),t("br"),e._v(" 2、The following example is simulated data, and paging is usually combined with back-end services"),t("br"),e._v(" 3、There is a lot of data, but you don't want to use paging. You can also use virtual scrolling"),t("br")])])])}],c=t("2877"),s={},r=Object(c["a"])(s,o,l,!1,null,null,null),d=r.exports,p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Example",fileName:"basic.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table :columns="columns" :table-data="tableData" />\n        <div class="table-pagination">\n            <ve-pagination\n                :total="totalCount"\n                :page-index="pageIndex"\n                :page-size="pageSize"\n                @on-page-number-change="pageNumberChange"\n                @on-page-size-change="pageSizeChange"\n            />\n        </div>\n    </div>\n</template>\n\n<style>\n    .table-pagination {\n        margin-top: 20px;\n        text-align: right;\n    }\n</style>\n\n<script>\n    // Simulation table data from database\n    let DB_DATA = [];\n\n    export default {\n        data() {\n            return {\n                // page index\n                pageIndex: 1,\n                // page size\n                pageSize: 10,\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "#",\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (this.pageIndex - 1) * this.pageSize + rowIndex + 1;\n                        },\n                    },\n                    { field: "name", key: "b", title: "Name", align: "center" },\n                    { field: "date", key: "c", title: "Date", align: "left" },\n                    { field: "hobby", key: "d", title: "Hobby", align: "left" },\n                    { field: "address", key: "e", title: "Address", width: "" },\n                ],\n            };\n        },\n        computed: {\n            // table data\n            tableData() {\n                const { pageIndex, pageSize } = this;\n                return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);\n            },\n            // total count\n            totalCount() {\n                return DB_DATA.length;\n            },\n        },\n        methods: {\n            // page number change\n            pageNumberChange(pageIndex) {\n                this.pageIndex = pageIndex;\n            },\n\n            // page size change\n            pageSizeChange(pageSize) {\n                this.pageIndex = 1;\n                this.pageSize = pageSize;\n            },\n\n            // Simulation table data\n            initDatabase() {\n                DB_DATA = [];\n                for (let i = 0; i < 1000; i++) {\n                    DB_DATA.push({\n                        name: "John" + i,\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat" + i,\n                        address: "No.1 Century Avenue, Shanghai" + i,\n                    });\n                }\n            },\n        },\n        created() {\n            this.initDatabase();\n        },\n    };\n<\/script>\n')])])])],2)],1)},g=[];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){b(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData}}),e._v(" "),t("div",{staticClass:"table-pagination"},[t("ve-pagination",{attrs:{total:e.totalCount,"page-index":e.pageIndex,"page-size":e.pageSize},on:{"on-page-number-change":e.pageNumberChange,"on-page-size-change":e.pageSizeChange}})],1)],1)]],2)},n=[],t=[],a={data:function(){var e=this;return{pageIndex:1,pageSize:10,columns:[{field:"",key:"a",title:"#",align:"center",renderBodyCell:function(n,t){n.row,n.column;var a=n.rowIndex;return(e.pageIndex-1)*e.pageSize+a+1}},{field:"name",key:"b",title:"Name",align:"center"},{field:"date",key:"c",title:"Date",align:"left"},{field:"hobby",key:"d",title:"Hobby",align:"left"},{field:"address",key:"e",title:"Address",width:""}]}},computed:{tableData:function(){var e=this.pageIndex,n=this.pageSize;return t.slice((e-1)*n,e*n)},totalCount:function(){return t.length}},methods:{pageNumberChange:function(e){this.pageIndex=e},pageSizeChange:function(e){this.pageIndex=1,this.pageSize=e},initDatabase:function(){t=[];for(var e=0;e<1e3;e++)t.push({name:"John"+e,date:"1900-05-20",hobby:"coding and coding repeat"+e,address:"No.1 Century Avenue, Shanghai"+e})}},created:function(){this.initDatabase()}};return u({render:e,staticRenderFns:n},a)}()}},f=y,m=(t("e9f0"),Object(c["a"])(f,p,g,!1,null,null,null)),w=m.exports,x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"With Row Checkbox",fileName:"checkbox.md"}}),t("demo-block",[t("div",[t("p",[e._v("Logic of this example, refer to "),t("a",{attrs:{href:"https://mail.google.com/"}},[e._v("mail.google.com")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <div>current selected row keys:{{selectedRowKeysCollection}}</div>\n        <ve-table\n            :columns="columns"\n            :table-data="currentPageData"\n            :checkbox-option="checkboxOption"\n            row-key-field-name="rowKey"\n        />\n        <div class="table-pagination">\n            <ve-pagination\n                :total="totalCount"\n                :page-index="pageIndex"\n                :page-size="pageSize"\n                @on-page-number-change="pageNumberChange"\n                @on-page-size-change="pageSizeChange"\n            />\n        </div>\n    </div>\n</template>\n\n<style>\n    .table-pagination {\n        margin-top: 20px;\n        text-align: right;\n    }\n</style>\n\n<script>\n    // Simulation table data from database\n    let DB_DATA = [];\n\n    export default {\n        data() {\n            return {\n                // page index\n                pageIndex: 1,\n                // page size\n                pageSize: 10,\n                // selected row keys collection\n                selectedRowKeysCollection: [],\n                // checkbox option\n                checkboxOption: {\n                    // 可控属性\n                    selectedRowKeys: [],\n                    // 行选择改变事件\n                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {\n                        this.changeSelectedRowKeys(row, isSelected);\n                    },\n                    // 全选改变事件\n                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {\n                        this.changeSelectAll(isSelected, selectedRowKeys);\n                    },\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "#",\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (this.pageIndex - 1) * this.pageSize + rowIndex + 1;\n                        },\n                    },\n                    {\n                        field: "",\n                        key: "checkbox",\n                        // type=checkbox\n                        type: "checkbox",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n\n                    { field: "name", key: "b", title: "Name", align: "center" },\n                    { field: "date", key: "c", title: "Date", align: "left" },\n                    { field: "hobby", key: "d", title: "Hobby", align: "left" },\n                    { field: "address", key: "e", title: "Address", width: "" },\n                ],\n            };\n        },\n        computed: {\n            // table data\n            currentPageData() {\n                const { pageIndex, pageSize } = this;\n                return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);\n            },\n            // total count\n            totalCount() {\n                return DB_DATA.length;\n            },\n        },\n        methods: {\n            // selected rowKeys change\n            changeSelectedRowKeys(row, isSelected) {\n                const rowKey = row.rowKey;\n\n                if (isSelected) {\n                    this.checkboxOption.selectedRowKeys.push(rowKey);\n                    this.selectedRowKeysCollection.push(rowKey);\n                } else {\n                    const index = this.checkboxOption.selectedRowKeys.indexOf(rowKey);\n                    this.checkboxOption.selectedRowKeys.splice(index, 1);\n                    this.selectedRowKeysCollection.splice(index, 1);\n                }\n            },\n\n            // select all change\n            changeSelectAll(isSelected, selectedRowKeys) {\n                this.checkboxOption.selectedRowKeys = selectedRowKeys;\n\n                if (isSelected) {\n                    this.selectedRowKeysCollection =\n                        this.selectedRowKeysCollection.concat(selectedRowKeys);\n                } else {\n                    this.currentPageData.forEach((item) => {\n                        if (selectedRowKeysCollection.indexOf(item.rowKey) > -1) {\n                            this.selectedRowKeysCollection.splice(index, 1);\n                        }\n                    });\n                }\n            },\n\n            // reset selectedRowKeys\n            resetSelectedRowKeys() {\n                this.checkboxOption.selectedRowKeys = [];\n\n                const selectedRowKeysCollection = this.selectedRowKeysCollection;\n\n                if (selectedRowKeysCollection.length) {\n                    this.currentPageData.forEach((item) => {\n                        if (selectedRowKeysCollection.indexOf(item.rowKey) > -1) {\n                            this.checkboxOption.selectedRowKeys.push(item.rowKey);\n                        }\n                    });\n                }\n            },\n\n            // page number change\n            pageNumberChange(pageIndex) {\n                this.pageIndex = pageIndex;\n                this.resetSelectedRowKeys();\n            },\n\n            // page size change\n            pageSizeChange(pageSize) {\n                this.pageIndex = 1;\n                this.pageSize = pageSize;\n                this.resetSelectedRowKeys();\n            },\n\n            // Simulation table data\n            initDatabase() {\n                DB_DATA = [];\n                for (let i = 0; i < 1000; i++) {\n                    DB_DATA.push({\n                        rowKey: i,\n                        name: "John" + i,\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat" + i,\n                        address: "No.1 Century Avenue, Shanghai" + i,\n                    });\n                }\n            },\n        },\n        created() {\n            this.initDatabase();\n        },\n    };\n<\/script>\n')])])])],2)],1)},v=[];function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){C(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("div",[e._v("current selected row keys:"+e._s(e.selectedRowKeysCollection))]),e._v(" "),t("ve-table",{attrs:{columns:e.columns,"table-data":e.currentPageData,"checkbox-option":e.checkboxOption,"row-key-field-name":"rowKey"}}),e._v(" "),t("div",{staticClass:"table-pagination"},[t("ve-pagination",{attrs:{total:e.totalCount,"page-index":e.pageIndex,"page-size":e.pageSize},on:{"on-page-number-change":e.pageNumberChange,"on-page-size-change":e.pageSizeChange}})],1)],1)]],2)},n=[],t=[],a={data:function(){var e=this;return{pageIndex:1,pageSize:10,selectedRowKeysCollection:[],checkboxOption:{selectedRowKeys:[],selectedRowChange:function(n){var t=n.row,a=n.isSelected;n.selectedRowKeys;e.changeSelectedRowKeys(t,a)},selectedAllChange:function(n){var t=n.isSelected,a=n.selectedRowKeys;e.changeSelectAll(t,a)}},columns:[{field:"",key:"a",title:"#",align:"center",renderBodyCell:function(n,t){n.row,n.column;var a=n.rowIndex;return(e.pageIndex-1)*e.pageSize+a+1}},{field:"",key:"checkbox",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",align:"center"},{field:"date",key:"c",title:"Date",align:"left"},{field:"hobby",key:"d",title:"Hobby",align:"left"},{field:"address",key:"e",title:"Address",width:""}]}},computed:{currentPageData:function(){var e=this.pageIndex,n=this.pageSize;return t.slice((e-1)*n,e*n)},totalCount:function(){return t.length}},methods:{changeSelectedRowKeys:function(e,n){var t=e.rowKey;if(n)this.checkboxOption.selectedRowKeys.push(t),this.selectedRowKeysCollection.push(t);else{var a=this.checkboxOption.selectedRowKeys.indexOf(t);this.checkboxOption.selectedRowKeys.splice(a,1),this.selectedRowKeysCollection.splice(a,1)}},changeSelectAll:function(e,n){var t=this;this.checkboxOption.selectedRowKeys=n,e?this.selectedRowKeysCollection=this.selectedRowKeysCollection.concat(n):this.currentPageData.forEach((function(e){selectedRowKeysCollection.indexOf(e.rowKey)>-1&&t.selectedRowKeysCollection.splice(index,1)}))},resetSelectedRowKeys:function(){var e=this;this.checkboxOption.selectedRowKeys=[];var n=this.selectedRowKeysCollection;n.length&&this.currentPageData.forEach((function(t){n.indexOf(t.rowKey)>-1&&e.checkboxOption.selectedRowKeys.push(t.rowKey)}))},pageNumberChange:function(e){this.pageIndex=e,this.resetSelectedRowKeys()},pageSizeChange:function(e){this.pageIndex=1,this.pageSize=e,this.resetSelectedRowKeys()},initDatabase:function(){t=[];for(var e=0;e<1e3;e++)t.push({rowKey:e,name:"John"+e,date:"1900-05-20",hobby:"coding and coding repeat"+e,address:"No.1 Century Avenue, Shanghai"+e})}},created:function(){this.initDatabase()}};return K({render:e,staticRenderFns:n},a)}()}},O=k,R=(t("9608"),Object(c["a"])(O,x,v,!1,null,null,null)),D=R.exports,z={name:"basic-main",components:{Explain:d,Basic:w,Checkbox:D}},I=z,_=Object(c["a"])(I,a,i,!1,null,null,null);n["default"]=_.exports},"947a":function(e,n,t){},9608:function(e,n,t){"use strict";t("25f6")},e9f0:function(e,n,t){"use strict";t("947a")}}]);
//# sourceMappingURL=chunk-5c0a0447.ffe3181a.js.map