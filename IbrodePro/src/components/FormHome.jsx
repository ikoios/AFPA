import * as formik from "formik";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import ButtonList from "./ButtonList";
import "../css/formHome.css";

const FormHome = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required("Prénom requis"),
    lastName: yup.string().required("Nom requis"),
    phone: yup.string().required("Téléphone requis"),
    email: yup.string().required("Email requis"),
    message: yup.string().required("Message requis"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        message: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className="">
          <div className="divNames">
            <Form.Group controlId="validationFormik01" className="w-50 me-1">
              <Form.Label>Nom*</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik02" className="w-50 ms-1">
              <Form.Label>Prénom*</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <Form.Group controlId="validationFormik03" className="mb-4">
            <Form.Label>Téléphone*</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationFormik04" className="mb-4">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationFormik05">
            <Form.Label>Message*</Form.Label>
            <p>
              Détaillez votre demande : Quel type de vêtements, quel type de
              marquage, quels sont vos besoins, la quantitée etc...
            </p>
            <Form.Control
              as="textarea"
              name="message"
              value={values.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback>{errors.message}</Form.Control.Feedback>
          </Form.Group>
          <div className="divButton">
            <Button type="submit">Envoyer</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormHome;
