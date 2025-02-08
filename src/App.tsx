import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

const formatDate = (date: Date) => date.toUTCString().slice(-12, -4);

type ClockProps = {
  name: string;
};
type ClockState = {
  today: string;
};
class Clock extends React.PureComponent<ClockProps, ClockState> {
  state: ClockState = {
    today: formatDate(new Date()),
  };

  todayId = 0;

  componentDidMount(): void {
    this.todayId = window.setInterval(() => {
      this.setState({ today: formatDate(new Date()) });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    // eslint-disable-next-line no-console
    console.log(this.state.today);

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.todayId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}

type State = {
  hasClock: boolean;
  clockName: string;
};
export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameId = 0;

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextmenu);

    this.clockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextmenu);

    window.clearInterval(this.clockNameId);
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock ? <Clock name={this.state.clockName} /> : null}
      </div>
    );
  }
}
