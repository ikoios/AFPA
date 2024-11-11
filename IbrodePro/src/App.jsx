import NavBar from "./components/layouts/NavBar";
import Home from "./views/Home";
import Embroidery from "./views/Embroidery";
import Realisations from "./views/Realisations";
import Devis from "./views/Devis";
import Mentions from "./views/Mentions";
import Satisfaction from "./views/Satisfaction";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./css/app.css";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <NavBar isMobile={isMobile} />
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route
            path="/broderie"
            element={<Embroidery isMobile={isMobile} />}
          />
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
