import React from 'react';
import './App.scss';
import Clock from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = { hasClock: boolean };
type State = { clockName: string, isClockShown: boolean };

class App extends React.Component <Props, State> {
  updateNameId = 0;

  state: Readonly<State> = {
    clockName: 'Clock-0',
    isClockShown: this.props.hasClock,
  };

  componentDidMount(): void {
    this.updateNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('mousedown', this.showClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.updateNameId);
    document.removeEventListener('contextmenu', this.hideClock);
    document.addEventListener('mousedown', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockShown: false });
  };

  showClock = () => {
    this.setState({ isClockShown: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockShown && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
