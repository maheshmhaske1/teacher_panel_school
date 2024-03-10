"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9688],{6027:(e,t,a)=>{a.d(t,{HD:()=>f,HJ:()=>u,Ix:()=>b,JQ:()=>x,Kz:()=>y,Lx:()=>i,QQ:()=>d,VR:()=>l,X9:()=>_,Y$:()=>p,Yw:()=>h,fw:()=>v,h0:()=>C,jw:()=>j,k6:()=>g,r$:()=>w,rp:()=>A,wr:()=>m});var n=a(7154),c=a(1880);const s="https://leadplanner.lotusx.shop/api/",r=n.A.create({baseURL:s,headers:{"Content-Type":"application/json"}}),o=()=>{const e=c.A.get("accessToken");e&&(r.defaults.headers.common.Authorization="Bearer ".concat(e))};o(),r.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&(window.location.href="/admin-login"),Promise.reject(e))));const i=async e=>{try{const t=await r.post("".concat(s,"/teacher/login"),e);if(t.data.success){const e=t.data.data.token;c.A.set("accessToken",e,{secure:!0,sameSite:"strict"});const a=t.data.data.teacherData.name;c.A.set("name",a,{secure:!0,sameSite:"strict"});const n=t.data.data.teacherData._id;c.A.set("adminId",n,{secure:!0,sameSite:"strict"});const s=t.data.data.teacherData.organization_id;c.A.set("organizationId",s,{secure:!0,sameSite:"strict"}),o()}return t.data}catch(t){throw console.log("error",t),t}},d=async()=>{try{return(await r.get("".concat(s,"/organization"))).data}catch(e){throw e}},l=async e=>{try{return(await r.get("".concat(s,"/teacher/by-organization/").concat(e))).data}catch(t){throw t}},h=async e=>{try{return(await r.post("".concat(s,"/teacher"),e)).data}catch(t){throw t}},m=async e=>{try{return(await r.delete("".concat(s,"/teacher/").concat(e))).data}catch(t){throw t}},u=async(e,t)=>{try{return(await r.patch("".concat(s,"/teacher/").concat(e),t)).data}catch(a){throw a}},x=async()=>{try{return(await r.get("".concat(s,"/levels"))).data}catch(e){throw e}},g=async e=>{try{return(await r.get("".concat(s,"/student/organization/").concat(e))).data}catch(t){throw t}},j=async e=>{try{return(await r.post("".concat(s,"/student"),e)).data}catch(t){throw t}},w=async e=>{try{return(await r.delete("".concat(s,"/student/").concat(e))).data}catch(t){throw t}},p=async(e,t)=>{try{return(await r.patch("".concat(s,"/student/").concat(e),t)).data}catch(a){throw a}},y=async e=>{try{return(await r.get("".concat(s,"/exam/").concat(e))).data}catch(t){throw t}},v=async e=>{try{return(await r.get("".concat(s,"/exam/get-exam-student-by-exam-id/").concat(e))).data}catch(t){throw t}},_=async e=>{try{return(await r.delete("".concat(s,"/exam/removed-student-from-exam/").concat(e))).data}catch(t){throw t}},f=async e=>{try{return(await r.delete("".concat(s,"/exam/").concat(e))).data}catch(t){throw t}},b=async e=>{try{return(await r.get("".concat(s,"/exam/by-organization-id/").concat(e))).data}catch(t){throw t}},C=async e=>{try{return(await r.post("".concat(s,"/exam/add-exam-student"),e)).data}catch(t){throw t}},A=async e=>{try{return(await r.post("".concat(s,"/exam/organization-student-not-exit"),e)).data}catch(t){throw t}}},1506:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(5043),c=a(2774),s=a(9277),r=a(3946),o=a(3216),i=a(6145),d=a(3567),l=a(9870),h=a(9839),m=a(6130),u=a(2403),x=a(8317),g=a(9549),j=a(579);const w=e=>{var t,a,n,c,s,o,w,p;console.log("prop",e);const y=e=>{const t=new Date(e).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),a=new Date(e).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});return"".concat(t," ").concat(a)};return(0,j.jsx)(r.sK,{children:(0,j.jsxs)(r.x$,{className:"mb-4",children:[(0,j.jsx)(r.UF,{md:3,className:"mt-md-0 mt-2",children:(0,j.jsx)(r.U0,{icon:(0,j.jsx)(i.A,{icon:d.h,height:36}),value:null===(t=e.data[0])||void 0===t?void 0:t.exam_name,title:"Exam Name"})}),(0,j.jsx)(r.UF,{md:3,className:"mt-md-0 mt-2",children:(0,j.jsx)(r.U0,{icon:(0,j.jsx)(i.A,{icon:l.d,height:36}),value:null===(a=e.data[0])||void 0===a?void 0:a.organization_id.name,title:"Organization Details"})}),(0,j.jsx)(r.UF,{md:3,className:"mt-md-0 mt-2",children:(0,j.jsx)(r.U0,{icon:(0,j.jsx)(i.A,{icon:h.F,height:36}),value:null===(n=e.data[0])||void 0===n?void 0:n.level_id.name,title:"Level Details"})}),(0,j.jsx)(r.UF,{md:3,className:"mt-md-0 mt-2",children:(0,j.jsx)(r.U0,{icon:(0,j.jsx)(i.A,{icon:m.N,height:36}),value:null===(c=e.data[0])||void 0===c?void 0:c.teacher_id.name,title:"Incharge Teacher Name"})}),(0,j.jsx)(r.UF,{md:3,className:"mt-md-0 mt-2",children:(0,j.jsx)(r.U0,{icon:(0,j.jsx)(i.A,{icon:u.V,height:36}),value:y(null===(s=e.data[0])||void 0===s?void 0:s.examDateTime),title:"Start Date and Time"})}),(0,j.jsx)(r.UF,{md:3,className:"mt-md-0 mt-2",children:(0,j.jsx)(r.U0,{icon:(0,j.jsx)(i.A,{icon:u.V,height:36}),value:y(null===(o=e.data[0])||void 0===o?void 0:o.examEndDateTime),title:"Start Date and Time"})}),(0,j.jsx)(r.UF,{md:3,className:"mt-md-0 mt-2",children:(0,j.jsx)(r.U0,{icon:(0,j.jsx)(i.A,{icon:x.p,height:36}),value:null===(w=e.data[0])||void 0===w?void 0:w.exam_duration,title:"Exam Duration"})}),(0,j.jsx)(r.UF,{md:3,className:"mt-md-0 mt-2",children:(0,j.jsx)(r.U0,{icon:(0,j.jsx)(i.A,{icon:g.Q,height:36}),value:null===(p=e.data[0])||void 0===p?void 0:p.total_marks,title:"Total Marks"})})]})})};var p=a(6027),y=a(64),v=a.n(y),_=a(2145),f=(a(2342),a(825)),b=a(8155),C=a(2558),A=a(1880);const N=function(e){let{updateData:t,isExamDone:a}=e;const{id:c}=(0,o.g)(),s=A.A.get("organizationId"),[r,i]=(0,n.useState)(!1),[d,l]=(0,n.useState)([]),[h,m]=(0,n.useState)([]);(0,n.useEffect)((()=>{u()}),[]);const u=async()=>{let e={exam_id:c,org_id:s};const t=await(0,p.rp)(e);m(t.data)},x=()=>{i(!r)},g=h.map((e=>({value:e._id,label:"".concat(e.name," - ").concat(e.level_id.name)})));return(0,j.jsxs)("div",{className:"container bg-white",children:[(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-6 my-3",children:(0,j.jsx)("h3",{children:"Exam Student Information"})}),a?null:(0,j.jsxs)(j.Fragment,{children:[" ",(0,j.jsx)("div",{className:"col-6 my-3 text-end",children:(0,j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:x,children:"Add Student"})})]}),(0,j.jsx)("hr",{})]}),(0,j.jsxs)(f.A,{show:r,onHide:x,backdrop:"static",children:[(0,j.jsx)(f.A.Header,{closeButton:!0,children:(0,j.jsx)(f.A.Title,{children:"Add Student"})}),(0,j.jsx)(f.A.Body,{children:(0,j.jsx)(C.Ay,{options:g,isMulti:!0,closeMenuOnSelect:!1,onChange:e=>{l(e.map((e=>e.value)))},value:g.filter((e=>d.includes(e.value)))})}),(0,j.jsxs)(f.A.Footer,{children:[(0,j.jsx)(b.A,{variant:"primary",onClick:async e=>{try{if(e.preventDefault(),console.log("Selected students:",d),0==d.length)return void _.oR.error("Please select atleast one student",{position:_.oR.POSITION.TOP_RIGHT,autoClose:3e3});d.map((async e=>{const t={exam_id:c,student_id:e};await(0,p.h0)(t)})),_.oR.success("Student added successfully",{position:_.oR.POSITION.TOP_RIGHT,autoClose:3e3}),x(),setTimeout((()=>{t(),u()}),2e3)}catch(a){_.oR.error("Something went wrong...!",{position:_.oR.POSITION.TOP_RIGHT,autoClose:3e3})}},children:"Save"}),(0,j.jsx)(b.A,{variant:"secondary",onClick:x,children:"Cancel"})]})]})]})},S=a.p+"static/media/certificate.144804060bf47808628b.jpeg";var T=a(7762);const D=e=>{let{data:t,setIsCertificateModalOpen:a}=e;const[s,r]=(0,n.useState)(!1),o=(0,n.useRef)(null),i=(0,n.useRef)(null);(0,n.useEffect)((()=>{if(!s)return;const e=new Date(t.exam_id.examDateTime).toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}),a=i.current.getContext("2d");a.clearRect(0,0,i.current.width,i.current.height),a.drawImage(o.current,0,0,i.current.width,i.current.height),a.font="30px Arial",a.fillStyle="black",a.fillText("".concat(t.student_id.name),528,650),a.fillText("".concat(t.exam_id.level_id.name),810,800),a.fillText("".concat(t.exam_id.organization_id.address),940,910),a.fillText("".concat(e),677,910)}),[t.student_id.name,s]);return(0,j.jsx)("div",{children:(0,j.jsxs)(f.A,{show:!0,onHide:()=>a(!1),dialogClassName:"modal-125w",contentClassName:"modal-content-100w",size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,j.jsx)(f.A.Header,{closeButton:!0,children:(0,j.jsx)(f.A.Title,{children:"Certificate"})}),(0,j.jsxs)(f.A.Body,{children:[(0,j.jsx)("canvas",{ref:i,width:"100%",height:"auto",style:{width:"-webkit-fill-available"}}),(0,j.jsx)("img",{ref:o,src:S,alt:"Certificate",style:{display:"none"},onLoad:()=>{r(!0),i.current.width=o.current.naturalWidth,i.current.height=o.current.naturalHeight}})]}),(0,j.jsxs)(f.A.Footer,{children:[(0,j.jsxs)(b.A,{variant:"success",style:{color:"white"},onClick:()=>{const e=document.createElement("a");e.download="certificate_".concat(t.student_id.name,".png"),e.href=i.current.toDataURL("image/png"),e.click()},children:[(0,j.jsx)(c.WCW,{})," Download Certificate"]}),(0,j.jsxs)(b.A,{variant:"primary",onClick:()=>{const e=i.current.toDataURL("image/png"),a=new T.Ay("p","mm","a4"),n=new Image;n.src=e,n.onload=function(){const c=210/(n.width/n.height)-10;a.addImage(e,"PNG",5,5,200,c),a.autoPrint(),a.save("certificate_".concat(t.student_id.name,".pdf"))}},children:[(0,j.jsx)(c.n4o,{})," Print Certificate"]}),(0,j.jsx)(b.A,{variant:"secondary",onClick:()=>a(!1),children:"Close"})]})]})})};const k=function(){const{id:e}=(0,o.g)(),[t,a]=(0,n.useState)([]),[i,d]=(0,n.useState)(!1),[l,h]=(0,n.useState)([]),[m,u]=(0,n.useState)([]),[x,g]=(0,n.useState)({}),[y,f]=(0,n.useState)(!1);(0,n.useEffect)((()=>{C(),b()}),[]);const b=async()=>{const t=await(0,p.fw)(e);console.log(t),t.success&&a(t.data)},C=async()=>{const t=await(0,p.Kz)(e);if(t.success){h(t.data),console.log("examData",l);const e=new Date(t.data[0].examDateTime),a=new Date(t.data[0].examEndDateTime),n=new Date;n<e?d(!1):n>=e&&n<=a||d(!0)}},A=[{Header:"Student Name",accessor:"student_id.name"},{Header:"Mobile Number",accessor:"student_id.mobile_number"},{Header:"Role Number",accessor:"student_id.roll_no"},{Header:"Level Name",accessor:"exam_id.level_id.name"},{Header:"Organization Name",accessor:"exam_id.organization_id.name"},{Header:"Created Type",accessor:"student_id.created_type"},{Header:"Exam Marks",accessor:"exam_score",Cell:e=>{let{value:t}=e;return t}},{Header:"Exam Status",accessor:"is_completed",Cell:e=>{let{value:t}=e;return t?"Completed":"Not Attempted"}},{Header:"Actions",accessor:"_id",Cell:e=>{let{row:t}=e;return(0,j.jsx)(j.Fragment,{children:i?(0,j.jsx)(j.Fragment,{children:t.original.is_completed?(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(r.Q_,{color:"success",size:"sm",style:{color:"white"},onClick:()=>{return e=t.original,g(e),void f(!0);var e},children:[(0,j.jsx)(c.Ny1,{})," View Certificate"]})}):"-"}):(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(r.Q_,{color:"danger",size:"sm",style:{color:"white"},onClick:()=>(async e=>{if((await v().fire({title:"Are you sure?",text:"You will not be able to recover this student!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{const t=await(0,p.X9)(e);t.success&&(_.oR.success(t.message,{position:_.oR.POSITION.TOP_RIGHT,autoClose:3e3}),b())}catch(t){_.oR.error(t.message,{position:_.oR.POSITION.TOP_RIGHT,autoClose:3e3})}})(t.original._id),children:[(0,j.jsx)(c.qbC,{})," Delete"]})})})}}];return(0,j.jsxs)("div",{children:[i?(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"row my-3",children:(0,j.jsx)("div",{className:"col-12 text-center",children:(0,j.jsx)("h5",{className:"text-danger",children:"Examination Time End, Now You Can't Delete User And Question Info. Now You Able Download Certificate. Thank You. "})})})}):"",(0,j.jsx)(w,{data:l}),(0,j.jsx)(N,{updateData:async()=>{await b()},isExamDone:i}),(0,j.jsx)(s.A,{columns:A,data:t}),y?(0,j.jsx)(D,{data:x,setIsCertificateModalOpen:f}):""]})}},9277:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(5043),c=a(1094),s=a(8889),r=a(8155),o=a(4196),i=a(1238),d=a(579);const l=e=>{let{columns:t,data:a,name:l}=e;const{getTableProps:h,getTableBodyProps:m,headerGroups:u,prepareRow:x,page:g,state:{pageIndex:j,pageSize:w,globalFilter:p},setGlobalFilter:y,gotoPage:v,nextPage:_,previousPage:f,canNextPage:b,canPreviousPage:C}=(0,c.useTable)({columns:t,data:a,initialState:{pageIndex:0,pageSize:10}},c.useGlobalFilter,c.useSortBy,c.usePagination);return(0,d.jsxs)("div",{className:"data-table-container",children:[(0,d.jsx)("h5",{children:l||""}),(0,d.jsxs)("div",{className:"data-table-header",children:[(0,d.jsxs)("div",{className:"search-box-container",children:[(0,d.jsx)(s.A,{type:"text",value:p||"",onChange:e=>y(e.target.value),placeholder:"Search..."}),(0,d.jsx)("span",{className:"search-icon",children:"\ud83d\udd0d"})]}),(0,d.jsx)(r.A,{onClick:()=>(()=>{const e=a.map((e=>t.reduce(((t,a)=>(t[a.Header]=e[a.accessor],t)),{}))),n=i.Wp.json_to_sheet(e),c=i.Wp.book_new();i.Wp.book_append_sheet(c,n,"Sheet 1"),i._h(c,"data.xlsx")})(),className:"download_excel",variant:"success",style:{color:"white"},children:"Download Excel"})]}),(0,d.jsx)("div",{className:"table-wrapper",children:(0,d.jsxs)(o.A,{...h(),bordered:!0,hover:!0,responsive:!0,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Sr. No."}),u.map((e=>(0,d.jsx)(n.Fragment,{children:e.headers.map((e=>(0,d.jsxs)("th",{...e.getHeaderProps(e.getSortByToggleProps()),children:[e.render("Header"),(0,d.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]},e._id)))},e._id)))]})}),(0,d.jsx)("tbody",{...m(),children:g.map(((e,t)=>(x(e),(0,d.jsxs)("tr",{...e.getRowProps(),children:[(0,d.jsx)("td",{children:j*w+t+1}),e.cells.map((e=>(0,d.jsx)("td",{...e.getCellProps(),children:e.render("Cell")},e.column._id)))]},e._id))))})]})}),(0,d.jsxs)("div",{className:"pagination-controls",children:[(0,d.jsx)("button",{onClick:()=>v(0),disabled:!C,children:"<<"}),(0,d.jsx)("button",{onClick:()=>f(),disabled:!C,children:"<"}),(0,d.jsx)("button",{onClick:()=>_(),disabled:!b,children:">"}),(0,d.jsx)("button",{onClick:()=>v(g.length-1),disabled:!b,children:">>"}),(0,d.jsxs)("span",{children:["\xa0Page ",(0,d.jsx)("strong",{children:j+1})," "]})]})]})}}}]);
//# sourceMappingURL=9688.aefc9742.chunk.js.map