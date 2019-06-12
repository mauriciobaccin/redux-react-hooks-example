import React, {
  Suspense,  
} from 'react';
import {
  Provider,
} from 'react-redux';

import TodoList from './pages/TodoList';

import store from './store';

import './assets/styles/Main.scss';

function App() {
  return (
    <Suspense fallback={<div className="Loading" />}>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </Suspense>
  );
}

export default App;
