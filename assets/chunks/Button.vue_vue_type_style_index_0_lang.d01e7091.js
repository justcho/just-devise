import{d as u,g as c,o as n,c as a,e as i,r as _,n as p}from"./framework.1518eeaa.js";const m=["disabled"],b={key:0,class:"justd-loadingIndicator"},B=u({__name:"Button",props:{theme:{},size:{},level:{},disabled:{type:Boolean},loading:{type:Boolean}},setup(l){const d=l,{theme:s,size:t,level:o}=d,r=c(()=>({[`justd-theme-${s}`]:s,[`justd-size-${t}`]:t,[`justd-level-${o}`]:o}));return(e,h)=>(n(),a("button",{class:p(["justd-button",r.value]),disabled:e.disabled},[e.loading?(n(),a("span",b)):i("",!0),_(e.$slots,"default")],10,m))}});export{B as _};
