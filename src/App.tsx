// import { AnyNaptrRecord } from 'dns';
import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  render() {
    return (
      <>
        {this.state.isClockVisible && <Clock />}
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>
        {' '}
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>
      </>
    );
  }
}

export default App;
