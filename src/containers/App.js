import React, { Component } from 'react';
import { connect } from 'react-redux';

// library
import Buttons from '../components/Buttons';
import TodoCardListContainer from './TodoCardListContainer';

import * as actions from '../actions';


class App extends Component {
  render() {
    const { onCreate, onRemove, onUpdate, onComplete  } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">to-do</h1>
        </header>
        <div>
          <Buttons 
            onCreate={onCreate}
            onRemove={onRemove}
            onUpdate={onUpdate}
            onComplete={onComplete}
          />
        </div>
      </div>
    );
  }
}

const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch(actions.create()),
  onRemove: () => dispatch(actions.remove()),
  onUpdate: () => dispatch(actions.update()),
  onComplete: () => dispatch(actions.complete())
});

export default connect(null, mapToDispatch)(App);
