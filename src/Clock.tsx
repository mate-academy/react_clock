import { Component, ReactNode } from 'react';

type Props = {
  clockName: string,
};

type State = {
  today: Date,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      console.info(this.state.today.toLocaleTimeString()); // eslint-disable-line
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.clockName !== prevProps.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`); // eslint-disable-line
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render(): ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
