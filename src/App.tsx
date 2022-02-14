import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { Button } from './components/Button';

interface State {
  isClockVisible: boolean,
  clockName: string,
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    // eslint-disable-next-line react/no-unused-state
    clockName: '',
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
        )
        }
        <Button
          name="Hide clock"
          onClick={this.hiding}
        />
        <Button
          name="Show clock"
          onClick={this.showing}
        />
      </div>
    );
  }
}

export default App;
