import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddParams from "./components/AddParams";
import Donald from "./components/Donald";
import Home from "./components/Home";
import Obama from "./components/Obama";
import Sachin from "./components/Sachin";
import UserParams from "./components/UserParams";

function App() {
  return (
    <div> 
  <BrowserRouter>
  <Routes>
    {/* routing */}
    <Route path="/" element = {<Home />}/>
    <Route path="/sachin" element = {<Sachin />} />
    <Route path="/donald" element = {<Donald />}/>
    <Route path="/user/:userId" element={<UserParams />}/>
    <Route path="/obama" element = {<Obama />}/>
    <Route path="*" element={<Navigate to = "/" />} />
    <Route path="/:x/:operator/:y" element={<AddParams/>}/>
    <Route path ="/:x///:y" element={<AddParams/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
