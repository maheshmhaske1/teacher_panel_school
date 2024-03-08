"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8502],{6027:(e,a,t)=>{t.d(a,{HD:()=>b,HJ:()=>m,Ix:()=>S,JQ:()=>_,Kz:()=>v,Lx:()=>l,QQ:()=>i,VR:()=>d,X9:()=>w,Y$:()=>y,Yw:()=>u,fw:()=>j,h0:()=>C,jw:()=>g,k6:()=>x,r$:()=>p,rp:()=>T,wr:()=>h});var n=t(7154),r=t(1880);const s="https://backend-school-6sbi.onrender.com",o=n.A.create({baseURL:s,headers:{"Content-Type":"application/json"}}),c=()=>{const e=r.A.get("accessToken");e&&(o.defaults.headers.common.Authorization="Bearer ".concat(e))};c(),o.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&(window.location.href="/admin-login"),Promise.reject(e))));const l=async e=>{try{const a=await o.post("".concat(s,"/teacher/login"),e);if(a.data.success){const e=a.data.data.token;r.A.set("accessToken",e,{secure:!0,sameSite:"strict"});const t=a.data.data.teacherData.name;r.A.set("name",t,{secure:!0,sameSite:"strict"});const n=a.data.data.teacherData._id;r.A.set("adminId",n,{secure:!0,sameSite:"strict"});const s=a.data.data.teacherData.organization_id;r.A.set("organizationId",s,{secure:!0,sameSite:"strict"}),c()}return a.data}catch(a){throw console.log("error",a),a}},i=async()=>{try{return(await o.get("".concat(s,"/organization"))).data}catch(e){throw e}},d=async e=>{try{return(await o.get("".concat(s,"/teacher/by-organization/").concat(e))).data}catch(a){throw a}},u=async e=>{try{return(await o.post("".concat(s,"/teacher"),e)).data}catch(a){throw a}},h=async e=>{try{return(await o.delete("".concat(s,"/teacher/").concat(e))).data}catch(a){throw a}},m=async(e,a)=>{try{return(await o.patch("".concat(s,"/teacher/").concat(e),a)).data}catch(t){throw t}},_=async()=>{try{return(await o.get("".concat(s,"/levels"))).data}catch(e){throw e}},x=async e=>{try{return(await o.get("".concat(s,"/student/organization/").concat(e))).data}catch(a){throw a}},g=async e=>{try{return(await o.post("".concat(s,"/student"),e)).data}catch(a){throw a}},p=async e=>{try{return(await o.delete("".concat(s,"/student/").concat(e))).data}catch(a){throw a}},y=async(e,a)=>{try{return(await o.patch("".concat(s,"/student/").concat(e),a)).data}catch(t){throw t}},v=async e=>{try{return(await o.get("".concat(s,"/exam/").concat(e))).data}catch(a){throw a}},j=async e=>{try{return(await o.get("".concat(s,"/exam/get-exam-student-by-exam-id/").concat(e))).data}catch(a){throw a}},w=async e=>{try{return(await o.delete("".concat(s,"/exam/removed-student-from-exam/").concat(e))).data}catch(a){throw a}},b=async e=>{try{return(await o.delete("".concat(s,"/exam/").concat(e))).data}catch(a){throw a}},S=async e=>{try{return(await o.get("".concat(s,"/exam/by-organization-id/").concat(e))).data}catch(a){throw a}},C=async e=>{try{return(await o.post("".concat(s,"/exam/add-exam-student"),e)).data}catch(a){throw a}},T=async e=>{try{return(await o.post("".concat(s,"/exam/organization-student-not-exit"),e)).data}catch(a){throw a}}},9277:(e,a,t)=>{t.d(a,{A:()=>d});var n=t(5043),r=t(1094),s=t(8889),o=t(8155),c=t(4196),l=t(1238),i=t(579);const d=e=>{let{columns:a,data:t,name:d}=e;const{getTableProps:u,getTableBodyProps:h,headerGroups:m,prepareRow:_,page:x,state:{pageIndex:g,pageSize:p,globalFilter:y},setGlobalFilter:v,gotoPage:j,nextPage:w,previousPage:b,canNextPage:S,canPreviousPage:C}=(0,r.useTable)({columns:a,data:t,initialState:{pageIndex:0,pageSize:10}},r.useGlobalFilter,r.useSortBy,r.usePagination);return(0,i.jsxs)("div",{className:"data-table-container",children:[(0,i.jsx)("h5",{children:d||""}),(0,i.jsxs)("div",{className:"data-table-header",children:[(0,i.jsxs)("div",{className:"search-box-container",children:[(0,i.jsx)(s.A,{type:"text",value:y||"",onChange:e=>v(e.target.value),placeholder:"Search..."}),(0,i.jsx)("span",{className:"search-icon",children:"\ud83d\udd0d"})]}),(0,i.jsx)(o.A,{onClick:()=>(()=>{const e=t.map((e=>a.reduce(((a,t)=>(a[t.Header]=e[t.accessor],a)),{}))),n=l.Wp.json_to_sheet(e),r=l.Wp.book_new();l.Wp.book_append_sheet(r,n,"Sheet 1"),l._h(r,"data.xlsx")})(),className:"download_excel",variant:"success",style:{color:"white"},children:"Download Excel"})]}),(0,i.jsx)("div",{className:"table-wrapper",children:(0,i.jsxs)(c.A,{...u(),bordered:!0,hover:!0,responsive:!0,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Sr. No."}),m.map((e=>(0,i.jsx)(n.Fragment,{children:e.headers.map((e=>(0,i.jsxs)("th",{...e.getHeaderProps(e.getSortByToggleProps()),children:[e.render("Header"),(0,i.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]},e._id)))},e._id)))]})}),(0,i.jsx)("tbody",{...h(),children:x.map(((e,a)=>(_(e),(0,i.jsxs)("tr",{...e.getRowProps(),children:[(0,i.jsx)("td",{children:g*p+a+1}),e.cells.map((e=>(0,i.jsx)("td",{...e.getCellProps(),children:e.render("Cell")},e.column._id)))]},e._id))))})]})}),(0,i.jsxs)("div",{className:"pagination-controls",children:[(0,i.jsx)("button",{onClick:()=>j(0),disabled:!C,children:"<<"}),(0,i.jsx)("button",{onClick:()=>b(),disabled:!C,children:"<"}),(0,i.jsx)("button",{onClick:()=>w(),disabled:!S,children:">"}),(0,i.jsx)("button",{onClick:()=>j(x.length-1),disabled:!S,children:">>"}),(0,i.jsxs)("span",{children:["\xa0Page ",(0,i.jsx)("strong",{children:g+1})," "]})]})]})}},4237:(e,a,t)=>{t.d(a,{A:()=>s});t(5043);var n=t(3946),r=t(579);const s=e=>{let{customStyles:a,title:t}=e;return(0,r.jsx)(n.sK,{children:(0,r.jsx)(n.UF,{xs:12,children:(0,r.jsxs)(n.E$,{className:"mb-4",children:[(0,r.jsx)(n.V0,{children:(0,r.jsx)("strong",{children:t})}),(0,r.jsx)(n.W6,{children:a?a():null})]})})})}},8502:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var n=t(5043),r=t(2774),s=t(3946),o=t(9277),c=t(4237),l=t(6027),i=t(2145),d=(t(2342),t(64)),u=t.n(d),h=t(2558),m=t(1880),_=t(579);const x=function(e){const a=m.A.get("organizationId"),[t,d]=(0,n.useState)([]),[x,g]=(0,n.useState)(null),[p,y]=(0,n.useState)("Add Student"),[v,j]=(0,n.useState)(!1),[w,b]=(0,n.useState)(!1),[S,C]=(0,n.useState)(!1),[T,f]=(0,n.useState)([]),[z,A]=(0,n.useState)([]),P=m.A.get("adminId"),[N,I]=(0,n.useState)({name:"",mobile_number:"",email:"",roll_no:null,organization_value:null,organization_id:a,level_value:null,level_id:null,created_type:"Teacher",created_id:P});(0,n.useEffect)((()=>{k(),R()}),[]);const k=async()=>{const e=await(0,l.k6)(a);console.log(e),e.success&&d(e.data)},R=async()=>{const e=await(0,l.JQ)();console.log(e),e.success&&(e.data.map((e=>{e.label=e.name,e.value=e._id})),A(e.data))},H=[{Header:"Student Name",accessor:"name"},{Header:"Mobile Number",accessor:"mobile_number"},{Header:"Email Address",accessor:"email"},{Header:"Role Number",accessor:"roll_no"},{Header:"Level Name",accessor:"level_id.name"},{Header:"Organization Name",accessor:"organization_id.name"},{Header:"Created Type",accessor:"created_type"},{Header:"Created By",Cell:e=>{var a,t;let{row:n}=e;return(0,_.jsx)(_.Fragment,{children:"Admin"==n.original.created_type?null===(a=n.original.admin_id)||void 0===a?void 0:a.admin_name:null===(t=n.original.teacher_id)||void 0===t?void 0:t.name})}},{Header:"Actions",accessor:"_id",Cell:e=>{let{row:a}=e;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(s.Q_,{color:"info",size:"sm",style:{color:"white"},onClick:()=>(e=>{y("Update Student");const a=t.find((a=>a._id===e));g(a._id),I({name:a.name,mobile_number:a.mobile_number,email:a.email,roll_no:a.roll_no,organization_value:{value:a.organization_id._id,label:a.organization_id.name},organization_id:a.organization_id._id,level_value:{value:a.level_id._id,label:a.level_id.name},level_id:a.level_id._id,created_type:"Teacher",created_id:P})})(a.original._id),children:[(0,_.jsx)(r.uO9,{})," Edit"]})," ",(0,_.jsxs)(s.Q_,{color:"danger",size:"sm",style:{color:"white"},onClick:()=>(async e=>{if((await u().fire({title:"Are you sure?",text:"You will not be able to recover this student!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{const a=await(0,l.r$)(e);a.success&&(i.oR.success(a.message,{position:i.oR.POSITION.TOP_RIGHT,autoClose:3e3}),k())}catch(a){i.oR.error(a.message,{position:i.oR.POSITION.TOP_RIGHT,autoClose:3e3})}})(a.original._id),children:[(0,_.jsx)(r.qbC,{})," Delete"]})]})}}];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c.A,{customStyles:()=>{const t=(0,n.useRef)(),r=e=>{const{name:a,value:t,files:n}=e.target;I((e=>({...e,[a]:"file"===a?n[0]:t})))};return(0,_.jsxs)(s.qI,{ref:t,className:"row g-3 needs-validation",noValidate:!0,onSubmit:async n=>{n.preventDefault(),n.stopPropagation();const r=t.current;if(!1===r.checkValidity())return r.classList.add("was-validated"),""==N.level_id||null==N.level_id?void C(!0):""==N.organization_id||null==N.organization_id?void b(!0):void 0;let s=null;N.roll_no=parseInt(N.roll_no),e.id&&(N.organization_id=e.id),console.log(N),x?s=await(0,l.Y$)(x,N):(s=await(0,l.jw)(N),g(null)),s.success?(i.oR.success(s.message,{position:i.oR.POSITION.TOP_RIGHT,autoClose:3e3}),k(),y("Add Teacher"),I({name:"",mobile_number:"",email:"",roll_no:"",organization_value:null,organization_id:a,level_value:null,level_id:null,created_type:"Teacher",created_id:P}),r.classList.remove("was-validated")):i.oR.error(s.message,{position:i.oR.POSITION.TOP_RIGHT,autoClose:3e3})},children:[(0,_.jsxs)(s.UF,{md:4,children:[(0,_.jsx)(s.A6,{children:"Student Name"}),(0,_.jsx)(s.OG,{type:"text",placeholder:"Enter Student Name",name:"name",required:!0,value:N.name,onChange:r}),(0,_.jsx)(s.To,{invalid:!0,children:"Please enter student name"})]}),(0,_.jsxs)(s.UF,{md:4,children:[(0,_.jsx)(s.A6,{children:"Mobile Number"}),(0,_.jsx)(s.OG,{type:"number",name:"mobile_number",placeholder:"Enter Mobile Number",required:!0,value:N.mobile_number,onChange:r}),(0,_.jsx)(s.To,{invalid:!0,children:"Please enter mobile number"})]}),(0,_.jsxs)(s.UF,{md:4,children:[(0,_.jsx)(s.A6,{children:"Email"}),(0,_.jsx)(s.OG,{type:"email",name:"email",placeholder:"Enter Email Address",required:!0,value:N.email,onChange:r}),(0,_.jsx)(s.To,{invalid:!0,children:"Please enter email address"})]}),(0,_.jsxs)(s.UF,{md:4,children:[(0,_.jsx)(s.A6,{children:"Role Number"}),(0,_.jsx)(s.OG,{type:"number",name:"roll_no",placeholder:"Enter Roll Number",required:!0,value:N.roll_no,onChange:r}),(0,_.jsx)(s.To,{invalid:!0,children:"Please enter roll number"})]}),(0,_.jsxs)(s.UF,{md:4,children:[(0,_.jsx)(s.A6,{children:"Select Level"}),(0,_.jsx)(h.Ay,{name:"is_type",value:N.level_value,options:z,onChange:e=>{console.log(e),I((a=>({...a,level_value:e,level_id:e.value}))),C(!1)},placeholder:"Select Level",required:!0}),(0,_.jsxs)(s.To,{className:"text-danger",style:{fontSize:"14px"},children:[" ",S?"Please select level":""]})]}),(0,_.jsx)(s.UF,{xs:12,className:"d-flex justify-content-end",children:(0,_.jsx)(s.Q_,{color:"primary",type:"submit",children:p})})]})},title:"Student Master"}),(0,_.jsx)(o.A,{columns:H,data:t})]})}}}]);
//# sourceMappingURL=8502.b8cb83cd.chunk.js.map