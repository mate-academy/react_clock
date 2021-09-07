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

  setTime: number | undefined;

  componentDidMount() {
    this.setTime = window.setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
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
