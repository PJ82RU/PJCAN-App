"use strict";(globalThis["webpackChunkpjcan"]=globalThis["webpackChunkpjcan"]||[]).push([[364],{2380:(e,n,t)=>{t.r(n),t.d(n,{default:()=>B});var o=t(9835);const a=(0,o.Uk)("PJ CAN");function l(e,n,t,l,u,i){const r=(0,o.up)("q-btn"),m=(0,o.up)("q-toolbar-title"),s=(0,o.up)("q-space"),p=(0,o.up)("BluetoothBtn"),c=(0,o.up)("RightMainMenu"),d=(0,o.up)("q-toolbar"),f=(0,o.up)("q-header"),g=(0,o.up)("LeftMainMenu"),M=(0,o.up)("q-scroll-area"),L=(0,o.up)("q-drawer"),I=(0,o.up)("router-view"),N=(0,o.up)("q-page-container"),k=(0,o.up)("UpdateFirmwareDialog"),w=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(w,{view:"hHh lpr lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{bordered:"",class:"bg-primary text-white"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"col-8 bg-menu"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l.onToggleLeftMenuOpen},null,8,["onClick"]),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[a])),_:1}),(0,o.Wm)(s),(0,o.Wm)(p),(0,o.Wm)(r,{flat:"",round:"",dense:"",icon:"more_vert"},{default:(0,o.w5)((()=>[(0,o.Wm)(c)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(L,{ref:"leftMenu","show-if-above":"","mini-to-overlay":"",modelValue:l.leftMenuOpen,"onUpdate:modelValue":n[0]||(n[0]=e=>l.leftMenuOpen=e),side:"left",mini:l.leftMenuMiniState,width:270,breakpoint:500,bordered:"",class:"bg-grey-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{class:"fit"},{default:(0,o.w5)((()=>[(0,o.Wm)(g)])),_:1})])),_:1},8,["modelValue","mini"]),(0,o.Wm)(N,null,{default:(0,o.w5)((()=>[(0,o.Wm)(I)])),_:1}),(0,o.Wm)(k)])),_:1})}var u=t(499),i=t(9302);function r(e,n,t,a,l,u){const i=(0,o.up)("ItemMenu"),r=(0,o.up)("q-separator"),m=(0,o.up)("q-list");return(0,o.wg)(),(0,o.j4)(m,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{items:a.menuHeader,onClick:a.onClickItem},null,8,["items","onClick"]),(0,o.Wm)(i,{items:a.menuActions,onClick:a.onClickItem},null,8,["items","onClick"]),(0,o.Wm)(r),(0,o.Wm)(i,{items:a.menuFooter,onClick:a.onClickItem},null,8,["items","onClick"])])),_:1})}var m=t(6981),s=t(5351);const p=[{type:s.X.ONBOARD,name:"on-board",lang:"Onboard",size:26}],c=[{type:s.X.OPTIONS2,name:"options2",lang:"SetTime",size:24}],d=[{type:s.X.OPTIONS,name:"options",lang:"Setting",size:24}],f={name:"LeftMainMenu",components:{ItemMenu:m.Z},setup(){const e=e=>{console.log("LeftMainMenu -> onClickItem",e)};return{menuHeader:p,menuActions:c,menuFooter:d,onClickItem:e}}};var g=t(1639),M=t(3246),L=t(926),I=t(9984),N=t.n(I);const k=(0,g.Z)(f,[["render",r]]),w=k;function S(e,n,t,a,l,u){const i=(0,o.up)("ItemMenu"),r=(0,o.up)("q-separator"),m=(0,o.up)("q-menu");return(0,o.wg)(),(0,o.j4)(m,{"auto-close":"",class:"RightMainMenu",anchor:"bottom left","transition-show":"jump-down","transition-hide":"jump-up"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{items:a.popupLanguageFilter,onClick:a.onClickItem},null,8,["items","onClick"]),(0,o.Wm)(r),(0,o.Wm)(i,{items:a.popupMain,onClick:a.onClickItem},null,8,["items","onClick"])])),_:1})}N()(f,"components",{QList:M.Z,QSeparator:L.Z});var b,A=t(3649);(function(e){e["LANG_RUSSIAN"]="ru",e["LANG_ENGLISH"]="en"})(b||(b={}));const C=[{type:s.X.LANG_RUSSIAN,lang:"LangRussian"},{type:s.X.LANG_ENGLISH,lang:"LangEnglish"}],_=[{type:s.X.DEVICE_INFO,lang:"DeviceInfo"},{type:s.X.ABOUT,lang:"About"}],h={name:"RightMainMenu",components:{ItemMenu:m.Z},setup(){const{global:e}=A.i18n,n=(0,o.Fl)((()=>C.filter((n=>{switch(e.locale){case b.LANG_RUSSIAN:return n.type!==s.X.LANG_RUSSIAN;case b.LANG_ENGLISH:return n.type!==s.X.LANG_ENGLISH;default:return!0}})))),t=n=>{switch(null===n||void 0===n?void 0:n.type){case s.X.LANG_RUSSIAN:e.locale=b.LANG_RUSSIAN;break;case s.X.LANG_ENGLISH:e.locale=b.LANG_ENGLISH;break}};return{popupLanguageFilter:n,popupMain:_,onClickItem:t}}};var W=t(5290);const Z=(0,g.Z)(h,[["render",S]]),v=Z;N()(h,"components",{QMenu:W.Z,QSeparator:L.Z});var G=t(1792),y=t(7872);const O={name:"Main",components:{LeftMainMenu:w,RightMainMenu:v,BluetoothBtn:G.Z,UpdateFirmwareDialog:y.Z},setup(){const e=(0,i.Z)(),n=(0,u.iH)(!1),t=(0,u.iH)(!0),o=(0,u.iH)(null),a=()=>{const{lt:o}=e.screen,a=o.lg&&o.md&&o.sm&&o.xl;e.platform.is.mobile&&a?n.value=!n.value:t.value=!t.value};return{leftMenu:o,leftMenuOpen:n,leftMenuMiniState:t,onToggleLeftMenuOpen:a}}};var q=t(249),H=t(6602),Q=t(1663),R=t(4455),T=t(1973),U=t(136),X=t(906),E=t(6663),F=t(2133);const j=(0,g.Z)(O,[["render",l]]),B=j;N()(O,"components",{QLayout:q.Z,QHeader:H.Z,QToolbar:Q.Z,QBtn:R.Z,QToolbarTitle:T.Z,QSpace:U.Z,QDrawer:X.Z,QScrollArea:E.Z,QPageContainer:F.Z})}}]);