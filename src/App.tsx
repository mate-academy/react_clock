import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  clockName: string,
  hasClock: boolean,
}

export class App extends Component<{}, AppState> {
  intervalId: number | null = null;

  state: Readonly<AppState> = {
    clockName: getRandomName(),
    hasClock: true,
  };

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.info('Clock component mounted');
    this.intervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 1000);

    document.addEventListener('contextmenu', this.handleRigthClick);
    document.addEventListener('click', this.handleleftClick);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      // eslint-disable-next-line no-console
      console.info('Clock component unmounted');
    }

    document.removeEventListener('contextmenu', this.handleRigthClick);
    document.removeEventListener('click', this.handleleftClick);
  }

  handleRigthClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  handleleftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const today = new Date();
    const { hasClock } = this.state;

    return (
      <div className={`Clock ${hasClock ? '' : 'hidden'}`}>
        <strong className="Clock__name">
          {this.state.clockName}
        </strong>
        {' time '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
