import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  visibleClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    visibleClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.leftClick);
    document.addEventListener('click', this.rightClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.leftClick);
    document.removeEventListener('contextmenu', this.rightClick);
  }

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({visibleClock: false});
  };

  leftClick = () => {
    this.setState({visibleClock: true});
  };

  render() {
    const { visibleClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {visibleClock && <Clock name={clockName} />}
      </div>
    );
  }
}
