import{d as g,r,a as i,c as m,b as d,e as _,w as l,f as s,h as o,t as p,o as u,F as h,g as k}from"./index-b97b76a2.js";const B={class:"page"},x={class:"page-header"},R={class:"page-main"},U=d("h2",null,"Radio",-1),y=d("h3",null,"Basic",-1),C=d("br",null,null,-1),w=g({__name:"DemoRadio",setup(N){const a=r(3),c=r([{title:"🏠首頁",url:"/"},{title:"Radio"}]);return(v,t)=>{const V=i("pi-breadcrumb-item"),b=i("pi-breadcrumb"),n=i("pi-radio");return u(),m("div",B,[d("div",x,[(u(),_(b,{key:v.$route.path},{default:l(()=>[(u(!0),m(h,null,k(c.value,(e,f)=>(u(),_(V,{key:`pathIndex-${f}`,title:`前往${e.title}`,to:e.url},{default:l(()=>[o(p(e.title),1)]),_:2},1032,["title","to"]))),128))]),_:1}))]),d("div",R,[U,d("section",null,[y,s(n,{name:"testname",value:"1",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),id:"a"},{default:l(()=>[o("單選按鈕 1")]),_:1},8,["modelValue"]),s(n,{name:"testname",value:"2",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),id:"b"},{default:l(()=>[o("單選按鈕 2")]),_:1},8,["modelValue"]),s(n,{name:"testname",value:"3",modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),id:"c"},{default:l(()=>[o("單選按鈕 3")]),_:1},8,["modelValue"]),s(n,{name:"testname",value:"4",modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=e=>a.value=e),id:"d",disabled:""},{default:l(()=>[o("單選按鈕 4")]),_:1},8,["modelValue"]),C,o(" Select: "+p(a.value),1)])])])}}});export{w as default};
