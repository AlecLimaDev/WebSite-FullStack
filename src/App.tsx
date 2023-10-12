import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home.module";
import Login from "./screens/Login/Login.module";
import SignUp from "./screens/SignUp/SignUp.module";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
