/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('App mounted');
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <div>
        <h1 className="clock__title">Clock</h1>
        <div>
          <button
            type="button"
            onClick={() => {
              this.hideClock();
            }}
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={() => {
              this.showClock();
            }}
          >
            Show Clock
          </button>
        </div>

        <div>
          {
            this.state.isClockVisible === false
              ? (
                <p>Press Show Clock</p>
              )
              : (
                <Clock />
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
