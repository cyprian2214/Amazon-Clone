import "./App.css";
import Footer from "./Compoenents/Footer";
import Header from "./Compoenents/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Context from "./ContextApi/Context";
import Login from "./Compoenents/Login";
import "./slick-fix.css";


function App() {
  return (
    <>
    <Context>
      <Header />
        <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
      <Footer />
      </Context>
    </>
  );
}

export default App;