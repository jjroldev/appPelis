import{r as i,B as v,A as p}from"./index-CW8X7TER.js";const h=async(s,r)=>{let e=[];for(let t=1;t<=r;t++){const o=await(await fetch(`${s}&page=${t}`)).json();e=[...e,...o.results.map(a=>a.id)]}return e},$=async(s,r,e)=>{const t=s.map(o=>fetch(`${v}/movie/${o}?api_key=${p}&language=${r}&append_to_response=${e.join(",")}`).then(a=>a.ok?a.json():Promise.reject(new Error(`Error fetching details for movie ID: ${o}`))));return await Promise.all(t)},M=(s,r,e,t)=>{const[n,o]=i.useState([]),[a,l]=i.useState(!0),[f,m]=i.useState(null);return i.useEffect(()=>{(async()=>{l(!0);try{const c=await h(s,r),u=await $(c,e,t);o(u)}catch(c){m(c.message)}finally{l(!1)}})()},[s,e]),{movies:n,isLoading:a,error:f}};export{M as u};