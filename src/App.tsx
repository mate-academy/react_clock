import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerIdName = 0;

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();

    if (!this.state.hasClock) {
      return;
    }

    this.setState({ hasClock: false });
  };

  handleDocumentLeftClick = () => {
    if (this.state.hasClock) {
      return;
    }

    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.timerIdName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleDocumentRightClick);
    document.addEventListener('click', this.handleDocumentLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdName);

    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
    document.removeEventListener('click', this.handleDocumentLeftClick);
  }

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
