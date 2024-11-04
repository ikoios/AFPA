import ButtonList from "../components/ButtonList";
import img_home from "../assets/img-home.jpg";

const Banner = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "86.5vh",
        clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
        backgroundColor: "rgb(239, 239, 238)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "15rem"
        }}
      >
        <div style={{ marginTop: "8vh", textAlign: "center" }}>
          <h1>Optez pour des vêtements et équipements professionnels.</h1>
          <h2>Et affirmez votre image.</h2>
          <p>
            Vous avez une idée en tête? Laissez notre équipe vous guider dans
            votre choix
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "5vh",
            width: "75vw"
          }}
        >
          <div className="d-flex flex-column align-items-center  col-12 col-md-6">
            <ButtonList
              textButton="Contactez-nous directement"
              colorButton="brun"
              classButton="border mb-4 w-50"
            />
            <ButtonList
              textButton="Notre catalogue"
              colorButton="brun"
              classButton="border mb-5 w-50 "
            />
          </div>
          <div className="d-flex justify-content-center  col-12 col-md-6">
            <img
              src={img_home}
              alt="technicien-de-surface"
              className="rounded-5 w-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
