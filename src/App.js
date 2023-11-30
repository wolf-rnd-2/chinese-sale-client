import Router from "./components/router";
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import '../src/plus.png'


function App() {
  const navigate = useNavigate();
  const login = () => {
    navigate('/')
  }

  return (
    <>
      <Button label="כניסה חדשה למערכת" className="p-button-raised p-button-secondary login-btn" onClick={() => login()} /><br />
      <Router></Router>
    </>
  );
}

export default App;
