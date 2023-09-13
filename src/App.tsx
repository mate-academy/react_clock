import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';
import { getRandomName } from './helpers';

interface State {
  hasClock: boolean;
  clockName: string;
  clockNameId: number;
}

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    clockNameId: 0,
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
    const nameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.setState({ clockNameId: nameId });
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.state.clockNameId);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock: isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}

/* const today = new Date();
let clockName = 'Clock-0';

// This code starts a timer

// this code stops the timer
window.clearInterval(timerId); */
