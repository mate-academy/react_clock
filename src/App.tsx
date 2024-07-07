import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  today: string | number;
  timerId: number | undefined;
  hasClock: boolean;
};

export class App extends React.Component {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
    hasClock: true,
    timerId: undefined,
    clockName: `Clock-0`,
  }

  componentDidMount(): void {
    const timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    const today = window.setInterval(() => {
      this.setState({
        today: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);

    const outputTime = window.setInterval(() => {
      console.log(this.state.today);
    }, 1000);

    this.setState({ outputTime, timerId, today });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerId);
    window.clearInterval(this.state.today);
  }



  render() {
    const { clockName, today } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {today}
          </span>
        </div>
      </div>
    );
  }
};
