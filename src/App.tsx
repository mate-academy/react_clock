import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { StateTypeInApp } from './types/StateTypeInApp';

export class App extends React.Component<{}, StateTypeInApp> {
  state = {
    isVisible: true,
    clockName: 'React Clock',
  };

  randomLetter = () => {
    const newArr: string[] = [];

    newArr.length = Math.floor(Math.random() * 20);

    for (let i = 0; i < newArr.length; i += 1) {
      newArr.splice(i, 1,
        String.fromCharCode(Math.floor(Math.random() * 65535)));
    }

    return (
      newArr.join('')
    );
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>{this.state.clockName}</h1>
        {isVisible && (<Clock name={this.state.clockName} />)}
        <button
          type="button"
          onClick={() => this.setState({ isVisible: false })}
          disabled={!isVisible}
        >
          Hide
        </button>
        {'  '}
        <button
          type="button"
          onClick={() => this.setState({ isVisible: true })}
          disabled={isVisible}
        >
          Appear
        </button>
        {'  '}
        <button
          type="button"
          onClick={() => this.setState(
            { clockName: this.randomLetter() },
          )}
        >
          random name
        </button>
      </div>
    );
  }
}
