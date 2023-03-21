import React from 'react';

import './App.scss';

import Clock from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timeId: NodeJS.Timer | undefined = undefined;

  componentDidMount(): void {
    this.timeId = setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    if (this.timeId) {
      clearInterval(this.timeId);
    }

    document.removeEventListener('contextmenu', this.handleRightClick);

    document.removeEventListener('click', this.handleClick);
  }

  handleRightClick = (event: MouseEvent): void => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleClick = (): void => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
