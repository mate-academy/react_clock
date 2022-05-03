import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  clockName: string;
  clockVisible: boolean;
};

class App extends React.Component<Props> {
  state: State = {
    clockName: 'init name',
    clockVisible: true,
  };

  setRandClockName = () => {
    const generatedClockName = String(Math.floor(Math.random() * 10000));

    this.setState({ clockName: generatedClockName });
  };

  hideClock = () => {
    this.setState({ clockVisible: false });
  };

  showClock = () => {
    this.setState({ clockVisible: true });
  };

  render() {
    const {
      clockVisible,
      clockName,
    } = this.state;

    const {
      hideClock,
      showClock,
      setRandClockName,
    } = this;

    return (
      <div className="app">
        {
          clockVisible
            ? <Clock clockName={clockName} />
            : null
        }

        <div className="app__Btns">
          <button
            type="button"
            onClick={showClock}
          >
            Show
          </button>
          <button
            type="button"
            onClick={hideClock}
          >
            Hide
          </button>
          <button
            type="button"
            onClick={setRandClockName}
          >
            Rename
          </button>
        </div>
      </div>
    );
  }
}

export default App;
