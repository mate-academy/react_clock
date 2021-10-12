/* eslint-disable no-console */
import React from 'react';

import './Clock.scss';

import { Props, State } from '../../types/ClockTypes';

export class Clock extends React.Component<Props, State> {
  private clockInterval?: number;

  state = {
    presentDate: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.clockInterval = window.setInterval(() => {
      this.setState({ presentDate: new Date().toLocaleTimeString() });

      console.log(this.state.presentDate);
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (this.props.name !== name) {
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const { presentDate } = this.state;

    return (
      <div className="clockField">
        <div className="clockField__clock">
          {presentDate}
        </div>
      </div>
    );
  }
}
