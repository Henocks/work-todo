import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다.
const initialState = {
    todoCards: [
        {
            id : 0,
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

    switch(action.type) {
        case types.CREATE:
            console.log("type:CREATE");
            return {
                todoCards: [
                    ...todoCards,
                    {
                        id : 1,
                        isFinished: 0,
                        todoContent: "HELLO"
                    }
                ]
            };
        case types.REMOVE:
            return {
                todoCards: todoCards.slice(0, todoCards.length - 1)
            };
        case types.UPDATE:
            return{
                todoCards: [
                    ...todoCards.slice(0, action.index),
                    {
                        ...todoCards[action.index],
                        todoContent: "UPDATED"
                    },
                    ...todoCards.slice(action.index + 1, todoCards.length)
                ]
            };
        case types.COMPLETE:
            return{
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