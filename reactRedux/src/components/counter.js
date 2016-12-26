import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as couterActionCreaters from '../actions/couterActionCreaters';

class Counter extends React.Component {
  render() {
    const { value, increaseAction } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={increaseAction}>Increase</button>
      </div>
    )
  }
}
// Action Creator


function mapStateToProps(state) {
  console.log(state);
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  let boundActionCreators = bindActionCreators(couterActionCreaters, dispatch)
  return boundActionCreators;
}


const CounterWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);



export default CounterWrap;