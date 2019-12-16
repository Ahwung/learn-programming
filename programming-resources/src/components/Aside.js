import React from 'react';

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside-container">
        <h1> NAVIGATION </h1>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>HOME</li>
          <li onClick={() => {this.props.handleView('addSubmission')}}>NEW RESOURCE</li>
          <li> CODE SNIPPETS </li>
          <li> NEW CODE SNIPPET </li>
        </ul>
      </aside>
    )
  }
}


export default Aside;
