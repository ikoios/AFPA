import { useEffect, useRef } from "react";
import img_logo from "../assets/Ibrode_logo.png";
import * as datas from "../datas/Datas";
import img_certified from "../assets/certified.png";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import "../css/sectionSecondScroll.css";
import { Card } from "react-bootstrap";

const SectionSecondScroll = ({ datas, slideInElem, slideInElemDelay }) => {
  useEffect(() => {
    slideInElem("#slide-in-elem-secondScroll");
  }, []);

  useEffect(() => {
    slideInElemDelay("#slide-in-elem-secondScroll-delay");
  }, []);

  return (
    <div className="containerSectionSecondScroll">
      <img
        src={img_logo}
        alt="ibrodepro-logo"
        id="slide-in-elem-secondScroll"
        className="logo"
      />
      <div className="divSectionSecondScroll">
        {datas.map((item, i) => (
          <div key={i} className="divCard">
            <Card className="cardSectionSecondScroll">
              <h2 className="titleCard" id="slide-in-elem-secondScroll-delay">
                <strong>{item.title}</strong>
              </h2>

              {item.text.map((txt, y) => (
                <Card.Text
                  className="textCard"
                  key={y}
                  id="slide-in-elem-secondScroll-delay"
                >
                  {parse(DOMPurify.sanitize(txt))}
                </Card.Text>
              ))}
            </Card>
          </div>
        ))}
      </div>
      <img
        src={img_certified}
        alt="logo-certifié"
        id="slide-in-elem-secondScroll-delay"
        className="imgCertified"
      />
    </div>
  );
};

export default SectionSecondScroll;
