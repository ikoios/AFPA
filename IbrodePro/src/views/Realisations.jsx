import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { slideInElem, slideInElemDelay } from "../animations/Animations";
import * as datas from "../datas/Datas";
import "../css/realisations.css";

const Realisations = () => {
  useEffect(() => {
    slideInElem("#slide-in-elem-realisations");
    slideInElemDelay("#slide-in-elem-realisations-delay0");
    slideInElemDelay("#slide-in-elem-realisations-delay1");
    slideInElemDelay("#slide-in-elem-realisations-delay2");
    slideInElemDelay("#slide-in-elem-realisations-delay3");
    slideInElemDelay("#slide-in-elem-realisations-delay4");
    slideInElemDelay("#slide-in-elem-realisations-delay5");
    slideInElemDelay("#slide-in-elem-realisations-delay6");
    slideInElemDelay("#slide-in-elem-realisations-delay7");
    slideInElemDelay("#slide-in-elem-realisations-delay8");
  }, []);

  return (
    <div className="containerRealisations ">
      <div className="cardRealisations">
        <h2 id="slide-in-elem-realisations" className="titleRealisations">
          <strong>Ils nous font confiance</strong>
        </h2>
        <div className="divRealisations">
          {datas.datasRealisations.map((items, i) => (
            <img
              key={i}
              src={items.src}
              alt={`Logo ${items.item}`}
              className="imgRealisations"
              id={`slide-in-elem-realisations-delay${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Realisations;
