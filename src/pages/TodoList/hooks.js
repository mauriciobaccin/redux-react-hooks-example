import {
  useSelector,
} from 'react-redux';
import {
  useActions,
} from './actions';

function useStore() {
  const todoList = useSelector(({
    todoList: {
      list,
    },
  }) => list);

  const actions = useActions();

  return [
    todoList,
    actions,
  ];
}

function useTranslates() {
  return ({
    addTodo: "Novo",
    pageTitle: 'Minha lista \'TODO\' :D',
  });
}

export {
  useStore,
  useTranslates,
}