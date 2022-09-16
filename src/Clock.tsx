import { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.timer, 1000);
  }

  componentDidUpdate(prevState: Props) {
    const { clockName } = prevState;

    if (this.props.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  timer = () => {
    this.setState({ today: new Date() });
    // eslint-disable-next-line no-console, @typescript-eslint/no-unused-expressions
    console.info(this.state.today.toLocaleTimeString());
  };

  render() {
    return (
      <div className="Clock">
        <p>
          Click Right Mouse Button to
          <strong> Hide Clock</strong>
        </p>
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
