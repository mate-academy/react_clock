import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  isOpenClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: State = {
    isOpenClock: true,
    clockName: 'Clock-0',
  };

  timer = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.leftClickHandler);
    document.addEventListener('contextmenu', this.rightClickHandler);

    this.timer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.leftClickHandler);
    document.removeEventListener('contextmenu', this.rightClickHandler);

    window.clearInterval(this.timer);
  }

  rightClickHandler = () => {
    this.setState({
      isOpenClock: false,
    });
  };

  leftClickHandler = () => {
    this.setState({
      isOpenClock: true,
    });
  };

  render() {
    const { isOpenClock } = this.state;

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
