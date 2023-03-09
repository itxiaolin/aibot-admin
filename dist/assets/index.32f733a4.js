/*! 
 Build based on gin-vue-admin 
 Time : 1678354544000 */
/* empty css             *//* empty css               */import{E as e}from"./card.b4b80fae.js";import{E as a,a as t}from"./col.ee054e8d.js";import{E as s}from"./divider.5f849ee4.js";import{C as l,f as i,M as o}from"./date.6f611075.js";import{A as n,C as r,F as m,bk as u,I as d,q as p,ay as f,o as c,c as g,d as h,n as v,J as y,a3 as b,a1 as _,w as k,a4 as w,aw as j,f as E,a2 as T,K as S,a6 as x,a7 as C,_ as I,r as M,e as $,V as A,aD as B,h as L,E as z,bi as D,bj as F}from"./index.12a9298d.js";const R=n({name:"ElTimeline",setup(e,{slots:a}){const t=r("timeline");return m("timeline",a),()=>u("ul",{class:[t.b()]},[d(a,"default")])}}),U=p({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:f},hollow:{type:Boolean,default:!1}}),q=n({name:"ElTimelineItem"});var J=S(n({...q,props:U,setup(e){const a=r("timeline-item");return(e,t)=>(c(),g("li",{class:v([y(a).b(),{[y(a).e("center")]:e.center}])},[h("div",{class:v(y(a).e("tail"))},null,2),e.$slots.dot?E("v-if",!0):(c(),g("div",{key:0,class:v([y(a).e("node"),y(a).em("node",e.size||""),y(a).em("node",e.type||""),y(a).is("hollow",e.hollow)]),style:b({backgroundColor:e.color})},[e.icon?(c(),_(y(j),{key:0,class:v(y(a).e("icon"))},{default:k((()=>[(c(),_(w(e.icon)))])),_:1},8,["class"])):E("v-if",!0)],6)),e.$slots.dot?(c(),g("div",{key:1,class:v(y(a).e("dot"))},[d(e.$slots,"dot")],2)):E("v-if",!0),h("div",{class:v(y(a).e("wrapper"))},[e.hideTimestamp||"top"!==e.placement?E("v-if",!0):(c(),g("div",{key:0,class:v([y(a).e("timestamp"),y(a).is("top")])},T(e.timestamp),3)),h("div",{class:v(y(a).e("content"))},[d(e.$slots,"default")],2),e.hideTimestamp||"bottom"!==e.placement?E("v-if",!0):(c(),g("div",{key:1,class:v([y(a).e("timestamp"),y(a).is("bottom")])},T(e.timestamp),3))],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/timeline/src/timeline-item.vue"]]);const K=x(R,{TimelineItem:J}),O=C(J),V=""+new URL("logo.b188b094.png",import.meta.url).href,W=""+new URL("flipped-aurora.528f516e.png",import.meta.url).href,G=e=>(D("data-v-bd4af988"),e=e(),F(),e),H=L("gin-vue-admin"),N=G((()=>h("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[h("img",{class:"org-img dom-center",src:V,alt:"gin-vue-admin"})],-1))),P=G((()=>h("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[h("img",{class:"dom-center",src:"https://img.shields.io/github/watchers/flipped-aurora/gin-vue-admin.svg?label=Watch",alt:""})],-1))),Q=G((()=>h("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[h("img",{class:"dom-center",src:"https://img.shields.io/github/stars/flipped-aurora/gin-vue-admin.svg?style=social",alt:""})],-1))),X=G((()=>h("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[h("img",{class:"dom-center",src:"https://img.shields.io/github/forks/flipped-aurora/gin-vue-admin.svg?label=Fork",alt:""})],-1))),Y=G((()=>h("div",null,"flipped-aurora团队",-1))),Z=G((()=>h("a",{href:"https://github.com/flipped-aurora"},[h("img",{class:"org-img dom-center",src:W,alt:"flipped-aurora"})],-1))),ee=["href"],ae=["src"],te={class:"author-name",style:{}},se=G((()=>h("div",null,"提交记录",-1))),le=L("Load more"),ie={name:"About"},oe=I(Object.assign(ie,{setup(n){const r=M(0),m=()=>{r.value++,d()},u=M([]),d=()=>{l(r.value).then((({data:e})=>{e.forEach((e=>{e.commit.message&&u.value.push({from:i(e.commit.author.date,"yyyy-MM-dd"),title:e.commit.author.name,showDayAndMonth:!0,message:e.commit.message})}))}))},p=M([]);return d(),o().then((({data:e})=>{p.value=e,p.value.sort()})),(l,i)=>{const o=s,n=a,r=t,d=e,f=O,v=K,y=z;return c(),g("div",null,[$(r,{gutter:10},{default:k((()=>[$(n,{span:12},{default:k((()=>[$(d,null,{header:k((()=>[$(o,null,{default:k((()=>[H])),_:1})])),default:k((()=>[h("div",null,[$(r,null,{default:k((()=>[$(n,{span:8,offset:8},{default:k((()=>[N])),_:1})])),_:1}),$(r,{gutter:10},{default:k((()=>[$(n,{span:8},{default:k((()=>[P])),_:1}),$(n,{span:8},{default:k((()=>[Q])),_:1}),$(n,{span:8},{default:k((()=>[X])),_:1})])),_:1})])])),_:1}),$(d,{style:{"margin-top":"20px"}},{header:k((()=>[Y])),default:k((()=>[h("div",null,[$(r,null,{default:k((()=>[$(n,{span:8,offset:8},{default:k((()=>[Z])),_:1})])),_:1}),$(r,{style:{"margin-left":"40px"},gutter:20},{default:k((()=>[(c(!0),g(A,null,B(p.value,((e,a)=>(c(),_(n,{key:a,span:8},{default:k((()=>[h("a",{href:e.html_url},[h("img",{class:"avatar-img",src:e.avatar_url},null,8,ae),h("a",te,T(e.login),1)],8,ee)])),_:2},1024)))),128))])),_:1})])])),_:1})])),_:1}),$(n,{span:12},{default:k((()=>[$(d,null,{header:k((()=>[se])),default:k((()=>[h("div",null,[$(v,null,{default:k((()=>[(c(!0),g(A,null,B(u.value,((e,a)=>(c(),_(f,{key:a,timestamp:e.from,placement:"top"},{default:k((()=>[$(d,null,{default:k((()=>[h("h4",null,T(e.title),1),h("p",null,T(e.message),1)])),_:2},1024)])),_:2},1032,["timestamp"])))),128))])),_:1})]),$(y,{class:"load-more",type:"primary",link:"",onClick:m},{default:k((()=>[le])),_:1})])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-bd4af988"]]);export{oe as default};