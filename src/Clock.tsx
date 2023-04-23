import React from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  today: Date;
  clockName: string;
}

interface Props {
  clockName: string;
}

export default class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
    clockName: this.props.clockName,
  };

  eventListhenerIds: number[] = [];

  componentDidMount() {
    this.eventListhenerIds.push(
      window.setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300),
    );

    this.eventListhenerIds.push(
      window.setInterval(() => {
        const today = new Date();

        this.setState({ today });
        // eslint-disable-next-line no-console
        console.info(today.toUTCString().slice(-12, -4));
      }, 1000),
    );
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    this.eventListhenerIds.forEach(eventId => window.clearInterval(eventId));
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
