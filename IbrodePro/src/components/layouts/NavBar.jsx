import { Nav } from "react-bootstrap";
import ButtonList from "../ButtonList";
import img_logo from "../../assets/Ibrode_logo.png";

const NavBar = () => {
  const links = {
    Accueil: "/",
    Broderie: "broderie",
    Realisations: "nos-realisations",
    Devis: "demande-in-devis"
  };

  return (
    <Nav className="py-4 d-flex align-items-center justify-content-between">
      <Nav.Item className="text-center">
        <img src={img_logo} alt="Ibrodepro-logo" className="w-50 px-0" />
      </Nav.Item>
      {Object.entries(links).map(([key, value]) => (
        <Nav.Item key={key}>
          <Nav.Link href={value} className="text-black fs-5">
            {key}
          </Nav.Link>
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
  );
};

export default NavBar;
