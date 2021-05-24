import React from 'react';

import { Clock } from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: '1',
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          { isClockVisible && <Clock name={clockName} />}
        </div>
        <button
          type="button"
          onClick={
            () => {
              this.setState({
                isClockVisible: true,
              });
            }
          }
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={
            () => {
              this.setState({
                isClockVisible: false,
              });
            }
          }
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              clockName: `${Math.ceil(Math.random() * 100)}`,
            });
          }}
        >
          Set random name
        </button>
      </>

    );
  }
}

export default App;
