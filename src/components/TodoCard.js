import React from 'react';

class TodoCard extends React.Component {
    render() {
        const { id, isFinished, todoContent } = this.props;

        return(
            <main className = "TodoCard" style = {{border:'1px solid black', margin:'10px'}}>
                <div className = "TodoContent">
                <br />
                    {'To-Do content : ' + this.props.todoContent}
                    <br />
                    {((this.props.isFinished==1) ? 'Completed' : 'Not Completed')+' // ID : '+ this.props.id}
                    <br />
                <br />
                </div>
            </main>
        );
    };
};

export default TodoCard;