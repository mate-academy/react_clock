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
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timer = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);

    this.timer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);

    window.clearInterval(this.timer);
  }

  handleRightClick = () => {
    this.setState({
      hasClock: false,
    });
  };

  handleLeftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { hasClock: isOpenClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isOpenClock && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}
