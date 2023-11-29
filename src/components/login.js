import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";
import '../csses/login.css'
import backgroundImage from '../plus.png';
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Form } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Login() {

  const navigate = useNavigate();
  const [password, setPassword] = useState("")
  let isExist = true;

  const login = async () => {
    try {
      let student = await axios.get(`https://weak-plum-ostrich-wear.cyclic.app/student/${password}`)
      const name = student.data.name
      const id = student.data.studentId
      if (name)
        navigate("/main", { state: { name, id } });
      else {
        alert("הסיסמא שהקשת אינה נמצאת במערכת. הקישי סיסמא שונה.")

      }
    }
    catch (err) {
      alert("הסיסמא שהקשת אינה נמצאת במערכת. הקישי סיסמא שונה.")
    }
  }
  // const rocketId = password;

  return (
    <>
      <div className="field col-12 md:col-4" id="divLogin">
        <div id="form">
          <label>לכניסה הקישי קוד אישי</label><br />
          {/* אם יהיה זמן לעשות שעובר דף בלחיצה על אנטר */}
          <InputText type="password" id="password" onChange={(e) => setPassword(e.target.value)} /><br />
          {/* <Password  id="password" toggleMask onChange={(e)=>setPassword(e.target.value)}/><br/> */}
          <Button label="הכנסי" className="p-button-raised p-button-secondary" onClick={() => login()} /><br />
          {/* <Link to={`/fillout/${rocketId}`}>Go to FILLOUT Form</Link> */}
        </div>
      </div>
    </>
  );
}
//

// const Login = () => {
//   const rocketId = 'YOUR_ROCKET_ID'; // Replace with the actual rocket ID

//   return (
//     <Link to={`/fillout/${rocketId}`}>Go to FILLOUT Form</Link>
//   );
// };