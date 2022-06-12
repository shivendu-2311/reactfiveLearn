import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddParams from "./components/AddParams";
import Carousel from "./components/Carousel";
import ContextParent from "./components/ContextParent";
import Donald from "./components/Donald";
import Form from "./components/Form";
import Home from "./components/Home";
import NoteTaking from "./components/NoteTaking";
import Obama from "./components/Obama";
import Sachin from "./components/Sachin";
import UseEffectOne from "./components/UseEffectOne";
import UseEffectThree from "./components/UseEffectThree";
import UseEffectTwo from "./components/UseEffectTwo";
import UserParams from "./components/UserParams";
import { configureStore } from "./components/AppState";
import { Provider } from "react-redux";
import Hotels from "./components/Hotel";
import ReduxExample from "./components/ReduxExample";
export default function App() {
  return (
    <Provider store={configureStore()}>
    <BrowserRouter>
      <Routes>
        {/* routing */}
        <Route path="/" element={<Home />} />
        <Route path="/sachin" element={<Sachin />} />
        <Route path="/donald" element={<Donald />} />
        <Route path="/user/:userId" element={<UserParams />} />
        <Route path="/obama" element={<Obama />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/:x/:operator/:y" element={<AddParams />} />
        <Route path="/:x///:y" element={<AddParams />} />

        {/*Props abnd state concept */}
        <Route path="/form" element={<Form />} />
        <Route path="/notetaking" element={<NoteTaking />} />
        {/* carousel*/}
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/useeffectone" element={<UseEffectOne />} />
        <Route path="/useeffecttwo" element={<UseEffectTwo />} />
        <Route path="/useeffectthree" element={<UseEffectThree />} />

        {/* Context 0*/}
        <Route path="/contextparent" element={<ContextParent />} />

         { /* reducer saves no of api call made to backend it saves data in front end after 1st api call and then it is present for
         sometime in frontend*/} 
        <Route path="/reducerexample" element={<ReduxExample />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
