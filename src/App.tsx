import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean,
  clockName: string,
};
type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: false,
    clockName: 'A',
  };

  names = ['A', 'B', 'C', 'D'];

  visible = (): void => {
    this.setState((prevState) => (
      { isClockVisible: !prevState.isClockVisible }
    ));
  };

  randomName = (): void => {
    if (this.state.isClockVisible) {
      this.setState({
        clockName: this.names[Math.floor(Math.random() * this.names.length)],
      });
    }
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">React clock</h1>

        <div className="app__buttons buttons">
          <button
            className="buttons__show button"
            type="button"
            onClick={this.visible}
          >
            {this.state.isClockVisible ? 'Hide Clock' : 'Show Clock'}
          </button>

          <button
            className="buttons__name button"
            type="button"
            onClick={this.randomName}
          >
            Set random name
          </button>
        </div>

        {this.state.isClockVisible && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}
