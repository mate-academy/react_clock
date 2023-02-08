import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  changeNameTimerId = 0;

  componentDidMount() {
    this.changeNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    window.addEventListener('click', this.handleLeftMouseClick);
    window.addEventListener('contextmenu', this.handleRightMouseClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.changeNameTimerId);
    window.removeEventListener('click', this.handleLeftMouseClick);
    window.removeEventListener('contextmenu', this.handleRightMouseClick);
  }

  handleLeftMouseClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightMouseClick = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
