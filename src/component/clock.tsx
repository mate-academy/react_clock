import { Component } from 'react';

type State = {
  today: string;
};

type Props = {
  name: string;
};

function getToday(): string {
  return (new Date()).toUTCString().slice(-12, -4);
}

function extractNumberFromClockName(clockName: string): number | null {
  let number = '';

  for (let i = 0; i < clockName.length; i += 1) {
    if ('0123456789'.includes(clockName[i])) {
      number += clockName[i];
    } else if (number.length > 0) {
      break;
    }
  }

  return (number.length === 0) ? null : +number;
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: getToday(),
  };

  timerIdToday = 0;

  componentDidMount(): void {
    this.timerIdToday = window.setInterval(() => {
      this.setState({ today: getToday() });
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const prevNameClockNumber = extractNumberFromClockName(prevProps.name);
    const newNameClockNumber = extractNumberFromClockName(this.props.name);

    if (prevNameClockNumber !== null && newNameClockNumber !== null) {
      const timeBetweenCalls = (newNameClockNumber < prevNameClockNumber)
        ? 10000 - prevNameClockNumber + newNameClockNumber
        : newNameClockNumber - prevNameClockNumber;

      if (timeBetweenCalls > 0) {
        // eslint-disable-next-line no-console
        console.debug(
          `Renamed from ${prevProps.name}`
            + ` to ${this.props.name}`,
        );
      }
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdToday);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          { name }
        </strong>

        {' time is '}

        <span className="Clock__time">
          { today }
        </span>
      </div>
    );
  }
}
