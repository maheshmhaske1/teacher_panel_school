"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8718],{6027:(e,a,t)=>{t.d(a,{HD:()=>v,HJ:()=>m,Ix:()=>f,JQ:()=>p,Kz:()=>j,Lx:()=>i,QQ:()=>l,VR:()=>d,X9:()=>b,Y$:()=>_,Yw:()=>h,fw:()=>w,h0:()=>T,jw:()=>g,k6:()=>x,r$:()=>y,rp:()=>S,wr:()=>u});var n=t(7154),s=t(1880);const r="http://localhost:5000",c=n.A.create({baseURL:r,headers:{"Content-Type":"application/json"}}),o=()=>{const e=s.A.get("accessToken");e&&(c.defaults.headers.common.Authorization="Bearer ".concat(e))};o(),c.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&(window.location.href="/admin-login"),Promise.reject(e))));const i=async e=>{try{const a=await c.post("".concat(r,"/teacher/login"),e);if(a.data.success){const e=a.data.data.token;s.A.set("accessToken",e,{secure:!0,sameSite:"strict"});const t=a.data.data.teacherData.name;s.A.set("name",t,{secure:!0,sameSite:"strict"});const n=a.data.data.teacherData._id;s.A.set("adminId",n,{secure:!0,sameSite:"strict"});const r=a.data.data.teacherData.organization_id;s.A.set("organizationId",r,{secure:!0,sameSite:"strict"}),o()}return a.data}catch(a){throw console.log("error",a),a}},l=async()=>{try{return(await c.get("".concat(r,"/organization"))).data}catch(e){throw e}},d=async e=>{try{return(await c.get("".concat(r,"/teacher/by-organization/").concat(e))).data}catch(a){throw a}},h=async e=>{try{return(await c.post("".concat(r,"/teacher"),e)).data}catch(a){throw a}},u=async e=>{try{return(await c.delete("".concat(r,"/teacher/").concat(e))).data}catch(a){throw a}},m=async(e,a)=>{try{return(await c.patch("".concat(r,"/teacher/").concat(e),a)).data}catch(t){throw t}},p=async()=>{try{return(await c.get("".concat(r,"/levels"))).data}catch(e){throw e}},x=async e=>{try{return(await c.get("".concat(r,"/student/organization/").concat(e))).data}catch(a){throw a}},g=async e=>{try{return(await c.post("".concat(r,"/student"),e)).data}catch(a){throw a}},y=async e=>{try{return(await c.delete("".concat(r,"/student/").concat(e))).data}catch(a){throw a}},_=async(e,a)=>{try{return(await c.patch("".concat(r,"/student/").concat(e),a)).data}catch(t){throw t}},j=async e=>{try{return(await c.get("".concat(r,"/exam/").concat(e))).data}catch(a){throw a}},w=async e=>{try{return(await c.get("".concat(r,"/exam/get-exam-student-by-exam-id/").concat(e))).data}catch(a){throw a}},b=async e=>{try{return(await c.delete("".concat(r,"/exam/removed-student-from-exam/").concat(e))).data}catch(a){throw a}},v=async e=>{try{return(await c.delete("".concat(r,"/exam/").concat(e))).data}catch(a){throw a}},f=async e=>{try{return(await c.get("".concat(r,"/exam/by-organization-id/").concat(e))).data}catch(a){throw a}},T=async e=>{try{return(await c.post("".concat(r,"/exam/add-exam-student"),e)).data}catch(a){throw a}},S=async e=>{try{return(await c.post("".concat(r,"/exam/organization-student-not-exit"),e)).data}catch(a){throw a}}},9277:(e,a,t)=>{t.d(a,{A:()=>d});var n=t(5043),s=t(1094),r=t(8889),c=t(8155),o=t(4196),i=t(1238),l=t(579);const d=e=>{let{columns:a,data:t,name:d}=e;const{getTableProps:h,getTableBodyProps:u,headerGroups:m,prepareRow:p,page:x,state:{pageIndex:g,pageSize:y,globalFilter:_},setGlobalFilter:j,gotoPage:w,nextPage:b,previousPage:v,canNextPage:f,canPreviousPage:T}=(0,s.useTable)({columns:a,data:t,initialState:{pageIndex:0,pageSize:10}},s.useGlobalFilter,s.useSortBy,s.usePagination);return(0,l.jsxs)("div",{className:"data-table-container",children:[(0,l.jsx)("h5",{children:d||""}),(0,l.jsxs)("div",{className:"data-table-header",children:[(0,l.jsxs)("div",{className:"search-box-container",children:[(0,l.jsx)(r.A,{type:"text",value:_||"",onChange:e=>j(e.target.value),placeholder:"Search..."}),(0,l.jsx)("span",{className:"search-icon",children:"\ud83d\udd0d"})]}),(0,l.jsx)(c.A,{onClick:()=>(()=>{const e=t.map((e=>a.reduce(((a,t)=>(a[t.Header]=e[t.accessor],a)),{}))),n=i.Wp.json_to_sheet(e),s=i.Wp.book_new();i.Wp.book_append_sheet(s,n,"Sheet 1"),i._h(s,"data.xlsx")})(),className:"download_excel",variant:"success",style:{color:"white"},children:"Download Excel"})]}),(0,l.jsx)("div",{className:"table-wrapper",children:(0,l.jsxs)(o.A,{...h(),bordered:!0,hover:!0,responsive:!0,children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Sr. No."}),m.map((e=>(0,l.jsx)(n.Fragment,{children:e.headers.map((e=>(0,l.jsxs)("th",{...e.getHeaderProps(e.getSortByToggleProps()),children:[e.render("Header"),(0,l.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]},e._id)))},e._id)))]})}),(0,l.jsx)("tbody",{...u(),children:x.map(((e,a)=>(p(e),(0,l.jsxs)("tr",{...e.getRowProps(),children:[(0,l.jsx)("td",{children:g*y+a+1}),e.cells.map((e=>(0,l.jsx)("td",{...e.getCellProps(),children:e.render("Cell")},e.column._id)))]},e._id))))})]})}),(0,l.jsxs)("div",{className:"pagination-controls",children:[(0,l.jsx)("button",{onClick:()=>w(0),disabled:!T,children:"<<"}),(0,l.jsx)("button",{onClick:()=>v(),disabled:!T,children:"<"}),(0,l.jsx)("button",{onClick:()=>b(),disabled:!f,children:">"}),(0,l.jsx)("button",{onClick:()=>w(x.length-1),disabled:!f,children:">>"}),(0,l.jsxs)("span",{children:["\xa0Page ",(0,l.jsx)("strong",{children:g+1})," "]})]})]})}},4237:(e,a,t)=>{t.d(a,{A:()=>r});t(5043);var n=t(3946),s=t(579);const r=e=>{let{customStyles:a,title:t}=e;return(0,s.jsx)(n.sK,{children:(0,s.jsx)(n.UF,{xs:12,children:(0,s.jsxs)(n.E$,{className:"mb-4",children:[(0,s.jsx)(n.V0,{children:(0,s.jsx)("strong",{children:t})}),(0,s.jsx)(n.W6,{children:a?a():null})]})})})}},8718:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var n=t(5043),s=t(2774),r=t(3946),c=t(9277),o=t(4237),i=t(6027),l=t(2145),d=(t(2342),t(64)),h=t.n(d),u=t(2558),m=t(1880),p=t(579);const x=function(e){console.log("props",e);const[a,t]=(0,n.useState)([]),[d,x]=(0,n.useState)(null),[g,y]=(0,n.useState)("Add Teacher"),[_,j]=(0,n.useState)(!1),[w,b]=(0,n.useState)(!1),v=m.A.get("organizationId"),[f,T]=(0,n.useState)({name:"",email:"",mobile_number:"",is_type:null,is_type_value:null,file:null,organization_value:null,organization_id:v});(0,n.useEffect)((()=>{P()}),[]);const[S]=(0,n.useState)([{value:"Principal",label:"Principal"},{value:"HOD",label:"HOD"},{value:"Teacher",label:"Teacher"}]),P=async()=>{const e=await(0,i.VR)(v);t(e.data)},z=[{Header:"Organization Name",accessor:"organization_id.name"},{Header:"Teacher Name",accessor:"name"},{Header:"Teacher Email",accessor:"email"},{Header:"Teacher Mobile Number",accessor:"mobile_number"},{Header:"Role",accessor:"is_type"},{Header:"Actions",accessor:"_id",Cell:e=>{let{row:t}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(r.Q_,{color:"info",size:"sm",style:{color:"white"},onClick:()=>(e=>{y("Update Teacher");const t=a.find((a=>a._id===e));x(t._id),T({name:t.name,email:t.email,mobile_number:t.mobile_number,is_type_value:{value:t.is_type,label:t.is_type},is_type:t.is_type,organization_value:{value:t.organization_id._id,label:t.organization_id.name},organization_id:t.organization_id._id,file:null})})(t.original._id),children:[(0,p.jsx)(s.uO9,{})," Edit"]})," ",(0,p.jsxs)(r.Q_,{color:"danger",size:"sm",style:{color:"white"},onClick:()=>(async e=>{if((await h().fire({title:"Are you sure?",text:"You will not be able to recover this teacher!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{const a=await(0,i.wr)(e);a.success&&(l.oR.success(a.message,{position:l.oR.POSITION.TOP_RIGHT,autoClose:3e3}),P())}catch(a){l.oR.error(a.message,{position:l.oR.POSITION.TOP_RIGHT,autoClose:3e3})}})(t.original._id),children:[(0,p.jsx)(s.qbC,{})," Delete"]})]})}}];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.A,{customStyles:()=>{const a=(0,n.useRef)(),t=e=>{const{name:a,value:t,files:n}=e.target;T((e=>({...e,[a]:"file"===a?n[0]:t})))};return(0,p.jsxs)(r.qI,{ref:a,className:"row g-3 needs-validation",noValidate:!0,onSubmit:async t=>{t.preventDefault(),t.stopPropagation();const n=a.current;if(!1===n.checkValidity())return n.classList.add("was-validated"),""==f.is_type||null==f.is_type?void j(!0):""==f.organization_id||null==f.organization_id?void b(!0):void 0;let s=null;console.log(f),e.id&&(f.organization_id=e.id),d?s=await(0,i.HJ)(d,f):(s=await(0,i.Yw)(f),x(null)),s.success?(l.oR.success(s.message,{position:l.oR.POSITION.TOP_RIGHT,autoClose:3e3}),P(),y("Add Teacher"),T({name:"",email:"",mobile_number:"",address:"",is_type_value:null,is_type:null,file:null,organization_value:null,organization_id:v}),n.classList.remove("was-validated")):l.oR.error(s.message,{position:l.oR.POSITION.TOP_RIGHT,autoClose:3e3})},children:[(0,p.jsxs)(r.UF,{md:4,children:[(0,p.jsx)(r.A6,{children:"Name"}),(0,p.jsx)(r.OG,{type:"text",placeholder:"Enter Name",name:"name",required:!0,value:f.name,onChange:t}),(0,p.jsx)(r.To,{invalid:!0,children:"Please enter name"})]}),(0,p.jsxs)(r.UF,{md:4,children:[(0,p.jsx)(r.A6,{children:"Email"}),(0,p.jsx)(r.OG,{type:"email",name:"email",placeholder:"Enter Email",required:!0,value:f.email,onChange:t}),(0,p.jsx)(r.To,{invalid:!0,children:"Please enter email"})]}),(0,p.jsxs)(r.UF,{md:4,children:[(0,p.jsx)(r.A6,{children:"Mobile Number"}),(0,p.jsx)(r.OG,{type:"number",name:"mobile_number",placeholder:"Enter Mobile Number",required:!0,value:f.mobile_number,onChange:t}),(0,p.jsx)(r.To,{invalid:!0,children:"Please enter mobile number"})]}),(0,p.jsxs)(r.UF,{md:4,children:[(0,p.jsx)(r.A6,{children:"Select Type"}),(0,p.jsx)(u.Ay,{name:"is_type",value:f.is_type_value,options:S,onChange:e=>{console.log(e),T((a=>({...a,is_type_value:e,is_type:e.value}))),j(!1)},placeholder:"Select Type",required:!0}),(0,p.jsxs)(r.To,{className:"text-danger",style:{fontSize:"14px"},children:[" ",_?"Please select type":""]})]}),(0,p.jsxs)(r.UF,{md:4,children:[(0,p.jsx)(r.A6,{children:"Upload Logo"}),(0,p.jsx)(r.OG,{type:"file","aria-label":"file example"}),(0,p.jsx)(r.To,{invalid:!0,children:"Example invalid form file feedback"})]}),(0,p.jsx)(r.UF,{xs:12,className:"d-flex justify-content-end",children:(0,p.jsx)(r.Q_,{color:"primary",type:"submit",children:g})})]})},title:"Teacher Master"}),(0,p.jsx)(c.A,{columns:z,data:a})]})}}}]);
//# sourceMappingURL=8718.1dd09aad.chunk.js.map