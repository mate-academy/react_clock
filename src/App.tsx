import React from 'react';
import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean,
  clockName: string,
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    window.setInterval(() => this.setState(
      { clockName: getRandomName() },
    ), 3300);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <>
        <Typography
          align="center"
          color="primary"
        >
          <div className="App">
            <h1>React clock</h1>
            <AccessTimeIcon />
          </div>
        </Typography>

        {hasClock && <Clock name={clockName} />}
      </>
    );
  }
}
