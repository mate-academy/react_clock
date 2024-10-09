import { Component, ReactNode } from 'react';

interface State {
  today: Date;
}

interface Props {
  clockName: string;
}

export class Timer extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): ReactNode {
    return (
      <>
        <div className="Clock">
          <strong className="Clock__name">{this.props.clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {new Date().toUTCString().slice(-12, -4)}
          </span>
        </div>
      </>
    );
  }
}
