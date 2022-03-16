import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    return (
      <>
        {this.state.isClockVisible ? <Clock name={this.state.clockName} /> : null}
        <div>
          <button
            type="button"
            className="show"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
        </div>
        <div>
          <button
            type="button"
            className="hide"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              this.setState({
                clockName: Math.floor(Math.random() * 100),
              });
            }}
          >
            Set random name
          </button>
        </div>
      </>
    );
  }
}

export default App;
