import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<Props, State> {
  state: State = {
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
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentDidUpdate(_prevProp: Props, prevState: State): void {
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
