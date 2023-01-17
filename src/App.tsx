import { Component } from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  changeNameId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.contextMenuEvent);

    document.addEventListener('click', this.clickEvent);

    this.changeNameId = window.setInterval(() => {
      this.setState({ clockName: `${getRandomName()}` });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.changeNameId);
    document.removeEventListener('contextmenu', this.contextMenuEvent);
    document.removeEventListener('click', this.clickEvent);
  }

  contextMenuEvent = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  clickEvent = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
