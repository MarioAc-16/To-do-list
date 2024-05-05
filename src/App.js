import logo from './logo.svg';
import './App.scss';
import Item from './Componentes/Item/Item';
import Menu from './Componentes/Menu/Menu';
import Formulario from './Componentes/Form/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
      <Menu></Menu>
      <Row>
        <Col>
          <Formulario></Formulario>
        </Col>
        <Col>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </Col>
      </Row>
      </Container>
      
      
    </div>
  );
}

export default App;