import { Component } from 'react';
import './App.scss';
import { Clock } from './component/clock';

type State = {
  hasClock: boolean;
  clockDate: number;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockDate: 0,
  };

  timerIdClockDate = 0;

  componentDidMount(): void {
    this.timerIdClockDate = window.setInterval(() => {
      this.setState({ clockDate: Date.now() });
    }, 3300);

    document.addEventListener('click', (): void => {
      this.handleClick();
    });

    document.addEventListener('contextmenu', (event: MouseEvent): void => {
      this.handleContextmenu(event);
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextmenu);
    window.clearInterval(this.timerIdClockDate);
  }

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockDate } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock date={clockDate} />}
      </div>
    );
  }
}
