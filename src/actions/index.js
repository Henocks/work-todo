import * as types from './ActionTypes';

export const create = (content) => ({
		type: types.CREATE,
		content
});

export const update = (index, content) => ({
		type: types.UPDATE,
		index,
		content
});

export const remove = (index) => ({
		type: types.REMOVE,
		index
});

export const complete = (index) => ({
		type: types.COMPLETE,
		index
});
