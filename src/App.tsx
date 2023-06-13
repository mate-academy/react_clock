import { Component } from 'react';
import { Clock } from './components/Clock';
import { getRandomName } from './components/utils';
import './App.scss';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock - 0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.leftClickHandler);

    document.addEventListener('contextmenu', this.rightClickHandler);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
    document.removeEventListener('click', this.leftClickHandler);
    document.removeEventListener('contextmenu', this.rightClickHandler);
  }

  leftClickHandler = () => {
    this.setState({ hasClock: true });
  };

  rightClickHandler = (e: MouseEvent) => {
    e.preventDefault();
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
