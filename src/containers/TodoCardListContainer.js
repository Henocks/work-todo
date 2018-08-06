import { connect } from 'react-redux';

import TodoCardList from '../components/TodoCardList';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    todoCardList: state.todoCardList
})

const mapDispatchToProps = (dispatch) => ({
    onUpdate: (index) => dispatch(actions.update(index))
})

const TodoCardListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoCardList);

export default TodoCardListContainer;