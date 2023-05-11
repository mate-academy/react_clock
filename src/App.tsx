import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.mouseClickRight);

    document.addEventListener('click', this.mouseClickLeft);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.mouseClickRight);
  }

  mouseClickRight = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  mouseClickLeft = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
