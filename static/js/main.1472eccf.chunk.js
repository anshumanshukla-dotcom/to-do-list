(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var c=a(0),o=a.n(c),r=a(18),s=a.n(r),l=(a(37),a(14)),n=a(10),i=(a(38),a(13)),d=(a(39),a(67)),b=a(29),m=a.n(b),j=a(1);function h(e){var t=localStorage.getItem("theme");return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-".concat(e.mode),children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(i.b,{className:"navbar-brand",to:"/",children:Object(j.jsx)(d.a,{style:{backgroundColor:"#4caf50"},variant:"primary"===e.mode?"circular":"rounded",children:Object(j.jsx)(m.a,{style:{color:"primary"===e.mode?"":"black"}})})}),Object(j.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.c,{exact:!0,activeClassName:"active",className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.c,{activeClassName:"active",className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(j.jsxs)("form",{className:"d-flex",children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):"",Object(j.jsxs)("div",{className:"form-check form-switch text-".concat((e.mode,"light")),children:["dark"===t?Object(j.jsx)("input",{className:"form-check-input",style:{cursor:"pointer"},onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckChecked",defaultChecked:!0,"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Toggle dark theme"}):Object(j.jsx)("input",{className:"form-check-input",style:{cursor:"pointer"},onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Toggle dark theme"}),Object(j.jsxs)("label",{className:"form-check-label",htmlFor:"primary"===t?"flexSwitchCheckDefault":"flexSwitchCheckChecked",style:{cursor:"pointer"},children:["primary"===e.mode?"Enable":"Disable"," Dark Mode"]})]})]})]})})}h.defaultProps={title:"Your Title Here",searchBar:!0};var u=a(30),p=a.n(u),x=function(e){var t=e.todo,a=e.onDelete,c=e.mode,r=o.a.useState("true"===localStorage.getItem("".concat(t.sno))),s=Object(n.a)(r,2),l=s[0],i=s[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:t.title}),Object(j.jsx)("p",{children:t.desc}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:t.sno,style:{cursor:"pointer"},"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Mark/unmark this task as done",checked:l,onChange:function(e){localStorage.setItem("".concat(t.sno),"".concat(e.target.checked)),i(e.target.checked)}}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:t.sno,style:{cursor:"pointer",color:"primary"===c?"green":"gold"},children:"Mark as done or completed."})]}),Object(j.jsx)("button",{className:"btn btn-sm btn-danger my-3","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Delete a todo item",onClick:function(){a(t)},children:Object(j.jsx)(p.a,{})})]}),Object(j.jsx)("hr",{})]})},g=function(e){document.title="To Do List | Home";return Object(j.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(j.jsx)("h3",{className:"text-center my-3",style:{color:"primary"===e.mode?"#4B1485":"white"},children:Object(j.jsx)("u",{children:"To Do List"})}),Object(j.jsx)("br",{}),0===e.todos.length?Object(j.jsx)("div",{className:"text-center",children:"Nothing to display. Try adding one!"}):e.todos.map((function(t){return Object(j.jsx)(x,{todo:t,onDelete:e.onDelete,mode:e.mode},t.sno)}))]})},O=function(){return Object(j.jsx)("footer",{className:"bg-dark text-light py-3",style:{position:"relative",top:"10vh",width:"100%",border:"2px solid red"},children:Object(j.jsx)("p",{className:"text-center",style:{paddingTop:"16px"},children:"Copyright \xa9 2020-2021 ToDoList.com"})})},y=(a(50),function(e){var t=e.addTodo,a=e.mode,o=e.showAlert,r=Object(c.useState)(""),s=Object(n.a)(r,2),l=s[0],d=s[1],b=Object(c.useState)(""),m=Object(n.a)(b,2),h=m[0],u=m[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("TITLE"),t=localStorage.getItem("DESCRIPTION");d(JSON.parse(e)),u(JSON.parse(t))}),[]),Object(c.useEffect)((function(){localStorage.setItem("TITLE",JSON.stringify(l)),localStorage.setItem("DESCRIPTION",JSON.stringify(h))})),Object(j.jsxs)("div",{className:"container my-3",children:[Object(j.jsx)("h3",{className:"text-center",style:{color:"primary"===a?"#4B1485":"white"},children:Object(j.jsx)("u",{children:"Add a Todo"})}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"emailHelp",className:"form-text",style:{color:"primary"===a?"red":"yellow"},children:["Fields marked with * are required. ",Object(j.jsx)(i.b,{style:{color:"primary"===a?"":"#194888"},to:"#",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",children:"Learn more"}),Object(j.jsx)("div",{className:"collapse text-center",id:"collapseExample",children:Object(j.jsx)("div",{className:"card card-body my-3",style:{backgroundColor:"primary"===a?"":"#13466e",color:"primary"===a?"black":"white"},children:"In case you want to add a todo item without description, press enter key in the 'Todo Description' field."})})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l&&h&&" "!==l.charAt(0)&&" "!==h.charAt(0)?(t(l,h),d(""),u(""),o("Your todo item has been added","success")):alert("Title or Description cannot be blank or cannot begin with a space.")},children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"title",className:"form-label",children:Object(j.jsx)("b",{children:"Todo Title *"})}),Object(j.jsx)("input",{type:"text",value:l,onChange:function(e){return d(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp",placeholder:"Enter the title...",style:{backgroundColor:"primary"===a?"":"#13466e",color:"primary"===a?"":"white"}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"desc",className:"form-label",children:Object(j.jsx)("b",{children:"Todo Description *"})}),Object(j.jsx)("textarea",{value:h,onChange:function(e){return u(e.target.value)},className:"form-control",id:"desc",rows:"3",placeholder:"Enter the description...",style:{backgroundColor:"primary"===a?"":"#13466e",color:"primary"===a?"":"white"}})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-sm my-2 btn-".concat("primary"===a?"outline-secondary":"outline-success"),"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Add a todo item",children:"Add Todo"})]})]})}),f=function(e){document.title="To Do List | About";return Object(j.jsxs)("div",{style:{minHeight:"70vh",margin:"0px 15px",fontSize:"20px"},children:[Object(j.jsx)("h1",{className:"text-center my-3",style:{color:"primary"===e.mode?"green":"#4B1485"},children:Object(j.jsx)("u",{children:"About Us"})}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{style:{color:"primary"===e.mode?"":"WHITE"},children:[Object(j.jsx)("h4",{children:"Welcome!"}),"We are constantly working towards improving our services.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Thanks for visiting."]})]})},v=a(3),N=a(31),k=a.n(N);var S=function(e){return e.alert&&Object(j.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(j.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),"!"]})," ",e.alert.msg,"."]})};var T=function(){var e,t=Object(c.useState)(null),a=Object(n.a)(t,2),o=a[0],r=a[1],s=function(e,t){r({msg:e,type:t}),setTimeout((function(){r(null)}),1500)},d=Object(c.useState)("primary"),b=Object(n.a)(d,2),m=b[0],u=b[1],p=function(e){localStorage.setItem("theme",e),u(e)};Object(c.useEffect)((function(){var e=localStorage.getItem("theme");e?p(e):u("primary"),"dark"===e&&(document.body.style.backgroundColor="grey")}),[]),e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var x=function(e){I(w.filter((function(t){return t!==e}))),localStorage.removeItem("".concat(e.sno)),localStorage.setItem("todos",JSON.stringify(w)),s("Your todo item has been deleted","success")},N=function(e,t){var a={sno:0===w.length?0:w[w.length-1].sno+1,title:e,desc:t};I([].concat(Object(l.a)(w),[a]))},T=Object(c.useState)(e),C=Object(n.a)(T,2),w=C[0],I=C[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(w))}),[w]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.a,{basename:"/TO-DO-LIST",children:[Object(j.jsx)(h,{title:"To Do List",searchBar:!1,mode:m,toggleMode:function(){"primary"===m?(p("dark"),document.body.style.backgroundColor="grey",s("Dark theme has been enabled","success")):(p("primary"),document.body.style.backgroundColor="pink",s("Light theme has been enabled","success"))}}),Object(j.jsx)(S,{alert:o}),Object(j.jsxs)(v.d,{children:[Object(j.jsx)(v.b,{exact:!0,path:"/",render:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"text-center my-3",style:{color:"primary"===m?"#042743":"#85144B",fontSize:"3rem",paddingBottom:"2rem"},children:Object(j.jsx)(k.a,{options:{autoStart:!0,loop:!0,delay:40,strings:["Welcome to ToDoList.com!","Hope you are doing well.","Have fun with us :)"]}})})}),Object(j.jsx)(y,{addTodo:N,mode:m,showAlert:s}),Object(j.jsx)(g,{todos:w,onDelete:x,mode:m})]})}}),Object(j.jsx)(v.b,{exact:!0,path:"/about",children:Object(j.jsx)(f,{mode:m})}),Object(j.jsx)(v.a,{to:"/"})]}),Object(j.jsx)(O,{})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),o(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),C()}},[[53,1,2]]]);
//# sourceMappingURL=main.1472eccf.chunk.js.map