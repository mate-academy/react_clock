import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.PureComponent {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerNameId = 0;

  componentDidMount(): void {
    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.clickHandle);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerNameId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.clickHandle);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  clickHandle = () => {
    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={clockName} />}

      </div>
    );
  }
}
