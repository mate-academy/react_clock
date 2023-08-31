import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleClick);

    this.nameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleClick);

    window.clearInterval(this.nameId);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
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
