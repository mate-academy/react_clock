import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string,
  hasClock: boolean,
  today: Date,
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
    today: new Date(),
  };

  clockNameTimerId = 0;

  clockIteratorTimerId = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('contextmenu', this.handleDocumentContextMenu);

    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.clockIteratorTimerId = this.runTimer();
  }

  componentDidUpdate(
    _prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('contextmenu', this.handleDocumentContextMenu);

    window.clearInterval(this.clockNameTimerId);
  }

  handleDocumentClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true, today: new Date() });

      this.clockIteratorTimerId = this.runTimer();
    }
  };

  handleDocumentContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
      window.clearInterval(this.clockIteratorTimerId);
    }
  };

  runTimer = () => {
    return window.setInterval(() => {
      const today = new Date();

      this.setState({ today });
      // eslint-disable-next-line no-console
      console.info(today.toUTCString().slice(-12, -4));
    }, 1000);
  };

  render() {
    const { clockName, hasClock, today } = this.state;
    const formattedTime = today.toUTCString().slice(-12, -4);

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>

            {' time is '}

            <span className="Clock__time">
              {formattedTime}
            </span>
          </div>
        )}
      </div>
    );
  }
}
