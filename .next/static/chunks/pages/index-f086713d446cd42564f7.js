(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2993:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(e){var n=e.category,t=e.categoryCount;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"text-gray-700 text-2xl font-medium block mt-16",children:n}),(0,r.jsx)("span",{className:"mt-3 text-sm text-gray-500",children:t})]})}},1532:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(e){var n=e.children;return(0,r.jsx)("main",{className:"my-8",children:(0,r.jsx)("div",{className:"container mx-auto px-6",children:n})})}},2266:function(e,n,t){"use strict";var r=t(5893),s=t(7757),c=t.n(s),a=t(2137),i=t(7294),o=t(1664),l=t(1163),u=t(9566);n.Z=function(){var e=(0,l.useRouter)(),n=(0,i.useState)(""),t=n[0],s=n[1],d=(0,i.useState)([]),x=d[0],f=d[1];(0,i.useEffect)((0,a.Z)(c().mark((function e(){var n,r,s,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.length){e.next=19;break}return"intelistyle-project-bbjcc",n=new u.gV({id:"intelistyle-project-bbjcc"}),r=u.cN.anonymous(),e.prev=4,e.next=7,n.logIn(r);case 7:return s=e.sent,e.next=10,s.functions.searchAutoComplete(t);case 10:a=e.sent,f((function(){return a})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:e.next=20;break;case 19:f([]);case 20:case"end":return e.stop()}}),e,null,[[4,14]])}))),[t]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{children:[(0,r.jsx)("div",{className:"container mx-auto px-6 py-3",children:(0,r.jsx)("div",{className:"flex items-center justify-between",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("div",{className:"w-full text-green-500 text-2xl font-semibold cursor-pointer",children:"Intelistyle Search Project"})})})}),(0,r.jsxs)("div",{className:"relative mt-6 max-w-lg mx-auto",children:[(0,r.jsx)("form",{onSubmit:function(n){n.preventDefault(),s(""),e.push({pathname:"/search/".concat(t)})},children:(0,r.jsx)("input",{className:"w-full border rounded-md pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline",type:"text",placeholder:"Search",onChange:function(e){return s(e.target.value)},value:t})}),x.length>0&&(0,r.jsx)("ul",{className:"absolute inset-x-0 top-full bg-green-200 border border-green-500 rounded-md z-20",children:x.map((function(n){return(0,r.jsx)("li",{className:"px-4 py-2 hover:bg-green-300 cursor-pointer",onClick:function(){return t=n._id,s(""),void e.push({pathname:"/products/".concat(t)});var t},children:n.product_title},n._id)}))})]})]})})}},4758:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=(t(7294),t(1664)),c=t(6049),a=function(e){var n=e.product;return(0,r.jsx)(s.default,{href:"/products/".concat(n._id),children:(0,r.jsxs)("div",{className:"w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition",children:[(0,r.jsx)("div",{className:"flex items-end justify-end h-56 w-full bg-cover relative",children:(0,r.jsx)("button",{className:"absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500",children:(0,r.jsx)(c.Q1y,{className:"w-5 h-5"})})}),(0,r.jsxs)("div",{className:"px-5 py-3",children:[(0,r.jsx)("h3",{className:"text-gray-700 uppercase",children:n.product_title}),(0,r.jsxs)("span",{className:"text-gray-500 mt-2",children:["$",n.price]})]})]})})},i=function(e){var n=e.products;return(0,r.jsx)("div",{className:"grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6",children:n.map((function(e){return(0,r.jsx)(a,{product:e},e._id)}))})}},6124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(5893),s=t(7757),c=t.n(s),a=t(2137),i=t(9008),o=t(7294),l=t(9566),u=t(2993),d=t(1532),x=t(2266);t(4758);function f(){var e=(0,o.useState)([]),n=e[0],t=e[1];return(0,o.useEffect)((0,a.Z)(c().mark((function e(){var n,r,s,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"intelistyle-project-bbjcc",n=new l.gV({id:"intelistyle-project-bbjcc"}),r=l.cN.anonymous(),e.prev=3,e.next=6,n.logIn(r);case 6:return s=e.sent,e.next=9,s.functions.getAllProducts();case 9:a=e.sent,t((function(){return a})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])}))),[]),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen py-2",children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Intelistyle Mongo Search"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"bg-white w-full min-h-screen",children:[(0,r.jsx)(x.Z,{}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.Z,{category:"Available Products",categoryCount:"".concat(n.length," Products")})})]})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])}},function(e){e.O(0,[105,410,49,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);