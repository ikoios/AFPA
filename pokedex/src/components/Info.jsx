import React from "react";
import { useState } from "react";
import { Container, Modal } from "react-bootstrap";
//
export default function Info({ poke, show, setShow }) {
  const handleClose = () => setShow(!false);
  //
  const type = poke.apiTypes;
  //
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="w-100"
      >
        <Modal.Header
          key={poke.id}
          className="d-flex justify-content-center flex-wrap"
        >
          <Container className="border d-flex justify-content-center">
            <img src={poke.image} alt="" />
          </Container>
          <Modal.Title>
            #{poke.pokedexId} {poke.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Container>
            {type.map((types) => (
              <span>

                {types.name}
                <img src={types.image} alt="" />
              </span>
            ))}
          </Container>
          HP:{poke.stats.HP} Atk:{poke.stats.attack} Def:{poke.stats.defense}{" "}
          SpeAtk:{poke.stats.special_attack} SpeDef:{poke.stats.special_defense}{" "}
          Speed:{poke.stats.speed}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
