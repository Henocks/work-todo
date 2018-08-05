import React, { Component } from 'react';
// library
import TodoList from './components/TodoList';
import TodoCard from './components/TodoCard';

import './App.css';

class App extends Component {
  count = 0;

  state = {
    cards: []
  }

  createCard = () => {
    const { cards } = this.state;
   
    this.setState({
      cards: cards.concat({
        id: this.count,
        isFinished: 0,
        todoContent: document.getElementById('todoContent').value
      })
    });

    this.count++;
  }

  readCard = () => {
    const { cards } = this.state;
    
    document.getElementById('todoContent').value = cards[cards.findIndex(TodoCard => TodoCard.id === Number(document.getElementById('todoId').value))].todoContent;
  }

  updateCard = () => {
    const { cards } = this.state;
  
    cards[cards.findIndex(TodoCard => TodoCard.id === Number(document.getElementById('todoId').value))].todoContent = document.getElementById('todoContent').value
  }

  deleteCard = () => {
    var id = Number(document.getElementById('todoId').value);
    console.log(id);
    const { cards } = this.state;
    this.setState({
      cards: cards.filter(TodoCard => TodoCard.id !== id)
    });
  }

  finishCard = () => {
    const { cards } = this.state;
    cards[
      cards.findIndex(
        TodoCard => TodoCard.id === Number(document.getElementById('todoId').value)
      )].isFinished = 1;
    this.setState({
    });
  }


  render() {
    const { input, cards } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">to-do</h1>
        </header>
        <div>
          <TodoList Cards={cards} />

          <main className='TodoManager'>
                <div style={{width:'30%', height:'300px', display:'inline-block', float:'left', border:'1px solid black', margin:'50px'}}>
                    <h2>TodoManager</h2>
                    ID<input id={"todoId"}></input>
                    <br />
                    Content<input id={"todoContent"}></input>
                </div>
                <button onClick={this.createCard}>Create Todo</button>
                <button onClick={this.readCard}>Read Todo</button>
                <button onClick={this.updateCard}>Update Todo</button>
                <button onClick={this.deleteCard}>Delete Todo</button>
                <button onClick={this.finishCard}>Finish Todo</button>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
