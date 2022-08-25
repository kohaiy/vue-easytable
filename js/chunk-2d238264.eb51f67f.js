(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238264"],{fdc3:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"content example-md-doc"},[r("h2",[e._v("Common Problem")]),r("anchor",{attrs:{"is-edit":"",label:"'scrollWidth' attribute",fileName:"QA.md"}}),e._m(0),e._m(1),r("anchor",{attrs:{"is-edit":"",label:"Column Fixed",fileName:"QA.md"}}),r("p",[e._v("Q:Why can't some columns be displayed after setting fixed columns?")]),r("p",[e._v("A:Because the set scrollWidth value is less than the sum of the width of the column (setting the specific width), it will cause the column with no width or set percentage to be squeezed out")]),r("anchor",{attrs:{"is-edit":"",label:"'rowKeyFieldName' property",fileName:"QA.md"}}),e._m(2),r("p",[e._v("A:This attribute is to solve the correctness of rendering when the data is updated. Applicable functions are: row expansion, row single selection, row multiple selection, row click highlighting, virtual scroll")]),r("anchor",{attrs:{"is-edit":"",label:"Error：'ReferenceError: h is not defined'",fileName:"QA.md"}}),r("p",[e._v("Q:Why ‘ReferenceError: h is not defined’")]),e._m(3),e._m(4),r("anchor",{attrs:{"is-edit":"",label:"Long text destroys layout",fileName:"QA.md"}}),r("p",[e._v("Q:When there are too many cell contents, the width set does not take effect?")]),e._m(5),e._m(6),r("anchor",{attrs:{"is-edit":"",label:"Customize scroll bar styles",fileName:"QA.md"}}),r("p",[e._v("Q:How to customize scroll bar styles")]),r("p",[e._v("A:There is no customized scroll bar style inside the component, which can be customized according to your business.For the customization of scroll bar style, please refer to:https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar")])],1)},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Q:When to use "),r("code",[e._v("scrollWidth")]),e._v(" attribute?")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("A:When the outer container width is less than the "),r("code",[e._v("scrollwidth")]),e._v(" value, a horizontal scroll bar will appear; when the outer container width is greater than the "),r("code",[e._v("scrollwidth")]),e._v(" value, it will follow the container adaptively")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Q:When to use "),r("code",[e._v("rowKeyFieldName")]),e._v(" property?")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("A:Refer to"),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#JSX"}},[e._v("official documents")]),e._v("。You can add the second parameter to solve,Such as:")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v("renderBodyCell: ({ row, column, rowIndex },h) => {\n       return (<div>hello</div>);\n}\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("A:Too much text in a cell destroys the layout,This can be controlled by style "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break"}},[e._v("word-break")]),e._v(" ,"),r("a",{attrs:{href:"#/en/doc/table/column-width?anchor=long-text-destroys-layout"}},[e._v("Refer to this example")]),e._v(",Such as:")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{staticClass:"language-html"},[e._v('<template>\n    <ve-table style="word-break: break-all" :columns="columns" :table-data="tableData" />\n</template>\n')])])}],a=r("2877"),n={},s=Object(a["a"])(n,o,l,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d238264.eb51f67f.js.map