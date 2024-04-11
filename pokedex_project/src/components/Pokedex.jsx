import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./NavBar";
//
const Pokedex = ({ pokemon, setPokemon, value, filterList, filterField }) => {
  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem("like")) || []
  );
  //
  const handleLike = (pokemon) => {
    const pokeId = [...like];
    const findLike = pokeId.find((f) => f.id === pokemon.id);
    //
    if (!findLike) {
      pokeId.push(pokemon);
      setLike(pokeId);
      localStorage.setItem("like", JSON.stringify(pokeId));
      console.log(pokeId);
    }
  };
//
  useEffect(() => {
    if (value) {
      axios
        .get(`https://pokebuildapi.fr/api/v1/pokemon/generation/1`)
        .then((res) => {
          setPokemon(res.data);
        });
    } else {
      setPokemon(filterList());
    }
  }, [value]);
  return (
    <>
      {/* <NavBar /> */}
      {pokemon.map((poke) => (
        <Cards poke={poke} handleLike={handleLike} />
      ))}
    </>
  );
};
export default Pokedex;
