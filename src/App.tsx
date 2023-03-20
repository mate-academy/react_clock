import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('click', this.handleLeftMouseClick);

    document.addEventListener(
      'contextmenu',
      (event) => {
        this.handleRightMouseClick(event);
      },
    );
  }

  componentWillUnmount() {
    const {
      timerId,
      handleLeftMouseClick,
      handleRightMouseClick,
    } = this;

    window.clearInterval(timerId);
    window.removeEventListener('click', handleLeftMouseClick);
    window.removeEventListener('contextmenu', handleRightMouseClick);
  }

  handleLeftMouseClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  handleRightMouseClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {
          hasClock && (
            <Clock name={clockName} />
          )
        }

      </div>
    );
  }
}
