
import './App.css';
import Navbar from './Components/Navbar';
import Form1 from './Components/Form1';
import React, { useState } from 'react';
import Alerts from './Components/Alerts';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

// import About from './Components/About';



function App() {
  const [mode, setMode] = useState('Light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode= ()=>{
    if(mode ==='Light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('Light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
   <Navbar title="Textutills1" mode={mode} toggleMode={toggleMode}/>
   {/* <Navbar/> */}
   <Alerts alert={alert}/>

   <div className="container my-3">
   {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Form1 heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
          </Routes>
          
        </Router> */}
        <Form1 heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
        </div>
    </>

  );
}

export default App;
