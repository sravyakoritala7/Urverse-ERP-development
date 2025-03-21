import logo from './logo.svg';
import './App.css';
import './home.css'
import { Button } from 'react-bootstrap';
function Homepage() {
  return (
    <body>
    <div>
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
    <div class="login-types">
        <div class="login-div-types">
            <img src="https://png.pngtree.com/png-vector/20191119/ourmid/pngtree-teacher-vector-illustration-with-black-and-white-design-teacher-icon-png-image_1996068.jpg" style={{marginRight: 30 }} alt="" width="100px"/>
            <div>
                <h3 id="stulog">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student Login</h3><br/>
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <Button type="submit" align="center"
                    class="login-button" variant="outline-danger" >Login</Button>
            </div>
        </div>
        <br/><br/><br/>
        <div class="login-div-types">
            <img src="https://png.pngtree.com/png-vector/20191119/ourmid/pngtree-teacher-vector-illustration-with-black-and-white-design-teacher-icon-png-image_1996068.jpg"
                id="img" alt="" width="100px" height="125px"/>
            <div>
                <h3 id="stulog">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faculty Login</h3><br/>
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<Button type="submit" align="center"
                    class="login-button" variant="outline-danger" >Login</Button>
            </div>
        </div>
    </div>

    </div>
    </body>
  )
}

export default Homepage;
