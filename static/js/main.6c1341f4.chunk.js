(this["webpackJsonpmy-todo-list"]=this["webpackJsonpmy-todo-list"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),i=n.n(o),s=n(7),d=n.n(s),a=(n(14),n(3)),l=n(6),r=function(e){var t=e.todo,n=e.handleDone,o=e.handleDelete;return Object(c.jsxs)("li",{className:t.done?"done":"",children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",className:"checkbox-input",onClick:function(){return n(t)},defaultChecked:t.done}),Object(c.jsx)("span",{className:"checkbox-label",children:t.title})]}),Object(c.jsx)("button",{onClick:function(){return o(t)},className:"btn is-delete",children:"\u524a\u9664"})]})},u=function(e){var t=e.todos,n=e.settodos,o=function(e){n((function(t){return t.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},e),{},{done:!e.done}):t}))}))},i=function(e){n((function(t){return t.filter((function(t){return t.id!==e.id}))}))};return Object(c.jsx)("div",{className:"inner",children:t.length<=0?"\u767b\u9332\u3055\u308c\u305fTODO\u306f\u3042\u308a\u307e\u305b\u3093\u3002":Object(c.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(c.jsx)(r,{todo:e,handleDelete:i,handleDone:o},e.id)}))})})},j=n(8),b=function(e){var t=e.settodos,n=e.todos,i=Object(o.useState)(""),s=Object(a.a)(i,2),d=s[0],l=s[1],r=Object(o.useState)(n.length+1),u=Object(a.a)(r,2),b=u[0],O=u[1];return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"inputForm",children:Object(c.jsxs)("div",{className:"inner",children:[Object(c.jsx)("input",{type:"text",className:"input",value:d,onChange:function(e){l(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){O(b+1),t([{id:b,title:d,done:!1}].concat(Object(j.a)(n))),l("")},className:"btn is-primary",children:"\u8ffd\u52a0"})]})})})},O=(n(15),[{id:2,title:"\u6b21\u306eTodo",done:!1},{id:1,title:"\u6700\u521d\u306eTodo",done:!0}]),h=function(){var e=Object(o.useState)(O),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{todos:n,settodos:i}),Object(c.jsx)(u,{todos:n,settodos:i})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};d.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.6c1341f4.chunk.js.map