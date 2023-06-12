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

  timeInterval: number | undefined;

  componentDidMount(): void {
    document.addEventListener('click', this.leftClickHandler);
    document.addEventListener('contextmenu', this.rightClickHandler);
    const interval = window.setInterval(() => this.setState(
      { clockName: getRandomName() },
    ), 3300);

    this.timeInterval = interval;
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.leftClickHandler);
    document.removeEventListener('contextmenu', this.rightClickHandler);
    window.clearInterval(this.timeInterval);
  }

  leftClickHandler = () => {
    if (this.timeInterval) {
      this.setState({ hasClock: true });
    }
  };

  rightClickHandler = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

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
