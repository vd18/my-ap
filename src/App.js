
import './App.css';
import Navbar from './comonent/Navbar';
import Textbox from './comonent/Textbox';
import Alert from './comonent/Alert';
// import About from './About';
import React,  {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App(props) {

  const [mode, setmode] = useState('light')

  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
  })
  setTimeout(() => {
    showAlert(null)
  }, 7000);



  }
  


  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode enable', 'success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enable', 'success')
    }
  }

  return (
  <>
  {/* <Router> */}
  <Navbar title = 'vd' mode={mode} toggleMode={toggleMode}  about = 'about vd'/>
  <Alert alert={alert} />
  <div className='container'>

    {/* <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element = {} />
          
          </Routes>
       */}
        {/* <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} /> */}
 <Textbox showAlert={showAlert} title = 'Enter text to analyze' mode={mode}/>
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;
