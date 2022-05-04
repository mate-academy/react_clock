import './App.scss';
import React from 'react';
import { Clock } from './components/clock';

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: '1',
  };

  clockVisible = () => {
    this.setState({ isClockVisible: true });
  };

  clockHidden = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <div className="App__block">
          <div className="App__clock">
            {isClockVisible && (<Clock clockName={clockName} />)}
          </div>
          <div className="App__buttons">
            <button
              className="App__button"
              type="button"
              onClick={this.clockVisible}
              disabled={isClockVisible}
            >
              Show clock
            </button>

            <button
              className="App__button"
              type="button"
              onClick={() => this.setState({
                clockName: String(Math.floor(Math.random() * 10)),
              })}
              disabled={!isClockVisible}
            >
              Rename clock
            </button>

            <button
              className="App__button"
              type="button"
              onClick={this.clockHidden}
              disabled={!isClockVisible}
            >
              Hide Clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
