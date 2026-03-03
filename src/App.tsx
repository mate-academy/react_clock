import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameTimerId: number | undefined = undefined;

  handlerContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handlerClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handlerClick);
    document.addEventListener('contextmenu', this.handlerContextMenu);
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handlerClick);
    document.removeEventListener('contextmenu', this.handlerContextMenu);
    window.clearInterval(this.nameTimerId);
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
