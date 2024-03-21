import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  clockTimerId = 0;

  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.clockTimerId = window.setInterval(() => {
      const today = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(today);
      this.setState({ today });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockTimerId);
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
