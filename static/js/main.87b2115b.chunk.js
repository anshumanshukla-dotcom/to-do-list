(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var c=a(0),o=a.n(c),s=a(15),r=a.n(s),n=(a(28),a(13)),l=a(9),i=(a(29),a(12)),d=(a(30),a(1));function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-".concat(e.mode),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.c,{exact:!0,activeClassName:"active",className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.c,{activeClassName:"active",className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):"",Object(d.jsxs)("div",{className:"form-check form-switch text-".concat((e.mode,"light")),children:[Object(d.jsx)("input",{className:"form-check-input",style:{cursor:"pointer"},onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Toggle dark theme"}),Object(d.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{cursor:"pointer"},children:["primary"===e.mode?"Enable":"Disable"," Dark Mode"]})]})]})]})})}b.defaultProps={title:"Your Title Here",searchBar:!0};var j=a(21),m=a.n(j),h=function(e){var t=e.todo,a=e.onDelete,c=e.mode,s=o.a.useState("true"===localStorage.getItem("".concat(t.sno))),r=Object(l.a)(s,2),n=r[0],i=r[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:t.sno,style:{cursor:"pointer"},"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Mark/unmark as done/completed",checked:n,onChange:function(e){localStorage.setItem("".concat(t.sno),"".concat(e.target.checked)),i(e.target.checked)}}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:t.sno,style:{cursor:"pointer",color:"primary"===c?"green":"gold"},children:"Mark as done or completed."})]}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger my-3","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Delete a todo item",onClick:function(){a(t)},children:Object(d.jsx)(m.a,{})})]}),Object(d.jsx)("hr",{})]})},u=function(e){document.title="To Do List | Home";return Object(d.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(d.jsx)("h3",{className:"text-center my-3",style:{color:"primary"===e.mode?"#4B1485":"white"},children:Object(d.jsx)("u",{children:"To Do List"})}),Object(d.jsx)("br",{}),0===e.todos.length?Object(d.jsx)("div",{className:"text-center",children:"Nothing to display. Try adding one!"}):e.todos.map((function(t){return Object(d.jsx)(h,{todo:t,onDelete:e.onDelete,mode:e.mode},t.sno)}))]})},p=function(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-3",style:{position:"relative",top:"10vh",width:"100%",border:"2px solid red"},children:Object(d.jsx)("p",{className:"text-center",style:{paddingTop:"16px"},children:"Copyright \xa9 2020-2021 ToDoList.com"})})},x=(a(44),function(e){var t=e.addTodo,a=e.mode,o=e.showAlert,s=Object(c.useState)(""),r=Object(l.a)(s,2),n=r[0],b=r[1],j=Object(c.useState)(""),m=Object(l.a)(j,2),h=m[0],u=m[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{className:"text-center",style:{color:"primary"===a?"#4B1485":"white"},children:Object(d.jsx)("u",{children:"Add a Todo"})}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{id:"emailHelp",className:"form-text",style:{color:"primary"===a?"red":"yellow"},children:["Fields marked with * are required. ",Object(d.jsx)(i.b,{style:{color:"primary"===a?"":"#194888"},to:"#",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",children:"Learn more"}),Object(d.jsx)("div",{className:"collapse text-center",id:"collapseExample",children:Object(d.jsx)("div",{className:"card card-body my-3",style:{backgroundColor:"primary"===a?"":"#13466e",color:"primary"===a?"black":"white"},children:"In case you want to add a todo item without description, press enter in the 'Todo Description' field."})})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n&&h&&" "!==n.charAt(0)&&" "!==h.charAt(0)?(t(n,h),b(""),u(""),o("Your todo item has been added","success")):alert("Title or Description cannot be blank or cannot begin with a space.")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:Object(d.jsx)("b",{children:"Todo Title *"})}),Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){return b(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp",placeholder:"Enter the title...",style:{backgroundColor:"primary"===a?"":"#13466e",color:"primary"===a?"":"white"}})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:Object(d.jsx)("b",{children:"Todo Description *"})}),Object(d.jsx)("textarea",{value:h,onChange:function(e){return u(e.target.value)},className:"form-control",id:"desc",rows:"3",placeholder:"Enter the description...",style:{backgroundColor:"primary"===a?"":"#13466e",color:"primary"===a?"":"white"}})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm my-2 btn-".concat("primary"===a?"outline-secondary":"outline-success"),"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Add a todo item",children:"Add Todo"})]})]})}),O=function(e){document.title="To Do List | About";return Object(d.jsxs)("div",{style:{minHeight:"70vh",margin:"0px 15px",fontSize:"20px"},children:[Object(d.jsx)("h1",{className:"text-center my-3",style:{color:"primary"===e.mode?"green":"#4B1485"},children:Object(d.jsx)("u",{children:"About Us"})}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{style:{color:"primary"===e.mode?"":"WHITE"},children:[Object(d.jsx)("h4",{children:"Welcome!"}),"We are constantly working towards improving our services.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Thanks for visiting."]})]})},g=a(3),y=a(22),f=a.n(y);var v=function(e){return e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),"!"]})," ",e.alert.msg,"."]})};var N=function(){var e,t=Object(c.useState)(null),a=Object(l.a)(t,2),o=a[0],s=a[1],r=function(e,t){s({msg:e,type:t}),setTimeout((function(){s(null)}),1500)},j=Object(c.useState)("primary"),m=Object(l.a)(j,2),h=m[0],y=m[1];e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var N=function(e){C(T.filter((function(t){return t!==e}))),localStorage.removeItem("".concat(e.sno)),localStorage.setItem("todos",JSON.stringify(T)),r("Your todo item has been deleted","success")},k=function(e,t){var a={sno:0===T.length?0:T[T.length-1].sno+1,title:e,desc:t};C([].concat(Object(n.a)(T),[a]))},S=Object(c.useState)(e),w=Object(l.a)(S,2),T=w[0],C=w[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(T))}),[T]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{title:"To Do List",searchBar:!1,mode:h,toggleMode:function(){"primary"===h?(y("dark"),document.body.style.backgroundColor="grey",r("Dark theme has been enabled","success")):(y("primary"),document.body.style.backgroundColor="pink",r("Light theme has been enabled","success"))}}),Object(d.jsx)(v,{alert:o}),Object(d.jsxs)(g.d,{children:[Object(d.jsx)(g.b,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"text-center my-3",style:{color:"primary"===h?"#042743":"#85144B",fontSize:"3rem",paddingBottom:"2rem"},children:Object(d.jsx)(f.a,{options:{autoStart:!0,loop:!0,delay:40,strings:["Welcome to ToDoList.com!","Hope you are doing good.","Have fun with us :)"]}})})}),Object(d.jsx)(x,{addTodo:k,mode:h,showAlert:r}),Object(d.jsx)(u,{todos:T,onDelete:N,mode:h})]})}}),Object(d.jsx)(g.b,{exact:!0,path:"/about",children:Object(d.jsx)(O,{mode:h})}),Object(d.jsx)(g.a,{to:"/"})]}),Object(d.jsx)(p,{})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),o(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),k()}},[[47,1,2]]]);
//# sourceMappingURL=main.87b2115b.chunk.js.map