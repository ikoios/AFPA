import CareScale from "./CareScale";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../Css/plantItem.css";

export default function PlantItem({ props, cart, updateCart }) {
  var nameFlamme = props.name;
  props.isBestSale ? (nameFlamme += `🔥`) : (nameFlamme += "");
  //
  function addToCart(id, name, price) {
    let selectedPlant = cart.find(plant => plant.id === id);
    if (selectedPlant) {
      let updatedCart = cart.map(
        plant =>
          plant.id === id ? { ...plant, amount: plant.amount + 1 } : plant
      );
      updateCart(updatedCart);
    } else {
      updateCart([...cart, { id, name, price, amount: 1 }]);
    }
  }
  return (
    <Card className="m-5 border-3 rounded-4 border-success">
      <Card.Body
        key={props.id}
        className="list-group-item disabled d-flex flex-column p-1"
      >
        <Card.Img
          src={props.cover}
          alt={`${props.name} cover`}
          className="rounded-4"
          style={{ height: "25rem" }}
        />
        <Container className="d-flex flex-wrap mt-1">
          <Card.Title>
            {nameFlamme}
          </Card.Title>
          <div className="d-flex justify-content-end w-100">
            <CareScale careType="water" scaleValue={props.water} />
            <CareScale careType="light" scaleValue={props.light} />
          </div>
        </Container>
      </Card.Body>
      <Container className="d-flex  justify-content-center pb-1">
        <Button
          variant="success"
          onClick={() => addToCart(props.id, props.name, props.price)}
        >
          Ajouter
        </Button>
      </Container>
    </Card>
  );
}
