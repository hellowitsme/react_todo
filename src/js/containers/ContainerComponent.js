import {connect} from 'react-redux';
import { toggleDone, deleteTask, updateTask } from '../actions';
import TodoList from '../components/TodoList';

// 検索用メソッド
const searchTasks = function(arr){
  const regexp = new RegExp('^' + this.searchWord, 'i');
  return (arr.content.match(regexp));
};
//検索に引っかかったタスクをstateに詰める
const mapStateToProps = state => {
  return {
    //state.reducer名.プロパティで値を取得
    todos: (state.task.searchWord) ? state.task.todos.filter(searchTasks, state.task) : state.task.todos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickToggleDone: id => {
      dispatch(toggleDone(id));
    },
    onClickDelete: (id, isDone) => {
      dispatch(deleteTask(id, isDone));
    },
    onKeyupUpdateTask: (id, content) => {
      dispatch(updateTask(id, content));
    }
  }
};

//connect(state, action)(渡したいファイル名)
//propsとして値を渡す
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)