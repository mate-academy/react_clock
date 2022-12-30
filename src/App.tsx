import React from 'react';
import './App.scss';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.leftClickHandler);
    document.addEventListener('contextmenu', this.rightClickHandler);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.leftClickHandler);
    document.removeEventListener('contextmenu', this.rightClickHandler);
  }

  leftClickHandler = () => {
    this.setState({ hasClock: true });
  };

  rightClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: '200px',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            backgroundColor: '#aaa',
            px: 20,
            py: 10,
            transition: 'all 0.5s',
            '&:hover': {
              backgroundColor: '#eaa',
            },
          }}
        >
          <div className="App">
            <h1>React clock</h1>

            {hasClock && <Clock clockName={clockName} />}
            {!hasClock && (
              <Box className="Loading">
                <LinearProgress color="inherit" />
              </Box>
            )}
          </div>
        </Paper>
      </Box>
    );
  }
}
