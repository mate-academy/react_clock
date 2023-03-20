import './App.scss';
import { Component } from 'react';
import { Clock } from './componenents/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean,
  clockName: string;
}

export class App extends Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(_: unknown, prevState: State) {
    /* eslint-disable no-console */
    if (prevState.clockName !== this.state.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
       && (
         <div>
           <strong className="Clock__name">
             {clockName}
           </strong>
           <Clock />
         </div>
       )}
      </div>
    );
  }
}
