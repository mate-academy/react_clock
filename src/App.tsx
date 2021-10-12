import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export default class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 1000000),
  };

  componentDidMount() {
    setInterval(() => {}, 1000);
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="App-Clock">
          <h1 className="App-Title">React clock</h1>
          <p className="App-Current">Current time:</p>
          <div className="App-Time">
            <Clock
              name={clockName}
              isClockVisible={isClockVisible}
            />
          </div>
          <div className="App-Buttons">
            <button
              className="App-Button"
              type="button"
              onClick={() => this.setState({ isClockVisible: true })}
            >
              Show
            </button>
            <button
              className="App-Button"
              type="button"
              onClick={() => this.setState({ isClockVisible: false })}
            >
              Hide
            </button>
          </div>
          <h3 className="App-Name">{clockName}</h3>
          <button
            className="App-NameButton"
            type="button"
            onClick={() => this.setState({ clockName: Math.round(Math.random() * 1000000) })}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
