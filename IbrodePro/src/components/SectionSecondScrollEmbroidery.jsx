import { Card } from "react-bootstrap";
import "../css/sectionSecondScrollEmbroidery.css";
import { useEffect } from "react";

const SectionSecondScrollEmbroidery = ({
  isMobile,
  datas,
  slideInElem,
  slideInElemDelay,
}) => {
  useEffect(() => {
    if (isMobile) {
      slideInElem("#slide-in-elem-secondSroll-embroidery0");
      slideInElem("#slide-in-elem-secondSroll-embroidery1");
      slideInElemDelay("#slide-in-elem-secondSroll-embroidery-delay0-0");
      slideInElemDelay("#slide-in-elem-secondSroll-embroidery-delay0-1");
      slideInElemDelay("#slide-in-elem-secondSroll-embroidery-delay0-2");
      slideInElemDelay("#slide-in-elem-secondSroll-embroidery-delay1-0");
      slideInElemDelay("#slide-in-elem-secondSroll-embroidery-delay1-1");
      slideInElemDelay("#slide-in-elem-secondSroll-embroidery-delay1-2");
    } else {
      slideInElem("#slide-in-elem-secondSroll-embroidery0");
      slideInElem("#slide-in-elem-secondSroll-embroidery1");
      slideInElemDelay("#slide-in-elem-secondSroll-embroidery-delay0");
      slideInElemDelay("#slide-in-elem-secondSroll-embroidery-delay1");
    }
  }, []);

  return (
    <div className="containerSecondScrollEmbroidery">
      {datas.map((items, i) =>
        isMobile ? (
          <div key={i} className="divSecondScrollEmbroidery">
            <h2 id={`slide-in-elem-secondSroll-embroidery${i}`}>
              <strong>{items.title}</strong>
            </h2>
            <ul>
              {items.list.map((item, y) => (
                <li
                  key={y}
                  id={`slide-in-elem-secondSroll-embroidery-delay${i}-${y}`}
                >
                  <h3>{item.titleList}</h3>
                  <p>{item.textList}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div key={i} className="divSecondScrollEmbroidery">
            <h2 id={`slide-in-elem-secondSroll-embroidery${i}`}>
              <strong>{items.title}</strong>
            </h2>
            <ul>
              {items.list.map((item, y) => (
                <li
                  key={y}
                  id={`slide-in-elem-secondSroll-embroidery-delay${i}`}
                >
                  <h3>{item.titleList}</h3>
                  <p>{item.textList}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default SectionSecondScrollEmbroidery;
