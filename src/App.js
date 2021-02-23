import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  randomName = () => {
    const randomName = Math.floor(Math.random() * 10);

    this.setState({ clockName: randomName });
    // eslint-disable-next-line no-console
    console.log(`
      The Clock was renamed from ${this.state.clockName} to ${randomName}
    `);
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="header">
            React clock
          </h1>

          {isClockVisible
            && (<Clock name={clockName} />)}

          <button
            type="button"
            className="button"
            onClick={() => (
              isClockVisible
                ? this.setState({ isClockVisible: false })
                : this.setState({ isClockVisible: true })
            )
            }
          >
            {isClockVisible ? 'Hide Clock' : 'Show Clock'}
          </button>

          {isClockVisible
          && (
          <button
            type="button"
            className="button"
            onClick={this.randomName}
          >
            Set random name
          </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
