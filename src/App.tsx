import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleDocumentContextMenu);
    document.addEventListener('click', this.handleDocumentClick);
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  handleDocumentContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleDocumentClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock
            name={this.state.clockName}
          />
        )}
      </div>
    );
  }
}
