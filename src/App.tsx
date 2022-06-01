/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    randomName: 0,
  };

  randomNumber = () => {
    this.setState({ randomName: Math.floor(Math.random() * 10) });
  };

  hide = (value:boolean) => {
    this.setState({ isClockVisible: value });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <p>
          Clock Name:
          {this.state.randomName}
        </p>
        <p className="App__clock" data-cy="time">
          <span className="App__span">Current time:</span>
          { this.state.isClockVisible && (
            <Clock randomName={this.state.randomName} />
          )}
        </p>
        <button
          className="App__button"
          type="button"
          onClick={() => this.hide(true)}
        >
          Show Clock
        </button>
        <button
          className="App__button"
          type="button"
          onClick={() => this.hide(false)}
        >
          Hide Clock
        </button>
        <button
          className="App__button"
          type="button"
          onClick={() => this.randomNumber()}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
