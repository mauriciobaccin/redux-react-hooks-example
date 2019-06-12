import {
  useSelector,
} from 'react-redux';
import {
  useTranslation,
} from 'react-i18next';

import {
  useActions,
} from './actions';

function useStore() {
  const todoList = useSelector(({
    todoList: {
      list,
    },
  }) => list);

  const dispatchers = useActions();

  return [
    todoList,
    dispatchers,
  ];
}

function useTranslates() {
  const { t } = useTranslation('pages');

  return {
    addTodo: t('TodoList.addTodo'),
    pageTitle: t('TodoList.pageTitle'),
  };
}

export {
  useStore,
  useTranslates,
}