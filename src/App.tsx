import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentLeftClick);
    document.addEventListener('contextmenu', this.handleDocumentRightClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleDocumentLeftClick);
    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
    window.clearInterval(this.timerId);
  }

  handleDocumentLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}
