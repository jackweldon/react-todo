import React,{Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from 'reactstrap';

class TodoForm extends Component{
    
    
    constructor(props) {
        super(props);

        this.state = {item: ''};
    }
    
    render(){
        return (
            <div className="form-container">
                <h3> Create a new todo item here</h3>
            <InputGroup>
            <Input placeholder="Get a contract"
                    onChange={event => this.setState({item: event.target.value})}
                    value={this.state.item}/>
            </InputGroup> 
            <Button color="primary" 
                onClick={event => this.onInputSaved()}>
                Add
          </Button>  
        </div>
    )}; 

    onInputSaved()
    {
        this.props.onAddTodo(this.state.item);
    }
}

export default TodoForm;