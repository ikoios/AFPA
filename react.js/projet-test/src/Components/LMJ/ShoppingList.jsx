import { plantList } from "../../Datas/PlantList";
import PlantItem from "./PlantItem";
//
export default function ShoppingList(props) {
  // const categories = plantList.reduce(
  //   (acc, plante) =>
  //     acc.includes(plante.category) ? acc : acc.concat(plante.category),
  //   []
  // );
  //
  return (
    <div>
      <ul className="d-flex flex-wrap p-5 justify-content-evenly">
        {plantList.map((plant) => (
          <>
            {console.log(!props.categorie)}
            <PlantItem props={props} plant={plant} />
          </>
        ))}
      </ul>
    </div>
  );
}

// import { plantList } from "../../Datas/PlantList";
// import PlantItem from "./PlantItem";
// //
// export default function ShoppingList(props) {
//   // const categories = plantList.reduce(
//   //   (acc, plante) =>
//   //     acc.includes(plante.category) ? acc : acc.concat(plante.category),
//   //   []
//   // );
//   //
//   return (
//     <div>
//       <ul className="d-flex flex-wrap p-5 justify-content-evenly">
//         {plantList.map((plant) =>{
//           // if((props.categorie !== undefined || props.categorie !== null) && (props.categorie === plant.category || props.categorie === "all")) {(
//             <>
//               <PlantItem props={props} plant={plant} />
//             </>
//           // )}else{
//           //   (<></>)
//           // }
//         }
//         )}
//       </ul>
//     </div>
//   );
// }
