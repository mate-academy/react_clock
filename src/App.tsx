import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameChangeId = 0;

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    this.nameChangeId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    window.addEventListener('click', this.handleLeftClick);
    window.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.nameChangeId);
    window.removeEventListener('click', this.handleLeftClick);
    window.removeEventListener('contextmenu', this.handleRightClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
