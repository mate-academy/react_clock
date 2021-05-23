import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'Clock 0',
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <div>
            {this.state.isClockVisible
              ? (
                <p>
                  Current time:
                  {' '}
                  <Clock name={this.state.clockName} />
                </p>
              )
              : (
                <img
                  className="App__img"
                  // eslint-disable-next-line
                  src="https://i.gifer.com/origin/3e/3e6bcf910e0ba9422b6e1ea79cdc6665.gif"
                  alt="clock not found"
                />
              )
          }
          </div>
          <div className="App__btns">
            <button
              type="submit"
              className="App__btn"
              onClick={() => {
                this.setState({ isClockVisible: true });
              }}
            >
              Show Clock
            </button>
            <button
              type="submit"
              className="App__btn"
              onClick={() => {
                this.setState({ isClockVisible: false });
              }}
            >
              Hide Clock
            </button>
            <button
              type="submit"
              className="App__btn"
              onClick={() => {
                this.setState({
                  clockName: `Clock ${Math.floor(Math.random() * 10)}`,
                });
              }}
            >
              Set random name
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
