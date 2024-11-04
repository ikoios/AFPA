import { Nav, Button, Form, CloseButton } from "react-bootstrap";
import FormAccount from "../FormAccount";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen
    ? <Nav className="d-flex align-items-start top-0">
        <CloseButton onClick={() => setIsOpen(false)} />
        <FormAccount />
      </Nav>
    : <Nav>
        <Button onClick={() => setIsOpen(true)}>Compte</Button>
      </Nav>;
};

export default NavBar;
