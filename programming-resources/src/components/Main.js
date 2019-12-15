// =============================
// DEPENDENCIES
// =============================

// Packages
import React from 'react';

// Components
import Submission from './Submission.js'
import Form from './Form.js'

// =============================
// LINK TO CONNECT TO API
// =============================

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8888'
} else {
  console.log('this is for heroku');
}

class Main extends React.Component {
  render() {
    return (
      <div>
          <Submission />
          <Form />
      </div>
    )
  }
}


export default Main;