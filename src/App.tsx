import { FC, Component } from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  isVisible: boolean,
};

export class App2 extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    isVisible: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.contextMenuHandler);
    document.addEventListener('click', () => {
      this.setState({ isVisible: true });
    });

    // window.setInterval(() => {
    //   this.setState({ today: new Date() });
    // }, 1000);
    // this.timerId = window.setInterval(() => {
    //   this.setState({ clockName: getRandomName() });
    // }, 300); // + <---- reset to 3300 ms
  }

  contextMenuHandler = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ isVisible: false });
  };

  render() {
    const { clockName, isVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          isVisible && <Clock clockName={clockName} />
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
