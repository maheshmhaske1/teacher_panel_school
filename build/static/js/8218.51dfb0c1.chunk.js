"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8218],{6027:(e,a,t)=>{t.d(a,{HD:()=>b,HJ:()=>m,Ix:()=>v,JQ:()=>x,Kz:()=>_,Lx:()=>i,QQ:()=>l,VR:()=>d,X9:()=>S,Y$:()=>y,Yw:()=>u,fw:()=>j,h0:()=>D,jw:()=>w,k6:()=>g,r$:()=>p,rp:()=>C,wr:()=>h});var c=t(7154),n=t(1880);const r="https://leadplanner.lotusx.shop/api/",s=c.A.create({baseURL:r,headers:{"Content-Type":"application/json"}}),o=()=>{const e=n.A.get("accessToken");e&&(s.defaults.headers.common.Authorization="Bearer ".concat(e))};o(),s.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&(window.location.href="/admin-login"),Promise.reject(e))));const i=async e=>{try{const a=await s.post("".concat(r,"/teacher/login"),e);if(a.data.success){const e=a.data.data.token;n.A.set("accessToken",e,{secure:!0,sameSite:"strict"});const t=a.data.data.teacherData.name;n.A.set("name",t,{secure:!0,sameSite:"strict"});const c=a.data.data.teacherData._id;n.A.set("adminId",c,{secure:!0,sameSite:"strict"});const r=a.data.data.teacherData.organization_id;n.A.set("organizationId",r,{secure:!0,sameSite:"strict"}),o()}return a.data}catch(a){throw console.log("error",a),a}},l=async()=>{try{return(await s.get("".concat(r,"/organization"))).data}catch(e){throw e}},d=async e=>{try{return(await s.get("".concat(r,"/teacher/by-organization/").concat(e))).data}catch(a){throw a}},u=async e=>{try{return(await s.post("".concat(r,"/teacher"),e)).data}catch(a){throw a}},h=async e=>{try{return(await s.delete("".concat(r,"/teacher/").concat(e))).data}catch(a){throw a}},m=async(e,a)=>{try{return(await s.patch("".concat(r,"/teacher/").concat(e),a)).data}catch(t){throw t}},x=async()=>{try{return(await s.get("".concat(r,"/levels"))).data}catch(e){throw e}},g=async e=>{try{return(await s.get("".concat(r,"/student/organization/").concat(e))).data}catch(a){throw a}},w=async e=>{try{return(await s.post("".concat(r,"/student"),e)).data}catch(a){throw a}},p=async e=>{try{return(await s.delete("".concat(r,"/student/").concat(e))).data}catch(a){throw a}},y=async(e,a)=>{try{return(await s.patch("".concat(r,"/student/").concat(e),a)).data}catch(t){throw t}},_=async e=>{try{return(await s.get("".concat(r,"/exam/").concat(e))).data}catch(a){throw a}},j=async e=>{try{return(await s.get("".concat(r,"/exam/get-exam-student-by-exam-id/").concat(e))).data}catch(a){throw a}},S=async e=>{try{return(await s.delete("".concat(r,"/exam/removed-student-from-exam/").concat(e))).data}catch(a){throw a}},b=async e=>{try{return(await s.delete("".concat(r,"/exam/").concat(e))).data}catch(a){throw a}},v=async e=>{try{return(await s.get("".concat(r,"/exam/by-organization-id/").concat(e))).data}catch(a){throw a}},D=async e=>{try{return(await s.post("".concat(r,"/exam/add-exam-student"),e)).data}catch(a){throw a}},C=async e=>{try{return(await s.post("".concat(r,"/exam/organization-student-not-exit"),e)).data}catch(a){throw a}}},8218:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var c=t(5043),n=t(2774),r=t(3946),s=t(9277),o=(t(4237),t(6027)),i=(t(2145),t(2342),t(64),t(1880)),l=t(3216),d=t(579);const u=function(e){const a=i.A.get("organizationId"),[t,u]=(0,c.useState)([]),[h,m]=(0,c.useState)(null),[x,g]=(0,c.useState)("Add Examination"),[w,p]=(0,c.useState)(!1),[y,_]=(0,c.useState)(!1),[j,S]=(0,c.useState)(!1),[b,v]=(0,c.useState)([]),[D,C]=(0,c.useState)([]),[T,k]=(0,c.useState)([]),[z,A]=(0,c.useState)(!1),[H,N]=(0,c.useState)(!0),[P,f]=(0,c.useState)(!1),E=(0,l.Zp)(),I=i.A.get("adminId"),[L,B]=(0,c.useState)({exam_name:"",total_marks:"",organization_id:a,level_id:"",created_by:I,organization_value:null,organization_id:a,level_value:null,level_id:null,examDateTime:null,examEndDateTime:null,teacher_value:null,teacher_id:null,exam_duration:null,duration_value:null});(0,c.useEffect)((()=>{Q(),F(),G()}),[]);const Q=async()=>{const e=await(0,o.Ix)(a);e.success&&u(e.data),R(a),N(!1)},F=async()=>{const e=await(0,o.QQ)();console.log(e),e.success&&(e.data.map((e=>{e.label=e.name,e.value=e._id})),v(e.data))},G=async()=>{const e=await(0,o.JQ)();console.log(e),e.success&&(e.data.map((e=>{e.label=e.name,e.value=e._id})),C(e.data))},R=async e=>{const t=await(0,o.VR)(a);console.log(t),t.success&&(t.data.map((e=>{e.label=e.name,e.value=e._id})),k(t.data))},U=[{Header:"Exam Name",accessor:"exam_name"},{Header:"Level Name",accessor:"level_id.name"},{Header:"Organization Name",accessor:"organization_id.name"},{Header:"Incharge Teacher",accessor:"teacher_id.name"},{Header:"Exam Duration",accessor:"exam_duration"},{Header:"Total Marks",accessor:"total_marks"},{Header:"Exam Start Date & Time",accessor:"examDateTime",Cell:e=>{let{value:a}=e;const t=new Date(a).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),c=new Date(a).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});return"".concat(t," ").concat(c)}},{Header:"Exam End Date & Time",accessor:"examEndDateTime",Cell:e=>{let{value:a}=e;const t=new Date(a).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),c=new Date(a).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});return"".concat(t," ").concat(c)}},{Header:"Created By",accessor:"created_by.admin_name"},{Header:"Created At",accessor:"createdAt",Cell:e=>{let{value:a}=e;const t=new Date(a).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),c=new Date(a).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});return"".concat(t," ").concat(c)}},{Header:"Schedule",accessor:"is_schedule",Cell:e=>{let{value:a}=e;return(0,d.jsx)(r.Q_,{color:a?"success":"danger",size:"sm",style:{color:"white",borderRadius:"20px",minWidth:"110px"},children:a?"Schedule":"Not Schedule"})}},{Header:"Status",accessor:"",Cell:e=>{let{row:a}=e;const t=new Date(a.original.examDateTime),c=new Date(a.original.examEndDateTime),n=new Date;return n<t?"Upcoming.":n>=t&&n<=c?"Ongoing.":"Completed."}},{Header:"Actions",accessor:"_id",Cell:e=>{let{row:a}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.Q_,{color:"success",size:"sm",style:{color:"white"},onClick:()=>(async e=>{console.log(e),E("/examination-info/".concat(e))})(a.original._id),children:[(0,d.jsx)(n.Ny1,{})," View Details"]})," "]})}}];return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.A,{columns:U,data:t})})}},9277:(e,a,t)=>{t.d(a,{A:()=>d});var c=t(5043),n=t(1094),r=t(8889),s=t(8155),o=t(4196),i=t(1238),l=t(579);const d=e=>{let{columns:a,data:t,name:d}=e;const{getTableProps:u,getTableBodyProps:h,headerGroups:m,prepareRow:x,page:g,state:{pageIndex:w,pageSize:p,globalFilter:y},setGlobalFilter:_,gotoPage:j,nextPage:S,previousPage:b,canNextPage:v,canPreviousPage:D}=(0,n.useTable)({columns:a,data:t,initialState:{pageIndex:0,pageSize:10}},n.useGlobalFilter,n.useSortBy,n.usePagination);return(0,l.jsxs)("div",{className:"data-table-container",children:[(0,l.jsx)("h5",{children:d||""}),(0,l.jsxs)("div",{className:"data-table-header",children:[(0,l.jsxs)("div",{className:"search-box-container",children:[(0,l.jsx)(r.A,{type:"text",value:y||"",onChange:e=>_(e.target.value),placeholder:"Search..."}),(0,l.jsx)("span",{className:"search-icon",children:"\ud83d\udd0d"})]}),(0,l.jsx)(s.A,{onClick:()=>(()=>{const e=t.map((e=>a.reduce(((a,t)=>(a[t.Header]=e[t.accessor],a)),{}))),c=i.Wp.json_to_sheet(e),n=i.Wp.book_new();i.Wp.book_append_sheet(n,c,"Sheet 1"),i._h(n,"data.xlsx")})(),className:"download_excel",variant:"success",style:{color:"white"},children:"Download Excel"})]}),(0,l.jsx)("div",{className:"table-wrapper",children:(0,l.jsxs)(o.A,{...u(),bordered:!0,hover:!0,responsive:!0,children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Sr. No."}),m.map((e=>(0,l.jsx)(c.Fragment,{children:e.headers.map((e=>(0,l.jsxs)("th",{...e.getHeaderProps(e.getSortByToggleProps()),children:[e.render("Header"),(0,l.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]},e._id)))},e._id)))]})}),(0,l.jsx)("tbody",{...h(),children:g.map(((e,a)=>(x(e),(0,l.jsxs)("tr",{...e.getRowProps(),children:[(0,l.jsx)("td",{children:w*p+a+1}),e.cells.map((e=>(0,l.jsx)("td",{...e.getCellProps(),children:e.render("Cell")},e.column._id)))]},e._id))))})]})}),(0,l.jsxs)("div",{className:"pagination-controls",children:[(0,l.jsx)("button",{onClick:()=>j(0),disabled:!D,children:"<<"}),(0,l.jsx)("button",{onClick:()=>b(),disabled:!D,children:"<"}),(0,l.jsx)("button",{onClick:()=>S(),disabled:!v,children:">"}),(0,l.jsx)("button",{onClick:()=>j(g.length-1),disabled:!v,children:">>"}),(0,l.jsxs)("span",{children:["\xa0Page ",(0,l.jsx)("strong",{children:w+1})," "]})]})]})}},4237:(e,a,t)=>{t.d(a,{A:()=>r});t(5043);var c=t(3946),n=t(579);const r=e=>{let{customStyles:a,title:t}=e;return(0,n.jsx)(c.sK,{children:(0,n.jsx)(c.UF,{xs:12,children:(0,n.jsxs)(c.E$,{className:"mb-4",children:[(0,n.jsx)(c.V0,{children:(0,n.jsx)("strong",{children:t})}),(0,n.jsx)(c.W6,{children:a?a():null})]})})})}}}]);
//# sourceMappingURL=8218.51dfb0c1.chunk.js.map