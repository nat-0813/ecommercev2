import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/navbar";
// import { Shop } from "./pages/shop/shop";
// import { Cart } from "./pages/cart/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>
          <Route path="/" />
          <Route path="/shop" />
          <Route path="/contact" />
          <Route path="/about" />
          <Route path="/cart" />
          {/* <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
