/*! 
 Build based on gin-vue-admin 
 Time : 1678354544000 */
/* empty css             */import{E as e}from"./dialog.fa5df2a0.js";import"./overlay.257b737a.js";import{E as a,a as t}from"./table-column.61571603.js";import"./checkbox.bcafce17.js";import"./tag.0bb54889.js";/* empty css                *//* empty css               */import"./scrollbar.561042ca.js";import{E as o}from"./tree.19ffdddf.js";/* empty css               *//* empty css              */import{_ as s,r as l,D as r,o as d,c as n,d as u,e as i,w as c,a2 as m,a3 as p,h as f,f as y,cL as h,cM as b,j as v,cN as j,W as k,b as w,E as I}from"./index.12a9298d.js";import{u as g}from"./authority.fe1b2d97.js";import{g as _,s as C}from"./authorityBtn.65dcb897.js";import"./refs.b0cb2972.js";import"./index.bf155b92.js";import"./_Uint8Array.f5d85d65.js";import"./_initCloneObject.8371cae6.js";import"./isEqual.471ce309.js";import"./index.b753be06.js";const x={class:"clearfix sticky-button"},R=f("确 定"),D={class:"tree-content"},E={class:"custom-tree-node"},N={key:0},V=f(" 分配按钮 "),A={class:"dialog-footer"},O=f("取 消"),B=f("确 定"),U={name:"Menus"},M=s(Object.assign(U,{props:{row:{default:function(){return{}},type:Object}},emits:["changeRow"],setup(s,{expose:U,emit:M}){const S=s,T=l(""),q=l([]),L=l([]),W=l(!1),z=l({children:"children",label:function(e){return e.meta.title}});(async()=>{const e=await h();q.value=e.data.menus;const a=(await b({authorityId:S.row.authorityId})).data.menus,t=[];a.forEach((e=>{a.some((a=>a.parentId===e.menuId))||t.push(Number(e.menuId))})),L.value=t})();const F=()=>{W.value=!0},G=l(null),H=async()=>{const e=G.value.getCheckedNodes(!1,!0);0===(await j({menus:e,authorityId:S.row.authorityId})).code&&v({type:"success",message:"菜单设置成功!"})};U({enterAndNext:()=>{H()},needConfirm:W});const J=l(!1),K=l([]),P=l([]),Q=l();let X="";const Y=e=>{P.value=e},Z=e=>{J.value=!0,K.value=e.menuBtn},$=()=>{J.value=!1},ee=async()=>{const e=P.value.map((e=>e.ID));0===(await C({menuID:X,selected:e,authorityId:S.row.authorityId})).code&&(v({type:"success",message:"设置成功"}),J.value=!1)},ae=(e,a)=>!e||-1!==a.meta.title.indexOf(e);return r(T,(e=>{G.value.filter(e)})),(l,r)=>{const h=w,b=I,j=o,C=a,U=t,W=e;return d(),n("div",null,[u("div",x,[i(h,{modelValue:T.value,"onUpdate:modelValue":r[0]||(r[0]=e=>T.value=e),class:"fitler",placeholder:"筛选"},null,8,["modelValue"]),i(b,{class:"fl-right",type:"primary",onClick:H},{default:c((()=>[R])),_:1})]),u("div",D,[i(j,{ref_key:"menuTree",ref:G,data:q.value,"default-checked-keys":L.value,props:z.value,"default-expand-all":"","highlight-current":"","node-key":"ID","show-checkbox":"","filter-node-method":ae,onCheck:F},{default:c((({node:e,data:a})=>[u("span",E,[u("span",null,m(e.label),1),u("span",null,[i(b,{type:"primary",link:"",style:p({color:s.row.defaultRouter===a.name?"#E6A23C":"#85ce61"}),disabled:!e.checked,onClick:()=>(async e=>{const a=await g({authorityId:S.row.authorityId,AuthorityName:S.row.authorityName,parentId:S.row.parentId,defaultRouter:e.name});0===a.code&&(v({type:"success",message:"设置成功"}),M("changeRow","defaultRouter",a.data.authority.defaultRouter))})(a)},{default:c((()=>[f(m(s.row.defaultRouter===a.name?"首页":"设为首页"),1)])),_:2},1032,["style","disabled","onClick"])]),a.menuBtn.length?(d(),n("span",N,[i(b,{type:"primary",link:"",onClick:()=>(async e=>{X=e.ID;const a=await _({menuID:X,authorityId:S.row.authorityId});0===a.code&&(Z(e),await k(),a.data.selected&&a.data.selected.forEach((e=>{K.value.some((a=>{a.ID===e&&Q.value.toggleRowSelection(a,!0)}))})))})(a)},{default:c((()=>[V])),_:2},1032,["onClick"])])):y("",!0)])])),_:1},8,["data","default-checked-keys","props"])]),i(W,{modelValue:J.value,"onUpdate:modelValue":r[1]||(r[1]=e=>J.value=e),title:"分配按钮","destroy-on-close":""},{footer:c((()=>[u("div",A,[i(b,{onClick:$},{default:c((()=>[O])),_:1}),i(b,{type:"primary",onClick:ee},{default:c((()=>[B])),_:1})])])),default:c((()=>[i(U,{ref_key:"btnTableRef",ref:Q,data:K.value,"row-key":"ID",onSelectionChange:Y},{default:c((()=>[i(C,{type:"selection",width:"55"}),i(C,{label:"按钮名称",prop:"name"}),i(C,{label:"按钮备注",prop:"desc"})])),_:1},8,["data"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-d1e06e89"]]);export{M as default};