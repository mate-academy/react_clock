import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  today: Date;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timeId = 0;

  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timeId);
  }

  render(): React.ReactNode {
    return (
      <span className="Clock__time">
        {this.state.today.toUTCString().slice(-12, -4)}
      </span>
    );
  }
}
