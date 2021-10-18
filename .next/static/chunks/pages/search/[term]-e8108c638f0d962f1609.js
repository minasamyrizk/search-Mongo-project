(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{2993:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.category,n=e.categoryCount;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"text-gray-700 text-2xl font-medium block mt-16",children:t}),(0,r.jsx)("span",{className:"mt-3 text-sm text-gray-500",children:n})]})}},1532:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,r.jsx)("main",{className:"my-8",children:(0,r.jsx)("div",{className:"container mx-auto px-6",children:t})})}},2266:function(e,t,n){"use strict";var r=n(5893),s=n(7757),c=n.n(s),a=n(2137),o=n(7294),i=n(1664),u=n(1163),l=n(9566);t.Z=function(){var e=(0,u.useRouter)(),t=(0,o.useState)(""),n=t[0],s=t[1],d=(0,o.useState)([]),x=d[0],f=d[1];(0,o.useEffect)((0,a.Z)(c().mark((function e(){var t,r,s,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.length){e.next=19;break}return"intelistyle-project-bbjcc",t=new l.gV({id:"intelistyle-project-bbjcc"}),r=l.cN.anonymous(),e.prev=4,e.next=7,t.logIn(r);case 7:return s=e.sent,e.next=10,s.functions.searchAutoComplete(n);case 10:a=e.sent,f((function(){return a})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:e.next=20;break;case 19:f([]);case 20:case"end":return e.stop()}}),e,null,[[4,14]])}))),[n]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{children:[(0,r.jsx)("div",{className:"container mx-auto px-6 py-3",children:(0,r.jsx)("div",{className:"flex items-center justify-between",children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("div",{className:"w-full text-green-500 text-2xl font-semibold cursor-pointer",children:"Intelistyle Search Project"})})})}),(0,r.jsxs)("div",{className:"relative mt-6 max-w-lg mx-auto",children:[(0,r.jsx)("form",{onSubmit:function(t){t.preventDefault(),s(""),e.push({pathname:"/search/".concat(n)})},children:(0,r.jsx)("input",{className:"w-full border rounded-md pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline",type:"text",placeholder:"Search",onChange:function(e){return s(e.target.value)},value:n})}),x.length>0&&(0,r.jsx)("ul",{className:"absolute inset-x-0 top-full bg-green-200 border border-green-500 rounded-md z-20",children:x.map((function(t){return(0,r.jsx)("li",{className:"px-4 py-2 hover:bg-green-300 cursor-pointer",onClick:function(){return n=t._id,s(""),void e.push({pathname:"/products/".concat(n)});var n},children:t.product_title},t._id)}))})]})]})})}},4758:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),s=(n(7294),n(1664)),c=n(6049),a=function(e){var t=e.product;return(0,r.jsx)(s.default,{href:"/products/".concat(t._id),children:(0,r.jsxs)("div",{className:"w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition",children:[(0,r.jsx)("div",{className:"flex items-end justify-end h-56 w-full bg-cover relative",children:(0,r.jsx)("button",{className:"absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500",children:(0,r.jsx)(c.Q1y,{className:"w-5 h-5"})})}),(0,r.jsxs)("div",{className:"px-5 py-3",children:[(0,r.jsx)("h3",{className:"text-gray-700 uppercase",children:t.product_title}),(0,r.jsxs)("span",{className:"text-gray-500 mt-2",children:["$",t.price]})]})]})})},o=function(e){var t=e.products;return(0,r.jsx)("div",{className:"grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6",children:t.map((function(e){return(0,r.jsx)(a,{product:e},e._id)}))})}},7450:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),s=n(7757),c=n.n(s),a=n(2137),o=n(9008),i=n(7294),u=n(1163),l=n(9566),d=n(2993),x=n(1532),f=n(2266),h=n(4758);function m(){var e=(0,i.useState)([]),t=e[0],n=e[1],s=(0,u.useRouter)().query;return(0,i.useEffect)((0,a.Z)(c().mark((function e(){var t,r,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.term){e.next=17;break}return"intelistyle-project-bbjcc",t=new l.gV({id:"intelistyle-project-bbjcc"}),r=l.cN.anonymous(),e.prev=4,e.next=7,t.logIn(r);case 7:return a=e.sent,e.next=10,a.functions.searchProducts(s.term);case 10:o=e.sent,n((function(){return o})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])}))),[s]),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen py-2",children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Intelistyle Mongo Search"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"bg-white w-full min-h-screen",children:[(0,r.jsx)(f.Z,{}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(d.Z,{category:"Products Found",categoryCount:"".concat(t.length," Products")}),(0,r.jsx)(h.Z,{products:t})]})]})]})}},9690:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[term]",function(){return n(7450)}])}},function(e){e.O(0,[105,410,49,774,888,179],(function(){return t=9690,e(e.s=t);var t}));var t=e.O();_N_E=t}]);