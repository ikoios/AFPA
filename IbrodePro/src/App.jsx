import NavBar from "./components/layouts/NavBar";
import Home from "./views/Home";
import Embroidery from "./views/Embroidery";
import Realisations from "./views/Realisations";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/app.css";

function App() {
  return (
    <>
      <Router
        future={{
          v7_startTransition: true,
        }}
      >
        <NavBar />
        <Routes
          future={{
            v7_startTransition: true,
          }}
        >
          <Route path="/" element={<Home />} />
          <Route path="/broderie" element={<Embroidery />} />
          <Route path="/rélisations" element={<Realisations />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
