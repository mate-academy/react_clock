import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  isClockVisible: boolean;
  name: string | number;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    name: 'React Clock',
  };

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (prevState.name !== this.state.name) {
      // eslint-disable-next-line no-console
      console.log(`Clock was renamed from ${prevState.name} to ${this.state.name}`);
    }
  }

  randomizeClockName = () => {
    this.setState({ name: Math.floor(Math.random() * 100) });
  };

  changeClockVisibility = () => {
    this.setState((
      prevState,
    ) => ({ isClockVisible: !prevState.isClockVisible }));
  };

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="App">
        {isClockVisible && (
          <Clock name={name} />
        )}
        <div className="buttons">
          <button
            type="button"
            className={
              `clock-button
            ${isClockVisible
        ? 'clock-button--hide'
        : 'clock-button--show'
      }`
            }
            onClick={this.changeClockVisibility}
          >
            {isClockVisible
              ? 'Hide Clock'
              : 'What time is it?'}
          </button>
          {isClockVisible && (
            <button
              type="button"
              className="clock-button clock-button--name"
              onClick={this.randomizeClockName}
            >
              Set Random Number as a name
            </button>
          )}
        </div>

      </div>
    );
  }
}

export default App;
