import React from 'react';
import './App.scss';

type Props = {

};

type State = {
  isClockVisible: boolean,
  clock: string,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clock: '',
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.isClockVisible) {
        this.Clock();
      } else {
        this.hideClock();
      }
    }, 1000);
  }

  hideClock = () => {
    this.state.isClockVisible = false;
    this.setState({ clock: ' ' });
  };

  showClock = () => {
    this.state.isClockVisible = true;
  };

  Clock = () => {
    const date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());

    this.setState({ clock: date.toLocaleTimeString() });
  };

  render() {
    const { clock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {clock}
        </p>

        <button type="button" onClick={this.showClock}>
          Show clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide clock
        </button>
      </div>
    );
  }
}

export default App;
