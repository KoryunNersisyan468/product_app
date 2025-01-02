import{r as n,j as e,G as h,a as w,L as j,t as N,d as C,e as D}from"./index-B1l4BiDB.js";import{a as A}from"./index-Cl2uDP0u.js";import{u as L}from"./hooks-Dn7CqnMA.js";import{L as S}from"./LazyImage-Brhme_80.js";function $({products:r,onFilterChange:d,show:x}){const[a,o]=n.useState({search:"",categories:[],mode:"OR"}),[c,b]=n.useState(!1),f=500,[g,m]=n.useState(a.search);n.useEffect(()=>{const t=setTimeout(()=>{m(a.search)},f);return()=>clearTimeout(t)},[a.search]);const u=n.useCallback(()=>r.filter(t=>{const i=a.categories.length===0||a.mode==="OR"&&a.categories.some(l=>l==="Liked"?t.liked:l==="Favorite"?t.favorit:!0)||a.mode==="AND"&&a.categories.every(l=>!(l==="Liked"&&!t.liked||l==="Favorite"&&!t.favorit)),y=t.title.toLowerCase().includes(g.toLowerCase());return i&&y}),[r,a,g]);n.useEffect(()=>{d(u())},[u,d]);const s=t=>{o(i=>({...i,search:t.target.value}))},k=t=>{o(i=>{if(t==="All")return{...i,categories:[]};{const y=i.categories.includes(t)?i.categories.filter(l=>l!==t):[...i.categories,t];return{...i,categories:t==="All"?[]:y}}})},p=()=>{o(t=>({...t,mode:t.mode==="OR"?"AND":"OR"}))},v=()=>{b(!c)};return e.jsx("div",{className:"h-16 bg-slate-500 flex justify-center items-center",children:e.jsxs("form",{className:"max-w-lg flex justify-center items-center mx-auto",children:[x&&e.jsxs("div",{className:"flex relative",children:[e.jsxs("button",{id:"dropdown-button",type:"button",className:"flex-shrink-0 justify-between w-44 rounded-lg rounded-r-none z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600",onClick:v,children:[a.categories.length>0?a.categories.join(", "):"All",e.jsx("svg",{className:"w-2.5 h-2.5 ms-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]}),c&&e.jsxs("div",{id:"dropdown",className:"absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700",children:[e.jsx("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdown-button",children:["All","Liked","Favorite"].map(t=>e.jsx("li",{children:e.jsxs("button",{type:"button",className:"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",onClick:()=>k(t),children:[t!=="All"&&e.jsx("input",{type:"checkbox",value:"",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2",checked:a.categories.includes(t),readOnly:!0}),t]})},t))}),e.jsx("div",{className:"px-4 py-2",children:e.jsxs("button",{type:"button",onClick:p,className:"w-full py-2 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600",children:["Switch to ",a.mode==="OR"?"AND":"OR"," mode"]})}),e.jsx("button",{type:"button",className:"absolute top-2 text-slate-300 border-none right-2 p-2",onClick:v,children:e.jsx(A,{size:22})})]})]}),e.jsx("div",{className:"relative flex justify-center items-center w-full",children:e.jsx("input",{type:"search",id:"search-dropdown",className:"block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500",placeholder:"Search for products...",value:a.search,onChange:s})})]})})}function z(r){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},child:[]}]})(r)}function M(r){return h({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"},child:[]},{tag:"path",attr:{d:"M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"},child:[]}]})(r)}function B(r){return h({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"},child:[]}]})(r)}function F(r){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(r)}const E=({product:r})=>{const d=w(),[x,a]=n.useState(!1),o=L(),c=s=>{s.preventDefault(),o(N(r.id))},b=s=>{s.preventDefault(),o(C(r.id))},f=s=>{s.preventDefault(),a(!0),o(D(r.id)),a(!1)},g=s=>{s.preventDefault(),d(`/products/edit/${r.id}`)},m=s=>{s.target instanceof HTMLButtonElement&&s.preventDefault()},u=r.title.length>28?`${r.title.slice(0,27)}...`:r.title;return e.jsx("div",{className:"w-[330px] h-[490px]",children:e.jsx(j,{to:`/products/${r.id}`,onClick:m,className:"w-full h-full mt-0 box-border",children:e.jsx("div",{className:"h-[490px] w-[330px] box-border",children:e.jsxs("div",{className:"container bg-gray-200 h-[490px] flex items-center justify-between flex-col border-2 border-gray-400 w-[330px] box-border p-5 mt-12",children:[e.jsx(S,{className:"productsImg",alt:"ProductImg",src:r.image,placeholderSrc:"",width:"",height:""}),e.jsxs("div",{className:"flex justify-between mt-3 border border-slate-300 box-border p-1 flex-col items-start w-full",children:[e.jsx("div",{className:"text-lg",children:u}),e.jsxs("div",{children:["Price: $",r.price]})]}),e.jsxs("div",{className:"flex mt-4 hover:border-gray-500 box-border border-gray-200 border-t transition-all duration-300 w-full gap-12 justify-center p-2 items-center",children:[e.jsx("button",{className:`transition duration-200 ${r.liked?"text-red-700":"text-gray-500"}`,onClick:c,children:e.jsx(F,{size:32})}),e.jsx("button",{className:`transition duration-200 ${r.favorit?"text-yellow-400":"text-gray-500"}`,onClick:b,children:e.jsx(B,{size:32})}),e.jsx("button",{className:"transition duration-200 text-gray-500",onClick:g,children:e.jsx(M,{size:32})}),e.jsx("button",{className:`transition duration-200 ${x?"text-red-800":"text-gray-500"}`,onClick:f,children:e.jsx(z,{size:32})})]})]})})})})};export{E as C,$ as P};
