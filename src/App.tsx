import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameId: number | null = null;

  componentDidMount() {
    this.nameId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    window.addEventListener('click', this.handleMouseClick);
    window.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleMouseClick);
    window.removeEventListener('contextmenu', this.handleContextMenu);

    if (this.nameId !== null) {
      window.clearInterval(this.nameId);
    }
  }

  handleMouseClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
