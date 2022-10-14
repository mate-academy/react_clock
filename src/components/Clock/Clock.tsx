import { Component } from 'react';

type Props = {
  name: string
};

type State = {
  currentTime: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      this.setState({ currentTime });

      // eslint-disable-next-line no-console
      console.info(currentTime.toTimeString().slice(0, 8));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toTimeString().slice(0, 8)}
        </span>
      </div>
    );
  }
}
