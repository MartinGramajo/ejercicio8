import { Col, Form, Row, Button, Container } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function FormContacto() {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity()) {
      e.stopPropagation();
      Swal.fire({
        icon: "success",
        title: "datos enviados",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false);
    } else {
      setValidated(true);
      Swal.fire({
        icon: "error",
        title: "No se pudo enviar el mensaje. Completar todos los datos",
      });
    }
  };

  return (
    <Container>
      <Form
        ref={form}
        noValidate
        validated={validated}
        onSubmit={sendEmail}
        className="mx-auto  my-5 pt-4 card  bg-form"
      >
        <div>
          <div className="card-body">
            <Row className="my-2 ">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="ms-4">Nombre</Form.Label>
                <Form.Control className="mb-2" type="text" required />
                <Form.Control.Feedback className="ms-1" type="invalid">
                  Ingrese su nombre completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="my-2 ">
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label className="ms-4">Apellido</Form.Label>
                <Form.Control className="mb-2" type="text" required />
                <Form.Control.Feedback className="ms-1" type="invalid">
                  Ingrese su Apellido por favor.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom05">
                <Form.Label className="ms-4">DNI</Form.Label>
                <Form.Control className="mb-2" type="number" required />
                <Form.Control.Feedback className="ms-1" type="invalid">
                  Ingrese su DNI por favor.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationCustom06">
                <Form.Label className="ms-4">Email</Form.Label>
                <Form.Control className="mb-2" type="email" required />
                <Form.Control.Feedback className="ms-1" type="invalid">
                  Ingrese su Email por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Button className="my-3" variant="success" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
