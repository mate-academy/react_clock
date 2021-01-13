import React from 'react';
import PropTypes from 'prop-types';
import { Clock } from './Clock';

import './App.scss';

const num = 10;

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.num = props.num;
  }

  state = {
    isClockVisible: true,
    clockName: 0,
  }

  generateRendom() {
    return Math.floor(Math.random() * Math.floor(this.num));
  }

  render() {
    const { isClockVisible, clockName } = this.state;
    const random = this.generateRendom(num);

    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock isClockVisible={isClockVisible} name={clockName} />
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          {' Show Clock '}
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          {' Hide Clock '}
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: random });
          }}
        >
          {' Set random name '}
        </button>
      </div>
    );
  }
}
App.propTypes = {
  num: PropTypes.number.isRequired,
};
