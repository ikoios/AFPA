import { plantList } from "../../Datas/PlantList";
import PlantItem from "./PlantItem";

export default function ShoppingList({ cart, updateCart }) {
  const categories = plantList.reduce(
    (acc, plante) =>
      acc.includes(plante.category) ? acc : acc.concat(plante.category),
    []
  );
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="d-flex flex-wrap p-5 justify-content-end">
        {plantList.map((plante) => (
          <>
            <PlantItem
            cart={cart}
            updateCart={updateCart}
            props={plante}
            />
          </>
        ))}
      </ul>
    </div>
  );
}
