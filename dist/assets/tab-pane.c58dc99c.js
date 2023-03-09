/*! 
 Build based on gin-vue-admin 
 Time : 1678354544000 */
import{al as e,cb as a,ch as t,q as l,s,bl as o,A as n,N as r,P as i,C as u,r as c,D as d,W as v,U as b,o as p,c as m,n as f,J as h,a3 as y,K as g,af as C,ci as x,cj as $,z as k,Q as w,T as P,e as N,aw as T,bC as S,bD as B,b3 as R,at as A,ak as E,F,ck as K,I as _,ar as L,bU as j,x as q,ao as z,X as U,cl as V,a as D,bn as M,ag as W,ah as X,f as H,a6 as I,a7 as J}from"./index.12a9298d.js";import{c as O}from"./strings.e4f34ae9.js";const Q=Symbol("tabsRootContextKey"),Y=(l,s)=>{const o={},n=e([]);return{children:n,addChild:e=>{o[e.uid]=e,n.value=((e,l,s)=>a(e.subTree).filter((e=>{var a;return t(e)&&(null==(a=e.type)?void 0:a.name)===l&&!!e.component})).map((e=>e.component.uid)).map((e=>s[e])).filter((e=>!!e)))(l,s,o)},removeChild:e=>{delete o[e],n.value=n.value.filter((a=>a.uid!==e))}}},G=l({tabs:{type:s(Array),default:()=>o([])}}),Z="ElTabBar",ee=n({name:Z});var ae=g(n({...ee,props:G,setup(e,{expose:a}){const t=e,l=C(),s=r(Q);s||i(Z,"<el-tabs><el-tab-bar /></el-tabs>");const o=u("tabs"),n=c(),g=c(),x=()=>g.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y",r="x"===n?"left":"top";return t.tabs.every((s=>{var n,i;const u=null==(i=null==(n=l.parent)?void 0:n.refs)?void 0:i[`tab-${s.uid}`];if(!u)return!1;if(!s.active)return!0;e=u[`offset${O(r)}`],a=u[`client${O(o)}`];const c=window.getComputedStyle(u);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(c.paddingLeft)+Number.parseFloat(c.paddingRight)),e+=Number.parseFloat(c.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${O(n)}(${e}px)`}})();return d((()=>t.tabs),(async()=>{await v(),x()}),{immediate:!0}),b(n,(()=>x())),a({ref:n,update:x}),(e,a)=>(p(),m("div",{ref_key:"barRef",ref:n,class:f([h(o).e("active-bar"),h(o).is(h(s).props.tabPosition)]),style:y(g.value)},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const te=l({panes:{type:s(Array),default:()=>o([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),le="ElTabNav",se=n({name:le,props:te,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=C(),s=r(Q);s||i(le,"<el-tabs><tab-nav /></el-tabs>");const o=u("tabs"),n=x(),p=$(),m=c(),f=c(),h=c(),y=c(!1),g=c(0),E=c(!1),F=c(!0),K=k((()=>["top","bottom"].includes(s.props.tabPosition)?"width":"height")),_=k((()=>({transform:`translate${"width"===K.value?"X":"Y"}(-${g.value}px)`}))),L=()=>{if(!m.value)return;const e=m.value[`offset${O(K.value)}`],a=g.value;if(!a)return;const t=a>e?a-e:0;g.value=t},j=()=>{if(!m.value||!f.value)return;const e=f.value[`offset${O(K.value)}`],a=m.value[`offset${O(K.value)}`],t=g.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;g.value=l},q=async()=>{const e=f.value;if(!(y.value&&h.value&&m.value&&e))return;await v();const a=h.value.querySelector(".is-active");if(!a)return;const t=m.value,l=["top","bottom"].includes(s.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=l?e.offsetWidth-n.width:e.offsetHeight-n.height,i=g.value;let u=i;l?(o.left<n.left&&(u=i-(n.left-o.left)),o.right>n.right&&(u=i+o.right-n.right)):(o.top<n.top&&(u=i-(n.top-o.top)),o.bottom>n.bottom&&(u=i+(o.bottom-n.bottom))),u=Math.max(u,0),g.value=Math.min(u,r)},z=()=>{if(!f.value||!m.value)return;const e=f.value[`offset${O(K.value)}`],a=m.value[`offset${O(K.value)}`],t=g.value;a<e?(y.value=y.value||{},y.value.prev=t,y.value.next=t+a<e,e-t<a&&(g.value=e-a)):(y.value=!1,t>0&&(g.value=0))},U=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=A;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),V()},V=()=>{F.value&&(E.value=!0)},D=()=>E.value=!1;return d(n,(e=>{"hidden"===e?F.value=!1:"visible"===e&&setTimeout((()=>F.value=!0),50)})),d(p,(e=>{e?setTimeout((()=>F.value=!0),50):F.value=!1})),b(h,z),w((()=>setTimeout((()=>q()),0))),P((()=>z())),a({scrollToActiveTab:q,removeFocus:D}),d((()=>e.panes),(()=>l.update()),{flush:"post"}),()=>{const a=y.value?[N("span",{class:[o.e("nav-prev"),o.is("disabled",!y.value.prev)],onClick:L},[N(T,null,{default:()=>[N(S,null,null)]})]),N("span",{class:[o.e("nav-next"),o.is("disabled",!y.value.next)],onClick:j},[N(T,null,{default:()=>[N(B,null,null)]})])]:null,l=e.panes.map(((a,l)=>{var n,r,i,u;const c=a.uid,d=a.props.disabled,v=null!=(r=null!=(n=a.props.name)?n:a.index)?r:`${l}`,b=!d&&(a.isClosable||e.editable);a.index=`${l}`;const p=b?N(T,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[N(R,null,null)]}):null,m=(null==(u=(i=a.slots).label)?void 0:u.call(i))||a.props.label,f=!d&&a.active?0:-1;return N("div",{ref:`tab-${c}`,class:[o.e("item"),o.is(s.props.tabPosition),o.is("active",a.active),o.is("disabled",d),o.is("closable",b),o.is("focus",E.value)],id:`tab-${v}`,key:`tab-${c}`,"aria-controls":`pane-${v}`,role:"tab","aria-selected":a.active,tabindex:f,onFocus:()=>V(),onBlur:()=>D(),onClick:e=>{D(),t("tabClick",a,v,e)},onKeydown:e=>{!b||e.code!==A.delete&&e.code!==A.backspace||t("tabRemove",a,e)}},[m,p])}));return N("div",{ref:h,class:[o.e("nav-wrap"),o.is("scrollable",!!y.value),o.is(s.props.tabPosition)]},[a,N("div",{class:o.e("nav-scroll"),ref:m},[N("div",{class:[o.e("nav"),o.is(s.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(s.props.tabPosition))],ref:f,style:_.value,role:"tablist",onKeydown:U},[e.type?null:N(ae,{tabs:[...e.panes]},null),l])])])}}}),oe=l({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:s(Function),default:()=>!0},stretch:Boolean}),ne=e=>q(e)||z(e);var re=n({name:"ElTabs",props:oe,emits:{[L]:e=>ne(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>ne(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>ne(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s,o;const n=u("tabs"),{children:r,addChild:i,removeChild:b}=Y(C(),"ElTabPane"),p=c(),m=c(null!=(o=null!=(s=e.modelValue)?s:e.activeName)?o:"0"),f=async t=>{var l,s,o;if(m.value!==t&&!j(t))try{!1!==await(null==(l=e.beforeLeave)?void 0:l.call(e,t,m.value))&&((e=>{m.value=e,a(L,e),a("tabChange",e)})(t),null==(o=null==(s=p.value)?void 0:s.removeFocus)||o.call(s))}catch(n){}},h=(e,t,l)=>{e.props.disabled||(f(t),a("tabClick",e,l))},y=(e,t)=>{e.props.disabled||j(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},g=()=>{a("edit",void 0,"add"),a("tabAdd")};return E({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},k((()=>!!e.activeName))),d((()=>e.activeName),(e=>f(e))),d((()=>e.modelValue),(e=>f(e))),d(m,(async()=>{var e;await v(),null==(e=p.value)||e.scrollToActiveTab()})),F(Q,{props:e,currentName:m,registerPane:i,unregisterPane:b}),l({currentName:m}),()=>{const a=e.editable||e.addable?N("span",{class:n.e("new-tab"),tabindex:"0",onClick:g,onKeydown:e=>{e.code===A.enter&&g()}},[N(T,{class:n.is("icon-plus")},{default:()=>[N(K,null,null)]})]):null,l=N("div",{class:[n.e("header"),n.is(e.tabPosition)]},[a,N(se,{ref:p,currentName:m.value,editable:e.editable,type:e.type,panes:r.value,stretch:e.stretch,onTabClick:h,onTabRemove:y},null)]),s=N("div",{class:n.e("content")},[_(t,"default")]);return N("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:"card"===e.type,[n.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[l,s]:[s,l]])}}});const ie=l({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ue=["id","aria-hidden","aria-labelledby"],ce="ElTabPane",de=n({name:ce});var ve=g(n({...de,props:ie,setup(e){const a=e,t=C(),l=U(),s=r(Q);s||i(ce,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=u("tab-pane"),n=c(),v=k((()=>a.closable||s.props.closable)),b=V((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:n.value)})),y=c(b.value),g=k((()=>{var e;return null!=(e=a.name)?e:n.value})),x=V((()=>!a.lazy||y.value||b.value));d(b,(e=>{e&&(y.value=!0)}));const $=D({uid:t.uid,slots:l,props:a,paneName:g,active:b,index:n,isClosable:v});return w((()=>{s.registerPane($)})),M((()=>{s.unregisterPane($.uid)})),(e,a)=>h(x)?W((p(),m("div",{key:0,id:`pane-${h(g)}`,class:f(h(o).b()),role:"tabpanel","aria-hidden":!h(b),"aria-labelledby":`tab-${h(g)}`},[_(e.$slots,"default")],10,ue)),[[X,h(b)]]):H("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const be=I(re,{TabPane:ve}),pe=J(ve);export{pe as E,be as a};
