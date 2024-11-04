import TextFormHome from "./TextFormHome";
import FormHome from "./FormHome";

const SectionFormHome = ({ slideInElem, slideInElemDelay }) => {
  return (
    <div className="container" style={{ marginTop: "30vh" }}>
      <div className="row d-flex justify-content-between align-items-start">
        <TextFormHome
          slideInElem={slideInElem}
          slideInElemDelay={slideInElemDelay}
        />
        <FormHome />
      </div>
    </div>
  );
};

export default SectionFormHome;
