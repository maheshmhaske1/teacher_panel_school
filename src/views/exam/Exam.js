import React, { useState, useEffect, useRef } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import {
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormFeedback,
    CFormLabel,
    CFormSelect,
} from "@coreui/react";
import DataTable from "../ownComponent/DataTable";
import FormsCustom from "../ownComponent/FormsCustom";
import {
    renderOrganizationData,
    renderTeacherData,
    addExam,
    editExam,
    deleteExamData,
    renderExamData,
    renderLevelData,
    renderTeacherByOrganization,
    renderExamDataByOrganization
} from "src/utility/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import Select from "react-select";
import Cookies from 'js-cookie'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom'

function Exam(props) {

    const orgId = Cookies.get("organizationId");

    // all useState
    const [data, setData] = useState([]);
    const [editId, setEditId] = useState(null);
    const [btnText, setBtnText] = useState("Add Examination");
    const [isTypeSelected, setIsTypeSelected] = useState(false);
    const [isTypeSelectedOrganization, setIsTypeSelectedOrganization] = useState(false);
    const [isTypeSelectedLevel, setIsTypeSelectedLevel] = useState(false);
    const [organization_option, setOrganizationOption] = useState([]);
    const [level_option, setLevelOption] = useState([]);
    const [teacher_option, setTeacherOption] = useState([]);
    const [isTypeSelectedTeacher, setIsTypeSelectedTeacher] = useState(false);
    const [isTeacherDisabled, setIsTeacherDisabled] = useState(true);
    const [isOrgDisabled, setIsOrgDisabled] = useState(false);



    const navigate = useNavigate()
    const created_by = Cookies.get('adminId')

    const [formData, setFormData] = useState({
        exam_name: "",
        total_marks: "",
        organization_id: orgId,
        level_id: "",
        created_by: created_by,
        organization_value: null,
        organization_id: orgId,
        level_value: null,
        level_id: null,
        examDateTime: null,
        examEndDateTime: null,
        teacher_value: null,
        teacher_id: null,
        exam_duration: null,
        duration_value: null

    });

    useEffect(() => {
        renderData();
        renderOrganization();
        renderLevel();
    }, []);




    // render data
    const renderData = async () => {

        const response = await renderExamDataByOrganization(orgId);
        if (response.success) {
            setData(response.data);
        }

        renderTeacherData(orgId)
        setIsTeacherDisabled(false)

    };

    // render organization
    const renderOrganization = async () => {
        const response = await renderOrganizationData();
        console.log(response);
        if (response.success) {
            response.data.map((org) => {
                org.label = org.name;
                org.value = org._id;
            });
            setOrganizationOption(response.data);
        }
    };

    // render level
    const renderLevel = async () => {

        const response = await renderLevelData();
        console.log(response);
        if (response.success) {
            response.data.map((org) => {
                org.label = org.name;
                org.value = org._id;
            });
            setLevelOption(response.data);
        }
    };
    const renderTeacherData = async (id) => {
        const response = await renderTeacherByOrganization(orgId);
        console.log(response);
        if (response.success) {
            response.data.map((org) => {
                org.label = org.name;
                org.value = org._id;
            });
            setTeacherOption(response.data);
        }
    }

    //edit Student
    const handleEdit = (id) => {
        setBtnText("Update Examination");
        const studentToUpdate = data.find((org) => org._id === id);
        console.log(studentToUpdate);

        // Extract date and time from examDateTime 
        const examDateTime = new Date(studentToUpdate.examDateTime);
        const examEndDateTime = new Date(studentToUpdate.examEndDateTime);


        setEditId(studentToUpdate._id);
        setIsTeacherDisabled(false);
        setIsOrgDisabled(true);
        setFormData({
            exam_name: studentToUpdate.exam_name,
            total_marks: studentToUpdate.total_marks,
            organization_value: {
                value: studentToUpdate.organization_id._id,
                label: studentToUpdate.organization_id.name,
            },
            organization_id: studentToUpdate.organization_id._id,
            level_value: {
                value: studentToUpdate.level_id._id,
                label: studentToUpdate.level_id.name,
            },
            level_id: studentToUpdate.level_id._id,
            duration_value: {
                value: studentToUpdate.exam_duration,
                label: studentToUpdate.exam_duration,
            },
            exam_duration: studentToUpdate.exam_duration,

            teacher_value: {
                value: studentToUpdate.teacher_id._id,
                label: studentToUpdate.teacher_id.name,
            },
            teacher_id: studentToUpdate.teacher_id._id,
            examDateTime: examDateTime,
            examEndDateTime: examEndDateTime
        });
    };


    // Delete Exam
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
                const response = await deleteExamData(id);
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

    // handleExamView
    const handleExamView = async (id) => {
        console.log(id)
        navigate(`/examination-info/${id}`);
    }

    const columns = [
        { Header: "Exam Name", accessor: "exam_name" },
        { Header: "Level Name", accessor: "level_id.name" },
        { Header: "Organization Name", accessor: "organization_id.name" },
        { Header: "Incharge Teacher", accessor: "teacher_id.name" },
        { Header: "Exam Duration", accessor: "exam_duration" },
        { Header: "Total Marks", accessor: "total_marks" },
        {
            Header: "Exam Start Date & Time",
            accessor: "examDateTime",
            Cell: ({ value }) => {
                // Format the date
                const formattedDate = new Date(value).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                });

                // Format the time
                const formattedTime = new Date(value).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                });

                return `${formattedDate} ${formattedTime}`;
            },
        },
        {
            Header: "Exam End Date & Time",
            accessor: "examEndDateTime",
            Cell: ({ value }) => {
                // Format the date
                const formattedDate = new Date(value).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                });

                // Format the time
                const formattedTime = new Date(value).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                });

                return `${formattedDate} ${formattedTime}`;
            },
        },
        { Header: "Created By", accessor: "created_by.admin_name" },
        {
            Header: "Created At",
            accessor: "createdAt",
            Cell: ({ value }) => {
                // Format the date
                const formattedDate = new Date(value).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                });

                // Format the time
                const formattedTime = new Date(value).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                });

                return `${formattedDate} ${formattedTime}`;
            },
        },
        {
            Header: "Schedule",
            accessor: "is_schedule",
            Cell: ({ value }) => (
                <CButton
                    color={value ? "success" : "danger"}
                    size="sm"
                    style={{ color: "white", borderRadius: "20px", minWidth: "110px" }} // Set a fixed width
                >
                    {value ? "Schedule" : "Not Schedule"}
                </CButton>
            ),
        },
        {
            Header: "Status",
            accessor: "",
            Cell: ({ row }) => {
                // const endDate = new Date(row.original.examEndDateTime);
                // const currentDate = new Date();

                // if (endDate > currentDate) {
                //     return "Upcoming";
                // } else if (endDate.getDate() === currentDate.getDate()) {
                //     setIsExamDone(true);
                //     return "Ongoing";
                // } else {
                //     setIsExamDone(true);
                //     return "Completed";
                // }



                const startDate = new Date(row.original.examDateTime);
                const endDate = new Date(row.original.examEndDateTime);
                const currentDate = new Date();

                if (currentDate < startDate) {
                    return "Upcoming.";
                } else if (currentDate >= startDate && currentDate <= endDate) {
                    // setIsExamDone(true);
                    return "Ongoing.";
                } else {
                    // setIsExamDone(true);
                    return "Completed.";
                }
            },
        },

        {
            Header: "Actions",
            accessor: "_id", // Assuming you have an 'id' property in your teacher data
            Cell: ({ row }) =>
            // (
           
            {
              
                return (
                    <>
                        <CButton
                            color="success"
                            size="sm"
                            style={{ color: "white" }}
                            onClick={() => handleExamView(row.original._id)}
                        >
                            <FaEye /> View Details
                        </CButton>{" "}
                    </>
                );
            }
        },
    ];

 
    return (
        <>
            {/* <FormsCustom customStyles={CustomStyles} title="Examination Master" /> */}
            <DataTable columns={columns} data={data} />
        </>
    );
}

export default Exam;

Exam.propTypes = {
    row: PropTypes.shape({
        original: PropTypes.shape({
            _id: PropTypes.number.isRequired,
        }),
    }),
};
