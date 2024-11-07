import { Container } from "react-bootstrap";
import TextFormHome from "./TextFormHome";
import FormHome from "./FormHome";
import "../css/sectionFormHome.css";

const SectionFormHome = ({ datas, slideInElem, slideInElemDelay }) => {
  return (
    <Container className="containerSectionFormHome">
      <div className="divSectionFormHome">
        <TextFormHome
          datas={datas}
          slideInElem={slideInElem}
          slideInElemDelay={slideInElemDelay}
        />
        <div className="divFormHome">
          <FormHome />
        </div>
      </div>
    </Container>
  );
};

export default SectionFormHome;
