import React from 'react';
import 'bulma/css/bulma.min.css';

import { Clock } from './components/Clock';

type State = {
  isVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: true,
  };

  render() {
    return (
      <div className="box">
        <h1 className="title">React clock</h1>
        <p className="subtitle">
          Current time:
          {' '}
          {this.state.isVisible ? <Clock /> : <span>00:00:00</span>}
        </p>
        <button
          type="button"
          className="button is-success"
          onClick={() => {
            this.setState({ isVisible: true });
          }}
        >
          Show Time
        </button>
        {' '}
        <button
          type="button"
          className="button is-danger"
          onClick={() => {
            this.setState({ isVisible: false });
          }}
        >
          Hide Time
        </button>
      </div>
    );
  }
}

export default App;
