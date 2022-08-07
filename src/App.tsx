import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string,
};

export class App extends Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);

    document.addEventListener('click',
      this.handleDocumentOnClick, false);

    document.addEventListener('contextmenu',
      this.handleDocumentOnContext, false);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleDocumentOnClick = (ev: Event) => {
    ev.preventDefault();
    this.setState({ hasClock: true });
  };

  handleDocumentOnContext = (ev: Event) => {
    ev.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
