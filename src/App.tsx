import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimerId = 0;

  hundleRightClick = (event: MouseEvent) => {
    if (this.state.hasClock) {
      event.preventDefault();
      this.setState({ hasClock: false });
    }
  };

  hundleLeftClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };



  componentDidMount(): void {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.hundleRightClick);
    document.addEventListener('click', this.hundleLeftClick);
  }


  componentWillUnmount(): void {
    window.clearInterval(this.nameTimerId);
    document.removeEventListener('contextmenu', this.hundleRightClick);
    document.removeEventListener('click', this.hundleLeftClick);
  }


  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}

