import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 0,
  };

  clockVisibility = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  };

  changeName = () => (
    this.setState((prevState) => {
      const newName = Math.trunc(Math.random() * 100);

      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevState.name} to ${newName}`,
      );

      return {
        name: newName,
      };
    })
  );

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="App">
        <div className="App__container container">
          {isClockVisible
            ? <Clock name={name} />
            : 'What time is it? Click "Show clock"'
          }
          <div className="App__button button">
            <button
              className="button__item"
              type="button"
              onClick={this.clockVisibility}
            >
              {isClockVisible ? 'Hide clock' : 'Show clock'}
            </button>
            <button
              className="button__item"
              type="button"
              onClick={this.changeName}
            >
              Change name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
