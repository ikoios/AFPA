import img_home from "../assets/img-home.jpg";
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
            <button>
              <a href="/devis">Contactez-nous directement</a>
            </button>
            <button>Notre catalogue</button>
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
