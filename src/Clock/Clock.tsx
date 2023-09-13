import React from 'react';

const TIME_CHANGE_INTERVAL = 1000;

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    currentTime: new Date(),
  };

  timeChangeTimerId = 0;

  componentDidMount(): void {
    this.timeChangeTimerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, TIME_CHANGE_INTERVAL);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    const { currentTime } = this.state;
    const { name } = this.props;

    if (prevState.currentTime !== currentTime) {
      // eslint-disable-next-line no-console
      console.info(currentTime.toUTCString().slice(-12, -4));
    }

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
