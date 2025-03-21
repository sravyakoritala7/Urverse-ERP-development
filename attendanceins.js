import logo from './logo.svg';
import './App.css';
import Homepage from './homepage';
import { Button, Form } from 'react-bootstrap';
import FacAtten from './facultyattendance';
import { useState } from 'react';

function FacAt(props) {
    function getabsentees(){
    }
  return (
    <div className="App">
        <div className="header">
        <img class="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAbqVCUWoLJz3MPMq9btnq8rEl_BnXu-TxQ&s"
            alt="LBRCE logo" width="160px"/>
        <div class="text-content">
            <h1 id="lbrce">LAKIREDDY BALIREDDY COLLEGE OF ENGINEERING</h1>
            <h3 id="aut">(AUTONOMOUS)</h3>
            <h5 id="acc">Accredited by NAAC & NBA (CSE, IT, ECE, EEE & ME)</h5>
            <p id="approved">Approved by AICTE Delhi, Affiliated by JNTUK , LBReddy Nagar, Mylavaram, NTR Dist
            </p>
        </div>
        </div><br/><br/>
        <div className="mb-3">
          <FacAtten label="22761A1201" value="22761A1201" />
          <FacAtten label="22761A1202" value="22761A1202"/>
          <FacAtten label="22761A1203" value="22761A1203" />
          <FacAtten label="22761A1204" value="22761A1204" />
          <FacAtten label="22761A1205" value="22761A1205" /><br/>
          <Button varient="success" onClick={getabsentees}>Submit</Button>
        </div>
    </div>
  );
}

export default FacAt;