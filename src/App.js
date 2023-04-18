import { useState } from "react";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Answer from "./components/Answer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
    }
  }
  
  return (
    <>

      <Router>
        <div className="App">

          <Routes>
            <Route path="/answer" element={[<Navbar title="SteelEye Assignment" mode={mode} toggleMode={toggleMode} heading={""}/>, <Answer mode={mode} />]} />
            <Route path="/" element={[<Navbar title="SteelEye Assignment" mode={mode} toggleMode={toggleMode} heading={"Output for this Assignment"}/>, <div className="container">

              <List  mode={mode} />
            </div>]} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
