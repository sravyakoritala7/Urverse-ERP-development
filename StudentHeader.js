import logo from './logo.svg';
import './App.css';
import Homepage from './homepage';
import FacAtten from './facultyattendance';
import FacAt from './attendanceins';
import CheckboxExample from './facultyattendance';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function StudentHeader() {
  return (
    <div className="">
      <div className="header">
        <img class="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAbqVCUWoLJz3MPMq9btnq8rEl_BnXu-TxQ&s"
            alt="LBRCE logo" width="160px"/>
        <div class="text-content">
            <h1 id="lbrce">LAKIREDDY BALIREDDY COLLEGE OF ENGINEERING</h1>
            <h3 id="aut">(AUTONOMOUS)</h3>
            <h5 id="acc">Accredited by NAAC & NBA (CSE, IT, ECE, EEE & ME)</h5>
            <p id="approved">Approved by AICTE Delhi, Affiliated by JNTUK , LBReddy Nagar, Mylavaram, NTR Dist
            </p><br/><br/>
        </div> </div>
        <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home">LBRCE</Navbar.Brand>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><b>Home</b></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#link"><b>Today Attendance</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
        
    </div>
  );
}

export default StudentHeader;
