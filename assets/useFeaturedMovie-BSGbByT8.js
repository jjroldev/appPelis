import{e as l,r as o}from"./index-BPSd4uE0.js";import{u as p}from"./useQuery-CLpCv9xd.js";import{f as u}from"./fetchData-DCFA1qTy.js";import{g as S,a as M}from"./CardItem-BpziOWWH.js";function F(n,c,f){const{language:e}=l(),m=o.useMemo(()=>S(e),[e]),g=o.useMemo(()=>M(e),[e]),{data:a,isLoading:i}=p([c,e],()=>f=="movie"?u(m.actionMovies):u(g.topRatedSeries)),[d,h]=o.useState(null),r=o.useMemo(()=>{var t;return((t=a==null?void 0:a.results)==null?void 0:t.filter(s=>s.backdrop_path&&s.overview))||[]},[a]);return o.useEffect(()=>{if(!i&&r.length>0){const t=sessionStorage.getItem(n),s=t?JSON.parse(t):r[Math.floor(Math.random()*r.length)];h(s),sessionStorage.setItem(n,JSON.stringify(s))}},[r,i]),d}export{F as u};
