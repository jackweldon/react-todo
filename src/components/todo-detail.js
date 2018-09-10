import React,{Component} from 'react';
import {  ListGroupItem } from 'reactstrap';

class TodoForm extends Component{    
    
    constructor(props) {
        super(props);
    }
    
      render(){  
          return (<div onClick={() => this.props.onToDeleted(this.props.todo)}>
           <ListGroupItem>{this.props.todo.text} <span><i className="fa fa-times-circle"></i></span></ListGroupItem>
        </div>
        );}    
}

export default TodoForm;