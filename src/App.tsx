import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    name: 7,
  };

  changeVisible = (toDo:string) => {
    return toDo === 'show'
      ? () => this.setState({ isClockVisible: true })
      : () => this.setState({ isClockVisible: false });
  };

  changeName = () => this.setState({ name: Math.random() });

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible
            && <Clock name={this.state.name} />}
          <div>
            <button
              type="button"
              onClick={this.changeVisible('show')}
            >
              Show clock
            </button>
            <button
              type="button"
              onClick={this.changeVisible('hide')}
            >
              Hide clock
            </button>
            <button
              type="button"
              onClick={this.changeName}
            >
              Set a random name
            </button>
          </div>
        </p>
      </div>
    );
  }
}

type State = {
  isClockVisible: boolean,
  name: number
};

type Props = {};

export default App;
