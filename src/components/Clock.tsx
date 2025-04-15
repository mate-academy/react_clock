import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  today: string;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  tick() {
    const newTime = new Date(Date.now()).toUTCString().slice(-12, -4);

    this.setState({
      today: newTime,
    });

    // eslint-disable-next-line no-console
    console.log(newTime);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
