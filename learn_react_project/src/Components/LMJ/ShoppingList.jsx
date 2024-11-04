import { plantList } from "../../Datas/PlantList";
import PlantItem from "./PlantItem";
import { Container, Form } from "react-bootstrap";
import "../Css/shoppingList.css";
import { useState } from "react";

export default function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('');
  const categories = plantList.reduce(
    (acc, plante) =>
      acc.includes(plante.category) ? acc : acc.concat(plante.category),
    []
  );

  return (
    <div>
    <Container className="d-flex justify-content-center mt-5">
      <Form.Select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className="w-25 text-center">
      <option value={''}>Catégories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </Form.Select>
    </Container>

      <ul className="d-flex flex-wrap p-5 justify-content-evenly">
        {plantList.map((plante) => (
          !activeCategory || activeCategory === plante.category ? (
          <>
            <PlantItem
            cart={cart}
            updateCart={updateCart}
            props={plante}
            />
          </>
        ): null))}
      </ul>
    </div>
  );
}
