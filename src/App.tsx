import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (ev) => {
      this.clickRight(ev);
    });

    document.addEventListener('click', () => {
      this.clickLeft();
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount():void {
    document.removeEventListener('contextmenu', (ev) => {
      this.clickRight(ev);
    });

    document.removeEventListener('click', () => {
      this.clickLeft();
    });

    window.clearInterval(this.timerId);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  clickRight = (ev: MouseEvent) => {
    ev.preventDefault();

    this.setState({ hasClock: false });
  };

  clickLeft = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={this.state.clockName} />
        )}

      </div>
    );
  }
}
