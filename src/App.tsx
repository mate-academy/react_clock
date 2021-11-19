import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 'New Clock',
  };

  render() {
    return (
      <>
        {this.state.isClockVisible && <Clock clockName={this.state.name} />}
        <div className="App">
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ name: Math.floor(Math.random() * 777) });
            }}
          >
            Set Random Name
          </button>
        </div>
      </>
    );
  }
}
