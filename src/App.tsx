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
  clockName = 'Clock-0';

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  rightClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  leftClickHandler = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.rightClickHandler);
    document.addEventListener('click', this.leftClickHandler);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.rightClickHandler);
    document.removeEventListener('click', this.leftClickHandler);
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
