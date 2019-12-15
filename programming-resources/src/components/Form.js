import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title"></input>
        <label htmlFor="tool">Tool: </label>
        <input type="text" id="tool"></input>
        <label htmlFor="description">Description: </label>
        <input type="text" id="description"></input>
        <label htmlFor="url">URL: </label>
        <input type="text" id="url"></input>
        <label htmlFor="cost">Cost: </label>
        <input type="number" id="cost"></input>
      </form>
    )
  }
}


export default Form;