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

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: watchNames[Math.round(Math.random() * 10)],
  };

  createRandomName = () => {
    this.setState({
      clockName: watchNames[Math.round(Math.random() * 10)],
    });
  };

  changeClockVisible = () => {
    if (this.state.isClockVisible) {
      this.setState({
        isClockVisible: false,
      });
    } else {
      this.setState({
        isClockVisible: true,
      });
    }
  };

  render() {
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
          <ClockName name={this.state.clockName} />
          <div className="Clock__face-container">
            <div
              className="Clock__face"
              style={this.state.isClockVisible
                ? ({ transform: 'translateZ(50px) rotateX(0deg)' })
                : ({ transform: 'translateZ(-50px) rotateX(90deg' })}
            >
              <div>
                <p className="Clock__face__text" data-cy="time">
                  {this.state.isClockVisible && (
                    <Clock name={this.state.clockName} />
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
            onClick={this.changeClockVisible}
          >
            {this.state.isClockVisible
              ? ('Hide Clock')
              : ('Show Clock')}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
