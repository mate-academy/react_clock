import React from 'react';
interface ClockProps {
  name: string;
}

const Clock: React.FC<ClockProps> = ({ name }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

function getRandomName(): string {
  const randomNum = Math.floor(Math.random() * 10000);

  return `Clock-${randomNum}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
  oldClockName: string;
}

export class App extends React.Component<{}, AppState> {
  private nameTimerID: number = 0;

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

    this.nameTimerID = window.setInterval(() => {
      this.setState(prevState => ({
        oldClockName: prevState.clockName,
        clockName: getRandomName(),
      }));
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);

    window.clearInterval(this.nameTimerID);
  }

  componentDidUpdate(prevProps: {}, prevState: AppState) {
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
