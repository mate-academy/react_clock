import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

// eslint-disable-next-line react/prefer-stateless-function

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate() {
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div>
        <h1>Clock Example</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>
            {' time is '}
            <Clock name={clockName} />
          </div>
        )}
      </div>
    );
  }
}
