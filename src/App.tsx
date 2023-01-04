import { Component } from 'react';
import './App.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import QueryBuilderTwoToneIcon from '@mui/icons-material/QueryBuilderTwoTone';
import { Clock } from './clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdChangeName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.timerIdChangeName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdChangeName);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }
  // this code stops the timer

  timerId = () => {
    window.setInterval(() => {
      this.state.clockName = getRandomName();
    }, 3300);
  };

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
      <Box
        sx={{
          display: 'block',
          my: 0,
          mx: 'auto',
          width: 350,
          height: 450,
        }}
      >
        <Paper
          elevation={3}
          variant="outlined"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'space-around',
            textAlign: 'center',
            p: 2,
            backgroundColor: 'lightblue',
          }}
        >
          <div className="App">
            <Typography
              fontWeight="bold"
              display="block"
              fontSize={35}
            >
              React clock
            </Typography>

            <QueryBuilderTwoToneIcon
              sx={{
                p: 2,
                my: 0,
                mx: 'auto',
              }}
            />

            {hasClock && <Clock name={clockName} />}
          </div>
        </Paper>
      </Box>
    );
  }
}
