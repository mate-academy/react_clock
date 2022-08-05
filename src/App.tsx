import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handlerClickClose);
    document.addEventListener('click', this.handlerClickOpen);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handlerClickClose);
    document.removeEventListener('click', this.handlerClickOpen);
  }

  handlerClickClose = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handlerClickOpen = (): void => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock />}
      </div>
    );
  }
}
