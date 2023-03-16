import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  displayClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    displayClock: true,
  };

  clockNameId = 0;

  componentDidMount() {
    this.clockNameId = window.setInterval(this.clockNameChanger, 3300);

    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount() {
    clearInterval(this.clockNameId);

    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  clockNameChanger = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleLeftClick = () => {
    this.setState({ displayClock: true });
  };

  handleRightClick = (event: Event) => {
    event.preventDefault();

    this.setState({ displayClock: false });
  };

  render() {
    const { displayClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {displayClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
