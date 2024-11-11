import { Nav } from "react-bootstrap";
import img_logo from "../../assets/Ibrode_logo.png";
import ButtonList from "../ButtonList";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../../css/navbar.css";

const NavBar = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNav, setShowNav] = useState(true);

  const links = {
    Accueil: "/",
    Broderie: "broderie",
    Realisations: "realisations",
    Devis: "devis",
  };

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, isMobile]);

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
              <nav>
                <div
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
                </div>
              </nav>
            </>
          ) : (
            <div
              className="container-burger"
              id="scrollUpBurger"
              style={{ top: showNav ? "0" : "-100%" }}
            >
              <img src={img_logo} alt="Ibrodepro-logo" className="w-50 px-0" />
              <button className="burger-button" onClick={toggleBurgerMenu}>
                <span className="line line1" />
                <span className="line line2" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div
          className="containerNavbar"
          id="scrollUpNav"
          style={{ top: showNav ? "0" : "-100%" }}
        >
          <Nav className="navbar">
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
        </div>
      )}
    </>
  );
};

export default NavBar;
