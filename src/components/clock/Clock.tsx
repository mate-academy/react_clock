import React from 'react';

interface Props {
  clockName: string;
}

class Clock extends React.Component<Props> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerClockId = 0;

  componentDidMount(): void {
    this.timerClockId = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { clockName: prevName } = prevProps;
    const { clockName: newName } = this.props;

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerClockId);
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
export default Clock;
