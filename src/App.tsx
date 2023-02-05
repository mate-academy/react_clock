import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameUpdateTimerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.leftClickHandler);

    document.addEventListener('click', this.rightClickHandler);

    this.nameUpdateTimerId = window.setInterval(() => {
      const clockName = this.getRandomName();

      this.setState({ clockName });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.nameUpdateTimerId);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  rightClickHandler = () => {
    this.setState({ hasClock: true });
  };

  leftClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
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
