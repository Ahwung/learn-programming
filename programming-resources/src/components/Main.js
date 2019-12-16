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

// =============================
// COMPONENT CLASS: MAIN
// =============================
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submissions: []
    }
  }

  // Function to fetch submissions from API
  fetchSubmissions = () => {
    fetch(`${baseUrl}/submissions`)
    .then(data => data.json())
    .then(jsonData => {
      this.setState({
        submissions: jsonData
      })
    }).catch(error => console.log(error))
  }

  // Lifecycle function to pull data to render at page load
  componentDidMount() {
    this.fetchSubmissions()
  }

  // Render function
  render () {
    return (
      <main>
      <h1>{this.props.view.pageTitle}</h1>

      { this.props.view.page === 'home'
        ? this.state.submissions.map((submissionData) => (
            <Submission
              handleView={this.props.handleView}
              key={submissionData.id}
              submissionData={submissionData}
            />
          ))
        : <Form
          formInputs={this.props.formInputs}
          view={this.props.view}
        />
      }
      </main>
    )
  }
}

// =============================
// EXPORT COMPONENT: MAIN
// =============================
export default Main;
