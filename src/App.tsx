import { Component } from 'react';
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

export class App extends Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  id = 0;

  componentDidMount() {
    this.id = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleLeftMouseClick);
    document.addEventListener('contextmenu', this.handleRigthMouseClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.id);
    document.removeEventListener('click', this.handleLeftMouseClick);
    document.removeEventListener('click', this.handleRigthMouseClick);
  }

  handleLeftMouseClick = () => {
    this.setState({ hasClock: true });
  };

  handleRigthMouseClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        { this.state.hasClock
          && <Clock clockName={this.state.clockName} /> }
      </div>
    );
  }
}
