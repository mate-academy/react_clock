import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.random(),
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName === this.state.clockName) {
      return;
    }

    // eslint-disable-next-line
    console.log(
      'The Clock was renamed from '
      + `${prevState.clockName} to ${this.state.clockName}`,
    );
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App column is-one-third container">
        <div className="panel">
          <div className="panel-block">
            <button
              type="button"
              onClick={() => {
                this.setState({ isClockVisible: true });
              }}
              className="button is-small is-light is-fullwidth mr-3"
            >
              Show Clock
            </button>
            <button
              type="button"
              onClick={() => {
                this.setState({ isClockVisible: false });
              }}
              className="button is-small is-light is-fullwidth mr-3"
            >
              Hide Clock
            </button>
            <button
              type="button"
              onClick={
                () => this.setState({ clockName: Math.random() })
              }
              className="button is-small is-light is-fullwidth"
            >
              Set random name
            </button>
          </div>
        </div>
        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
