import React from 'react';
import './App.scss';

type State = {
  clockName: string;
  date: Date,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

const randomName = getRandomName();

export class App extends React.Component<{}, State> {
  state = {
    clockName: randomName,
    date: new Date(),
  };

  timerId = window.setInterval(() => {
    this.state.clockName = getRandomName();
  }, 3300);

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    const {
      date,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">
            {clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {date.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
