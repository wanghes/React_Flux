import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreaters from '../actions/postAction';

class Posts extends React.Component {
  renderHtml(posts){
    if(posts.length==0){
      return (<h3>还没有数据</h3>)
    }
    return posts.map(item=>{
      return (
          <div key={item.id}>
            <h4>{item.direction}</h4>
            <div>{item.time_area}</div>
            <div>{item.mating_system}</div>
            <div>{item.status}</div>
            <div>{item.times}</div>
          </div>
        )
    })
  }
  render() {
    const { posts, getPostsAction } = this.props;
    return (
      <div>
        <button onClick={() => getPostsAction(1)}>getAll</button>
        <br />
        {this.renderHtml(posts)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  let boundActionCreators = bindActionCreators(actionCreaters, dispatch)
  return boundActionCreators;
}

const CounterWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

export default CounterWrap;