import { Component, ReactNode } from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerInfo = +this.state.today.toUTCString().slice(-12, -4);

  componentDidMount(): void {
    this.timerInfo = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerInfo);
  }

  render(): ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>
        <span>
          {' time is '}
        </span>
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
