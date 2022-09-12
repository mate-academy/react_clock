import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.timerId);
  }

  handleRightClick = (): void => {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });
  };

  handleLeftClick = (): void => {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <>
        {hasClock && <Clock clockName={clockName} />}
      </>
    );
  }
}
