import React from 'react';

function getFormatedTime(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends React.PureComponent<Props, State> {
  state = {
    today: new Date(),
  };

  timerIdToday = 0;

  componentDidMount(): void {
    this.timerIdToday = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    // prevState: Readonly<State>,
    // snapshot?: any,
  ): void {
    const { name } = this.props;
    const { today } = this.state;

    // eslint-disable-next-line no-console
    console.info(getFormatedTime(today));

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.name} to ${name}`,
      );
    }
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerIdToday);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getFormatedTime(today)}
        </span>
      </div>
    );
  }
}
