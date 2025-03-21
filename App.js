import logo from './logo.svg';
import './App.css';
import Homepage from './homepage';
import FacAtten from './facultyattendance';
import FacAt from './attendanceins';
import CheckboxExample from './facultyattendance';
import FacultyRetrival from './facultyretrive';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FacAttendance from './facultyattendance';
import TodayAttendance from './TodayAttendance';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/faculty/getData" element={<FacultyRetrival/>} />
            <Route path="/home" element={<Homepage/>} />
            <Route path="/faculty/attendance" element={<FacAttendance/>} />
            <Route path="/student/attendance" element={<TodayAttendance/>} />
          </Routes>
          </BrowserRouter>
          
    </div>
  );
}

export default App;
