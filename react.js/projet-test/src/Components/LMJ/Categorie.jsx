import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { plantList } from "../../Datas/PlantList";

export default function Categorie(props) {
  const categories = plantList.reduce(
    (acc, plante) =>
      acc.includes(plante.category) ? acc : acc.concat(plante.category),
    []
  );
  return (
    <DropdownButton
      variant="success"
      title="Catégories"
      className="d-flex justify-content-center pt-5"
      value={props.categorie}
    >
      {categories.map((cat) => (
        <Dropdown.Item
          key={cat}
          value={cat}
          onClick={(e) => props.setCat(e.target.value)}
        >
          {cat}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
