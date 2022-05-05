import React from 'react';
import { Clock } from './components/Clock';
import Font from './Font';

import './App.scss';

type Props = {};

type State = {
  clockName: string;
  clockVisible: boolean;
};

class App extends React.Component<Props> {
  static fontUrl
  = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap';

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
        <div className="app__wrap">
          {
            clockVisible && <Clock clockName={clockName} />
          }
        </div>

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
        <Font url={App.fontUrl} />
      </div>
    );
  }
}

export default App;
