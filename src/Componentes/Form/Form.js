import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.scss'
import {
  addTodo
} from '../../reducers/todoSlice';

import {
  addGoal
} from '../../reducers/goalSlice';

import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';

function Formulario() {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate= useRef();

  const dispatch = useDispatch();

  const option = useSelector ((state)=>state.option.value);
  const addItem = (e) => {
    e.preventDefault();
    if (option === "tasks"){
    dispatch(addTodo({'name':inputRefName.current.value, 'description':inputRefDescription.current.value, 'dueDate':inputRefDueDate.current.value}))
    } else {
      dispatch(addGoal({'name':inputRefName.current.value, 'description':inputRefDescription.current.value, 'dueDate':inputRefDueDate.current.value}))
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold'>Nombre</Form.Label>
        <Form.Control type="text" placeholder=" " ref={inputRefName} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold'>Descripción</Form.Label>
        <Form.Control type="text" placeholder=" " ref={inputRefDescription}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold'>Fecha de vencimiento</Form.Label>
        <Form.Control type="date" placeholder=" " ref={inputRefDueDate}/>
      </Form.Group>
      <Button variant="info" type="submit" onClick={addItem}>
        Agregar
      </Button>
    </Form>
  );                
}

export default Formulario;