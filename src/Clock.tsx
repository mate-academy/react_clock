import React from 'react';
import './App.scss';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.PureComponent<Props, State> {
  private timerId?: number;

  state: State = {
    today: new Date(),
  };

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const now = new Date();

      this.setState({
        today: now,
      });
      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <>
        <div className="Clock">
          <strong className="Clock__name">{name}</strong>
        </div>

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </>
    );
  }
}
