export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

let todoId = 0;

export const addTask = (text) => {
	return {
    type: ADD_TASK,
    id:todoId++,
		text,
	};
};

export const deleteTask = (id) => {
	return {
    type: DELETE_TASK,
    id,
	};
};
