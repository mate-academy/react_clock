import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  clockVisible: boolean,
  nameClock: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    clockVisible: true,
    nameClock: 1,
  };

  clockVisible = () => {
    this.setState({ clockVisible: true });
  };

  clockHidden = () => {
    this.setState({ clockVisible: false });
  };

  changeName = () => {
    this.setState({ nameClock: Math.floor(Math.random() * 100) });
  };

  render() {
    const { clockVisible, nameClock } = this.state;

    return (
      <div className="App">
        {clockVisible && (<Clock nameClock={nameClock} />)}

        <h1 className="App__title">
          React clock
        </h1>

        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.clockVisible}
            disabled={clockVisible}
          >
            Show clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.changeName}
            disabled={!clockVisible}
          >
            Rename clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.clockHidden}
            disabled={!clockVisible}
          >
            Hide Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
