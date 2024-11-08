import "../../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = {
    "Mentions légales": "mentions",
    "Satisfait, échangé ou remboursé": "satisfait",
  };

  return (
    <div className="footer">
      <h2 className="titleFooter">Informations</h2>
      <div className="bodyFooter">
        {Object.entries(links).map(([key, value]) => (
          <Link key={key} to={value} className="linkFooter">
            {key}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
