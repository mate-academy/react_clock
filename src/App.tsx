import React from 'react';
import './App.scss';

import Timer from './components/Timer';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  randomName = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.onRightClick);
    document.addEventListener('click', this.onLeftClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.onRightClick);
    document.removeEventListener('click', this.onLeftClick);
    window.clearInterval(this.randomName);
  }

  onRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  onLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Timer clockName={this.state.clockName} />}
      </div>
    );
  }
}
