import React from 'react';
import { Clock } from './components/Clock';
import { Button } from './components/Button';

import '../node_modules/bulma/css/bulma.css';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'React Clock',
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  setName = () => {
    const currentName = this.state.clockName;
    const newName = Math.round(Math.random() * 100);

    this.setState({ clockName: newName });

    // eslint-disable-next-line
    console.log(`The Clock was renamed from '${currentName}' to '${newName}'`);
  }

  render() {
    return (
      <section className="section columns is-centered">
        <div className="column is-narrow">
          <div className="box has-text-centered is-size-1">
            <div className="m-5">{this.state.clockName}</div>

            {this.state.isClockVisible
              ? <Clock />
              : 'The clock has been hidden'
            }

            <div className="buttons are-large">
              <Button event={this.showClock} name="Show Clock" />
              <Button event={this.hideClock} name="Hide Clock" />
              <Button event={this.setName} name="Set Name" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
