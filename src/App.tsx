import { FC, Component } from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  isClockVisible: boolean,
};

export class App2 extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    isClockVisible: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.contextMenuHandler);
    document.addEventListener('click', this.clickHandler);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300); // + <---- reset to 3300 ms
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.contextMenuHandler);
    document.removeEventListener('click', this.clickHandler);
  }

  contextMenuHandler = (e: MouseEvent) => {
    e.preventDefault(); // not to show the context menu
    this.setState({ isClockVisible: false });
  };

  clickHandler = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          isClockVisible && <Clock clockName={clockName} />
        }
      </div>
    );
  }
}

export const App: FC = () => {
  const today = new Date();
  let clockName = 'Clock-0';

  // This code starts a timer
  const timerId = window.setInterval(() => {
    clockName = getRandomName();
  }, 3300);

  // this code stops the timer
  window.clearInterval(timerId);

  return (
    <div className="App">
      <h1>React clock</h1>

      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    </div>
  );
};
