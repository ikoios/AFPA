import { useEffect } from "react";
import { Card } from "react-bootstrap";
import img_embroidery from "../assets/embroidery.jpg";
import "../css/sectionFirstScrollEmbroidery.css";

const SectionFirstScrollEmbroidery = ({
  datas,
  slideInElem,
  slideInElemDelay,
}) => {
  useEffect(() => {
    slideInElem("#slide-in-elem-firstScroll-embroidery");
    slideInElemDelay("#slide-in-elem-firstScroll-embroidery-delay");
  }, []);

  return (
    <div className="containerFirstScrollEmbroidery">
      <Card className="cardFirstScrollEmbroidery">
        <h2
          className="titleFirstScrollEmbroidery"
          id="slide-in-elem-firstScroll-embroidery"
        >
          <strong>{datas[0].title}</strong>
        </h2>
        {datas[0].text.map((item, i) => (
          <Card.Text
            key={i}
            className="textFirstScrollEmbroidery"
            id="slide-in-elem-firstScroll-embroidery-delay"
          >
            {item}
          </Card.Text>
        ))}
      </Card>
      <img
        src={img_embroidery}
        alt="Image machine à coudre"
        className="imgFirstScrollEmbroidery"
      />
    </div>
  );
};

export default SectionFirstScrollEmbroidery;
