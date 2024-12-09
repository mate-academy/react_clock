import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  clockName: string;
  isClockVisible: boolean;
};

export class App extends React.Component<State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    isClockVisible: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ isClockVisible: false });
    });

    document.addEventListener('click', () => {
      this.setState({ isClockVisible: true });
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && (
          <Clock clockName={clockName} isClockVisible={isClockVisible} />
        )}
      </div>
    );
  }
}
