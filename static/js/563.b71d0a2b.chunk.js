"use strict";(self.webpackChunkserver_watch=self.webpackChunkserver_watch||[]).push([[563],{3685:(e,t,s)=>{s.d(t,{vI:()=>a,wD:()=>r,wu:()=>l});const a={cpuUsage:"Track CPU Utilization Over Time",memoryUsage:"Monitor Memory Consumption Trends",diskSpace:"Analyze Disk Space Usage",latency:"Monitor Server Response Time"},r={cpuUsage:"Monitor CPU usage for better performance of your server",memoryUsage:"Track memory usage to avoid bottlenecks",diskSpace:"Check disk space to prevent issues"},l={cpuUsage:{value:75,tooltip:"CPU usage above 75% indicates high load, which could affect performance."},memoryUsage:{value:80,tooltip:"Memory usage above 80% means the server is running out of available memory."},diskSpace:{value:90,tooltip:"Disk space above 90% means the server is running out of storage space."},latency:{value:200,tooltip:"Latency above 200ms could lead to delayed responses and degraded user experience."}}},2563:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var a=s(5043),r=s(3664),l=s(3299);var o=s(8615),n=s(9600),i=s(579);const c=e=>{let{options:t,label:s,placeholder:r,onChange:l,initialSelected:c}=e;const[d,u]=(0,a.useState)({label:c,value:c});return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.z4,{children:s}),(0,i.jsx)(n.Ay,{value:d,onChange:e=>{u(e),l&&l(e.value)},options:t,placeholder:r})]})};var d=s(6484),u=s(3685),p=s(108),v=s(5748),m=s(7734),x=s(2185),h=s(6026),f=s(6150),j=s(168);const y=function(e){let{metricsData:t,xAxis:s,yAxis:a}=e;return(0,i.jsx)(p.u,{width:"100%",height:300,children:(0,i.jsxs)(v.b,{data:t,children:[(0,i.jsx)(m.d,{stroke:"#E2E8F0",strokeDasharray:"5 5"}),(0,i.jsx)(x.W,{dataKey:s,tick:{fill:"#94A3B8",fontSize:12},stroke:"#E2E8F0"}),(0,i.jsx)(h.h,{tick:{fill:"#94A3B8",fontSize:12},stroke:"#F5F5F5"}),(0,i.jsx)(f.m,{}),(0,i.jsx)(j.N,{type:"monotone",dataKey:a,stroke:"#0280FF",style:{opacity:.4}})]})})};const b=function(e){const t=t=>{let{children:s,...a}=t;return(0,i.jsxs)("div",{className:"relative",children:[s,(0,i.jsx)(e,{...a})]})};return t.displayName=`WithTop(${function(e){return e.displayName||e.name||"Component"}(e)})`,t}((function(e){let{serverData:t,label:s}=e;return(0,i.jsxs)("div",{className:"bg-slate-50 shadow-sm rounded-sm flex flex-col justify-center items-center py-4 pr-4",children:[(0,i.jsx)(y,{metricsData:t,xAxis:"time",yAxis:"value"}),(0,i.jsx)(o.ax,{textColor:"text-brand-blue-1",children:s})]})}));var g=s(7943);s(289);const k=function(e){let{toolTipLabel:t}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"absolute -top-1 -left-1 w-3 h-3 bg-red-500 rounded-full animate-custom-pulse","data-tooltip-id":t}),(0,i.jsx)(g.m_,{place:"top",type:"dark",effect:"solid",id:t,content:t})]})};const w=function(){const[e,t]=(0,a.useState)([]),{serverId:s,dispatch:n}=(0,a.useContext)(r.P),p=(0,d.q)();return(0,a.useEffect)((()=>{const e=function(e){return l.A[e]}(s);t(e)}),[s]),0===e.length?null:(0,i.jsxs)("div",{className:"w-full md:w-3/4 flex flex-col gap-3",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center ",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Ct,{children:"Server Performance Metrics"}),(0,i.jsx)(o.ax,{textColor:"text-slate-500",children:"Observe servers real time data"})]}),(0,i.jsx)(c,{placeholder:"Select Server",initialSelected:p[0],onChange:e=>n({type:"SET_SERVER",payload:e}),options:p.map((e=>({label:e,value:e})))})]}),(0,i.jsx)("div",{className:"relative server-metrics-container p-6 border border-slate-200 flex flex-wrap gap-4 rounded",children:Object.entries(e).map((e=>{var t;let[s,a]=e;return(0,i.jsxs)(b,{label:u.vI[s],serverData:a,children:[a[a.length-1].value>=(null===(t=u.wu[s])||void 0===t?void 0:t.value)&&(0,i.jsx)(k,{toolTipLabel:u.wu[s].tooltip})," "]},s)}))})]})}}}]);
//# sourceMappingURL=563.b71d0a2b.chunk.js.map