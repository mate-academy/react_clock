import React from 'react';
import Clock from './components/Clock';
import './App.scss';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  private timerID?: number;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  setRandomName = () => {
    this.setState({
      clockName: this.getRandomName(),
    });
  }

  handleLeftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.timerID = window.setInterval(this.setRandomName, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.timerID);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
