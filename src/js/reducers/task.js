// actionsのtypeをもとに処理を分ける
// storeのstateを更新する

import _ from 'lodash';

//actionsからstateが渡ってこなかった場合の初期値の設定
const initialState = {
  todos: [{
    id: '01',
    content: 'Initial Task',
    isDone: false
  }],
  searchWord: ''
};

//actionから渡ってきた値を適用する
//reducer名(task)がstateの名前になる
export default function task(state = initialState, action){
  // typeによって処理を分ける
  switch(action.type){
    case 'ADD':
      return {
        todos: [
          ...state.todos,//既存のtodosの中身全てを展開
          {
            id: action.id,
            content: action.content,
            isDone: false
          }
        ]
      };
    case 'DELETE':
      // 第二引数と第三引数を結合して、第一引数に代入
      if(action.isDone === true) {
        return Object.assign({}, state, {
          todos: _.reject(state.todos, {'id': action.id})
        });
      }else{
        return Object.assign({}, state)
      }
    case 'UPDATE':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              content: action.content
            })
          }
          return todo
        })
      });
    case 'TOGGLE DONE':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if(todo.id === action.id){
            return Object.assign({}, todo, {
              isDone: !todo.isDone
            })
          }
          return todo
        })
      });
    case 'SEARCH':
      return Object.assign({}, state, {'searchWord': action.searchWord});
    default:
      return state;
  }
}