import React from 'react';

type State = {
  date: Date,
};

type ClockProps = {
  name: string,
};

export class Clock extends React.Component<ClockProps, State> {
  state = {
    date: new Date(),
  };

  intervalId = 0;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      const currentDate = new Date();
      /* eslint-disable no-console */
      console.info(currentDate.toUTCString().slice(-12, -4));
      this.setState({ date: currentDate });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      /* eslint-disable no-console */
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { date: today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
