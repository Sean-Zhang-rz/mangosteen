import{T as g}from"./index.cd5f18b6.js";import{d as i,c as _,e as t,U as o,V as f,z as p,o as c,W as D,f as s,S as d,g as A,X as h,Y as v}from"./index.1c216f5b.js";import{F as y}from"./index.b864a6a2.js";import{B as j}from"./index.b0bad270.js";import"./index.f81e649c.js";import"./index.16a27d37.js";import"./index.ba9a3160.js";import"./index.707fa357.js";import"./index.ff0fad93.js";const F=i({props:{value:{type:[Date,String],required:!0},format:{type:String,default:"YYYY-MM-DD HH:mm:ss"}},setup:a=>{const n=_(()=>new o(a.value).format(a.format));return()=>t("div",null,[n.value])}}),x="_total_1gja3_1",B="_list_1gja3_23",S="_sign_1gja3_30",b="_text_1gja3_42",T="_tagAndAmount_1gja3_48",w="_tag_1gja3_48",E="_amount_1gja3_55",M="_time_1gja3_58",I="_more_1gja3_63",e={total:x,list:B,sign:S,text:b,tagAndAmount:T,tag:w,amount:E,time:M,more:I},L=i({props:{startDate:{type:String,default:new o().firstDayOfMonth().format(),required:!0},endDate:{type:String,default:new o().lastDayOfMonth().format(),required:!0},custom:{type:Boolean,default:!1}},setup:a=>{const n=f(`items-${a.startDate}-${a.endDate}`),u=p({expenses:0,income:0,balance:0}),m=async()=>{const l=await h({happen_after:a.startDate,happen_before:a.endDate}).catch(v);Object.assign(u,l.data)};return c(()=>n.fetchItems(a.startDate,a.endDate)),c(m),D(()=>[a.startDate,a.endDate],()=>{Object.assign(u,{expenses:0,income:0,balance:0}),n.$reset(),n.fetchItems(a.startDate,a.endDate),m()}),()=>t("div",{class:e.wrapper},[t("ul",{class:e.total},[t("li",null,[t("span",null,[s("\u6536\u5165")]),t("span",null,[u.income])]),t("li",null,[t("span",null,[s("\u652F\u51FA")]),t("span",null,[u.expenses])]),t("li",null,[t("span",null,[s("\u51C0\u6536\u5165")]),t("span",null,[u.balance])])]),n.itemList.length?t(d,null,[t("ol",{class:e.list},[n.itemList.map(l=>{var r;return t("li",null,[t("div",{class:e.sign},[t("span",null,[(r=l.tags)==null?void 0:r.sign])]),t("div",{class:e.text},[t("div",{class:e.tagAndAmount},[t("span",{class:e.tag},[l.tag_ids[0]]),t("span",{class:e.amount},[s("\uFFE5"),t(d,null,[l.amount])])]),t("div",{class:e.time},[t(F,{value:l.happen_at},null)])])])})]),t("div",{class:e.more},[n.hasMore?t(j,{onClick:()=>n.fetchNextPage(a.startDate,a.endDate)},{default:()=>[s("\u5411\u4E0B\u6ED1\u52A8\u52A0\u8F7D\u66F4\u591A")]}):t("span",null,[s("\u6CA1\u6709\u66F4\u591A\u4E86")])])]):t("div",null,[s("\u8BB0\u5F55\u4E3A\u7A7A")]),t(A,{to:"/items/create"},{default:()=>[t(y,{name:"add"},null)]})])}}),z=i({setup:()=>()=>t(g,{component:L},null)});export{z as default};
