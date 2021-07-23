import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClockVisible: true,
      clockName: 'button',
    };
  }

  clockName = () => {
    this.setState({
      clockName: `${Math.round(Math.random() * 100)}`,
    });
  }

  changeVisibility = () => {
    this.setState(
      prevState => ({
        isClockVisible: !prevState.isClockVisible,
      }),
    );
  }

  render() {
    return (
      <div className="App ui container">
        <h1 className="title">React clock</h1>
        <p>
          <button
            type="button"
            className="ui inverted button"
            title="Change Clock Visibility"
            onClick={this.changeVisibility}
          >
            Show / Hide Clock
          </button>
        </p>
        <p>
          <button
            type="button"
            className="ui inverted button"
            title="Set Random Name"
            onClick={this.clockName}
          >
            {`Button Name: ${this.state.clockName}`}
          </button>
        </p>

        <p>
          {`Current time: `}
          <h2 className="clock">
            {this.state.isClockVisible
            && (<Clock clockName={this.state.clockName} />)}
          </h2>
        </p>
      </div>
    );
  }
}

export default App;
