import { Card } from "react-bootstrap";
import "../css/sectionSecondScrollEmbroidery.css";
import { useEffect } from "react";

const SectionSecondScrollEmbroidery = ({
  datas,
  slideInElem,
  slideInElemDelay,
}) => {
  useEffect(() => {
    slideInElem("#slide-in-elem-secondSroll-embroidery");
  }, []);
  useEffect(() => {
    slideInElemDelay("#slide-in-elem-secondSroll-embroidery-delay");
  }, []);

  return (
    <div className="containerSecondScrollEmbroidery">
      {datas.map((items, i) => (
        <div key={i} className="divSecondScrollEmbroidery">
          <h2 id="slide-in-elem-secondSroll-embroidery">
            <strong>{items.title}</strong>
          </h2>
          <ul>
            {items.list.map((item, y) => (
              <li key={y} id="slide-in-elem-secondSroll-embroidery-delay">
                <h3>{item.titleList}</h3>
                <p>{item.textList}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SectionSecondScrollEmbroidery;
