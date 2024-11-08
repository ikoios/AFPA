import TextFormDevis from "../components/textFormDevis";
import FormHome from "../components/FormHome";
import { Container } from "react-bootstrap";
import "../css/devis.css";

const Devis = () => {
  return (
    <div className="containerDevis">
      <div className="divFormDevis">
        <TextFormDevis />
        <div className="divFormHome">
          <FormHome />
        </div>
      </div>
    </div>
  );
};

export default Devis;
