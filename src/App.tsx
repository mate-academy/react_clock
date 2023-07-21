import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};
type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.PureComponent<Props, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameUpdateTimerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.nameUpdateTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);

    window.clearInterval(this.nameUpdateTimerId);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

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
