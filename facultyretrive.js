import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import LogoHeader from './logoheader';
import './dropdown.css';
import { useState } from 'react';
import axios from 'axios';
import './facretrieve.css'

function FacultyRetrival() {
    const [sem, setSem] = useState('Sem');
    const [year, setYear] = useState('Year'); 
    const [data, setData] = useState(null);
    const handleSemChange = (eventKey) => {
        setSem(eventKey); 
    };

    const handleYearChange = (eventKey) => {
        setYear(eventKey); 
    };
    function checkdet() {
        axios.post("http://localhost:3001/faculty/getData",
        {
            sem:sem,
            year:year
        }).then(result=>{
            setData(result.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    function adddata(){
        
    }

    return (
        <>
            <LogoHeader /><br/><br/>
            <div className='Drop'>
                <div className=''>
                    <Card  border="light" style={{width:'800px'}} >
                        <Card.Body>
                            <Card.Text>
                                <Row >
                                    <Col><b>Select Semester:</b></Col>
                                    <Col>
                                        <DropdownButton id="sem" title={sem} onSelect={handleSemChange}>
                                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">3</Dropdown.Item>
                                            <Dropdown.Item eventKey="4">4</Dropdown.Item>
                                            <Dropdown.Item eventKey="5">5</Dropdown.Item>
                                            <Dropdown.Item eventKey="6">6</Dropdown.Item>
                                            <Dropdown.Item eventKey="7">7</Dropdown.Item>
                                            <Dropdown.Item eventKey="8">8</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Col></Col>
                                    <Col><b>Select Year of study:</b></Col>
                                    <Col>
                                        <DropdownButton id="year" title={year} onSelect={handleYearChange}>{year}
                                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">3</Dropdown.Item>
                                            <Dropdown.Item eventKey="4">4</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                </Row>
                                <br /><br/>
                            </Card.Text>
                            <Button variant="primary" onClick={checkdet}>Submit</Button>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
            <br/><br/>
            {data && (
                    <table>
                        <tr>
                            <th>Sem</th>
                            <th>Year</th>
                            <th>Student Rollno</th>
                            <th>Student Name</th>
                        </tr>
                        {data.map(item => (
                            item.students.map(student => (
                                <tr>
                                    <td>{item.sem}</td>
                                    <td>{item.year}</td>
                                    <td>{student.studentid}</td>
                                    <td>{student.studentname}</td>
                                </tr>
                            ))
                        ))}
                    </table>
                )}
                
        </>
    );
}

export default FacultyRetrival;