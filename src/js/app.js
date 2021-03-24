import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TodoApp from './components/TodoApp';
import reducer from './reducers';

//storeの生成
let store = createStore(reducer);

// Provider（コンポーネント）を作成し、TodoApp及び配下のコンポーネントにstoreをpropsとして渡す
ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);