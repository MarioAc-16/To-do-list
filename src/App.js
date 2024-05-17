import logo from './logo.svg';
import './App.scss';
import Item from './Componentes/Item/Item';
import Menu from './Componentes/Menu/Menu';
import Formulario from './Componentes/Form/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

function App() {
const todos = useSelector ((state)=>state.todos.value);
  return (
    <div className="App">
      <Container>
      <Menu></Menu>
      <Row>
        <Col>
          <Formulario></Formulario>
        </Col>
        <Col >
        <Row>
        <div className='scrolling'>
          {todos.map((tarea, index) => (
              <Item name={tarea.name} description={tarea.description} dueDate={tarea.dueDate}></Item>
          ))}
          </div>
          </Row>
        </Col>
      </Row>      </Container>
    </div>
  );
}

export default App;
