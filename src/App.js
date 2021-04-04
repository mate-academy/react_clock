/* eslint-disable global-require */
import React from 'react';

import './App.scss';
import { Clock } from './Clock';

export class App extends React.Component {
  state = {
    clockName: 'Random name',
    hiddenClock: false,
    hint: true,
  }

  componentDidUpdate(_, oldName) {
    const message = `The Clock was renamed from ${oldName.name}
    to ${this.state.name}`;

    if (oldName.name === this.state.name) {
      return;
    }
    // eslint-disable-next-line
    console.log(message);
  }

  render() {
    const { clockName, hiddenClock, hint } = this.state;
    const buttonHidden = () => {
      this.setState({
        hiddenClock: true,
      });
    };

    const mouseEnter = () => {
      this.setState({
        hint: false,
      });
    };

    const mouseLeave = () => {
      this.setState({
        hint: true,
      });
    };

    const buttonShow = () => {
      this.setState({
        hiddenClock: false,
      });
    };

    const setRandomName = () => {
      this.setState({
        clockName: Math.random().toString(36).substring(7),
      });
    };

    return (
      <div className="mainBox">
        <div
          className="spinner-border text-danger"
          hidden={!hiddenClock}
        />
        <h1>{!(hiddenClock) && <Clock />}</h1>
        <span hidden={hiddenClock}>
          Name clock:
          <h2>{clockName}</h2>
        </span>
        <div className="alert alert-success" hidden={!hiddenClock}>
          Натисніть старт, щоб включити годинник.
          <img src={require('./img/1.jpeg')} alt="logo" />
        </div>
        <button
          type="button"
          className="btn btn-danger margin"
          onClick={buttonHidden}
        >
          STOP/HIDE
        </button>
        <button
          type="button"
          className="btn btn-success margin"
          onClick={buttonShow}
        >
          START/SHOW
        </button>
        <button
          type="button"
          className="btn btn-light margin"
          onClick={setRandomName}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          CHAGE NAME
        </button>
        <div>
          <div />
          <img
            src={require('./img/3.jpg')}
            alt="logo"
            className="denus"
            hidden={hint}
          />
        </div>
      </div>
    );
  }
}
