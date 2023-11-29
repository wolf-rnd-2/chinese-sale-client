// import logo from "./logo.svg";
import { Navigate } from "react-router";
import "./App.css";
// import Login from "./login";
// import backgroundImage from "./plus.png";
// import Point from "./point";
import Form from "./components/form";
import Login from "./components/login";
import Router from "./components/router";
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const login = () => {
    navigate('/')
  }

  return (
    <>
      <Button label="כניסה חדשה למערכת" className="p-button-raised p-button-secondary" onClick={() => login()} /><br />
      <Router></Router>
    </>
  );
}

export default App;
