import React from 'react';

type State = {
  currentDate: Date,
};

type Props = {
  name: string,
};

function formatToTimeZone(date: Date) {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    currentDate: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    // eslint-disable-next-line no-console
    console.info(`${formatToTimeZone(this.state.currentDate)}`);

    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { currentDate } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatToTimeZone(currentDate)}
        </span>
      </div>
    );
  }
}
