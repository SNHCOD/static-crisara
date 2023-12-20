import{o as n,c as i,a as e,b as o,t as r,n as a,F as d,r as c}from"./index-pZH3N4BV.js";const u={class:"flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-5"},p=e("div",{class:"flex flex-1 justify-between sm:hidden"},[e("a",{href:"#",class:"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"},"Previous"),e("a",{href:"#",class:"relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"},"Next")],-1),f={class:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"},h={class:"text-sm text-gray-700"},g={class:"font-medium"},_={class:"font-medium"},x={class:"isolate inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination"},m=["href"],v=e("span",{class:"sr-only"},"Anterior",-1),y=e("svg",{class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"})],-1),b=e("span",null,"Anterior",-1),w=[v,y,b],k=["href"],P=["href"],z=e("span",{class:"sr-only"},"Siguiente",-1),B=e("span",null,"Siguiente",-1),j=e("svg",{class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"})],-1),C=[z,B,j],A={__name:"Pagination",props:["total","perPage","countPages","links","prefix"],setup(l){const t=l;return(L,M)=>(n(),i("div",u,[p,e("div",f,[e("div",null,[e("p",h,[o(" Mostrando "),e("span",g,r(t.perPage&&t.perPage),1),o(" de "),e("span",_,r(t.total&&t.total),1),o(" resultados ")])]),e("div",null,[e("nav",x,[e("a",{href:t.links&&t.links.previous_page,class:a("relative inline-flex items-center rounded-l-md px-2 py-2 text-black ring-1 ring-inset ring-gray-300 hover:bg-default hover:text-white focus:z-20 focus:outline-offset-0 "+(t.links&&t.links.previous_page?"":"pointer-events-none opacity-50 cursor-not-allowed"))},w,10,m),(n(!0),i(d,null,c(t.links&&t.links.pages,(s,N)=>(n(),i("a",{href:"/"+t.prefix+"/?page="+s,class:a("relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0 "+(t.links&&t.links.current_page==s?"bg-default text-white":" hover:bg-default hover:text-white"))},r(s.substr(0,1)),11,k))),256)),e("a",{href:t.links&&t.links.next_page,class:a("relative inline-flex items-center rounded-r-md px-2 py-2 text-black ring-1 ring-inset ring-gray-300 hover:bg-default hover:text-white focus:z-20 focus:outline-offset-0 "+(t.links&&t.links.next_page?"":"pointer-events-none opacity-50 cursor-not-allowed"))},C,10,P)])])])]))}};export{A as default};
