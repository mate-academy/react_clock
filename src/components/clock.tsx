import { Component } from 'react';

const timeString = (date: Date): string => date.toUTCString().slice(-12, -4);

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

  timerdId = 0;

  componentDidMount() {
    this.timerdId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(_: never, prevState: State) {
    const { today } = this.state;

    if (today !== prevState.today) {
      window.console.info(timeString(this.state.today));
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerdId);
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
          {timeString(today)}
        </span>
      </div>
    );
  }
}
