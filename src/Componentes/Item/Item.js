import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import {
  removeTodo
} from '../../reducers/todoSlice';
import {
  removeGoal
} from '../../reducers/goalSlice';

import { useSelector, useDispatch } from 'react-redux';

function Item(props) {
  const dispatch = useDispatch();
  const option = useSelector ((state)=>state.option.value);
  const removeItem = (e) => {
    e.preventDefault();
    if (option === 'tasks'){
      dispatch(removeTodo(props.id));
    }else{
      dispatch(removeGoal(props.id));
    }
  }


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Text className='fw-bold'>Nombre:</Card.Text>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text className='fw-bold'>Descripción:</Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text className='fw-bold'>Fecha de vencimiento:</Card.Text>
        <Card.Text>{props.dueDate}</Card.Text>
        <Button variant="info" onClick={removeItem}>Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;