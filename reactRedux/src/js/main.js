import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from "react-router";
import { createStore,combineReducers } from 'redux'
import { Provider, connect } from 'react-redux';
import Counter from "../components/counter";
import reducers from "../reducers/counterReducer";


const ACTIVE = {color:"red"};
const Container = (props) =>{
    return (<div>
    <h1>Application</h1>
    <ul>
      <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
      <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>
      <li><Link      to="/counter"      activeStyle={ACTIVE}>/Counter</Link></li>
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
const Index = ()=>(
    <div><h1>Index page</h1></div>
)
const About = ()=>(
    <div><h1>About page</h1></div>
)
const Users = ({ children }) => (
  <div>
    <h2>Users</h2>
    {children}
  </div>
)
const UsersIndex = ()=> (
    <div>
        <h3>UsersIndex</h3>
    </div>
);

const user = (props)=>(
    <div>
        <h3>user: {props.params.id}</h3>
    </div>
);
const UserQuery = (props) => {
  console.log(props);
    return (
      <div>
        <h3>User ： {props.params.id} ： {props.location.query.foo }</h3>
      </div>
    );
}



const store = createStore(reducers);


const App = ()=>(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={Container}>
        <IndexRoute component={Index} />
        <Route path="about" component={About}/>
        <Route path="counter" component={Counter} />
        <Route path="users" component={Users}>
             <IndexRoute component={UsersIndex} />
             <Route path=":id" component={UserQuery} />
             <Route path="/:id?foo=bar" component={UserQuery} />
        </Route>
        </Route>
    </Router>
    </Provider>
);



ReactDOM.render(<App />,document.querySelector('#root'));