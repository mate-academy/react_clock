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

  render() {
    const сlockСomponent = this.state.isClockVisible
      ? <ConsoleClock name={this.state.clockName} />
      : <img src={where} alt="where" />;

    return (
      <>
        <p>
          Current time:
          {' '}
          <span className="info">{сlockСomponent}</span>
        </p>
        <div>
          <Button
            name="Show Clock"
            callback={() => {
              this.setState({
                isClockVisible: true,
              });
            }}
          />
          <Button
            name="Hide Clock"
            callback={() => {
              this.setState({
                isClockVisible: false,
              });
            }}
          />
          <Button
            name="Say my name"
            callback={() => {
              this.setState({
                clockName: Math.floor(Math.random() * 100),
              });
            }}
          />
        </div>
      </>
    );
  }
}
