import { Component } from 'react';

function getFormattedDate(): string {
  const date = new Date();

  return date.toUTCString().slice(-12, -4);
}

interface State {
  today: string;
}

interface Props {
  clockName: string;
}

export class Clock extends Component<Props> {
  state: Readonly<State> = {
    today: getFormattedDate(),
  };

  dateTimerId = window.setInterval(() => {
    const date = getFormattedDate();

    this.setState({ today: date });

    // eslint-disable-next-line no-console
    console.info(date);
  }, 1000);

  componentWillUnmount() {
    window.clearInterval(this.dateTimerId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
