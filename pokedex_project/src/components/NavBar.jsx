import { Link } from "react-router-dom";
import Pokedex from "./Pokedex";
import Favorites from "./Favorites";
import { Button, Navbar, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
//
const NavBar = ({ setPokemon, filterList, setValue }) => {
  //
  const handleKey = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    setPokemon(filterList());
  };
  //
  return (
    <Navbar className="d-flex justify-content-around mb-4">
      <Navbar.Brand><img src="../../Assets/pokedex_logo.png" alt="logo pokedex" /></Navbar.Brand>
      <Link to="/" element={<Pokedex />}>
        <Button className="btn-danger">
          <h4>Pokedex</h4>
        </Button>
      </Link>
      <Link to="/favoris" element={<Favorites />}>
        <Button className="btn-danger">
          <h4>Favoris</h4>
        </Button>
      </Link>
      <Form>
        <Form.Control
          placeholder="Recherche"
          onChange={handleKey}
        ></Form.Control>
      </Form>
    </Navbar>
  );
};
export default NavBar;
