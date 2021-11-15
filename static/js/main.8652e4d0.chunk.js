(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(17),r=c.n(n),o=(c(24),c(19)),l=c(9),i=(c(25),c(8)),b=c(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-".concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):"",Object(b.jsxs)("div",{className:"form-check form-switch text-".concat((e.mode,"light")),children:[Object(b.jsx)("input",{className:"form-check-input",style:{cursor:"pointer"},onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(b.jsxs)("label",{children:["primary"===e.mode?"Enable":"Disable"," Dark Mode"]})]})]})]})})}d.defaultProps={title:"Your Title Here",searchBar:!0};var j=function(e){var t=e.todo,c=e.onDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsxs)("div",{class:"form-check",children:[Object(b.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck1"}),Object(b.jsx)("label",{class:"form-check-label",for:"defaultCheck1",children:"Mark as done or completed."})]}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger my-3",onClick:function(){c(t)},children:"Delete"})]}),Object(b.jsx)("hr",{})]})},m=function(e){return Object(b.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(b.jsx)("h3",{className:"text-center my-3",style:{color:"primary"===e.mode?"blue":"white"},children:Object(b.jsx)("u",{children:"To Do List"})}),Object(b.jsx)("br",{}),0===e.todos.length?"Nothing to display. Try adding one!":e.todos.map((function(t){return Object(b.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},h=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-3",style:{position:"relative",top:"10vh",width:"100%",border:"2px solid red"},children:Object(b.jsx)("p",{className:"text-center",style:{paddingTop:"16px"},children:"Copyright \xa9 2020-2021 ToDoList.com"})})},u=function(e){var t=e.addTodo,c=e.mode,a=Object(s.useState)(""),n=Object(l.a)(a,2),r=n[0],o=n[1],i=Object(s.useState)(""),d=Object(l.a)(i,2),j=d[0],m=d[1];return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{className:"text-center",style:{color:"primary"===c?"blue":"white"},children:Object(b.jsx)("u",{children:"Add a Todo"})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text",style:{color:"primary"===c?"red":"yellow"},children:"Fields marked with * are required."}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r&&j?(t(r,j),o(""),m("")):alert("Title or Description cannot be blank.")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:Object(b.jsx)("b",{children:"Todo Title *"})}),Object(b.jsx)("input",{type:"text",value:r,onChange:function(e){return o(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:Object(b.jsx)("b",{children:"Todo Description *"})}),Object(b.jsx)("input",{type:"text",value:j,onChange:function(e){return m(e.target.value)},className:"form-control",id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},x=function(){return Object(b.jsxs)("div",{style:{minHeight:"70vh",margin:"0px 15px",fontSize:"20px"},children:[Object(b.jsx)("h1",{className:"text-center my-3",style:{color:"blue"},children:Object(b.jsx)("u",{children:"About Us"})}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:["Welcome!",Object(b.jsx)("br",{}),"We are constantly working towards improving our services.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Thanks for visiting."]})]})},O=c(2);var p=function(){var e,t=Object(s.useState)("primary"),c=Object(l.a)(t,2),a=c[0],n=c[1];e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var r=function(e){v(f.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(f))},j=function(e,t){var c={sno:0===f.length?0:f[f.length-1].sno+1,title:e,desc:t};v([].concat(Object(o.a)(f),[c]))},p=Object(s.useState)(e),g=Object(l.a)(p,2),f=g[0],v=g[1];return Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(f))}),[f]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{title:"To Do List",searchBar:!1,mode:a,toggleMode:function(){"primary"===a?(n("dark"),document.body.style.backgroundColor="grey"):(n("primary"),document.body.style.backgroundColor="pink")}}),Object(b.jsxs)(O.d,{children:[Object(b.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{addTodo:j,mode:a}),Object(b.jsx)(m,{todos:f,onDelete:r,mode:a})]})}}),Object(b.jsx)(O.b,{exact:!0,path:"/about",children:Object(b.jsx)(x,{mode:a})}),Object(b.jsx)(O.a,{to:"/"})]}),Object(b.jsx)(h,{})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[35,1,2]]]);
//# sourceMappingURL=main.8652e4d0.chunk.js.map