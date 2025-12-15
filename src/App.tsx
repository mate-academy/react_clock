import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';
import { getRandomName } from './functions/function';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleHide = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleShow = () => {
    this.setState({ hasClock: true });
  };

  onChangeName = (newName: string) => {
    return this.setState({ clockName: newName });
  };

  timerName = 0;

  componentDidMount(): void {
    this.timerName = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('click', this.handleShow);
    document.addEventListener('contextmenu', this.handleHide);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleShow);
    document.removeEventListener('contextmenu', this.handleHide);
    clearInterval(this.timerName);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock name={this.state.clockName} newName={this.onChangeName} />
        )}
      </div>
    );
  }
}
