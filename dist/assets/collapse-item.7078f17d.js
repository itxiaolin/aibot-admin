/*! 
 Build based on gin-vue-admin 
 Time : 1678354544000 */
import{q as e,s as a,bl as s,ar as l,av as t,ao as i,r as o,D as n,F as d,C as r,z as c,A as u,o as m,c as p,I as v,n as b,J as f,K as h,N as C,d as K,aF as g,ai as k,h as y,a2 as x,e as N,w as A,bD as I,aw as w,ag as _,ah as E,a6 as F,a7 as $}from"./index.12a9298d.js";import{c as j}from"./form-item.b18f90c3.js";import{_ as H}from"./index.b753be06.js";import{g as S}from"./rand.6d0d1e93.js";const V=Symbol("collapseContextKey"),B=e=>typeof i(e),D=e({accordion:Boolean,modelValue:{type:a([Array,String,Number]),default:()=>s([])}}),W={[l]:B,[t]:B},q=u({name:"ElCollapse"});var z=h(u({...q,props:D,emits:W,setup(e,{expose:a,emit:s}){const i=e,{activeNames:u,setActiveNames:h}=((e,a)=>{const s=o(j(e.modelValue)),i=i=>{s.value=i;const o=e.accordion?s.value[0]:s.value;a(l,o),a(t,o)};return n((()=>e.modelValue),(()=>s.value=j(e.modelValue)),{deep:!0}),d(V,{activeNames:s,handleItemClick:a=>{if(e.accordion)i([s.value[0]===a?"":a]);else{const e=[...s.value],l=e.indexOf(a);l>-1?e.splice(l,1):e.push(a),i(e)}}}),{activeNames:s,setActiveNames:i}})(i,s),{rootKls:C}=(()=>{const e=r("collapse");return{rootKls:c((()=>e.b()))}})();return a({activeNames:u,setActiveNames:h}),(e,a)=>(m(),p("div",{class:b(f(C)),role:"tablist","aria-multiselectable":"true"},[v(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const J=e({title:{type:String,default:""},name:{type:a([String,Number]),default:()=>S()},disabled:Boolean}),O=["aria-expanded","aria-controls","aria-describedby"],T=["id","tabindex"],G=["id","aria-hidden","aria-labelledby"],L=u({name:"ElCollapseItem"});var M=h(u({...L,props:J,setup(e,{expose:a}){const s=e,{focusing:l,id:t,isActive:i,handleFocus:n,handleHeaderClick:d,handleEnterClick:u}=(e=>{const a=C(V),s=o(!1),l=o(!1),t=o(S()),i=c((()=>null==a?void 0:a.activeNames.value.includes(e.name)));return{focusing:s,id:t,isActive:i,handleFocus:()=>{setTimeout((()=>{l.value?l.value=!1:s.value=!0}),50)},handleHeaderClick:()=>{e.disabled||(null==a||a.handleItemClick(e.name),s.value=!1,l.value=!0)},handleEnterClick:()=>{null==a||a.handleItemClick(e.name)}}})(s),{arrowKls:h,headKls:F,rootKls:$,itemWrapperKls:j,itemContentKls:B,scopedContentId:D,scopedHeadId:W}=((e,{focusing:a,isActive:s,id:l})=>{const t=r("collapse"),i=c((()=>[t.b("item"),t.is("active",f(s)),t.is("disabled",e.disabled)])),o=c((()=>[t.be("item","header"),t.is("active",f(s)),{focusing:f(a)&&!e.disabled}]));return{arrowKls:c((()=>[t.be("item","arrow"),t.is("active",f(s))])),headKls:o,rootKls:i,itemWrapperKls:c((()=>t.be("item","wrap"))),itemContentKls:c((()=>t.be("item","content"))),scopedContentId:c((()=>t.b(`content-${f(l)}`))),scopedHeadId:c((()=>t.b(`head-${f(l)}`)))}})(s,{focusing:l,isActive:i,id:t});return a({isActive:i}),(e,a)=>(m(),p("div",{class:b(f($))},[K("div",{role:"tab","aria-expanded":f(i),"aria-controls":f(D),"aria-describedby":f(D)},[K("div",{id:f(W),class:b(f(F)),role:"button",tabindex:e.disabled?-1:0,onClick:a[0]||(a[0]=(...e)=>f(d)&&f(d)(...e)),onKeypress:a[1]||(a[1]=g(k(((...e)=>f(u)&&f(u)(...e)),["stop","prevent"]),["space","enter"])),onFocus:a[2]||(a[2]=(...e)=>f(n)&&f(n)(...e)),onBlur:a[3]||(a[3]=e=>l.value=!1)},[v(e.$slots,"title",{},(()=>[y(x(e.title),1)])),N(f(w),{class:b(f(h))},{default:A((()=>[N(f(I))])),_:1},8,["class"])],42,T)],8,O),N(f(H),null,{default:A((()=>[_(K("div",{id:f(D),class:b(f(j)),role:"tabpanel","aria-hidden":!f(i),"aria-labelledby":f(W)},[K("div",{class:b(f(B))},[v(e.$slots,"default")],2)],10,G),[[E,f(i)]])])),_:3})],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const P=F(z,{CollapseItem:M}),Q=$(M);export{Q as E,P as a};
