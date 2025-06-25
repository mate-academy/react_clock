import React from 'react';
import ReactDOM from 'react-dom/client';

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

interface ClockState {
  date: Date;
}

class Clock extends React.Component<ClockProps, ClockState> {
  timerID?: NodeJS.Timeout;

  state: ClockState = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    // console.log(`Clock time: ${this.state.date.toUTCString().slice(-12, -4)}`);
  }

  render() {
    const formattedTime = this.state.date.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' o tempo é '}
        <span className="Clock__time">{formattedTime}</span>
      </div>
    );
  }
}

interface AppState {
  hasClock: boolean;
  clockName: string;
  oldClockName: string;
}

class App extends React.Component<{}, AppState> {
  nameTimerID?: NodeJS.Timeout;

  state: AppState = {
    hasClock: false,
    clockName: 'Clock-0',
    oldClockName: 'Clock-0',
  };

  constructor(props: {}) {
    super(props);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.nameTimerID = setInterval(() => {
      this.setState(prevState => ({
        oldClockName: prevState.clockName,
        clockName: getRandomName(),
      }));
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);

    clearInterval(this.nameTimerID);
  }

  componentDidUpdate(_prevProps: {}, prevState: AppState) {
    if (prevState.clockName !== this.state.clockName) {
      // console.warn(
      //   `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      // );
    }
  }

  handleContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  handleClick() {
    this.setState({ hasClock: true });
  }

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>

        {/* Renderiza o componente Clock condicionalmente */}
        {this.state.hasClock && <Clock name={this.state.clockName} />}

        <p>Clique com o botão esquerdo para mostrar o relógio.</p>
        <p>Clique com o botão direito para ocultar o relógio.</p>
        <p>
          Verifique o console do desenvolvedor para mensagens de tempo e
          renomeação.
        </p>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}

export default App;
