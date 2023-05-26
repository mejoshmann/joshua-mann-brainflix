import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../src/App.scss";
import Upload from "./pages/Upload";
import Home from "./pages/Home";


function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/videos:.id" element={<Navigate to="/" />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
