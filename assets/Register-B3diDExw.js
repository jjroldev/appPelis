import{r as a,d as g,u as j,p as v,j as e,K as N}from"./index-BpHF59Cs.js";function C(){const[i,r]=a.useState(""),[o,l]=a.useState(""),[c,d]=a.useState(""),[m,u]=a.useState(""),t=g(),{loginAuth:h}=j(),{setEmailExists:p}=v(),x=async s=>{s.preventDefault();const n=await N(i,o,c,m);n?(t("/manageProfiles"),h(n)):(p(!0),t("/login"))};return e.jsx("div",{className:"formContainer",children:e.jsxs("form",{className:"formulario",onSubmit:x,children:[e.jsx("div",{className:"header-form",children:e.jsx("h2",{children:"Register"})}),e.jsx("div",{className:"contenedorInput",children:e.jsx("input",{onChange:s=>r(s.target.value),id:"name",type:"text",placeholder:"José Javier",minLength:5})}),e.jsx("div",{className:"contenedorInput",children:e.jsx("input",{onChange:s=>l(s.target.value),id:"lastName",type:"text",placeholder:"Roldán Browm",minLength:5})}),e.jsx("div",{className:"contenedorInput",children:e.jsx("input",{onChange:s=>d(s.target.value),id:"email",type:"email",placeholder:"email@example.com",minLength:5})}),e.jsx("div",{className:"contenedorInput",children:e.jsx("input",{onChange:s=>u(s.target.value),id:"password",type:"password",placeholder:"Contraseña",minLength:6,maxLength:20})}),e.jsx("div",{children:e.jsx("button",{className:"button-enviar",children:"Register"})}),e.jsx("div",{className:"suscribirse",children:e.jsxs("p",{children:["Already have an account? ",e.jsx("span",{onClick:()=>t("/login"),children:"Login"})]})})]})})}export{C as default};
