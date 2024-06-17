import{_ as F}from"./chunks/Button.vue_vue_type_style_index_0_lang.d01e7091.js";import{d as m,o as y,b as v,k as a,r as u,J as t,w as p,a4 as f,e as h,a as c,h as _,c as A,F as d,U as i}from"./chunks/framework.1518eeaa.js";const E={class:"justd-dialog-wrapper"},q={class:"justd-dialog"},g=m({__name:"Dialog",props:{visible:{type:Boolean},closeOnclickOverlay:{type:Boolean},ok:{type:Function},cancel:{type:Function}},emits:["update"],setup(r,{emit:s}){const l=r,o=()=>{s("update:visible",!1)},D=()=>{l.closeOnclickOverlay&&o()},C=()=>{var n;((n=l.ok)==null?void 0:n.call(l))!==!1&&o()},e=()=>{var n;(n=l.cancel)!=null&&n.call(l)&&o()};return(n,I)=>n.visible?(y(),v(f,{key:0,to:"body"},[a("div",{class:"justd-dialog-overlay",onClick:D}),a("div",E,[a("div",q,[a("header",null,[u(n.$slots,"title"),a("span",{onClick:o,class:"justd-dialog-close"})]),a("main",null,[u(n.$slots,"content")]),a("footer",null,[t(F,{onClick:C},{default:p(()=>[c("OK")]),_:1}),t(F,{onClick:e},{default:p(()=>[c("Cancel")]),_:1})])])])])):h("",!0)}});const b=a("p",null,"Some contents...",-1),k=a("p",null,"Some contents...",-1),S=a("p",null,"Some contents...",-1),T={__name:"dialog-demo-1",setup(r){const s=_(!1),l=()=>{s.value=!s.value},o=()=>{s.value=!s.value},D=()=>{s.value=!s.value};return(C,e)=>(y(),A(d,null,[t(F,{theme:"button",level:"main",onClick:l},{default:p(()=>[c("开启对话框")]),_:1}),t(g,{visible:s.value,"onUpdate:visible":e[0]||(e[0]=n=>s.value=n),closeOnclickOverlay:!1,ok:o,cancel:D},{title:p(()=>[c(" 基本用法 ")]),content:p(()=>[b,k,S]),_:1},8,["visible"])],64))}},O=a("p",null,"Some contents...",-1),j=a("p",null,"Some contents...",-1),P=a("p",null,"Some contents...",-1),x={__name:"dialog-demo-2",setup(r){const s=_(!1),l=()=>{s.value=!s.value},o=()=>{s.value=!s.value},D=()=>{s.value=!s.value};return(C,e)=>(y(),A(d,null,[t(F,{theme:"button",onClick:l},{default:p(()=>[c("开启对话框")]),_:1}),t(g,{visible:s.value,"onUpdate:visible":e[0]||(e[0]=n=>s.value=n),closeOnclickOverlay:!0,ok:o,cancel:D},{title:p(()=>[c(" 遮罩关闭 ")]),content:p(()=>[O,j,P]),_:1},8,["visible"])],64))}},$=i("",5),V=i("",5),N=i("",2),R=JSON.parse('{"title":"Dialog  对话框","description":"","frontmatter":{},"headers":[],"relativePath":"guide/dialog.md","filePath":"guide/dialog.md"}'),B={name:"guide/dialog.md"},U=Object.assign(B,{setup(r){return(s,l)=>(y(),A("div",null,[$,t(T),V,t(x),N]))}});export{R as __pageData,U as default};
