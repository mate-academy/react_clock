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
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <Paper
        sx={{
          padding: '60px',
          width: '40%',
          height: '130px',
          margin: '60px auto',
          textAlign: 'center',
          color: 'white',
          bgcolor: 'black',
        }}
        elevation={24}
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
