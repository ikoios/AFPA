import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { slideInElem, slideInElemDelay } from "../animations/Animations";
import * as datas from "../datas/Datas";
import "../css/realisations.css";

const Realisations = () => {
  useEffect(() => {
    slideInElem("#slide-in-elem-realisations");
  }, []);
  useEffect(() => {
    slideInElemDelay("#slide-in-elem-realisations1-delay");
  }, []);
  useEffect(() => {
    slideInElemDelay("#slide-in-elem-realisations2-delay");
  }, []);
  useEffect(() => {
    slideInElemDelay("#slide-in-elem-realisations3-delay");
  }, []);
  useEffect(() => {
    slideInElemDelay("#slide-in-elem-realisations4-delay");
  }, []);
  useEffect(() => {
    slideInElemDelay("#slide-in-elem-realisations5-delay");
  }, []);
  useEffect(() => {
    slideInElemDelay("#slide-in-elem-realisations6-delay");
  }, []);
  useEffect(() => {
    slideInElemDelay("#slide-in-elem-realisations7-delay");
  }, []);
  useEffect(() => {
    slideInElemDelay("#slide-in-elem-realisations8-delay");
  }, []);

  return (
    <div className="containerRealisations">
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
              id={`slide-in-elem-realisations${i}-delay`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Realisations;
