import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class TodoList extends React.Component {

  constructor(props){
    super(props);
  }
  
  render() {
    // containersから受け取ったpropsを展開
    const {todos, onClickToggleDone, onClickDelete, onKeyupUpdateTask} = this.props;
    // タスク格納用配列
    let tasks = [];
    for(let i in todos){
      tasks.push(<Task key={todos[i].id} 
                       {...todos[i]} //既存のTaskを展開して渡す
                       onClickToggleDone={() => onClickToggleDone(todos[i].id)}
                       onClickDelete={() => onClickDelete(todos[i].id, todos[i].isDone)}
                       onKeyupUpdateTask={(content) => onKeyupUpdateTask(todos[i].id, content)}
                    />);
    }
    
    return (
      <ul className="list js-todo_list">
        {tasks}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClickToggleDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onKeyupUpdateTask: PropTypes.func.isRequired
};
//containerでimportするためconnectは必要ない
export default TodoList;