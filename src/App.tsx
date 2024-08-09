import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  private renameTimer = 0;

  componentDidMount(): void {
    this.renameTimer = window.setInterval(this.renameClock, 3300);

    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.renameTimer);

    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
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

  private handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  private handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  private renameClock = () => {
    this.setState({
      clockName: this.getRandomName(),
    });
  };

  private getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }
}
