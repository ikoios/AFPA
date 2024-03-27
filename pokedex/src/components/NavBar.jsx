import { Link } from "react-router-dom";
import Pokedex from "./Pokedex";
import Favorites from "./Favorites";
import { Button, Navbar, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
//
const NavBar = ({ setPokemon, filterList, setValue }) => {
  //
//     useEffect(() => {
//       if (value) {
//       }
//   }, []);
  
  //
  const handleKey = (e) => {
    // if (e.key === "Enter") {
    e.preventDefault();
    setValue(e.target.value);
    setPokemon(filterList());
    // }
  };
  //
  return (
    <Navbar>
      <Link to="/" element={<Pokedex />}>
        <Button className="btn-danger">Pokedex</Button>
      </Link>
      <Link to="/favoris" element={<Favorites />}>
        <Button className="btn-danger">Favoris</Button>
      </Link>
      <Form>
        <Form.Control
          placeholder="Recherche"
          //   onKeyDown={handleKey}
          onChange={handleKey}
          //   value={value}
        ></Form.Control>
      </Form>
    </Navbar>
  );
};
export default NavBar;
