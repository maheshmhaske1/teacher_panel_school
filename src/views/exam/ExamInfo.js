import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import DataTable from '../ownComponent/DataTable';
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
} from "@coreui/react";
import { useParams } from 'react-router-dom';
import ExamWidget from './ExamWidget';
import { removedStudentExamData, renderExamDataById, renderExamQuestionData, renderStudentExamData } from 'src/utility/api';
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddStudent from './AddStudent';
import CertificateGenerator from './CertificateGenerator';


function ExamInfo() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isExamDone, setIsExamDone] = useState(false);
  const [examData, setExamData] = useState([]);
  const [examQuestionData, setQuestionExamData] = useState([]);
  const [examDataForPrint, setExamDataForPrint] = useState({});
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false)
  // const [isExamDone, setIsExamDone] = useState(false);


  useEffect(() => {
    renderExamData()
    renderData();
    // renderQuestionData()

  }, []);

  // render data
  const renderData = async () => {
    const response = await renderStudentExamData(id);
    console.log(response);
    if (response.success) {
      setData(response.data);
    }

  };

  const updateData = async () => {
    await renderData();
  };

  //renderExamData
  const renderExamData = async () => {
    const response = await renderExamDataById(id);
    if (response.success) {
      setExamData(response.data);
      console.log("examData", examData)
      //check done or not
      const startDate = new Date(response.data[0].examDateTime);
      const endDate = new Date(response.data[0].examEndDateTime);
      const currentDate = new Date();

      if (currentDate < startDate) {
        setIsExamDone(false);
      } else if (currentDate >= startDate && currentDate <= endDate) {
        // setIsExamDone(true);

      } else {
        setIsExamDone(true);
      }

    }



  };

  //renderQuestionData
  // const renderQuestionData = async () => {
  //   const response = await renderExamQuestionData(id); (id);
  //   if (response.success) {
  //     setQuestionExamData(response.data);
  //     console.log("setQuestionExamData", examData)
  //   }

  // };

  // Delete Student From Exam
  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this student!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const response = await removedStudentExamData(id);
        if (response.success) {
          toast.success(response.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          renderData();
        }
      } catch (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    }
  };

  //downloadCertificate
  const downloadCertificate = (rowData) => {

    setExamDataForPrint(rowData)
    setIsCertificateModalOpen(true)
  }

  const columns = [
    { Header: "Student Name", accessor: "student_id.name" },
    { Header: "Mobile Number", accessor: "student_id.mobile_number" },
    { Header: "Role Number", accessor: "student_id.roll_no" },
    { Header: "Level Name", accessor: "exam_id.level_id.name" },
    { Header: "Organization Name", accessor: "exam_id.organization_id.name" },
    { Header: "Created Type", accessor: "student_id.created_type" },
    { Header: "Exam Marks", accessor: "exam_score", Cell: ({ value }) => (value) },
    { Header: "Exam Status", accessor: "is_completed", Cell: ({ value }) => (value ? "Completed" : "Not Attempted") },

    {
      Header: "Actions",
      accessor: "_id", // Assuming you have an 'id' property in your teacher data
      Cell: ({ row }) => (
        <>


          {!isExamDone ? <>
            <CButton
              color="danger"
              size="sm"
              style={{ color: "white" }}
              onClick={() => handleDelete(row.original._id)}
            >
              <FaTrash /> Delete
            </CButton>
          </> : <>

            {row.original.is_completed ? <>
              <CButton
                color="success"
                size="sm"
                style={{ color: "white" }}
                onClick={() => downloadCertificate(row.original)}
              >
                <FaEye></FaEye> View Certificate
              </CButton>
              {/* <CButton
                color="primary"
                size="sm"
                style={{ color: "white", margin: "0 10px" }}
                onClick={() => viewAnswerPaper(row.original._id)}
              >
                <FaEye /> View Answer Paper
              </CButton> */}
            </>
              : "-"}

          </>}
        </>
      ),
    },
  ];

  const columnsQuestion = [
    { Header: "Exam Name", accessor: "exam_id.exam_name" },
    { Header: "Question Name", accessor: "question_id.question" },
    { Header: "Question Type", accessor: "question_id.is_type" },
  ];




  return (
    <div>
      {
        isExamDone ? <>
          <div className='row my-3'>
            <div className='col-12 text-center'>
              <h5 className='text-danger'>Examination Time End, Now You Can't Delete User And Question Info.
                Now You Able Download Certificate. Thank You. </h5>
            </div>
          </div>
        </> : ""
      }
      <ExamWidget data={examData}></ExamWidget>
      <AddStudent updateData={updateData} isExamDone={isExamDone} ></AddStudent>
      <DataTable columns={columns} data={data} />
      {isCertificateModalOpen ? <CertificateGenerator data={examDataForPrint} setIsCertificateModalOpen={setIsCertificateModalOpen} /> : ''}
    </div>
  );
}

export default ExamInfo;

