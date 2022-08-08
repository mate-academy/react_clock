import React from 'react';

interface State {
  date: Date,
}

interface Props {
  clockName: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  handleClockSeconds = 0;

  componentDidMount() {
    this.handleClockSeconds = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });

      window.console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      window.console.log(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.handleClockSeconds);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
