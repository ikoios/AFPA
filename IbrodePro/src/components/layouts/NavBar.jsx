import { Nav } from "react-bootstrap";
import img_logo from "../../assets/Ibrode_logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

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
                      <a href="/devis">Contactez-nous</a>
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
            <div className="divNavbar">
              <Nav.Item className="itemImg">
                <img src={img_logo} alt="Ibrodepro-logo" className="imgNav" />
              </Nav.Item>
              <div className="itemLink">
                {Object.entries(links).map(([key, value]) => (
                  <Nav.Item key={key}>
                    <Link to={value} className="linkNav">
                      {key}
                    </Link>
                  </Nav.Item>
                ))}
              </div>
              <Nav.Item className="itemButton">
                <button className="contactNav">
                  <a href="/devis">Contactez-nous</a>
                </button>
              </Nav.Item>
            </div>
          </Nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
