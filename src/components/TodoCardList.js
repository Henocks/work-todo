import React from 'react';
import TodoCard from './TodoCard';

class TodoCardList extends React.Component{
   render(){
       const {Cards} = this.props;
       const cardList = Cards.map(
           ({id, isFinished, todoContent}) => (
               <TodoCard
                key={id}
                id={id}
                isFinished={isFinished}
                todoContent={todoContent}
                />
           )
       );

       return(
            <main className = "TodoListViewer">
                <div style={{width:'55%', height:'1000px', display:'inline-block', float:'left', border:'1px solid black', margin:'50px'}}>
                    <h2>TodoListViewer</h2>
                    <div className = "TodoCards">
                        {cardList}
                    </div>
                </div>
            </main>
       );
   };
};

export default TodoCardList;