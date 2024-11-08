import { Container } from "react-bootstrap";
import "../css/satisfaction.css"

const Satisfaction = () => {
  return (
    <Container className="containerSatisfaction">
      <h2>
        <strong>Satisfait, échangé ou remboursé</strong>
      </h2>
      <p>
        Chez <strong><b>IBRODEPRO</b></strong>, vous bénéficiez de 30 jours pour échanger ou retourner vos produits.
        Vous avez commis une erreur, choisi la mauvaise taille, ou souhaitez
        simplement changer de modèle ou être remboursé ? Aucun souci ! Vous
        pouvez retourner vos articles (neufs, en parfait état, dans leur
        emballage d'origine avec leurs étiquettes intactes) pour demander un
        échange ou un remboursement.
      </p>
      <p>
        Les échanges ou demandes de remboursement doivent être effectués dans un
        délai de 30 jours suivant la réception de votre commande (le cachet de
        la poste faisant foi).
      </p>
      <p>
        Nous offrons des <strong><b>échanges</b></strong> pour une taille et/ou un coloris différent. Pour changer de modèle, il
        sera nécessaire de passer une <strong><b>nouvelle commande</b></strong>.
      </p>
      <p>
        Les frais de retour sont à la charge du client, tandis que la
        réexpédition des articles échangés est prise en charge par <strong><b>IBRODEPRO</b></strong>.
      </p>
      <p>Par téléphone ou par mail</p>
      <p>Vous pouvez nous contacter par téléphone au 06 99 23 01 89</p>
      <p>
        ou via notre <a href="/devis">formulaire de contact</a>
      </p>
    </Container>
  );
};

export default Satisfaction;
