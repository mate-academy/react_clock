import React from 'react';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render(): React.ReactNode {
    const { isClockVisible: isCounterVisible } = this.state;

    return (
      <div className="App">
        <div className="App__title">
          <h1 className="App__title--R">R</h1>
          <h1 className="App__title--e">e</h1>
          <h1 className="App__title--a">a</h1>
          <h1 className="App__title--c">c</h1>
          <h1 className="App__title--t">t</h1>
          {' '}
          <h1 className="App__title--c">c</h1>
          <h1 className="App__title--l">l</h1>
          <h1 className="App__title--o">o</h1>
          <h1 className="App__title--c">c</h1>
          <h1 className="App__title--k">k</h1>
        </div>
        <p className="Body">
          Current time:
          {' '}
          <span className="Body__clock">
            {isCounterVisible && (
              <Clock />
            )}
          </span>
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
          className="Button"
        >
          Hide Counter
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
          className="Button"
        >
          Show Counter
        </button>
      </div>
    );
  }
}

export default App;
