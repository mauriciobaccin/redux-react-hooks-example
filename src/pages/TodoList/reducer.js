import {
  ADD_TODO,
  CHANGE_STATUS,
  REMOVE_TODO,
} from './actions';

import {
  findAndUpdateArray,
  removeFromArray,
} from '../../utils/Parsers';

const initialState = { 
  list: [
    {
      id: 1,
      name: 'node',
      status: false,
    },
    {
      id: 2,
      name: 'react',
      status: false,
    },
    {
      id: 3,
      name: 'angular',
      status: false,
    },
    {
      id: 4,
      name: 'html',
      status: true,
    },
  ],
};

export default (state = initialState, action) => {
  const {
    payload,
    type,
  } = action;

  switch (type) {
    case ADD_TODO:
      return {
        list: [
          ...state.list,
          payload,
        ]
      };

    case CHANGE_STATUS:
      return {
        list: findAndUpdateArray(state.list, payload),
      };

    case REMOVE_TODO:
      return {
        list: removeFromArray(state.list, payload),
      };

    default:
      return state;
  }
};

