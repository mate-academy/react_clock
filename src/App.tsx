import { Component } from 'react';

import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  isClockVisible: boolean,
  clockName: string
};

export class App extends Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'Clock-0',
  };

  timerId  = 0;

  componentDidMount() {
    this.timerId  = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId );
    document.removeEventListener('contextmenu', this.handleLeftClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleLeftClick = () => {
    this.setState({ isClockVisible: true });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockVisible: false });
  };

  render() {
    const {
      isClockVisible,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>Time in Greenwich, London, UK</h1>
        {isClockVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}
