(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aad157fa"],{"045c":function(e,t,n){},1823:function(e,t,n){},"1e4b":function(e,t,n){},"37b1":function(e,t,n){"use strict";n("1823")},d04b:function(e,t,n){"use strict";n("1e4b")},d3e4:function(e,t,n){"use strict";n("045c")},d74f:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"site-demo-container"},[n("div",{staticClass:"demo-title"},[n("div",{staticClass:"demo-title-text"},[e._v(" "+e._s(e.currentLocal.demo1.selection)+" ")])]),n("NormalDataGrid"),n("div",{staticClass:"demo-title last"},[n("div",{staticClass:"demo-title-text"},[e._v(" "+e._s(e.currentLocal.demo2.selection)+" ")])]),n("Spreadsheet")],1)])},i=[],l=n("281a"),a=n("3b37"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"normal-data-grid"},[n("div",{staticClass:"operation"},[n("div",{staticClass:"operation-item"},[e._v(" "+e._s(e.currentLocal["dataRows"])+" "),n("el-select",{staticStyle:{width:"60%"},attrs:{size:"small"},on:{change:e.dataRowChange},model:{value:e.dataRow,callback:function(t){e.dataRow=t},expression:"dataRow"}},e._l(e.currentLocal["dataRowsOption"],(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("div",{staticClass:"operation-item"},[e._v(" "+e._s(e.currentLocal["columnFixed"])+" "),n("el-switch",{attrs:{"active-color":e.switchActiveColor,"inactive-color":e.switchInactiveColor},model:{value:e.enableColumnFixed,callback:function(t){e.enableColumnFixed=t},expression:"enableColumnFixed"}})],1),n("div",{staticClass:"operation-item"},[e._v(" "+e._s(e.currentLocal["expand"])+" "),n("el-switch",{attrs:{"active-color":e.switchActiveColor,"inactive-color":e.switchInactiveColor},model:{value:e.enableExpand,callback:function(t){e.enableExpand=t},expression:"enableExpand"}})],1),n("div",{staticClass:"operation-item"},[e._v(" "+e._s(e.currentLocal["loading"])+" "),n("el-switch",{attrs:{"active-color":e.switchActiveColor,"inactive-color":e.switchInactiveColor},on:{change:e.switchLoading},model:{value:e.enableLoading,callback:function(t){e.enableLoading=t},expression:"enableLoading"}})],1),n("div",{staticClass:"operation-item"},[e._v(" "+e._s(e.currentLocal["radio"])+" "),n("el-switch",{attrs:{"active-color":e.switchActiveColor,"inactive-color":e.switchInactiveColor},model:{value:e.enableRowRadio,callback:function(t){e.enableRowRadio=t},expression:"enableRowRadio"}})],1),n("div",{staticClass:"operation-item"},[e._v(" "+e._s(e.currentLocal["checkbox"])+" "),n("el-switch",{attrs:{"active-color":e.switchActiveColor,"inactive-color":e.switchInactiveColor},model:{value:e.enableRowCheckbox,callback:function(t){e.enableRowCheckbox=t},expression:"enableRowCheckbox"}})],1)]),n("div",{staticClass:"table-list"},[n("ve-table",{ref:"tableRef",attrs:{id:"demo-loading-container","fixed-header":"","border-y":"","max-height":500,"scroll-width":0,"sort-option":e.sortOption,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey","cell-style-option":e.cellStyleOption,"expand-option":e.expandOption,"radio-option":e.radioOption,"checkbox-option":e.checkboxOption,"row-style-option":e.rowStyleOption,"cell-selection-option":e.cellSelectionOption,"column-width-resize-option":e.columnWidthResizeOption}})],1)])},r=[],s=n("96eb"),d=n.n(s),u={name:"demo",components:{},mixins:[a["a"]],data:function(){var e=this;this.$createElement;return{columnWidthResizeOption:{enable:!0},cellSelectionOption:{enable:!1},editOption:{cellValueChange:function(e){var t=e.row,n=e.column;console.log("cellValueChange row::",t),console.log("cellValueChange column::",n)}},dataRow:5e3,switchActiveColor:"#1890ff",switchInactiveColor:"rgba(0,0,0,.25)",enableColumnFixed:!0,enableLoading:!1,enableExpand:!0,enableRowRadio:!1,enableRowCheckbox:!1,sourceData:[],tableData:[],startRowIndex:0,filterConditions:[],cellStyleOption:{bodyCellClass:function(e){e.row;var t=e.column;e.rowIndex;if("proficiency"===t.field)return"table-body-cell-proficiency"}},virtualScrollOption:{enable:!0,scrolling:this.scrolling},rowStyleOption:{stripe:!0,clickHighlight:!0,hoverHighlight:!0},sortOption:{sortChange:function(t){e.sortChange(t)}},radioOption:{selectedRowChange:function(e){e.row}},checkboxOption:{selectedRowChange:function(e){e.row,e.isSelected,e.selectedRowKeys},selectedAllChange:function(e){e.isSelected,e.selectedRowKeys}},expandOption:{render:function(e,t){var n=e.row;e.column,e.rowIndex;return t("p",["Hello everyone, My name is"," ",t("span",{style:"font-weight:bold;"},[n.name]),", I'm a ",n.profession,". And I'm living in"," ",n.address,"."])}}}},computed:{currentLocal:function(){return l["a"][this.currentDocLang]["completeDemo"]["demo1"]},tableScrollWdith:function(){var e=0,t=this.columns;return t.length&&t.forEach((function(t){"number"===typeof t.width&&(e+=t.width)})),e},columns:function(){var e=this,t=(this.$createElement,[{field:"rowIndex",key:"rowIndex",title:"#",width:50,fixed:this.enableColumnFixed?"left":"",renderBodyCell:this.renderRowIndex}]);return this.enableRowRadio&&t.push({field:"radio",key:"radio",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"radio"}),this.enableRowCheckbox&&t.push({field:"checkbox",key:"checkbox",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"checkbox"}),this.enableExpand&&t.push({field:"expand",key:"expand",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"expand"}),t=t.concat([{title:"Basic Info",fixed:this.enableColumnFixed?"left":"",width:300,children:[{field:"name",key:"name",title:"Name",width:200,align:"left"},{field:"sex",key:"sex",title:"Sex",width:100,align:"center",sortBy:"",edit:!0,renderBodyCell:function(e,t){var n=e.row,o=e.column,i=(e.rowIndex,n[o.field]),l=1===i?"icon-male":"icon-female";return t("i",{style:"font-size:20px;color:#666;",class:"demo-sex iconfont "+l})}}]},{title:"Personal Experience",align:"center",width:800,children:[{title:"Profession",field:"profession",key:"profession",width:200,align:"left"},{title:"IT Skills",children:[{field:"proficiency",key:"proficiency",title:"Proficiency",width:300,sortBy:"",edit:!0,renderBodyCell:function(e,t){var n=e.row,o=e.column,i=(e.rowIndex,n[o.field]),l=i>60?"demo-blue":i>30?"demo-orange":"demo-red";return t("div",{class:"proficiency-span-container"},[t("span",{class:"proficiency-span "+l,style:"width:"+i+"%;"},[i,"%"])])}},{field:"skills",key:"skills",title:"Skills",width:300,align:"left",edit:!0,renderBodyCell:function(e,t){var n=e.row,o=e.column,i=(e.rowIndex,n[o.field]),l=[{name:"Javascript",color:"#48a4ef"},{name:"Python",color:"#d8899c"},{name:"java",color:"#a88cd9"}],a=l.slice(0,i);return a.map((function(e){return t("span",{class:"skill-span",style:"background-color:"+e.color},[e.name])}))}}]}]},{field:"address",key:"address",title:"Address",width:350,align:"left"},{field:"status",key:"status",title:"Status",width:100,fixed:this.enableColumnFixed?"right":"",align:"left",filter:{filterList:[{value:0,label:"Working",selected:!1},{value:1,label:"Metting",selected:!1},{value:2,label:"Traveling",selected:!1}],isMultiple:!0,filterConfirm:function(t){var n=t.filter((function(e){return e.selected})).map((function(e){return e.value}));e.searchByNameField(n)},filterReset:function(t){e.searchByNameField([])}},renderBodyCell:function(e,t){var n=e.row,o=e.column,i=(e.rowIndex,n[o.field]),l=[{name:"Working",color:"#48a4ef"},{name:"Meeting",color:"#d8899c"},{name:"Traveling",color:"#a88cd9"}],a=l[i];return t("span",{class:"status-span",style:"color:"+a.color},[a.name])}}]),t}},methods:{scrolling:function(e){var t=e.startRowIndex;e.visibleStartIndex,e.visibleEndIndex,e.visibleAboveCount,e.visibleBelowCount;this.startRowIndex=t},renderRowIndex:function(e){e.row,e.column;var t=e.rowIndex,n=this.$createElement;return n("span",[t+this.startRowIndex+1])},searchByNameField:function(e){this.filterConditions=e,this.filter(),this.$refs["tableRef"].scrollTo({top:0})},filter:function(){var e=this.filterConditions;this.tableData=this.sourceData.slice(0).filter((function(t){return 0===e.length||e.includes(t.status)}))},sortChange:function(e){var t="sex",n="proficiency";e[t]||e[n]?this.tableData.sort((function(o,i){if(e[t]){if("asc"===e[t])return o[t]-i[t];if("desc"===e[t])return i[t]-o[t]}else if(e[n]){if("asc"===e[n])return o[n]-i[n];if("desc"===e[n])return i[n]-o[n]}})):this.resetTableData(),this.$refs["tableRef"].scrollTo({top:0})},switchLoading:function(){this.enableLoading?this.loadingInstance.show():this.loadingInstance.close()},resetTableData:function(){this.tableData=this.sourceData.slice(0),this.filter()},dataRowChange:function(){var e=this;setTimeout((function(){e.initSourceData(),e.$refs["tableRef"].scrollTo({top:0})}))},initSourceData:function(){for(var e=["Project Manager","User Interface Designer","Front-End Developer","Testor","Product Designer","System Designer"],t=[],n=this.dataRow,o=0;o<n;o++)t.push({rowKey:o,name:d.a.Random.name(),sex:d.a.Random.boolean()?1:2,profession:e[d.a.Random.natural(0,5)],proficiency:d.a.Random.natural(5,85),skills:d.a.Random.natural(0,3),address:d.a.Random.county(!0),status:d.a.Random.natural(0,2)});this.sourceData=t,this.resetTableData()}},created:function(){this.initSourceData()},mounted:function(){this.loadingInstance=this.$veLoading({target:document.querySelector("#demo-loading-container"),name:"grid"})},destroyed:function(){}},f=u,h=(n("d3e4"),n("2877")),p=Object(h["a"])(f,c,r,!1,null,null,null),m=p.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spreadsheet"},[n("div",[e._v(" "+e._s(e.currentLocal["description"])+" "),n("br"),n("br")]),n("ve-table",{staticStyle:{"word-break":"break-word"},attrs:{"fixed-header":"","scroll-width":0,"max-height":500,"border-y":"",columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey","virtual-scroll-option":e.virtualScrollOption,"cell-autofill-option":e.cellAutofillOption,"edit-option":e.editOption,"contextmenu-body-option":e.contextmenuBodyOption,"contextmenu-header-option":e.contextmenuHeaderOption,"row-style-option":e.rowStyleOption,"column-width-resize-option":e.columnWidthResizeOption}})],1)},b=[],v=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],x={mixins:[a["a"]],data:function(){return{startRowIndex:0,columnWidthResizeOption:{enable:!0},virtualScrollOption:{enable:!0,scrolling:this.scrolling},cellAutofillOption:{directionX:!0,directionY:!0,beforeAutofill:function(e){e.direction,e.sourceSelectionRangeIndexes,e.targetSelectionRangeIndexes,e.sourceSelectionData,e.targetSelectionData},afterAutofill:function(e){e.direction,e.sourceSelectionRangeIndexes,e.targetSelectionRangeIndexes,e.sourceSelectionData,e.targetSelectionData}},editOption:{beforeCellValueChange:function(e){e.row,e.column,e.changeValue},afterCellValueChange:function(e){e.row,e.column,e.changeValue}},contextmenuHeaderOption:{beforeShow:function(e){e.isWholeColSelection,e.selectionRangeKeys,e.selectionRangeIndexes},afterMenuClick:function(e){e.type,e.selectionRangeKeys,e.selectionRangeIndexes},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"EMPTY_COLUMN"},{type:"SEPARATOR"},{type:"LEFT_FIXED_COLUMN_TO"},{type:"CANCEL_LEFT_FIXED_COLUMN_TO"},{type:"RIGHT_FIXED_COLUMN_TO"},{type:"CANCEL_RIGHT_FIXED_COLUMN_TO"}]},contextmenuBodyOption:{beforeShow:function(e){var t=e.isWholeRowSelection,n=e.selectionRangeKeys,o=e.selectionRangeIndexes;console.log("---contextmenu body beforeShow--"),console.log("isWholeRowSelection::",t),console.log("selectionRangeKeys::",n),console.log("selectionRangeIndexes::",o)},afterMenuClick:function(e){var t=e.type,n=e.selectionRangeKeys,o=e.selectionRangeIndexes;console.log("---contextmenu body afterMenuClick--"),console.log("type::",t),console.log("selectionRangeKeys::",n),console.log("selectionRangeIndexes::",o)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"INSERT_ROW_ABOVE"},{type:"INSERT_ROW_BELOW"},{type:"SEPARATOR"},{type:"REMOVE_ROW"},{type:"EMPTY_ROW"},{type:"EMPTY_CELL"}]},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},tableData:[]}},computed:{currentLocal:function(){return l["a"][this.currentDocLang]["completeDemo"]["demo2"]},columns:function(){var e=[{field:"index",key:"index",operationColumn:!0,title:"",width:55,fixed:"left",renderBodyCell:this.renderRowIndex}];return e=e.concat(v.map((function(e){return{title:e,field:e,key:e,width:90,edit:!0}}))),e}},methods:{renderRowIndex:function(e){e.row,e.column;var t=e.rowIndex,n=this.$createElement;return n("span",[t+this.startRowIndex+1])},scrolling:function(e){var t=e.startRowIndex;e.visibleStartIndex,e.visibleEndIndex,e.visibleAboveCount,e.visibleBelowCount;this.startRowIndex=t},initTableData:function(){for(var e=[],t=function(t){var n={rowKey:t};v.forEach((function(e){n[e]=""})),1!==t&&3!==t||(n["C"]="YOU",n["D"]="CAN",n["E"]="TRY",n["F"]="ENTER",n["G"]="SOME",n["H"]="WORDS",n["I"]="!!!"),e.push(n)},n=0;n<5e3;n++)t(n);this.tableData=e}},created:function(){this.initTableData()}},g=x,y=(n("d04b"),Object(h["a"])(g,w,b,!1,null,null,null)),C=y.exports,R={name:"demo",components:{NormalDataGrid:m,Spreadsheet:C},mixins:[a["a"]],data:function(){return{}},computed:{currentLocal:function(){return l["a"][this.currentDocLang]["completeDemo"]}}},O=R,I=(n("37b1"),Object(h["a"])(O,o,i,!1,null,null,null));t["default"]=I.exports}}]);
//# sourceMappingURL=chunk-aad157fa.ae770e09.js.map