import React from 'react';
import './App.scss';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContext);
    document.addEventListener('click', this.handleClick);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleContext);
    document.removeEventListener('click', this.handleClick);
    window.clearInterval(this.timerId);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContext = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName } = this.state;
    const { hasClock } = this.state;

    return (
      <>
        <div className="App">
          <h1 className="App__title">React clock</h1>
        </div>

        { hasClock
          ? <Clock nameOfClock={clockName} />
          : (
            <Box className="Awaiting" sx={{ display: 'flex' }}>
              <CircularProgress color="inherit" />
            </Box>
          )}
      </>
    );
  }
}
