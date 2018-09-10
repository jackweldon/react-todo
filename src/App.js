import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

 import './App.css';

class App extends Component {  
    
  defaultData =
  [
    { text: "Go food shopping", id: 1  },
    { text: "Go clothes shopping", id: 2  },
    { text: "Eat food", id: 3  }
  ];

  constructor(props) {
    super(props);

    this.state = {
      todos: this.defaultData
    }; 
}
  
addTodo(todo){ 
  let id = this.state.todos.length + 1; 
  let item = { text: todo, id}
  this.setState({todos:[...this.state.todos, item]});
}

deleteTodo(e) {
  let array = [...this.state.todos];  
   let index = array.indexOf(e)
  array.splice(index, 1);
  this.setState({todos: array});
}

  render(){
      return (
      <div className="App">
        <h1>Todo</h1>
        <div className="container">   
        <div className="row">
          <div className="col-12 col-sm-6">
          <TodoList todos={this.state.todos} onToDeleted={selectedTodo => this.deleteTodo(selectedTodo)}/>
          </div>
          <div className="col-12 col-sm-6">
                <TodoForm onAddTodo={todo => this.addTodo(todo)}/>
          </div>
        </div>     
        </div>
      </div>
    );
  }  
}

ReactDOM.render(<App/>, document.querySelector('#root'));

export default App;
