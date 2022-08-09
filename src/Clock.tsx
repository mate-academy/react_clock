import { Component } from 'react';

type State = {
  time: Date,
};

type Props = {
  randomName: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });

      // eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { randomName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {randomName}
        </strong>
        { ' ' }
        time is
        { ' ' }
        <span className="Clock__time">
          {time.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
