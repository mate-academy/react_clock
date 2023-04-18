import { Component } from 'react';
import './App.scss';

import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  righClickHandler = (event: MouseEvent): void => {
    event.preventDefault();
  
    this.setState({ hasClock: false });
  };

  leftClickHandler = (): void => {
    this.setState({ hasClock: true });
  };

  nameInteralHandler = () => {
    this.setState({ clockName: getRandomName() });
  };

  nameTimerId = 0;

  componentDidMount() {
    window.addEventListener('contextmenu', this.righClickHandler);

    window.addEventListener('click', this.leftClickHandler);

    this.nameTimerId = window.setInterval(this.nameInteralHandler, 3300);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
