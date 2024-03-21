import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  randomTimerId = 0;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightButton);
    document.addEventListener('click', this.handleLeftButton);

    this.randomTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.randomTimerId);
  }

  handleRightButton = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    // this.componentWillUnmount();
  };

  handleLeftButton = () => {
    this.setState({ hasClock: true });

    // if (!this.state.hasClock) {
    //   this.componentDidMount();
    // }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
