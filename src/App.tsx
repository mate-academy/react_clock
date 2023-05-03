import { Component } from 'react';
import './App.scss';
import Paper from '@mui/material/Paper';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handlerClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() }); // consol
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handlerClick);
  }

  handlerClick = () => (
    this.setState({ hasClock: true })
  );

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <Paper
        elevation={12}
      >
        <div className="App">
          <h1>React clock</h1>

          {hasClock && (<Clock clockName={clockName} />)}
        </div>
      </Paper>
    );
  }
}
