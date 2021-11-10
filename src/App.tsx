import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

interface State {
  isClockVisible: boolean,
}

class App extends React.Component<Props, State> {
  state: State = {
    isClockVisible: false,
  };

  handleClockClick = () => {
    this.setState({ isClockVisible: true });
  };

  handlePageClick = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        {!(isClockVisible)
          ? <h1 className="Heading">React clock is not here</h1>
          : <Clock />}
        <div>
          <button
            className="Button Button--show"
            type="button"
            onClick={() => this.handleClockClick()}
          >
            Show Clock
          </button>
          <button
            className="Button Button--hide"
            type="button"
            onClick={() => this.handlePageClick()}
          >
            Hide Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
