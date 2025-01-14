import React from 'react';

function getTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: getTime(),
  };

  timeTimerId = 0;

  componentDidMount(): void {
    this.timeTimerId = window.setInterval(
      () => this.setState({ time: getTime() }),
      1000,
    );
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeTimerId);
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
