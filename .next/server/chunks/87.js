exports.id=87,exports.ids=[87],exports.modules={7687:(e,t,s)=>{Promise.resolve().then(s.bind(s,5041))},9600:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3724,23)),Promise.resolve().then(s.t.bind(s,5365,23)),Promise.resolve().then(s.t.bind(s,4900,23)),Promise.resolve().then(s.t.bind(s,4714,23)),Promise.resolve().then(s.t.bind(s,5392,23)),Promise.resolve().then(s.t.bind(s,8898,23))},5041:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Sidebar});var n=s(784),r=s(566),a=s(7114);function Item({name:e,pathname:t}){let s=(0,a.usePathname)(),{replace:i}=(0,a.useRouter)();return(0,n.jsxs)("button",{className:(0,r.Z)("ring-accent flex w-[12rem] items-center justify-items-start gap-4 rounded-md px-4 py-2 font-medium",{"hover:ring-1":s!=t,"bg-accent text-white":s==t}),onClick:()=>{i(t)},children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6",children:n.jsx("path",{fillRule:"evenodd",d:"M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"})}),n.jsx("div",{className:"p-1 font-semibold",children:e})]})}function Sidebar(){return(0,n.jsxs)("aside",{className:"flex h-screen flex-col items-center border px-4",children:[n.jsx("div",{className:"py-[5rem] font-bold",children:"Vựa Tiếng Việt"}),(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[n.jsx(Item,{name:"T\xecm Từ",pathname:"/tim-tu"}),n.jsx(Item,{name:"Blogs",pathname:"/blogs"}),n.jsx(Item,{name:"GraPT",pathname:"/grapt"})]})]})}},7230:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>RootLayout,metadata:()=>c});var n=s(4656),r=s(5570),a=s.n(r);s(7272);var i=s(5153);let l=(0,i.createProxy)(String.raw`/Users/ductrinh/Org/AI/vuatiengviet-ui/app/ui/sidebar/sidebar.tsx`),{__esModule:d,$$typeof:o}=l,m=l.default,c={title:"T\xecm vần như \xfd | Vua Tiếng Việt",description:"C\xf4ng cụ t\xecm vần dựa tr\xean Tr\xed tuệ nh\xe2n tạo"};function RootLayout({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:`${a().className} antialiased`,children:(0,n.jsxs)("div",{className:"flex",children:[n.jsx(m,{}),n.jsx("main",{className:"flex-grow",children:e})]})})})}},7272:()=>{}};