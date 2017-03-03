import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
export default function container(props){
    return(
        <div>
        <div><h1>Container</h1>
        <Link to="/books">books</Link>
        </div>
        {props.children}
        </div>
    )
}

