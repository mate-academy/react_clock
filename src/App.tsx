/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

export class App extends React.Component {
  state = {
    isVisible: true,
  };

  componentDidMount() {
    console.log('mounted App');
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={(() => {
            this.setState({ isVisible: true });
          })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={(() => {
            this.setState({ isVisible: false });
          })}
        >
          Hide Clock
        </button>
        <div>
          {this.state.isVisible ? <Clock /> : '' }
        </div>
      </div>
    );
  }
}
