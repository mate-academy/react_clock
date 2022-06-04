import React from 'react';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    isClockVisible: true,
    clockName: 'React clock',
  };

  names = ['Clocker',
    'Timmar',
    'Годинник',
    'Часы',
    'Hodiny',
    'Godzin',
    'Uhr',
    'Stundas',
    'Timer'];

  render() {
    return (
      <div className="App">
        <h1>{this.state.clockName}</h1>
        {this.state.isClockVisible && (
          <Clock />
        )}

        <div>
          {this.state.isClockVisible ? (
            <button
              type="button"
              onClick={() => this.setState(
                { isClockVisible: false },
              )}
            >
              Hide Clock
            </button>
          )
            : (
              <button
                type="button"
                onClick={() => this.setState({ isClockVisible: true })}
              >
                Show Clock
              </button>
            )}
          <br />
          <br />
          <button
            type="button"
            onClick={() => this.setState(
              {
                clockName: this.names[Math.floor(Math.random()
                * this.names.length)],
              },
            )}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
