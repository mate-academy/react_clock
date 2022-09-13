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

  second = 0;

  componentDidMount() {
    this.second = window.setInterval(this.secondTime, 1000);
  }

  componentDidUpdate(prevState: Props) {
    if (this.props.clockName !== prevState.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.second);
  }

  secondTime = () => {
    this.setState({ today: new Date() });
  };

  render() {
    // eslint-disable-next-line no-console, @typescript-eslint/no-unused-expressions
    console.info(this.state.today.toLocaleTimeString());

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
