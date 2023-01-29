import React from 'react';

interface State {
  today: Date,
}

interface Props {
  clockName: string,
}

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      window.console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(pervProps: Props) {
    if (pervProps.clockName !== this.props.clockName) {
      window.console.debug(`Renamed from ${pervProps.clockName} to ${this.props.clockName}`);
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
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
