/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

interface Props {
  clockName: string,
}

interface State {
  time: Date
}

export class Clock extends Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    _prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.info(this.state.time.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
