(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},19:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(16),n(18),n(19),n(1)),s=(n(21),n(2)),i=n.n(s),u=n(3);n(5);var m=function(e){var t,n=Object(a.useState)({}),c=Object(o.a)(n,2),l=c[0],s=c[1];return Object(a.useEffect)(function(){!function(){var t=Object(u.a)(i.a.mark(function t(){var n,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.peterportal.org/rest/v0/courses/"+e.name);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,console.log(a),s(a);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[e.name]),t=l.id?r.a.createElement("div",{className:"Information"},r.a.createElement("p",{id:"title"},l.title),r.a.createElement("p",{id:"department"},"Department: ",l.department),r.a.createElement("p",{id:"description"},l.description)):l.error?r.a.createElement("p",null,"Class Not Found"):r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"class"},e.name,r.a.createElement("div",null,t))};var p=function(e){var t,n=Object(a.useState)({}),c=Object(o.a)(n,2),l=c[0],s=c[1];return Object(a.useEffect)(function(){!function(){var t=Object(u.a)(i.a.mark(function t(){var n,a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n='\n                query {\n                    course(id: "'.concat(e.name,'"){\n                        title\n                        department\n                        description                       \n                    }\n            }'),t.next=3,fetch("https://api.peterportal.org/graphql",{method:"POST",body:JSON.stringify({query:n}),headers:{"Content-type":"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,console.log(r),s(r.data.course);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[e.name]),t=l?r.a.createElement("div",{className:"Information"},r.a.createElement("p",{id:"title"},l.title),r.a.createElement("p",{id:"department"},"Department: ",l.department),r.a.createElement("p",{id:"description"},l.description)):l?r.a.createElement("p",null,"Loading..."):r.a.createElement("p",null,"Class Not Found"),r.a.createElement("div",{className:"class"},e.name,r.a.createElement("div",null,t))};var d=function(e){document.title="Add Class";var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),u=i[0],d=i[1];return console.log(u),r.a.createElement("div",{className:"mainSection"},r.a.createElement("h1",null,"Welcome"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=c.toUpperCase();t=t.replace(" ",""),u.includes(t)||(d(u.concat(t)),l(""))}},r.a.createElement("label",null,"Add Favorite Class: "),r.a.createElement("input",{type:"text",value:c,className:"enterClass",onChange:function(e){l(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Add")),r.a.createElement("div",{className:"favClass"},u.map(function(e){return r.a.createElement(m,{name:e,key:e})})),r.a.createElement("div",{className:"favClass"},u.map(function(e){return r.a.createElement(p,{name:e,key:e})})))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d,null)))},v=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,27)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null))),v()},5:function(e,t,n){},7:function(e,t,n){e.exports=n(26)}},[[7,3,2]]]);
//# sourceMappingURL=main.c752bc9d.chunk.js.map