import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
