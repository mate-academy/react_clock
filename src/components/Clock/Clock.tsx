import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  intervalId = 0;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      const time = new Date();

      this.setState({ time });
      //eslint-disable-next-line no-console
      console.log(time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      //eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
