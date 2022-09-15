import { Component } from 'react';

type State = {
  today: string;
  why: string;
};

type Props = {
  name: string;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date().toLocaleTimeString(),
    why: this.props.name,
  };

  oneSecondTimer = 0;

  componentDidMount() {
    this.oneSecondTimer = window.setInterval(() => {
      this.setState({ today: new Date().toLocaleTimeString() });
      this.setState({ why: this.props.name });
      // eslint-disable-next-line
      console.info(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(_prevProps: unknown, prevState: State) {
    // eslint-disable-next-line
    prevState.why !== this.state.why && console.debug(
      `Renamed from ${prevState.why} to ${this.state.why}`,
    );
  }

  componentWillUnmount() {
    clearInterval(this.oneSecondTimer);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today}
        </span>
      </div>
    );
  }
}
