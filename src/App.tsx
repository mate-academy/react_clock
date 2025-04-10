import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  hasClock: boolean;
  clockName: string;
  today: Date;
};

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: false,
    clockName: 'Clock-0',
    today: new Date(),
  };

  timerId: number | undefined;

  dateId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    this.dateId = window.setInterval(() => {
      const newDate = new Date();
      const newTime = newDate.toUTCString().slice(-12, -4);

      this.setState({ today: newDate }, () => {
        if (this.state.hasClock === true) {
          // eslint-disable-next-line no-console
          console.log(newTime);
        }
      });
    }, 1000);

    this.setState({ hasClock: true });

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount(): void {
    if (this.timerId !== undefined) {
      window.clearInterval(this.timerId);
    }

    if (this.dateId !== undefined) {
      window.clearInterval(this.dateId);
    }

    this.setState({ hasClock: false });

    document.removeEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
