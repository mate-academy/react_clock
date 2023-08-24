import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  showClock: boolean;
}

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    showClock: true,
  };

  private timerId: number | undefined = undefined;

  timer = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', this.handleContextMenu);
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('contextmenu', this.handleContextMenu);
    window.removeEventListener('click', this.handleClick);

    if (this.timerId !== undefined) {
      window.clearInterval(this.timerId);
    }
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      showClock: false,
    });
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      showClock: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.showClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
