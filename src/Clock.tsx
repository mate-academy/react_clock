import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  currentTime: Date,
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

      // eslint-disable-next-line
      console.info(this.getTimeFromDate(currentTime));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getTimeFromDate = (date: Date) => {
    return date.toUTCString().slice(-12, -4);
  };

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
          {this.getTimeFromDate(currentTime)}
        </span>
      </div>
    );
  }
}
