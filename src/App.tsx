import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

interface State {
  isClockVisible: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  changeClockVisibility = (isClockVisible: boolean) => {
    this.setState({
      isClockVisible,
    });
  };

  render() {
    const { isClockVisible } = this.state;
    const { changeClockVisibility } = this;

    return (
      <div className="App">
        <h1>React Clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && (
            <Clock />
          )}
        </p>
        <button
          type="button"
          onClick={() => changeClockVisibility(true)}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => changeClockVisibility(false)}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;
