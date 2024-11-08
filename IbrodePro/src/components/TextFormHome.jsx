import { useEffect, useRef } from "react";
import React from "react";
import "../css/textFormHome.css";
import { Card } from "react-bootstrap";

const TextFormHome = ({ datas, slideInElem, slideInElemDelay }) => {
  useEffect(() => {
    slideInElem("#slide-in-elem-textForm");
  }, []);

  useEffect(() => {
    slideInElemDelay("#slide-in-elem-textForm-delay");
  }, []);

  return (
    <div className="containerTextFormHome">
      <Card id="cardTest">
        <Card.Title style={datas.styleTitle} id="slide-in-elem-textForm">
          {datas.title}
        </Card.Title>
        <Card.Text style={datas.styleText} id="slide-in-elem-textForm-delay">
          {datas.text1}
        </Card.Text>
        <Card.Img
          style={datas.styleImage}
          src={datas.src}
          alt={`Image ${datas.item}`}
        />
      </Card>
    </div>
  );
};

export default TextFormHome;
