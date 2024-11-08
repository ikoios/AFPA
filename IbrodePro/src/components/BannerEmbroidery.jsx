import img_marking from "../assets/marking.jpeg";
import "../css/embroidery.css";

export const BannerEmbroidery = () => {
  return (
    <>
      <img
        src={img_marking}
        alt="Image machine à marquage"
        className="bannerEmbroidery"
      />
    </>
  );
};

export default BannerEmbroidery;
