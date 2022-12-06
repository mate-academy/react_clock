import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  updateTimeId = 0;

  componentDidMount() {
    this.updateTimeId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.updateTimeId);
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
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
