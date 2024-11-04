import { Button, Card, Carousel } from "react-bootstrap";
import * as datas from "../datas/Datas";
import { useEffect, useState } from "react";

const SectionCarousel = ({ items, visibility }) => {
  const [index, setIndex] = useState(0);

  const title = Object.keys(datas.carousel);

  const item = Object.entries(items);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % item.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + item.length) % item.length);
  };

  let toto = [];

  for (let i = 0; i < visibility; i++) {
    toto.push(item[(index + i) % item.length]);
  }
  console.log(toto);
  return (
    <>
      <div className="d-flex justify-content-between" style={{ width: "100%" }}>
        <Button
          onClick={prevSlide}
          style={{
            background: "transparent",
            color: "black",
            border: "none",
            fontSize: "50px",
          }}
        >
          {"<"}
        </Button>
        {/* {Object.entries(datas.carousel).map(([key, value]) => ( */}
        {toto.map(([key, value]) => (
          /*
            Créer le css du carousel
            Délimiter la taille du carousel en fonction de l'écran
            Les cartes ont toujours le même ratio taille-écran
            
            */
          <div key={key} style={{ maxWidth: "22rem" }}>
            <Card className="border-0 me-2 w-75">
              <Card.Img
                src={value.src}
                alt={`Image ${value.title}`}
                style={{
                  height: "22rem",
                  width: "22rem",
                  backgroundColor: "rgb(241, 241, 241)",
                  objectFit: "cover",
                }}
              />
              <Card.Title>{value.title}</Card.Title>
              <Card.Text className="w-50">{value.text}</Card.Text>
            </Card>
          </div>
        ))}
        <Button
          onClick={nextSlide}
          style={{
            background: "transparent",
            color: "black",
            border: "none",
            fontSize: "50px",
          }}
        >
          {">"}
        </Button>
      </div>
    </>
  );
};

export default SectionCarousel;
