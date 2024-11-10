import { Nav } from "react-bootstrap";
import img_logo from "../../assets/Ibrode_logo.png";
import ButtonList from "../ButtonList";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../../css/navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const links = {
    Accueil: "/",
    Broderie: "broderie",
    Realisations: "realisations",
    Devis: "devis",
  };

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile ? (
        <div className="menu-wrapper">
          {isOpen ? (
            <>
              <div className="container-close">
                <img
                  src={img_logo}
                  alt="Ibrodepro-logo"
                  className="w-50 px-0"
                />
                <button className="close-button" onClick={toggleBurgerMenu}>
                  ✕
                </button>
              </div>
              <nav
                className={`menu-content ${isOpen ? "fade-in" : "fade-out"}`}
              >
                <div className={`div-content ${isOpen ? "slide-in" : ""}`}>
                  {Object.entries(links).map(([key, value]) => (
                    <Link
                      to={value}
                      key={key}
                      className="menu-item"
                      onClick={toggleBurgerMenu}
                    >
                      {key}
                    </Link>
                  ))}
                </div>
                <div className="div-contact">
                  <button
                    className={`contact ${isOpen ? "slide-in" : "slide-out"}`}
                  >
                    Contactez-nous
                  </button>
                </div>
              </nav>
            </>
          ) : (
            <div className="container-burger">
              <img src={img_logo} alt="Ibrodepro-logo" className="w-50 px-0" />
              <button className="burger-button" onClick={toggleBurgerMenu}>
                <span className="line line1" />
                <span className="line line2" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <Nav className="py-4 d-flex align-items-center justify-content-between">
          <Nav.Item className="text-center">
            <img src={img_logo} alt="Ibrodepro-logo" className="w-50 px-0" />
          </Nav.Item>
          {Object.entries(links).map(([key, value]) => (
            <Nav.Item key={key}>
              <Link to={value} className="text-black fs-5">
                {key}
              </Link>
            </Nav.Item>
          ))}
          <Nav.Item className="w-50 d-flex justify-content-end">
            <ButtonList
              styleButton="contact"
              textButton="Contactez-nous"
              classButton="border me-4"
              colorButton="brun"
            />
          </Nav.Item>
        </Nav>
      )}
    </>
  );
};

export default NavBar;
