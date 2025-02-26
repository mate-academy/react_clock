import React, { Component } from 'react';

// Helper function to generate a random clock name
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

// Clock component that displays the time
interface ClockProps {
  name: string;
}

interface ClockState {
  time: Date;
}

class Clock extends Component<ClockProps, ClockState> {
  intervalId: NodeJS.Timeout | null = null;

  // Initialize state as a class property
  state: ClockState = {
    time: new Date(),
  };

  componentDidMount() {
    // Start the timer when the Clock is mounted
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
      // Log the time every second to the console
      // eslint-disable-next-line no-console
      console.log(this.state.time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    // Stop the timer when the Clock is unmounted
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    // Ensure no time is logged when the Clock is hidden
    // eslint-disable-next-line no-console
    console.log('Clock is hidden, timer stopped');
  }

  componentDidUpdate(prevProps: ClockProps) {
    // If the clock name has changed, log a message
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

// App component that contains the logic for showing/hiding the Clock
interface AppState {
  hasClock: boolean;
  clockName: string;
}

class App extends Component<{}, AppState> {
  // Initialize state as a class property
  state: AppState = {
    hasClock: true, // Start with the Clock visible
    clockName: 'Clock-0', // Default clock name
  };

  componentDidMount() {
    // Add event listener to hide the clock on right-click (context menu)
    document.addEventListener('contextmenu', this.hideClock);
    // Add event listener to show the clock on left-click (click)
    document.addEventListener('click', this.showClock);

    // Start a timer to change clockName every 3300ms
    setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    // Clean up event listeners when the component is unmounted
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault(); // Prevent showing the context menu
    this.setState({ hasClock: false }); // Hide the clock
  };

  showClock = () => {
    this.setState({ hasClock: true }); // Show the clock
  };

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>

        {/* Render Clock component only when hasClock is true */}
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
