import React,{Component} from 'react';
import { ListGroup } from 'reactstrap';
import TodoDetail from './todo-detail';

const TodoList = (props) =>
{
    const items = props.todos.map((item) => {
        return <TodoDetail key={item.id} todo={item} onToDeleted={props.onToDeleted}/>
    })

    return (
        <div> 
            <ListGroup>
            {items}
            </ListGroup>
        </div>
        );
}

export default TodoList;