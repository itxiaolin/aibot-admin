/*! 
 Build based on gin-vue-admin 
 Time : 1678354544000 */
System.register(["./index-legacy.6c62c544.js"],(function(t,e){"use strict";var r;return{setters:[function(t){r=t.bm}],execute:function(){t({C:function(t){return e({url:"https://api.github.com/repos/flipped-aurora/gin-vue-admin/commits?page="+t,method:"get"})},M:function(){return e({url:"https://api.github.com/orgs/FLIPPED-AURORA/members",method:"get"})},f:function(t,e){var r=new Date(t).Format("yyyy-MM-dd hh:mm:ss");return e&&(r=new Date(t).Format(e)),r.toLocaleString()}});var e=r.create();Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?e[r]:("00"+e[r]).substr((""+e[r]).length)));return t}}}}));
