import * as TYPE from '../constants/ActionTypes';

export function getLists() {
	return {
		type: TYPE.GET_LISTS
	}
}

export function addList(item) {
	return {
		type: TYPE.ADD_LIST,
		payload: item
	}
}