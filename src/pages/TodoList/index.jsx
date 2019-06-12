import React from 'react';

import TodoItem from '../../components/TodoItem';

import {
  useStore,
  useTranslates,
} from './hooks';

function TodoList(){
  const {
    addTodo,
    pageTitle,
  } = useTranslates();

  const [
    myTodoList,
    dispatchers,
   ] = useStore();

  const {
    handleAddTodo,
    handleUpdateTodo,
    handleRemoveTodo,
  } = dispatchers;

  function renderTodoItem(todo){
    return(
      <TodoItem
        key={todo.id}
        item={todo}
        onChange={handleUpdateTodo}
        onRemove={handleRemoveTodo}
      />
    );
  }

  return (
    <div className="container">
      <h1>
        {pageTitle}
      </h1>
      <ul>
        {myTodoList.map(renderTodoItem)}
      </ul>

      <button
        onClick={handleAddTodo}
      >
        {addTodo}
      </button>
    </div>
  );
}

export default TodoList;