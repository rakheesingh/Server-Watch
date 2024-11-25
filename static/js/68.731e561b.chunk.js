"use strict";(self.webpackChunkserver_watch=self.webpackChunkserver_watch||[]).push([[68],{3685:(e,a,s)=>{s.d(a,{vI:()=>r,wD:()=>t,wu:()=>o});const r={cpuUsage:"Track CPU Utilization Over Time",memoryUsage:"Monitor Memory Consumption Trends",diskSpace:"Analyze Disk Space Usage",latency:"Monitor Server Response Time"},t={cpuUsage:"Monitor CPU usage for better performance of your server",memoryUsage:"Track memory usage to avoid bottlenecks",diskSpace:"Check disk space to prevent issues"},o={cpuUsage:{value:75,tooltip:"CPU usage above 75% indicates high load, which could affect performance."},memoryUsage:{value:80,tooltip:"Memory usage above 80% means the server is running out of available memory."},diskSpace:{value:90,tooltip:"Disk space above 90% means the server is running out of storage space."},latency:{value:200,tooltip:"Latency above 200ms could lead to delayed responses and degraded user experience."}}},4068:(e,a,s)=>{s.r(a),s.d(a,{default:()=>j});s(5043);const r=[{id:1,name:"Server A",status:"Active",cpuUsage:55,memoryUsage:75,diskSpace:20},{id:2,name:"Server B",status:"Idle",cpuUsage:20,memoryUsage:40,diskSpace:35},{id:3,name:"Server C",status:"Overloaded",cpuUsage:95,memoryUsage:90,diskSpace:65},{id:4,name:"Server D",status:"Overloaded",cpuUsage:65,memoryUsage:20,diskSpace:20}];var t=s(108),o=s(2291),i=s(7734),c=s(2185),n=s(6026),l=s(6150),d=s(8643),m=s(579);const u=function(e){let{metricsData:a,Xaxis:s,Yaxis:r}=e;return(0,m.jsx)(t.u,{width:"100%",height:400,children:(0,m.jsxs)(o.E,{data:a,margin:{top:20,right:30,left:20,bottom:5},children:[(0,m.jsx)(i.d,{stroke:"#E2E8F0",strokeDasharray:"5 5"})," ",(0,m.jsx)(c.W,{dataKey:s,tick:{fill:"#94A3B8",fontSize:12},stroke:"#E2E8F0"}),(0,m.jsx)(n.h,{tick:{fill:"#94A3B8",fontSize:12},stroke:"#F5F5F5"}),(0,m.jsx)(l.m,{contentStyle:{backgroundColor:"#f5f5f5",border:"none"},cursor:{fill:"rgba(0, 0, 0, 0.1)"}}),(0,m.jsx)(d.y,{dataKey:r,fill:"#0280FF",barSize:25,style:{opacity:.8}})]})})};var p=s(163),x=s(4240),h=s(7869);const v=function(e){let{metricsData:a,Xaxis:s,Yaxis:r}=e;const o=[.6,.7,.8,.9];return(0,m.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"400px"},children:(0,m.jsx)(t.u,{width:"100%",height:"100%",children:(0,m.jsxs)(p.r,{children:[(0,m.jsx)(l.m,{}),(0,m.jsx)(x.F,{data:a,dataKey:r,nameKey:s,cx:"50%",cy:"50%",outerRadius:100,label:!0,children:a.map(((e,a)=>(0,m.jsx)(h.f,{fill:"#0280FF",style:{opacity:o[a]}},`cell-${a}`)))})]})})})};var g=s(8500),f=s(8615),y=s(3685);const k={BAR:u,PIE:v};const j=function(){const e=r;return(0,m.jsxs)("div",{className:"w-full md:w-3/4 flex flex-col gap-3",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(f.Ct,{children:"Server Performance Comparison"}),(0,m.jsx)(f.ax,{textColor:"text-slate-500",children:"Analyze real-time metrics and compare server performance across key parameters."})]}),(0,m.jsx)("div",{className:"relative server-metrics-container p-6 border border-slate-200 flex flex-wrap gap-4 rounded",children:g.Q.map(((a,s)=>{const r=k[a.chart],t=a.metric,o=e.map((e=>({name:e.name,[t]:e[t]})));return(0,m.jsxs)("div",{className:"py-4 pr-4 bg-slate-50 rounded-lg shadow",children:[(0,m.jsx)(r,{metricsData:o,Xaxis:"name",Yaxis:t}),(0,m.jsx)(f.ax,{textColor:"text-brand-blue-1",className:"text-center",children:y.wD[t]})]},s)}))})]})}}}]);
//# sourceMappingURL=68.731e561b.chunk.js.map