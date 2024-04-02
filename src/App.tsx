import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameTimerId = 0;

  clickHandler = () => {
    this.setState({ hasClock: true });
  };

  rightClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.rightClickHandler);
    document.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameTimerId);

    document.removeEventListener('contextmenu', this.rightClickHandler);
    document.removeEventListener('click', this.clickHandler);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
