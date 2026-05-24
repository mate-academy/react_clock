import { Component } from 'react';
import { Clock } from './components/Clock';
import { getRandomName } from './utils/getRandomName';
import './App.scss';

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, State> {
  private timerId: number | null = null;

  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

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
