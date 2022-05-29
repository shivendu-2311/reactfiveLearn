import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Obama from "./components/Obama";
import Sachin from "./components/Sachin";

function App() {
  return (
    <div> 
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Home />}/>
    <Route path="/sachin" element = {<Sachin />} />
    <Route path="/obama" element = {<Obama />}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
