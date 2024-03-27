import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
//
export default function Cart(props) {
  const total = props.cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  console.log(props.cart);
  //
  return (
    <Container
      className="bg-success text-white p-3 rounded-5 ms-2"
      style={{ height: `95%` }}
    >
      <CloseButton variant="white" onClick={() => props.setIsOpen(false)} />
      <h2 className="d-flex justify-content-center">Panier</h2>
      {/* <ul>
        {JSON.stringify(props.cart)}
      </ul> */}
      <h3>Total : {total}€</h3>
      <Button
        onClick={() => props.updateCart([])}
        variant="light"
        className="text-bg-success"
      >
        Vider le panier
      </Button>
    </Container>
  );
}
