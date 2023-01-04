import { Component } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
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
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <Paper
        sx={{
          padding: '20px',
          width: '30%',
          height: '120px',
          margin: '50px auto',
          textAlign: 'center',
        }}
        elevation={16}
      >
        <div className="App">
          <h1>React clock</h1>
          {hasClock
            ? <Clock name={clockName} />
            : <CircularProgress />}
        </div>
      </Paper>
    );
  }
}
