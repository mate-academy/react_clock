import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prev: Props) {
    const newState = this.props.clockName;
    const oldState = prev.clockName;

    if (newState !== oldState) {
      // eslint-disable-next-line
      console.log(`Renamed from ${oldState} to ${newState}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    // eslint-disable-next-line
    console.clear();
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
