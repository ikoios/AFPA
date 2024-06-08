import CareScale from "./CareScale";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { plantList } from "../../Datas/PlantList";
//
export default function PlantePlante({ props }) {
  var nameFlamme = props.name;
  props.isBestSale ? (nameFlamme += `🔥`) : (nameFlamme += "");
  //
  function addToCart(name, price) {
    const selectedPlant = props.cart.find((plant) => plant.name === name);
    if (selectedPlant) {
      const plantFiltered = props.cart.filter((plant) => plant.name !== name)
      props.updateCart([
        ...plantFiltered,
        { name, price, amount: selectedPlant.amount + 1 },
      ]);
    } else {
      props.updateCart([...props.cart, { name, price, amount: 1 }]);
    }
  }
  return (
    <Card className="w-25 m-5 border-3 rounded-4 border-success">
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
          <Card.Title>{nameFlamme}</Card.Title>
          <div className="d-flex justify-content-end w-100">
            <CareScale careType="water" scaleValue={props.water} />
            <CareScale careType="light" scaleValue={props.light} />
          </div>
        </Container>
      </Card.Body>
      <Container className="d-flex  justify-content-center pb-1">
        <Button
          variant="success"
          onClick={(plant) => addToCart(plant.name, plant.price)}
        >
          Ajouter
        </Button>
      </Container>
    </Card>
  );
}
