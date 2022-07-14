import React from 'react';

type State = {
  date: Date,
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
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
    const { date } = this.state;

    return (
      <div className="clock">
        <div className="numbers">
          {date.toLocaleTimeString()}
        </div>
      </div>

    );
  }
}
