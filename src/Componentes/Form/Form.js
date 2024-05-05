import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.scss'

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold'>Nombre</Form.Label>
        <Form.Control type="text" placeholder=" " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold'>Descripción</Form.Label>
        <Form.Control type="text" placeholder=" " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold'>Fecha de vencimiento</Form.Label>
        <Form.Control type="date" placeholder=" " />
      </Form.Group>
      <Button variant="info" type="submit">
        Agregar meta
      </Button>
    </Form>
  );
}

export default Formulario;