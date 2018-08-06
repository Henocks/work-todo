import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({todoCards}) => {
	
	const todoCardList = todoCards.map(
		(todoCard, id) => (
			<TodoCard
				key={id}
				id={id}
				{...todoCard}
			/>
		)
	);

	return (
		<main className="TodoListViewer">
			<div style={{ width: '80%', height: '1000px', display: 'inline-block', float: 'left', border: '1px solid black', margin: '5%', padding: '5%' }}>
				<h2>TodoListViewer</h2>
				<div className="TodoCards">
					{todoCardList}
				</div>
			</div>
		</main>
	);
}

export default TodoCardList;