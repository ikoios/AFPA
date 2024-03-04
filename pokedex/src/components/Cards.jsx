import React from "react";
import { Card } from "react-bootstrap";

export default function Cards({ pokemon }) {
  return (
    <>
      {pokemon.map((poke) => (
        <Card  key={poke.id}>
          <Card.Img src={poke.image} />
          <Card.Body></Card.Body>
        </Card>
      ))}
    </>
  );
}
