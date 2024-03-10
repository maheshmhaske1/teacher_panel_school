import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Select from "react-select";
import { addStudentToExam, renderNotExitStudent, renderStudentDataByOrganization } from "src/utility/api";
import Cookies from "js-cookie";
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddStudent({ updateData, isExamDone }) {

    const { id } = useParams();
    const orgId = Cookies.get("organizationId");
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [studentsData, setStudentData] = useState([]);

    useEffect(() => {
        renderStudent()

    }, []);


    const renderStudent = async () => {
        let obj = {
            "exam_id": id,
            "org_id": orgId
        }
        const response = await renderNotExitStudent(obj);
        setStudentData(response.data);

    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleSelectChange = (selectedOptions) => {
        setSelectedStudents(selectedOptions.map(option => option.value));
    };

    const handleSubmit = async (e) => {

        try {
            e.preventDefault();
            console.log("Selected students:", selectedStudents);
            if (selectedStudents.length == 0) {
                toast.error("Please select atleast one student", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
                return;
            }
            selectedStudents.map(async (studentId) => {
                const obj = {
                    "exam_id": id,
                    "student_id": studentId
                }
                await addStudentToExam(obj)
            })

            toast.success("Student added successfully", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });


            toggleModal();
            setTimeout(() => {
                updateData();
                renderStudent();
            }, 2000);
            // await 


        } catch (err) {
            toast.error("Something went wrong...!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        }

    };

    const options = studentsData.map(student => ({
        value: student._id,
        label: `${student.name} - ${student.level_id.name}`
    }));

    return (
        <div className="container bg-white">
            <div className="row">
                <div className="col-6 my-3">
                    <h3>Exam Student Information</h3>
                </div>

                {!isExamDone ? <> <div className="col-6 my-3 text-end">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={toggleModal}
                    >
                        Add Student
                    </button>
                </div></> :null}
               
                <hr />
            </div>

            <Modal show={modalOpen} onHide={toggleModal} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Select
                        options={options}
                        isMulti
                        closeMenuOnSelect={false}
                        onChange={handleSelectChange}
                        value={options.filter(option => selectedStudents.includes(option.value))}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                    <Button variant="secondary" onClick={toggleModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default AddStudent;
