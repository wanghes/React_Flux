import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from "react-router";


const ACTIVE = {color:"green"};
const Container = (props) =>{
    return (<div>
    <h1>Application</h1>
    <ul>
      <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
      <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>
      <li><Link      to="/counter"      activeStyle={ACTIVE}>/Counter</Link></li>
      <li><Link      to="/posts"      activeStyle={ACTIVE}>/posts</Link></li>
      <li><Link      to="/users"      activeStyle={ACTIVE}>/users</Link></li>
      <li><IndexLink to="/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

      <li><Link      to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
      <li><Link      to={{ pathname: '/users/wang_hes', query: { foo: 'bar' } }}
                                      activeStyle={ACTIVE}>/users/wang_hes?foo=bar</Link></li>

      <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
    </ul>

    {props.children}
  </div>)
}

export default Container;