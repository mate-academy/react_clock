import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  currentDate: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentDate: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.updateClock();

      // eslint-disable-next-line no-console
      console.info(this.state.currentDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  updateClock() {
    this.setState({ currentDate: new Date() });
  }

  render() {
    const { currentDate } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentDate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
