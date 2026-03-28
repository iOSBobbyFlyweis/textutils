import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About2 from "./Components/About2";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const changeMode = () => {
    setMode(mode === 'light' ? 'dark': 'light')
    
    if (mode === 'light')
      document.body.style.backgroundColor = '#042743'; 
    else
      document.body.style.backgroundColor = 'white'; 
  };

  return (
    <>
     <Router>
      <Navbar title="TextUtils" aboutText = "About" changeModeFunction = {changeMode} mode={mode}/>
        <Routes>
          <Route path="/about" element={<About2 />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}



export default App;


