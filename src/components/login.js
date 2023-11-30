import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";
import '../csses/login.css'
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Login() {

  const navigate = useNavigate();
  const [password, setPassword] = useState("")
  const [isErr, setisErr] = useState(false)
   const [isWorngPass, setisWorngPass] = useState(false)

  const login = async () => {
    try {
      let student = await axios.get(`https://weak-plum-ostrich-wear.cyclic.app/student/${password}`)
      const name = student.data.name
      const id = student.data.studentId
      console.log("data: ",student.data)
      if (name)
        navigate("/main", { state: { name, id } });
      else {
        setisWorngPass(true)

      }
    }
    catch (err) {
    setisErr(true)
    console.log("catch err: ",err)
    }
  }

  return (
    <>
      <div className="field col-12 md:col-4" id="divLogin">
        <div id="form">

          <label>לכניסה הזיני קוד אישי</label><br />
          {/* אם יהיה זמן לעשות שעובר דף בלחיצה על אנטר */}
          <InputText type="password" id="password" onChange={(e) => setPassword(e.target.value)} /><br />
          {isWorngPass&&<p >הסיסמא שהזנת אינה מופיעה במערכת. אנא הזיני שנית.</p>}
          {isErr&&<p style={{fontSize:"2em"}}>מצטערים, ישנה תקלה במערכת.</p>}

          <Button label="הכנסי" className="p-button-raised p-button-secondary" onClick={() => login()} /><br />
        </div>
      </div>
    </>
  );
}

