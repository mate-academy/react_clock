import { PureComponent } from 'react';
import './App.scss';
import { Clock } from './Clock';
import { getRandomName } from './service/getRandomName';

type State = {
  clockName: string;
  hasClock: boolean;
};

type Props = {
};

export class App extends PureComponent<Props, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockId = 0;

  componentDidMount(): void {
    this.clockId = window.setInterval(() => {
      const newClockName = getRandomName();

      this.setState({ clockName: newClockName });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName
      && prevProps !== null
      && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockId);
  }

  handleRightClick = () => {
    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}
