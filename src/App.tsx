import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

interface State {
  hasClock: boolean;
  clockName: string;
}

type Props = {};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  day = new Date();

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.onClick);
    document.addEventListener('contextmenu', this.onContextMenu);
  }

  onClick = () => {
    this.setState({ hasClock: true });
  };

  onContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}
