import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  setTime = setInterval(() => {
    this.setState({ date: new Date() });

    const date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.setTime;
  }

  componentWillUnmount() {
    clearInterval(this.setTime);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <>
        <div className="clock-name h2 text-center">{clockName}</div>
        <div className="current-time h4 text-center">
          Current time:
          {' '}
          {date.toLocaleTimeString()}
        </div>
      </>
    );
  }
}
