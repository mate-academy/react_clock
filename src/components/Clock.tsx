import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: string;
};

export class Clock extends Component<Props, State> {
  intervalId = 0;

  state: Readonly<State> = {
    currentTime: '',
  };

  componentDidMount() {
    this.setState({ currentTime: this.getCurrentTime() });

    this.intervalId = window.setInterval(() => {
      this.setState({ currentTime: this.getCurrentTime() });

      window.console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name } = this.props;

    if (oldName !== name) {
      window.console.debug(`Renamed from ${oldName} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  getCurrentTime = () => ((new Date()).toUTCString().slice(-12, -4));

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
