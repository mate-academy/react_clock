import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

const getNewDateString = () => {
  return new Date().toUTCString().slice(-12, -4);
};

export class Clock extends Component<Props, State> {
  state = {
    today: getNewDateString(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: getNewDateString() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (this.state.today !== prevState.today) {
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }

    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
