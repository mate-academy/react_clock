import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  timerText = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        date: new Date(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = prevProps;

    this.timerText = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${clockName} to ${this.props.clockName}`);
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerText);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
