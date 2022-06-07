import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>
        {isClockVisible && (
          <>
            <p>Current time:</p>
            <Clock />
          </>
        )}
        <div>
          <button
            type="button"
            onClick={() => this.setState({
              isClockVisible: true,
            })}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={() => this.setState({
              isClockVisible: false,
            })}
          >
            Hide Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
