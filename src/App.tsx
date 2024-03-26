import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  today: Date,
  clockName: string,
  hasCLock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    // eslint-disable-next-line react/no-unused-state
    today: new Date(),
    clockName: 'Clock-0',
    hasCLock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.state.clockName = getRandomName();
    }, 3300);

    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasCLock: true });
  };

    this.setState({ hasCLock: false });
  };

  render() {
    const { clockName, hasCLock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasCLock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>

            {' time is '}

            <Clock
              clockName={clockName}
            />
          </div>
        )}
      </div>
    );
  }
}
