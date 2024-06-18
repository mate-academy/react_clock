import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state: State = { hasClock: true, clockName: 'Clock-0' };

  timerId = 0;

  clickOnWindow = (e: MouseEvent) => {
    if (e.button === 0) {
      this.setState({ hasClock: true });
    }
  };

  handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    window.addEventListener('click', this.clickOnWindow);
    window.addEventListener('contextmenu', this.handleContextMenu);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.removeEventListener('click', this.clickOnWindow);
    window.removeEventListener('contextmenu', this.handleContextMenu);
    window.clearInterval(this.timerId);
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
