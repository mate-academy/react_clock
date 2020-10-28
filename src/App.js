import React from 'react';

import './App.scss';
import { Clock } from './components/clock';

class App extends React.Component {
  state = {
    clockName: 1,
    isClockVisible: true,
  };

  changeClockName = () => {
    const { clockName } = this.state;
    const randomName = Math.floor(Math.random() * (999 - 1) + 1);

    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${clockName} to ${randomName}`);
    this.setState({ clockName: randomName });
  }

  setVisibility = arg => (
    this.setState({
      isClockVisible: arg,
    })
  );

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} /> }
        <button
          type="button"
          onClick={() => (
            this.setState(this.setVisibility(true))
          )}
        >
          Show Clock
        </button>
        {' '}
        <button
          type="button"
          onClick={() => (
            this.setState(this.setVisibility(false))
          )}
        >
          Hide Clock
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={this.changeClockName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
