import { useEffect, useRef } from "react";
import img_logo from "../assets/Ibrode_logo.png";
import * as datas from "../datas/Datas";
import img_certified from "../assets/certified.png";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import "../css/sectionSecondScroll.css";
import { Card } from "react-bootstrap";

const SectionSecondScroll = ({
  isMobile,
  datas,
  slideInElem,
  slideInElemDelay,
}) => {
  useEffect(() => {
    if (isMobile) {
      slideInElem("#slide-in-elem-secondScroll");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-title0");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-title1");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-title2");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-text0-0");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-text0-1");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-text0-2");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-text1-0");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-text1-1");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-text1-2");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-text2-0");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-text2-1");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-text2-2");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-certif");
    } else {
      slideInElem("#slide-in-elem-secondScroll");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-title");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-text");
      slideInElemDelay("#slide-in-elem-secondScroll-delay-certif");
    }
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
        {datas.map((item, i) =>
          isMobile ? (
            <div key={i} className="divCard">
              <Card className="cardSectionSecondScroll">
                <h2
                  className="titleCard"
                  id={`slide-in-elem-secondScroll-delay-title${i}`}
                >
                  <strong>{item.title}</strong>
                </h2>

                {item.text.map((txt, y) => (
                  <Card.Text
                    className="textCard"
                    key={y}
                    id={`slide-in-elem-secondScroll-delay-text${i}-${y}`}
                  >
                    {parse(DOMPurify.sanitize(txt))}
                  </Card.Text>
                ))}
              </Card>
            </div>
          ) : (
            <div key={i} className="divCard">
              <Card className="cardSectionSecondScroll">
                <h2
                  className="titleCard"
                  id="slide-in-elem-secondScroll-delay-title"
                >
                  <strong>{item.title}</strong>
                </h2>

                {item.text.map((txt, y) => (
                  <Card.Text
                    className="textCard"
                    key={y}
                    id="slide-in-elem-secondScroll-delay-text"
                  >
                    {parse(DOMPurify.sanitize(txt))}
                  </Card.Text>
                ))}
              </Card>
            </div>
          )
        )}
      </div>
      <img
        src={img_certified}
        alt="logo-certifié"
        id="slide-in-elem-secondScroll-delay-certif"
        className="imgCertified"
      />
    </div>
  );
};

export default SectionSecondScroll;
