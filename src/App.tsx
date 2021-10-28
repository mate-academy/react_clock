import { Component } from 'react';
import './App.scss';
import Clock from './Clock';

type State = {
  isClockVisible: boolean
  status: string
};

class App extends Component<{}, State> {
  state = {
    isClockVisible: true,
    status: 'Enable',
  };

  updateStatus = () => {
    this.setState(prev => ({ status: prev.isClockVisible ? 'Enable' : 'Disable' }));
  };

  toggleClock = () => {
    this.setState(prev => ({ isClockVisible: !prev.isClockVisible }));
  };

  render() {
    const { isClockVisible, status } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleClock}>
          {isClockVisible ? 'hide' : 'show'}
        </button>
        <div>{`Clock status is ${status}`}</div>
        {isClockVisible && <Clock changeStatus={this.updateStatus} />}
      </div>
    );
  }
}

export default App;
