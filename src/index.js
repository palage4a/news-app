import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then( (records) => {
    return (
      ReactDOM.render(
        <App props={records.slice(0,10)}/>,
        document.getElementById('root')
      )
    )
  })

