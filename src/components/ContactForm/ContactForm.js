import {Form, Button, Row, Col} from "react-bootstrap";
import './ContactForm.css';
//import bgImage from './video/video.mp4';

const ContactForm = () => {
  return (
    <div className="background-contact">
      <div className="contact-portada">
        <div className="contact-portada-text">
          <div className="background-video">
            {/*<video autoPlay loop muted>
              <source src={bgImage} type="video/mp4" />
            </video>*/}
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="Nombre" />
                </Col>
                <Col>
                  <Form.Control placeholder="Apellido" />
                </Col>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tu dirección de email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Por favor dejanos un mensaje de tu interés
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Revisados todos los campos"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="login-button mt-2 mb-2 d-flex center"
                type="submit"
              >
                ENVIAR FORMULARIO
              </Button>
            </Form>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;