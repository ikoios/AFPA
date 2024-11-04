import { useEffect, useRef } from "react";
import img_logo from "../assets/Ibrode_logo.png";
import * as datas from "../datas/Datas";
import img_certified from "../assets/certified.png";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const SectionSecondScroll = ({ slideInElem, slideInElemDelay }) => {
  useEffect(() => {
    slideInElem("#slide-in-elem-secondScroll");
  }, []);

  useEffect(() => {
    slideInElemDelay("#slide-in-elem-secondScroll-delay");
  }, []);

  return (
    <div
      className="d-flex align-items-center flex-column container"
      style={{ marginTop: "20vh" }}
    >
      <img
        src={img_logo}
        alt="ibrodepro-logo"
        id="slide-in-elem-secondScroll"
        style={{ marginBottom: "5vh" }}
      />
      <div className="d-flex justify-content-center mb-5 row">
        {Object.entries(datas.datasSecondScroll).map(([key, value]) => (
          <div key={key} className="col-12 col-md-4 mb-5">
            <p
              className="fs-1 text-center mb-5"
              id="slide-in-elem-secondScroll-delay"
            >
              <strong>{value.title}</strong>
            </p>
            <p
              className="fs-5 fw-lighter"
              id="slide-in-elem-secondScroll-delay"
            >
              {parse(DOMPurify.sanitize(value.text1))}
            </p>
            <p
              className="fs-5 fw-lighter"
              id="slide-in-elem-secondScroll-delay"
            >
              {parse(DOMPurify.sanitize(value.text2))}
            </p>
            <p
              className="fs-5 fw-lighter"
              id="slide-in-elem-secondScroll-delay"
            >
              {parse(DOMPurify.sanitize(value.text3))}
            </p>
          </div>
        ))}
      </div>
      <img
        src={img_certified}
        alt="logo-certifié"
        id="slide-in-elem-secondScroll-delay"
        style={{ width: "25%", marginBottom: "10vh" }}
      />
    </div>
  );
};

export default SectionSecondScroll;
