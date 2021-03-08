import React, { Component } from 'react';
import Clock from './components/Clock';

import './App.scss';

class App extends Component {
  state = {
    isClockVisible: false,
    clockName: 0,
    clickedHidden: 0,
  }

  show = () => this.setState({ isClockVisible: true })

  hide = () => {
    if (this.state.clickedHidden !== 5) {
      this.setState(prevState => ({ clicked: prevState.clicked + 1 }));
      this.setState({ isClockVisible: false });
    }
  }

  randomNumber = () => {
    const digit = Math.round(Math.random() * 100);

    this.setState({ clockName: digit });
  }

  render() {
    const { show, hide, randomNumber } = this;
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible
          && (
            <Clock
              clockName={clockName}
            />
          )
        }
        <button
          type="button"
          onClick={show}
          ch={this.timeID}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={hide}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={randomNumber}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
