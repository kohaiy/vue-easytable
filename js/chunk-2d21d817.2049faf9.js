(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d817"],{d21d:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Header Hidden")]),n("Explain"),n("Base")],1)},o=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、The header is displayed by default. You can use "),n("code",[e._v(':fixed-header="false"')]),e._v(" to hide the header")])])])}],i=n("2877"),r={},d=Object(i["a"])(r,a,c,!1,null,null,null),s=d.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Header Hidden",fileName:"base.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <el-radio-group v-model="showHeaderRadio">\n            <el-radio label="Show">Show</el-radio>\n            <el-radio label="Hidden">Hidden</el-radio>\n        </el-radio-group>\n        <br />\n        <br />\n        <ve-table :show-header="showHeader" :columns="columns" :table-data="tableData" />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                showHeaderRadio: "Hidden",\n                columns: [\n                    { field: "col1", key: "col1", title: "Col1" },\n                    { field: "col2", key: "col2", title: "Col2" },\n                    { field: "col3", key: "col3", title: "Col3" },\n                    { field: "col4", key: "col4", title: "Col4" },\n                    { field: "col5", key: "col5", title: "Col5" },\n                    { field: "col6", key: "col6", title: "Col6" },\n                ],\n                tableData: [],\n            };\n        },\n        computed: {\n            showHeader() {\n                return this.showHeaderRadio === "Show";\n            },\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 8; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: `A${i + 1}`,\n                        col2: `B${i + 1}`,\n                        col3: `C${i + 1}`,\n                        col4: `D${i + 1}`,\n                        col5: `E${i + 1}`,\n                        col6: `F${i + 1}`,\n                        col7: `G${i + 1}`,\n                        col8: `H${i + 1}`,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},h=[];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("el-radio-group",{model:{value:e.showHeaderRadio,callback:function(t){e.showHeaderRadio=t},expression:"showHeaderRadio"}},[n("el-radio",{attrs:{label:"Show"}},[e._v("Show")]),e._v(" "),n("el-radio",{attrs:{label:"Hidden"}},[e._v("Hidden")])],1),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("ve-table",{attrs:{"show-header":e.showHeader,columns:e.columns,"table-data":e.tableData}})],1)]],2)},t=[],n={data:function(){return{showHeaderRadio:"Hidden",columns:[{field:"col1",key:"col1",title:"Col1"},{field:"col2",key:"col2",title:"Col2"},{field:"col3",key:"col3",title:"Col3"},{field:"col4",key:"col4",title:"Col4"},{field:"col5",key:"col5",title:"Col5"},{field:"col6",key:"col6",title:"Col6"}],tableData:[]}},computed:{showHeader:function(){return"Show"===this.showHeaderRadio}},methods:{initTableData:function(){for(var e=[],t=0;t<8;t++)e.push({rowKey:t,col1:"A".concat(t+1),col2:"B".concat(t+1),col3:"C".concat(t+1),col4:"D".concat(t+1),col5:"E".concat(t+1),col6:"F".concat(t+1),col7:"G".concat(t+1),col8:"H".concat(t+1)});this.tableData=e}},created:function(){this.initTableData()}};return p({render:e,staticRenderFns:t},n)}()}},v=m,w=Object(i["a"])(v,u,h,!1,null,null,null),y=w.exports,H={name:"basic-main",components:{Explain:s,Base:y}},_=H,O=Object(i["a"])(_,l,o,!1,null,null,null);t["default"]=O.exports}}]);
//# sourceMappingURL=chunk-2d21d817.2049faf9.js.map