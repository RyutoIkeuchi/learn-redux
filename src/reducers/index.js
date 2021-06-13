import { combineReducers } from "redux";
import { ADD_TASK, DELETE_TASK } from '../actions';

const tasks = (state = [], action) => {
	switch (action.type) {
		case ADD_TASK:
      return [...state, { id: action.id, text: action.text }];
    case DELETE_TASK:
      return state.filter(task=>task.id!==action.id)
		default:
			return state;
	}
};

const todoApp = combineReducers({ tasks })

export default todoApp