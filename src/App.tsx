import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean
  clockName: string
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerID = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      this.mouseRightClick(event);
    });

    document.addEventListener('click', () => {
      this.mouseLeftClick();
    });

    this.timerID = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', (event: MouseEvent) => {
      this.mouseRightClick(event);
    });

    document.removeEventListener('click', () => {
      this.mouseLeftClick();
    });

    window.clearInterval(this.timerID);
  }

  mouseRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  mouseLeftClick = () => {
    this.setState({ hasClock: true });
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
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
