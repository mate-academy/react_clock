/* eslint-disable no-console */
import { Component, ReactNode } from 'react';

type Props = { name: string };
type State = {
  today: Date
  timer: number
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
    timer: 0,
  };

  componentDidMount() {
    this.setState({
      timer: window.setInterval(() => {
        this.setState({
          today: new Date(),
        });
      }, 1000),
    });
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    const { name } = this.props;
    const { today } = this.state;

    if (prevProps.name !== name) {
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }

    if (prevState.today !== today) {
      console.info(today.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount() {
    const { timer } = this.state;

    if (timer) {
      clearInterval(timer);
    }
  }

  render(): ReactNode {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
