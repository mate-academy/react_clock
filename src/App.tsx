import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  value = '';

  componentDidMount(): void {
    window.addEventListener('contextmenu', this.handlerRightClick);
    window.addEventListener('click', this.handlerLeftClick);

    this.timerId = window.setInterval(() => {
      const name = this.getRandomName();

      this.setState({ clockName: name });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.removeEventListener('contextmenu', this.handlerRightClick);
    window.removeEventListener('click', this.handlerLeftClick);
  }

  handlerRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handlerLeftClick = () => {
    this.setState({ hasClock: true });
  };

  getRandomName(): string {
    this.value = Date.now().toString().slice(-4);

    return `Clock-${this.value}`;
  }

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
        && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
