import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  isClockVisible: boolean;
};

export class App extends Component {
  state: State = {
    isClockVisible: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleMouseRClick);
    document.addEventListener('click', this.handleMouseLClick);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleMouseRClick);
    document.removeEventListener('click', this.handleMouseLClick);
    window.clearInterval(this.timerId);
  }

  handleMouseLClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockVisible: true });
  };

  handleMouseRClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockVisible: false });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
