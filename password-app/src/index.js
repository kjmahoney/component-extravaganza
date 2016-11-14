import React from 'react';
import ReactDOM from 'react-dom';
import Form from './App';

const form = {
  email: "kevin@mail.com",
  password: "pass",
  validation: "pass2"
}


ReactDOM.render(
  <Form/>,
  document.getElementById('root')
);
