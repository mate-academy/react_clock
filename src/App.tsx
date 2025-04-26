import React, { Component } from 'react';

// Utility function to generate random names
function getRandomName(): string {
  return `Clock-${Math.floor(Math.random() * 100)}`;
}

// Clock Component
interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
}

class Clock extends Component<ClockProps, ClockState> {
  timerId: NodeJS.Timeout | null = null;

  constructor(props: ClockProps) {
    super(props);
    this.state = {
      currentTime: new Date().toUTCString().slice(-12, -4), // Get current UTC time
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime); // Log the time every second
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
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.currentTime}</h2>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

// App Component
interface AppState {
  hasClock: boolean;
  clockName: string;
}

class App extends Component<{}, AppState> {
  nameUpdateInterval: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      hasClock: true,
      clockName: 'Clock-0',
    };

    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.nameUpdateInterval = setInterval(() => {
      const newName = getRandomName();
      this.setState((prevState) => ({
        clockName: newName,
      }));
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);

    if (this.nameUpdateInterval) {
      clearInterval(this.nameUpdateInterval);
      this.nameUpdateInterval = null;
    }
  }

  handleContextMenu(event: MouseEvent) {
    event.preventDefault(); // Prevent the context menu from appearing
    this.setState({ hasClock: false }); // Hide the Clock
  }

  handleClick() {
    this.setState({ hasClock: true }); // Show the Clock
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div>
        <h1>React Clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
