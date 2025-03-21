import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Stack } from 'react-bootstrap';
import './dropdown.css'
import LogoHeader from './logoheader';
import axios from 'axios';
function FacAttendance() {
  const [sem, setSem] = useState('Sem');
    const [year, setYear] = useState('Year'); 
    const [period, setPeriod] = useState('Period');
    const [sub, setSub] = useState('Subject'); 
    const [date, setDate] = useState('Date'); 

  const [selectedItems, setSelectedItems] = useState([]);

  const checkboxchange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedItems((prevSelected) => [...prevSelected, name]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((item) => item !== name)
      );
    }
  };
  const semval = (eventKey) => {
    setSem(eventKey); 
};

const yearval = (eventKey) => {
    setYear(eventKey); 
};
const periodval = (eventKey) => {
  setPeriod(eventKey); 
};
const subjectval = (eventKey) => {
  setSub(eventKey); 
};
function dateval(event){
  setDate(event.target.value)
}
function enterdata(){
  axios.post("http://localhost:3001/faculty/attendance",{
    sem:sem,
    year:year,
    period:period,
    subject:sub,
    date:date,
    absentees:selectedItems
  }).then(result=>{
    console.log(result.data)
  }).catch(err=>{
    console.log(err)
  })
}

  return (
    <div>
      <LogoHeader /><br /><br />
      <div className='Drop'>
        <div className=''>

          <Card  border="light" style={{ width: '1500px', height: '200px' }}>
            <Card.Body>
              <Card.Text>
                <Row md="10">
                  <Col><b>Select Semester:</b></Col>
                  <Col>
                    <DropdownButton id="sem" title={sem} onSelect={semval}>
                      <Dropdown.Item eventKey="1">1</Dropdown.Item>
                      <Dropdown.Item eventKey="2">2</Dropdown.Item>
                      <Dropdown.Item eventKey="3">3</Dropdown.Item>
                      <Dropdown.Item eventKey="4">4</Dropdown.Item>
                      <Dropdown.Item eventKey="5">5</Dropdown.Item>
                      <Dropdown.Item eventKey="6">6</Dropdown.Item>
                      <Dropdown.Item eventKey="7">7</Dropdown.Item>
                      <Dropdown.Item eventKey="8">8</Dropdown.Item>
                    </DropdownButton>
                  </Col>&nbsp;&nbsp;&nbsp;
                  <Col><b>Year:</b></Col>
                  <Col>
                    <DropdownButton id="year" title={year} onSelect={yearval}>{year}
                      <Dropdown.Item eventKey="1">1</Dropdown.Item>
                      <Dropdown.Item eventKey="2">2</Dropdown.Item>
                      <Dropdown.Item eventKey="3">3</Dropdown.Item>
                      <Dropdown.Item eventKey="4">4</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col><b>Period:</b></Col>
                  <Col>
                    <DropdownButton id="year" title={period} onSelect={periodval}>{year}
                      <Dropdown.Item eventKey="1">1</Dropdown.Item>
                      <Dropdown.Item eventKey="2">2</Dropdown.Item>
                      <Dropdown.Item eventKey="3">3</Dropdown.Item>
                      <Dropdown.Item eventKey="4">4</Dropdown.Item>
                      <Dropdown.Item eventKey="5">5</Dropdown.Item>
                      <Dropdown.Item eventKey="6">6</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col><b>Subjects:</b></Col>
                  <Col>
                    <DropdownButton id="subjects" title={sub} onSelect={subjectval}>{year}
                      <Dropdown.Item eventKey="20CS11">20CS11</Dropdown.Item>
                      <Dropdown.Item eventKey="20IT09">20IT09</Dropdown.Item>
                      <Dropdown.Item eventKey="20CS54">20CS54</Dropdown.Item>
                      <Dropdown.Item eventKey="20IT51">20IT51</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col><b>Date:</b></Col>
                  <Col><input type="text" placeholder="YYYY-MM-DD" onChange={dateval}/></Col>
                </Row>
                <br />
              </Card.Text>
              
            </Card.Body>
          </Card>

        </div>
      </div>
      <Stack gap={3}>
  <div className="p-2 custom-checkbox check-border">
    <input
      type="checkbox"
      id="student1"
      name="22761A1201"
      onChange={checkboxchange}
    />
    <label htmlFor="student1">22761A1201</label>
  </div>
  <div className="p-2 custom-checkbox check-border">
    <input
      type="checkbox"
      id="student2"
      name="22761A1202"
      onChange={checkboxchange}
    />
    <label htmlFor="student2">22761A1202</label>
  </div>
  <div className="p-2 custom-checkbox check-border">
    <input
      type="checkbox"
      id="student3"
      name="22761A1203"
      onChange={checkboxchange}
    />
    <label htmlFor="student3">22761A1203</label>
  </div>
  <div className="p-2 custom-checkbox check-border">
    <input
      type="checkbox"
      id="student4"
      name="22761A1204"
      onChange={checkboxchange}
    />
    <label htmlFor="student4">22761A1204</label>
  </div>
  <div className="p-2 custom-checkbox check-border">
    <input
      type="checkbox"
      id="student5"
      name="22761A1205"
      onChange={checkboxchange}
    />
    <label htmlFor="student5">22761A1205</label>
  </div>
</Stack>
<br/><br/><br/>

      {/* Display selected items in the console */}
      <Button variant="primary" onClick={enterdata}>Submit</Button>
    </div>
  );
}

export default FacAttendance;

