import CareScale from "./CareScale";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//
export default function PlantePlante({ props, plant }) {
  var nameFlamme = plant.name;
  plant.isBestSale ? (nameFlamme += `🔥`) : (nameFlamme += "");
  //
  function addToCart(name, price, props) {
    const currentPlantSaved = props.cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = props.cart.filter(
        (plant) => plant.name !== name
      );
      props.updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      props.updateCart([...props.cart, { name, price, amount: 1 }]);
    }
  }
  //
  return props.isOpen && (props.categorie == "" || props.categorie === plant.category)  ? (
    <Card className="border-2 rounded-4 border-success mb-1">
      <Card.Body
        key={plant.id}
        className="list-group-item disabled d-flex flex-column p-2 align-items-center"
      >
        <Card.Img
          src={plant.cover}
          alt={`${plant.name} cover`}
          className="rounded-4"
          style={{ height: "25rem", width: "25rem" }}
        />
        <Container className="d-flex flex-wrap mt-1">
          <Card.Title>{nameFlamme}</Card.Title>
          <div className="d-flex justify-content-end w-100">
            <CareScale careType="water" scaleValue={plant.water} />
            <CareScale careType="light" scaleValue={plant.light} />
          </div>
        </Container>
      </Card.Body>
      <Container className="d-flex  justify-content-center pb-1">
        <Button
          variant="success"
          onClick={() => addToCart(plant.name, plant.price, props)}
        >
          Ajouter
        </Button>
      </Container>
    </Card>
  ) : (
    <Card className="border-2 rounded-4 border-success mb-5">
      <Card.Body
        key={plant.id}
        className="list-group-item disabled d-flex flex-column p-2 align-items-center"
      >
        <Card.Img
          src={plant.cover}
          alt={`${plant.name} cover`}
          className="rounded-4"
          style={{ height: "25rem", width: "25rem" }}
        />
        <Container className="d-flex flex-wrap mt-1">
          <Card.Title>{nameFlamme}</Card.Title>
          <div className="d-flex justify-content-end w-100">
            <CareScale careType="water" scaleValue={plant.water} />
            <CareScale careType="light" scaleValue={plant.light} />
          </div>
        </Container>
      </Card.Body>
      <Container className="d-flex  justify-content-center pb-1">
        <Button
          variant="success"
          onClick={() => addToCart(plant.name, plant.price, props)}
        >
          Ajouter
        </Button>
      </Container>
    </Card>
  );
}
