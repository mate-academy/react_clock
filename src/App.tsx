import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  showClock: boolean;
};

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    showClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      showClock: false,
    });
  };

  handleLeftClick = () => {
    this.setState({
      showClock: true,
    });
  };

  render() {
    const { showClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {showClock && <Clock name={clockName} />}
      </div>
    );
  }
}
