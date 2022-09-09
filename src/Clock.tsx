import { Component, ReactNode } from 'react';

type State = {
  today: Date;
};

type Props = {
  clockName: string;
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.today.toLocaleTimeString());
    }, 1000);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      if (event) {
        clearInterval(this.timerId);
      }
    });
  }

  componentDidUpdate(prevDate: Props) {
    if (this.props.clockName !== prevDate.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevDate.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      if (event) {
        clearInterval(this.timerId);
      }
    });
  }

  getRandomDate = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render(): ReactNode {
    const { today } = this.state;

    return (
      <span className="Clock__time">
        {today.toLocaleTimeString()}
      </span>
    );
  }
}
