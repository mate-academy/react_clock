// eslint-disable-next-line max-classes-per-file
import React from 'react';

class Clock extends React.Component {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        time: new Date().toUTCString().slice(-12, -4),
      });
      // eslint-disable-next-line no-console
      console.info('some message');
    }, 1000);
  }

  // eslint-disable-next-line react/sort-comp
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return this.props.visible ? (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    ) : null;
  }
}

class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = null;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
    this.timerId = window.setInterval(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock name={this.state.clockName} visible={this.state.hasClock} />
      </div>
    );
  }
}

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export default App;
