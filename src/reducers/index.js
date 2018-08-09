import * as types from '../actions/ActionTypes';

const initialState = {
  counter: 0,
  todoCards: [
    {
      id: 0,
      isFinished: 0,
      todoContent: "CARD_INIT"
    }
  ]
}

function todoCard(state = initialState, action) {
  const { todoCards } = state;

  console.log("reducer worked!");
  console.log(action);
  console.log(action.type);

  switch (action.type) {
    case types.CREATE:
      return {
        counter: state.counter + 1,
        todoCards: [
          ...todoCards,
          {
            id: state.counter + 1,
            isFinished: 0,
            todoContent: action.content
          }
        ]
      };

    case types.REMOVE:
      console.log('remove : ' + action.index);
      return {
        counter: state.counter,
        todoCards: [
          ...todoCards.filter(todoCards => todoCards.id !== action.index)
        ]
      };


    case types.UPDATE:
      console.log('update : ' + action.index);
      return {
        counter: state.counter,
        todoCards: [
          ...todoCards.slice(0, action.index),
          {
            ...todoCards[action.index],
            todoContent: action.content
          },
          ...todoCards.slice(action.index + 1, todoCards.length)
        ]
      };

    case types.COMPLETE:
      console.log('complete : ' + action.index);
      return {
        counter: state.counter,
        todoCards: [
          ...todoCards.slice(0, action.index),
          {
            ...todoCards[action.index],
            isFinished: 1
          },
          ...todoCards.slice(action.index + 1, todoCards.length)
        ]
      };

    default:
      console.log("DEFAULT");
      return state;
  }
}

export default todoCard;