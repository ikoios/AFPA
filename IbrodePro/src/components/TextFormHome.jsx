import { useEffect, useRef } from "react";
import * as datas from "../datas/Datas";
import React from "react";

const TextFormHome = ({ slideInElem, slideInElemDelay }) => {
  useEffect(() => {
    slideInElem("#slide-in-elem-firstScroll");
  }, []);

  useEffect(() => {
    slideInElemDelay("#slide-in-elem-firstScroll-delay");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "10vh",
      }}
      className="col-12 col-md-5"
    >
      {Object.entries(datas.datasForm).map(([key, value]) => {
        // Checks if each property exists before using it
        const title = value.h1 ? (
          <p
            style={value.style}
            className="mb-4"
            id="slide-in-elem-firstScroll"
          >
            <strong>{value.h1}</strong>
          </p>
        ) : null;
        const text1 = value.text1 ? (
          <p
            style={value.style}
            className="mb-4"
            id="slide-in-elem-firstScroll-delay"
          >
            {value.text1}
          </p>
        ) : null;
        const text2 = value.text2 ? (
          <p
            style={value.style}
            className="mb-5"
            id="slide-in-elem-firstScroll-delay"
          >
            {value.text2}
          </p>
        ) : null;
        const src = value.src ? (
          <img
            src={value.src}
            style={value.style}
            alt={`Image ${key}`}
            id="slide-in-elem-firstScroll-delay"
            className="w-100"
          />
        ) : null;

        return (
          /* Using React.Fragment for initializing key */
          <React.Fragment key={key}>
            {title}
            {text1}
            {text2}
            {src}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TextFormHome;
