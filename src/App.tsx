import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

// This function generates a random clock name
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  // przechowuje ID timera zmieniającego nazwę
  nameTimerId: number | null = null;

  //stan początkowy aplikacji
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    //prawy klik contextmenu → ukryj zegar // lewy klik → pokaż zegar
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    // This code starts a timer, co 3300 ms generuje sie nowa nazwa zegara
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  // this code stops the timer
  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);

    if (this.nameTimerId) {
      window.clearInterval(this.nameTimerId);
    }
  }

  // handler prawego przycisku contextmenu
  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  // handler lewego przycisku myszy
  showClock = () => {
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
