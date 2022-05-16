import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

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

  createRandomName() {
    this.setState({
      clockName: watchNames[Math.round(Math.random() * 10)],
    });

    const clockNameElem = document.querySelector<HTMLElement>('.Clock__name');

    if (clockNameElem) {
      clockNameElem.classList.add('Clock__name__slider');
      setTimeout(() => {
        clockNameElem.classList.remove('Clock__name__slider');
      }, 500);
    }
  }

  changeClockVisible() {
    const clockFace = document.querySelector<HTMLElement>('.Clock__face');

    if (this.state.isClockVisible) {
      this.setState({
        isClockVisible: false,
      });

      if (clockFace) {
        clockFace.style.transform = 'translateZ(-50px) rotateX(90deg)';
      }
    } else {
      this.setState({
        isClockVisible: true,
      });

      if (clockFace) {
        clockFace.style.transform = 'translateZ(50px) rotateX(0deg)';
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          className="Clock__button Clock__button__setName"
          onClick={() => this.createRandomName()}
        >
          Set random name
        </button>
        <div className="Clock">
          <h2 className="Clock__name">{this.state.clockName}</h2>
          <div className="Clock__face-container">
            <div className="Clock__face">
              <div>
                <p className="Clock__face__text" data-cy="time">
                  {this.state.isClockVisible
                    ? <Clock name={this.state.clockName} />
                    : null}
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
          <div className="Clock__buttons-container">
            <button
              type="button"
              className="Clock__button"
              onClick={() => this.changeClockVisible()}
              disabled={this.state.isClockVisible}
            >
              Show Clock
            </button>
            <button
              type="button"
              className="Clock__button"
              onClick={() => this.changeClockVisible()}
              disabled={!this.state.isClockVisible}
            >
              Hide Clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
