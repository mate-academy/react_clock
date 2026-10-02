import React from 'react';

type Props = {
  name: string;
};

type ClockState = {
  today: Date;
};

export class Clock extends React.Component<Props, ClockState> {
  state: ClockState = {
    today: new Date(),
  };

  timerId = 0;

  // This code starts a timer
  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({ today });

      // eslint-disable-next-line no-console
      console.log(today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  // this code stops the timer
  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{name}</strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
