import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content, //タスク内容
      isEdit: false //編集モード
    };
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleClickIsEdit = this.handleClickIsEdit.bind(this);
    this.handleCloseEdit = this.handleCloseEdit.bind(this);
  }
  handleChangeContent(e){
    this.setState({
      content: e.target.value
    });
  }
  handleClickIsEdit() {
    this.setState({
      isEdit: true
    });
  }
  handleCloseEdit(e) {
    if(e.keyCode === 13 && e.shiftKey === true){
      this.setState({
        content: e.currentTarget.value,
        isEdit: false
      });
      this.props.onKeyupUpdateTask(e.currentTarget.value);
    }
  }

  render() {
    //TodoListからpropsで渡ってきたメソッドを展開
    const {onClickToggleDone, onClickDelete} = this.props;
    //付け替え用class名を変数に格納
    const classNameLi = ClassNames({
      'list__item': true,
      'list__item--done': this.props.isDone
    });
    const classNameIcon = ClassNames({
      'fa': true,
      'fa-circle-thin': !this.props.isDone,
      'fa-check-circle': this.props.isDone,
      'icon-check': true
    });
    // 編集モードかどうか
    const task = (this.state.isEdit) ?
      <input type="text" className="list__item--edit" 
             value={this.state.content}
             onChange={this.handleChangeContent} 
             onKeyUp={this.handleCloseEdit} /> :
      <span onClick={this.handleClickIsEdit}>{this.state.content}</span>;

    return (
      <li className={classNameLi}>
        <i className={classNameIcon} onClick={onClickToggleDone} aria-hidden="true" />
        {task}
        <i className="fa fa-trash icon-trash" onClick={onClickDelete} aria-hidden="true" />
      </li>
    );
  }
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onKeyupUpdateTask: PropTypes.func.isRequired,
  onClickToggleDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

// diapatchしないためconnectは必要ない
export default Task;