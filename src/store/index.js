import {
  compose,
  createStore,
} from 'redux';

import reducers from '../reducers';

// If you have a Redux extesion for Chrome.
const enhacers = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f
);

export default createStore(
  reducers,
  compose(
    enhacers,
  ),
);
