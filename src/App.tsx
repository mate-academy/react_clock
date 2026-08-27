import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  id = 0;

  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.id = window.setInterval(() => {
      const today = new Date().toUTCString().slice(-12, -4);

      this.setState({ today });
      // eslint-disable-next-line no-console
      console.log(today);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.id);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        <div className="Clock">
          <strong className="Clock__name">{name}</strong>

          {' time is '}

          <span className="Clock__time">{this.state.today}</span>
        </div>
      </div>
    );
  }
}

export class App extends React.Component {
  appId = 0;

  state = {
    name: 'Clock-0',
    hasClock: true,
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleLeftClick = (_event: MouseEvent) => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.appId = window.setInterval(() => {
      this.setState({ name: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.appId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  // This code starts a timer

  render() {
    const { name, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={name} />}
      </div>
    );
  }
}
