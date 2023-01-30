import { Component } from 'react';

const formatDate = (date: Date): string => date.toUTCString().slice(-12, -4);

type State = {
  today: Date,
};

type Props = {
  clockName: string;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line
      console.info(formatDate(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const prevName = prevProps.clockName;
    const newName = this.props.clockName;

    if (prevName !== newName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatDate(today)}
        </span>
      </div>
    );
  }
}
