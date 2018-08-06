import React from 'react';
import PropTypes from 'prop-types';

import './TodoCard.css';


class TodoCard extends React.Component {
    render() {
        const { id, isFinished, todoContent } = this.props;

        return(
          <div className = "TodoCard" style = {{width:'94%', border:'1px solid black', margin:'3%'}}>
            <div>
            	<br />
                {'To-Do content : ' + this.props.todoContent}
                <br />
                {((this.props.isFinished==1) ? 'Completed' : 'Not Completed')+' // ID : '+ this.props.id}
                <br />
            	<br />
            </div>
        	</div>
        );
    };
};

export default TodoCard;