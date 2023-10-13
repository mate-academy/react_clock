import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

interface IState {
  hasClock: boolean,
  clockName: string,
}

export class App extends Component<{}, IState> {
  state: IState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.onHide();
    });

    document.addEventListener('click', (e) => {
      e.preventDefault();
      this.onShow();
    });
  }

  onShow = () => {
    this.setState({ hasClock: true });
  };

  onHide = () => {
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
