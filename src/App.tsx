import { Component } from 'react';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdClockName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    this.timerIdClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);

    window.clearInterval(this.timerIdClockName);
  }

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.light',
          border: '5px solid lightblue',
        }}
      >
        <div className="App">
          <h1 className="App__title">React clock</h1>
          <div className="App__clock">
            {this.state.hasClock && (
              <Clock name={this.state.clockName} />
            )}
          </div>
          <AccessTimeIcon
            sx={{
              p: 2,
              my: 0,
              mx: 'auto',
            }}
          />
        </div>
      </Box>
    );
  }
}
