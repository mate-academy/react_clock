import { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.generateNewDate, 1000);
  }

  componentDidUpdate(prevName: Props) {
    const oldName = prevName.clockName;
    const newName = this.props.clockName;

    if (newName !== oldName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  generateNewDate = () => {
    this.setState({ today: new Date() });

    // eslint-disable-next-line no-console
    console.info(this.state.today.toLocaleTimeString());
  };

  render() {
    const { clockName } = this.props;
    const { today } = this.state;
    const timeString = today.toLocaleTimeString();

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}
        <span className="Clock__time">
          {timeString}
        </span>
      </div>
    );
  }
}
