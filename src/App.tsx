import { Component } from 'react';
import './App.scss';

// Utility function to generate a random clock name
function getRandomName(): string {
  const value = Date.now().toString().slice(-4); // Get the last 4 digits of the current timestamp

  return `Clock-${value}`;
}

type ClockProps = {
  name: string;
};

type ClockState = {
  time: string;
};

class Clock extends Component<ClockProps, ClockState> {
  private timerId: number | null = null;

  constructor(props: ClockProps) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      time: new Date().toUTCString().slice(-12, -4), // Get UTC time and format
    };
  }

  componentDidMount() {
    // Start the timer when the component is mounted
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4); // Update the time every second

      this.setState({ time: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime); // Log time every second
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId); // Stop the timer when the component is unmounted
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

class App extends Component<{}, AppState> {
  private nameTimerId: number | null = null;

  constructor(props: {}) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      hasClock: true, // Initially set to show the Clock
      clockName: 'Clock-0', // Default clock name
    };
  }

  componentDidMount() {
    // Add event listeners for mouse clicks to show/hide the clock
    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);

    // Update clockName every 3300ms
    this.nameTimerId = window.setInterval(() => {
      const newName = getRandomName();

      // Set clock name with a check to avoid unnecessary state updates
      this.setState(prevState => {
        if (prevState.clockName !== newName) {
          return { clockName: newName };
        }

        return null; // No state change if name is the same
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);

    if (this.nameTimerId) {
      window.clearInterval(this.nameTimerId); // Clean up the interval when the component is unmounted
    }
  }

  // Show the clock when a left click happens
  showClock = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  // Hide the clock when a right click happens
  hideClock = (event: MouseEvent) => {
    event.preventDefault(); // Prevent showing the context menu
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
