/* eslint-disable default-case */
import { Component } from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Required<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameTimerId = 0;

  componentDidMount() {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handlerMouseClick);
    document.addEventListener('contextmenu', this.handlerMouseClick);
  }

  componentWillUnmount() {
    clearInterval(this.nameTimerId);

    document.removeEventListener('click', this.handlerMouseClick);
    document.removeEventListener('contextmenu', this.handlerMouseClick);
  }

  handlerMouseClick = (e: MouseEvent) => {
    switch (e.button) {
      case 0:
        this.setState({ hasClock: true });
        break;

      case 2:
        e.preventDefault();

        this.setState({ hasClock: false });
        break;
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
