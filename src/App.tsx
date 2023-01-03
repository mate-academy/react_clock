import {
  Alert, Skeleton, Typography,
} from '@mui/material';
import { Component } from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleLeftClick);
    document.addEventListener('click', this.handleRightClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleLeftClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleRightClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <Typography
          variant="h2"
        >
          React clock
        </Typography>

        {
          hasClock
            ? (
              <Alert severity="info">
                <strong>
                  {hasClock && <Clock clockName={clockName} />}
                </strong>
              </Alert>
            )
            : (
              <Skeleton
                variant="rounded"
                width={243}
                height={88}
              />
            )
        }

      </div>
    );
  }
}
