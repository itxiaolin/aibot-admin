/*! 
 Build based on gin-vue-admin 
 Time : 1678354544000 */
/* empty css             */import{E as e}from"./scrollbar.561042ca.js";/* empty css                *//* empty css               */import{ce as a,u as o,bg as t,b$ as r,r as s,D as l,bn as n,cf as c,o as i,c as u,e as d,w as f,aE as m,V as p,aD as v,J as b,a3 as h,a1 as x,f as g}from"./index.12a9298d.js";import k from"./index.944c4ac4.js";import{b as j}from"./index.19036595.js";import"./menuItem.47a1981c.js";/* empty css             */import"./index.bf155b92.js";import"./index.b753be06.js";import"./asyncSubmenu.ba0ea4f3.js";const y={name:"Aside"},T=Object.assign(y,{setup(y){const T=a(),M=o(),w=t(),B=r(),q=s({}),E=()=>{switch(w.sideMode){case"#fff":q.value={background:"#fff",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#333",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#333"};break;case"#191a23":q.value={background:"#191a23",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#fff",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#fff"}}};E();const O=s("");l((()=>T),(()=>{O.value=T.meta.activeName||T.name}),{deep:!0}),l((()=>w.sideMode),(()=>{E()}));const _=s(!1);(()=>{O.value=T.meta.activeName||T.name;document.body.clientWidth<1e3&&(_.value=!_.value),c.on("collapse",(e=>{_.value=e}))})(),n((()=>{c.off("collapse")}));const D=(e,a,o,t)=>{var r,s;const l={},n={};(null==(r=B.routeMap[e])?void 0:r.parameters)&&(null==(s=B.routeMap[e])||s.parameters.forEach((e=>{"query"===e.type?l[e.key]=e.value:n[e.key]=e.value}))),e!==T.name&&(e.indexOf("http://")>-1||e.indexOf("https://")>-1?window.open(e):M.push({name:e,query:l,params:n}))};return(a,o)=>{const t=j,r=e;return i(),u("div",{style:h({background:b(w).sideMode})},[d(r,{style:{height:"calc(100vh - 60px)"}},{default:f((()=>[d(m,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:f((()=>[d(t,{collapse:_.value,"collapse-transition":!1,"default-active":O.value,"background-color":q.value.background,"active-text-color":q.value.active,class:"el-menu-vertical","unique-opened":"",onSelect:D},{default:f((()=>[(i(!0),u(p,null,v(b(B).asyncRouters[0].children,(e=>(i(),u(p,null,[e.hidden?g("",!0):(i(),x(k,{key:e.name,"is-collapse":_.value,"router-info":e,theme:q.value},null,8,["is-collapse","router-info","theme"]))],64)))),256))])),_:1},8,["collapse","default-active","background-color","active-text-color"])])),_:1})])),_:1})],4)}}});export{T as default};
