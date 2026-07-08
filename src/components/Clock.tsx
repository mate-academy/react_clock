import React from 'react';

type State = {
  time: string;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId: undefined | number = undefined;

  updateTime = () => {
    const currentTime = new Date().toUTCString().slice(-12, -4);

    this.setState({ time: currentTime });

    // eslint-disable-next-line no-console
    console.log(currentTime);
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.updateTime, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
