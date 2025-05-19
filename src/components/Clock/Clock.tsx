import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props> {
  state: Readonly<State> = {
    time: '',
  };

  getNewTime = (): void => {
    const today = new Date().toUTCString().slice(-12, -4);

    this.setState({ time: today });

    // eslint-disable-next-line no-console
    console.log(today);
  };

  clockTimerId = 0;

  componentDidMount(): void {
    this.getNewTime();

    this.clockTimerId = window.setInterval(this.getNewTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockTimerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
