import { Button, Container, Form } from "react-bootstrap";

const FormAccount = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Form className="d-flex flex-column w-25">
        <Form.Group>
          <Form.Label>Nom:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Prénom:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mot de pass:</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirmation du mot de pass:</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button>Enregistrer</Button>
      </Form>
    </Container>
  );
};

export default FormAccount;
