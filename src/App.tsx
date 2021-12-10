import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100),
  };

  makeClockVisible = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  makeClockHidden = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  getNewName = () => {
    const newName = Math.floor(Math.random() * 100);

    this.setState({ clockName: newName });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        {isClockVisible && (
          <Clock name={clockName} />
        )}

        <div className="buttons">
          <button
            className="buttons__button"
            type="button"
            disabled={isClockVisible}
            onClick={this.makeClockVisible}
          >
            Show Clock
          </button>

          <button
            className="buttons__button"
            type="button"
            disabled={!isClockVisible}
            onClick={this.makeClockHidden}
          >
            Hide Clock
          </button>

          <button
            className="buttons__button"
            type="button"
            onClick={this.getNewName}
          >
            Rename Clock
          </button>
        </div>

        <div>
          <p className="App__new-name">{`Clock name is: ${clockName}`}</p>
        </div>
      </div>
    );
  }
}

export default App;
