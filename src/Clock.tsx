import React from 'react';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 5);

  return `Clock-${value}`;
}

type Props = {
  clockName?: string;
};

type State = {
  clockName: string;
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    clockName: getRandomName(),
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.log(prevProps.clockName, '---', this.props.clockName);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <strong>{this.state.clockName}</strong>
        {' time is '}
        <div className="numbers">
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>

    );
  }
}
