import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  handleTimeChange = () => {
    const newTime = new Date().toUTCString().slice(-12, -4);

    this.setState({ time: newTime });

    // eslint-disable-next-line no-console
    console.log(newTime);
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.handleTimeChange, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const nameChanged = this.props.name !== prevProps.name;

    if (nameChanged) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div>
        <strong className="Clock__name">{name}</strong> time is{' '}
        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
