import React, { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

export class App extends Component {
  state = {
    isClockVisible: false,
    clockName: '',
    clockTime: 0,
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <button
          type="button"
          onClick={() => {
            this.state.isClockVisible
              ? this.setState({ isClockVisible: false })
              : this.setState({ isClockVisible: true });
          }
          }
        >
          {this.state.isClockVisible ? 'Show Clock' : 'Hide Clock'}
        </button>

        {!this.state.isClockVisible
          && (
            <button
              type="button"
              onClick={() => {
                const dataNames = ['Cooking', 'Cleaning', 'Washing', 'Wake Up'];

                this.setState({
                  // eslint-disable-next-line
                  clockName: dataNames[Math.floor(Math.random() * dataNames.length)],
                });
              }}
            >
              Set random name
            </button>
          )
        }

        {!this.state.isClockVisible && this.state.clockName
          && (
            <button
              type="button"
              onClick={() => {
                this.setState({
                  clockTime: Math.floor(Math.random() * 100) + 1,
                });
              }}
            >
              Set random time
            </button>
          )
        }

        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: null });
            this.setState({ clockTime: null });
          }}
        >
          Reset
        </button>

        {!this.state.isClockVisible
          && (
            <Clock
              name={this.state.clockName}
              time={this.state.clockTime}
            />
          )
        }

      </div>
    );
  }
}

export default App;
