import{r as l,f as p,u as n,j as e}from"./index-B1l4BiDB.js";import{u as f,a as x}from"./hooks-Dn7CqnMA.js";import{P as m,C as g}from"./Card-R8F_kR7y.js";import"./index-Cl2uDP0u.js";import"./LazyImage-Brhme_80.js";const E=()=>{const t=f(),{products:r,loading:a,error:o,visibleProductsCount:c}=x(s=>s.product),[i,d]=l.useState([]);l.useEffect(()=>{r.length===0&&t(p())},[t,r.length]),l.useEffect(()=>{d(r)},[r]),l.useEffect(()=>{const s=localStorage.getItem("visibleProductsCount");t(s?n(parseInt(s,10)):n(10))},[t]);const u=l.useCallback(s=>{d(s)},[]),h=()=>{t(n(c+5))};return a?e.jsx("div",{className:"w-full flex justify-center items-center h-[93vh]",children:e.jsx("p",{children:"Loading..."})}):o&&r.length===0?e.jsxs("p",{children:["Error: ",o]}):e.jsxs(e.Fragment,{children:[e.jsx(m,{products:r,show:!0,onFilterChange:u}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml-5 gap-9",children:i.length===0?e.jsx("p",{className:"flex text-xl justify-center items-center",children:e.jsx("span",{children:"No products found"})}):i.slice(0,c).map(s=>e.jsx(g,{product:s},s.id))}),c<i.length&&e.jsx("div",{className:"flex justify-center mt-4",children:e.jsx("button",{onClick:h,className:"px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Show More"})}),o&&e.jsxs("p",{children:["Error: ",o]})]})};export{E as default};
