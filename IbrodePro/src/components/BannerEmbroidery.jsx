import img_marking from "../assets/marking.jpeg";
import "../css/bannerEmbroidery.css";

export const BannerEmbroidery = () => {
  return (
    <div className="containerBannerEmbroidery">
      <img
        src={img_marking}
        alt="Image machine à marquage"
        className="imgBannerEmbroidery"
      />
    </div>
  );
};

export default BannerEmbroidery;
