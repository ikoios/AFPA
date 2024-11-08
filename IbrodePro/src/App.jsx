import NavBar from "./components/layouts/NavBar";
import Home from "./views/Home";
import Embroidery from "./views/Embroidery";
import Realisations from "./views/Realisations";
import Devis from "./views/Devis";
import Mentions from "./views/Mentions";
import Satisfaction from "./views/Satisfaction";
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
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/satisfait" element={<Satisfaction />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
