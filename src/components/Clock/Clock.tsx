import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends Component<Props, State> {
  intervalId = 0;

  state: Readonly<State> = {
    currentTime: new Date(),
  };

  getCurrentTime = (date: Date) => date.toUTCString().slice(-12, -4);

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      const newTime = new Date();

      this.setState({ currentTime: newTime });

      // eslint-disable-next-line no-console
      console.log(this.getCurrentTime(newTime));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name } = this.props;

    if (oldName !== name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${oldName} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.getCurrentTime(currentTime)}</span>
      </div>
    );
  }
}
