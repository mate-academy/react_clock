import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockIsVisible: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    clockIsVisible: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextmenu);
    document.addEventListener('click', this.handleClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ clockIsVisible: false });
  };

  handleClick = () => {
    this.setState({ clockIsVisible: true });
  };

  componentWillUnount(): void {
    document.removeEventListener('contextmenu', this.handleContextmenu);
    document.removeEventListener('click', this.handleClick);
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {
          this.state.clockIsVisible
          && <Clock clockName={this.state.clockName} />
        }
      </div>
    );
  }
}
