import logo from './logo.svg';
import './App.scss';
import Item from './Componentes/Item/Item';
import Menu from './Componentes/Menu/Menu';
import Formulario from './Componentes/Form/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { initAddTodo,
} from './reducers/todoSlice';
import { 
} from './reducers/goalSlice';

function App() {
const todos = useSelector ((state)=>state.todos.value);
const option = useSelector ((state)=>state.option.value);
const goals = useSelector ((state)=> state.goals.value);
const dispatch = useDispatch();

function initFetch(){
  fetch("http://localhost:3001/tasks/getTasks",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"cursodedesarrollodeaplicacionesweb"
      }
    }).then((response)=>{
      return response.json();
    }).then((response)=>{
      response.map((task)=>{
        dispatch((initAddTodo(task)));
    })
    }).catch(err=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    initFetch();
  },[]);

  return (
    <div className="App">
      <Menu/>
      {/*<Todos/>
      <Goals/>*/}
      <Container>
      <Row>
        <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block'><Formulario/></Col>
        <Col xs={0} sm={0}>
        <Row>
        <div className='scrolling'>
          {option==='tasks' &&
          todos.map((tarea, index) => (
              <Item key={index} name={tarea.name} description={tarea.description} dueDate={tarea.dueDate} id={tarea.id}></Item>
          ))
          }
          {option==='goals' &&
          goals.map((meta, index) => (
              <Item key={index} name={meta.name} description={meta.description} dueDate={meta.dueDate} id={meta.id}></Item>
          ))
          }
          </div>
          </Row>
        </Col>
      </Row>      
      </Container>
    </div>
  );
}

export default App;
