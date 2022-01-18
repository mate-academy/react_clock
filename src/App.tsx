import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isVisible: boolean;
  hideClock(): void;
  showClock(): void;
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: true,
    hideClock: () => {
      this.setState({ isVisible: false });
    },

    showClock: () => {
      this.setState({ isVisible: true });
    },
  };

  render(): React.ReactNode {
    const { isVisible, hideClock, showClock } = this.state;

    return (
      <>
        <h1 className="App__title">React clock</h1>
        <div className="App">
          <p className="center">
            {' '}
            <button
              className="App__button-on"
              type="button"
              onClick={showClock}
            >
              <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
              </svg>
              <span>Show Clock</span>
            </button>
          </p>
        </div>
        <br />
        <br />
        <div className="app2">
          <p className="center">
            <button
              className="App__button-off"
              type="button"
              onClick={hideClock}
            >
              <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
              </svg>
              <span>Hide Clock</span>
            </button>
            <div className="clock">
              {isVisible && <Clock />}
            </div>
          </p>
        </div>
      </>
    );
  }
}

export default App;
