import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: (Math.round(101 * Math.random())),
  };

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="clock">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={name} />}
        <button
          className="clock__button"
          type="button"
          onClick={() => {
            this.setState(state => ({
              isClockVisible: true,
            }));
          }}
        >
          Сlick to show
        </button>
        <button
          className="clock__button"
          type="button"
          onClick={() => {
            this.setState(state => ({
              isClockVisible: false,
            }));
          }}
        >
          Сlick to hide
        </button>
        <button
          className="clock__button"
          type="button"
          onClick={() => {
            const newName = (Math.round(1 + Math.random() * (100)));

            // eslint-disable-next-line no-console
            console.log(
              `The Clock was renamed from
                ${this.state.name}
                to
                ${newName}`,
            );

            this.setState({
              name: newName,
            });
          }}
        >
          Change name
        </button>
      </div>
    );
  }
}

export default App;
