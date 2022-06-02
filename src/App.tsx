/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {

};

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<Props, State> {
  state: State = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App box">
        <h1 className="title">React clock</h1>
        {isClockVisible && (
          <Clock />
        )}

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
          className="button is-danger"
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
          className="button is-success"
        >
          Show Clock
        </button>
      </div>
    );
  }
}

export default App;
