import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<unknown, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  private nameTimerId = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState(prevState => ({
      hasClock: !prevState.hasClock,
    }));
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    window.addEventListener('contextmenu', this.handleRightClick);
    window.addEventListener('click', this.handleLeftClick);

    this.nameTimerId = window.setInterval(() => {
      this.setState({
        clockName: this.getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    clearInterval(this.nameTimerId);
    window.removeEventListener('contextmenu', this.handleRightClick);
    window.removeEventListener('click', this.handleLeftClick);

    // eslint-disable-next-line no-console
    console.log('App component is being unmounted');
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
