import { Card } from "react-bootstrap";
import "../../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="titleFooter">INFORMATIONS</h2>
      <div className="bodyFooter">
        <a className="linkFooter">Mentions légales</a>
        <a className="linkFooter">Satisfait, échangé ou remboursé</a>
      </div>
    </div>
  );
};

export default Footer;
