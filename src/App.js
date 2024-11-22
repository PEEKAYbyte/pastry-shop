import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products"
import SpecialCake from "./components/SpecialCake"
import FindUs from "./components/FindUs"
import ContactUs from "./components/ContactUs"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Navbar">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/special-cakes" element={<SpecialCake />}/>
          <Route path="/findus" element={<FindUs />}/>
          <Route path="/contact" element={<ContactUs />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
