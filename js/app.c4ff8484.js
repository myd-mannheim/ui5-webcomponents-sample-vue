(function(t){function e(e){for(var i,s,a=e[0],r=e[1],l=e[2],c=0,f=[];c<a.length;c++)s=a[c],n[s]&&f.push(n[s][0]),n[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(f.length)f.shift()();return d.push.apply(d,l||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],i=!0,a=1;a<o.length;a++){var r=o[a];0!==n[r]&&(i=!1)}i&&(d.splice(e--,1),t=s(s.s=o[0]))}return t}var i={},n={app:0},d=[];function s(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=i,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=r;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var i=o("64a9"),n=o.n(i);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app"},[o("header",{staticClass:"app-header"},[o("ui5-shellbar",{attrs:{"primary-title":"UI5 Web Components Vue Sample Application",logo:t.logo}})],1),o("section",{staticClass:"app-content"},[o("div",{staticClass:"create-todo-wrapper"},[o("ui5-input",{ref:"todoInput",staticClass:"add-todo-element-width",attrs:{placeholder:"My Todo ...",id:"add-input"}}),o("ui5-datepicker",{ref:"todoDeadline",staticClass:"add-todo-element-width",attrs:{"format-pattern":"dd/MM/yyyy",id:"date-picker"}}),o("ui5-button",{ref:"addButton",staticClass:"add-todo-element-width",attrs:{type:"Emphasized"},on:{press:t.handleAdd}},[t._v("Add Todo")])],1),o("div",{staticClass:"list-todos-wrapper"},[o("TodoList",{attrs:{todos:t.todos},on:{selectionchange:t.handleDone,itemdeleted:t.handleRemove,itemedit:t.handleEdit}}),o("ui5-panel",{attrs:{"header-text":"Completed tasks"}},[o("TodoList",{attrs:{todos:t.doneTodos},on:{selectionchange:t.handleUndone,itemdeleted:t.handleRemove,itemedit:t.handleEdit}})],1)],1)]),o("ui5-dialog",{ref:"editDialog",attrs:{"header-text":"Edit Todo item"}},[o("div",{staticClass:"dialog-content"},[o("div",{staticClass:"edit-wrapper"},[o("ui5-label",[t._v("Title:")]),o("ui5-textarea",{ref:"titleEditInput",staticClass:"title-textarea",attrs:{"show-exceeded-text":"","max-length":"24",value:t.todoBeingEdittedText}})],1),o("div",{staticClass:"edit-wrapper date-edit-fields"},[o("ui5-label",[t._v("Date:")]),o("ui5-datepicker",{ref:"dateEditInput",attrs:{"format-pattern":"dd/MM/yyyy",value:t.todoBeingEdittedDate}})],1)]),o("div",{staticClass:"dialog-footer",attrs:{"data-ui5-slot":"footer"}},[o("ui5-button",{attrs:{type:"Transparent"},on:{press:t.cancelEdits}},[t._v("Cancel")]),o("ui5-button",{attrs:{type:"Emphasized"},on:{press:t.saveEdits}},[t._v("Save")])],1)])],1)},d=[],s=o("cebc"),a=(o("6b54"),o("75fc")),r=(o("21fc"),o("cf05")),l=o.n(r),u=(o("e6e1"),o("2b3f"),o("ae7a"),o("3f36"),o("4f90"),o("3807"),o("55df"),o("ce22"),o("afc7"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ui5-list",{ref:"list",attrs:{id:"todo-list",mode:"MultiSelect"},on:{selectionChange:t.onSelectionChange}},t._l(t.todos,function(e){return o("TodoItem",{key:e.id,attrs:{todo:e,datakey:e.id},on:{itemdeleted:t.onItemDeleted,itemedit:t.onItemEdit}})}),1)}),c=[],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ui5-li-custom",{attrs:{"data-key":t.datakey,selected:t.todo.done}},[o("div",{staticClass:"li-content"},[o("span",{staticClass:"li-content-text"},[t._v(t._s(t.todo.text)+" - finish before: "+t._s(t.todo.deadline))]),o("div",{staticClass:"li-content-actions"},[o("ui5-button",{staticClass:"edit-btn",on:{press:t.onEditPress}},[t._v("Edit")]),o("ui5-button",{attrs:{type:"Negative"},on:{press:t.onDeletePress}},[t._v("Delete")])],1)])])},p=[],h=(o("00ba"),i["a"].component("TodoItem",{props:["todo","datakey"],methods:{onEditPress:function(){this.$emit("itemedit",{id:this.todo.id})},onDeletePress:function(){this.$emit("itemdeleted",{id:this.todo.id})}}})),m=h,v=m,g=o("2877"),b=Object(g["a"])(v,f,p,!1,null,null,null);b.options.__file="TodoItem.vue";b.exports,o("f1ce");var y=i["a"].component("TodoList",{props:["todos"],methods:{onSelectionChange:function(t){this.$emit("selectionchange",t)},onItemDeleted:function(t){this.$emit("itemdeleted",t)},onItemEdit:function(t){this.$emit("itemedit",t)}}}),E=y,x=E,T=Object(g["a"])(x,u,c,!1,null,null,null);T.options.__file="TodoList.vue";T.exports;var _=i["a"].component("app",{data:function(){return{todos:[{text:"Get some carrots",id:"i1",deadline:"27/7/2018",done:!1},{text:"Do some magic",id:"i2",deadline:"22/7/2018",done:!1},{text:"Go to the gym",id:"i3",deadline:"24/7/2018",done:!1},{text:"Buy milk",id:"i4",deadline:"30/7/2018",done:!1}],doneTodos:[{text:"Eat some fruits",id:"i5",deadline:"29/7/2018",done:!0}],logo:l.a,todoBeingEdittedText:"",todoBeingEdittedDate:"",selectedEditTodo:""}},methods:{handleAdd:function(){this.todos=[].concat(Object(a["a"])(this.todos),[{text:this.$refs["todoInput"].value,id:this.todos.length+1,deadline:this.$refs["todoDeadline"].value,done:!1}])},handleDone:function(t){var e=t.detail.items[0],o=e.getAttribute("data-key"),i=this.todos.filter(function(t){return o===t.id.toString()})[0];i.done=!0,this.doneTodos.push(i),this.todos=this.todos.filter(function(t){return o!==t.id.toString()})},handleUndone:function(t){var e=t.detail.items,o=e.map(function(t){return t.getAttribute("data-key")}),i=this.doneTodos.filter(function(t){return-1===o.indexOf(t.id.toString())}).map(function(t){return Object(s["a"])({},t,{done:!1})});this.doneTodos=this.doneTodos.filter(function(t){return o.indexOf(t.id.toString())>-1}),this.todos=[].concat(Object(a["a"])(this.todos),Object(a["a"])(i))},handleRemove:function(t){var e=this.todos.filter(function(e){return e.id.toString()!==t.id});this.todos=e;var o=this.doneTodos.filter(function(e){return e.id.toString()!==t.id});this.doneTodos=o},handleEdit:function(t){var e,o=this.todos.filter(function(e){return e.id.toString()===t.id});e=o.length?o[0]:this.doneTodos.filter(function(e){return e.id.toString()===t.id})[0],this.todoBeingEdittedText=e.text,this.todoBeingEdittedDate=e.deadline,this.selectedEditTodo=e.id,this.$refs["editDialog"].open()},saveEdits:function(){var t=this,e=this.$refs["titleEditInput"].value,o=this.$refs["dateEditInput"].value;this.todos=this.todos.map(function(i){return i.id===t.selectedEditTodo&&(i.text=e,i.deadline=o),i}),this.doneTodos=this.doneTodos.map(function(i){return i.id===t.selectedEditTodo&&(i.text=e,i.deadline=o),i}),this.$refs["editDialog"].close()},cancelEdits:function(){this.$refs["editDialog"].close()}}}),C=_,w=C,D=(o("034f"),Object(g["a"])(w,n,d,!1,null,null,null));D.options.__file="App.vue";var O=D.exports;i["a"].config.productionTip=!1,i["a"].config.ignoredElements=[/^ui5-/],new i["a"]({render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.60a8874b.png"}});
//# sourceMappingURL=app.c4ff8484.js.map