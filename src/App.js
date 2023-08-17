import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Slider from "./components/Slider";

function App() {
  // const logo = all["Ak-ZeRo.png"];
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Products />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
