import { Component } from 'react';
import { Clock } from './Clock';

import './App.scss';

function getRandomName(): string {
  const value = Date.now()
    .toString()
    .slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);

    this.clockId = window.setInterval(() => {
      this.updateName();
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);

    window.clearInterval(this.clockId);
  }

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  updateName() {
    this.setState({ clockName: getRandomName() });
  }

  render() {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}

      </div>
    );
  }
}
