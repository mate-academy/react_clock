import React from 'react';

interface State {
  date: Date,
}

export class Clock extends React.Component<{ clockName: string }, State> {
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
