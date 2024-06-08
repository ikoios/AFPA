import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React from "react";

export default function Footer() {
  const [inputValue, setInputValue] = useState("");
  //
  function handleInput(e) {
    setInputValue(e.target.value);
  }
  //
  function handleBlur(e) {
    if (!inputValue.includes("@")) {
      alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide`);
    }
  }
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "15rem", borderTop:'solid 2px' }}
    >
      <Container className="text-center">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </Container>
      <InputGroup style={{width:'20rem'}} className="pt-2">
        <Form.Control
          placeholder="Laissez-nous votre mail"
          aria-label="UserMail"
          onChange={handleInput}
          value={inputValue}
          onBlur={handleBlur}
        />
      </InputGroup>
      <Container className="d-flex justify-content-center pt-1">
        <Button variant="success">Valider</Button>
      </Container>
    </div>
  );
}
