import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

export default function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.price * plantType.amount,
    0
  );
  return isOpen
    ? //
      <Container className="bg-success text-white p-3 rounded-5 mt-3">
        <div className="d-flex justify-content-end">
          <CloseButton variant="white" onClick={() => setIsOpen(false)} />
        </div>
        <p className="d-flex justify-content-center">Panier</p>
        <ul>
          {cart.map(cart =>
            <li key={cart.id}>
              {cart.name} [{cart.amount}]
            </li>
          )}
          total: {total} €
        </ul>
        <Button onClick={() => updateCart([])}>Vider le panier</Button>
      </Container>
    : //
      <Button variant="success" onClick={() => setIsOpen(true)}>
        Panier
      </Button>;
}
