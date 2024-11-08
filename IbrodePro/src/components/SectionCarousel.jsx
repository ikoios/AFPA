import "slick-carousel";
import { Card } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/sectionCarousel.css";

/////////////////////////////////////////////////////////////////////////////////////

// import { Button, Card } from "react-bootstrap";
// import { useState } from "react";

// const SectionCarousel = ({ items, visibility }) => {
//   const [index, setIndex] = useState(0);

//   const item = Object.entries(items);

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % item.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + item.length) % item.length);
//   };

//   let tabCarousel = [];

//   for (let i = 0; i < visibility; i++) {
//     tabCarousel.push(item[(index + i) % item.length]);
//   }

//   return (
//     <>
//       <div
//         className="d-flex justify-content-between slider-container"
//         style={{ width: "100%" }}
//       >
//         <Button
//           onClick={prevSlide}
//           style={{
//             background: "transparent",
//             color: "black",
//             border: "none",
//             fontSize: "50px",
//           }}
//         >
//           {"<"}
//         </Button>
//         {tabCarousel.map(([key, value]) => (
//           <div
//             key={key}
//             style={{
//               maxWidth: "22rem",
//               textAlign: "center",
//             }}
//           >
//             <Card className="border-0 me-2">
//               <Card.Img
//                 src={value.src}
//                 alt={`Image ${value.title}`}
//                 style={{
//                   height: "22rem",
//                   width: "22rem",
//                   backgroundColor: "rgb(241, 241, 241)",
//                   objectFit: "cover",
//                 }}
//               />
//               <Card.Title>{value.title}</Card.Title>
//               <Card.Text>{value.text}</Card.Text>
//             </Card>
//           </div>
//         ))}
//         <Button
//           onClick={nextSlide}
//           style={{
//             background: "transparent",
//             color: "black",
//             border: "none",
//             fontSize: "50px",
//           }}
//         >
//           {">"}
//         </Button>
//       </div>
//     </>
//   );
// };

// export default SectionCarousel;

/////////////////////////////////////////////////////////////////////////////////////////

const SectionCarousel = ({ items }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          centerPadding: "50px",
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1650,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container text-center mt-5">
      <p style={{ fontSize: "50px", marginBottom: "4rem" }}>
        <strong>Tous les équipements dont vous avez besoin</strong>
      </p>
      <div>
        <Slider {...settings}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                maxWidth: "20rem",
                textAlign: "center",
              }}
            >
              <Card className="cardCaroursel border-0">
                <Card.Img
                  data-lazy="img/lazyfonz1.png"
                  src={item.src}
                  alt={`Image ${item.title}`}
                  style={{
                    height: "20rem",
                    width: "20rem",
                    backgroundColor: "rgb(241, 241, 241)",
                    objectFit: "cover",
                  }}
                />
                <Card.Title className="titleCarousel">{item.title}</Card.Title>
                <Card.Text className="textCarousel">{item.text}</Card.Text>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionCarousel;