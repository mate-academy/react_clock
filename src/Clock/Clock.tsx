import React from 'react';

type State = {
  time: string;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        time: new Date().toUTCString().slice(-12, -4),
      });
      const currentTime = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number = 0;

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
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
