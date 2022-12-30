import React from 'react';
import './App.scss';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  counterRandomName = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    this.counterRandomName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(): void {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount(): void {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });
  }

  render() {
    const { clockName } = this.state;
    const { hasClock } = this.state;

    return (
      <>
        <div className="App">
          <h1 className="App__title">React clock</h1>
        </div>

        { hasClock && <Clock nameOfClock={clockName} /> }
        { hasClock === false
        && (
          <Box className="Awaiting" sx={{ display: 'flex' }}>
            <CircularProgress color="inherit" />
          </Box>
        ) }
      </>
    );
  }
}
