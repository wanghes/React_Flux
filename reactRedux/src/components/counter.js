import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreaters from '../actions/counterAction';

class Counter extends React.Component {
  render() {
    const { value, increaseAction } = this.props;
    return (
      <div>
        <span>{value}</span><br/>
        <button onClick={increaseAction}>Increase</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.counter.count
  }
}

function mapDispatchToProps(dispatch) {
  let boundActionCreators = bindActionCreators(actionCreaters, dispatch)
  return boundActionCreators;
}

const CounterWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterWrap;