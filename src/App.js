import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    vueClock: true,
    data: (new Date()).toLocaleTimeString(),
    number: 0,
  };

  changeTime = () => {
    this.setState({
      data: (new Date()).toLocaleTimeString(),
    });
  }

  setRandomNumber = () => {
    this.setState({
      number: Math.random(),
    });
    // eslint-disable-next-line no-console,max-len
    console.log(this.state.number);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.data}
        <p>
          Current time:
          {' '}
          {this.state.vueClock && (
            <Clock />
          )}
        </p>

        <button
          type="button"
          onClick={() => this.setState({ vueClock: false })}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ vueClock: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.changeTime}
        >
          change time
        </button>
        <button
          type="button"
          onClick={this.setRandomNumber}
        >
          get console randomNumer
        </button>
      </div>
    );
  }
}

export default App;
