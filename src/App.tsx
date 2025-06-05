import { Component } from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

type State = {
  clockName: string;
  isClockVisible: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    isClockVisible: true,
  };

  timerId = 0;

  updateName = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleRightClick = (event: globalThis.MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockVisible: false });
  };

  handleLeftClick = () => {
    this.setState({ isClockVisible: true });
  };

  componentDidMount() {
    this.timerId = window.setInterval(this.updateName, 3300);
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
