import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter Text to Analyze Below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
