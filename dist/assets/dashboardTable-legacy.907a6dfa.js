/*! 
 Build based on gin-vue-admin 
 Time : 1678354544000 */
System.register(["./date-legacy.1ed175e6.js","./index-legacy.6c62c544.js"],(function(t,e){"use strict";var a,o,l,c,i,m,n,f,s,r,d,g,u,x=document.createElement("style");return x.textContent=".commit-table[data-v-144ac47f]{background-color:#fff;height:400px}.commit-table-title[data-v-144ac47f]{font-weight:600;margin-bottom:12px}.commit-table .log-item[data-v-144ac47f]{display:flex;justify-content:space-between;margin-top:14px}.commit-table .log-item .key-box[data-v-144ac47f]{justify-content:center}.commit-table .log-item .key[data-v-144ac47f]{display:inline-flex;justify-content:center;align-items:center;width:20px;height:20px;border-radius:50%;background:#F0F2F5;text-align:center;color:rgba(0,0,0,.65)}.commit-table .log-item .key.top[data-v-144ac47f]{background:#314659;color:#fff}.commit-table .log-item .message[data-v-144ac47f]{color:rgba(0,0,0,.65)}.commit-table .log-item .form[data-v-144ac47f]{color:rgba(0,0,0,.65);margin-left:12px}.commit-table .log-item .flex[data-v-144ac47f]{line-height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.commit-table .log-item .flex-1[data-v-144ac47f]{flex:1}.commit-table .log-item .flex-2[data-v-144ac47f]{flex:2}.commit-table .log-item .flex-3[data-v-144ac47f]{flex:3}.commit-table .log-item .flex-4[data-v-144ac47f]{flex:4}.commit-table .log-item .flex-5[data-v-144ac47f]{flex:5}\n",document.head.appendChild(x),{setters:[function(t){a=t.C,o=t.f},function(t){l=t._,c=t.r,i=t.o,m=t.c,n=t.d,f=t.V,s=t.aD,r=t.n,d=t.a2,g=t.bi,u=t.bj}],execute:function(){var e={class:"commit-table"},x=function(t){return g("data-v-144ac47f"),t=t(),u(),t}((function(){return n("div",{class:"commit-table-title"}," 更新日志 ",-1)})),b={class:"log"},v={class:"flex-1 flex key-box"},p={class:"flex-5 flex message"},h={class:"flex-3 flex form"},y={name:"DashboardTable"};t("default",l(Object.assign(y,{setup:function(t){var l=c(!0),g=c([]);return a(0).then((function(t){var e=t.data;l.value=!1,e.forEach((function(t,e){t.commit.message&&e<10&&g.value.push({from:o(t.commit.author.date,"yyyy-MM-dd"),title:t.commit.author.name,showDayAndMonth:!0,message:t.commit.message})}))})),function(t,a){return i(),m("div",e,[x,n("div",b,[(i(!0),m(f,null,s(g.value,(function(t,e){return i(),m("div",{key:e,class:"log-item"},[n("div",v,[n("span",{class:r(["key",e<3&&"top"])},d(e+1),3)]),n("div",p,d(t.message),1),n("div",h,d(t.from),1)])})),128))])])}}}),[["__scopeId","data-v-144ac47f"]]))}}}));
