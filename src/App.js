import React from 'react';

import { Clock } from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockNumber: '',
  }

  clockRename = () => {
    const newNumber = getRandomNumber();

    // eslint-disable-next-line
    console.log(`The Clock was renamed from "React clock ${this.state.clockNumber}" to "React clock #${newNumber}"`);
    this.setState({ clockNumber: `#${newNumber}` });
  }

  render() {
    return (
      <div className="App my-font">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title my-font">
              {`React clock ${this.state.clockNumber}`}
            </h1>

            {
              this.state.isClockVisible && (
                <h2 className="subtitle my-font">
                  Current time:
                  {' '}
                  <Clock />
                </h2>
              )
            }

            <div
              className="
                is-small
                js-buttons
              "
            >
              <button
                type="button"
                className="button is-small my-font is-rounded"
                onClick={() => this.setState({ isClockVisible: true })}
              >
                Show Clock
              </button>

              <button
                type="button"
                className="button is-small my-font is-rounded"
                onClick={() => this.setState({ isClockVisible: false })}
              >
                Hide Clock
              </button>
              <br />

              <button
                type="button"
                className="button is-fullwidth is-small my-font is-rounded"
                onClick={this.clockRename}
              >
                Change clock name
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

export default App;
