import React from "react";
import Banner from './Components/LMJ/Banner';
import Cart from './Components/LMJ/Cart';
import ShoppingList from './Components/LMJ/ShoppingList'
import Footer from "./Components/LMJ/Footer";
import { useState } from "react";
import Categorie from "./Components/LMJ/Categorie";
import { Container, Row, Col, Button } from "react-bootstrap";
// import SearchBox from "./Test-Produit/SearchBox";
// import  Menu  from "./Menu";
//
export default function App() {
  const [cart, updateCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [categorie, setCat] = useState('')
  return (
    <div>
      <Banner />
      <Container fluid>
        <Row>
          <Col>
            <Categorie categorie={categorie} setCat={setCat}/>
          </Col>
        </Row>
        <Row>
          {isOpen ?
            <>
              <Col md={2}>
                <Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />
              </Col>
              <Col md={10}>
                <ShoppingList cart={cart} updateCart={updateCart} categorie={categorie} setCat={setCat} />
              </Col>
            </>
            :
            <>
              <Col md={0}>
                <Button variant="success" onClick={() => setIsOpen(true)}>
                  Panier
                </Button>
              </Col>
              <Col md={12}>
                <ShoppingList cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} categorie={categorie} setCat={setCat} />
              </Col>
            </>
          }
        </Row>
      </Container>
      <Footer />
    </div>
  );
};