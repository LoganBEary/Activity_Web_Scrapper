(this["webpackJsonpweb-scrapper"]=this["webpackJsonpweb-scrapper"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},74:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(4),i=n(35),r=n.n(i),s=(n(49),n(50),n(11)),a=n(14),o=n.n(a),j=n(36),l=(n(74),n(12)),b=n(5),u=function(){return Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h1",{children:" Find Your Local Shinanigans "})})},d=n(23),h=n.n(d),O=n(41),x=n(10),p=function(e){return Object(b.jsx)(x.b,{children:Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.g,{children:e.Dtitle}),Object(b.jsx)(x.d,{top:!0,width:"100%",src:e.imglink,alt:"Movie Poster"}),Object(b.jsx)(x.e,{children:e.subt}),Object(b.jsx)(x.f,{children:e.bodytxt}),Object(b.jsx)(x.a,{onClick:function(t){return window.location.href=e.link},children:"Link Btn?"})]})})},f=(n(84),function(){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){return window.location.href="http://127.0.0.1:5000/"},children:"Back"})})}),m=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){var e=Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/choices").then((function(e){i(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{children:Object(b.jsxs)(c.Helmet,{children:[Object(b.jsx)("meta",{charSet:"utf-8"}),Object(b.jsx)("title",{children:"Found Activities!"})]})}),Object(b.jsx)(f,{}),Object(b.jsx)("div",{className:"card-space",children:n&&n.length>2?n.map((function(e,t){return Object(b.jsx)(p,{className:"card",Dtitle:e.title,imglink:e.img_link,subt:e.subtxt,bodytxt:e.body,link:e.html_link},t)})):console.log("Nope")})]})},v=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(!1),d=Object(s.a)(a,2),h=d[0],O=d[1],x=Object(c.useState)(!1),p=Object(s.a)(x,2),f=p[0],v=p[1],g=Object(c.useState)(!1),k=Object(s.a)(g,2),w=k[0],N=k[1],S=/[a-zA-Z_]/g,y=""!==i.trim()&&!S.test(i)&&i.length<=5,F=!y&&h||i.length>5,z=!1;y&&!f&&(z=!0);var C=F||f?"box form-control invalid":"box form-control";return w?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.b,{push:!0,to:{pathname:"/output"}}),Object(b.jsx)(m,{})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)("title",{children:"Find Shenanigans "}),Object(b.jsx)("meta",{name:"description",content:"App Description"}),Object(b.jsx)("meta",{name:"theme-color",content:"#008f68"})]}),Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),O(!0),y&&(r(""),O(!1))},className:"zipForm",children:Object(b.jsxs)("div",{className:C,children:[Object(b.jsx)("label",{htmlFor:"zipcode",className:"label-cover",children:e.content}),Object(b.jsx)("input",{className:"zip-entry",type:"text",id:"zip",onBlur:function(e){O(!0)},onChange:function(e){r(e.target.value);var t=S.test(e.target.value);v(!0===t)},value:i}),Object(b.jsx)("button",{className:"getZip",disabled:!z,onClick:function(e){e.preventDefault(),o.a.post("/choices",{enteredZip:i}).then((function(e){return N(!0)})).catch((function(e){return console.log(e.data)}))},children:"Submit"}),F||f?Object(b.jsx)("p",{className:"error-text",children:"Invalid Zipcode"}):null]})})]})};var g=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(l.c,{exact:!0,path:"/",children:Object(b.jsx)(v,{content:Object(b.jsx)("p",{children:"Please Enter Your Zip Code"})})})})};r.a.render(Object(b.jsx)(l.a,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.ee38d284.chunk.js.map