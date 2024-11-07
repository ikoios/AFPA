import img_home from "../assets/img-home.jpg";
import { Button } from "react-bootstrap";
import "../css/banner.css";

const Banner = () => {
  return (
    <div className="divTrapezeBanner">
      <div className="containerBanner">
        <div className="textBanner">
          <h1>
            <strong>
              Optez pour des vêtements et équipements professionnels.
            </strong>
          </h1>
          <h2>Et affirmez votre image.</h2>
          <p>
            Vous avez une idée en tête? Laissez notre équipe vous guider dans
            votre choix
          </p>
        </div>
        <div className="divBanner row">
          <div className="divBannerButton col-12 col-md-6">
            <Button>Contactez-nous directement</Button>
            <Button>Notre catalogue</Button>
          </div>
          <div className="divBannerImage col-12 col-md-6">
            <img src={img_home} alt="technicien-de-surface" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
