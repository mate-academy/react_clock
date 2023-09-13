import React from 'react';

type Props = {
  name: string;
};

type State = {

  currentTime: string;
};

const today = new Date();

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: today.toUTCString().slice(-12, -4),
  };

  timerValue = 0;

  componentDidMount(): void {
    this.timerValue = window.setInterval(() => {
      const newTime = new Date();

      this.setState({ currentTime: newTime.toUTCString().slice(-12, -4) });

      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerValue);
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
