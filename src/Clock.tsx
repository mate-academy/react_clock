import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  clockName: string,
  today: Date,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends Component<Props, State> {
  state = {
    clockName: this.props.name,
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.info(this.state.today.toUTCString().slice(-12, -4));

    this.timerId = window.setInterval(() => {
      const oldName = this.state.clockName;
      const newName = getRandomName();

      this.setState({ clockName: newName });
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today, clockName } = this.state;

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
