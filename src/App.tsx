import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface Props {
  clockName: string;
}

class Clock extends React.Component<Props> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerClockId = 0;

  componentDidMount(): void {
    this.timerClockId = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { clockName: prevName } = prevProps;
    const { clockName: newName } = this.props;

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerClockId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerNameId = 0;

  handleContextClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleDocClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextClick);

    document.addEventListener('click', this.handleDocClick);

    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleContextClick);
    document.removeEventListener('click', this.handleDocClick);
    window.clearInterval(this.timerNameId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
