import React from 'react';
import Field from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class Form2 extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      description: '',
      id: null
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }
  handleSubmit = (e) => {
    // prevent default form submit action
    e.preventDefault()
    // if the view is currently addPost
    if(this.props.view.page === 'addSnippet') {
      // create a post
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editSnippet') { // else if the view is editPost
      // update the post
      this.props.handleUpdate(this.state)
    }
  }
  componentDidMount() {
    this.setState({
      title: this.props.formInputs2.title,
      description: this.props.formInputs2.description,
      id: this.props.formInputs2.id
    })
  }
  render() {
    return (
      <Field onSubmit={this.handleSubmit}>
        <Field.Group>
          <Field.Label htmlFor="title">Title: </Field.Label>
          <Field.Control type="text" placeholder="add title" id="title" value={this.state.title} onChange={this.handleChange}></Field.Control>
        </Field.Group>
        <Field.Group>
          <Field.Label htmlFor="description">Description: </Field.Label>
          <Field.Control as="textarea" rows="5" id="description" placeholder="add a description" value={this.state.description} onChange={this.handleChange}></Field.Control>
        </Field.Group>
        <Field.Group>
          <Button variant="primary" type="submit" value="submit">Submit</Button> 
        </Field.Group>
      </Field>
    )
  }
}


export default Form2;
