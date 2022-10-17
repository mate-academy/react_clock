import { Component } from 'react';

type State = {
  today: string;
};

type Props = {
  name: string;
};

function getToday(): string {
  return (new Date()).toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: getToday(),
  };

  timerIdToday = 0;

  componentDidMount(): void {
    this.timerIdToday = window.setInterval(() => {
      this.setState({ today: getToday() });
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.name}`
          + ` to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdToday);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          { name }
        </strong>

        {' time is '}

        <span className="Clock__time">
          { today }
        </span>
      </div>
    );
  }
}
