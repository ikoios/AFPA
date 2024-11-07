import { useEffect, useRef } from "react";
import "../css/sectionFirstScroll.css";

const SectionFirstScroll = ({ datas, slideInElem, slideInElemDelay }) => {
  useEffect(() => {
    slideInElem("#slide-in-elem");
  }, []);

  useEffect(() => {
    slideInElemDelay("#slide-in-elem-delay");
  }, []);

  return (
    <div className="containerSectionFisrtScroll">
      {datas.map((item, i) => (
        <div key={i}>
          <img
            src={item.src}
            alt={`Image ${item}`}
            style={item.style}
            id="slide-in-elem"
          />
          <h2 className={item.classTitle} id="slide-in-elem-delay">
            <strong>{item.title}</strong>
          </h2>
          <p id="slide-in-elem-delay">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionFirstScroll;
