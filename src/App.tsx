import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  timerId = 0;

  state = {
    clockName: 'Clock-0',
    isClockVisible: true,
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleMouseLeftButtonClick);
    document.addEventListener('contextmenu', this.handleMouseRightButtonClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.handleMouseLeftButtonClick);
    document.removeEventListener(
      'contextmenu',
      this.handleMouseRightButtonClick,
    );
  }

  handleMouseLeftButtonClick = (event: MouseEvent) => {
    event.preventDefault();

    if (!this.state.isClockVisible) {
      this.setState({ isClockVisible: true });
    }
  };

  handleMouseRightButtonClick = (event: MouseEvent) => {
    event.preventDefault();
    if (this.state.isClockVisible) {
      this.setState({ isClockVisible: false });
    }
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
