import {
  ADD_TODO,
  CHANGE_STATUS,
  REMOVE_TODO,
} from './actions';

import {
  findAndUpdateArray,
  removeFromArray,
} from '../../utils/parsers';

import initialState from './_initialState.json';

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

