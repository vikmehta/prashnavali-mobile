import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header'
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="wrapper">
            <Header />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
