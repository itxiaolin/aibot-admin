/*! 
 Build based on gin-vue-admin 
 Time : 1678354544000 */
import{q as e,ay as o,s as l,ar as a,y as t,aZ as n,Y as s,r as u,aP as c,aQ as d,z as r,$ as p,bw as f,D as i,W as y,Q as v,af as m,bx as C,aa as b}from"./index.12a9298d.js";const B=e({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:o},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),g={close:()=>!0},D=e({...B,appendToBody:{type:Boolean,default:!1},beforeClose:{type:l(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),x={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>t(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},F=(e,o)=>{const l=m().emit,{nextZIndex:t}=n();let B="";const g=s(),D=s(),x=u(!1),F=u(!1),I=u(!1),S=u(e.zIndex||t());let O,h;const w=c("namespace",d),A=r((()=>{const o={},l=`--${w.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=p(e.width))),o})),k=r((()=>e.alignCenter?{display:"flex"}:{}));function z(){null==h||h(),null==O||O(),e.openDelay&&e.openDelay>0?({stop:O}=C((()=>$()),e.openDelay)):$()}function N(){null==O||O(),null==h||h(),e.closeDelay&&e.closeDelay>0?({stop:h}=C((()=>E()),e.closeDelay)):E()}function P(){e.beforeClose?e.beforeClose((function(e){e||(F.value=!0,x.value=!1)})):N()}function $(){b&&(x.value=!0)}function E(){x.value=!1}return e.lockScroll&&f(x),i((()=>e.modelValue),(a=>{a?(F.value=!1,z(),I.value=!0,S.value=e.zIndex?S.value++:t(),y((()=>{l("open"),o.value&&(o.value.scrollTop=0)}))):x.value&&N()})),i((()=>e.fullscreen),(e=>{o.value&&(e?(B=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=B)})),v((()=>{e.modelValue&&(x.value=!0,I.value=!0,z())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(a,!1),e.destroyOnClose&&(I.value=!1)},beforeLeave:function(){l("close")},handleClose:P,onModalClick:function(){e.closeOnClickModal&&P()},close:N,doClose:E,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&P()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:g,bodyId:D,closed:F,style:A,overlayDialogStyle:k,rendered:I,visible:x,zIndex:S}};export{g as a,D as b,x as c,B as d,F as u};