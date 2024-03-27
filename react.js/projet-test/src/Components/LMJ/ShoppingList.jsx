import { plantList } from "../../Datas/PlantList";
import PlantePlante from "./PlantItem";
import PlantItem from "./PlantItem";
//
export default function ShoppingList(props) {
  console.log(props.categorie ? "yes" : "no");
  return (
    <div>
      <ul className="d-flex flex-wrap p-5 justify-content-evenly">
        {props.categorie
          ? // ?
            // console.log('je passe ici')
            plantList
              .filter((toto) => toto.category == props.categorie)
              .map((plant) => {
                return (
                  <>
                    <PlantItem props={props} plant={plant} />
                  </>
                );
              })
          : // console.log('je passe ici '+plantList)

            plantList.map((plant) => {
              return (
                <>
                  <PlantItem props={props} plant={plant} />
                </>
              );
            })}
      </ul>
    </div>
  );
}
