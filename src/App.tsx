import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | undefined = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {

        this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.visible);
    document.addEventListener('click', this.invisible);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.visible);
    document.removeEventListener('click', this.invisible);
    window.clearInterval(this.timerId);
  }

  visible = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  invisible = () => {
    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
