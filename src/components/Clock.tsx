import { Component } from 'react';
import './Clock.scss';

type State = {
  today: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line
      console.info(this.state.today.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;
    const { clockName: prevClockName } = prevProps;

    if (prevClockName !== clockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevClockName} to ${ clockName }`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
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
