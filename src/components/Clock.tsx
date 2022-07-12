import React from 'react';

type Time = {
  name: number,
};

export class Clock extends React.Component<Time, {}> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => (
      this.setState({ date: new Date() })), 1000);
    // eslint-disable-next-line no-console
    console.log('Start');
  }

  componentDidUpdate(prevProps: Time) {
    const nameBefore = prevProps.name;
    const nameNew = this.props.name;

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`Name ${nameBefore} was changed to ${nameNew}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    // eslint-disable-next-line no-console
    console.log('Stopped');
  }

  render(): React.ReactNode {
    const { date } = this.state;
    const { name } = this.props;
    const localeTime = date.toLocaleTimeString();

    // eslint-disable-next-line no-console
    console.log(localeTime);

    return (
      <div className="clock__table">
        <h1 className="clock__time clock__table-name">{`Clock name ${name}`}</h1>
        <h2 className="clock__time clock__table-time">{localeTime}</h2>
      </div>
    );
  }
}
