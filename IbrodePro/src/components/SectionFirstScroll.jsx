import { useEffect, useRef } from "react";
import * as datas from "../datas/Datas";

const SectionFirstScroll = ({ slideInElem, slideInElemDelay }) => {
  useEffect(() => {
    slideInElem("#slide-in-elem");
  }, []);

  useEffect(() => {
    slideInElemDelay("#slide-in-elem-delay");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "4rem",
      }}
    >
      {Object.entries(datas.datasFirstScroll).map(([key, value]) => (
        <div
          className="d-flex align-items-center flex-column flex-wrap text-center"
          style={{ width: "22rem" }}
          key={key}
        >
          <img
            src={value.src}
            alt={`Image ${key}`}
            style={value.style}
            id="slide-in-elem"
          />
          <p className={value.classTitle} id="slide-in-elem-delay">
            <strong>{value.title}</strong>
          </p>
          <p className={value.classText} id="slide-in-elem-delay">
            {value.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionFirstScroll;
