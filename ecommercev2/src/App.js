import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/navbar";

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
        </Routes>
      </Router>
    </div>
  );
}
export default App;
