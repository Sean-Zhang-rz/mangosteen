import{$ as $e,a0 as ae,h as z,d as J,a1 as Q,x as Ne,a2 as Se,a3 as ve,r as A,z as _e,a4 as Ee,q as Ke,s as W,W as V,e as M,n as re,p as ye,a5 as j,a6 as B,t as Ye,l as q,m as xe,i as Be,c as F,a7 as Fe,L as Ae,a8 as ce,a9 as Le,j as Ce,o as De,aa as S,A as oe,C as le,ab as _,ac as ee}from"./index.1c216f5b.js";function X(e){if(!$e(e))return e;if(Array.isArray(e))return e.map(r=>X(r));if(ae(e)){const r={};return Object.keys(e).forEach(m=>{r[m]=X(e[m])}),r}return e}const me=200,de=300,Re=15,[be,te]=z("picker-column");function Ue(e){const{transform:r}=window.getComputedStyle(e),m=r.slice(7,r.length-1).split(", ")[5];return Number(m)}const ke=Symbol(be),ne=e=>ae(e)&&e.disabled;var je=J({name:be,props:{textKey:Q(String),readonly:Boolean,allowHtml:Boolean,className:Ne,itemHeight:Q(Number),defaultIndex:Se(0),swipeDuration:Q(re),initialOptions:ve(),visibleItemCount:Q(re)},emits:["change"],setup(e,{emit:r,slots:m}){let h,d,f,k,x;const w=A(),l=_e({index:e.defaultIndex,offset:0,duration:0,options:X(e.initialOptions)}),b=Ee(),D=()=>l.options.length,K=()=>e.itemHeight*(+e.visibleItemCount-1)/2,L=a=>{a=j(a,0,D());for(let c=a;c<D();c++)if(!ne(l.options[c]))return c;for(let c=a-1;c>=0;c--)if(!ne(l.options[c]))return c},u=(a,c)=>{a=L(a)||0;const T=-a*e.itemHeight,N=()=>{a!==l.index&&(l.index=a,c&&r("change",a))};h&&T!==l.offset?x=N:N(),l.offset=T},n=a=>{JSON.stringify(a)!==JSON.stringify(l.options)&&(l.options=X(a),u(e.defaultIndex))},o=a=>{h||e.readonly||(x=null,l.duration=me,u(a,!0))},i=a=>ae(a)&&e.textKey in a?a[e.textKey]:a,g=a=>j(Math.round(-a/e.itemHeight),0,D()-1),C=(a,c)=>{const T=Math.abs(a/c);a=l.offset+T/.003*(a<0?-1:1);const N=g(a);l.duration=+e.swipeDuration,u(N,!0)},y=()=>{h=!1,l.duration=0,x&&(x(),x=null)},O=a=>{if(!e.readonly){if(b.start(a),h){const c=Ue(w.value);l.offset=Math.min(0,c-K()),d=l.offset}else d=l.offset;l.duration=0,f=Date.now(),k=d,x=null}},P=a=>{if(e.readonly)return;b.move(a),b.isVertical()&&(h=!0,ye(a,!0)),l.offset=j(d+b.deltaY.value,-(D()*e.itemHeight),e.itemHeight);const c=Date.now();c-f>de&&(f=c,k=l.offset)},H=()=>{if(e.readonly)return;const a=l.offset-k,c=Date.now()-f;if(c<de&&Math.abs(a)>Re){C(a,c);return}const N=g(l.offset);l.duration=me,u(N,!0),setTimeout(()=>{h=!1},0)},R=()=>{const a={height:`${e.itemHeight}px`};return l.options.map((c,T)=>{const N=i(c),Z=ne(c),p={role:"button",style:a,tabindex:Z?-1:0,class:te("item",{disabled:Z,selected:T===l.index}),onClick:()=>o(T)},G={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:N};return M("li",p,[m.option?m.option(c):M("div",G,null)])})},I=a=>{const{options:c}=l;for(let T=0;T<c.length;T++)if(i(c[T])===a)return u(T)},$=()=>l.options[l.index];return u(l.index),Ke(ke),W({state:l,setIndex:u,getValue:$,setValue:I,setOptions:n,stopMomentum:y}),V(()=>e.initialOptions,n),V(()=>e.defaultIndex,a=>u(a)),()=>M("div",{class:[te(),e.className],onTouchstart:O,onTouchmove:P,onTouchend:H,onTouchcancel:H},[M("ul",{ref:w,style:{transform:`translate3d(0, ${l.offset+K()}px, 0)`,transitionDuration:`${l.duration}ms`,transitionProperty:l.duration?"all":"none"},class:te("wrapper"),onTransitionend:y},[R()])])}});const[qe,E,fe]=z("picker"),se={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,itemHeight:B(44),showToolbar:Ye,swipeDuration:B(1e3),visibleItemCount:B(6),cancelButtonText:String,confirmButtonText:String},ze=q({},se,{columns:ve(),valueKey:String,defaultIndex:B(0),toolbarPosition:xe("top"),columnsFieldNames:Object});var Je=J({name:qe,props:ze,emits:["confirm","cancel","change"],setup(e,{emit:r,slots:m}){const h=A(!1),d=A([]),{text:f,values:k,children:x}=q({text:e.valueKey||"text",values:"values",children:"children"},e.columnsFieldNames),{children:w,linkChildren:l}=Be(ke);l();const b=F(()=>Fe(e.itemHeight)),D=F(()=>{const t=e.columns[0];if(typeof t=="object"){if(x in t)return"cascade";if(k in t)return"object"}return"plain"}),K=()=>{var t;const s=[];let v={[x]:e.columns};for(;v&&v[x];){const Y=v[x];let U=(t=v.defaultIndex)!=null?t:+e.defaultIndex;for(;Y[U]&&Y[U].disabled;)if(U<Y.length-1)U++;else{U=0;break}s.push({[k]:v[x],className:v.className,defaultIndex:U}),v=Y[U]}d.value=s},L=()=>{const{columns:t}=e;D.value==="plain"?d.value=[{[k]:t}]:D.value==="cascade"?K():d.value=t,h.value=d.value.some(s=>s[k]&&s[k].length!==0)},u=()=>w.map(t=>t.state.index),n=(t,s)=>{const v=w[t];v&&(v.setOptions(s),h.value=!0)},o=t=>{let s={[x]:e.columns};const v=u();for(let Y=0;Y<=t;Y++)s=s[x][v[Y]];for(;s&&s[x];)t++,n(t,s[x]),s=s[x][s.defaultIndex||0]},i=t=>w[t],g=t=>{const s=i(t);if(s)return s.getValue()},C=(t,s)=>{const v=i(t);v&&(v.setValue(s),D.value==="cascade"&&o(t))},y=t=>{const s=i(t);if(s)return s.state.index},O=(t,s)=>{const v=i(t);v&&(v.setIndex(s),D.value==="cascade"&&o(t))},P=t=>{const s=i(t);if(s)return s.state.options},H=()=>w.map(t=>t.getValue()),R=t=>{t.forEach((s,v)=>{C(v,s)})},I=t=>{t.forEach((s,v)=>{O(v,s)})},$=t=>{D.value==="plain"?r(t,g(0),y(0)):r(t,H(),u())},a=t=>{D.value==="cascade"&&o(t),D.value==="plain"?r("change",g(0),y(0)):r("change",H(),t)},c=()=>{w.forEach(t=>t.stopMomentum()),$("confirm")},T=()=>$("cancel"),N=()=>{if(m.title)return m.title();if(e.title)return M("div",{class:[E("title"),"van-ellipsis"]},[e.title])},Z=()=>{const t=e.cancelButtonText||fe("cancel");return M("button",{type:"button",class:[E("cancel"),ce],onClick:T},[m.cancel?m.cancel():t])},p=()=>{const t=e.confirmButtonText||fe("confirm");return M("button",{type:"button",class:[E("confirm"),ce],onClick:c},[m.confirm?m.confirm():t])},G=()=>{if(e.showToolbar){const t=m.toolbar||m.default;return M("div",{class:E("toolbar")},[t?t():[Z(),N(),p()]])}},Pe=()=>d.value.map((t,s)=>{var v;return M(je,{textKey:f,readonly:e.readonly,allowHtml:e.allowHtml,className:t.className,itemHeight:b.value,defaultIndex:(v=t.defaultIndex)!=null?v:+e.defaultIndex,swipeDuration:e.swipeDuration,initialOptions:t[k],visibleItemCount:e.visibleItemCount,onChange:()=>a(s)},{option:m.option})}),Ve=t=>{if(h.value){const s={height:`${b.value}px`},v={backgroundSize:`100% ${(t-b.value)/2}px`};return[M("div",{class:E("mask"),style:v},null),M("div",{class:[Le,E("frame")],style:s},null)]}},He=()=>{const t=b.value*+e.visibleItemCount,s={height:`${t}px`};return M("div",{class:E("columns"),style:s,onTouchmove:ye},[Pe(),Ve(t)])};return V(()=>e.columns,L,{immediate:!0}),W({confirm:c,getValues:H,setValues:R,getIndexes:u,setIndexes:I,getColumnIndex:y,setColumnIndex:O,getColumnValue:g,setColumnValue:C,getColumnValues:P,setColumnValues:n}),()=>{var t,s;return M("div",{class:E()},[e.toolbarPosition==="top"?G():null,e.loading?M(Ae,{class:E("loading")},null):null,(t=m["columns-top"])==null?void 0:t.call(m),He(),(s=m["columns-bottom"])==null?void 0:s.call(m),e.toolbarPosition==="bottom"?G():null])}}});const Ie=Ce(Je),Te=q({},se,{filter:Function,columnsOrder:Array,formatter:{type:Function,default:(e,r)=>r}}),Me=Object.keys(se);function we(e,r){if(e<0)return[];const m=Array(e);let h=-1;for(;++h<e;)m[h]=r(h);return m}function We(e){if(!e)return 0;for(;Number.isNaN(parseInt(e,10));)if(e.length>1)e=e.slice(1);else return 0;return parseInt(e,10)}const he=(e,r)=>32-new Date(e,r-1,32).getDate(),Oe=(e,r)=>{const m=["setValues","setIndexes","setColumnIndex","setColumnValue"];return new Proxy(e,{get:(h,d)=>m.includes(d)?(...f)=>{h[d](...f),r()}:h[d]})},[Ze]=z("time-picker");var ie=J({name:Ze,props:q({},Te,{minHour:B(0),maxHour:B(23),minMinute:B(0),maxMinute:B(59),modelValue:String}),emits:["confirm","cancel","change","update:modelValue"],setup(e,{emit:r,slots:m}){const h=u=>{const{minHour:n,maxHour:o,maxMinute:i,minMinute:g}=e;u||(u=`${_(n)}:${_(g)}`);let[C,y]=u.split(":");return C=_(j(+C,+n,+o)),y=_(j(+y,+g,+i)),`${C}:${y}`},d=A(),f=A(h(e.modelValue)),k=F(()=>[{type:"hour",range:[+e.minHour,+e.maxHour]},{type:"minute",range:[+e.minMinute,+e.maxMinute]}]),x=F(()=>k.value.map(({type:u,range:n})=>{let o=we(n[1]-n[0]+1,i=>_(n[0]+i));return e.filter&&(o=e.filter(u,o)),{type:u,values:o}})),w=F(()=>x.value.map(u=>({values:u.values.map(n=>e.formatter(u.type,n))}))),l=()=>{const u=f.value.split(":"),n=[e.formatter("hour",u[0]),e.formatter("minute",u[1])];S(()=>{var o;(o=d.value)==null||o.setValues(n)})},b=()=>{const[u,n]=d.value.getIndexes(),[o,i]=x.value,g=o.values[u]||o.values[0],C=i.values[n]||i.values[0];f.value=h(`${g}:${C}`),l()},D=()=>r("confirm",f.value),K=()=>r("cancel"),L=()=>{b(),S(()=>{S(()=>r("change",f.value))})};return De(()=>{l(),S(b)}),V(w,l),V(()=>[e.filter,e.maxHour,e.minMinute,e.maxMinute],b),V(()=>e.minHour,()=>{S(b)}),V(f,u=>r("update:modelValue",u)),V(()=>e.modelValue,u=>{u=h(u),u!==f.value&&(f.value=u,l())}),W({getPicker:()=>d.value&&Oe(d.value,b)}),()=>M(Ie,oe({ref:d,columns:w.value,onChange:L,onCancel:K,onConfirm:D},le(e,Me)),m)}});const ge=new Date().getFullYear(),[Ge]=z("date-picker");var ue=J({name:Ge,props:q({},Te,{type:xe("datetime"),modelValue:Date,minDate:{type:Date,default:()=>new Date(ge-10,0,1),validator:ee},maxDate:{type:Date,default:()=>new Date(ge+10,11,31),validator:ee}}),emits:["confirm","cancel","change","update:modelValue"],setup(e,{emit:r,slots:m}){const h=n=>{if(ee(n)){const o=j(n.getTime(),e.minDate.getTime(),e.maxDate.getTime());return new Date(o)}},d=A(),f=A(h(e.modelValue)),k=(n,o)=>{const i=e[`${n}Date`],g=i.getFullYear();let C=1,y=1,O=0,P=0;return n==="max"&&(C=12,y=he(o.getFullYear(),o.getMonth()+1),O=23,P=59),o.getFullYear()===g&&(C=i.getMonth()+1,o.getMonth()+1===C&&(y=i.getDate(),o.getDate()===y&&(O=i.getHours(),o.getHours()===O&&(P=i.getMinutes())))),{[`${n}Year`]:g,[`${n}Month`]:C,[`${n}Date`]:y,[`${n}Hour`]:O,[`${n}Minute`]:P}},x=F(()=>{const{maxYear:n,maxDate:o,maxMonth:i,maxHour:g,maxMinute:C}=k("max",f.value||e.minDate),{minYear:y,minDate:O,minMonth:P,minHour:H,minMinute:R}=k("min",f.value||e.minDate);let I=[{type:"year",range:[y,n]},{type:"month",range:[P,i]},{type:"day",range:[O,o]},{type:"hour",range:[H,g]},{type:"minute",range:[R,C]}];switch(e.type){case"date":I=I.slice(0,3);break;case"year-month":I=I.slice(0,2);break;case"month-day":I=I.slice(1,3);break;case"datehour":I=I.slice(0,4);break}if(e.columnsOrder){const $=e.columnsOrder.concat(I.map(a=>a.type));I.sort((a,c)=>$.indexOf(a.type)-$.indexOf(c.type))}return I}),w=F(()=>x.value.map(({type:n,range:o})=>{let i=we(o[1]-o[0]+1,g=>_(o[0]+g));return e.filter&&(i=e.filter(n,i)),{type:n,values:i}})),l=F(()=>w.value.map(n=>({values:n.values.map(o=>e.formatter(n.type,o))}))),b=()=>{const n=f.value||e.minDate,{formatter:o}=e,i=w.value.map(g=>{switch(g.type){case"year":return o("year",`${n.getFullYear()}`);case"month":return o("month",_(n.getMonth()+1));case"day":return o("day",_(n.getDate()));case"hour":return o("hour",_(n.getHours()));case"minute":return o("minute",_(n.getMinutes()));default:return""}});S(()=>{var g;(g=d.value)==null||g.setValues(i)})},D=()=>{const{type:n}=e,o=d.value.getIndexes(),i=I=>{let $=0;w.value.forEach((c,T)=>{I===c.type&&($=T)});const{values:a}=w.value[$];return We(a[o[$]])};let g,C,y;n==="month-day"?(g=(f.value||e.minDate).getFullYear(),C=i("month"),y=i("day")):(g=i("year"),C=i("month"),y=n==="year-month"?1:i("day"));const O=he(g,C);y=y>O?O:y;let P=0,H=0;n==="datehour"&&(P=i("hour")),n==="datetime"&&(P=i("hour"),H=i("minute"));const R=new Date(g,C-1,y,P,H);f.value=h(R)},K=()=>{r("update:modelValue",f.value),r("confirm",f.value)},L=()=>r("cancel"),u=()=>{D(),S(()=>{D(),S(()=>r("change",f.value))})};return De(()=>{b(),S(D)}),V(l,b),V(f,(n,o)=>r("update:modelValue",o?n:null)),V(()=>[e.filter,e.minDate,e.maxDate],()=>{S(D)}),V(()=>e.modelValue,n=>{var o;n=h(n),n&&n.valueOf()!==((o=f.value)==null?void 0:o.valueOf())&&(f.value=n)}),W({getPicker:()=>d.value&&Oe(d.value,D)}),()=>M(Ie,oe({ref:d,columns:l.value,onChange:u,onCancel:L,onConfirm:K},le(e,Me)),m)}});const[Qe,Xe]=z("datetime-picker"),pe=Object.keys(ie.props),et=Object.keys(ue.props),tt=q({},ie.props,ue.props,{modelValue:[String,Date]});var nt=J({name:Qe,props:tt,setup(e,{attrs:r,slots:m}){const h=A();return W({getPicker:()=>{var d;return(d=h.value)==null?void 0:d.getPicker()}}),()=>{const d=e.type==="time",f=d?ie:ue,k=le(e,d?pe:et);return M(f,oe({ref:h,class:Xe()},k,r),m)}}});const ot=Ce(nt);export{ot as D};
