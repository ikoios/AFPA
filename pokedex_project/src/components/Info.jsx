import React from "react";
import { useState } from "react";
import { Container, Modal } from "react-bootstrap";
//
export default function Info({ poke, show, setShow }) {
  const handleClose = () => setShow(!false);
  //
  const type = poke.apiTypes;
  console.log(type);
  //
  return (
    <>
      <Modal
        key={poke.id}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          className="d-flex justify-content-center flex-wrap"
        >
          <Container className=" d-flex justify-content-center">
            <img src={poke.image} alt="" className="w-75" />
          </Container>
          <Modal.Title>
            #{poke.pokedexId} {poke.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Container>
            {type.map((types) => (
              <div key={types.id} className="border-bottom">
                <h3 key={types.id} className="mt-2">{types.name}</h3>
                <img key={type.id} src={types.image} alt="" className="w-25" />
              </div>
            ))}
          </Container>
          <h5 className="pt-4">
            HP: {poke.stats.HP} | Atk: {poke.stats.attack} | Def:{" "}
            {poke.stats.defense}{" "}
          </h5>
          <h5>
            SpeAtk: {poke.stats.special_attack} | SpeDef:{" "}
            {poke.stats.special_defense} | Speed: {poke.stats.speed}
          </h5>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
