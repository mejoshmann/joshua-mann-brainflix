import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../src/App.scss";
import Upload from "./pages/Upload";
import Home from "./pages/Home";

// apiKey = {"api_key":"56fdb86b-8784-43a2-9393-b383c6e4302d"}

function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
