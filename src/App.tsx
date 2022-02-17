import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { Button } from './components/Button';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  componentDidUpdate(_pervProps: {}, prevState: State) {
    const prev = prevState.clockName;
    const now = this.state.clockName;

    if (prev !== now) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prev} to ${now}`);
    }
  }

  setRandom = () => {
    this.setState({
      clockName: Math.random(),
    });
  };

  hiding = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  showing = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  render() {
    return (
      <div>
        { this.state.isClockVisible && (
          <Clock
            name={this.state.clockName}
          />
        )}

        <Button
          name="Hide clock"
          onClick={this.hiding}
        />
        <Button
          name="Show clock"
          onClick={this.showing}
        />

        <Button
          name="Set a random name"
          onClick={this.setRandom}
        />
      </div>
    );
  }
}

export default App;
