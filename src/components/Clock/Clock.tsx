import { Component, ReactNode } from 'react';

type State = {
  today: Date,
};

type Props = {
  name: string,
};

function getStringTimeFromDate(date: Date) {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  clockTimerId = 0;

  componentDidMount() {
    this.clockTimerId = window.setInterval(() => {
      const newToday = new Date();

      window.console.info(getStringTimeFromDate(newToday));

      this.setState({
        today: newToday,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      window.console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockTimerId);
  }

  render(): ReactNode {
    const { today } = this.state;
    const { name: clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getStringTimeFromDate(today)}
        </span>
      </div>
    );
  }
}
