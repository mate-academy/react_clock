import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type Props = {};
type State = {
  hasClock: boolean | string;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state = {
    hasClock: true,
    clockName: `Clock-0`,
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleMouseEvent);
    document.addEventListener('click', this.handleMouseEvent);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.handleMouseEvent);
    document.removeEventListener('click', this.handleMouseEvent);
  }

  handleMouseEvent = (event: MouseEvent) => {
    if (event.type === 'contextmenu') {
      event.preventDefault();
      this.setState({ hasClock: false });
    } else {
      this.setState({ hasClock: true });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock dayProps={clockName} />}
      </div>
    );
  }
}
