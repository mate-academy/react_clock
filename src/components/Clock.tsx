import React from 'react';

type Props = {
  clockName: string | number;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  interval = setInterval(() => {
    this.setState({ date: new Date() });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.interval;
  }

  componentDidUpdate(prevProps: { clockName: string | number }) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from oldName: "${prevProps.clockName}" to newName: "${this.props.clockName}"`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { date } = this.state;

    return (
      <div id="clock">
        <h1>{this.props.clockName}</h1>
        <p>
          Current time:
          {' '}
          {date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
