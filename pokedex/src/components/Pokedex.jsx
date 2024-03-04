import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
//
export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  //
  useEffect(() => {
     axios
        .get(`https://pokebuildapi.fr/api/v1/pokemon/limit/100`)
        .then((res) => {
          console.log(res);
          setPokemon(res.data);
        });
  }, []);
  return <Cards pokemon={pokemon} />;
}
