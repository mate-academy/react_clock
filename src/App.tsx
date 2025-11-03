import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);
  return `Clock-${value}`;
}

type State = {
  clockName: string;
  now: Date;
};


export class App extends React.Component<{}, State> {
  private timerId: number | null = null;

  constructor(props: {}) {
    super(props);
    this.state = { clockName: 'Clock-0', now: new Date() };
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName(), now: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { clockName, now } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {now.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
