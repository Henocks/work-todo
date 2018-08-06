import React, { Component } from 'react';
import { connect } from 'react-redux';

// library
import Buttons from '../components/Buttons';
import TodoCardListContainer from './TodoCardListContainer';

import * as actions from '../actions';


class App extends Component {
	state = {
		ID: '',
		Content: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { onCreate, onRemove, onUpdate, onComplete } = this.props;

		return (
			<div className="App">
				<header className="App-header">
				</header>
				<div>
					<Buttons
						onCreate={onCreate}
						onRemove={onRemove}
						onUpdate={onUpdate}
						onComplete={onComplete}
					/>
					<input
          	placeholder="ID"
						value = {this.state.inputID}
						onChange = {this.handleChange}
						name="ID"
        	/>
					<input
          	placeholder="Content"
						value = {this.state.inputContent}
						onChange = {this.handleChange}
						name="Content"
					/>
					<TodoCardListContainer />
				</div>
			</div>
		);
	}
}

const mapToDispatch = (dispatch) => ({
	onCreate: () => dispatch(actions.create("asdf")),
	onRemove: () => dispatch(actions.remove(1)),
	onUpdate: () => dispatch(actions.update(3, "updated")),
	onComplete: () => dispatch(actions.complete(2))
});

export default connect(null, mapToDispatch)(App);
