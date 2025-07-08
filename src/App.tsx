import React from 'react';
import './App.scss';

type PropsClock = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

type StateApp = {
  today: Date;
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

class Clock extends React.Component<PropsClock> {
  componentDidUpdate(prevProps: Readonly<PropsClock>): void {
    const { today, clockName, hasClock } = this.props;

    if (prevProps.today !== today) {
      if (hasClock) {
        // eslint-disable-next-line no-console
        console.log(this.props.today.toUTCString().slice(-12, -4));
      }
    }

    if (prevProps.clockName !== clockName) {
      if (hasClock) {
        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevProps.clockName} to ${clockName}`);
      }
    }
  }

  render() {
    const { today, clockName, hasClock } = this.props;

    return (
      hasClock && (
        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      )
    );
  }
}

export class App extends React.Component<{}, StateApp> {
  state: StateApp = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerNameId = 0;

  timerTimeId = 0;

  handleVisibleClock = (e: MouseEvent) => {
    e.preventDefault();
    if (e.type === 'contextmenu') {
      this.setState({ hasClock: false });
    } else if (e.type === 'click') {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount(): void {
    this.timerTimeId = window.setInterval(() => {
      this.setState(() => ({ today: new Date() }));
    }, 1000);

    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleVisibleClock);
    document.addEventListener('click', this.handleVisibleClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerTimeId);
    window.clearInterval(this.timerNameId);
    document.removeEventListener('contextmenu', this.handleVisibleClock);
    document.removeEventListener('click', this.handleVisibleClock);
  }

  render() {
    const { today, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <Clock today={today} clockName={clockName} hasClock={hasClock} />
      </div>
    );
  }
}
