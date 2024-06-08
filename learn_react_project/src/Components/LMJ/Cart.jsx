import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import { plantList } from "../../Datas/PlantList";
//
export default function Cart(props) {
  const [isOpen, setIsOpen] = useState(false);
  const total = props.cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  //
  return isOpen ? (
    <Container className="bg-success text-white p-3 rounded-5 mt-3">
      <Container className="d-flex justify-content-end">
        <CloseButton variant="white" onClick={() => setIsOpen(false)} />
      </Container>
      <h2 className="d-flex justify-content-center">Panier</h2>
      <ul>
        
      </ul>
      <h3>Total : {total}€</h3>
      <Button onClick={() => props.updateCart([])}>Vider le panier</Button>
    </Container>
  ) : (
    <Button variant="success" onClick={() => setIsOpen(true)}>
      Panier
    </Button>
  );
}
