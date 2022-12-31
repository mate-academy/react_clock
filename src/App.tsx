import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

// export const App: React.FC = () => {
//   const today = new Date();
//   let clockName = 'Clock-0';

//   // This code starts a timer // comDid Mount
//   const timerId = window.setInterval(() => {
//     clockName = getRandomName();
//   }, 3300);

//   // this code stops the timer //comWillUnm + clic
//   window.clearInterval(timerId);

//   return (

//   );
// };

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handlerContextMenu);
    document.addEventListener('click', this.handlerClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handlerContextMenu);
    document.removeEventListener('click', this.handlerClick);
  }

  handlerClick = () => (
    this.setState({ hasClock: true })
  );

  handlerContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
        && (
          <Clock
            clockName={clockName}
          />
        )}

      </div>
    );
  }
}
