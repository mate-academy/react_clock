import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    time: '00:00:00',
  };

  private secondsTimer = 0;

  componentDidMount(): void {
    this.setState({
      time: this.getTime(),
    });

    this.secondsTimer = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.secondsTimer);
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

  private getTime() {
    return new Date().toUTCString().slice(-12, -4);
  }

  private updateTime = () => {
    // eslint-disable-next-line no-console
    console.log(this.getTime());

    this.setState({
      time: this.getTime(),
    });
  };
}
