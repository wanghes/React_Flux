import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {

    const { value, onIncreaseClick } = this.props

    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}
// Action Creator
const increaseAction = { type: 'increase' }

function mapStateToProps(state) {
    console.log(state);
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}


const CounterWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);


export default CounterWrap;