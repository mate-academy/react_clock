import React from 'react';
import './App.scss';

// Функція для отримання випадкової назви годинника
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

// Компонент Clock
type ClockProps = {
  name: string;
};

type ClockState = {
  today: string;
};

export class Clock extends React.PureComponent<ClockProps, ClockState> {
  state: ClockState = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerValue = 0;

  componentDidMount(): void {
    this.timerValue = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ today: currentTime });

      // Друкуємо час у консоль
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerValue);
  }

  render() {
    const { name } = this.props;

    return (
      name && (
        <div className="Clock">
          <strong className="Clock__name">{name}</strong>
          {' time is '}
          <span className="Clock__time">{this.state.today}</span>
        </div>
      )
    );
  }
}

// Компонент App
type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleDocumentLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleDocumentLeftClick);
    document.addEventListener('click', this.handleDocumentRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleDocumentLeftClick);
    document.removeEventListener('click', this.handleDocumentRightClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
