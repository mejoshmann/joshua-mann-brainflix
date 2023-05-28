import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.scss";
import Upload from "./pages/Upload";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/videos/:id" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
