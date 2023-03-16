import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

function convertDateToString(today: Date): string {
  return today.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      window.console.info(convertDateToString(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const prevName = prevProps.name;
    const { name } = this.props;

    if (prevName !== name) {
      window.console.debug(`Renamed from ${prevName} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {convertDateToString(today)}
        </span>
      </div>
    );
  }
}
