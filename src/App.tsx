import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  props?: object;
};

type State = {
  clockName: string;
  isClock: boolean;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    isClock: true,
  };

  timerId = 0;

  handleRightClick = () => {
    this.setState(currentState => ({
      ...currentState,
      isClock: false,
    }));
  };

  handleLeftClick = () => {
    this.setState(currentState => ({
      ...currentState,
      isClock: true,
    }));
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
