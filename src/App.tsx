import React from 'react';
import './App.scss';

import Clock from './components/Clock';

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

  componentDidMount(): void {
    this.timerId = window.setInterval(this.nameChange, 3300);
    document.addEventListener('contextmenu', this.clickRight);
    document.addEventListener('click', this.clickLeft);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.clickRight);
    document.removeEventListener('click', this.clickLeft);
  }

  nameChange = () => {
    this.setState({
      clockName: getRandomName(),
    });
  };

  clickRight = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  clickLeft = () => {
    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
