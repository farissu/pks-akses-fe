import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./page/loading";
import Home from "./page/Home";
import Second from "./page/Second"; 
import Main from "./page/Main";     
import First from "./page/First";

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
