import React from 'react';

import './App.scss';

import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    visible: true,
    name: Math.trunc(Math.random() * 100),
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.name} to ${this.state.name}.`);
    }
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  show =() => {
    this.setState({
      visible: true,
    });
  }

  change =() => {
    this.setState({
      name: Math.ceil(Math.random() * 100),
    });
  }

  render() {
    return (
      <div className="app">
        <div className="text">
          <h1>React clock</h1>
          {this.state.visible && <Clock name={this.state.name} />}
          <p>
            Name:
            {this.state.name}
          </p>
        </div>
        <div className="buttons">
          <button
            className="button"
            type="button"
            onClick={this.hide}
          >
            Hide
          </button>
          <button
            className="button"
            type="button"
            onClick={this.show}
          >
            Show
          </button>
          <button
            className="button"
            type="button"
            onClick={this.change}
          >
            Change name
          </button>
        </div>
      </div>
    );
  }
}
