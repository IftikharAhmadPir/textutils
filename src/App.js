import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);  

  const showAlert=(message,type)=>
  {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Home (Dark)';
      // setInterval(() => {
      //   document.title = 'You have a new Message';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Check Message';
      // }, 1500);
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Home (Light)';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter Text to Analyze Below" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
