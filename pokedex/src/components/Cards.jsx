import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import Modal from "./Info";
import { Button, Container } from "react-bootstrap";
//
const Cards = ({ poke, handleLike }) => {
  const [show, setShow] = useState(false);
  //
  const handleClick = () => {
    setShow(!show);
  };
  //
  return (
    <>
      <div className="">
        <Card
          className="text-center"
          style={{
            width: "18rem",
          }}
          onClick={handleClick}
        >
          <Card.Body key={poke.id}>
            <Card.Img src={poke.image} />
            <Card.Title>
              #{poke.pokedexId} {poke.name}
            </Card.Title>
          </Card.Body>
          <Modal poke={poke} show={show} setShow={setShow} />
        </Card>
        <Container className="d-flex justify-content-center mb-4">
          <Button
            className="rounded-5 d-flex justify-content-center"
            variant="white"
            style={{ width: "50px" }}
            onClick={() => handleLike(poke)}
          >
            <img src="Assets/Heart.png" alt="" style={{ width: "150%" }} />
          </Button>
        </Container>
      </div>
    </>
  );
};
export default Cards;
