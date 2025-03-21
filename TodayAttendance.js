import React, { useState, useEffect } from 'react';
import axios, { formToJSON } from 'axios';
import Form from 'react-bootstrap/Form';
import './TodayAttendance.css'
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import StudentHeader from './StudentHeader';
function TodayAttendance() {
  const [attendance, setAttendance] = useState([]);

  // Fetch attendance data from the backend using Axios
  function check() {
    axios.get('http://localhost:3838/attendance').then(result => {
      setAttendance((result.data));
    }).catch(err => {
      console.log(err);
    })
  }
 
  return (
    <>
    <StudentHeader/><br/><br/>
    
    <div className='drop'>
        <h3>TodayAttendance</h3>
    <div className='Card'>
            <Card border="light" style={{width:'800px'}}>
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row >
                      <Col xs='12' md='6'><Form.Label htmlFor="inputPassword5">Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                          placeholder='Name'
                        />
                      </Col>
                      <Col xs='12' md='6'><Form.Label htmlFor="inputPassword5">RollNo</Form.Label>
                        <Form.Control
                          type="text"
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                          placeholder='Roll No'
                        />
                      </Col>
                    </Row>
                  </Container><br />
                </Card.Text>
                <Button as="a" variant="outline-success" onClick={check}>Check</Button>
              </Card.Body>
            </Card>
          
        </div>
      <table>

        <thead>
          <tr>
            <th>Date</th>
            <th>DAY</th>
            <th>HOUR</th>
            <th>SUBJETC</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map(item => {
            return (
              <tr>
                <td>{item.date}</td>
                <td>{item.dayOrder}</td>
                <td>{item.hour}</td>
                <td>{item.subject}</td>
                <td>{item.status}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default TodayAttendance;