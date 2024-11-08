import { slideInElem, slideInElemDelay } from "../Animations";
import * as datas from "../../datas/Datas";
import { Card } from "react-bootstrap";

const Realisations = () => {
  return (
    <Card>
      <h2>Ils nous font confiance</h2>
      {datas.datasRealisations[0].map((item, i) => (
        <Card.Img key={i} src={item} />
      ))}
    </Card>
  );
};

export default Realisations;
