import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { ClockName } from './components/ClockName';

const watchNames = [
  'Omega',
  'Breguet',
  'Seiko',
  'Rolex',
  'Patek Philippe',
  'Chopard',
  'Cartier',
  'Tissot',
  'Hublot',
  'Swiss',
  'Orient',
];

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: watchNames[Math.round(Math.random() * 10)],
  };

  createRandomName = () => {
    this.setState({
      clockName: watchNames[Math.round(Math.random() * 10)],
    });
  };

  changeClockVisibility = () => {
    this.setState((prevState) => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          className="Clock__button Clock__button__setName"
          onClick={this.createRandomName}
        >
          Set random name
        </button>
        <div className="Clock">
          <ClockName name={clockName} />
          <div className="Clock__face-container">
            <div
              className="Clock__face"
              style={isClockVisible
                ? ({ transform: 'translateZ(50px) rotateX(0deg)' })
                : ({ transform: 'translateZ(-50px) rotateX(90deg' })}
            >
              <div>
                <p className="Clock__face__text" data-cy="time">
                  {isClockVisible && (
                    <Clock name={clockName} />
                  )}
                </p>
              </div>
              <div>
                <p
                  className="Clock__face__text Clock__face__text--off"
                >
                  OFF
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="Clock__button Clock__button__show-hide"
            onClick={this.changeClockVisibility}
          >
            {isClockVisible
              ? 'Hide Clock'
              : 'Show Clock'}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
