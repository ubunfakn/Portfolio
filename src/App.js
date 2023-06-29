import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigationbar from "./Component/Navigationbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
