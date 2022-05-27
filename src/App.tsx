import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'React Clock',
  };

  stopClock = () => {
    // eslint-disable-next-line
    console.log('click1')
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    // eslint-disable-next-line
    console.log('click2')
    this.setState({ isClockVisible: true });
  };

  changeClockName = () => {
    this.setState({ clockName: (Math.random() * 100 + 1).toString() });
  };

  render() {
    const { isClockVisible } = this.state;
    // eslint-disable-next-line
    console.log(isClockVisible)

    return (
      <div className="App">
        {isClockVisible
      && <Clock isClockVisible={isClockVisible} name={this.state.clockName} />}
        <button
          type="button"
          onClick={this.showClock}
          disabled={isClockVisible}
          className="App__button"
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.stopClock}
          disabled={!isClockVisible}
          className="App__button"
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.changeClockName}
          disabled={!isClockVisible}
          className="App__button"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
