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
      this.setState({ date: new Date() })),
    1000);
    // eslint-disable-next-line
    console.log("Started");
  }

  componentDidUpdate(prevProps: Time) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`Old name ${oldName} changed to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    // eslint-disable-next-line
    console.log('Stopped');
  }

  render(): React.ReactNode {
    const { date } = this.state;
    const { name } = this.props;
    const localeTime = date.toLocaleTimeString();

    return (
      <div className="clock__info">
        <h2 className="clock__time">{`CLOCKNAME: ${name}`}</h2>
        <h1 className="clock__time">{localeTime}</h1>
      </div>
    );
  }
}
