import * as types from './ActionTypes';

export const create = () => ({
    type: types.CREATE,
});

export const update = (content) => ({
    type: types.UPDATE
});

export const remove = () => ({
    type: types.REMOVE
});

export const complete = () => ({
    type: types.COMPLETE
});
