import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleMouseLeftClick);

    document.addEventListener('click', this.handleMouseRightClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(prevState: State): void {
    const { hasClock: prevHasClock } = prevState;
    const { hasClock } = this.state;

    if (hasClock === false && prevHasClock === true) {
      window.clearInterval(this.timerId);
    }

    if (hasClock === true && prevHasClock === false) {
      this.timerId = window.setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleMouseLeftClick);
    document.removeEventListener('click', this.handleMouseRightClick);
  }

  handleMouseLeftClick = (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleMouseRightClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {
          hasClock
          && (
            <Clock name={clockName} />
          )
        }
      </div>
    );
  }
}
