import React from 'react';

type Props = {
  clockName: string,
};

type Stage = {
  date: Date,
};

export class Clock extends React.Component<Props, Stage> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });

      console.info(this.state.date.toLocaleTimeString()); // eslint-disable-line
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`); // eslint-disable-line
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
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
