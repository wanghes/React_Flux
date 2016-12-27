import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from "react-router";
import { Provider, connect } from 'react-redux';
import {Container,Counter,Posts} from "../components";
import store from "../store";


const Home = ()=>(
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




const App = ()=>(
    <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={Container}>
            <IndexRoute component={Home} />
            <Route path="about" component={About}/>
            <Route path="counter" component={Counter} />
            <Route path="Posts" component={Posts} />
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