import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('click', this.handleLeftClick);

    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.handleLeftClick);

    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  handleLeftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.setState({
      hasClock: false,
    });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
