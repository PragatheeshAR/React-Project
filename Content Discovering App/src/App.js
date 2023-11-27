import { Route, Routes } from "react-router-dom";
import AI from "./Components/AI";
import Aditya from "./Components/Aditya";
import Anime from "./Components/Anime";
import Cinema from "./Components/Cinema";
import Covid from "./Components/Covid";
import Cricket from "./Components/Cricket";
import Economic from "./Components/Economic";
import Football from "./Components/Football";
import Front from "./Components/Front";
import Home from "./Components/Home";
import ITpark from "./Components/ITPark";
import IndoChina from "./Components/IndoChina";
import Login from "./Components/Login";
import Music from "./Components/Music";
import Pi from "./Components/Pi";
import Polls from "./Components/Polls";
import Signup from "./Components/Signup";
import Tennis from "./Components/Tennis";
function App() {
  return (
    <>
    {/* <Home/> */}
    {/* <Front/> */}
    {/* <Login/> */}
    {/* <Signup/> */}
    <Routes>
      <Route path="/" element={<Front/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<Signup/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path='/Anime' element={<Anime/>} />
      <Route path="/Music" element={<Music/>} />
      <Route path="/AI" element={<AI/>} />
      <Route path="/Aditya" element={<Aditya/>} />
      <Route path="/Cinema" element={<Cinema/>} />
      <Route path='/Covid' element={<Covid/>} />
      <Route path ='/Economic' element={<Economic/>} />
      <Route path='/ITpark' element={<ITpark/>} />
      <Route path='/Polls' element={<Polls/>} />
      <Route path ='/Pi' element={<Pi/>} />
      <Route path='/IndoChina' element={<IndoChina/>} />
      <Route path='/Cricket' element={<Cricket/>} />
      <Route path ='/Football' element={<Football/>} />
      <Route path='/Tennis' element={<Tennis/>} />
     </Routes>
    </>
  );
}

export default App;
