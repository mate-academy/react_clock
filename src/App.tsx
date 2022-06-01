import React from 'react';
import './App.scss';

import { Clock } from './Clock';

type State = {
  isCounterVisible: boolean,
};

// const App: React.FC = () => {
class App extends React.Component<{}, State> {
  state: State = {
    isCounterVisible: true,
  };

  render() {
    const { isCounterVisible } = this.state;

    return (
      <div className="App">
        <h1 className="name-of-project">React clock</h1>
        {isCounterVisible && (
          <>
            <p className="current-time">
              Current time:
            </p>
            <Clock />
          </>

        )}
        <div className="wrap-button">
          <button
            type="button"
            className="
              button
              is-danger
              is-light
            "
            onClick={() => this.setState({ isCounterVisible: false })}
          >
            Hide
          </button>

          <button
            type="button"
            className="
              button
              is-danger
              is-light
            "
            data-cy="time"
            onClick={() => this.setState({ isCounterVisible: true })}
          >
            Show
          </button>
        </div>
      </div>
    );
  }
}

export default App;
