import React, { useState } from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { Link } from "react-router-dom";

const AcademicForm = () => {
  const [formData, setFormData] = useState({
    srn: "",
    prn: "",
    hallTicketNo: "",
    cgpa: "",
    sgpa: "",
    studentName: "",
    collegeName: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Store data in MongoDB
      const response = await axios.post(
        "http://localhost:5000/api/store-academic-credentials",
        formData
      );
      if (response.data.success) {
        setMessage("Credentials stored in MongoDB successfully");
      } else {
        setMessage("Error storing credentials in MongoDB");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error storing credentials");
    }
  };

  return (
    <MDBContainer className="mt-5">
      <h2>Academic Credentials Form</h2>
      <form onSubmit={handleSubmit}>
        <MDBInput
          label="SRN No"
          name="srn"
          value={formData.srn}
          onChange={handleChange}
          required
          className="mb-4"
        />
        <MDBInput
          label="PRN No"
          name="prn"
          value={formData.prn}
          onChange={handleChange}
          required
          className="mb-4"
        />
        <MDBInput
          label="Hall Ticket No"
          name="hallTicketNo"
          value={formData.hallTicketNo}
          onChange={handleChange}
          required
          className="mb-4"
        />
        <MDBInput
          label="CGPA"
          name="cgpa"
          value={formData.cgpa}
          onChange={handleChange}
          required
          className="mb-4"
        />
        <MDBInput
          label="SGPA"
          name="sgpa"
          value={formData.sgpa}
          onChange={handleChange}
          required
          className="mb-4"
        />
        <MDBInput
          label="Student Name"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
          className="mb-4"
        />
        <MDBInput
          label="College Name"
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
          required
          className="mb-4"
        />
        <MDBBtn type="submit" className="mb-4" block>
          SUBMIT
        </MDBBtn>
        <Link to="/show-credentials">
          <MDBBtn type="button" className="mb-4" block>
            VIEW
          </MDBBtn>
        </Link>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </MDBContainer>
  );
};

export default AcademicForm;
