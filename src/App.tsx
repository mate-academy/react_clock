import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameTimer = 0;

  componentDidMount() {
    this.clockNameTimer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.handleRightClick();
    });

    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameTimer);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleClick);
  }

  handleRightClick = () => (this.setState({ hasClock: false }));

  handleClick = () => (this.setState({ hasClock: true }));

  render(): React.ReactNode {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}

      </div>
    );
  }
}
