import React from 'react';
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Main from './components/Main.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Aside />
          <Main />
        </div>
      </div>
      
    )
  }
}


export default App;
