import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);
    window.setInterval(() => {
      this.setState({
        clockName: this.getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.removeEventListener('click', this.leftClick);
    window.removeEventListener('contextmenu', this.rightClick);
  }

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  leftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  getRandomName = () => {
    const dateNow = Date.now().toString().slice(-4);

    return `Clock-${dateNow}`;
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
