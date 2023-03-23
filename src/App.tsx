import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.clockHide);

    document.addEventListener('click', this.clockShow);
  }

  componentWillUnmount() {
    clearInterval(this.timer);

    document.removeEventListener('contextmenu', this.clockHide);

    document.removeEventListener('click', this.clockShow);
  }

  clockShow = () => {
    this.setState({ hasClock: true });
  };

  clockHide = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {
          this.state.hasClock
          && <Clock clockName={this.state.clockName} />
        }
      </div>
    );
  }
}
