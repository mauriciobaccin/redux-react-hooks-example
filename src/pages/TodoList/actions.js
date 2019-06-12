import {
  createAction,
} from 'redux-actions';
import {
  useDispatch,
} from 'react-redux';
import uuidv4 from 'uuid/v4';

const CONTEXT = '@TODO';

export const ADD_TODO = `${CONTEXT}/ADD_TODO`;
const addTodoAction = createAction(ADD_TODO);

export const UPDATE_TODO = `${CONTEXT}/UPDATE_TODO`;
const updateTodoAction = createAction(UPDATE_TODO);

export const REMOVE_TODO = `${CONTEXT}/REMOVE_TODO`;
const removeTodoTodoAction = createAction(REMOVE_TODO);

function addTodo(dispatch) {
  dispatch(addTodoAction({
    id: uuidv4(),
    name: '',
    status: false,
  }));
};

function updateTodo(dispatch, todo) {
  dispatch(updateTodoAction(todo));
};

function removeTodo(dispatch, todo) {
  dispatch(removeTodoTodoAction(todo));
};

export function useActions() {
  const dispatch = useDispatch();

  return {
    handleAddTodo: () => addTodo(dispatch),
    handleUpdateTodo: todo => updateTodo(dispatch, todo),
    handleRemoveTodo: todo => removeTodo(dispatch, todo),
  }
};
