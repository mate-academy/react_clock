import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  isClock: boolean;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    isClock: true,
  };

  timerId: number | undefined;

  handleRightMouseClick = () => {
    this.setState(currentState => ({
      ...currentState,
      isClock: false,
    }));
  };

  handleLeftMouseClick = () => {
    this.setState(currentState => ({
      ...currentState,
      isClock: true,
    }));
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleRightMouseClick);
    document.addEventListener('click', this.handleLeftMouseClick);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
      document.removeEventListener('contextmenu', this.handleRightMouseClick);
      document.removeEventListener('click', this.handleLeftMouseClick);
    }
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
