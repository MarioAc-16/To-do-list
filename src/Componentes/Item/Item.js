import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Text className='fw-bold'>Nombre:</Card.Text>
        <Card.Text>Realizar  proyecto</Card.Text>
        <Card.Text className='fw-bold'>Descripción:</Card.Text>
        <Card.Text>
          Elaborar proyecto del curso de Desarrollo de Aplicaciones Web
        </Card.Text>
        <Card.Text className='fw-bold'>Fecha de vencimiento:</Card.Text>
        <Button variant="info">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;