/*! 
 Build based on gin-vue-admin 
 Time : 1678354544000 */
System.register(["./base-legacy.5aa23bc0.js","./drawer-legacy.8cdad47b.js","./overlay-legacy.46f3d1e4.js","./icon-legacy.b28fcc2b.js","./button-legacy.06c6f1db.js","./index-legacy.6c62c544.js"],(function(t,e){"use strict";var n,i,o,a,d,c,s,r,l,u,f,g,b,p,m,v,y,x=document.createElement("style");return x.textContent=".drawer-container[data-v-ddbe939f]{transition:all .2s;position:fixed;right:-20px;bottom:15%;height:40px;width:40px;display:flex;align-items:center;justify-content:center;z-index:999;color:#fff;border-radius:4px 0 0 4px;cursor:pointer;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.1)}.drawer-container[data-v-ddbe939f]:hover{right:0}.setting_body[data-v-ddbe939f]{padding:20px}.setting_body .setting_card[data-v-ddbe939f]{margin-bottom:20px}.setting_body .setting_content[data-v-ddbe939f]{margin-top:20px;display:flex;flex-direction:column}.setting_body .setting_content>.theme-box[data-v-ddbe939f]{display:flex}.setting_body .setting_content>.color-box div[data-v-ddbe939f]{display:flex;flex-direction:column}.setting_body .setting_content .item[data-v-ddbe939f]{display:flex;align-items:center;justify-content:center;flex-direction:column;margin-right:20px}.setting_body .setting_content .item .item-top[data-v-ddbe939f]{position:relative}.setting_body .setting_content .item .check[data-v-ddbe939f]{position:absolute;font-size:20px;color:#00afff;right:10px;bottom:10px}.setting_body .setting_content .item p[data-v-ddbe939f]{text-align:center;font-size:12px}\n",document.head.appendChild(x),{setters:[function(){},function(t){n=t.E},function(){},function(){},function(){},function(t){i=t._,o=t.r,a=t.bg,d=t.aB,c=t.o,s=t.c,r=t.e,l=t.w,u=t.d,f=t.J,g=t.a1,b=t.f,p=t.E,m=t.aw,v=t.bi,y=t.bj}],execute:function(){var e=function(t){return v("data-v-ddbe939f"),t=t(),y(),t},x={class:"setting_body"},_={class:"setting_card"},h={class:"setting_content"},k={class:"theme-box"},j={class:"item-top"},w=e((function(){return u("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg"},null,-1)})),C=e((function(){return u("p",null," 简约白 ",-1)})),z={class:"item-top"},S=e((function(){return u("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg"},null,-1)})),E=e((function(){return u("p",null," 商务黑 ",-1)})),M={name:"Setting"};t("default",i(Object.assign(M,{setup:function(t){var e=o(!1),i=o("rtl"),v=a(),y=function(){e.value=!1},M=function(){e.value=!0},N=function(t){null!==t?v.changeSideMode(t):v.changeSideMode("dark")};return function(t,o){var a=p,V=d("check"),q=m,B=n;return c(),s("div",null,[r(a,{type:"primary",class:"drawer-container",icon:"setting",onClick:M}),r(B,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=function(t){return e.value=t}),title:"系统配置",direction:i.value,"before-close":y},{default:l((function(){return[u("div",x,[u("div",_,[u("div",h,[u("div",k,[u("div",{class:"item",onClick:o[0]||(o[0]=function(t){return N("light")})},[u("div",j,["light"===f(v).mode?(c(),g(q,{key:0,class:"check"},{default:l((function(){return[r(V)]})),_:1})):b("",!0),w]),C]),u("div",{class:"item",onClick:o[1]||(o[1]=function(t){return N("dark")})},[u("div",z,["dark"===f(v).mode?(c(),g(q,{key:0,class:"check"},{default:l((function(){return[r(V)]})),_:1})):b("",!0),S]),E])])])])])]})),_:1},8,["modelValue","direction"])])}}}),[["__scopeId","data-v-ddbe939f"]]))}}}));