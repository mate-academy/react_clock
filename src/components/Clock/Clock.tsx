import { Component, ReactNode } from 'react';

type State = {
  today: Date,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  clockTimerId = 0;

  componentDidMount() {
    this.clockTimerId = window.setInterval(() => {
      const { today } = this.state;
      const newToday = new Date(today.getTime() + 1000);

      // eslint-disable-next-line no-console
      console.info(newToday.toUTCString().slice(-12, -4));

      this.setState({
        today: newToday,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
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
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
