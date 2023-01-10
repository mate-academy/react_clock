import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  time: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    time: (new Date()).toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: (new Date().toLocaleTimeString().slice(0, 8)) });
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentWillUpmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
