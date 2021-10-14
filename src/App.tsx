import React from 'react';
import './App.scss';
import AppState from './types/AppState';
import Clock from './components/Clock';

class App extends React.Component<{}, AppState> {
  state: AppState = {
    isClockVisible: true,
  };

  setPage = (isClockVisible: boolean) => {
    this.setState({ isClockVisible });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <>
        <h1>React clock</h1>
        <p>
          {`Show Clock status is ${isClockVisible}`}
        </p>
        <nav>
          <button
            type="button"
            onClick={() => {
              this.setPage(false);
            }}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={() => {
              this.setPage(true);
            }}
          >
            Show Clock
          </button>
        </nav>
        {isClockVisible && (<Clock />)}
      </>
    );
  }
}

export default App;
