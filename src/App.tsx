import { Component } from 'react';
import {
  Box,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Clock } from './components/Clock';

import './App.scss';

interface State {
  clockName: string
  hasClock: boolean
}

const getRandomName = (): string => {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
};

export const themeLight = createTheme({
  palette: {
    background: {
      default: '#e4f0e2',
    },
  },
});

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenuClick);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenuClick);
  }

  handleContextMenuClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  handleClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  getColorDigits = () => {
    return this.state.clockName.slice(6);
  };

  handleColor = () => {
    const colorDigits = this.getColorDigits();
    const color = `#ff${colorDigits}`;
    const primaryColor = +colorDigits < 4000 ? '#ffffff' : '#000000';

    // eslint-disable-next-line no-console
    console.log('color', color);

    // changes theme according to last 4 clock name digits
    const theme = createTheme({
      palette: {
        background: {
          default: color,
        },
        text: {
          primary: primaryColor,
        },
      },
    });

    return theme;
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <ThemeProvider theme={this.handleColor()}>
          <CssBaseline />

          <Box
            sx={{
              textAlign: 'center',
              border: 5,
              borderColor: +this.getColorDigits() < 4000
                ? '#ffffff' : '#000000',
              padding: 20,
              margin: 20,
            }}
          >
            <h1>React clock</h1>

            {hasClock && (<Clock name={clockName} />)}
          </Box>
        </ThemeProvider>
      </div>
    );
  }
}
