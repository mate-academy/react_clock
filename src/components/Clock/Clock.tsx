import { Component } from 'react';

type State = {
  clockTime: Date,
};

type Props = {
  hasClock: boolean,
  clockName: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    clockTime: new Date(),
  };

  clockInterval = 0;

  componentDidMount() {
    this.clockInterval = window.setInterval(() => {
      this.setState({ clockTime: new Date() });

      if (this.props.hasClock) {
        // eslint-disable-next-line no-console
        console.info(this.state.clockTime.toUTCString().slice(-12, -4));
      }
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.clockInterval);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.clockTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
