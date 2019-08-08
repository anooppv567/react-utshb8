import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('root'));
