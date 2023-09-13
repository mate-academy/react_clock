import React from 'react';

const TIME_CHANGE_DELAY = 1000;

type Props = {
  name: string;
};

type State = {
  currentDate: Date;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    currentDate: new Date(),
  };

  timeChangeTimerId = 0;

  componentDidMount(): void {
    this.startTimeChangeTimer();
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.currentDate !== this.state.currentDate) {
      // eslint-disable-next-line no-console
      console.info(this.state.currentDate.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeChangeTimerId);
  }

  startTimeChangeTimer() {
    this.timeChangeTimerId = window.setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, TIME_CHANGE_DELAY);
  }

  render(): React.ReactNode {
    const { name } = this.props;
    const { currentDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentDate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
