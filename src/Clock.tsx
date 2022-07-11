import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      let { date } = this.state;

      date = new Date();
      this.setState({ date });
      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevState: Props) {
    if (prevState.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevState.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    // eslint-disable-next-line no-console
    console.log('GAME OVER');
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <div className="clock">
        <strong>{clockName}</strong>
        {' time is '}
        {date.toLocaleTimeString()}
      </div>
    );
  }
}
