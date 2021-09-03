import React from 'react';
import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number | string;
  date: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 'New',
    date: (new Date()).toLocaleTimeString(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: (new Date()).toLocaleTimeString() });
    }, 1000);
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  setName = () => {
    this.setState((prevState) => {
      const randomName = Math.ceil(Math.random() * 1000);

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.clockName} to ${randomName}`);

      return {
        clockName: randomName,
      };
    });
  };

  render() {
    return (
      <div className="App">

        {this.state.isClockVisible
          ? (
            <>
              <h1>{`React clock ${this.state.clockName}`}</h1>
              <p>
                Current time:
                {' '}
                {this.state.date}
                {// eslint-disable-next-line no-console
                  console.log(this.state.date)
                }
              </p>
            </>
          )
          : null}
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.setName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
