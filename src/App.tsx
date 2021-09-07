import React from 'react';
import './App.scss';
/* eslint-disable no-console */

import { Clock } from './components/Clock';

type State = {
  clockName: number,
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  // handleClick = (isTrue: boolean) => {
  //   this.setState({
  //     isClockVisible: isTrue,
  //   });
  // };

  showClick = () => {
    this.setState({ isClockVisible: true });
  };

  hideClick = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomNumber = (integer: number) => {
    this.setState({
      clockName: Math.floor(integer * 10),
    });
  };

  render() {
    return (
      <div className="App">

        {this.state.isClockVisible
          ? (
            <Clock name={this.state.clockName} />
          )
          : null}

        <div className="buttonBox">
          <button
            type="button"
            onClick={this.showClick}
            className="buttonBox__button"
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={this.hideClick}
            className="buttonBox__button"
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={
              this.setRandomNumber.bind(
                this, Math.random(),
              )
            }
            className="buttonBox__button"
          >
            Set Name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
