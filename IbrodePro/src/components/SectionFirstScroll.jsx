import { useEffect, useRef } from "react";
import "../css/sectionFirstScroll.css";

const SectionFirstScroll = ({
  isMobile,
  datas,
  slideInElem,
  slideInElemDelay,
}) => {
  useEffect(() => {
    if (isMobile) {
      slideInElem("#slide-in-elem0");
      slideInElem("#slide-in-elem1");
      slideInElem("#slide-in-elem2");
      slideInElem("#slide-in-elem3");
      slideInElemDelay("#slide-in-elem-delay0");
      slideInElemDelay("#slide-in-elem-delay1");
      slideInElemDelay("#slide-in-elem-delay2");
      slideInElemDelay("#slide-in-elem-delay3");
    } else {
      slideInElem("#slide-in-elem");
      slideInElemDelay("#slide-in-elem-delay");
    }
  }, []);

  return (
    <div className="containerSectionFisrtScroll">
      {datas.map((item, i) =>
        isMobile ? (
          <div key={i}>
            <img
              src={item.src}
              alt={`Image ${item}`}
              style={item.style}
              id={`slide-in-elem${i}`}
            />
            <h2 className={item.classTitle} id={`slide-in-elem-delay${i}`}>
              <strong>{item.title}</strong>
            </h2>
            <p id={`slide-in-elem-delay${i}`}>{item.text}</p>
          </div>
        ) : (
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
            <p id="slide-in-elem-delay">{item.text}</p>
          </div>
        )
      )}
    </div>
  );
};

export default SectionFirstScroll;
