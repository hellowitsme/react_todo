import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions';
import PropTypes from 'prop-types'; // データの型を指定する

class TodoCreator extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      val: '', //入力内容
      errMsg: '' //エラーチェック用
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.clickAdd = this.clickAdd.bind(this);
  }
  //一意のキーを生成
  createId() {
    return Math.random().toString(36).slice(-16);
  }
  //入力内容をセット
  handleChange(e){
    this.setState({
      val: e.target.value
    });
  }
  //Enter + Shiftキーを押した際のメソッド
  handleKeyUp(e){
    if(e.keyCode === 13 && e.shiftKey === true){
      const val = e.target.value; //入力内容を取得
      //入力内容が空だったらエラーメッセージ格納し、処理を終了する
      if(!val){
        this.setState({
          errMsg: '入力が空です'
        });
        return;
      }
      //入力内容をクリア
      this.setState({ 
        val: '',
        errMsg: ''
      });
      //actionのaddTaskメソッドに、idとcontentを渡す
      this.props.dispatch(addTask(this.createId(), val)); //タスク追加
    }
  }
  // Addボタンを押した際
  clickAdd(e) {
    const val = this.state.val; //入力内容を取得
    //入力内容が空だったらエラーメッセージ格納し、処理を終了する
    if(!val){
      this.setState({
        errMsg: '入力が空です'
      });
      return;
    }
    //入力内容をクリア
    this.setState({ 
      val: '',
      errMsg: ''
    });
    //actionのaddTaskメソッドに、idとcontentを渡す
    this.props.dispatch(addTask(this.createId(), val)); //タスク追加
  }
  render() {
    //エラーメッセージがTrueだった場合、変数に格納
    const errMsg = (this.state.errMsg) ? <span className="error__txt">{this.state.errMsg}</span> : '';
    
    return (
      <div className="todo__create">
        <div className="input__area">
          <input type="text" className="input__txt" placeholder="タスク名を入力してください"
                 value={this.state.val} 
                 onChange={this.handleChange}
                 onKeyUp={this.handleKeyUp}  />
          <button className="input__btn" 
                  onClick={this.clickAdd}>Add</button>
        </div>
        {errMsg}
      </div>
    );
  }
}

// PropTypesでdispatchを関数の型で必ず受け取るように指定
TodoCreator.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(TodoCreator) //reduxの定型文