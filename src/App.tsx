import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hide: boolean,
};

export class App extends Component<{}, State> {
  state = {
    hide: false,
  };

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({ hide: true });
    });

    document.addEventListener('contextmenu', () => {
      this.setState({ hide: false });
    });
  }

  render() {
    const {
      hide,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hide || <Clock />}

      </div>
    );
  }
}
