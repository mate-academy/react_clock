import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppProps = {};

type AppState = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<AppProps, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({
        hasClock: false,
      });
    });
    document.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });

    window.setInterval(() => {
      // this.state.clockName = newName;
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentDidUpdate(_prevProp: AppProps, prevState: AppState): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  render() {
    let content;

    if (this.state.hasClock) {
      content = (
        <Clock clockName={this.state.clockName} />
      );
    }

    return (
      <div className="App">
        <h1>React clock</h1>
        {content}
      </div>
    );
  }
}
