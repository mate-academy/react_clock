import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  Visible = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          local time
          {' '}
          {this.state.clockName}
        </h1>

        <div className="App__clock">
          {this.state.isClockVisible
            ? <Clock name={this.state.clockName} />
            : (
              <p>NO ONE NEEDS THE CLOCKS</p>
            )}
        </div>

        <div>
          <button
            type="button"
            className="App__button"
            onClick={this.Visible}
          >
            SHOW CLOCK
          </button>

          <button
            type="button"
            className="App__button"
            onClick={() => (this.setState({ isClockVisible: false }))}
          >
            HIDE CLOCK
          </button>

          <button
            type="button"
            className="App__button"
            onClick={() => this.setState({
              clockName:
                Math.round(Math.random() * 100),
            })}
          >
            CLICK ME:)
          </button>
        </div>
      </div>
    );
  }
}

export default App;
