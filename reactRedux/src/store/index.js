import {createStore,applyMiddleware} from "redux";
import reducers from "../reducers/counterReducer";
import thunkMiddleware from 'redux-thunk';

let obj ={a:1,b:2};
console.log(Object.assign({},obj,{a:3}));
console.log({ ...obj, a:4 });
console.log(obj)

let arr = [1,2,3];
console.log([...arr,4,4,5,1,56]);


const store = applyMiddleware(
  thunkMiddleware
)(createStore)(reducers);

export default store;