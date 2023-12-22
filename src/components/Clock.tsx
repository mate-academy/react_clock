import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: string;
  clockId: number | undefined;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
    clockId: undefined,
  };

  componentDidMount(): void {
    const newClockId = window.setInterval(() => {
      const date = new Date().toUTCString().slice(-12, -4);

      this.setState({
        time: date,
      });

      // eslint-disable-next-line no-console
      console.info(date);
    }, 1000);

    this.setState({
      clockId: newClockId,
    });
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.clockName;
    const newName = this.props.clockName;

    if (newName !== oldName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.clockId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
