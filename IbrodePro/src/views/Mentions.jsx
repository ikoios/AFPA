import { Container } from "react-bootstrap";
import "../css/mentions.css";

const Mentions = () => {
  return (
    <Container className="containerMentions">
      <h2>
        <strong>Mentions légales</strong>
      </h2>
      <ul>
        <li>
          <h5>Informations légales</h5>
          <p>
            <strong>
              <b>Nom de l'entreprise: </b>
            </strong>
            IBRODEPRO
          </p>
          <p>
            <strong>
              <b>Forme juridique: </b>
            </strong>
            SAS
          </p>
          <p>
            <strong>
              <b>Capital social: </b>
            </strong>
            10000 €
          </p>
          <p>
            <strong>
              <b>Adresse du siège social: </b>
            </strong>
            229 RUE SOLFERINO 59000
          </p>
          <p>
            <strong>
              <b>Numéro de téléphone: </b>
            </strong>
            06 99 23 01 89
          </p>
          <p>
            <strong>
              <b>Adresse e-mail: </b>
            </strong>
            Ibrodepro@gmail.com
          </p>
          <p>
            <strong>
              <b>Numéro SIRET: </b>
            </strong>
            82933776500038
          </p>
          <p>
            <strong>
              <b>Numéro RCS: </b>
            </strong>
            Lille Metropole B 829 337 765
          </p>
          <p>
            <strong>
              <b>Numéro de TVA intracommunautaire: </b>
            </strong>
            Lille Metropole B 829 337 765
          </p>
        </li>
        <li>
          <h5>Propriété intellectuelle</h5>
          <p>
            Le site vetementprofessionnel.pro et l'ensemble de son contenu
            (textes, images, illustrations, logos, marques, etc.) sont protégés
            par les lois en vigueur sur la propriété intellectuelle. Toute
            reproduction, représentation, modification, publication, adaptation
            de tout ou partie des éléments du site, quel que soit le moyen ou le
            procédé utilisé, est interdite, sauf autorisation écrite préalable
            de [Nom de ton entreprise].
          </p>
        </li>
        <li>
          <h5>Protection des données personnelles</h5>
          <p>
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978
            modifiée et au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d’un droit d’accès, de rectification, de
            suppression et de portabilité des informations qui vous concernent.
            Vous pouvez exercer ces droits en nous contactant à l’adresse
            suivante:{" "}
            <a
              href="mailto:contact@vetementprofessionnel.pro?subject=Demande de contact"
              className="linkMailFormDevis"
            >
              contact@vetementprofessionnel.pro
            </a>
            .
          </p>
          <p>
            Les données personnelles collectées sur le site
            vetementprofessionel.pro sont utilisées uniquement à des fins de
            traitement des commandes et ne sont pas partagées avec des tiers
            sans votre consentement explicite.
          </p>
        </li>
        <li>
          <h5>Conditions d’utilisation du site</h5>
          <p>
            L’utilisation du site vetementprofessionel.pro implique
            l’acceptation pleine et entière des conditions générales
            d’utilisation décrites sur cette page. Ces conditions sont
            susceptibles d’être modifiées ou complétées à tout moment, les
            utilisateurs du site vetementprofessionel.pro sont donc invités à
            les consulter régulièrement.
          </p>
        </li>
        <li>
          <h5>Cookies</h5>
          <p>
            Le site vetementprofessionel.pro utilise des cookies pour améliorer
            l’expérience de navigation. En poursuivant votre navigation sur ce
            site, vous acceptez l’utilisation de cookies. Vous avez la
            possibilité de gérer vos préférences en matière de cookies dans les
            paramètres de votre navigateur.
          </p>
        </li>
        <li>
          <h5>Responsabilité</h5>
          <p>
            Le site vetementprofessionel.pro s’efforce de fournir des
            informations aussi précises que possible. Toutefois, il ne pourra
            être tenu responsable des omissions, des inexactitudes et des
            carences dans la mise à jour, qu’elles soient de son fait ou du fait
            des tiers partenaires qui lui fournissent ces informations.
          </p>
        </li>
      </ul>
    </Container>
  );
};

export default Mentions;
