import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};
type State = {
  clockShow: boolean;
  clockName: number;
};

class App extends React.Component <Props, State> {
  state: State = {
    clockShow: true,
    clockName: 0,
  };

  clockShowON = () => this.setState({ clockShow: true });

  clockShowOFF = () => this.setState({ clockShow: false });

  changeClockName = () => this.setState({ clockName: (Math.floor(Math.random() * 1000)) });

  render() {
    return (
      <div className="App">
        <div className="App__watch">
          <h1>React watch</h1>
          { this.state.clockShow
            ? <Clock name={this.state.clockName} />
            : <p></p> }
          <div>
            <button
              type="button"
              onClick={this.clockShowON}
              className="App__button App__button--show"
            >
              Show
            </button>

            <button
              type="button"
              onClick={this.clockShowOFF}
              className="App__button App__button--hide"
            >
              Hide
            </button>

            <button
              type="button"
              onClick={this.changeClockName}
              className="App__button App__button--name"
            >
              Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
