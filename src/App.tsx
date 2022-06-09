import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

interface State {
  isClockVisible: boolean;
  clockName: number;
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  generateRandomNumber = () => this.setState({
    clockName: Math.round(Math.random() * 10),
  });

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <p>{`Clockname: ${clockName}`}</p>

        <div className="buttons">
          <button
            type="button"
            onClick={() => this.setState({ isClockVisible: true })}
          >
            Show
          </button>

          <button
            type="button"
            onClick={() => this.setState({ isClockVisible: false })}
          >
            Hide
          </button>

          <button
            type="button"
            onClick={() => this.generateRandomNumber()}
          >
            Set random name
          </button>
        </div>

        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
