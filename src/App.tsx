import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    clockVisible: true,
    clockName: 1,
  };

  visibleClock = () => {
    const { clockVisible } = this.state;

    this.setState({
      clockVisible: !clockVisible,
    });
  };

  changeName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 10),
    });
  };

  render() {
    const { clockName, clockVisible } = this.state;

    return (
      <div className="App">
        <h1>{clockName}</h1>
        {clockVisible && <Clock {...this.state} />}
        <button
          disabled={clockVisible}
          type="button"
          onClick={this.visibleClock}
        >
          Show Clock
        </button>
        <button
          disabled={!clockVisible}
          type="button"
          onClick={this.visibleClock}
        >
          Hide Clock
        </button>
        <button
          disabled={!clockVisible}
          type="button"
          onClick={this.changeName}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
