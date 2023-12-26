import React from 'react';

function getTime(): string {
  const today = new Date();

  return today.toUTCString().slice(-12, -4);
}

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    time: getTime(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ time: getTime() });

      // eslint-disable-next-line no-console
      console.info(`${this.state.time}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
