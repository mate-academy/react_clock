import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockName = 0;

  handlerRightClick = () => {
    this.setState({ hasClock: false });
  };

  handlerLeftClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount() {
    this.clockName = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('contextmenu', this.handlerRightClick);
    document.addEventListener('click', this.handlerLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockName);

    document.removeEventListener('contextmenu', this.handlerRightClick);
    document.removeEventListener('click', this.handlerLeftClick);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
