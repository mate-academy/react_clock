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

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleLeftMouseClick);
    document.addEventListener('contextmenu', this.handleRigthMouseClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
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
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasClock
          && <Clock clockName={clockName} /> }
      </div>
    );
  }
}
