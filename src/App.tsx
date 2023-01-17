import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  isClockVisible: boolean,
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    isClockVisible: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ isClockVisible: false });
  };

  handleClick = () => {
    this.setState({ isClockVisible: true });
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
