import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/loading";
import Home from "./components/Home";
import Second from "./components/Second"; 
import Main from "./components/Main";     
import First from "./components/First";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/First" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
