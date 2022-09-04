import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {
  name: string;
};

type State = {
  date: Date;
  hasClock: boolean;
  clockName: any;
};

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export class App extends Component<Props, State> {
  state = {
    date: new Date(),
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();
      // eslint-disable-next-line
      console.info(date);
      this.setState({ date });
    }, 1000);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', () => {});
    document.removeEventListener('click', () => {});
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock } = this.state;
    const { date } = this.state;

    return (
      hasClock
    && (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">
            {this.state.clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            <Clock date={date} />
          </span>
        </div>
      </div>
    )
    );
  }
}
