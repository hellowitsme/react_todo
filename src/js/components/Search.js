import React from 'react';
import {connect} from 'react-redux';
import {searchWord} from '../actions';
import PropTypes from 'prop-types'; // データの型を指定する



class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      val: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      val: e.target.value
    });
    this.props.dispatch(searchWord(e.target.value));
  }
  render() {
    return (
      <div className="search__area">
        <i className="fa fa-search search__area--icon" aria-hidden="true" />
        <input type="text" className="search__area--input" onChange={this.handleChange}
              value={this.state.val} placeholder="検索したいタスク名を入力してください" />
      </div>
    );
  }
}
// PropTypesでdispatchを関数の型で必ず受け取るように指定
Search.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Search)