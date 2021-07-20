import React from 'react';
import Button from '@material-ui/core/Button';
import { Clock } from './Components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: Math.random(),
    isClockVisible: false,
  }

  render() {
    const { isClockVisible } = this.state;
    const show = () => this.setState({ isClockVisible: true });
    const hide = () => this.setState({ isClockVisible: false });
    const random = () => this.setState({ clockName: Math.random() });

    return (
      <div className="app">
        <div className="timer-block">
          <p className="timer-block__title">Current time:</p>
          {isClockVisible && <Clock name={this.state.clockName} />}
        </div>
        <div className="control-buttons">
          <Button
            type="button"
            onClick={show}
            variant="contained"
            color="primary"
          >
            Show Clock
          </Button>
          <Button
            type="button"
            onClick={hide}
            variant="contained"
            color="secondary"
          >
            Hide Clock
          </Button>
          <Button
            type="button"
            onClick={random}
            variant="outlined"
            color="secondary"
          >
            Set random name
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
