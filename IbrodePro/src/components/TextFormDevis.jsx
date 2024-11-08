import { Card } from "react-bootstrap";
import "../css/textFormDevis.css";

const TextFormDevis = () => {
  return (
    <Card className="cardTextFormDevis">
      <h2 className="titleTextFormDevis">
        <strong>Nous contacter…</strong>
      </h2>
      <Card.Title className="secondTitleTextFormDevis">
        <strong>Vous guidez</strong>
      </Card.Title>
      <Card.Text className="textFormDevis">
        Votre temps est précieux, contactez nous directement et laissez nos
        experts vous guider dans votre projet. Si vous avez des doutes
        concernant le meilleur produit a choisir, ou si vous souhaitez discuter
        directement.
      </Card.Text>
      <div className="divInformation">
        <div className="divLink">
          <div className="divTel">
            <Card.Title>Téléphone</Card.Title>
            <a href="tel:0699230189" className="linkFormDevis">
              06 99 23 01 89
            </a>
          </div>
          <div>
            <Card.Title>E-mail</Card.Title>
            <a
              href="mailto:contact@vetementprofessionnel.pro?subject=Demande de contact"
              className="linkMailFormDevis"
            >
              contact@vetementprofessionnel.pro
            </a>
          </div>
        </div>
        <div className="timetableFormDevis">
          <Card.Title>Heures d’ouverture</Card.Title>
          <Card.Text className="textFormDevis">
            Du lundi au samedi <br />
            De 09 h 00 à 19 h 00
          </Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default TextFormDevis;
