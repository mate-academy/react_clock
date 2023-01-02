import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  currentTime: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time: string = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime: time });

      // eslint-disable-next-line no-console
      console.info(time);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
