import{r as h,c as w,o as S,a as b,d as x,u as C,b as i,w as L,e as d,f as M,R as E,T as R}from"./index.1c216f5b.js";const I="/assets/logo.3565198d.svg",T=(l,e)=>{const r=h(),n=h(),v=h(!1),_=w(()=>{if(!(!r.value||!n.value))return{x:n.value.x-r.value.x,y:n.value.y-r.value.y}}),g=w(()=>{if(!v||!_.value)return"";const{x:a,y:t}=_.value;return Math.abs(a)>Math.abs(t)?a>0?"right":"left":t>0?"down":"up"}),f=a=>{var t,u;(t=e==null?void 0:e.beforeStart)==null||t.call(e,a),a.preventDefault(),v.value=!0,r.value={x:a.touches[0].clientX,y:a.touches[0].clientY},n.value=void 0,(u=e==null?void 0:e.endStart)==null||u.call(e,a)},c=a=>{var t,u;(t=e==null?void 0:e.beforeMove)==null||t.call(e,a),a.preventDefault(),n.value={x:a.touches[0].clientX,y:a.touches[0].clientY},(u=e==null?void 0:e.endMove)==null||u.call(e,a)},m=a=>{var t,u;(t=e==null?void 0:e.beforeEnd)==null||t.call(e,a),a.preventDefault(),v.value=!1,(u=e==null?void 0:e.endEnd)==null||u.call(e,a)};return S(()=>{var a,t,u;!l.value||((a=l.value)==null||a.addEventListener("touchstart",f),(t=l.value)==null||t.addEventListener("touchmove",c),(u=l.value)==null||u.addEventListener("touchend",m))}),b(()=>{var a,t,u;!l.value||((a=l.value)==null||a.removeEventListener("touchstart",f),(t=l.value)==null||t.removeEventListener("touchmove",c),(u=l.value)==null||u.removeEventListener("touchend",m))}),{swiping:v,distance:_,direction:g,start:r,end:n}},y=(l,e)=>{let r,n;return(...v)=>(r||(n=l(...v),r=setTimeout(()=>{r=void 0},e)),n)},k="_wrapper_1t7dp_1",D="_enter_active_1t7dp_24",A="_leave_active_1t7dp_25",V="_enter_from_1t7dp_33",B="_leave_to_1t7dp_36",s={wrapper:k,enter_active:D,leave_active:A,enter_from:V,leave_to:B},N=x({setup:()=>{const l=h(),e=C(),r=i(),{swiping:n,direction:v}=T(l),_=y(()=>{var c;const f=parseInt((c=r==null?void 0:r.params)==null?void 0:c.id.toString());f!==4&&e.push(`/welcome/${f+1}`)},500),g=y(()=>{var c;parseInt((c=r==null?void 0:r.params)==null?void 0:c.id.toString())!==1&&e.back()},500);return L(()=>{n.value&&v.value==="left"?_():n.value&&v.value==="right"&&g()}),()=>{var f,c;return d("div",{class:s.wrapper},[d("header",null,[d("img",{src:I},null),d("h1",null,[M("\u5C71\u7AF9\u8BB0\u8D26")])]),d("main",{class:s.main,ref:l},[d(E,{name:"main"},{default:({Component:m})=>d(R,{enterFromClass:v.value==="left"?s.enter_from:s.leave_to,enterActiveClass:s.enter_active,leaveActiveClass:s.leave_active,leaveToClass:v.value==="left"?s.leave_to:s.enter_from},{default:()=>{var a,t;return[d(m,{key:(t=(a=i())==null?void 0:a.params)==null?void 0:t.id.toString()},null)]}})})]),d("footer",null,[d(E,{name:"footer",key:(c=(f=i())==null?void 0:f.params)==null?void 0:c.id.toString()},null)])])}}});export{N as default};
