import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Dashboard() {
  const location = useLocation();
  const userName = location.state?.userName || 'User'; // Default to 'User' if no name is passed

  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardHeader className="text-center bg-primary text-white">
              <h3>Welcome to the Academic Credentials Management System</h3>
            </MDBCardHeader>
            <MDBCardBody>
              <h5 className="text-center">Hello, {userName}!</h5>
              <p className="text-center">Manage your academic credentials easily and efficiently.</p>

              <MDBRow className="mt-4">
                <MDBCol md="4">
                  <MDBCard className="text-center">
                    <MDBCardBody>
                      <MDBIcon fas icon="file-alt" size="3x" />
                      <h5 className="mt-3">View Records</h5>
                      <p>Check your academic records and grades.</p>
                      <MDBBtn color="primary">View</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="4">
                  <MDBCard className="text-center">
                    <MDBCardBody>
                      <MDBIcon fas icon="user-plus" size="3x" />
                      <h5 className="mt-3">Add Credentials</h5>
                      <p>Submit new academic credentials.</p>
                      <MDBBtn color="primary">Add</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="4">
                  <MDBCard className="text-center">
                    <MDBCardBody>
                      <MDBIcon fas icon="cogs" size="3x" />
                      <h5 className="mt-3">Settings</h5>
                      <p>Manage your account settings.</p>
                      <Link to="/login">
                      <MDBBtn color="primary">LOGOUT</MDBBtn></Link>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
