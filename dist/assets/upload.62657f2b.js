/*! 
 Build based on gin-vue-admin 
 Time : 1678354544000 */
/* empty css             *//* empty css                */import{E as a}from"./pagination.e33d475f.js";/* empty css              */import"./tag.0bb54889.js";import"./select.0319208d.js";import"./scrollbar.561042ca.js";/* empty css               */import{E as e,a as t}from"./table-column.61571603.js";import"./checkbox.bcafce17.js";/* empty css                */import{E as l,a as o}from"./form-item.b18f90c3.js";/* empty css               */import{_ as s,U as i,g as n,d as r,e as c}from"./common.0cfb4872.js";import{C as p}from"./index.13294f23.js";import{f as d}from"./format.1c8f0142.js";import{W as m}from"./warningBar.b44e96f3.js";import{_ as u,r as f,ag as g,o as v,c as b,d as h,e as j,w,a2 as y,J as _,h as x,c1 as C,j as k,b as U,E,c2 as z}from"./index.12a9298d.js";import{E as O}from"./index.f53077c2.js";import"./isEqual.471ce309.js";import"./_Uint8Array.f5d85d65.js";import"./index.bf155b92.js";import"./strings.e4f34ae9.js";import"./_initCloneObject.8371cae6.js";import"./upload.f0d4bb90.js";import"./progress.ec06c490.js";import"./dictionary.4f143e26.js";import"./sysDictionary.bc8f23a2.js";/* empty css             */const S=(a,e)=>{var t=new Image;t.setAttribute("crossOrigin","anonymous"),t.onload=function(){var a=document.createElement("canvas");a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(t,0,0,t.width,t.height);var l=a.toDataURL("image/png"),o=document.createElement("a"),s=new MouseEvent("click");o.download=e||"photo",o.href=l,o.dispatchEvent(s)},t.src=a},B={class:"gva-table-box"},A={class:"gva-btn-list"},T=x("查询"),V=["onClick"],I=x("下载"),D=x("删除"),L={class:"gva-pagination"},M={name:"Upload"},q=u(Object.assign(M,{setup(u){const M=f("/api"),q=f(""),F=f(""),J=f(1),P=f(0),R=f(10),W=f({}),G=f([]),H=a=>{R.value=a,N()},K=a=>{J.value=a,N()},N=async()=>{const a=await n({page:J.value,pageSize:R.value,...W.value});0===a.code&&(G.value=a.data.list,P.value=a.data.total,J.value=a.data.page,R.value=a.data.pageSize)};N();return(n,u)=>{const f=U,Q=l,X=E,Y=o,Z=e,$=O,aa=t,ea=a,ta=z;return g((v(),b("div",null,[h("div",B,[j(m,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),h("div",A,[j(s,{imageCommon:F.value,"onUpdate:imageCommon":u[0]||(u[0]=a=>F.value=a),class:"upload-btn",onOnSuccess:N},null,8,["imageCommon"]),j(i,{imageUrl:q.value,"onUpdate:imageUrl":u[1]||(u[1]=a=>q.value=a),"file-size":512,"max-w-h":1080,class:"upload-btn",onOnSuccess:N},null,8,["imageUrl"]),j(Y,{ref:"searchForm",inline:!0,model:W.value},{default:w((()=>[j(Q,{label:""},{default:w((()=>[j(f,{modelValue:W.value.keyword,"onUpdate:modelValue":u[2]||(u[2]=a=>W.value.keyword=a),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"])])),_:1}),j(Q,null,{default:w((()=>[j(X,{type:"primary",icon:"search",onClick:N},{default:w((()=>[T])),_:1})])),_:1})])),_:1},8,["model"])]),j(aa,{data:G.value},{default:w((()=>[j(Z,{align:"left",label:"预览",width:"100"},{default:w((a=>[j(p,{"pic-type":"file","pic-src":a.row.url},null,8,["pic-src"])])),_:1}),j(Z,{align:"left",label:"日期",prop:"UpdatedAt",width:"180"},{default:w((a=>[h("div",null,y(_(d)(a.row.UpdatedAt)),1)])),_:1}),j(Z,{align:"left",label:"文件名/备注",prop:"name",width:"180"},{default:w((a=>[h("div",{class:"name",onClick:e=>(async a=>{C.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:a.name}).then((async({value:e})=>{a.name=e,0===(await c(a)).code&&(k({type:"success",message:"编辑成功!"}),N())})).catch((()=>{k({type:"info",message:"取消修改"})}))})(a.row)},y(a.row.name),9,V)])),_:1}),j(Z,{align:"left",label:"链接",prop:"url","min-width":"300"}),j(Z,{align:"left",label:"标签",prop:"tag",width:"100"},{default:w((a=>[j($,{type:"jpg"===a.row.tag?"primary":"success","disable-transitions":""},{default:w((()=>[x(y(a.row.tag),1)])),_:2},1032,["type"])])),_:1}),j(Z,{align:"left",label:"操作",width:"160"},{default:w((a=>[j(X,{icon:"download",type:"primary",link:"",onClick:e=>{var t;(t=a.row).url.indexOf("http://")>-1||t.url.indexOf("https://")>-1?S(t.url,t.name):S(M.value+"/"+t.url,t.name)}},{default:w((()=>[I])),_:2},1032,["onClick"]),j(X,{icon:"delete",type:"primary",link:"",onClick:e=>(async a=>{C.confirm("此操作将永久删除文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await r(a)).code&&(k({type:"success",message:"删除成功!"}),1===G.value.length&&J.value>1&&J.value--,N())})).catch((()=>{k({type:"info",message:"已取消删除"})}))})(a.row)},{default:w((()=>[D])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),h("div",L,[j(ea,{"current-page":J.value,"page-size":R.value,"page-sizes":[10,30,50,100],style:{float:"right",padding:"20px"},total:P.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:K,onSizeChange:H},null,8,["current-page","page-size","total"])])])])),[[ta,n.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}}}),[["__scopeId","data-v-96830493"]]);export{q as default};
