import { Component } from 'react';

interface Props {
  clockName: string;
}

interface State {
  today: string;
}

const getNewDate = () => new Date().toUTCString().slice(-12, -4);

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: getNewDate(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: getNewDate() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.clockName !== prevProps.clockName) {
      window.console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}}`);
    }

    if (this.state.today !== prevState.today) {
      window.console.info(this.state.today);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
