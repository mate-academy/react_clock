import React from 'react';
import { ConsoleClock } from '../ConsoleClock/ConsoleClock';
import { Button } from '../Button/Button';
import where from '../../image/4qb.gif';

import './Clock.scss';

export class Clock extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  getRandomNameClock = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  }

  render() {
    const getClock = this.state.isClockVisible
      ? <ConsoleClock name={this.state.clockName} />
      : <img src={where} alt="where" />;

    return (
      <>
        <p>
          Current time:
          {' '}
          <span className="info">{getClock}</span>
        </p>
        <div>
          <Button
            clockShow={this.showClock}
            clockHide={this.hideClock}
            clockGetRandomName={this.getRandomNameClock}
          />
        </div>
      </>
    );
  }
}
